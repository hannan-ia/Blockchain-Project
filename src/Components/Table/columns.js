import React from 'react';

const Columns = [
	{
		// Make an expander cell
		Header: () => null, // No header
		id: 'expander', // It needs an ID
		Cell: ({ row }) => (
			// Use Cell to render an expander for each row.
			// We can use the getToggleRowExpandedProps prop-getter
			// to build the expander.
			<span {...row.getToggleRowExpandedProps()}>{row.isExpanded ? '👇' : '👉'}</span>
		),
	},
	{
		Header: 'Your transactions',
		columns: [
			{
				Header: 'From address',
				accessor: 'fromAddress',
				maxWidth: '200px',
			},
			{
				Header: 'To address',
				accessor: 'toAddress',
				maxWidth: '200px',
			},
			{
				Header: 'Amount',
				accessor: 'amount',
				maxWidth: '200px',
			},
			{
				Header: 'TimesTamp',
				accessor: 'timesTamp',
				maxWidth: '200px',
			},
			{
				Header: 'HashTransaction',
				accessor: 'hashTransaction',
				maxWidth: '200px',
			},
			{
				Header: 'Signature',
				accessor: 'signature',
				maxWidth: '200px',
			},
		],
	},
];

export default Columns;
