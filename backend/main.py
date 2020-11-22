""" App for test Billogram API """

import asyncio

from backend.src import settings
from billogram_api import BillogramAPI


async def main():
    async with BillogramAPI(
            settings.API_USER,
            settings.API_PASSWORD,
            api_base=settings.API_URL,
    ) as api:

        query = api.customers.query()
        async for customer in query.iter_all():
            print(await customer.data())

if __name__ == '__main__':
    loop = asyncio.get_event_loop()
    loop.run_until_complete(main())
