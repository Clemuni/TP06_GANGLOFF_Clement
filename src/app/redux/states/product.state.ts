import { AddProduct } from '../actions/product.action';
import { CartProduct } from '../../ts/types';
import { Action, Selector, State, StateContext } from '@ngxs/store';

@State<CartProduct>({
  name: 'cartProduct',
  defaults: {
    products: [],
  },
})
export class ProductState {
  @Selector()
  static getProducts(state: CartProduct) {
    return state.products;
  }

  @Action(AddProduct)
  add(
    { getState, patchState }: StateContext<CartProduct>,
    { payload }: AddProduct
  ) {
    const state = getState();
    patchState({
      products: [...state.products, payload],
    });
  }
}
