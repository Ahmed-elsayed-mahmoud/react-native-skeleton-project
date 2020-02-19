import { IPayload } from "@reactnativeskeletonproject/services/networking/api-types"

export type HTTP_METHOD = "GET" | "POST"

export type IMapper<T> = (data: IPayload) => T

export interface IEndpoint<TData, TResponse> {
  path: string
  method: HTTP_METHOD
  pathParams?: string[] // Mutable additional url path parameters (eg. document ID) will be added at the end of the endpoint path.
  data?: TData
  mapper?: IMapper<TResponse>
  response?: TResponse
}
