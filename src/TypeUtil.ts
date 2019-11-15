import { StrategyOptions, StrategyOptionsWithRequest } from "passport-oauth2";
import { Request } from 'express';

type Optionalize<T, U extends keyof T> = Omit<T, U> & Partial<Pick<T, U>>;

export type ExtendableStrategyOptions<TMixin> = Optionalize<
    StrategyOptions,
    'authorizationURL' | 'tokenURL'
> & TMixin;

export type ExtendableStrategyOptionsWithRequest<TMixin> = Optionalize<
    StrategyOptionsWithRequest,
    'authorizationURL' | 'tokenURL'
> & TMixin;

export type OAuth2VerifyCallback<TUser = object, TInfo = object> = (
    err?: Error | null,
    user?: TUser,
    info?: TInfo
) => void;

export type OAuth2VerifyFunction<TProfile, TUser, TInfo> = (
    accessToken: string,
    refreshToken: string,
    profile: TProfile,
    verified: OAuth2VerifyCallback<TUser, TInfo>
) => void;


export type OAuth2VerifyFunctionWithResults<TResults, TProfile, TUser, TInfo> = (
    accessToken: string,
    refreshToken: string,
    results: TResults,
    profile: TProfile,
    verified: OAuth2VerifyCallback<TUser, TInfo>
) => void;


export type OAuth2VerifyFunctionWithRequest<TProfile, TUser, TInfo> = (request: Request,
    accessToken: string,
    refreshToken: string,
    profile: TProfile,
    verified: OAuth2VerifyCallback<TUser, TInfo>
) => void;


export type OAuth2VerifyFunctionWithRequestAndResults<TResults, TProfile, TUser, TInfo> = (
    request: Request,
    accessToken: string,
    refreshToken: string,
    results: TResults,
    profile: TProfile,
    verified: OAuth2VerifyCallback<TUser, TInfo>
) => void;
