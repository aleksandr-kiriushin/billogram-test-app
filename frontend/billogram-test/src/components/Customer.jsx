import React, { Component } from 'react';
import DisplayObject from './DisplayObject';
/*
{
    "customer_no": 10032,
    "name": "Peter Jonsson",
    "company_type": "individual",
    "org_no": "",
    "contact": {
        "name": "Peter Jonsson",
        "email": "peter.jonsson@example.com"
    },
    "address": {
        "street_address": "Lavendelväg 27",
        "zipcode": "12345",
        "city": "Stadby",
        "country": "SE"
    }
}
*/

export default class Customer extends Component {
    render() {
        const customer = JSON.parse(this.props.data);
        const title = `Customer #${customer.customer_no}`;
        const content = `${customer.name} (${customer.company_type})
${customer.contact.name} ${customer.contact.email}`;
        return <DisplayObject title={title} content={content}/>
    }
}
