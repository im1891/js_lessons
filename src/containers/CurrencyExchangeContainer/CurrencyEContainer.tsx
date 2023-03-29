import React from 'react';
import CurrencyExchange from '../../components/CurrencyExchange/CurrencyExchange';
import {CurrencyType} from '../../redux/currencyReducer';
import {useAppDispatch, useAppSelector} from "../../redux/state";
import {ChangeAction, ChangeCurrencyField, СhangeCurrentCurrency} from "../../redux/actions";

export const CurrencyEContainer = () => {

    const currencyState = useAppSelector(state => state.currency)
    const dispatch = useAppDispatch()

    let currencyRate: number = 0;
    const currenciesName = currencyState.currencies.map((currency: CurrencyType) => {
        if (currency.currencyName === currencyState.currentCurrency) {
            currencyRate = currencyState.isBuying ? currency.buyRate : currency.sellRate;
        }
        return currency.currencyName;
    });

    const changeCurrencyField = (e: React.ChangeEvent<HTMLInputElement>) => {

        let value = e.currentTarget.value;
        if (!isFinite(+value)) return;
        if (e.currentTarget.dataset.currency) {
            const trigger: string = e.currentTarget.dataset.currency;
            if (trigger === 'byn') {
                if (value === '') {
                    dispatch(ChangeCurrencyField(value, value))
                } else {
                    dispatch(ChangeCurrencyField(value, (+Number(value).toFixed(2) / currencyRate).toFixed(2)))
                }
            } else {
                if (value === '') {
                    dispatch(ChangeCurrencyField(value, value))
                } else {
                    dispatch(ChangeCurrencyField((+Number(value).toFixed(2) * currencyRate).toFixed(2), value))
                }
            }
        }
    };
    const changeAction = (e: React.MouseEvent<HTMLSpanElement>) => {
        e.currentTarget.dataset.action === 'buy' ? dispatch(ChangeAction(true)) : dispatch(ChangeAction(false));
    };

    const changeCurrentCurrency = (e: React.MouseEvent<HTMLLIElement>) => {
        e.currentTarget.dataset.currency && dispatch(СhangeCurrentCurrency(e.currentTarget.dataset.currency))
    }
        return (
            <>
                <CurrencyExchange
                    currenciesName={currenciesName}
                    currentCurrency={currencyState.currentCurrency}
                    currencyRate={currencyRate}
                    isBuying={currencyState.isBuying}
                    amountOfBYN={currencyState.amountOfBYN}
                    amountOfCurrency={currencyState.amountOfCurrency}
                    changeCurrencyField={changeCurrencyField}
                    changeAction={changeAction}
                    changeCurrentCurrency={changeCurrentCurrency}
                />
            </>
        );
}



