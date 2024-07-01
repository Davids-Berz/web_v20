import {CartItem} from "../../models/cartItem";
import {createReducer, on} from "@ngrx/store";
import {add, remove, total} from "./item.action";

export interface ItemsState {
  items: CartItem[];
  total: number;
}

export const initialState: ItemsState = {
  items: JSON.parse(sessionStorage.getItem('cart') || '[]'),
  total: 0
};

export const _itemsReducer = createReducer(
  initialState,
  on(add, (state , {product}) => {
    const hasItem = state.items.find((i: CartItem) => i.product.id === product.id);
    if (hasItem) {
      return {
        ...state,
        items: state.items.map(i =>
          i.product.id === hasItem.product.id
            ? {...i, quantity: i.quantity + 1}
            : i
        )
      };
    } else {
      return {
        ...state,
        items: [...state.items, {product: {...product}, quantity: 1}]
      };
    }
  }),
  on(remove, (state, {id}) => {
    return {
      ...state,
      items: state.items.filter(i => i.product.id !== id)
    };
  }),
  on(total, state => {
    const newTotal = state.items.reduce(
      (acc, i) => acc + i.product.price * i.quantity,
      0
    );
    return {
      ...state,
      total: newTotal
    };
  })
);

export function itemsReducer(state: ItemsState | undefined, action: any) {
  return _itemsReducer(state, action);
}
