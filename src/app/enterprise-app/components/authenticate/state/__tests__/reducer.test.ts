import { setTokenAction, setUserAction } from "../actions";
import { Action, initialState, reducer } from "../reducer";

describe("reducers", () => {
  it("should return the initial state", () => {
    expect(reducer(initialState, { type: Action.DEFAULT, data: {} })).toEqual(initialState);
  });

  it("should update username", () => {
    expect(reducer(initialState, setUserAction("u123"))).toEqual({ ...initialState, username: "u123" });
  });

  it("should update token", () => {
    const sampleToken = {
      id: "1",
      createdAt: "2",
      expiresAt: "3"
    };
    expect(reducer(initialState, setTokenAction(sampleToken))).toEqual({ ...initialState, token: sampleToken });
  });
});
