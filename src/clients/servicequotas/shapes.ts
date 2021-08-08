/**
 * @schema ServiceQuotasAssociateServiceQuotaTemplateRequest
 */
export interface ServiceQuotasAssociateServiceQuotaTemplateRequest {
}

/**
 * Converts an object of type 'ServiceQuotasAssociateServiceQuotaTemplateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceQuotasAssociateServiceQuotaTemplateRequest(obj: ServiceQuotasAssociateServiceQuotaTemplateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceQuotasAssociateServiceQuotaTemplateResponse
 */
export interface ServiceQuotasAssociateServiceQuotaTemplateResponse {
}

/**
 * Converts an object of type 'ServiceQuotasAssociateServiceQuotaTemplateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceQuotasAssociateServiceQuotaTemplateResponse(obj: ServiceQuotasAssociateServiceQuotaTemplateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceQuotasDeleteServiceQuotaIncreaseRequestFromTemplateRequest
 */
export interface ServiceQuotasDeleteServiceQuotaIncreaseRequestFromTemplateRequest {
  /**
   * @schema ServiceQuotasDeleteServiceQuotaIncreaseRequestFromTemplateRequest#ServiceCode
   */
  readonly serviceCode?: string;

  /**
   * @schema ServiceQuotasDeleteServiceQuotaIncreaseRequestFromTemplateRequest#QuotaCode
   */
  readonly quotaCode?: string;

  /**
   * @schema ServiceQuotasDeleteServiceQuotaIncreaseRequestFromTemplateRequest#AwsRegion
   */
  readonly awsRegion?: string;

}

/**
 * Converts an object of type 'ServiceQuotasDeleteServiceQuotaIncreaseRequestFromTemplateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceQuotasDeleteServiceQuotaIncreaseRequestFromTemplateRequest(obj: ServiceQuotasDeleteServiceQuotaIncreaseRequestFromTemplateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceCode': obj.serviceCode,
    'QuotaCode': obj.quotaCode,
    'AwsRegion': obj.awsRegion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceQuotasDeleteServiceQuotaIncreaseRequestFromTemplateResponse
 */
export interface ServiceQuotasDeleteServiceQuotaIncreaseRequestFromTemplateResponse {
}

/**
 * Converts an object of type 'ServiceQuotasDeleteServiceQuotaIncreaseRequestFromTemplateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceQuotasDeleteServiceQuotaIncreaseRequestFromTemplateResponse(obj: ServiceQuotasDeleteServiceQuotaIncreaseRequestFromTemplateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceQuotasDisassociateServiceQuotaTemplateRequest
 */
export interface ServiceQuotasDisassociateServiceQuotaTemplateRequest {
}

/**
 * Converts an object of type 'ServiceQuotasDisassociateServiceQuotaTemplateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceQuotasDisassociateServiceQuotaTemplateRequest(obj: ServiceQuotasDisassociateServiceQuotaTemplateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceQuotasDisassociateServiceQuotaTemplateResponse
 */
export interface ServiceQuotasDisassociateServiceQuotaTemplateResponse {
}

/**
 * Converts an object of type 'ServiceQuotasDisassociateServiceQuotaTemplateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceQuotasDisassociateServiceQuotaTemplateResponse(obj: ServiceQuotasDisassociateServiceQuotaTemplateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceQuotasGetAwsDefaultServiceQuotaRequest
 */
export interface ServiceQuotasGetAwsDefaultServiceQuotaRequest {
  /**
   * @schema ServiceQuotasGetAwsDefaultServiceQuotaRequest#ServiceCode
   */
  readonly serviceCode?: string;

  /**
   * @schema ServiceQuotasGetAwsDefaultServiceQuotaRequest#QuotaCode
   */
  readonly quotaCode?: string;

}

/**
 * Converts an object of type 'ServiceQuotasGetAwsDefaultServiceQuotaRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceQuotasGetAwsDefaultServiceQuotaRequest(obj: ServiceQuotasGetAwsDefaultServiceQuotaRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceCode': obj.serviceCode,
    'QuotaCode': obj.quotaCode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceQuotasGetAwsDefaultServiceQuotaResponse
 */
export interface ServiceQuotasGetAwsDefaultServiceQuotaResponse {
  /**
   * @schema ServiceQuotasGetAwsDefaultServiceQuotaResponse#Quota
   */
  readonly quota?: ServiceQuotasServiceQuota;

}

/**
 * Converts an object of type 'ServiceQuotasGetAwsDefaultServiceQuotaResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceQuotasGetAwsDefaultServiceQuotaResponse(obj: ServiceQuotasGetAwsDefaultServiceQuotaResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Quota': toJson_ServiceQuotasServiceQuota(obj.quota),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceQuotasGetAssociationForServiceQuotaTemplateRequest
 */
export interface ServiceQuotasGetAssociationForServiceQuotaTemplateRequest {
}

/**
 * Converts an object of type 'ServiceQuotasGetAssociationForServiceQuotaTemplateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceQuotasGetAssociationForServiceQuotaTemplateRequest(obj: ServiceQuotasGetAssociationForServiceQuotaTemplateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceQuotasGetAssociationForServiceQuotaTemplateResponse
 */
export interface ServiceQuotasGetAssociationForServiceQuotaTemplateResponse {
  /**
   * @schema ServiceQuotasGetAssociationForServiceQuotaTemplateResponse#ServiceQuotaTemplateAssociationStatus
   */
  readonly serviceQuotaTemplateAssociationStatus?: string;

}

/**
 * Converts an object of type 'ServiceQuotasGetAssociationForServiceQuotaTemplateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceQuotasGetAssociationForServiceQuotaTemplateResponse(obj: ServiceQuotasGetAssociationForServiceQuotaTemplateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceQuotaTemplateAssociationStatus': obj.serviceQuotaTemplateAssociationStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceQuotasGetRequestedServiceQuotaChangeRequest
 */
export interface ServiceQuotasGetRequestedServiceQuotaChangeRequest {
  /**
   * @schema ServiceQuotasGetRequestedServiceQuotaChangeRequest#RequestId
   */
  readonly requestId?: string;

}

/**
 * Converts an object of type 'ServiceQuotasGetRequestedServiceQuotaChangeRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceQuotasGetRequestedServiceQuotaChangeRequest(obj: ServiceQuotasGetRequestedServiceQuotaChangeRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RequestId': obj.requestId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceQuotasGetRequestedServiceQuotaChangeResponse
 */
export interface ServiceQuotasGetRequestedServiceQuotaChangeResponse {
  /**
   * @schema ServiceQuotasGetRequestedServiceQuotaChangeResponse#RequestedQuota
   */
  readonly requestedQuota?: ServiceQuotasRequestedServiceQuotaChange;

}

/**
 * Converts an object of type 'ServiceQuotasGetRequestedServiceQuotaChangeResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceQuotasGetRequestedServiceQuotaChangeResponse(obj: ServiceQuotasGetRequestedServiceQuotaChangeResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RequestedQuota': toJson_ServiceQuotasRequestedServiceQuotaChange(obj.requestedQuota),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceQuotasGetServiceQuotaRequest
 */
export interface ServiceQuotasGetServiceQuotaRequest {
  /**
   * @schema ServiceQuotasGetServiceQuotaRequest#ServiceCode
   */
  readonly serviceCode?: string;

  /**
   * @schema ServiceQuotasGetServiceQuotaRequest#QuotaCode
   */
  readonly quotaCode?: string;

}

/**
 * Converts an object of type 'ServiceQuotasGetServiceQuotaRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceQuotasGetServiceQuotaRequest(obj: ServiceQuotasGetServiceQuotaRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceCode': obj.serviceCode,
    'QuotaCode': obj.quotaCode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceQuotasGetServiceQuotaResponse
 */
export interface ServiceQuotasGetServiceQuotaResponse {
  /**
   * @schema ServiceQuotasGetServiceQuotaResponse#Quota
   */
  readonly quota?: ServiceQuotasServiceQuota;

}

/**
 * Converts an object of type 'ServiceQuotasGetServiceQuotaResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceQuotasGetServiceQuotaResponse(obj: ServiceQuotasGetServiceQuotaResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Quota': toJson_ServiceQuotasServiceQuota(obj.quota),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceQuotasGetServiceQuotaIncreaseRequestFromTemplateRequest
 */
export interface ServiceQuotasGetServiceQuotaIncreaseRequestFromTemplateRequest {
  /**
   * @schema ServiceQuotasGetServiceQuotaIncreaseRequestFromTemplateRequest#ServiceCode
   */
  readonly serviceCode?: string;

  /**
   * @schema ServiceQuotasGetServiceQuotaIncreaseRequestFromTemplateRequest#QuotaCode
   */
  readonly quotaCode?: string;

  /**
   * @schema ServiceQuotasGetServiceQuotaIncreaseRequestFromTemplateRequest#AwsRegion
   */
  readonly awsRegion?: string;

}

/**
 * Converts an object of type 'ServiceQuotasGetServiceQuotaIncreaseRequestFromTemplateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceQuotasGetServiceQuotaIncreaseRequestFromTemplateRequest(obj: ServiceQuotasGetServiceQuotaIncreaseRequestFromTemplateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceCode': obj.serviceCode,
    'QuotaCode': obj.quotaCode,
    'AwsRegion': obj.awsRegion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceQuotasGetServiceQuotaIncreaseRequestFromTemplateResponse
 */
export interface ServiceQuotasGetServiceQuotaIncreaseRequestFromTemplateResponse {
  /**
   * @schema ServiceQuotasGetServiceQuotaIncreaseRequestFromTemplateResponse#ServiceQuotaIncreaseRequestInTemplate
   */
  readonly serviceQuotaIncreaseRequestInTemplate?: ServiceQuotasServiceQuotaIncreaseRequestInTemplate;

}

/**
 * Converts an object of type 'ServiceQuotasGetServiceQuotaIncreaseRequestFromTemplateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceQuotasGetServiceQuotaIncreaseRequestFromTemplateResponse(obj: ServiceQuotasGetServiceQuotaIncreaseRequestFromTemplateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceQuotaIncreaseRequestInTemplate': toJson_ServiceQuotasServiceQuotaIncreaseRequestInTemplate(obj.serviceQuotaIncreaseRequestInTemplate),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceQuotasListAwsDefaultServiceQuotasRequest
 */
export interface ServiceQuotasListAwsDefaultServiceQuotasRequest {
  /**
   * @schema ServiceQuotasListAwsDefaultServiceQuotasRequest#ServiceCode
   */
  readonly serviceCode?: string;

  /**
   * @schema ServiceQuotasListAwsDefaultServiceQuotasRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ServiceQuotasListAwsDefaultServiceQuotasRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'ServiceQuotasListAwsDefaultServiceQuotasRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceQuotasListAwsDefaultServiceQuotasRequest(obj: ServiceQuotasListAwsDefaultServiceQuotasRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceCode': obj.serviceCode,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceQuotasListAwsDefaultServiceQuotasResponse
 */
export interface ServiceQuotasListAwsDefaultServiceQuotasResponse {
  /**
   * @schema ServiceQuotasListAwsDefaultServiceQuotasResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ServiceQuotasListAwsDefaultServiceQuotasResponse#Quotas
   */
  readonly quotas?: ServiceQuotasServiceQuota[];

}

/**
 * Converts an object of type 'ServiceQuotasListAwsDefaultServiceQuotasResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceQuotasListAwsDefaultServiceQuotasResponse(obj: ServiceQuotasListAwsDefaultServiceQuotasResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'Quotas': obj.quotas?.map(y => toJson_ServiceQuotasServiceQuota(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceQuotasListRequestedServiceQuotaChangeHistoryRequest
 */
export interface ServiceQuotasListRequestedServiceQuotaChangeHistoryRequest {
  /**
   * @schema ServiceQuotasListRequestedServiceQuotaChangeHistoryRequest#ServiceCode
   */
  readonly serviceCode?: string;

  /**
   * @schema ServiceQuotasListRequestedServiceQuotaChangeHistoryRequest#Status
   */
  readonly status?: string;

  /**
   * @schema ServiceQuotasListRequestedServiceQuotaChangeHistoryRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ServiceQuotasListRequestedServiceQuotaChangeHistoryRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'ServiceQuotasListRequestedServiceQuotaChangeHistoryRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceQuotasListRequestedServiceQuotaChangeHistoryRequest(obj: ServiceQuotasListRequestedServiceQuotaChangeHistoryRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceCode': obj.serviceCode,
    'Status': obj.status,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceQuotasListRequestedServiceQuotaChangeHistoryResponse
 */
export interface ServiceQuotasListRequestedServiceQuotaChangeHistoryResponse {
  /**
   * @schema ServiceQuotasListRequestedServiceQuotaChangeHistoryResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ServiceQuotasListRequestedServiceQuotaChangeHistoryResponse#RequestedQuotas
   */
  readonly requestedQuotas?: ServiceQuotasRequestedServiceQuotaChange[];

}

/**
 * Converts an object of type 'ServiceQuotasListRequestedServiceQuotaChangeHistoryResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceQuotasListRequestedServiceQuotaChangeHistoryResponse(obj: ServiceQuotasListRequestedServiceQuotaChangeHistoryResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'RequestedQuotas': obj.requestedQuotas?.map(y => toJson_ServiceQuotasRequestedServiceQuotaChange(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceQuotasListRequestedServiceQuotaChangeHistoryByQuotaRequest
 */
export interface ServiceQuotasListRequestedServiceQuotaChangeHistoryByQuotaRequest {
  /**
   * @schema ServiceQuotasListRequestedServiceQuotaChangeHistoryByQuotaRequest#ServiceCode
   */
  readonly serviceCode?: string;

  /**
   * @schema ServiceQuotasListRequestedServiceQuotaChangeHistoryByQuotaRequest#QuotaCode
   */
  readonly quotaCode?: string;

  /**
   * @schema ServiceQuotasListRequestedServiceQuotaChangeHistoryByQuotaRequest#Status
   */
  readonly status?: string;

  /**
   * @schema ServiceQuotasListRequestedServiceQuotaChangeHistoryByQuotaRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ServiceQuotasListRequestedServiceQuotaChangeHistoryByQuotaRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'ServiceQuotasListRequestedServiceQuotaChangeHistoryByQuotaRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceQuotasListRequestedServiceQuotaChangeHistoryByQuotaRequest(obj: ServiceQuotasListRequestedServiceQuotaChangeHistoryByQuotaRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceCode': obj.serviceCode,
    'QuotaCode': obj.quotaCode,
    'Status': obj.status,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceQuotasListRequestedServiceQuotaChangeHistoryByQuotaResponse
 */
export interface ServiceQuotasListRequestedServiceQuotaChangeHistoryByQuotaResponse {
  /**
   * @schema ServiceQuotasListRequestedServiceQuotaChangeHistoryByQuotaResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ServiceQuotasListRequestedServiceQuotaChangeHistoryByQuotaResponse#RequestedQuotas
   */
  readonly requestedQuotas?: ServiceQuotasRequestedServiceQuotaChange[];

}

/**
 * Converts an object of type 'ServiceQuotasListRequestedServiceQuotaChangeHistoryByQuotaResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceQuotasListRequestedServiceQuotaChangeHistoryByQuotaResponse(obj: ServiceQuotasListRequestedServiceQuotaChangeHistoryByQuotaResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'RequestedQuotas': obj.requestedQuotas?.map(y => toJson_ServiceQuotasRequestedServiceQuotaChange(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceQuotasListServiceQuotaIncreaseRequestsInTemplateRequest
 */
export interface ServiceQuotasListServiceQuotaIncreaseRequestsInTemplateRequest {
  /**
   * @schema ServiceQuotasListServiceQuotaIncreaseRequestsInTemplateRequest#ServiceCode
   */
  readonly serviceCode?: string;

  /**
   * @schema ServiceQuotasListServiceQuotaIncreaseRequestsInTemplateRequest#AwsRegion
   */
  readonly awsRegion?: string;

  /**
   * @schema ServiceQuotasListServiceQuotaIncreaseRequestsInTemplateRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ServiceQuotasListServiceQuotaIncreaseRequestsInTemplateRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'ServiceQuotasListServiceQuotaIncreaseRequestsInTemplateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceQuotasListServiceQuotaIncreaseRequestsInTemplateRequest(obj: ServiceQuotasListServiceQuotaIncreaseRequestsInTemplateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceCode': obj.serviceCode,
    'AwsRegion': obj.awsRegion,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceQuotasListServiceQuotaIncreaseRequestsInTemplateResponse
 */
export interface ServiceQuotasListServiceQuotaIncreaseRequestsInTemplateResponse {
  /**
   * @schema ServiceQuotasListServiceQuotaIncreaseRequestsInTemplateResponse#ServiceQuotaIncreaseRequestInTemplateList
   */
  readonly serviceQuotaIncreaseRequestInTemplateList?: ServiceQuotasServiceQuotaIncreaseRequestInTemplate[];

  /**
   * @schema ServiceQuotasListServiceQuotaIncreaseRequestsInTemplateResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ServiceQuotasListServiceQuotaIncreaseRequestsInTemplateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceQuotasListServiceQuotaIncreaseRequestsInTemplateResponse(obj: ServiceQuotasListServiceQuotaIncreaseRequestsInTemplateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceQuotaIncreaseRequestInTemplateList': obj.serviceQuotaIncreaseRequestInTemplateList?.map(y => toJson_ServiceQuotasServiceQuotaIncreaseRequestInTemplate(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceQuotasListServiceQuotasRequest
 */
export interface ServiceQuotasListServiceQuotasRequest {
  /**
   * @schema ServiceQuotasListServiceQuotasRequest#ServiceCode
   */
  readonly serviceCode?: string;

  /**
   * @schema ServiceQuotasListServiceQuotasRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ServiceQuotasListServiceQuotasRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'ServiceQuotasListServiceQuotasRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceQuotasListServiceQuotasRequest(obj: ServiceQuotasListServiceQuotasRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceCode': obj.serviceCode,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceQuotasListServiceQuotasResponse
 */
export interface ServiceQuotasListServiceQuotasResponse {
  /**
   * @schema ServiceQuotasListServiceQuotasResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ServiceQuotasListServiceQuotasResponse#Quotas
   */
  readonly quotas?: ServiceQuotasServiceQuota[];

}

/**
 * Converts an object of type 'ServiceQuotasListServiceQuotasResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceQuotasListServiceQuotasResponse(obj: ServiceQuotasListServiceQuotasResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'Quotas': obj.quotas?.map(y => toJson_ServiceQuotasServiceQuota(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceQuotasListServicesRequest
 */
export interface ServiceQuotasListServicesRequest {
  /**
   * @schema ServiceQuotasListServicesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ServiceQuotasListServicesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'ServiceQuotasListServicesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceQuotasListServicesRequest(obj: ServiceQuotasListServicesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceQuotasListServicesResponse
 */
export interface ServiceQuotasListServicesResponse {
  /**
   * @schema ServiceQuotasListServicesResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ServiceQuotasListServicesResponse#Services
   */
  readonly services?: ServiceQuotasServiceInfo[];

}

/**
 * Converts an object of type 'ServiceQuotasListServicesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceQuotasListServicesResponse(obj: ServiceQuotasListServicesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'Services': obj.services?.map(y => toJson_ServiceQuotasServiceInfo(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceQuotasListTagsForResourceRequest
 */
export interface ServiceQuotasListTagsForResourceRequest {
  /**
   * @schema ServiceQuotasListTagsForResourceRequest#ResourceARN
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'ServiceQuotasListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceQuotasListTagsForResourceRequest(obj: ServiceQuotasListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceQuotasListTagsForResourceResponse
 */
export interface ServiceQuotasListTagsForResourceResponse {
  /**
   * @schema ServiceQuotasListTagsForResourceResponse#Tags
   */
  readonly tags?: ServiceQuotasTag[];

}

/**
 * Converts an object of type 'ServiceQuotasListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceQuotasListTagsForResourceResponse(obj: ServiceQuotasListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': obj.tags?.map(y => toJson_ServiceQuotasTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceQuotasPutServiceQuotaIncreaseRequestIntoTemplateRequest
 */
export interface ServiceQuotasPutServiceQuotaIncreaseRequestIntoTemplateRequest {
  /**
   * @schema ServiceQuotasPutServiceQuotaIncreaseRequestIntoTemplateRequest#QuotaCode
   */
  readonly quotaCode?: string;

  /**
   * @schema ServiceQuotasPutServiceQuotaIncreaseRequestIntoTemplateRequest#ServiceCode
   */
  readonly serviceCode?: string;

  /**
   * @schema ServiceQuotasPutServiceQuotaIncreaseRequestIntoTemplateRequest#AwsRegion
   */
  readonly awsRegion?: string;

  /**
   * @schema ServiceQuotasPutServiceQuotaIncreaseRequestIntoTemplateRequest#DesiredValue
   */
  readonly desiredValue?: number;

}

/**
 * Converts an object of type 'ServiceQuotasPutServiceQuotaIncreaseRequestIntoTemplateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceQuotasPutServiceQuotaIncreaseRequestIntoTemplateRequest(obj: ServiceQuotasPutServiceQuotaIncreaseRequestIntoTemplateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'QuotaCode': obj.quotaCode,
    'ServiceCode': obj.serviceCode,
    'AwsRegion': obj.awsRegion,
    'DesiredValue': obj.desiredValue,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceQuotasPutServiceQuotaIncreaseRequestIntoTemplateResponse
 */
export interface ServiceQuotasPutServiceQuotaIncreaseRequestIntoTemplateResponse {
  /**
   * @schema ServiceQuotasPutServiceQuotaIncreaseRequestIntoTemplateResponse#ServiceQuotaIncreaseRequestInTemplate
   */
  readonly serviceQuotaIncreaseRequestInTemplate?: ServiceQuotasServiceQuotaIncreaseRequestInTemplate;

}

/**
 * Converts an object of type 'ServiceQuotasPutServiceQuotaIncreaseRequestIntoTemplateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceQuotasPutServiceQuotaIncreaseRequestIntoTemplateResponse(obj: ServiceQuotasPutServiceQuotaIncreaseRequestIntoTemplateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceQuotaIncreaseRequestInTemplate': toJson_ServiceQuotasServiceQuotaIncreaseRequestInTemplate(obj.serviceQuotaIncreaseRequestInTemplate),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceQuotasRequestServiceQuotaIncreaseRequest
 */
export interface ServiceQuotasRequestServiceQuotaIncreaseRequest {
  /**
   * @schema ServiceQuotasRequestServiceQuotaIncreaseRequest#ServiceCode
   */
  readonly serviceCode?: string;

  /**
   * @schema ServiceQuotasRequestServiceQuotaIncreaseRequest#QuotaCode
   */
  readonly quotaCode?: string;

  /**
   * @schema ServiceQuotasRequestServiceQuotaIncreaseRequest#DesiredValue
   */
  readonly desiredValue?: number;

}

/**
 * Converts an object of type 'ServiceQuotasRequestServiceQuotaIncreaseRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceQuotasRequestServiceQuotaIncreaseRequest(obj: ServiceQuotasRequestServiceQuotaIncreaseRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceCode': obj.serviceCode,
    'QuotaCode': obj.quotaCode,
    'DesiredValue': obj.desiredValue,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceQuotasRequestServiceQuotaIncreaseResponse
 */
export interface ServiceQuotasRequestServiceQuotaIncreaseResponse {
  /**
   * @schema ServiceQuotasRequestServiceQuotaIncreaseResponse#RequestedQuota
   */
  readonly requestedQuota?: ServiceQuotasRequestedServiceQuotaChange;

}

/**
 * Converts an object of type 'ServiceQuotasRequestServiceQuotaIncreaseResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceQuotasRequestServiceQuotaIncreaseResponse(obj: ServiceQuotasRequestServiceQuotaIncreaseResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RequestedQuota': toJson_ServiceQuotasRequestedServiceQuotaChange(obj.requestedQuota),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceQuotasTagResourceRequest
 */
export interface ServiceQuotasTagResourceRequest {
  /**
   * @schema ServiceQuotasTagResourceRequest#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema ServiceQuotasTagResourceRequest#Tags
   */
  readonly tags?: ServiceQuotasTag[];

}

/**
 * Converts an object of type 'ServiceQuotasTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceQuotasTagResourceRequest(obj: ServiceQuotasTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
    'Tags': obj.tags?.map(y => toJson_ServiceQuotasTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceQuotasTagResourceResponse
 */
export interface ServiceQuotasTagResourceResponse {
}

/**
 * Converts an object of type 'ServiceQuotasTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceQuotasTagResourceResponse(obj: ServiceQuotasTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceQuotasUntagResourceRequest
 */
export interface ServiceQuotasUntagResourceRequest {
  /**
   * @schema ServiceQuotasUntagResourceRequest#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema ServiceQuotasUntagResourceRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'ServiceQuotasUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceQuotasUntagResourceRequest(obj: ServiceQuotasUntagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
    'TagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceQuotasUntagResourceResponse
 */
export interface ServiceQuotasUntagResourceResponse {
}

/**
 * Converts an object of type 'ServiceQuotasUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceQuotasUntagResourceResponse(obj: ServiceQuotasUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceQuotasServiceQuota
 */
export interface ServiceQuotasServiceQuota {
  /**
   * @schema ServiceQuotasServiceQuota#ServiceCode
   */
  readonly serviceCode?: string;

  /**
   * @schema ServiceQuotasServiceQuota#ServiceName
   */
  readonly serviceName?: string;

  /**
   * @schema ServiceQuotasServiceQuota#QuotaArn
   */
  readonly quotaArn?: string;

  /**
   * @schema ServiceQuotasServiceQuota#QuotaCode
   */
  readonly quotaCode?: string;

  /**
   * @schema ServiceQuotasServiceQuota#QuotaName
   */
  readonly quotaName?: string;

  /**
   * @schema ServiceQuotasServiceQuota#Value
   */
  readonly value?: number;

  /**
   * @schema ServiceQuotasServiceQuota#Unit
   */
  readonly unit?: string;

  /**
   * @schema ServiceQuotasServiceQuota#Adjustable
   */
  readonly adjustable?: boolean;

  /**
   * @schema ServiceQuotasServiceQuota#GlobalQuota
   */
  readonly globalQuota?: boolean;

  /**
   * @schema ServiceQuotasServiceQuota#UsageMetric
   */
  readonly usageMetric?: ServiceQuotasMetricInfo;

  /**
   * @schema ServiceQuotasServiceQuota#Period
   */
  readonly period?: ServiceQuotasQuotaPeriod;

  /**
   * @schema ServiceQuotasServiceQuota#ErrorReason
   */
  readonly errorReason?: ServiceQuotasErrorReason;

}

/**
 * Converts an object of type 'ServiceQuotasServiceQuota' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceQuotasServiceQuota(obj: ServiceQuotasServiceQuota | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceCode': obj.serviceCode,
    'ServiceName': obj.serviceName,
    'QuotaArn': obj.quotaArn,
    'QuotaCode': obj.quotaCode,
    'QuotaName': obj.quotaName,
    'Value': obj.value,
    'Unit': obj.unit,
    'Adjustable': obj.adjustable,
    'GlobalQuota': obj.globalQuota,
    'UsageMetric': toJson_ServiceQuotasMetricInfo(obj.usageMetric),
    'Period': toJson_ServiceQuotasQuotaPeriod(obj.period),
    'ErrorReason': toJson_ServiceQuotasErrorReason(obj.errorReason),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceQuotasRequestedServiceQuotaChange
 */
export interface ServiceQuotasRequestedServiceQuotaChange {
  /**
   * @schema ServiceQuotasRequestedServiceQuotaChange#Id
   */
  readonly id?: string;

  /**
   * @schema ServiceQuotasRequestedServiceQuotaChange#CaseId
   */
  readonly caseId?: string;

  /**
   * @schema ServiceQuotasRequestedServiceQuotaChange#ServiceCode
   */
  readonly serviceCode?: string;

  /**
   * @schema ServiceQuotasRequestedServiceQuotaChange#ServiceName
   */
  readonly serviceName?: string;

  /**
   * @schema ServiceQuotasRequestedServiceQuotaChange#QuotaCode
   */
  readonly quotaCode?: string;

  /**
   * @schema ServiceQuotasRequestedServiceQuotaChange#QuotaName
   */
  readonly quotaName?: string;

  /**
   * @schema ServiceQuotasRequestedServiceQuotaChange#DesiredValue
   */
  readonly desiredValue?: number;

  /**
   * @schema ServiceQuotasRequestedServiceQuotaChange#Status
   */
  readonly status?: string;

  /**
   * @schema ServiceQuotasRequestedServiceQuotaChange#Created
   */
  readonly created?: string;

  /**
   * @schema ServiceQuotasRequestedServiceQuotaChange#LastUpdated
   */
  readonly lastUpdated?: string;

  /**
   * @schema ServiceQuotasRequestedServiceQuotaChange#Requester
   */
  readonly requester?: string;

  /**
   * @schema ServiceQuotasRequestedServiceQuotaChange#QuotaArn
   */
  readonly quotaArn?: string;

  /**
   * @schema ServiceQuotasRequestedServiceQuotaChange#GlobalQuota
   */
  readonly globalQuota?: boolean;

  /**
   * @schema ServiceQuotasRequestedServiceQuotaChange#Unit
   */
  readonly unit?: string;

}

/**
 * Converts an object of type 'ServiceQuotasRequestedServiceQuotaChange' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceQuotasRequestedServiceQuotaChange(obj: ServiceQuotasRequestedServiceQuotaChange | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'CaseId': obj.caseId,
    'ServiceCode': obj.serviceCode,
    'ServiceName': obj.serviceName,
    'QuotaCode': obj.quotaCode,
    'QuotaName': obj.quotaName,
    'DesiredValue': obj.desiredValue,
    'Status': obj.status,
    'Created': obj.created,
    'LastUpdated': obj.lastUpdated,
    'Requester': obj.requester,
    'QuotaArn': obj.quotaArn,
    'GlobalQuota': obj.globalQuota,
    'Unit': obj.unit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceQuotasServiceQuotaIncreaseRequestInTemplate
 */
export interface ServiceQuotasServiceQuotaIncreaseRequestInTemplate {
  /**
   * @schema ServiceQuotasServiceQuotaIncreaseRequestInTemplate#ServiceCode
   */
  readonly serviceCode?: string;

  /**
   * @schema ServiceQuotasServiceQuotaIncreaseRequestInTemplate#ServiceName
   */
  readonly serviceName?: string;

  /**
   * @schema ServiceQuotasServiceQuotaIncreaseRequestInTemplate#QuotaCode
   */
  readonly quotaCode?: string;

  /**
   * @schema ServiceQuotasServiceQuotaIncreaseRequestInTemplate#QuotaName
   */
  readonly quotaName?: string;

  /**
   * @schema ServiceQuotasServiceQuotaIncreaseRequestInTemplate#DesiredValue
   */
  readonly desiredValue?: number;

  /**
   * @schema ServiceQuotasServiceQuotaIncreaseRequestInTemplate#AwsRegion
   */
  readonly awsRegion?: string;

  /**
   * @schema ServiceQuotasServiceQuotaIncreaseRequestInTemplate#Unit
   */
  readonly unit?: string;

  /**
   * @schema ServiceQuotasServiceQuotaIncreaseRequestInTemplate#GlobalQuota
   */
  readonly globalQuota?: boolean;

}

/**
 * Converts an object of type 'ServiceQuotasServiceQuotaIncreaseRequestInTemplate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceQuotasServiceQuotaIncreaseRequestInTemplate(obj: ServiceQuotasServiceQuotaIncreaseRequestInTemplate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceCode': obj.serviceCode,
    'ServiceName': obj.serviceName,
    'QuotaCode': obj.quotaCode,
    'QuotaName': obj.quotaName,
    'DesiredValue': obj.desiredValue,
    'AwsRegion': obj.awsRegion,
    'Unit': obj.unit,
    'GlobalQuota': obj.globalQuota,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceQuotasServiceInfo
 */
export interface ServiceQuotasServiceInfo {
  /**
   * @schema ServiceQuotasServiceInfo#ServiceCode
   */
  readonly serviceCode?: string;

  /**
   * @schema ServiceQuotasServiceInfo#ServiceName
   */
  readonly serviceName?: string;

}

/**
 * Converts an object of type 'ServiceQuotasServiceInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceQuotasServiceInfo(obj: ServiceQuotasServiceInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceCode': obj.serviceCode,
    'ServiceName': obj.serviceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceQuotasTag
 */
export interface ServiceQuotasTag {
  /**
   * @schema ServiceQuotasTag#Key
   */
  readonly key?: string;

  /**
   * @schema ServiceQuotasTag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'ServiceQuotasTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceQuotasTag(obj: ServiceQuotasTag | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceQuotasMetricInfo
 */
export interface ServiceQuotasMetricInfo {
  /**
   * @schema ServiceQuotasMetricInfo#MetricNamespace
   */
  readonly metricNamespace?: string;

  /**
   * @schema ServiceQuotasMetricInfo#MetricName
   */
  readonly metricName?: string;

  /**
   * @schema ServiceQuotasMetricInfo#MetricDimensions
   */
  readonly metricDimensions?: { [key: string]: string };

  /**
   * @schema ServiceQuotasMetricInfo#MetricStatisticRecommendation
   */
  readonly metricStatisticRecommendation?: string;

}

/**
 * Converts an object of type 'ServiceQuotasMetricInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceQuotasMetricInfo(obj: ServiceQuotasMetricInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MetricNamespace': obj.metricNamespace,
    'MetricName': obj.metricName,
    'MetricDimensions': ((obj.metricDimensions) === undefined) ? undefined : (Object.entries(obj.metricDimensions).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'MetricStatisticRecommendation': obj.metricStatisticRecommendation,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceQuotasQuotaPeriod
 */
export interface ServiceQuotasQuotaPeriod {
  /**
   * @schema ServiceQuotasQuotaPeriod#PeriodValue
   */
  readonly periodValue?: number;

  /**
   * @schema ServiceQuotasQuotaPeriod#PeriodUnit
   */
  readonly periodUnit?: string;

}

/**
 * Converts an object of type 'ServiceQuotasQuotaPeriod' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceQuotasQuotaPeriod(obj: ServiceQuotasQuotaPeriod | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PeriodValue': obj.periodValue,
    'PeriodUnit': obj.periodUnit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceQuotasErrorReason
 */
export interface ServiceQuotasErrorReason {
  /**
   * @schema ServiceQuotasErrorReason#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema ServiceQuotasErrorReason#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * Converts an object of type 'ServiceQuotasErrorReason' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceQuotasErrorReason(obj: ServiceQuotasErrorReason | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ErrorCode': obj.errorCode,
    'ErrorMessage': obj.errorMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
