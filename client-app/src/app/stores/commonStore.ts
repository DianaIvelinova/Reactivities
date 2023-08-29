import { makeAutoObservable } from "mobx";
import { ServerError } from "../models/serverError";

export default class CommonStore {
    error: ServerError | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    setsServerError(error: ServerError) {
        this.error = error;
    }
}