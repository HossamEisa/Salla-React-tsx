import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import HomeView from './HomeView';
import store from '../store/store'; // assuming you have a Redux store configured

describe('HomeView component', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Clear all mocks before each test
  });

  it('renders loading state initially', async () => {
    render(
      <Provider store={store}>
        <HomeView />
      </Provider>
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
    await waitFor(() => expect(store.dispatch).toHaveBeenCalledTimes(1));
  });

  // it('renders error message if products fetch fails', async () => {
  //   jest.spyOn(store, 'getState').mockReturnValueOnce({ productListStatus: 'failed' });

  //   render(
  //     <Provider store={store}>
  //       <HomeView />
  //     </Provider>
  //   );

  //   expect(screen.getByText('Error loading products')).toBeInTheDocument();
  //   expect(store.dispatch).toHaveBeenCalledTimes(1);
  // });

  // it('renders products list', async () => {
  //   const products = [{ id: 1, name: 'Product 1' }, { id: 2, name: 'Product 2' }];
  //   jest.spyOn(store, 'getState').mockReturnValueOnce({ productListStatus: 'succeeded', productsList: products });

  //   render(
  //     <Provider store={store}>
  //       <HomeView />
  //     </Provider>
  //   );

  //   await waitFor(() => expect(screen.getByText('Product 1')).toBeInTheDocument());
  //   await waitFor(() => expect(screen.getByText('Product 2')).toBeInTheDocument());
  //   expect(store.dispatch).toHaveBeenCalledTimes(1);
  // });

  // it('filters products by name', async () => {
  //   const products = [{ id: 1, name: 'Apple' }, { id: 2, name: 'Banana' }];
  //   jest.spyOn(store, 'getState').mockReturnValueOnce({ productListStatus: 'succeeded', productsList: products });

  //   render(
  //     <Provider store={store}>
  //       <HomeView />
  //     </Provider>
  //   );

  //   await waitFor(() => expect(screen.getByText('Apple')).toBeInTheDocument());
  //   await waitFor(() => expect(screen.getByText('Banana')).toBeInTheDocument());

  //   userEvent.type(screen.getByRole('textbox'), 'App');
  //   await waitFor(() => expect(screen.queryByText('Banana')).not.toBeInTheDocument());
  // });
});
