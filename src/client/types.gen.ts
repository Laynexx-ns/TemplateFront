// This file is auto-generated by @hey-api/openapi-ts

export type dto_AuthTokens = {
    access?: dto_Token;
    refresh?: dto_Token;
};

export type dto_HTTPError = {
    code?: number;
    message?: string;
};

export type dto_Token = {
    expires?: string;
    token?: string;
};

export type dto_UserRegister = {
    email: string;
    password: string;
    username: string;
};

export type dto_UserRegisterResponse = {
    tokens?: dto_AuthTokens;
    user?: dto_UserReturn;
};

export type dto_UserReturn = {
    email?: string;
    id?: string;
    role?: string;
    username?: string;
    verified_email?: boolean;
};

export type PostUserRegisterData = {
    /**
     * User registration body object
     */
    body: dto_UserRegister;
};

export type PostUserRegisterResponse = (dto_UserRegisterResponse);

export type PostUserRegisterError = (dto_HTTPError);