/**
 * @schema ServiceQuotasAssociateServiceQuotaTemplateRequest
 */
export interface ServiceQuotasAssociateServiceQuotaTemplateRequest {
}

/**
 * @schema ServiceQuotasAssociateServiceQuotaTemplateResponse
 */
export interface ServiceQuotasAssociateServiceQuotaTemplateResponse {
}

/**
 * @schema ServiceQuotasDeleteServiceQuotaIncreaseRequestFromTemplateRequest
 */
export interface ServiceQuotasDeleteServiceQuotaIncreaseRequestFromTemplateRequest {
  /**
   * @schema ServiceQuotasDeleteServiceQuotaIncreaseRequestFromTemplateRequest#ServiceCode
   */
  readonly serviceCode: string;

  /**
   * @schema ServiceQuotasDeleteServiceQuotaIncreaseRequestFromTemplateRequest#QuotaCode
   */
  readonly quotaCode: string;

  /**
   * @schema ServiceQuotasDeleteServiceQuotaIncreaseRequestFromTemplateRequest#AwsRegion
   */
  readonly awsRegion: string;

}

/**
 * @schema ServiceQuotasDeleteServiceQuotaIncreaseRequestFromTemplateResponse
 */
export interface ServiceQuotasDeleteServiceQuotaIncreaseRequestFromTemplateResponse {
}

/**
 * @schema ServiceQuotasDisassociateServiceQuotaTemplateRequest
 */
export interface ServiceQuotasDisassociateServiceQuotaTemplateRequest {
}

/**
 * @schema ServiceQuotasDisassociateServiceQuotaTemplateResponse
 */
export interface ServiceQuotasDisassociateServiceQuotaTemplateResponse {
}

/**
 * @schema ServiceQuotasGetAwsDefaultServiceQuotaRequest
 */
export interface ServiceQuotasGetAwsDefaultServiceQuotaRequest {
  /**
   * @schema ServiceQuotasGetAwsDefaultServiceQuotaRequest#ServiceCode
   */
  readonly serviceCode: string;

  /**
   * @schema ServiceQuotasGetAwsDefaultServiceQuotaRequest#QuotaCode
   */
  readonly quotaCode: string;

}

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
 * @schema ServiceQuotasGetAssociationForServiceQuotaTemplateRequest
 */
export interface ServiceQuotasGetAssociationForServiceQuotaTemplateRequest {
}

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
 * @schema ServiceQuotasGetRequestedServiceQuotaChangeRequest
 */
export interface ServiceQuotasGetRequestedServiceQuotaChangeRequest {
  /**
   * @schema ServiceQuotasGetRequestedServiceQuotaChangeRequest#RequestId
   */
  readonly requestId: string;

}

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
 * @schema ServiceQuotasGetServiceQuotaRequest
 */
export interface ServiceQuotasGetServiceQuotaRequest {
  /**
   * @schema ServiceQuotasGetServiceQuotaRequest#ServiceCode
   */
  readonly serviceCode: string;

  /**
   * @schema ServiceQuotasGetServiceQuotaRequest#QuotaCode
   */
  readonly quotaCode: string;

}

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
 * @schema ServiceQuotasGetServiceQuotaIncreaseRequestFromTemplateRequest
 */
export interface ServiceQuotasGetServiceQuotaIncreaseRequestFromTemplateRequest {
  /**
   * @schema ServiceQuotasGetServiceQuotaIncreaseRequestFromTemplateRequest#ServiceCode
   */
  readonly serviceCode: string;

  /**
   * @schema ServiceQuotasGetServiceQuotaIncreaseRequestFromTemplateRequest#QuotaCode
   */
  readonly quotaCode: string;

  /**
   * @schema ServiceQuotasGetServiceQuotaIncreaseRequestFromTemplateRequest#AwsRegion
   */
  readonly awsRegion: string;

}

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
 * @schema ServiceQuotasListAwsDefaultServiceQuotasRequest
 */
export interface ServiceQuotasListAwsDefaultServiceQuotasRequest {
  /**
   * @schema ServiceQuotasListAwsDefaultServiceQuotasRequest#ServiceCode
   */
  readonly serviceCode: string;

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
 * @schema ServiceQuotasListRequestedServiceQuotaChangeHistoryByQuotaRequest
 */
export interface ServiceQuotasListRequestedServiceQuotaChangeHistoryByQuotaRequest {
  /**
   * @schema ServiceQuotasListRequestedServiceQuotaChangeHistoryByQuotaRequest#ServiceCode
   */
  readonly serviceCode: string;

  /**
   * @schema ServiceQuotasListRequestedServiceQuotaChangeHistoryByQuotaRequest#QuotaCode
   */
  readonly quotaCode: string;

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
 * @schema ServiceQuotasListServiceQuotasRequest
 */
export interface ServiceQuotasListServiceQuotasRequest {
  /**
   * @schema ServiceQuotasListServiceQuotasRequest#ServiceCode
   */
  readonly serviceCode: string;

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
 * @schema ServiceQuotasPutServiceQuotaIncreaseRequestIntoTemplateRequest
 */
export interface ServiceQuotasPutServiceQuotaIncreaseRequestIntoTemplateRequest {
  /**
   * @schema ServiceQuotasPutServiceQuotaIncreaseRequestIntoTemplateRequest#QuotaCode
   */
  readonly quotaCode: string;

  /**
   * @schema ServiceQuotasPutServiceQuotaIncreaseRequestIntoTemplateRequest#ServiceCode
   */
  readonly serviceCode: string;

  /**
   * @schema ServiceQuotasPutServiceQuotaIncreaseRequestIntoTemplateRequest#AwsRegion
   */
  readonly awsRegion: string;

  /**
   * @schema ServiceQuotasPutServiceQuotaIncreaseRequestIntoTemplateRequest#DesiredValue
   */
  readonly desiredValue: number;

}

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
 * @schema ServiceQuotasRequestServiceQuotaIncreaseRequest
 */
export interface ServiceQuotasRequestServiceQuotaIncreaseRequest {
  /**
   * @schema ServiceQuotasRequestServiceQuotaIncreaseRequest#ServiceCode
   */
  readonly serviceCode: string;

  /**
   * @schema ServiceQuotasRequestServiceQuotaIncreaseRequest#QuotaCode
   */
  readonly quotaCode: string;

  /**
   * @schema ServiceQuotasRequestServiceQuotaIncreaseRequest#DesiredValue
   */
  readonly desiredValue: number;

}

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
