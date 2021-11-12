import React from 'react';
import '@testing-library/jest-dom';

import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';
import { render, screen, waitFor } from '@testing-library/react';


import Article from './Article';

const testArticle = {
    id: 'aMqwd',
    headline: 'headline',
    createdOn: '2020',
    summary: 'summary',
    body: 'body'
}

const testArticleAuthor = {
    id: 'aMqwd',
    headline: 'headline',
    createdOn: '2023',
    summary: 'summary',
    body: 'body',
    author: 'author'
}

test('renders component without errors', () => {
    render (<Article article={testArticle}/>)
});

test('renders headline, author from the article when passed in through props', ()=> {
    render (<Article article={testArticleAuthor}/>)

    const headline = screen.getByText("headline")
    const author = screen.getByText("By author")

    expect(headline).toBeInTheDocument()
    expect(author).toBeInTheDocument()
});

test('renders "Associated Press" when no author is given', ()=> {
    render (<Article article={testArticle}/>)

    const author = screen.getByText("By Associated Press")

    expect(author).toBeInTheDocument()
});

test('executes handleDelete when the delete button is pressed', async ()=> {
    const displayFunc = jest.fn()

    render (<Article article={testArticle} handleDelete={displayFunc}/>)

    const button = screen.getByTestId("deleteButton")
    userEvent.click(button)

    await waitFor( () => {
        expect(displayFunc).toHaveBeenCalled()
    })
});

//Task List:
//1. Complete all above tests. Create test article data when needed.