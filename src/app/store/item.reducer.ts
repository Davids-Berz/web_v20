import {CartItem} from "../models/cartItem";
import {createReducer, on} from "@ngrx/store";
import {add, remove, total} from "./items.action";
import {state} from "@angular/animations";


export interface ItemsState {
  items: CartItem[],
  total: number
}

export const initialState: ItemsState = {
  items: JSON.parse(sessionStorage.getItem('cart') || '[]'),
  total: 0
}

export const _itemsReducer = createReducer(
  initialState,
  on(add, (state, {product}) => {
    const hasItem = state.items.find((i: CartItem) => i.product.id === product.id);
    if (hasItem) {
      return {
        items: state.items.map(i => {
          if (i.product.id === hasItem.product.id) {
            return {
              ...i, quantity: i.quantity++
            }
          }
          return i;
        }),
        total: state.total
      }
    } else {
      /*Mutabilidad (...) en producto  para no pasar la misma instancia, crear otra nueva instancia*/
      return {
        items: state.items = [...state.items, {product: {...product}, quantity: 1}],
        total: state.total
      }
    }
  }),
  on(remove, (state, {id}) => {
    return {
      items: state.items = state.items.filter(i => i.product.id != id),
      total: state.total
    }
  }),
  on(total, state => {
    return {
      items: state.items,
      total: state.total = state.items.reduce(
        (acc, i) => acc + (i.product.price * i.quantity), 0)
    }
  })
)
