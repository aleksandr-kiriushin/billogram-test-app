""" App for test Billogram API """

import asyncio

import aiohttp.web
from billogram_api import BillogramAPI

from backend.src import settings

routes = aiohttp.web.RouteTableDef()

@routes.get('/customers')
async def customers_handler(request):  # pylint: disable=unused-argument
    customers = []
    async with BillogramAPI(
            settings.API_USER,
            settings.API_PASSWORD,
            api_base=settings.API_URL,
    ) as api:

        query = api.customers.query()
        async for customer in query.iter_all():
            customer = await customer.data()
            customers.append(customer)
    return aiohttp.web.json_response(customers)


if __name__ == '__main__':
    app = aiohttp.web.Application()
    app.router.add_routes(routes)
    aiohttp.web.run_app(app, port=settings.SERVER_PORT)
