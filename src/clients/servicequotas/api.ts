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

  public fetchAwsDefaultServiceQuota(input: shapes.ServiceQuotasGetAwsDefaultServiceQuotaRequest): ServiceQuotasFetchAwsDefaultServiceQuota {
    return new ServiceQuotasFetchAwsDefaultServiceQuota(this, 'FetchAwsDefaultServiceQuota', this.__resources, input);
  }

  public fetchAssociationForServiceQuotaTemplate(): ServiceQuotasFetchAssociationForServiceQuotaTemplate {
    return new ServiceQuotasFetchAssociationForServiceQuotaTemplate(this, 'FetchAssociationForServiceQuotaTemplate', this.__resources);
  }

  public fetchRequestedServiceQuotaChange(input: shapes.ServiceQuotasGetRequestedServiceQuotaChangeRequest): ServiceQuotasFetchRequestedServiceQuotaChange {
    return new ServiceQuotasFetchRequestedServiceQuotaChange(this, 'FetchRequestedServiceQuotaChange', this.__resources, input);
  }

  public fetchServiceQuota(input: shapes.ServiceQuotasGetServiceQuotaRequest): ServiceQuotasFetchServiceQuota {
    return new ServiceQuotasFetchServiceQuota(this, 'FetchServiceQuota', this.__resources, input);
  }

  public fetchServiceQuotaIncreaseRequestFromTemplate(input: shapes.ServiceQuotasGetServiceQuotaIncreaseRequestFromTemplateRequest): ServiceQuotasFetchServiceQuotaIncreaseRequestFromTemplate {
    return new ServiceQuotasFetchServiceQuotaIncreaseRequestFromTemplate(this, 'FetchServiceQuotaIncreaseRequestFromTemplate', this.__resources, input);
  }

  public listAwsDefaultServiceQuotas(input: shapes.ServiceQuotasListAwsDefaultServiceQuotasRequest): ServiceQuotasListAwsDefaultServiceQuotas {
    return new ServiceQuotasListAwsDefaultServiceQuotas(this, 'ListAwsDefaultServiceQuotas', this.__resources, input);
  }

  public listRequestedServiceQuotaChangeHistory(input: shapes.ServiceQuotasListRequestedServiceQuotaChangeHistoryRequest): ServiceQuotasListRequestedServiceQuotaChangeHistory {
    return new ServiceQuotasListRequestedServiceQuotaChangeHistory(this, 'ListRequestedServiceQuotaChangeHistory', this.__resources, input);
  }

  public listRequestedServiceQuotaChangeHistoryByQuota(input: shapes.ServiceQuotasListRequestedServiceQuotaChangeHistoryByQuotaRequest): ServiceQuotasListRequestedServiceQuotaChangeHistoryByQuota {
    return new ServiceQuotasListRequestedServiceQuotaChangeHistoryByQuota(this, 'ListRequestedServiceQuotaChangeHistoryByQuota', this.__resources, input);
  }

  public listServiceQuotaIncreaseRequestsInTemplate(input: shapes.ServiceQuotasListServiceQuotaIncreaseRequestsInTemplateRequest): ServiceQuotasListServiceQuotaIncreaseRequestsInTemplate {
    return new ServiceQuotasListServiceQuotaIncreaseRequestsInTemplate(this, 'ListServiceQuotaIncreaseRequestsInTemplate', this.__resources, input);
  }

  public listServiceQuotas(input: shapes.ServiceQuotasListServiceQuotasRequest): ServiceQuotasListServiceQuotas {
    return new ServiceQuotasListServiceQuotas(this, 'ListServiceQuotas', this.__resources, input);
  }

  public listServices(input: shapes.ServiceQuotasListServicesRequest): ServiceQuotasListServices {
    return new ServiceQuotasListServices(this, 'ListServices', this.__resources, input);
  }

  public putServiceQuotaIncreaseRequestIntoTemplate(input: shapes.ServiceQuotasPutServiceQuotaIncreaseRequestIntoTemplateRequest): ServiceQuotasPutServiceQuotaIncreaseRequestIntoTemplate {
    return new ServiceQuotasPutServiceQuotaIncreaseRequestIntoTemplate(this, 'PutServiceQuotaIncreaseRequestIntoTemplate', this.__resources, input);
  }

  public requestServiceQuotaIncrease(input: shapes.ServiceQuotasRequestServiceQuotaIncreaseRequest): ServiceQuotasRequestServiceQuotaIncrease {
    return new ServiceQuotasRequestServiceQuotaIncrease(this, 'RequestServiceQuotaIncrease', this.__resources, input);
  }

}

export class ServiceQuotasFetchAwsDefaultServiceQuota extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceQuotasGetAwsDefaultServiceQuotaRequest) {
    super(scope, id);
  }

  public get quota(): ServiceQuotasFetchAwsDefaultServiceQuotaQuota {
    return new ServiceQuotasFetchAwsDefaultServiceQuotaQuota(this, 'Quota', this.__resources, this.input);
  }

}

export class ServiceQuotasFetchAwsDefaultServiceQuotaQuota extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceQuotasGetAwsDefaultServiceQuotaRequest) {
    super(scope, id);
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
          ServiceCode: this.input.serviceCode,
          QuotaCode: this.input.quotaCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAWSDefaultServiceQuota.Quota.ServiceCode', props);
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
          ServiceCode: this.input.serviceCode,
          QuotaCode: this.input.quotaCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAWSDefaultServiceQuota.Quota.ServiceName', props);
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
          ServiceCode: this.input.serviceCode,
          QuotaCode: this.input.quotaCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAWSDefaultServiceQuota.Quota.QuotaArn', props);
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
          ServiceCode: this.input.serviceCode,
          QuotaCode: this.input.quotaCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAWSDefaultServiceQuota.Quota.QuotaCode', props);
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
          ServiceCode: this.input.serviceCode,
          QuotaCode: this.input.quotaCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAWSDefaultServiceQuota.Quota.QuotaName', props);
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
          ServiceCode: this.input.serviceCode,
          QuotaCode: this.input.quotaCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAWSDefaultServiceQuota.Quota.Value', props);
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
          ServiceCode: this.input.serviceCode,
          QuotaCode: this.input.quotaCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAWSDefaultServiceQuota.Quota.Unit', props);
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
          ServiceCode: this.input.serviceCode,
          QuotaCode: this.input.quotaCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAWSDefaultServiceQuota.Quota.Adjustable', props);
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
          ServiceCode: this.input.serviceCode,
          QuotaCode: this.input.quotaCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAWSDefaultServiceQuota.Quota.GlobalQuota', props);
    return resource.getResponseField('Quota.GlobalQuota') as unknown as boolean;
  }

  public get usageMetric(): ServiceQuotasFetchAwsDefaultServiceQuotaQuotaUsageMetric {
    return new ServiceQuotasFetchAwsDefaultServiceQuotaQuotaUsageMetric(this, 'UsageMetric', this.__resources, this.input);
  }

  public get period(): ServiceQuotasFetchAwsDefaultServiceQuotaQuotaPeriod {
    return new ServiceQuotasFetchAwsDefaultServiceQuotaQuotaPeriod(this, 'Period', this.__resources, this.input);
  }

  public get errorReason(): ServiceQuotasFetchAwsDefaultServiceQuotaQuotaErrorReason {
    return new ServiceQuotasFetchAwsDefaultServiceQuotaQuotaErrorReason(this, 'ErrorReason', this.__resources, this.input);
  }

}

export class ServiceQuotasFetchAwsDefaultServiceQuotaQuotaUsageMetric extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceQuotasGetAwsDefaultServiceQuotaRequest) {
    super(scope, id);
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
          ServiceCode: this.input.serviceCode,
          QuotaCode: this.input.quotaCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAWSDefaultServiceQuota.Quota.UsageMetric.MetricNamespace', props);
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
          ServiceCode: this.input.serviceCode,
          QuotaCode: this.input.quotaCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAWSDefaultServiceQuota.Quota.UsageMetric.MetricName', props);
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
          ServiceCode: this.input.serviceCode,
          QuotaCode: this.input.quotaCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAWSDefaultServiceQuota.Quota.UsageMetric.MetricDimensions', props);
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
          ServiceCode: this.input.serviceCode,
          QuotaCode: this.input.quotaCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAWSDefaultServiceQuota.Quota.UsageMetric.MetricStatisticRecommendation', props);
    return resource.getResponseField('Quota.UsageMetric.MetricStatisticRecommendation') as unknown as string;
  }

}

export class ServiceQuotasFetchAwsDefaultServiceQuotaQuotaPeriod extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceQuotasGetAwsDefaultServiceQuotaRequest) {
    super(scope, id);
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
          ServiceCode: this.input.serviceCode,
          QuotaCode: this.input.quotaCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAWSDefaultServiceQuota.Quota.Period.PeriodValue', props);
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
          ServiceCode: this.input.serviceCode,
          QuotaCode: this.input.quotaCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAWSDefaultServiceQuota.Quota.Period.PeriodUnit', props);
    return resource.getResponseField('Quota.Period.PeriodUnit') as unknown as string;
  }

}

export class ServiceQuotasFetchAwsDefaultServiceQuotaQuotaErrorReason extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceQuotasGetAwsDefaultServiceQuotaRequest) {
    super(scope, id);
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
          ServiceCode: this.input.serviceCode,
          QuotaCode: this.input.quotaCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAWSDefaultServiceQuota.Quota.ErrorReason.ErrorCode', props);
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
          ServiceCode: this.input.serviceCode,
          QuotaCode: this.input.quotaCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAWSDefaultServiceQuota.Quota.ErrorReason.ErrorMessage', props);
    return resource.getResponseField('Quota.ErrorReason.ErrorMessage') as unknown as string;
  }

}

export class ServiceQuotasFetchAssociationForServiceQuotaTemplate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'GetAssociationForServiceQuotaTemplate.ServiceQuotaTemplateAssociationStatus', props);
    return resource.getResponseField('ServiceQuotaTemplateAssociationStatus') as unknown as string;
  }

}

export class ServiceQuotasFetchRequestedServiceQuotaChange extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceQuotasGetRequestedServiceQuotaChangeRequest) {
    super(scope, id);
  }

  public get requestedQuota(): ServiceQuotasFetchRequestedServiceQuotaChangeRequestedQuota {
    return new ServiceQuotasFetchRequestedServiceQuotaChangeRequestedQuota(this, 'RequestedQuota', this.__resources, this.input);
  }

}

export class ServiceQuotasFetchRequestedServiceQuotaChangeRequestedQuota extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceQuotasGetRequestedServiceQuotaChangeRequest) {
    super(scope, id);
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
          RequestId: this.input.requestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRequestedServiceQuotaChange.RequestedQuota.Id', props);
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
          RequestId: this.input.requestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRequestedServiceQuotaChange.RequestedQuota.CaseId', props);
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
          RequestId: this.input.requestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRequestedServiceQuotaChange.RequestedQuota.ServiceCode', props);
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
          RequestId: this.input.requestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRequestedServiceQuotaChange.RequestedQuota.ServiceName', props);
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
          RequestId: this.input.requestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRequestedServiceQuotaChange.RequestedQuota.QuotaCode', props);
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
          RequestId: this.input.requestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRequestedServiceQuotaChange.RequestedQuota.QuotaName', props);
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
          RequestId: this.input.requestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRequestedServiceQuotaChange.RequestedQuota.DesiredValue', props);
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
          RequestId: this.input.requestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRequestedServiceQuotaChange.RequestedQuota.Status', props);
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
          RequestId: this.input.requestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRequestedServiceQuotaChange.RequestedQuota.Created', props);
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
          RequestId: this.input.requestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRequestedServiceQuotaChange.RequestedQuota.LastUpdated', props);
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
          RequestId: this.input.requestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRequestedServiceQuotaChange.RequestedQuota.Requester', props);
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
          RequestId: this.input.requestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRequestedServiceQuotaChange.RequestedQuota.QuotaArn', props);
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
          RequestId: this.input.requestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRequestedServiceQuotaChange.RequestedQuota.GlobalQuota', props);
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
          RequestId: this.input.requestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRequestedServiceQuotaChange.RequestedQuota.Unit', props);
    return resource.getResponseField('RequestedQuota.Unit') as unknown as string;
  }

}

export class ServiceQuotasFetchServiceQuota extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceQuotasGetServiceQuotaRequest) {
    super(scope, id);
  }

  public get quota(): ServiceQuotasFetchServiceQuotaQuota {
    return new ServiceQuotasFetchServiceQuotaQuota(this, 'Quota', this.__resources, this.input);
  }

}

export class ServiceQuotasFetchServiceQuotaQuota extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceQuotasGetServiceQuotaRequest) {
    super(scope, id);
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
          ServiceCode: this.input.serviceCode,
          QuotaCode: this.input.quotaCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetServiceQuota.Quota.ServiceCode', props);
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
          ServiceCode: this.input.serviceCode,
          QuotaCode: this.input.quotaCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetServiceQuota.Quota.ServiceName', props);
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
          ServiceCode: this.input.serviceCode,
          QuotaCode: this.input.quotaCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetServiceQuota.Quota.QuotaArn', props);
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
          ServiceCode: this.input.serviceCode,
          QuotaCode: this.input.quotaCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetServiceQuota.Quota.QuotaCode', props);
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
          ServiceCode: this.input.serviceCode,
          QuotaCode: this.input.quotaCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetServiceQuota.Quota.QuotaName', props);
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
          ServiceCode: this.input.serviceCode,
          QuotaCode: this.input.quotaCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetServiceQuota.Quota.Value', props);
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
          ServiceCode: this.input.serviceCode,
          QuotaCode: this.input.quotaCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetServiceQuota.Quota.Unit', props);
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
          ServiceCode: this.input.serviceCode,
          QuotaCode: this.input.quotaCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetServiceQuota.Quota.Adjustable', props);
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
          ServiceCode: this.input.serviceCode,
          QuotaCode: this.input.quotaCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetServiceQuota.Quota.GlobalQuota', props);
    return resource.getResponseField('Quota.GlobalQuota') as unknown as boolean;
  }

  public get usageMetric(): ServiceQuotasFetchServiceQuotaQuotaUsageMetric {
    return new ServiceQuotasFetchServiceQuotaQuotaUsageMetric(this, 'UsageMetric', this.__resources, this.input);
  }

  public get period(): ServiceQuotasFetchServiceQuotaQuotaPeriod {
    return new ServiceQuotasFetchServiceQuotaQuotaPeriod(this, 'Period', this.__resources, this.input);
  }

  public get errorReason(): ServiceQuotasFetchServiceQuotaQuotaErrorReason {
    return new ServiceQuotasFetchServiceQuotaQuotaErrorReason(this, 'ErrorReason', this.__resources, this.input);
  }

}

export class ServiceQuotasFetchServiceQuotaQuotaUsageMetric extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceQuotasGetServiceQuotaRequest) {
    super(scope, id);
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
          ServiceCode: this.input.serviceCode,
          QuotaCode: this.input.quotaCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetServiceQuota.Quota.UsageMetric.MetricNamespace', props);
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
          ServiceCode: this.input.serviceCode,
          QuotaCode: this.input.quotaCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetServiceQuota.Quota.UsageMetric.MetricName', props);
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
          ServiceCode: this.input.serviceCode,
          QuotaCode: this.input.quotaCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetServiceQuota.Quota.UsageMetric.MetricDimensions', props);
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
          ServiceCode: this.input.serviceCode,
          QuotaCode: this.input.quotaCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetServiceQuota.Quota.UsageMetric.MetricStatisticRecommendation', props);
    return resource.getResponseField('Quota.UsageMetric.MetricStatisticRecommendation') as unknown as string;
  }

}

export class ServiceQuotasFetchServiceQuotaQuotaPeriod extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceQuotasGetServiceQuotaRequest) {
    super(scope, id);
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
          ServiceCode: this.input.serviceCode,
          QuotaCode: this.input.quotaCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetServiceQuota.Quota.Period.PeriodValue', props);
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
          ServiceCode: this.input.serviceCode,
          QuotaCode: this.input.quotaCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetServiceQuota.Quota.Period.PeriodUnit', props);
    return resource.getResponseField('Quota.Period.PeriodUnit') as unknown as string;
  }

}

export class ServiceQuotasFetchServiceQuotaQuotaErrorReason extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceQuotasGetServiceQuotaRequest) {
    super(scope, id);
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
          ServiceCode: this.input.serviceCode,
          QuotaCode: this.input.quotaCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetServiceQuota.Quota.ErrorReason.ErrorCode', props);
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
          ServiceCode: this.input.serviceCode,
          QuotaCode: this.input.quotaCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetServiceQuota.Quota.ErrorReason.ErrorMessage', props);
    return resource.getResponseField('Quota.ErrorReason.ErrorMessage') as unknown as string;
  }

}

export class ServiceQuotasFetchServiceQuotaIncreaseRequestFromTemplate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceQuotasGetServiceQuotaIncreaseRequestFromTemplateRequest) {
    super(scope, id);
  }

  public get serviceQuotaIncreaseRequestInTemplate(): ServiceQuotasFetchServiceQuotaIncreaseRequestFromTemplateServiceQuotaIncreaseRequestInTemplate {
    return new ServiceQuotasFetchServiceQuotaIncreaseRequestFromTemplateServiceQuotaIncreaseRequestInTemplate(this, 'ServiceQuotaIncreaseRequestInTemplate', this.__resources, this.input);
  }

}

export class ServiceQuotasFetchServiceQuotaIncreaseRequestFromTemplateServiceQuotaIncreaseRequestInTemplate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceQuotasGetServiceQuotaIncreaseRequestFromTemplateRequest) {
    super(scope, id);
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
          ServiceCode: this.input.serviceCode,
          QuotaCode: this.input.quotaCode,
          AwsRegion: this.input.awsRegion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetServiceQuotaIncreaseRequestFromTemplate.ServiceQuotaIncreaseRequestInTemplate.ServiceCode', props);
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
          ServiceCode: this.input.serviceCode,
          QuotaCode: this.input.quotaCode,
          AwsRegion: this.input.awsRegion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetServiceQuotaIncreaseRequestFromTemplate.ServiceQuotaIncreaseRequestInTemplate.ServiceName', props);
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
          ServiceCode: this.input.serviceCode,
          QuotaCode: this.input.quotaCode,
          AwsRegion: this.input.awsRegion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetServiceQuotaIncreaseRequestFromTemplate.ServiceQuotaIncreaseRequestInTemplate.QuotaCode', props);
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
          ServiceCode: this.input.serviceCode,
          QuotaCode: this.input.quotaCode,
          AwsRegion: this.input.awsRegion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetServiceQuotaIncreaseRequestFromTemplate.ServiceQuotaIncreaseRequestInTemplate.QuotaName', props);
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
          ServiceCode: this.input.serviceCode,
          QuotaCode: this.input.quotaCode,
          AwsRegion: this.input.awsRegion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetServiceQuotaIncreaseRequestFromTemplate.ServiceQuotaIncreaseRequestInTemplate.DesiredValue', props);
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
          ServiceCode: this.input.serviceCode,
          QuotaCode: this.input.quotaCode,
          AwsRegion: this.input.awsRegion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetServiceQuotaIncreaseRequestFromTemplate.ServiceQuotaIncreaseRequestInTemplate.AwsRegion', props);
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
          ServiceCode: this.input.serviceCode,
          QuotaCode: this.input.quotaCode,
          AwsRegion: this.input.awsRegion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetServiceQuotaIncreaseRequestFromTemplate.ServiceQuotaIncreaseRequestInTemplate.Unit', props);
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
          ServiceCode: this.input.serviceCode,
          QuotaCode: this.input.quotaCode,
          AwsRegion: this.input.awsRegion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetServiceQuotaIncreaseRequestFromTemplate.ServiceQuotaIncreaseRequestInTemplate.GlobalQuota', props);
    return resource.getResponseField('ServiceQuotaIncreaseRequestInTemplate.GlobalQuota') as unknown as boolean;
  }

}

export class ServiceQuotasListAwsDefaultServiceQuotas extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceQuotasListAwsDefaultServiceQuotasRequest) {
    super(scope, id);
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
          ServiceCode: this.input.serviceCode,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAWSDefaultServiceQuotas.NextToken', props);
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
          ServiceCode: this.input.serviceCode,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAWSDefaultServiceQuotas.Quotas', props);
    return resource.getResponseField('Quotas') as unknown as shapes.ServiceQuotasServiceQuota[];
  }

}

export class ServiceQuotasListRequestedServiceQuotaChangeHistory extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceQuotasListRequestedServiceQuotaChangeHistoryRequest) {
    super(scope, id);
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
          ServiceCode: this.input.serviceCode,
          Status: this.input.status,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRequestedServiceQuotaChangeHistory.NextToken', props);
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
          ServiceCode: this.input.serviceCode,
          Status: this.input.status,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRequestedServiceQuotaChangeHistory.RequestedQuotas', props);
    return resource.getResponseField('RequestedQuotas') as unknown as shapes.ServiceQuotasRequestedServiceQuotaChange[];
  }

}

export class ServiceQuotasListRequestedServiceQuotaChangeHistoryByQuota extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceQuotasListRequestedServiceQuotaChangeHistoryByQuotaRequest) {
    super(scope, id);
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
          ServiceCode: this.input.serviceCode,
          QuotaCode: this.input.quotaCode,
          Status: this.input.status,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRequestedServiceQuotaChangeHistoryByQuota.NextToken', props);
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
          ServiceCode: this.input.serviceCode,
          QuotaCode: this.input.quotaCode,
          Status: this.input.status,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRequestedServiceQuotaChangeHistoryByQuota.RequestedQuotas', props);
    return resource.getResponseField('RequestedQuotas') as unknown as shapes.ServiceQuotasRequestedServiceQuotaChange[];
  }

}

export class ServiceQuotasListServiceQuotaIncreaseRequestsInTemplate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceQuotasListServiceQuotaIncreaseRequestsInTemplateRequest) {
    super(scope, id);
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
          ServiceCode: this.input.serviceCode,
          AwsRegion: this.input.awsRegion,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListServiceQuotaIncreaseRequestsInTemplate.ServiceQuotaIncreaseRequestInTemplateList', props);
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
          ServiceCode: this.input.serviceCode,
          AwsRegion: this.input.awsRegion,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListServiceQuotaIncreaseRequestsInTemplate.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ServiceQuotasListServiceQuotas extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceQuotasListServiceQuotasRequest) {
    super(scope, id);
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
          ServiceCode: this.input.serviceCode,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListServiceQuotas.NextToken', props);
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
          ServiceCode: this.input.serviceCode,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListServiceQuotas.Quotas', props);
    return resource.getResponseField('Quotas') as unknown as shapes.ServiceQuotasServiceQuota[];
  }

}

export class ServiceQuotasListServices extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceQuotasListServicesRequest) {
    super(scope, id);
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
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListServices.NextToken', props);
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
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListServices.Services', props);
    return resource.getResponseField('Services') as unknown as shapes.ServiceQuotasServiceInfo[];
  }

}

export class ServiceQuotasPutServiceQuotaIncreaseRequestIntoTemplate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceQuotasPutServiceQuotaIncreaseRequestIntoTemplateRequest) {
    super(scope, id);
  }

  public get serviceQuotaIncreaseRequestInTemplate(): ServiceQuotasPutServiceQuotaIncreaseRequestIntoTemplateServiceQuotaIncreaseRequestInTemplate {
    return new ServiceQuotasPutServiceQuotaIncreaseRequestIntoTemplateServiceQuotaIncreaseRequestInTemplate(this, 'ServiceQuotaIncreaseRequestInTemplate', this.__resources, this.input);
  }

}

export class ServiceQuotasPutServiceQuotaIncreaseRequestIntoTemplateServiceQuotaIncreaseRequestInTemplate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceQuotasPutServiceQuotaIncreaseRequestIntoTemplateRequest) {
    super(scope, id);
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
          QuotaCode: this.input.quotaCode,
          ServiceCode: this.input.serviceCode,
          AwsRegion: this.input.awsRegion,
          DesiredValue: this.input.desiredValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutServiceQuotaIncreaseRequestIntoTemplate.ServiceQuotaIncreaseRequestInTemplate.ServiceCode', props);
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
          QuotaCode: this.input.quotaCode,
          ServiceCode: this.input.serviceCode,
          AwsRegion: this.input.awsRegion,
          DesiredValue: this.input.desiredValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutServiceQuotaIncreaseRequestIntoTemplate.ServiceQuotaIncreaseRequestInTemplate.ServiceName', props);
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
          QuotaCode: this.input.quotaCode,
          ServiceCode: this.input.serviceCode,
          AwsRegion: this.input.awsRegion,
          DesiredValue: this.input.desiredValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutServiceQuotaIncreaseRequestIntoTemplate.ServiceQuotaIncreaseRequestInTemplate.QuotaCode', props);
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
          QuotaCode: this.input.quotaCode,
          ServiceCode: this.input.serviceCode,
          AwsRegion: this.input.awsRegion,
          DesiredValue: this.input.desiredValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutServiceQuotaIncreaseRequestIntoTemplate.ServiceQuotaIncreaseRequestInTemplate.QuotaName', props);
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
          QuotaCode: this.input.quotaCode,
          ServiceCode: this.input.serviceCode,
          AwsRegion: this.input.awsRegion,
          DesiredValue: this.input.desiredValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutServiceQuotaIncreaseRequestIntoTemplate.ServiceQuotaIncreaseRequestInTemplate.DesiredValue', props);
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
          QuotaCode: this.input.quotaCode,
          ServiceCode: this.input.serviceCode,
          AwsRegion: this.input.awsRegion,
          DesiredValue: this.input.desiredValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutServiceQuotaIncreaseRequestIntoTemplate.ServiceQuotaIncreaseRequestInTemplate.AwsRegion', props);
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
          QuotaCode: this.input.quotaCode,
          ServiceCode: this.input.serviceCode,
          AwsRegion: this.input.awsRegion,
          DesiredValue: this.input.desiredValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutServiceQuotaIncreaseRequestIntoTemplate.ServiceQuotaIncreaseRequestInTemplate.Unit', props);
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
          QuotaCode: this.input.quotaCode,
          ServiceCode: this.input.serviceCode,
          AwsRegion: this.input.awsRegion,
          DesiredValue: this.input.desiredValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutServiceQuotaIncreaseRequestIntoTemplate.ServiceQuotaIncreaseRequestInTemplate.GlobalQuota', props);
    return resource.getResponseField('ServiceQuotaIncreaseRequestInTemplate.GlobalQuota') as unknown as boolean;
  }

}

export class ServiceQuotasRequestServiceQuotaIncrease extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceQuotasRequestServiceQuotaIncreaseRequest) {
    super(scope, id);
  }

  public get requestedQuota(): ServiceQuotasRequestServiceQuotaIncreaseRequestedQuota {
    return new ServiceQuotasRequestServiceQuotaIncreaseRequestedQuota(this, 'RequestedQuota', this.__resources, this.input);
  }

}

export class ServiceQuotasRequestServiceQuotaIncreaseRequestedQuota extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceQuotasRequestServiceQuotaIncreaseRequest) {
    super(scope, id);
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
          ServiceCode: this.input.serviceCode,
          QuotaCode: this.input.quotaCode,
          DesiredValue: this.input.desiredValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RequestServiceQuotaIncrease.RequestedQuota.Id', props);
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
          ServiceCode: this.input.serviceCode,
          QuotaCode: this.input.quotaCode,
          DesiredValue: this.input.desiredValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RequestServiceQuotaIncrease.RequestedQuota.CaseId', props);
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
          ServiceCode: this.input.serviceCode,
          QuotaCode: this.input.quotaCode,
          DesiredValue: this.input.desiredValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RequestServiceQuotaIncrease.RequestedQuota.ServiceCode', props);
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
          ServiceCode: this.input.serviceCode,
          QuotaCode: this.input.quotaCode,
          DesiredValue: this.input.desiredValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RequestServiceQuotaIncrease.RequestedQuota.ServiceName', props);
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
          ServiceCode: this.input.serviceCode,
          QuotaCode: this.input.quotaCode,
          DesiredValue: this.input.desiredValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RequestServiceQuotaIncrease.RequestedQuota.QuotaCode', props);
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
          ServiceCode: this.input.serviceCode,
          QuotaCode: this.input.quotaCode,
          DesiredValue: this.input.desiredValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RequestServiceQuotaIncrease.RequestedQuota.QuotaName', props);
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
          ServiceCode: this.input.serviceCode,
          QuotaCode: this.input.quotaCode,
          DesiredValue: this.input.desiredValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RequestServiceQuotaIncrease.RequestedQuota.DesiredValue', props);
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
          ServiceCode: this.input.serviceCode,
          QuotaCode: this.input.quotaCode,
          DesiredValue: this.input.desiredValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RequestServiceQuotaIncrease.RequestedQuota.Status', props);
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
          ServiceCode: this.input.serviceCode,
          QuotaCode: this.input.quotaCode,
          DesiredValue: this.input.desiredValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RequestServiceQuotaIncrease.RequestedQuota.Created', props);
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
          ServiceCode: this.input.serviceCode,
          QuotaCode: this.input.quotaCode,
          DesiredValue: this.input.desiredValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RequestServiceQuotaIncrease.RequestedQuota.LastUpdated', props);
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
          ServiceCode: this.input.serviceCode,
          QuotaCode: this.input.quotaCode,
          DesiredValue: this.input.desiredValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RequestServiceQuotaIncrease.RequestedQuota.Requester', props);
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
          ServiceCode: this.input.serviceCode,
          QuotaCode: this.input.quotaCode,
          DesiredValue: this.input.desiredValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RequestServiceQuotaIncrease.RequestedQuota.QuotaArn', props);
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
          ServiceCode: this.input.serviceCode,
          QuotaCode: this.input.quotaCode,
          DesiredValue: this.input.desiredValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RequestServiceQuotaIncrease.RequestedQuota.GlobalQuota', props);
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
          ServiceCode: this.input.serviceCode,
          QuotaCode: this.input.quotaCode,
          DesiredValue: this.input.desiredValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RequestServiceQuotaIncrease.RequestedQuota.Unit', props);
    return resource.getResponseField('RequestedQuota.Unit') as unknown as string;
  }

}

