// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 *  - create an ordered group of docs
 *  - render a sidebar for each doc of that group
 *  - provide next/previous navigation
 *
 * The sidebars can be generated from the filesystem, or explicitly defined here.
 *
 * Create as many sidebars as you want.
 *
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
    docsSidebar: [
        {
            type: 'category',
            label: 'Offers',
            collapsible: true,
            collapsed: true,
            items: [
                'pro-parts-api-offer/api-zf-pro-parts-offers',
                'pro-parts-api-offer/get-offers-product-offer-reference',
                'pro-parts-api-offer/get-offers',
                'pro-parts-api-offer/put-offer',
                'pro-parts-api-offer/put-offers',
            ],
        },
        {
            type: 'category',
            label: 'Orders',
            collapsible: true,
            collapsed: true,
            items: [
                'pro-parts-api-order/api-zf-pro-parts-orders',
                'pro-parts-api-order/get-orders-merchant-order-reference',
                'pro-parts-api-order/get-orders',
                'pro-parts-api-order/patch-order-merchant-order-reference-cancel',
                'pro-parts-api-order/patch-order-merchant-order-reference-cancel-items',
                'pro-parts-api-order/patch-order-merchant-order-reference-confirm-availability',
                'pro-parts-api-order/patch-order-merchant-order-reference-confirm-availability-items',
                'pro-parts-api-order/patch-order-merchant-order-reference-place-documents',
                'pro-parts-api-order/patch-order-merchant-order-reference-place-documents-items',
                'pro-parts-api-order/patch-order-merchant-order-reference-confirm-delivery',
                'pro-parts-api-order/patch-order-merchant-order-reference-confirm-delivery-items',
                'pro-parts-api-order/patch-order-merchant-order-reference-ship',
                'pro-parts-api-order/patch-order-merchant-order-reference-ship-items',
            ],
        },
        {
            type: 'category',
            label: 'Partners',
            collapsible: true,
            collapsed: true,
            items: [
                'pro-parts-api-partner/api-zf-pro-parts-partners',
                'pro-parts-api-partner/generate-sso-token',
            ],
        },
        {
            type: 'category',
            label: 'Ping',
            collapsible: true,
            collapsed: true,
            items: [
                'pro-parts-api-ping/api-zf-pro-parts-ping',
                'pro-parts-api-ping/get-ping',
            ],
        },
    ],
};

export default sidebars;
