import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class ServiceQuotasClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public associateServiceQuotaTemplate(): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateServiceQuotaTemplate',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.AssociateServiceQuotaTemplate'),
        parameters: {
        },
      },
    };
    new cr.AwsCustomResource(this, 'AssociateServiceQuotaTemplate', props);
  }

  public deleteServiceQuotaIncreaseRequestFromTemplate(input: shapes.ServiceQuotasDeleteServiceQuotaIncreaseRequestFromTemplateRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteServiceQuotaIncreaseRequestFromTemplate',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.DeleteServiceQuotaIncreaseRequestFromTemplate'),
        parameters: {
          ServiceCode: input.serviceCode,
          QuotaCode: input.quotaCode,
          AwsRegion: input.awsRegion,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteServiceQuotaIncreaseRequestFromTemplate', props);
  }

  public disassociateServiceQuotaTemplate(): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateServiceQuotaTemplate',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.DisassociateServiceQuotaTemplate'),
        parameters: {
        },
      },
    };
    new cr.AwsCustomResource(this, 'DisassociateServiceQuotaTemplate', props);
  }

  public fetchAwsDefaultServiceQuota(input: shapes.ServiceQuotasGetAwsDefaultServiceQuotaRequest): ServiceQuotasResponsesFetchAwsDefaultServiceQuota {
    return new ServiceQuotasResponsesFetchAwsDefaultServiceQuota(this, this.__resources, input);
  }

  public fetchAssociationForServiceQuotaTemplate(): ServiceQuotasResponsesFetchAssociationForServiceQuotaTemplate {
    return new ServiceQuotasResponsesFetchAssociationForServiceQuotaTemplate(this, this.__resources);
  }

  public fetchRequestedServiceQuotaChange(input: shapes.ServiceQuotasGetRequestedServiceQuotaChangeRequest): ServiceQuotasResponsesFetchRequestedServiceQuotaChange {
    return new ServiceQuotasResponsesFetchRequestedServiceQuotaChange(this, this.__resources, input);
  }

  public fetchServiceQuota(input: shapes.ServiceQuotasGetServiceQuotaRequest): ServiceQuotasResponsesFetchServiceQuota {
    return new ServiceQuotasResponsesFetchServiceQuota(this, this.__resources, input);
  }

  public fetchServiceQuotaIncreaseRequestFromTemplate(input: shapes.ServiceQuotasGetServiceQuotaIncreaseRequestFromTemplateRequest): ServiceQuotasResponsesFetchServiceQuotaIncreaseRequestFromTemplate {
    return new ServiceQuotasResponsesFetchServiceQuotaIncreaseRequestFromTemplate(this, this.__resources, input);
  }

  public listAwsDefaultServiceQuotas(input: shapes.ServiceQuotasListAwsDefaultServiceQuotasRequest): ServiceQuotasResponsesListAwsDefaultServiceQuotas {
    return new ServiceQuotasResponsesListAwsDefaultServiceQuotas(this, this.__resources, input);
  }

  public listRequestedServiceQuotaChangeHistory(input: shapes.ServiceQuotasListRequestedServiceQuotaChangeHistoryRequest): ServiceQuotasResponsesListRequestedServiceQuotaChangeHistory {
    return new ServiceQuotasResponsesListRequestedServiceQuotaChangeHistory(this, this.__resources, input);
  }

  public listRequestedServiceQuotaChangeHistoryByQuota(input: shapes.ServiceQuotasListRequestedServiceQuotaChangeHistoryByQuotaRequest): ServiceQuotasResponsesListRequestedServiceQuotaChangeHistoryByQuota {
    return new ServiceQuotasResponsesListRequestedServiceQuotaChangeHistoryByQuota(this, this.__resources, input);
  }

  public listServiceQuotaIncreaseRequestsInTemplate(input: shapes.ServiceQuotasListServiceQuotaIncreaseRequestsInTemplateRequest): ServiceQuotasResponsesListServiceQuotaIncreaseRequestsInTemplate {
    return new ServiceQuotasResponsesListServiceQuotaIncreaseRequestsInTemplate(this, this.__resources, input);
  }

  public listServiceQuotas(input: shapes.ServiceQuotasListServiceQuotasRequest): ServiceQuotasResponsesListServiceQuotas {
    return new ServiceQuotasResponsesListServiceQuotas(this, this.__resources, input);
  }

  public listServices(input: shapes.ServiceQuotasListServicesRequest): ServiceQuotasResponsesListServices {
    return new ServiceQuotasResponsesListServices(this, this.__resources, input);
  }

  public putServiceQuotaIncreaseRequestIntoTemplate(input: shapes.ServiceQuotasPutServiceQuotaIncreaseRequestIntoTemplateRequest): ServiceQuotasResponsesPutServiceQuotaIncreaseRequestIntoTemplate {
    return new ServiceQuotasResponsesPutServiceQuotaIncreaseRequestIntoTemplate(this, this.__resources, input);
  }

  public requestServiceQuotaIncrease(input: shapes.ServiceQuotasRequestServiceQuotaIncreaseRequest): ServiceQuotasResponsesRequestServiceQuotaIncrease {
    return new ServiceQuotasResponsesRequestServiceQuotaIncrease(this, this.__resources, input);
  }

}

export class ServiceQuotasResponsesFetchAwsDefaultServiceQuota {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceQuotasGetAwsDefaultServiceQuotaRequest) {
  }

  public get quota(): ServiceQuotasResponsesFetchAwsDefaultServiceQuotaQuota {
    return new ServiceQuotasResponsesFetchAwsDefaultServiceQuotaQuota(this.__scope, this.__resources, this.__input);
  }

}

export class ServiceQuotasResponsesFetchAwsDefaultServiceQuotaQuota {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceQuotasGetAwsDefaultServiceQuotaRequest) {
  }

  public get serviceCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAwsDefaultServiceQuota',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.GetAWSDefaultServiceQuota.Quota.ServiceCode'),
        outputPath: 'Quota.ServiceCode',
        parameters: {
          ServiceCode: this.__input.serviceCode,
          QuotaCode: this.__input.quotaCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAWSDefaultServiceQuota.Quota.ServiceCode', props);
    return resource.getResponseField('Quota.ServiceCode') as unknown as string;
  }

  public get serviceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAwsDefaultServiceQuota',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.GetAWSDefaultServiceQuota.Quota.ServiceName'),
        outputPath: 'Quota.ServiceName',
        parameters: {
          ServiceCode: this.__input.serviceCode,
          QuotaCode: this.__input.quotaCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAWSDefaultServiceQuota.Quota.ServiceName', props);
    return resource.getResponseField('Quota.ServiceName') as unknown as string;
  }

  public get quotaArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAwsDefaultServiceQuota',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.GetAWSDefaultServiceQuota.Quota.QuotaArn'),
        outputPath: 'Quota.QuotaArn',
        parameters: {
          ServiceCode: this.__input.serviceCode,
          QuotaCode: this.__input.quotaCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAWSDefaultServiceQuota.Quota.QuotaArn', props);
    return resource.getResponseField('Quota.QuotaArn') as unknown as string;
  }

  public get quotaCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAwsDefaultServiceQuota',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.GetAWSDefaultServiceQuota.Quota.QuotaCode'),
        outputPath: 'Quota.QuotaCode',
        parameters: {
          ServiceCode: this.__input.serviceCode,
          QuotaCode: this.__input.quotaCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAWSDefaultServiceQuota.Quota.QuotaCode', props);
    return resource.getResponseField('Quota.QuotaCode') as unknown as string;
  }

  public get quotaName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAwsDefaultServiceQuota',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.GetAWSDefaultServiceQuota.Quota.QuotaName'),
        outputPath: 'Quota.QuotaName',
        parameters: {
          ServiceCode: this.__input.serviceCode,
          QuotaCode: this.__input.quotaCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAWSDefaultServiceQuota.Quota.QuotaName', props);
    return resource.getResponseField('Quota.QuotaName') as unknown as string;
  }

  public get value(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAwsDefaultServiceQuota',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.GetAWSDefaultServiceQuota.Quota.Value'),
        outputPath: 'Quota.Value',
        parameters: {
          ServiceCode: this.__input.serviceCode,
          QuotaCode: this.__input.quotaCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAWSDefaultServiceQuota.Quota.Value', props);
    return resource.getResponseField('Quota.Value') as unknown as number;
  }

  public get unit(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAwsDefaultServiceQuota',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.GetAWSDefaultServiceQuota.Quota.Unit'),
        outputPath: 'Quota.Unit',
        parameters: {
          ServiceCode: this.__input.serviceCode,
          QuotaCode: this.__input.quotaCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAWSDefaultServiceQuota.Quota.Unit', props);
    return resource.getResponseField('Quota.Unit') as unknown as string;
  }

  public get adjustable(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAwsDefaultServiceQuota',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.GetAWSDefaultServiceQuota.Quota.Adjustable'),
        outputPath: 'Quota.Adjustable',
        parameters: {
          ServiceCode: this.__input.serviceCode,
          QuotaCode: this.__input.quotaCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAWSDefaultServiceQuota.Quota.Adjustable', props);
    return resource.getResponseField('Quota.Adjustable') as unknown as boolean;
  }

  public get globalQuota(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAwsDefaultServiceQuota',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.GetAWSDefaultServiceQuota.Quota.GlobalQuota'),
        outputPath: 'Quota.GlobalQuota',
        parameters: {
          ServiceCode: this.__input.serviceCode,
          QuotaCode: this.__input.quotaCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAWSDefaultServiceQuota.Quota.GlobalQuota', props);
    return resource.getResponseField('Quota.GlobalQuota') as unknown as boolean;
  }

  public get usageMetric(): ServiceQuotasResponsesFetchAwsDefaultServiceQuotaQuotaUsageMetric {
    return new ServiceQuotasResponsesFetchAwsDefaultServiceQuotaQuotaUsageMetric(this.__scope, this.__resources, this.__input);
  }

  public get period(): ServiceQuotasResponsesFetchAwsDefaultServiceQuotaQuotaPeriod {
    return new ServiceQuotasResponsesFetchAwsDefaultServiceQuotaQuotaPeriod(this.__scope, this.__resources, this.__input);
  }

  public get errorReason(): ServiceQuotasResponsesFetchAwsDefaultServiceQuotaQuotaErrorReason {
    return new ServiceQuotasResponsesFetchAwsDefaultServiceQuotaQuotaErrorReason(this.__scope, this.__resources, this.__input);
  }

}

export class ServiceQuotasResponsesFetchAwsDefaultServiceQuotaQuotaUsageMetric {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceQuotasGetAwsDefaultServiceQuotaRequest) {
  }

  public get metricNamespace(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAwsDefaultServiceQuota',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.GetAWSDefaultServiceQuota.Quota.UsageMetric.MetricNamespace'),
        outputPath: 'Quota.UsageMetric.MetricNamespace',
        parameters: {
          ServiceCode: this.__input.serviceCode,
          QuotaCode: this.__input.quotaCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAWSDefaultServiceQuota.Quota.UsageMetric.MetricNamespace', props);
    return resource.getResponseField('Quota.UsageMetric.MetricNamespace') as unknown as string;
  }

  public get metricName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAwsDefaultServiceQuota',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.GetAWSDefaultServiceQuota.Quota.UsageMetric.MetricName'),
        outputPath: 'Quota.UsageMetric.MetricName',
        parameters: {
          ServiceCode: this.__input.serviceCode,
          QuotaCode: this.__input.quotaCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAWSDefaultServiceQuota.Quota.UsageMetric.MetricName', props);
    return resource.getResponseField('Quota.UsageMetric.MetricName') as unknown as string;
  }

  public get metricDimensions(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAwsDefaultServiceQuota',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.GetAWSDefaultServiceQuota.Quota.UsageMetric.MetricDimensions'),
        outputPath: 'Quota.UsageMetric.MetricDimensions',
        parameters: {
          ServiceCode: this.__input.serviceCode,
          QuotaCode: this.__input.quotaCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAWSDefaultServiceQuota.Quota.UsageMetric.MetricDimensions', props);
    return resource.getResponseField('Quota.UsageMetric.MetricDimensions') as unknown as Record<string, string>;
  }

  public get metricStatisticRecommendation(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAwsDefaultServiceQuota',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.GetAWSDefaultServiceQuota.Quota.UsageMetric.MetricStatisticRecommendation'),
        outputPath: 'Quota.UsageMetric.MetricStatisticRecommendation',
        parameters: {
          ServiceCode: this.__input.serviceCode,
          QuotaCode: this.__input.quotaCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAWSDefaultServiceQuota.Quota.UsageMetric.MetricStatisticRecommendation', props);
    return resource.getResponseField('Quota.UsageMetric.MetricStatisticRecommendation') as unknown as string;
  }

}

export class ServiceQuotasResponsesFetchAwsDefaultServiceQuotaQuotaPeriod {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceQuotasGetAwsDefaultServiceQuotaRequest) {
  }

  public get periodValue(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAwsDefaultServiceQuota',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.GetAWSDefaultServiceQuota.Quota.Period.PeriodValue'),
        outputPath: 'Quota.Period.PeriodValue',
        parameters: {
          ServiceCode: this.__input.serviceCode,
          QuotaCode: this.__input.quotaCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAWSDefaultServiceQuota.Quota.Period.PeriodValue', props);
    return resource.getResponseField('Quota.Period.PeriodValue') as unknown as number;
  }

  public get periodUnit(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAwsDefaultServiceQuota',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.GetAWSDefaultServiceQuota.Quota.Period.PeriodUnit'),
        outputPath: 'Quota.Period.PeriodUnit',
        parameters: {
          ServiceCode: this.__input.serviceCode,
          QuotaCode: this.__input.quotaCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAWSDefaultServiceQuota.Quota.Period.PeriodUnit', props);
    return resource.getResponseField('Quota.Period.PeriodUnit') as unknown as string;
  }

}

export class ServiceQuotasResponsesFetchAwsDefaultServiceQuotaQuotaErrorReason {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceQuotasGetAwsDefaultServiceQuotaRequest) {
  }

  public get errorCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAwsDefaultServiceQuota',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.GetAWSDefaultServiceQuota.Quota.ErrorReason.ErrorCode'),
        outputPath: 'Quota.ErrorReason.ErrorCode',
        parameters: {
          ServiceCode: this.__input.serviceCode,
          QuotaCode: this.__input.quotaCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAWSDefaultServiceQuota.Quota.ErrorReason.ErrorCode', props);
    return resource.getResponseField('Quota.ErrorReason.ErrorCode') as unknown as string;
  }

  public get errorMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAwsDefaultServiceQuota',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.GetAWSDefaultServiceQuota.Quota.ErrorReason.ErrorMessage'),
        outputPath: 'Quota.ErrorReason.ErrorMessage',
        parameters: {
          ServiceCode: this.__input.serviceCode,
          QuotaCode: this.__input.quotaCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAWSDefaultServiceQuota.Quota.ErrorReason.ErrorMessage', props);
    return resource.getResponseField('Quota.ErrorReason.ErrorMessage') as unknown as string;
  }

}

export class ServiceQuotasResponsesFetchAssociationForServiceQuotaTemplate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get serviceQuotaTemplateAssociationStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAssociationForServiceQuotaTemplate',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.GetAssociationForServiceQuotaTemplate.ServiceQuotaTemplateAssociationStatus'),
        outputPath: 'ServiceQuotaTemplateAssociationStatus',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAssociationForServiceQuotaTemplate.ServiceQuotaTemplateAssociationStatus', props);
    return resource.getResponseField('ServiceQuotaTemplateAssociationStatus') as unknown as string;
  }

}

export class ServiceQuotasResponsesFetchRequestedServiceQuotaChange {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceQuotasGetRequestedServiceQuotaChangeRequest) {
  }

  public get requestedQuota(): ServiceQuotasResponsesFetchRequestedServiceQuotaChangeRequestedQuota {
    return new ServiceQuotasResponsesFetchRequestedServiceQuotaChangeRequestedQuota(this.__scope, this.__resources, this.__input);
  }

}

export class ServiceQuotasResponsesFetchRequestedServiceQuotaChangeRequestedQuota {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceQuotasGetRequestedServiceQuotaChangeRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRequestedServiceQuotaChange',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.GetRequestedServiceQuotaChange.RequestedQuota.Id'),
        outputPath: 'RequestedQuota.Id',
        parameters: {
          RequestId: this.__input.requestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRequestedServiceQuotaChange.RequestedQuota.Id', props);
    return resource.getResponseField('RequestedQuota.Id') as unknown as string;
  }

  public get caseId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRequestedServiceQuotaChange',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.GetRequestedServiceQuotaChange.RequestedQuota.CaseId'),
        outputPath: 'RequestedQuota.CaseId',
        parameters: {
          RequestId: this.__input.requestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRequestedServiceQuotaChange.RequestedQuota.CaseId', props);
    return resource.getResponseField('RequestedQuota.CaseId') as unknown as string;
  }

  public get serviceCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRequestedServiceQuotaChange',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.GetRequestedServiceQuotaChange.RequestedQuota.ServiceCode'),
        outputPath: 'RequestedQuota.ServiceCode',
        parameters: {
          RequestId: this.__input.requestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRequestedServiceQuotaChange.RequestedQuota.ServiceCode', props);
    return resource.getResponseField('RequestedQuota.ServiceCode') as unknown as string;
  }

  public get serviceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRequestedServiceQuotaChange',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.GetRequestedServiceQuotaChange.RequestedQuota.ServiceName'),
        outputPath: 'RequestedQuota.ServiceName',
        parameters: {
          RequestId: this.__input.requestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRequestedServiceQuotaChange.RequestedQuota.ServiceName', props);
    return resource.getResponseField('RequestedQuota.ServiceName') as unknown as string;
  }

  public get quotaCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRequestedServiceQuotaChange',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.GetRequestedServiceQuotaChange.RequestedQuota.QuotaCode'),
        outputPath: 'RequestedQuota.QuotaCode',
        parameters: {
          RequestId: this.__input.requestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRequestedServiceQuotaChange.RequestedQuota.QuotaCode', props);
    return resource.getResponseField('RequestedQuota.QuotaCode') as unknown as string;
  }

  public get quotaName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRequestedServiceQuotaChange',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.GetRequestedServiceQuotaChange.RequestedQuota.QuotaName'),
        outputPath: 'RequestedQuota.QuotaName',
        parameters: {
          RequestId: this.__input.requestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRequestedServiceQuotaChange.RequestedQuota.QuotaName', props);
    return resource.getResponseField('RequestedQuota.QuotaName') as unknown as string;
  }

  public get desiredValue(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRequestedServiceQuotaChange',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.GetRequestedServiceQuotaChange.RequestedQuota.DesiredValue'),
        outputPath: 'RequestedQuota.DesiredValue',
        parameters: {
          RequestId: this.__input.requestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRequestedServiceQuotaChange.RequestedQuota.DesiredValue', props);
    return resource.getResponseField('RequestedQuota.DesiredValue') as unknown as number;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRequestedServiceQuotaChange',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.GetRequestedServiceQuotaChange.RequestedQuota.Status'),
        outputPath: 'RequestedQuota.Status',
        parameters: {
          RequestId: this.__input.requestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRequestedServiceQuotaChange.RequestedQuota.Status', props);
    return resource.getResponseField('RequestedQuota.Status') as unknown as string;
  }

  public get created(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRequestedServiceQuotaChange',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.GetRequestedServiceQuotaChange.RequestedQuota.Created'),
        outputPath: 'RequestedQuota.Created',
        parameters: {
          RequestId: this.__input.requestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRequestedServiceQuotaChange.RequestedQuota.Created', props);
    return resource.getResponseField('RequestedQuota.Created') as unknown as string;
  }

  public get lastUpdated(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRequestedServiceQuotaChange',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.GetRequestedServiceQuotaChange.RequestedQuota.LastUpdated'),
        outputPath: 'RequestedQuota.LastUpdated',
        parameters: {
          RequestId: this.__input.requestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRequestedServiceQuotaChange.RequestedQuota.LastUpdated', props);
    return resource.getResponseField('RequestedQuota.LastUpdated') as unknown as string;
  }

  public get requester(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRequestedServiceQuotaChange',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.GetRequestedServiceQuotaChange.RequestedQuota.Requester'),
        outputPath: 'RequestedQuota.Requester',
        parameters: {
          RequestId: this.__input.requestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRequestedServiceQuotaChange.RequestedQuota.Requester', props);
    return resource.getResponseField('RequestedQuota.Requester') as unknown as string;
  }

  public get quotaArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRequestedServiceQuotaChange',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.GetRequestedServiceQuotaChange.RequestedQuota.QuotaArn'),
        outputPath: 'RequestedQuota.QuotaArn',
        parameters: {
          RequestId: this.__input.requestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRequestedServiceQuotaChange.RequestedQuota.QuotaArn', props);
    return resource.getResponseField('RequestedQuota.QuotaArn') as unknown as string;
  }

  public get globalQuota(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRequestedServiceQuotaChange',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.GetRequestedServiceQuotaChange.RequestedQuota.GlobalQuota'),
        outputPath: 'RequestedQuota.GlobalQuota',
        parameters: {
          RequestId: this.__input.requestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRequestedServiceQuotaChange.RequestedQuota.GlobalQuota', props);
    return resource.getResponseField('RequestedQuota.GlobalQuota') as unknown as boolean;
  }

  public get unit(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRequestedServiceQuotaChange',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.GetRequestedServiceQuotaChange.RequestedQuota.Unit'),
        outputPath: 'RequestedQuota.Unit',
        parameters: {
          RequestId: this.__input.requestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRequestedServiceQuotaChange.RequestedQuota.Unit', props);
    return resource.getResponseField('RequestedQuota.Unit') as unknown as string;
  }

}

export class ServiceQuotasResponsesFetchServiceQuota {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceQuotasGetServiceQuotaRequest) {
  }

  public get quota(): ServiceQuotasResponsesFetchServiceQuotaQuota {
    return new ServiceQuotasResponsesFetchServiceQuotaQuota(this.__scope, this.__resources, this.__input);
  }

}

export class ServiceQuotasResponsesFetchServiceQuotaQuota {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceQuotasGetServiceQuotaRequest) {
  }

  public get serviceCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceQuota',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.GetServiceQuota.Quota.ServiceCode'),
        outputPath: 'Quota.ServiceCode',
        parameters: {
          ServiceCode: this.__input.serviceCode,
          QuotaCode: this.__input.quotaCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceQuota.Quota.ServiceCode', props);
    return resource.getResponseField('Quota.ServiceCode') as unknown as string;
  }

  public get serviceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceQuota',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.GetServiceQuota.Quota.ServiceName'),
        outputPath: 'Quota.ServiceName',
        parameters: {
          ServiceCode: this.__input.serviceCode,
          QuotaCode: this.__input.quotaCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceQuota.Quota.ServiceName', props);
    return resource.getResponseField('Quota.ServiceName') as unknown as string;
  }

  public get quotaArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceQuota',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.GetServiceQuota.Quota.QuotaArn'),
        outputPath: 'Quota.QuotaArn',
        parameters: {
          ServiceCode: this.__input.serviceCode,
          QuotaCode: this.__input.quotaCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceQuota.Quota.QuotaArn', props);
    return resource.getResponseField('Quota.QuotaArn') as unknown as string;
  }

  public get quotaCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceQuota',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.GetServiceQuota.Quota.QuotaCode'),
        outputPath: 'Quota.QuotaCode',
        parameters: {
          ServiceCode: this.__input.serviceCode,
          QuotaCode: this.__input.quotaCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceQuota.Quota.QuotaCode', props);
    return resource.getResponseField('Quota.QuotaCode') as unknown as string;
  }

  public get quotaName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceQuota',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.GetServiceQuota.Quota.QuotaName'),
        outputPath: 'Quota.QuotaName',
        parameters: {
          ServiceCode: this.__input.serviceCode,
          QuotaCode: this.__input.quotaCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceQuota.Quota.QuotaName', props);
    return resource.getResponseField('Quota.QuotaName') as unknown as string;
  }

  public get value(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceQuota',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.GetServiceQuota.Quota.Value'),
        outputPath: 'Quota.Value',
        parameters: {
          ServiceCode: this.__input.serviceCode,
          QuotaCode: this.__input.quotaCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceQuota.Quota.Value', props);
    return resource.getResponseField('Quota.Value') as unknown as number;
  }

  public get unit(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceQuota',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.GetServiceQuota.Quota.Unit'),
        outputPath: 'Quota.Unit',
        parameters: {
          ServiceCode: this.__input.serviceCode,
          QuotaCode: this.__input.quotaCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceQuota.Quota.Unit', props);
    return resource.getResponseField('Quota.Unit') as unknown as string;
  }

  public get adjustable(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceQuota',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.GetServiceQuota.Quota.Adjustable'),
        outputPath: 'Quota.Adjustable',
        parameters: {
          ServiceCode: this.__input.serviceCode,
          QuotaCode: this.__input.quotaCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceQuota.Quota.Adjustable', props);
    return resource.getResponseField('Quota.Adjustable') as unknown as boolean;
  }

  public get globalQuota(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceQuota',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.GetServiceQuota.Quota.GlobalQuota'),
        outputPath: 'Quota.GlobalQuota',
        parameters: {
          ServiceCode: this.__input.serviceCode,
          QuotaCode: this.__input.quotaCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceQuota.Quota.GlobalQuota', props);
    return resource.getResponseField('Quota.GlobalQuota') as unknown as boolean;
  }

  public get usageMetric(): ServiceQuotasResponsesFetchServiceQuotaQuotaUsageMetric {
    return new ServiceQuotasResponsesFetchServiceQuotaQuotaUsageMetric(this.__scope, this.__resources, this.__input);
  }

  public get period(): ServiceQuotasResponsesFetchServiceQuotaQuotaPeriod {
    return new ServiceQuotasResponsesFetchServiceQuotaQuotaPeriod(this.__scope, this.__resources, this.__input);
  }

  public get errorReason(): ServiceQuotasResponsesFetchServiceQuotaQuotaErrorReason {
    return new ServiceQuotasResponsesFetchServiceQuotaQuotaErrorReason(this.__scope, this.__resources, this.__input);
  }

}

export class ServiceQuotasResponsesFetchServiceQuotaQuotaUsageMetric {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceQuotasGetServiceQuotaRequest) {
  }

  public get metricNamespace(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceQuota',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.GetServiceQuota.Quota.UsageMetric.MetricNamespace'),
        outputPath: 'Quota.UsageMetric.MetricNamespace',
        parameters: {
          ServiceCode: this.__input.serviceCode,
          QuotaCode: this.__input.quotaCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceQuota.Quota.UsageMetric.MetricNamespace', props);
    return resource.getResponseField('Quota.UsageMetric.MetricNamespace') as unknown as string;
  }

  public get metricName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceQuota',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.GetServiceQuota.Quota.UsageMetric.MetricName'),
        outputPath: 'Quota.UsageMetric.MetricName',
        parameters: {
          ServiceCode: this.__input.serviceCode,
          QuotaCode: this.__input.quotaCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceQuota.Quota.UsageMetric.MetricName', props);
    return resource.getResponseField('Quota.UsageMetric.MetricName') as unknown as string;
  }

  public get metricDimensions(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceQuota',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.GetServiceQuota.Quota.UsageMetric.MetricDimensions'),
        outputPath: 'Quota.UsageMetric.MetricDimensions',
        parameters: {
          ServiceCode: this.__input.serviceCode,
          QuotaCode: this.__input.quotaCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceQuota.Quota.UsageMetric.MetricDimensions', props);
    return resource.getResponseField('Quota.UsageMetric.MetricDimensions') as unknown as Record<string, string>;
  }

  public get metricStatisticRecommendation(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceQuota',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.GetServiceQuota.Quota.UsageMetric.MetricStatisticRecommendation'),
        outputPath: 'Quota.UsageMetric.MetricStatisticRecommendation',
        parameters: {
          ServiceCode: this.__input.serviceCode,
          QuotaCode: this.__input.quotaCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceQuota.Quota.UsageMetric.MetricStatisticRecommendation', props);
    return resource.getResponseField('Quota.UsageMetric.MetricStatisticRecommendation') as unknown as string;
  }

}

export class ServiceQuotasResponsesFetchServiceQuotaQuotaPeriod {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceQuotasGetServiceQuotaRequest) {
  }

  public get periodValue(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceQuota',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.GetServiceQuota.Quota.Period.PeriodValue'),
        outputPath: 'Quota.Period.PeriodValue',
        parameters: {
          ServiceCode: this.__input.serviceCode,
          QuotaCode: this.__input.quotaCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceQuota.Quota.Period.PeriodValue', props);
    return resource.getResponseField('Quota.Period.PeriodValue') as unknown as number;
  }

  public get periodUnit(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceQuota',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.GetServiceQuota.Quota.Period.PeriodUnit'),
        outputPath: 'Quota.Period.PeriodUnit',
        parameters: {
          ServiceCode: this.__input.serviceCode,
          QuotaCode: this.__input.quotaCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceQuota.Quota.Period.PeriodUnit', props);
    return resource.getResponseField('Quota.Period.PeriodUnit') as unknown as string;
  }

}

export class ServiceQuotasResponsesFetchServiceQuotaQuotaErrorReason {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceQuotasGetServiceQuotaRequest) {
  }

  public get errorCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceQuota',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.GetServiceQuota.Quota.ErrorReason.ErrorCode'),
        outputPath: 'Quota.ErrorReason.ErrorCode',
        parameters: {
          ServiceCode: this.__input.serviceCode,
          QuotaCode: this.__input.quotaCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceQuota.Quota.ErrorReason.ErrorCode', props);
    return resource.getResponseField('Quota.ErrorReason.ErrorCode') as unknown as string;
  }

  public get errorMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceQuota',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.GetServiceQuota.Quota.ErrorReason.ErrorMessage'),
        outputPath: 'Quota.ErrorReason.ErrorMessage',
        parameters: {
          ServiceCode: this.__input.serviceCode,
          QuotaCode: this.__input.quotaCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceQuota.Quota.ErrorReason.ErrorMessage', props);
    return resource.getResponseField('Quota.ErrorReason.ErrorMessage') as unknown as string;
  }

}

export class ServiceQuotasResponsesFetchServiceQuotaIncreaseRequestFromTemplate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceQuotasGetServiceQuotaIncreaseRequestFromTemplateRequest) {
  }

  public get serviceQuotaIncreaseRequestInTemplate(): ServiceQuotasResponsesFetchServiceQuotaIncreaseRequestFromTemplateServiceQuotaIncreaseRequestInTemplate {
    return new ServiceQuotasResponsesFetchServiceQuotaIncreaseRequestFromTemplateServiceQuotaIncreaseRequestInTemplate(this.__scope, this.__resources, this.__input);
  }

}

export class ServiceQuotasResponsesFetchServiceQuotaIncreaseRequestFromTemplateServiceQuotaIncreaseRequestInTemplate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceQuotasGetServiceQuotaIncreaseRequestFromTemplateRequest) {
  }

  public get serviceCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceQuotaIncreaseRequestFromTemplate',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.GetServiceQuotaIncreaseRequestFromTemplate.ServiceQuotaIncreaseRequestInTemplate.ServiceCode'),
        outputPath: 'ServiceQuotaIncreaseRequestInTemplate.ServiceCode',
        parameters: {
          ServiceCode: this.__input.serviceCode,
          QuotaCode: this.__input.quotaCode,
          AwsRegion: this.__input.awsRegion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceQuotaIncreaseRequestFromTemplate.ServiceQuotaIncreaseRequestInTemplate.ServiceCode', props);
    return resource.getResponseField('ServiceQuotaIncreaseRequestInTemplate.ServiceCode') as unknown as string;
  }

  public get serviceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceQuotaIncreaseRequestFromTemplate',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.GetServiceQuotaIncreaseRequestFromTemplate.ServiceQuotaIncreaseRequestInTemplate.ServiceName'),
        outputPath: 'ServiceQuotaIncreaseRequestInTemplate.ServiceName',
        parameters: {
          ServiceCode: this.__input.serviceCode,
          QuotaCode: this.__input.quotaCode,
          AwsRegion: this.__input.awsRegion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceQuotaIncreaseRequestFromTemplate.ServiceQuotaIncreaseRequestInTemplate.ServiceName', props);
    return resource.getResponseField('ServiceQuotaIncreaseRequestInTemplate.ServiceName') as unknown as string;
  }

  public get quotaCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceQuotaIncreaseRequestFromTemplate',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.GetServiceQuotaIncreaseRequestFromTemplate.ServiceQuotaIncreaseRequestInTemplate.QuotaCode'),
        outputPath: 'ServiceQuotaIncreaseRequestInTemplate.QuotaCode',
        parameters: {
          ServiceCode: this.__input.serviceCode,
          QuotaCode: this.__input.quotaCode,
          AwsRegion: this.__input.awsRegion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceQuotaIncreaseRequestFromTemplate.ServiceQuotaIncreaseRequestInTemplate.QuotaCode', props);
    return resource.getResponseField('ServiceQuotaIncreaseRequestInTemplate.QuotaCode') as unknown as string;
  }

  public get quotaName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceQuotaIncreaseRequestFromTemplate',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.GetServiceQuotaIncreaseRequestFromTemplate.ServiceQuotaIncreaseRequestInTemplate.QuotaName'),
        outputPath: 'ServiceQuotaIncreaseRequestInTemplate.QuotaName',
        parameters: {
          ServiceCode: this.__input.serviceCode,
          QuotaCode: this.__input.quotaCode,
          AwsRegion: this.__input.awsRegion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceQuotaIncreaseRequestFromTemplate.ServiceQuotaIncreaseRequestInTemplate.QuotaName', props);
    return resource.getResponseField('ServiceQuotaIncreaseRequestInTemplate.QuotaName') as unknown as string;
  }

  public get desiredValue(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceQuotaIncreaseRequestFromTemplate',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.GetServiceQuotaIncreaseRequestFromTemplate.ServiceQuotaIncreaseRequestInTemplate.DesiredValue'),
        outputPath: 'ServiceQuotaIncreaseRequestInTemplate.DesiredValue',
        parameters: {
          ServiceCode: this.__input.serviceCode,
          QuotaCode: this.__input.quotaCode,
          AwsRegion: this.__input.awsRegion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceQuotaIncreaseRequestFromTemplate.ServiceQuotaIncreaseRequestInTemplate.DesiredValue', props);
    return resource.getResponseField('ServiceQuotaIncreaseRequestInTemplate.DesiredValue') as unknown as number;
  }

  public get awsRegion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceQuotaIncreaseRequestFromTemplate',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.GetServiceQuotaIncreaseRequestFromTemplate.ServiceQuotaIncreaseRequestInTemplate.AwsRegion'),
        outputPath: 'ServiceQuotaIncreaseRequestInTemplate.AwsRegion',
        parameters: {
          ServiceCode: this.__input.serviceCode,
          QuotaCode: this.__input.quotaCode,
          AwsRegion: this.__input.awsRegion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceQuotaIncreaseRequestFromTemplate.ServiceQuotaIncreaseRequestInTemplate.AwsRegion', props);
    return resource.getResponseField('ServiceQuotaIncreaseRequestInTemplate.AwsRegion') as unknown as string;
  }

  public get unit(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceQuotaIncreaseRequestFromTemplate',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.GetServiceQuotaIncreaseRequestFromTemplate.ServiceQuotaIncreaseRequestInTemplate.Unit'),
        outputPath: 'ServiceQuotaIncreaseRequestInTemplate.Unit',
        parameters: {
          ServiceCode: this.__input.serviceCode,
          QuotaCode: this.__input.quotaCode,
          AwsRegion: this.__input.awsRegion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceQuotaIncreaseRequestFromTemplate.ServiceQuotaIncreaseRequestInTemplate.Unit', props);
    return resource.getResponseField('ServiceQuotaIncreaseRequestInTemplate.Unit') as unknown as string;
  }

  public get globalQuota(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceQuotaIncreaseRequestFromTemplate',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.GetServiceQuotaIncreaseRequestFromTemplate.ServiceQuotaIncreaseRequestInTemplate.GlobalQuota'),
        outputPath: 'ServiceQuotaIncreaseRequestInTemplate.GlobalQuota',
        parameters: {
          ServiceCode: this.__input.serviceCode,
          QuotaCode: this.__input.quotaCode,
          AwsRegion: this.__input.awsRegion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceQuotaIncreaseRequestFromTemplate.ServiceQuotaIncreaseRequestInTemplate.GlobalQuota', props);
    return resource.getResponseField('ServiceQuotaIncreaseRequestInTemplate.GlobalQuota') as unknown as boolean;
  }

}

export class ServiceQuotasResponsesListAwsDefaultServiceQuotas {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceQuotasListAwsDefaultServiceQuotasRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAwsDefaultServiceQuotas',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.ListAWSDefaultServiceQuotas.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ServiceCode: this.__input.serviceCode,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAWSDefaultServiceQuotas.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get quotas(): shapes.ServiceQuotasServiceQuota[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAwsDefaultServiceQuotas',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.ListAWSDefaultServiceQuotas.Quotas'),
        outputPath: 'Quotas',
        parameters: {
          ServiceCode: this.__input.serviceCode,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAWSDefaultServiceQuotas.Quotas', props);
    return resource.getResponseField('Quotas') as unknown as shapes.ServiceQuotasServiceQuota[];
  }

}

export class ServiceQuotasResponsesListRequestedServiceQuotaChangeHistory {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceQuotasListRequestedServiceQuotaChangeHistoryRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRequestedServiceQuotaChangeHistory',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.ListRequestedServiceQuotaChangeHistory.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ServiceCode: this.__input.serviceCode,
          Status: this.__input.status,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRequestedServiceQuotaChangeHistory.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get requestedQuotas(): shapes.ServiceQuotasRequestedServiceQuotaChange[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRequestedServiceQuotaChangeHistory',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.ListRequestedServiceQuotaChangeHistory.RequestedQuotas'),
        outputPath: 'RequestedQuotas',
        parameters: {
          ServiceCode: this.__input.serviceCode,
          Status: this.__input.status,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRequestedServiceQuotaChangeHistory.RequestedQuotas', props);
    return resource.getResponseField('RequestedQuotas') as unknown as shapes.ServiceQuotasRequestedServiceQuotaChange[];
  }

}

export class ServiceQuotasResponsesListRequestedServiceQuotaChangeHistoryByQuota {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceQuotasListRequestedServiceQuotaChangeHistoryByQuotaRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRequestedServiceQuotaChangeHistoryByQuota',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.ListRequestedServiceQuotaChangeHistoryByQuota.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ServiceCode: this.__input.serviceCode,
          QuotaCode: this.__input.quotaCode,
          Status: this.__input.status,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRequestedServiceQuotaChangeHistoryByQuota.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get requestedQuotas(): shapes.ServiceQuotasRequestedServiceQuotaChange[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRequestedServiceQuotaChangeHistoryByQuota',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.ListRequestedServiceQuotaChangeHistoryByQuota.RequestedQuotas'),
        outputPath: 'RequestedQuotas',
        parameters: {
          ServiceCode: this.__input.serviceCode,
          QuotaCode: this.__input.quotaCode,
          Status: this.__input.status,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRequestedServiceQuotaChangeHistoryByQuota.RequestedQuotas', props);
    return resource.getResponseField('RequestedQuotas') as unknown as shapes.ServiceQuotasRequestedServiceQuotaChange[];
  }

}

export class ServiceQuotasResponsesListServiceQuotaIncreaseRequestsInTemplate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceQuotasListServiceQuotaIncreaseRequestsInTemplateRequest) {
  }

  public get serviceQuotaIncreaseRequestInTemplateList(): shapes.ServiceQuotasServiceQuotaIncreaseRequestInTemplate[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listServiceQuotaIncreaseRequestsInTemplate',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.ListServiceQuotaIncreaseRequestsInTemplate.ServiceQuotaIncreaseRequestInTemplateList'),
        outputPath: 'ServiceQuotaIncreaseRequestInTemplateList',
        parameters: {
          ServiceCode: this.__input.serviceCode,
          AwsRegion: this.__input.awsRegion,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListServiceQuotaIncreaseRequestsInTemplate.ServiceQuotaIncreaseRequestInTemplateList', props);
    return resource.getResponseField('ServiceQuotaIncreaseRequestInTemplateList') as unknown as shapes.ServiceQuotasServiceQuotaIncreaseRequestInTemplate[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listServiceQuotaIncreaseRequestsInTemplate',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.ListServiceQuotaIncreaseRequestsInTemplate.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ServiceCode: this.__input.serviceCode,
          AwsRegion: this.__input.awsRegion,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListServiceQuotaIncreaseRequestsInTemplate.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ServiceQuotasResponsesListServiceQuotas {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceQuotasListServiceQuotasRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listServiceQuotas',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.ListServiceQuotas.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ServiceCode: this.__input.serviceCode,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListServiceQuotas.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get quotas(): shapes.ServiceQuotasServiceQuota[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listServiceQuotas',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.ListServiceQuotas.Quotas'),
        outputPath: 'Quotas',
        parameters: {
          ServiceCode: this.__input.serviceCode,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListServiceQuotas.Quotas', props);
    return resource.getResponseField('Quotas') as unknown as shapes.ServiceQuotasServiceQuota[];
  }

}

export class ServiceQuotasResponsesListServices {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceQuotasListServicesRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listServices',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.ListServices.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListServices.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get services(): shapes.ServiceQuotasServiceInfo[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listServices',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.ListServices.Services'),
        outputPath: 'Services',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListServices.Services', props);
    return resource.getResponseField('Services') as unknown as shapes.ServiceQuotasServiceInfo[];
  }

}

export class ServiceQuotasResponsesPutServiceQuotaIncreaseRequestIntoTemplate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceQuotasPutServiceQuotaIncreaseRequestIntoTemplateRequest) {
  }

  public get serviceQuotaIncreaseRequestInTemplate(): ServiceQuotasResponsesPutServiceQuotaIncreaseRequestIntoTemplateServiceQuotaIncreaseRequestInTemplate {
    return new ServiceQuotasResponsesPutServiceQuotaIncreaseRequestIntoTemplateServiceQuotaIncreaseRequestInTemplate(this.__scope, this.__resources, this.__input);
  }

}

export class ServiceQuotasResponsesPutServiceQuotaIncreaseRequestIntoTemplateServiceQuotaIncreaseRequestInTemplate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceQuotasPutServiceQuotaIncreaseRequestIntoTemplateRequest) {
  }

  public get serviceCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putServiceQuotaIncreaseRequestIntoTemplate',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.PutServiceQuotaIncreaseRequestIntoTemplate.ServiceQuotaIncreaseRequestInTemplate.ServiceCode'),
        outputPath: 'ServiceQuotaIncreaseRequestInTemplate.ServiceCode',
        parameters: {
          QuotaCode: this.__input.quotaCode,
          ServiceCode: this.__input.serviceCode,
          AwsRegion: this.__input.awsRegion,
          DesiredValue: this.__input.desiredValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutServiceQuotaIncreaseRequestIntoTemplate.ServiceQuotaIncreaseRequestInTemplate.ServiceCode', props);
    return resource.getResponseField('ServiceQuotaIncreaseRequestInTemplate.ServiceCode') as unknown as string;
  }

  public get serviceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putServiceQuotaIncreaseRequestIntoTemplate',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.PutServiceQuotaIncreaseRequestIntoTemplate.ServiceQuotaIncreaseRequestInTemplate.ServiceName'),
        outputPath: 'ServiceQuotaIncreaseRequestInTemplate.ServiceName',
        parameters: {
          QuotaCode: this.__input.quotaCode,
          ServiceCode: this.__input.serviceCode,
          AwsRegion: this.__input.awsRegion,
          DesiredValue: this.__input.desiredValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutServiceQuotaIncreaseRequestIntoTemplate.ServiceQuotaIncreaseRequestInTemplate.ServiceName', props);
    return resource.getResponseField('ServiceQuotaIncreaseRequestInTemplate.ServiceName') as unknown as string;
  }

  public get quotaCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putServiceQuotaIncreaseRequestIntoTemplate',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.PutServiceQuotaIncreaseRequestIntoTemplate.ServiceQuotaIncreaseRequestInTemplate.QuotaCode'),
        outputPath: 'ServiceQuotaIncreaseRequestInTemplate.QuotaCode',
        parameters: {
          QuotaCode: this.__input.quotaCode,
          ServiceCode: this.__input.serviceCode,
          AwsRegion: this.__input.awsRegion,
          DesiredValue: this.__input.desiredValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutServiceQuotaIncreaseRequestIntoTemplate.ServiceQuotaIncreaseRequestInTemplate.QuotaCode', props);
    return resource.getResponseField('ServiceQuotaIncreaseRequestInTemplate.QuotaCode') as unknown as string;
  }

  public get quotaName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putServiceQuotaIncreaseRequestIntoTemplate',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.PutServiceQuotaIncreaseRequestIntoTemplate.ServiceQuotaIncreaseRequestInTemplate.QuotaName'),
        outputPath: 'ServiceQuotaIncreaseRequestInTemplate.QuotaName',
        parameters: {
          QuotaCode: this.__input.quotaCode,
          ServiceCode: this.__input.serviceCode,
          AwsRegion: this.__input.awsRegion,
          DesiredValue: this.__input.desiredValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutServiceQuotaIncreaseRequestIntoTemplate.ServiceQuotaIncreaseRequestInTemplate.QuotaName', props);
    return resource.getResponseField('ServiceQuotaIncreaseRequestInTemplate.QuotaName') as unknown as string;
  }

  public get desiredValue(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putServiceQuotaIncreaseRequestIntoTemplate',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.PutServiceQuotaIncreaseRequestIntoTemplate.ServiceQuotaIncreaseRequestInTemplate.DesiredValue'),
        outputPath: 'ServiceQuotaIncreaseRequestInTemplate.DesiredValue',
        parameters: {
          QuotaCode: this.__input.quotaCode,
          ServiceCode: this.__input.serviceCode,
          AwsRegion: this.__input.awsRegion,
          DesiredValue: this.__input.desiredValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutServiceQuotaIncreaseRequestIntoTemplate.ServiceQuotaIncreaseRequestInTemplate.DesiredValue', props);
    return resource.getResponseField('ServiceQuotaIncreaseRequestInTemplate.DesiredValue') as unknown as number;
  }

  public get awsRegion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putServiceQuotaIncreaseRequestIntoTemplate',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.PutServiceQuotaIncreaseRequestIntoTemplate.ServiceQuotaIncreaseRequestInTemplate.AwsRegion'),
        outputPath: 'ServiceQuotaIncreaseRequestInTemplate.AwsRegion',
        parameters: {
          QuotaCode: this.__input.quotaCode,
          ServiceCode: this.__input.serviceCode,
          AwsRegion: this.__input.awsRegion,
          DesiredValue: this.__input.desiredValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutServiceQuotaIncreaseRequestIntoTemplate.ServiceQuotaIncreaseRequestInTemplate.AwsRegion', props);
    return resource.getResponseField('ServiceQuotaIncreaseRequestInTemplate.AwsRegion') as unknown as string;
  }

  public get unit(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putServiceQuotaIncreaseRequestIntoTemplate',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.PutServiceQuotaIncreaseRequestIntoTemplate.ServiceQuotaIncreaseRequestInTemplate.Unit'),
        outputPath: 'ServiceQuotaIncreaseRequestInTemplate.Unit',
        parameters: {
          QuotaCode: this.__input.quotaCode,
          ServiceCode: this.__input.serviceCode,
          AwsRegion: this.__input.awsRegion,
          DesiredValue: this.__input.desiredValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutServiceQuotaIncreaseRequestIntoTemplate.ServiceQuotaIncreaseRequestInTemplate.Unit', props);
    return resource.getResponseField('ServiceQuotaIncreaseRequestInTemplate.Unit') as unknown as string;
  }

  public get globalQuota(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putServiceQuotaIncreaseRequestIntoTemplate',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.PutServiceQuotaIncreaseRequestIntoTemplate.ServiceQuotaIncreaseRequestInTemplate.GlobalQuota'),
        outputPath: 'ServiceQuotaIncreaseRequestInTemplate.GlobalQuota',
        parameters: {
          QuotaCode: this.__input.quotaCode,
          ServiceCode: this.__input.serviceCode,
          AwsRegion: this.__input.awsRegion,
          DesiredValue: this.__input.desiredValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutServiceQuotaIncreaseRequestIntoTemplate.ServiceQuotaIncreaseRequestInTemplate.GlobalQuota', props);
    return resource.getResponseField('ServiceQuotaIncreaseRequestInTemplate.GlobalQuota') as unknown as boolean;
  }

}

export class ServiceQuotasResponsesRequestServiceQuotaIncrease {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceQuotasRequestServiceQuotaIncreaseRequest) {
  }

  public get requestedQuota(): ServiceQuotasResponsesRequestServiceQuotaIncreaseRequestedQuota {
    return new ServiceQuotasResponsesRequestServiceQuotaIncreaseRequestedQuota(this.__scope, this.__resources, this.__input);
  }

}

export class ServiceQuotasResponsesRequestServiceQuotaIncreaseRequestedQuota {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceQuotasRequestServiceQuotaIncreaseRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'requestServiceQuotaIncrease',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.RequestServiceQuotaIncrease.RequestedQuota.Id'),
        outputPath: 'RequestedQuota.Id',
        parameters: {
          ServiceCode: this.__input.serviceCode,
          QuotaCode: this.__input.quotaCode,
          DesiredValue: this.__input.desiredValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RequestServiceQuotaIncrease.RequestedQuota.Id', props);
    return resource.getResponseField('RequestedQuota.Id') as unknown as string;
  }

  public get caseId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'requestServiceQuotaIncrease',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.RequestServiceQuotaIncrease.RequestedQuota.CaseId'),
        outputPath: 'RequestedQuota.CaseId',
        parameters: {
          ServiceCode: this.__input.serviceCode,
          QuotaCode: this.__input.quotaCode,
          DesiredValue: this.__input.desiredValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RequestServiceQuotaIncrease.RequestedQuota.CaseId', props);
    return resource.getResponseField('RequestedQuota.CaseId') as unknown as string;
  }

  public get serviceCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'requestServiceQuotaIncrease',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.RequestServiceQuotaIncrease.RequestedQuota.ServiceCode'),
        outputPath: 'RequestedQuota.ServiceCode',
        parameters: {
          ServiceCode: this.__input.serviceCode,
          QuotaCode: this.__input.quotaCode,
          DesiredValue: this.__input.desiredValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RequestServiceQuotaIncrease.RequestedQuota.ServiceCode', props);
    return resource.getResponseField('RequestedQuota.ServiceCode') as unknown as string;
  }

  public get serviceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'requestServiceQuotaIncrease',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.RequestServiceQuotaIncrease.RequestedQuota.ServiceName'),
        outputPath: 'RequestedQuota.ServiceName',
        parameters: {
          ServiceCode: this.__input.serviceCode,
          QuotaCode: this.__input.quotaCode,
          DesiredValue: this.__input.desiredValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RequestServiceQuotaIncrease.RequestedQuota.ServiceName', props);
    return resource.getResponseField('RequestedQuota.ServiceName') as unknown as string;
  }

  public get quotaCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'requestServiceQuotaIncrease',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.RequestServiceQuotaIncrease.RequestedQuota.QuotaCode'),
        outputPath: 'RequestedQuota.QuotaCode',
        parameters: {
          ServiceCode: this.__input.serviceCode,
          QuotaCode: this.__input.quotaCode,
          DesiredValue: this.__input.desiredValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RequestServiceQuotaIncrease.RequestedQuota.QuotaCode', props);
    return resource.getResponseField('RequestedQuota.QuotaCode') as unknown as string;
  }

  public get quotaName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'requestServiceQuotaIncrease',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.RequestServiceQuotaIncrease.RequestedQuota.QuotaName'),
        outputPath: 'RequestedQuota.QuotaName',
        parameters: {
          ServiceCode: this.__input.serviceCode,
          QuotaCode: this.__input.quotaCode,
          DesiredValue: this.__input.desiredValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RequestServiceQuotaIncrease.RequestedQuota.QuotaName', props);
    return resource.getResponseField('RequestedQuota.QuotaName') as unknown as string;
  }

  public get desiredValue(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'requestServiceQuotaIncrease',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.RequestServiceQuotaIncrease.RequestedQuota.DesiredValue'),
        outputPath: 'RequestedQuota.DesiredValue',
        parameters: {
          ServiceCode: this.__input.serviceCode,
          QuotaCode: this.__input.quotaCode,
          DesiredValue: this.__input.desiredValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RequestServiceQuotaIncrease.RequestedQuota.DesiredValue', props);
    return resource.getResponseField('RequestedQuota.DesiredValue') as unknown as number;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'requestServiceQuotaIncrease',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.RequestServiceQuotaIncrease.RequestedQuota.Status'),
        outputPath: 'RequestedQuota.Status',
        parameters: {
          ServiceCode: this.__input.serviceCode,
          QuotaCode: this.__input.quotaCode,
          DesiredValue: this.__input.desiredValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RequestServiceQuotaIncrease.RequestedQuota.Status', props);
    return resource.getResponseField('RequestedQuota.Status') as unknown as string;
  }

  public get created(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'requestServiceQuotaIncrease',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.RequestServiceQuotaIncrease.RequestedQuota.Created'),
        outputPath: 'RequestedQuota.Created',
        parameters: {
          ServiceCode: this.__input.serviceCode,
          QuotaCode: this.__input.quotaCode,
          DesiredValue: this.__input.desiredValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RequestServiceQuotaIncrease.RequestedQuota.Created', props);
    return resource.getResponseField('RequestedQuota.Created') as unknown as string;
  }

  public get lastUpdated(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'requestServiceQuotaIncrease',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.RequestServiceQuotaIncrease.RequestedQuota.LastUpdated'),
        outputPath: 'RequestedQuota.LastUpdated',
        parameters: {
          ServiceCode: this.__input.serviceCode,
          QuotaCode: this.__input.quotaCode,
          DesiredValue: this.__input.desiredValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RequestServiceQuotaIncrease.RequestedQuota.LastUpdated', props);
    return resource.getResponseField('RequestedQuota.LastUpdated') as unknown as string;
  }

  public get requester(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'requestServiceQuotaIncrease',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.RequestServiceQuotaIncrease.RequestedQuota.Requester'),
        outputPath: 'RequestedQuota.Requester',
        parameters: {
          ServiceCode: this.__input.serviceCode,
          QuotaCode: this.__input.quotaCode,
          DesiredValue: this.__input.desiredValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RequestServiceQuotaIncrease.RequestedQuota.Requester', props);
    return resource.getResponseField('RequestedQuota.Requester') as unknown as string;
  }

  public get quotaArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'requestServiceQuotaIncrease',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.RequestServiceQuotaIncrease.RequestedQuota.QuotaArn'),
        outputPath: 'RequestedQuota.QuotaArn',
        parameters: {
          ServiceCode: this.__input.serviceCode,
          QuotaCode: this.__input.quotaCode,
          DesiredValue: this.__input.desiredValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RequestServiceQuotaIncrease.RequestedQuota.QuotaArn', props);
    return resource.getResponseField('RequestedQuota.QuotaArn') as unknown as string;
  }

  public get globalQuota(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'requestServiceQuotaIncrease',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.RequestServiceQuotaIncrease.RequestedQuota.GlobalQuota'),
        outputPath: 'RequestedQuota.GlobalQuota',
        parameters: {
          ServiceCode: this.__input.serviceCode,
          QuotaCode: this.__input.quotaCode,
          DesiredValue: this.__input.desiredValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RequestServiceQuotaIncrease.RequestedQuota.GlobalQuota', props);
    return resource.getResponseField('RequestedQuota.GlobalQuota') as unknown as boolean;
  }

  public get unit(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'requestServiceQuotaIncrease',
        service: 'ServiceQuotas',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceQuotas.RequestServiceQuotaIncrease.RequestedQuota.Unit'),
        outputPath: 'RequestedQuota.Unit',
        parameters: {
          ServiceCode: this.__input.serviceCode,
          QuotaCode: this.__input.quotaCode,
          DesiredValue: this.__input.desiredValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RequestServiceQuotaIncrease.RequestedQuota.Unit', props);
    return resource.getResponseField('RequestedQuota.Unit') as unknown as string;
  }

}

