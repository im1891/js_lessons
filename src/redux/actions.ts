export enum ACTIONS_TYPE {
    CHANGE_CURRENCY_FIELD_TYPE = 'CurrencyExchange/CHANGE_CURRENCY_FIELD_TYPE',
    CHANGE_CHANGE_ACTION = 'CurrencyExchange/CHANGE_CHANGE_ACTION',
    CHANGE_CURRENT_CURRENCY = 'CurrencyExchange/CHANGE_CURRENT_CURRENCY',
}


type ChangeCurrencyFieldType = ReturnType<typeof ChangeCurrencyField>
export const ChangeCurrencyField = (amountOfBYN: string, amountOfCurrency: string) => ({
    type: ACTIONS_TYPE.CHANGE_CURRENCY_FIELD_TYPE,
    amountOfCurrency,
    amountOfBYN
} as const);

type ChangeActionType = ReturnType<typeof ChangeAction>
export const ChangeAction = (isBuying: boolean) => ({
    type: ACTIONS_TYPE.CHANGE_CHANGE_ACTION,
    isBuying
} as const);

type ChangeCurrentCurrencyType = ReturnType<typeof СhangeCurrentCurrency>
export const СhangeCurrentCurrency = (currentCurrency: string) => ({
    type: ACTIONS_TYPE.CHANGE_CURRENT_CURRENCY,
    currentCurrency
} as const)

export type CurrencyReducersTypes = ChangeCurrencyFieldType | ChangeActionType | ChangeCurrentCurrencyType;