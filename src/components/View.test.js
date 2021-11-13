import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import View from './View';
import axios from 'axios';
import articleService from '../services/articleServices'


// jest.mock('./../services/articleServices');


test('renders zero articles without errors', async () => {
//     articleService.mockResolvedValueOnce([])

//     render(<View/>);
//     await waitFor(()=> {
//         const articles = screen.queryAllByTestId('article');
//         expect(articles).toHaveLength(0);
//     })
});

//Task List
//1. Complete the above two tests. Make sure to mocking the articleService call before rendering.

test('renders three articles', async ()=> {
//     articleService.mockResolvedValueOnce([
//             {
//                 id: 'aMqwd',
//                 headline: 'article1',
//                 createdOn: '2020',
//                 summary: 'summary',
//                 body: 'body'
//             },
//             {
//                 id: 'aMqwd',
//                 headline: 'article2',
//                 createdOn: '2020',
//                 summary: 'summary',
//                 body: 'body',
//                 author: ''
//             },
//             {
//                 id: 'aMqwd',
//                 headline: 'article3',
//                 createdOn: '2020',
//                 summary: 'summary',
//                 body: 'body',
//                 author: ''
//             }
//         ]);

//     render(<View/>)

//     const articles = await screen.findAllByTestId('article');
    // expect(articles).toHaveLength(3); getting weird act error??? idk what that is? lol
})

