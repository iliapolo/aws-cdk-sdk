/**
 * @schema AssociateServiceQuotaTemplateRequest
 */
export interface AssociateServiceQuotaTemplateRequest {
}

/**
 * @schema AssociateServiceQuotaTemplateResponse
 */
export interface AssociateServiceQuotaTemplateResponse {
}

/**
 * @schema DeleteServiceQuotaIncreaseRequestFromTemplateRequest
 */
export interface DeleteServiceQuotaIncreaseRequestFromTemplateRequest {
  /**
   * @schema DeleteServiceQuotaIncreaseRequestFromTemplateRequest#ServiceCode
   */
  readonly serviceCode: string;

  /**
   * @schema DeleteServiceQuotaIncreaseRequestFromTemplateRequest#QuotaCode
   */
  readonly quotaCode: string;

  /**
   * @schema DeleteServiceQuotaIncreaseRequestFromTemplateRequest#AwsRegion
   */
  readonly awsRegion: string;

}

/**
 * @schema DeleteServiceQuotaIncreaseRequestFromTemplateResponse
 */
export interface DeleteServiceQuotaIncreaseRequestFromTemplateResponse {
}

/**
 * @schema DisassociateServiceQuotaTemplateRequest
 */
export interface DisassociateServiceQuotaTemplateRequest {
}

/**
 * @schema DisassociateServiceQuotaTemplateResponse
 */
export interface DisassociateServiceQuotaTemplateResponse {
}

/**
 * @schema GetAwsDefaultServiceQuotaRequest
 */
export interface GetAwsDefaultServiceQuotaRequest {
  /**
   * @schema GetAwsDefaultServiceQuotaRequest#ServiceCode
   */
  readonly serviceCode: string;

  /**
   * @schema GetAwsDefaultServiceQuotaRequest#QuotaCode
   */
  readonly quotaCode: string;

}

/**
 * @schema GetAwsDefaultServiceQuotaResponse
 */
export interface GetAwsDefaultServiceQuotaResponse {
  /**
   * @schema GetAwsDefaultServiceQuotaResponse#Quota
   */
  readonly quota?: ServiceQuota;

}

/**
 * @schema GetAssociationForServiceQuotaTemplateRequest
 */
export interface GetAssociationForServiceQuotaTemplateRequest {
}

/**
 * @schema GetAssociationForServiceQuotaTemplateResponse
 */
export interface GetAssociationForServiceQuotaTemplateResponse {
  /**
   * @schema GetAssociationForServiceQuotaTemplateResponse#ServiceQuotaTemplateAssociationStatus
   */
  readonly serviceQuotaTemplateAssociationStatus?: string;

}

/**
 * @schema GetRequestedServiceQuotaChangeRequest
 */
export interface GetRequestedServiceQuotaChangeRequest {
  /**
   * @schema GetRequestedServiceQuotaChangeRequest#RequestId
   */
  readonly requestId: string;

}

/**
 * @schema GetRequestedServiceQuotaChangeResponse
 */
export interface GetRequestedServiceQuotaChangeResponse {
  /**
   * @schema GetRequestedServiceQuotaChangeResponse#RequestedQuota
   */
  readonly requestedQuota?: RequestedServiceQuotaChange;

}

/**
 * @schema GetServiceQuotaRequest
 */
export interface GetServiceQuotaRequest {
  /**
   * @schema GetServiceQuotaRequest#ServiceCode
   */
  readonly serviceCode: string;

  /**
   * @schema GetServiceQuotaRequest#QuotaCode
   */
  readonly quotaCode: string;

}

/**
 * @schema GetServiceQuotaResponse
 */
export interface GetServiceQuotaResponse {
  /**
   * @schema GetServiceQuotaResponse#Quota
   */
  readonly quota?: ServiceQuota;

}

/**
 * @schema GetServiceQuotaIncreaseRequestFromTemplateRequest
 */
export interface GetServiceQuotaIncreaseRequestFromTemplateRequest {
  /**
   * @schema GetServiceQuotaIncreaseRequestFromTemplateRequest#ServiceCode
   */
  readonly serviceCode: string;

  /**
   * @schema GetServiceQuotaIncreaseRequestFromTemplateRequest#QuotaCode
   */
  readonly quotaCode: string;

  /**
   * @schema GetServiceQuotaIncreaseRequestFromTemplateRequest#AwsRegion
   */
  readonly awsRegion: string;

}

/**
 * @schema GetServiceQuotaIncreaseRequestFromTemplateResponse
 */
export interface GetServiceQuotaIncreaseRequestFromTemplateResponse {
  /**
   * @schema GetServiceQuotaIncreaseRequestFromTemplateResponse#ServiceQuotaIncreaseRequestInTemplate
   */
  readonly serviceQuotaIncreaseRequestInTemplate?: ServiceQuotaIncreaseRequestInTemplate;

}

/**
 * @schema ListAwsDefaultServiceQuotasRequest
 */
export interface ListAwsDefaultServiceQuotasRequest {
  /**
   * @schema ListAwsDefaultServiceQuotasRequest#ServiceCode
   */
  readonly serviceCode: string;

  /**
   * @schema ListAwsDefaultServiceQuotasRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListAwsDefaultServiceQuotasRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListAwsDefaultServiceQuotasResponse
 */
export interface ListAwsDefaultServiceQuotasResponse {
  /**
   * @schema ListAwsDefaultServiceQuotasResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListAwsDefaultServiceQuotasResponse#Quotas
   */
  readonly quotas?: ServiceQuota[];

}

/**
 * @schema ListRequestedServiceQuotaChangeHistoryRequest
 */
export interface ListRequestedServiceQuotaChangeHistoryRequest {
  /**
   * @schema ListRequestedServiceQuotaChangeHistoryRequest#ServiceCode
   */
  readonly serviceCode?: string;

  /**
   * @schema ListRequestedServiceQuotaChangeHistoryRequest#Status
   */
  readonly status?: string;

  /**
   * @schema ListRequestedServiceQuotaChangeHistoryRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListRequestedServiceQuotaChangeHistoryRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListRequestedServiceQuotaChangeHistoryResponse
 */
export interface ListRequestedServiceQuotaChangeHistoryResponse {
  /**
   * @schema ListRequestedServiceQuotaChangeHistoryResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListRequestedServiceQuotaChangeHistoryResponse#RequestedQuotas
   */
  readonly requestedQuotas?: RequestedServiceQuotaChange[];

}

/**
 * @schema ListRequestedServiceQuotaChangeHistoryByQuotaRequest
 */
export interface ListRequestedServiceQuotaChangeHistoryByQuotaRequest {
  /**
   * @schema ListRequestedServiceQuotaChangeHistoryByQuotaRequest#ServiceCode
   */
  readonly serviceCode: string;

  /**
   * @schema ListRequestedServiceQuotaChangeHistoryByQuotaRequest#QuotaCode
   */
  readonly quotaCode: string;

  /**
   * @schema ListRequestedServiceQuotaChangeHistoryByQuotaRequest#Status
   */
  readonly status?: string;

  /**
   * @schema ListRequestedServiceQuotaChangeHistoryByQuotaRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListRequestedServiceQuotaChangeHistoryByQuotaRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListRequestedServiceQuotaChangeHistoryByQuotaResponse
 */
export interface ListRequestedServiceQuotaChangeHistoryByQuotaResponse {
  /**
   * @schema ListRequestedServiceQuotaChangeHistoryByQuotaResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListRequestedServiceQuotaChangeHistoryByQuotaResponse#RequestedQuotas
   */
  readonly requestedQuotas?: RequestedServiceQuotaChange[];

}

/**
 * @schema ListServiceQuotaIncreaseRequestsInTemplateRequest
 */
export interface ListServiceQuotaIncreaseRequestsInTemplateRequest {
  /**
   * @schema ListServiceQuotaIncreaseRequestsInTemplateRequest#ServiceCode
   */
  readonly serviceCode?: string;

  /**
   * @schema ListServiceQuotaIncreaseRequestsInTemplateRequest#AwsRegion
   */
  readonly awsRegion?: string;

  /**
   * @schema ListServiceQuotaIncreaseRequestsInTemplateRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListServiceQuotaIncreaseRequestsInTemplateRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListServiceQuotaIncreaseRequestsInTemplateResponse
 */
export interface ListServiceQuotaIncreaseRequestsInTemplateResponse {
  /**
   * @schema ListServiceQuotaIncreaseRequestsInTemplateResponse#ServiceQuotaIncreaseRequestInTemplateList
   */
  readonly serviceQuotaIncreaseRequestInTemplateList?: ServiceQuotaIncreaseRequestInTemplate[];

  /**
   * @schema ListServiceQuotaIncreaseRequestsInTemplateResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListServiceQuotasRequest
 */
export interface ListServiceQuotasRequest {
  /**
   * @schema ListServiceQuotasRequest#ServiceCode
   */
  readonly serviceCode: string;

  /**
   * @schema ListServiceQuotasRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListServiceQuotasRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListServiceQuotasResponse
 */
export interface ListServiceQuotasResponse {
  /**
   * @schema ListServiceQuotasResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListServiceQuotasResponse#Quotas
   */
  readonly quotas?: ServiceQuota[];

}

/**
 * @schema ListServicesRequest
 */
export interface ListServicesRequest {
  /**
   * @schema ListServicesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListServicesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListServicesResponse
 */
export interface ListServicesResponse {
  /**
   * @schema ListServicesResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListServicesResponse#Services
   */
  readonly services?: ServiceInfo[];

}

/**
 * @schema PutServiceQuotaIncreaseRequestIntoTemplateRequest
 */
export interface PutServiceQuotaIncreaseRequestIntoTemplateRequest {
  /**
   * @schema PutServiceQuotaIncreaseRequestIntoTemplateRequest#QuotaCode
   */
  readonly quotaCode: string;

  /**
   * @schema PutServiceQuotaIncreaseRequestIntoTemplateRequest#ServiceCode
   */
  readonly serviceCode: string;

  /**
   * @schema PutServiceQuotaIncreaseRequestIntoTemplateRequest#AwsRegion
   */
  readonly awsRegion: string;

  /**
   * @schema PutServiceQuotaIncreaseRequestIntoTemplateRequest#DesiredValue
   */
  readonly desiredValue: number;

}

/**
 * @schema PutServiceQuotaIncreaseRequestIntoTemplateResponse
 */
export interface PutServiceQuotaIncreaseRequestIntoTemplateResponse {
  /**
   * @schema PutServiceQuotaIncreaseRequestIntoTemplateResponse#ServiceQuotaIncreaseRequestInTemplate
   */
  readonly serviceQuotaIncreaseRequestInTemplate?: ServiceQuotaIncreaseRequestInTemplate;

}

/**
 * @schema RequestServiceQuotaIncreaseRequest
 */
export interface RequestServiceQuotaIncreaseRequest {
  /**
   * @schema RequestServiceQuotaIncreaseRequest#ServiceCode
   */
  readonly serviceCode: string;

  /**
   * @schema RequestServiceQuotaIncreaseRequest#QuotaCode
   */
  readonly quotaCode: string;

  /**
   * @schema RequestServiceQuotaIncreaseRequest#DesiredValue
   */
  readonly desiredValue: number;

}

/**
 * @schema RequestServiceQuotaIncreaseResponse
 */
export interface RequestServiceQuotaIncreaseResponse {
  /**
   * @schema RequestServiceQuotaIncreaseResponse#RequestedQuota
   */
  readonly requestedQuota?: RequestedServiceQuotaChange;

}

/**
 * @schema ServiceQuota
 */
export interface ServiceQuota {
  /**
   * @schema ServiceQuota#ServiceCode
   */
  readonly serviceCode?: string;

  /**
   * @schema ServiceQuota#ServiceName
   */
  readonly serviceName?: string;

  /**
   * @schema ServiceQuota#QuotaArn
   */
  readonly quotaArn?: string;

  /**
   * @schema ServiceQuota#QuotaCode
   */
  readonly quotaCode?: string;

  /**
   * @schema ServiceQuota#QuotaName
   */
  readonly quotaName?: string;

  /**
   * @schema ServiceQuota#Value
   */
  readonly value?: number;

  /**
   * @schema ServiceQuota#Unit
   */
  readonly unit?: string;

  /**
   * @schema ServiceQuota#Adjustable
   */
  readonly adjustable?: boolean;

  /**
   * @schema ServiceQuota#GlobalQuota
   */
  readonly globalQuota?: boolean;

  /**
   * @schema ServiceQuota#UsageMetric
   */
  readonly usageMetric?: MetricInfo;

  /**
   * @schema ServiceQuota#Period
   */
  readonly period?: QuotaPeriod;

  /**
   * @schema ServiceQuota#ErrorReason
   */
  readonly errorReason?: ErrorReason;

}

/**
 * @schema RequestedServiceQuotaChange
 */
export interface RequestedServiceQuotaChange {
  /**
   * @schema RequestedServiceQuotaChange#Id
   */
  readonly id?: string;

  /**
   * @schema RequestedServiceQuotaChange#CaseId
   */
  readonly caseId?: string;

  /**
   * @schema RequestedServiceQuotaChange#ServiceCode
   */
  readonly serviceCode?: string;

  /**
   * @schema RequestedServiceQuotaChange#ServiceName
   */
  readonly serviceName?: string;

  /**
   * @schema RequestedServiceQuotaChange#QuotaCode
   */
  readonly quotaCode?: string;

  /**
   * @schema RequestedServiceQuotaChange#QuotaName
   */
  readonly quotaName?: string;

  /**
   * @schema RequestedServiceQuotaChange#DesiredValue
   */
  readonly desiredValue?: number;

  /**
   * @schema RequestedServiceQuotaChange#Status
   */
  readonly status?: string;

  /**
   * @schema RequestedServiceQuotaChange#Created
   */
  readonly created?: string;

  /**
   * @schema RequestedServiceQuotaChange#LastUpdated
   */
  readonly lastUpdated?: string;

  /**
   * @schema RequestedServiceQuotaChange#Requester
   */
  readonly requester?: string;

  /**
   * @schema RequestedServiceQuotaChange#QuotaArn
   */
  readonly quotaArn?: string;

  /**
   * @schema RequestedServiceQuotaChange#GlobalQuota
   */
  readonly globalQuota?: boolean;

  /**
   * @schema RequestedServiceQuotaChange#Unit
   */
  readonly unit?: string;

}

/**
 * @schema ServiceQuotaIncreaseRequestInTemplate
 */
export interface ServiceQuotaIncreaseRequestInTemplate {
  /**
   * @schema ServiceQuotaIncreaseRequestInTemplate#ServiceCode
   */
  readonly serviceCode?: string;

  /**
   * @schema ServiceQuotaIncreaseRequestInTemplate#ServiceName
   */
  readonly serviceName?: string;

  /**
   * @schema ServiceQuotaIncreaseRequestInTemplate#QuotaCode
   */
  readonly quotaCode?: string;

  /**
   * @schema ServiceQuotaIncreaseRequestInTemplate#QuotaName
   */
  readonly quotaName?: string;

  /**
   * @schema ServiceQuotaIncreaseRequestInTemplate#DesiredValue
   */
  readonly desiredValue?: number;

  /**
   * @schema ServiceQuotaIncreaseRequestInTemplate#AwsRegion
   */
  readonly awsRegion?: string;

  /**
   * @schema ServiceQuotaIncreaseRequestInTemplate#Unit
   */
  readonly unit?: string;

  /**
   * @schema ServiceQuotaIncreaseRequestInTemplate#GlobalQuota
   */
  readonly globalQuota?: boolean;

}

/**
 * @schema ServiceInfo
 */
export interface ServiceInfo {
  /**
   * @schema ServiceInfo#ServiceCode
   */
  readonly serviceCode?: string;

  /**
   * @schema ServiceInfo#ServiceName
   */
  readonly serviceName?: string;

}

/**
 * @schema MetricInfo
 */
export interface MetricInfo {
  /**
   * @schema MetricInfo#MetricNamespace
   */
  readonly metricNamespace?: string;

  /**
   * @schema MetricInfo#MetricName
   */
  readonly metricName?: string;

  /**
   * @schema MetricInfo#MetricDimensions
   */
  readonly metricDimensions?: { [key: string]: string };

  /**
   * @schema MetricInfo#MetricStatisticRecommendation
   */
  readonly metricStatisticRecommendation?: string;

}

/**
 * @schema QuotaPeriod
 */
export interface QuotaPeriod {
  /**
   * @schema QuotaPeriod#PeriodValue
   */
  readonly periodValue?: number;

  /**
   * @schema QuotaPeriod#PeriodUnit
   */
  readonly periodUnit?: string;

}

/**
 * @schema ErrorReason
 */
export interface ErrorReason {
  /**
   * @schema ErrorReason#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema ErrorReason#ErrorMessage
   */
  readonly errorMessage?: string;

}
