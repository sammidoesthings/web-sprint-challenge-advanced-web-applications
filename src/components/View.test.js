import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import View from './View';


const testArticle = {
    id: 'aMqwd',
    headline: 'I am a headline!',
    createdOn: '2020',
    author: 'Samantha',
    summary: 'summary',
    body: 'body'
}

test("renders zero articles without errors", async () => {
});

test("renders three articles without errors", async ()=> {
});

//Task List
//1. Complete the above two tests. Make sure to mocking the articleService call before rendering.

