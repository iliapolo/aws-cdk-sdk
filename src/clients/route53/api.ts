import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class Route53Client extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public associateVpcWithHostedZone(input: shapes.Route53AssociateVpcWithHostedZoneRequest): Route53AssociateVpcWithHostedZone {
    return new Route53AssociateVpcWithHostedZone(this, 'AssociateVpcWithHostedZone', this.__resources, input);
  }

  public changeResourceRecordSets(input: shapes.Route53ChangeResourceRecordSetsRequest): Route53ChangeResourceRecordSets {
    return new Route53ChangeResourceRecordSets(this, 'ChangeResourceRecordSets', this.__resources, input);
  }

  public changeTagsForResource(input: shapes.Route53ChangeTagsForResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'changeTagsForResource',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.ChangeTagsForResource'),
        parameters: {
          ResourceType: input.resourceType,
          ResourceId: input.resourceId,
          AddTags: input.addTags,
          RemoveTagKeys: input.removeTagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'ChangeTagsForResource', props);
  }

  public createHealthCheck(input: shapes.Route53CreateHealthCheckRequest): Route53CreateHealthCheck {
    return new Route53CreateHealthCheck(this, 'CreateHealthCheck', this.__resources, input);
  }

  public createHostedZone(input: shapes.Route53CreateHostedZoneRequest): Route53CreateHostedZone {
    return new Route53CreateHostedZone(this, 'CreateHostedZone', this.__resources, input);
  }

  public createQueryLoggingConfig(input: shapes.Route53CreateQueryLoggingConfigRequest): Route53CreateQueryLoggingConfig {
    return new Route53CreateQueryLoggingConfig(this, 'CreateQueryLoggingConfig', this.__resources, input);
  }

  public createReusableDelegationSet(input: shapes.Route53CreateReusableDelegationSetRequest): Route53CreateReusableDelegationSet {
    return new Route53CreateReusableDelegationSet(this, 'CreateReusableDelegationSet', this.__resources, input);
  }

  public createTrafficPolicy(input: shapes.Route53CreateTrafficPolicyRequest): Route53CreateTrafficPolicy {
    return new Route53CreateTrafficPolicy(this, 'CreateTrafficPolicy', this.__resources, input);
  }

  public createTrafficPolicyInstance(input: shapes.Route53CreateTrafficPolicyInstanceRequest): Route53CreateTrafficPolicyInstance {
    return new Route53CreateTrafficPolicyInstance(this, 'CreateTrafficPolicyInstance', this.__resources, input);
  }

  public createTrafficPolicyVersion(input: shapes.Route53CreateTrafficPolicyVersionRequest): Route53CreateTrafficPolicyVersion {
    return new Route53CreateTrafficPolicyVersion(this, 'CreateTrafficPolicyVersion', this.__resources, input);
  }

  public createVpcAssociationAuthorization(input: shapes.Route53CreateVpcAssociationAuthorizationRequest): Route53CreateVpcAssociationAuthorization {
    return new Route53CreateVpcAssociationAuthorization(this, 'CreateVpcAssociationAuthorization', this.__resources, input);
  }

  public deleteHealthCheck(input: shapes.Route53DeleteHealthCheckRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.DeleteHealthCheck'),
        parameters: {
          HealthCheckId: input.healthCheckId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteHealthCheck', props);
  }

  public deleteHostedZone(input: shapes.Route53DeleteHostedZoneRequest): Route53DeleteHostedZone {
    return new Route53DeleteHostedZone(this, 'DeleteHostedZone', this.__resources, input);
  }

  public deleteQueryLoggingConfig(input: shapes.Route53DeleteQueryLoggingConfigRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteQueryLoggingConfig',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.DeleteQueryLoggingConfig'),
        parameters: {
          Id: input.id,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteQueryLoggingConfig', props);
  }

  public deleteReusableDelegationSet(input: shapes.Route53DeleteReusableDelegationSetRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteReusableDelegationSet',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.DeleteReusableDelegationSet'),
        parameters: {
          Id: input.id,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteReusableDelegationSet', props);
  }

  public deleteTrafficPolicy(input: shapes.Route53DeleteTrafficPolicyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTrafficPolicy',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.DeleteTrafficPolicy'),
        parameters: {
          Id: input.id,
          Version: input.version,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteTrafficPolicy', props);
  }

  public deleteTrafficPolicyInstance(input: shapes.Route53DeleteTrafficPolicyInstanceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTrafficPolicyInstance',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.DeleteTrafficPolicyInstance'),
        parameters: {
          Id: input.id,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteTrafficPolicyInstance', props);
  }

  public deleteVpcAssociationAuthorization(input: shapes.Route53DeleteVpcAssociationAuthorizationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteVpcAssociationAuthorization',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.DeleteVPCAssociationAuthorization'),
        parameters: {
          HostedZoneId: input.hostedZoneId,
          VPC: {
            VPCRegion: input.vpc.vpcRegion,
            VPCId: input.vpc.vpcId,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteVPCAssociationAuthorization', props);
  }

  public disassociateVpcFromHostedZone(input: shapes.Route53DisassociateVpcFromHostedZoneRequest): Route53DisassociateVpcFromHostedZone {
    return new Route53DisassociateVpcFromHostedZone(this, 'DisassociateVpcFromHostedZone', this.__resources, input);
  }

  public fetchAccountLimit(input: shapes.Route53GetAccountLimitRequest): Route53FetchAccountLimit {
    return new Route53FetchAccountLimit(this, 'FetchAccountLimit', this.__resources, input);
  }

  public fetchChange(input: shapes.Route53GetChangeRequest): Route53FetchChange {
    return new Route53FetchChange(this, 'FetchChange', this.__resources, input);
  }

  public fetchCheckerIpRanges(): Route53FetchCheckerIpRanges {
    return new Route53FetchCheckerIpRanges(this, 'FetchCheckerIpRanges', this.__resources);
  }

  public fetchGeoLocation(input: shapes.Route53GetGeoLocationRequest): Route53FetchGeoLocation {
    return new Route53FetchGeoLocation(this, 'FetchGeoLocation', this.__resources, input);
  }

  public fetchHealthCheck(input: shapes.Route53GetHealthCheckRequest): Route53FetchHealthCheck {
    return new Route53FetchHealthCheck(this, 'FetchHealthCheck', this.__resources, input);
  }

  public fetchHealthCheckCount(): Route53FetchHealthCheckCount {
    return new Route53FetchHealthCheckCount(this, 'FetchHealthCheckCount', this.__resources);
  }

  public fetchHealthCheckLastFailureReason(input: shapes.Route53GetHealthCheckLastFailureReasonRequest): Route53FetchHealthCheckLastFailureReason {
    return new Route53FetchHealthCheckLastFailureReason(this, 'FetchHealthCheckLastFailureReason', this.__resources, input);
  }

  public fetchHealthCheckStatus(input: shapes.Route53GetHealthCheckStatusRequest): Route53FetchHealthCheckStatus {
    return new Route53FetchHealthCheckStatus(this, 'FetchHealthCheckStatus', this.__resources, input);
  }

  public fetchHostedZone(input: shapes.Route53GetHostedZoneRequest): Route53FetchHostedZone {
    return new Route53FetchHostedZone(this, 'FetchHostedZone', this.__resources, input);
  }

  public fetchHostedZoneCount(): Route53FetchHostedZoneCount {
    return new Route53FetchHostedZoneCount(this, 'FetchHostedZoneCount', this.__resources);
  }

  public fetchHostedZoneLimit(input: shapes.Route53GetHostedZoneLimitRequest): Route53FetchHostedZoneLimit {
    return new Route53FetchHostedZoneLimit(this, 'FetchHostedZoneLimit', this.__resources, input);
  }

  public fetchQueryLoggingConfig(input: shapes.Route53GetQueryLoggingConfigRequest): Route53FetchQueryLoggingConfig {
    return new Route53FetchQueryLoggingConfig(this, 'FetchQueryLoggingConfig', this.__resources, input);
  }

  public fetchReusableDelegationSet(input: shapes.Route53GetReusableDelegationSetRequest): Route53FetchReusableDelegationSet {
    return new Route53FetchReusableDelegationSet(this, 'FetchReusableDelegationSet', this.__resources, input);
  }

  public fetchReusableDelegationSetLimit(input: shapes.Route53GetReusableDelegationSetLimitRequest): Route53FetchReusableDelegationSetLimit {
    return new Route53FetchReusableDelegationSetLimit(this, 'FetchReusableDelegationSetLimit', this.__resources, input);
  }

  public fetchTrafficPolicy(input: shapes.Route53GetTrafficPolicyRequest): Route53FetchTrafficPolicy {
    return new Route53FetchTrafficPolicy(this, 'FetchTrafficPolicy', this.__resources, input);
  }

  public fetchTrafficPolicyInstance(input: shapes.Route53GetTrafficPolicyInstanceRequest): Route53FetchTrafficPolicyInstance {
    return new Route53FetchTrafficPolicyInstance(this, 'FetchTrafficPolicyInstance', this.__resources, input);
  }

  public fetchTrafficPolicyInstanceCount(): Route53FetchTrafficPolicyInstanceCount {
    return new Route53FetchTrafficPolicyInstanceCount(this, 'FetchTrafficPolicyInstanceCount', this.__resources);
  }

  public listGeoLocations(input: shapes.Route53ListGeoLocationsRequest): Route53ListGeoLocations {
    return new Route53ListGeoLocations(this, 'ListGeoLocations', this.__resources, input);
  }

  public listHealthChecks(input: shapes.Route53ListHealthChecksRequest): Route53ListHealthChecks {
    return new Route53ListHealthChecks(this, 'ListHealthChecks', this.__resources, input);
  }

  public listHostedZones(input: shapes.Route53ListHostedZonesRequest): Route53ListHostedZones {
    return new Route53ListHostedZones(this, 'ListHostedZones', this.__resources, input);
  }

  public listHostedZonesByName(input: shapes.Route53ListHostedZonesByNameRequest): Route53ListHostedZonesByName {
    return new Route53ListHostedZonesByName(this, 'ListHostedZonesByName', this.__resources, input);
  }

  public listHostedZonesByVpc(input: shapes.Route53ListHostedZonesByVpcRequest): Route53ListHostedZonesByVpc {
    return new Route53ListHostedZonesByVpc(this, 'ListHostedZonesByVpc', this.__resources, input);
  }

  public listQueryLoggingConfigs(input: shapes.Route53ListQueryLoggingConfigsRequest): Route53ListQueryLoggingConfigs {
    return new Route53ListQueryLoggingConfigs(this, 'ListQueryLoggingConfigs', this.__resources, input);
  }

  public listResourceRecordSets(input: shapes.Route53ListResourceRecordSetsRequest): Route53ListResourceRecordSets {
    return new Route53ListResourceRecordSets(this, 'ListResourceRecordSets', this.__resources, input);
  }

  public listReusableDelegationSets(input: shapes.Route53ListReusableDelegationSetsRequest): Route53ListReusableDelegationSets {
    return new Route53ListReusableDelegationSets(this, 'ListReusableDelegationSets', this.__resources, input);
  }

  public listTagsForResource(input: shapes.Route53ListTagsForResourceRequest): Route53ListTagsForResource {
    return new Route53ListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
  }

  public listTagsForResources(input: shapes.Route53ListTagsForResourcesRequest): Route53ListTagsForResources {
    return new Route53ListTagsForResources(this, 'ListTagsForResources', this.__resources, input);
  }

  public listTrafficPolicies(input: shapes.Route53ListTrafficPoliciesRequest): Route53ListTrafficPolicies {
    return new Route53ListTrafficPolicies(this, 'ListTrafficPolicies', this.__resources, input);
  }

  public listTrafficPolicyInstances(input: shapes.Route53ListTrafficPolicyInstancesRequest): Route53ListTrafficPolicyInstances {
    return new Route53ListTrafficPolicyInstances(this, 'ListTrafficPolicyInstances', this.__resources, input);
  }

  public listTrafficPolicyInstancesByHostedZone(input: shapes.Route53ListTrafficPolicyInstancesByHostedZoneRequest): Route53ListTrafficPolicyInstancesByHostedZone {
    return new Route53ListTrafficPolicyInstancesByHostedZone(this, 'ListTrafficPolicyInstancesByHostedZone', this.__resources, input);
  }

  public listTrafficPolicyInstancesByPolicy(input: shapes.Route53ListTrafficPolicyInstancesByPolicyRequest): Route53ListTrafficPolicyInstancesByPolicy {
    return new Route53ListTrafficPolicyInstancesByPolicy(this, 'ListTrafficPolicyInstancesByPolicy', this.__resources, input);
  }

  public listTrafficPolicyVersions(input: shapes.Route53ListTrafficPolicyVersionsRequest): Route53ListTrafficPolicyVersions {
    return new Route53ListTrafficPolicyVersions(this, 'ListTrafficPolicyVersions', this.__resources, input);
  }

  public listVpcAssociationAuthorizations(input: shapes.Route53ListVpcAssociationAuthorizationsRequest): Route53ListVpcAssociationAuthorizations {
    return new Route53ListVpcAssociationAuthorizations(this, 'ListVpcAssociationAuthorizations', this.__resources, input);
  }

  public testDnsAnswer(input: shapes.Route53TestDnsAnswerRequest): Route53TestDnsAnswer {
    return new Route53TestDnsAnswer(this, 'TestDnsAnswer', this.__resources, input);
  }

  public updateHealthCheck(input: shapes.Route53UpdateHealthCheckRequest): Route53UpdateHealthCheck {
    return new Route53UpdateHealthCheck(this, 'UpdateHealthCheck', this.__resources, input);
  }

  public updateHostedZoneComment(input: shapes.Route53UpdateHostedZoneCommentRequest): Route53UpdateHostedZoneComment {
    return new Route53UpdateHostedZoneComment(this, 'UpdateHostedZoneComment', this.__resources, input);
  }

  public updateTrafficPolicyComment(input: shapes.Route53UpdateTrafficPolicyCommentRequest): Route53UpdateTrafficPolicyComment {
    return new Route53UpdateTrafficPolicyComment(this, 'UpdateTrafficPolicyComment', this.__resources, input);
  }

  public updateTrafficPolicyInstance(input: shapes.Route53UpdateTrafficPolicyInstanceRequest): Route53UpdateTrafficPolicyInstance {
    return new Route53UpdateTrafficPolicyInstance(this, 'UpdateTrafficPolicyInstance', this.__resources, input);
  }

}

export class Route53AssociateVpcWithHostedZone extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53AssociateVpcWithHostedZoneRequest) {
    super(scope, id);
  }

  public get changeInfo(): Route53AssociateVpcWithHostedZoneChangeInfo {
    return new Route53AssociateVpcWithHostedZoneChangeInfo(this, 'ChangeInfo', this.__resources, this.input);
  }

}

export class Route53AssociateVpcWithHostedZoneChangeInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53AssociateVpcWithHostedZoneRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateVpcWithHostedZone',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.AssociateVPCWithHostedZone.ChangeInfo.Id'),
        outputPath: 'ChangeInfo.Id',
        parameters: {
          HostedZoneId: this.input.hostedZoneId,
          VPC: {
            VPCRegion: this.input.vpc.vpcRegion,
            VPCId: this.input.vpc.vpcId,
          },
          Comment: this.input.comment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateVPCWithHostedZone.ChangeInfo.Id', props);
    return resource.getResponseField('ChangeInfo.Id') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateVpcWithHostedZone',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.AssociateVPCWithHostedZone.ChangeInfo.Status'),
        outputPath: 'ChangeInfo.Status',
        parameters: {
          HostedZoneId: this.input.hostedZoneId,
          VPC: {
            VPCRegion: this.input.vpc.vpcRegion,
            VPCId: this.input.vpc.vpcId,
          },
          Comment: this.input.comment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateVPCWithHostedZone.ChangeInfo.Status', props);
    return resource.getResponseField('ChangeInfo.Status') as unknown as string;
  }

  public get submittedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateVpcWithHostedZone',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.AssociateVPCWithHostedZone.ChangeInfo.SubmittedAt'),
        outputPath: 'ChangeInfo.SubmittedAt',
        parameters: {
          HostedZoneId: this.input.hostedZoneId,
          VPC: {
            VPCRegion: this.input.vpc.vpcRegion,
            VPCId: this.input.vpc.vpcId,
          },
          Comment: this.input.comment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateVPCWithHostedZone.ChangeInfo.SubmittedAt', props);
    return resource.getResponseField('ChangeInfo.SubmittedAt') as unknown as string;
  }

  public get comment(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateVpcWithHostedZone',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.AssociateVPCWithHostedZone.ChangeInfo.Comment'),
        outputPath: 'ChangeInfo.Comment',
        parameters: {
          HostedZoneId: this.input.hostedZoneId,
          VPC: {
            VPCRegion: this.input.vpc.vpcRegion,
            VPCId: this.input.vpc.vpcId,
          },
          Comment: this.input.comment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateVPCWithHostedZone.ChangeInfo.Comment', props);
    return resource.getResponseField('ChangeInfo.Comment') as unknown as string;
  }

}

export class Route53ChangeResourceRecordSets extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53ChangeResourceRecordSetsRequest) {
    super(scope, id);
  }

  public get changeInfo(): Route53ChangeResourceRecordSetsChangeInfo {
    return new Route53ChangeResourceRecordSetsChangeInfo(this, 'ChangeInfo', this.__resources, this.input);
  }

}

export class Route53ChangeResourceRecordSetsChangeInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53ChangeResourceRecordSetsRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'changeResourceRecordSets',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.ChangeResourceRecordSets.ChangeInfo.Id'),
        outputPath: 'ChangeInfo.Id',
        parameters: {
          HostedZoneId: this.input.hostedZoneId,
          ChangeBatch: {
            Comment: this.input.changeBatch.comment,
            Changes: this.input.changeBatch.changes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ChangeResourceRecordSets.ChangeInfo.Id', props);
    return resource.getResponseField('ChangeInfo.Id') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'changeResourceRecordSets',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.ChangeResourceRecordSets.ChangeInfo.Status'),
        outputPath: 'ChangeInfo.Status',
        parameters: {
          HostedZoneId: this.input.hostedZoneId,
          ChangeBatch: {
            Comment: this.input.changeBatch.comment,
            Changes: this.input.changeBatch.changes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ChangeResourceRecordSets.ChangeInfo.Status', props);
    return resource.getResponseField('ChangeInfo.Status') as unknown as string;
  }

  public get submittedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'changeResourceRecordSets',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.ChangeResourceRecordSets.ChangeInfo.SubmittedAt'),
        outputPath: 'ChangeInfo.SubmittedAt',
        parameters: {
          HostedZoneId: this.input.hostedZoneId,
          ChangeBatch: {
            Comment: this.input.changeBatch.comment,
            Changes: this.input.changeBatch.changes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ChangeResourceRecordSets.ChangeInfo.SubmittedAt', props);
    return resource.getResponseField('ChangeInfo.SubmittedAt') as unknown as string;
  }

  public get comment(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'changeResourceRecordSets',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.ChangeResourceRecordSets.ChangeInfo.Comment'),
        outputPath: 'ChangeInfo.Comment',
        parameters: {
          HostedZoneId: this.input.hostedZoneId,
          ChangeBatch: {
            Comment: this.input.changeBatch.comment,
            Changes: this.input.changeBatch.changes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ChangeResourceRecordSets.ChangeInfo.Comment', props);
    return resource.getResponseField('ChangeInfo.Comment') as unknown as string;
  }

}

export class Route53CreateHealthCheck extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53CreateHealthCheckRequest) {
    super(scope, id);
  }

  public get healthCheck(): Route53CreateHealthCheckHealthCheck {
    return new Route53CreateHealthCheckHealthCheck(this, 'HealthCheck', this.__resources, this.input);
  }

  public get location(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateHealthCheck.Location'),
        outputPath: 'Location',
        parameters: {
          CallerReference: this.input.callerReference,
          HealthCheckConfig: {
            IPAddress: this.input.healthCheckConfig.ipAddress,
            Port: this.input.healthCheckConfig.port,
            Type: this.input.healthCheckConfig.type,
            ResourcePath: this.input.healthCheckConfig.resourcePath,
            FullyQualifiedDomainName: this.input.healthCheckConfig.fullyQualifiedDomainName,
            SearchString: this.input.healthCheckConfig.searchString,
            RequestInterval: this.input.healthCheckConfig.requestInterval,
            FailureThreshold: this.input.healthCheckConfig.failureThreshold,
            MeasureLatency: this.input.healthCheckConfig.measureLatency,
            Inverted: this.input.healthCheckConfig.inverted,
            Disabled: this.input.healthCheckConfig.disabled,
            HealthThreshold: this.input.healthCheckConfig.healthThreshold,
            ChildHealthChecks: this.input.healthCheckConfig.childHealthChecks,
            EnableSNI: this.input.healthCheckConfig.enableSni,
            Regions: this.input.healthCheckConfig.regions,
            AlarmIdentifier: {
              Region: this.input.healthCheckConfig.alarmIdentifier?.region,
              Name: this.input.healthCheckConfig.alarmIdentifier?.name,
            },
            InsufficientDataHealthStatus: this.input.healthCheckConfig.insufficientDataHealthStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateHealthCheck.Location', props);
    return resource.getResponseField('Location') as unknown as string;
  }

}

export class Route53CreateHealthCheckHealthCheck extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53CreateHealthCheckRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateHealthCheck.HealthCheck.Id'),
        outputPath: 'HealthCheck.Id',
        parameters: {
          CallerReference: this.input.callerReference,
          HealthCheckConfig: {
            IPAddress: this.input.healthCheckConfig.ipAddress,
            Port: this.input.healthCheckConfig.port,
            Type: this.input.healthCheckConfig.type,
            ResourcePath: this.input.healthCheckConfig.resourcePath,
            FullyQualifiedDomainName: this.input.healthCheckConfig.fullyQualifiedDomainName,
            SearchString: this.input.healthCheckConfig.searchString,
            RequestInterval: this.input.healthCheckConfig.requestInterval,
            FailureThreshold: this.input.healthCheckConfig.failureThreshold,
            MeasureLatency: this.input.healthCheckConfig.measureLatency,
            Inverted: this.input.healthCheckConfig.inverted,
            Disabled: this.input.healthCheckConfig.disabled,
            HealthThreshold: this.input.healthCheckConfig.healthThreshold,
            ChildHealthChecks: this.input.healthCheckConfig.childHealthChecks,
            EnableSNI: this.input.healthCheckConfig.enableSni,
            Regions: this.input.healthCheckConfig.regions,
            AlarmIdentifier: {
              Region: this.input.healthCheckConfig.alarmIdentifier?.region,
              Name: this.input.healthCheckConfig.alarmIdentifier?.name,
            },
            InsufficientDataHealthStatus: this.input.healthCheckConfig.insufficientDataHealthStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateHealthCheck.HealthCheck.Id', props);
    return resource.getResponseField('HealthCheck.Id') as unknown as string;
  }

  public get callerReference(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateHealthCheck.HealthCheck.CallerReference'),
        outputPath: 'HealthCheck.CallerReference',
        parameters: {
          CallerReference: this.input.callerReference,
          HealthCheckConfig: {
            IPAddress: this.input.healthCheckConfig.ipAddress,
            Port: this.input.healthCheckConfig.port,
            Type: this.input.healthCheckConfig.type,
            ResourcePath: this.input.healthCheckConfig.resourcePath,
            FullyQualifiedDomainName: this.input.healthCheckConfig.fullyQualifiedDomainName,
            SearchString: this.input.healthCheckConfig.searchString,
            RequestInterval: this.input.healthCheckConfig.requestInterval,
            FailureThreshold: this.input.healthCheckConfig.failureThreshold,
            MeasureLatency: this.input.healthCheckConfig.measureLatency,
            Inverted: this.input.healthCheckConfig.inverted,
            Disabled: this.input.healthCheckConfig.disabled,
            HealthThreshold: this.input.healthCheckConfig.healthThreshold,
            ChildHealthChecks: this.input.healthCheckConfig.childHealthChecks,
            EnableSNI: this.input.healthCheckConfig.enableSni,
            Regions: this.input.healthCheckConfig.regions,
            AlarmIdentifier: {
              Region: this.input.healthCheckConfig.alarmIdentifier?.region,
              Name: this.input.healthCheckConfig.alarmIdentifier?.name,
            },
            InsufficientDataHealthStatus: this.input.healthCheckConfig.insufficientDataHealthStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateHealthCheck.HealthCheck.CallerReference', props);
    return resource.getResponseField('HealthCheck.CallerReference') as unknown as string;
  }

  public get linkedService(): Route53CreateHealthCheckHealthCheckLinkedService {
    return new Route53CreateHealthCheckHealthCheckLinkedService(this, 'LinkedService', this.__resources, this.input);
  }

  public get healthCheckConfig(): Route53CreateHealthCheckHealthCheckHealthCheckConfig {
    return new Route53CreateHealthCheckHealthCheckHealthCheckConfig(this, 'HealthCheckConfig', this.__resources, this.input);
  }

  public get healthCheckVersion(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateHealthCheck.HealthCheck.HealthCheckVersion'),
        outputPath: 'HealthCheck.HealthCheckVersion',
        parameters: {
          CallerReference: this.input.callerReference,
          HealthCheckConfig: {
            IPAddress: this.input.healthCheckConfig.ipAddress,
            Port: this.input.healthCheckConfig.port,
            Type: this.input.healthCheckConfig.type,
            ResourcePath: this.input.healthCheckConfig.resourcePath,
            FullyQualifiedDomainName: this.input.healthCheckConfig.fullyQualifiedDomainName,
            SearchString: this.input.healthCheckConfig.searchString,
            RequestInterval: this.input.healthCheckConfig.requestInterval,
            FailureThreshold: this.input.healthCheckConfig.failureThreshold,
            MeasureLatency: this.input.healthCheckConfig.measureLatency,
            Inverted: this.input.healthCheckConfig.inverted,
            Disabled: this.input.healthCheckConfig.disabled,
            HealthThreshold: this.input.healthCheckConfig.healthThreshold,
            ChildHealthChecks: this.input.healthCheckConfig.childHealthChecks,
            EnableSNI: this.input.healthCheckConfig.enableSni,
            Regions: this.input.healthCheckConfig.regions,
            AlarmIdentifier: {
              Region: this.input.healthCheckConfig.alarmIdentifier?.region,
              Name: this.input.healthCheckConfig.alarmIdentifier?.name,
            },
            InsufficientDataHealthStatus: this.input.healthCheckConfig.insufficientDataHealthStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateHealthCheck.HealthCheck.HealthCheckVersion', props);
    return resource.getResponseField('HealthCheck.HealthCheckVersion') as unknown as number;
  }

  public get cloudWatchAlarmConfiguration(): Route53CreateHealthCheckHealthCheckCloudWatchAlarmConfiguration {
    return new Route53CreateHealthCheckHealthCheckCloudWatchAlarmConfiguration(this, 'CloudWatchAlarmConfiguration', this.__resources, this.input);
  }

}

export class Route53CreateHealthCheckHealthCheckLinkedService extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53CreateHealthCheckRequest) {
    super(scope, id);
  }

  public get servicePrincipal(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateHealthCheck.HealthCheck.LinkedService.ServicePrincipal'),
        outputPath: 'HealthCheck.LinkedService.ServicePrincipal',
        parameters: {
          CallerReference: this.input.callerReference,
          HealthCheckConfig: {
            IPAddress: this.input.healthCheckConfig.ipAddress,
            Port: this.input.healthCheckConfig.port,
            Type: this.input.healthCheckConfig.type,
            ResourcePath: this.input.healthCheckConfig.resourcePath,
            FullyQualifiedDomainName: this.input.healthCheckConfig.fullyQualifiedDomainName,
            SearchString: this.input.healthCheckConfig.searchString,
            RequestInterval: this.input.healthCheckConfig.requestInterval,
            FailureThreshold: this.input.healthCheckConfig.failureThreshold,
            MeasureLatency: this.input.healthCheckConfig.measureLatency,
            Inverted: this.input.healthCheckConfig.inverted,
            Disabled: this.input.healthCheckConfig.disabled,
            HealthThreshold: this.input.healthCheckConfig.healthThreshold,
            ChildHealthChecks: this.input.healthCheckConfig.childHealthChecks,
            EnableSNI: this.input.healthCheckConfig.enableSni,
            Regions: this.input.healthCheckConfig.regions,
            AlarmIdentifier: {
              Region: this.input.healthCheckConfig.alarmIdentifier?.region,
              Name: this.input.healthCheckConfig.alarmIdentifier?.name,
            },
            InsufficientDataHealthStatus: this.input.healthCheckConfig.insufficientDataHealthStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateHealthCheck.HealthCheck.LinkedService.ServicePrincipal', props);
    return resource.getResponseField('HealthCheck.LinkedService.ServicePrincipal') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateHealthCheck.HealthCheck.LinkedService.Description'),
        outputPath: 'HealthCheck.LinkedService.Description',
        parameters: {
          CallerReference: this.input.callerReference,
          HealthCheckConfig: {
            IPAddress: this.input.healthCheckConfig.ipAddress,
            Port: this.input.healthCheckConfig.port,
            Type: this.input.healthCheckConfig.type,
            ResourcePath: this.input.healthCheckConfig.resourcePath,
            FullyQualifiedDomainName: this.input.healthCheckConfig.fullyQualifiedDomainName,
            SearchString: this.input.healthCheckConfig.searchString,
            RequestInterval: this.input.healthCheckConfig.requestInterval,
            FailureThreshold: this.input.healthCheckConfig.failureThreshold,
            MeasureLatency: this.input.healthCheckConfig.measureLatency,
            Inverted: this.input.healthCheckConfig.inverted,
            Disabled: this.input.healthCheckConfig.disabled,
            HealthThreshold: this.input.healthCheckConfig.healthThreshold,
            ChildHealthChecks: this.input.healthCheckConfig.childHealthChecks,
            EnableSNI: this.input.healthCheckConfig.enableSni,
            Regions: this.input.healthCheckConfig.regions,
            AlarmIdentifier: {
              Region: this.input.healthCheckConfig.alarmIdentifier?.region,
              Name: this.input.healthCheckConfig.alarmIdentifier?.name,
            },
            InsufficientDataHealthStatus: this.input.healthCheckConfig.insufficientDataHealthStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateHealthCheck.HealthCheck.LinkedService.Description', props);
    return resource.getResponseField('HealthCheck.LinkedService.Description') as unknown as string;
  }

}

export class Route53CreateHealthCheckHealthCheckHealthCheckConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53CreateHealthCheckRequest) {
    super(scope, id);
  }

  public get ipAddress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateHealthCheck.HealthCheck.HealthCheckConfig.IPAddress'),
        outputPath: 'HealthCheck.HealthCheckConfig.IPAddress',
        parameters: {
          CallerReference: this.input.callerReference,
          HealthCheckConfig: {
            IPAddress: this.input.healthCheckConfig.ipAddress,
            Port: this.input.healthCheckConfig.port,
            Type: this.input.healthCheckConfig.type,
            ResourcePath: this.input.healthCheckConfig.resourcePath,
            FullyQualifiedDomainName: this.input.healthCheckConfig.fullyQualifiedDomainName,
            SearchString: this.input.healthCheckConfig.searchString,
            RequestInterval: this.input.healthCheckConfig.requestInterval,
            FailureThreshold: this.input.healthCheckConfig.failureThreshold,
            MeasureLatency: this.input.healthCheckConfig.measureLatency,
            Inverted: this.input.healthCheckConfig.inverted,
            Disabled: this.input.healthCheckConfig.disabled,
            HealthThreshold: this.input.healthCheckConfig.healthThreshold,
            ChildHealthChecks: this.input.healthCheckConfig.childHealthChecks,
            EnableSNI: this.input.healthCheckConfig.enableSni,
            Regions: this.input.healthCheckConfig.regions,
            AlarmIdentifier: {
              Region: this.input.healthCheckConfig.alarmIdentifier?.region,
              Name: this.input.healthCheckConfig.alarmIdentifier?.name,
            },
            InsufficientDataHealthStatus: this.input.healthCheckConfig.insufficientDataHealthStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateHealthCheck.HealthCheck.HealthCheckConfig.IPAddress', props);
    return resource.getResponseField('HealthCheck.HealthCheckConfig.IPAddress') as unknown as string;
  }

  public get port(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateHealthCheck.HealthCheck.HealthCheckConfig.Port'),
        outputPath: 'HealthCheck.HealthCheckConfig.Port',
        parameters: {
          CallerReference: this.input.callerReference,
          HealthCheckConfig: {
            IPAddress: this.input.healthCheckConfig.ipAddress,
            Port: this.input.healthCheckConfig.port,
            Type: this.input.healthCheckConfig.type,
            ResourcePath: this.input.healthCheckConfig.resourcePath,
            FullyQualifiedDomainName: this.input.healthCheckConfig.fullyQualifiedDomainName,
            SearchString: this.input.healthCheckConfig.searchString,
            RequestInterval: this.input.healthCheckConfig.requestInterval,
            FailureThreshold: this.input.healthCheckConfig.failureThreshold,
            MeasureLatency: this.input.healthCheckConfig.measureLatency,
            Inverted: this.input.healthCheckConfig.inverted,
            Disabled: this.input.healthCheckConfig.disabled,
            HealthThreshold: this.input.healthCheckConfig.healthThreshold,
            ChildHealthChecks: this.input.healthCheckConfig.childHealthChecks,
            EnableSNI: this.input.healthCheckConfig.enableSni,
            Regions: this.input.healthCheckConfig.regions,
            AlarmIdentifier: {
              Region: this.input.healthCheckConfig.alarmIdentifier?.region,
              Name: this.input.healthCheckConfig.alarmIdentifier?.name,
            },
            InsufficientDataHealthStatus: this.input.healthCheckConfig.insufficientDataHealthStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateHealthCheck.HealthCheck.HealthCheckConfig.Port', props);
    return resource.getResponseField('HealthCheck.HealthCheckConfig.Port') as unknown as number;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateHealthCheck.HealthCheck.HealthCheckConfig.Type'),
        outputPath: 'HealthCheck.HealthCheckConfig.Type',
        parameters: {
          CallerReference: this.input.callerReference,
          HealthCheckConfig: {
            IPAddress: this.input.healthCheckConfig.ipAddress,
            Port: this.input.healthCheckConfig.port,
            Type: this.input.healthCheckConfig.type,
            ResourcePath: this.input.healthCheckConfig.resourcePath,
            FullyQualifiedDomainName: this.input.healthCheckConfig.fullyQualifiedDomainName,
            SearchString: this.input.healthCheckConfig.searchString,
            RequestInterval: this.input.healthCheckConfig.requestInterval,
            FailureThreshold: this.input.healthCheckConfig.failureThreshold,
            MeasureLatency: this.input.healthCheckConfig.measureLatency,
            Inverted: this.input.healthCheckConfig.inverted,
            Disabled: this.input.healthCheckConfig.disabled,
            HealthThreshold: this.input.healthCheckConfig.healthThreshold,
            ChildHealthChecks: this.input.healthCheckConfig.childHealthChecks,
            EnableSNI: this.input.healthCheckConfig.enableSni,
            Regions: this.input.healthCheckConfig.regions,
            AlarmIdentifier: {
              Region: this.input.healthCheckConfig.alarmIdentifier?.region,
              Name: this.input.healthCheckConfig.alarmIdentifier?.name,
            },
            InsufficientDataHealthStatus: this.input.healthCheckConfig.insufficientDataHealthStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateHealthCheck.HealthCheck.HealthCheckConfig.Type', props);
    return resource.getResponseField('HealthCheck.HealthCheckConfig.Type') as unknown as string;
  }

  public get resourcePath(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateHealthCheck.HealthCheck.HealthCheckConfig.ResourcePath'),
        outputPath: 'HealthCheck.HealthCheckConfig.ResourcePath',
        parameters: {
          CallerReference: this.input.callerReference,
          HealthCheckConfig: {
            IPAddress: this.input.healthCheckConfig.ipAddress,
            Port: this.input.healthCheckConfig.port,
            Type: this.input.healthCheckConfig.type,
            ResourcePath: this.input.healthCheckConfig.resourcePath,
            FullyQualifiedDomainName: this.input.healthCheckConfig.fullyQualifiedDomainName,
            SearchString: this.input.healthCheckConfig.searchString,
            RequestInterval: this.input.healthCheckConfig.requestInterval,
            FailureThreshold: this.input.healthCheckConfig.failureThreshold,
            MeasureLatency: this.input.healthCheckConfig.measureLatency,
            Inverted: this.input.healthCheckConfig.inverted,
            Disabled: this.input.healthCheckConfig.disabled,
            HealthThreshold: this.input.healthCheckConfig.healthThreshold,
            ChildHealthChecks: this.input.healthCheckConfig.childHealthChecks,
            EnableSNI: this.input.healthCheckConfig.enableSni,
            Regions: this.input.healthCheckConfig.regions,
            AlarmIdentifier: {
              Region: this.input.healthCheckConfig.alarmIdentifier?.region,
              Name: this.input.healthCheckConfig.alarmIdentifier?.name,
            },
            InsufficientDataHealthStatus: this.input.healthCheckConfig.insufficientDataHealthStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateHealthCheck.HealthCheck.HealthCheckConfig.ResourcePath', props);
    return resource.getResponseField('HealthCheck.HealthCheckConfig.ResourcePath') as unknown as string;
  }

  public get fullyQualifiedDomainName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateHealthCheck.HealthCheck.HealthCheckConfig.FullyQualifiedDomainName'),
        outputPath: 'HealthCheck.HealthCheckConfig.FullyQualifiedDomainName',
        parameters: {
          CallerReference: this.input.callerReference,
          HealthCheckConfig: {
            IPAddress: this.input.healthCheckConfig.ipAddress,
            Port: this.input.healthCheckConfig.port,
            Type: this.input.healthCheckConfig.type,
            ResourcePath: this.input.healthCheckConfig.resourcePath,
            FullyQualifiedDomainName: this.input.healthCheckConfig.fullyQualifiedDomainName,
            SearchString: this.input.healthCheckConfig.searchString,
            RequestInterval: this.input.healthCheckConfig.requestInterval,
            FailureThreshold: this.input.healthCheckConfig.failureThreshold,
            MeasureLatency: this.input.healthCheckConfig.measureLatency,
            Inverted: this.input.healthCheckConfig.inverted,
            Disabled: this.input.healthCheckConfig.disabled,
            HealthThreshold: this.input.healthCheckConfig.healthThreshold,
            ChildHealthChecks: this.input.healthCheckConfig.childHealthChecks,
            EnableSNI: this.input.healthCheckConfig.enableSni,
            Regions: this.input.healthCheckConfig.regions,
            AlarmIdentifier: {
              Region: this.input.healthCheckConfig.alarmIdentifier?.region,
              Name: this.input.healthCheckConfig.alarmIdentifier?.name,
            },
            InsufficientDataHealthStatus: this.input.healthCheckConfig.insufficientDataHealthStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateHealthCheck.HealthCheck.HealthCheckConfig.FullyQualifiedDomainName', props);
    return resource.getResponseField('HealthCheck.HealthCheckConfig.FullyQualifiedDomainName') as unknown as string;
  }

  public get searchString(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateHealthCheck.HealthCheck.HealthCheckConfig.SearchString'),
        outputPath: 'HealthCheck.HealthCheckConfig.SearchString',
        parameters: {
          CallerReference: this.input.callerReference,
          HealthCheckConfig: {
            IPAddress: this.input.healthCheckConfig.ipAddress,
            Port: this.input.healthCheckConfig.port,
            Type: this.input.healthCheckConfig.type,
            ResourcePath: this.input.healthCheckConfig.resourcePath,
            FullyQualifiedDomainName: this.input.healthCheckConfig.fullyQualifiedDomainName,
            SearchString: this.input.healthCheckConfig.searchString,
            RequestInterval: this.input.healthCheckConfig.requestInterval,
            FailureThreshold: this.input.healthCheckConfig.failureThreshold,
            MeasureLatency: this.input.healthCheckConfig.measureLatency,
            Inverted: this.input.healthCheckConfig.inverted,
            Disabled: this.input.healthCheckConfig.disabled,
            HealthThreshold: this.input.healthCheckConfig.healthThreshold,
            ChildHealthChecks: this.input.healthCheckConfig.childHealthChecks,
            EnableSNI: this.input.healthCheckConfig.enableSni,
            Regions: this.input.healthCheckConfig.regions,
            AlarmIdentifier: {
              Region: this.input.healthCheckConfig.alarmIdentifier?.region,
              Name: this.input.healthCheckConfig.alarmIdentifier?.name,
            },
            InsufficientDataHealthStatus: this.input.healthCheckConfig.insufficientDataHealthStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateHealthCheck.HealthCheck.HealthCheckConfig.SearchString', props);
    return resource.getResponseField('HealthCheck.HealthCheckConfig.SearchString') as unknown as string;
  }

  public get requestInterval(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateHealthCheck.HealthCheck.HealthCheckConfig.RequestInterval'),
        outputPath: 'HealthCheck.HealthCheckConfig.RequestInterval',
        parameters: {
          CallerReference: this.input.callerReference,
          HealthCheckConfig: {
            IPAddress: this.input.healthCheckConfig.ipAddress,
            Port: this.input.healthCheckConfig.port,
            Type: this.input.healthCheckConfig.type,
            ResourcePath: this.input.healthCheckConfig.resourcePath,
            FullyQualifiedDomainName: this.input.healthCheckConfig.fullyQualifiedDomainName,
            SearchString: this.input.healthCheckConfig.searchString,
            RequestInterval: this.input.healthCheckConfig.requestInterval,
            FailureThreshold: this.input.healthCheckConfig.failureThreshold,
            MeasureLatency: this.input.healthCheckConfig.measureLatency,
            Inverted: this.input.healthCheckConfig.inverted,
            Disabled: this.input.healthCheckConfig.disabled,
            HealthThreshold: this.input.healthCheckConfig.healthThreshold,
            ChildHealthChecks: this.input.healthCheckConfig.childHealthChecks,
            EnableSNI: this.input.healthCheckConfig.enableSni,
            Regions: this.input.healthCheckConfig.regions,
            AlarmIdentifier: {
              Region: this.input.healthCheckConfig.alarmIdentifier?.region,
              Name: this.input.healthCheckConfig.alarmIdentifier?.name,
            },
            InsufficientDataHealthStatus: this.input.healthCheckConfig.insufficientDataHealthStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateHealthCheck.HealthCheck.HealthCheckConfig.RequestInterval', props);
    return resource.getResponseField('HealthCheck.HealthCheckConfig.RequestInterval') as unknown as number;
  }

  public get failureThreshold(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateHealthCheck.HealthCheck.HealthCheckConfig.FailureThreshold'),
        outputPath: 'HealthCheck.HealthCheckConfig.FailureThreshold',
        parameters: {
          CallerReference: this.input.callerReference,
          HealthCheckConfig: {
            IPAddress: this.input.healthCheckConfig.ipAddress,
            Port: this.input.healthCheckConfig.port,
            Type: this.input.healthCheckConfig.type,
            ResourcePath: this.input.healthCheckConfig.resourcePath,
            FullyQualifiedDomainName: this.input.healthCheckConfig.fullyQualifiedDomainName,
            SearchString: this.input.healthCheckConfig.searchString,
            RequestInterval: this.input.healthCheckConfig.requestInterval,
            FailureThreshold: this.input.healthCheckConfig.failureThreshold,
            MeasureLatency: this.input.healthCheckConfig.measureLatency,
            Inverted: this.input.healthCheckConfig.inverted,
            Disabled: this.input.healthCheckConfig.disabled,
            HealthThreshold: this.input.healthCheckConfig.healthThreshold,
            ChildHealthChecks: this.input.healthCheckConfig.childHealthChecks,
            EnableSNI: this.input.healthCheckConfig.enableSni,
            Regions: this.input.healthCheckConfig.regions,
            AlarmIdentifier: {
              Region: this.input.healthCheckConfig.alarmIdentifier?.region,
              Name: this.input.healthCheckConfig.alarmIdentifier?.name,
            },
            InsufficientDataHealthStatus: this.input.healthCheckConfig.insufficientDataHealthStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateHealthCheck.HealthCheck.HealthCheckConfig.FailureThreshold', props);
    return resource.getResponseField('HealthCheck.HealthCheckConfig.FailureThreshold') as unknown as number;
  }

  public get measureLatency(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateHealthCheck.HealthCheck.HealthCheckConfig.MeasureLatency'),
        outputPath: 'HealthCheck.HealthCheckConfig.MeasureLatency',
        parameters: {
          CallerReference: this.input.callerReference,
          HealthCheckConfig: {
            IPAddress: this.input.healthCheckConfig.ipAddress,
            Port: this.input.healthCheckConfig.port,
            Type: this.input.healthCheckConfig.type,
            ResourcePath: this.input.healthCheckConfig.resourcePath,
            FullyQualifiedDomainName: this.input.healthCheckConfig.fullyQualifiedDomainName,
            SearchString: this.input.healthCheckConfig.searchString,
            RequestInterval: this.input.healthCheckConfig.requestInterval,
            FailureThreshold: this.input.healthCheckConfig.failureThreshold,
            MeasureLatency: this.input.healthCheckConfig.measureLatency,
            Inverted: this.input.healthCheckConfig.inverted,
            Disabled: this.input.healthCheckConfig.disabled,
            HealthThreshold: this.input.healthCheckConfig.healthThreshold,
            ChildHealthChecks: this.input.healthCheckConfig.childHealthChecks,
            EnableSNI: this.input.healthCheckConfig.enableSni,
            Regions: this.input.healthCheckConfig.regions,
            AlarmIdentifier: {
              Region: this.input.healthCheckConfig.alarmIdentifier?.region,
              Name: this.input.healthCheckConfig.alarmIdentifier?.name,
            },
            InsufficientDataHealthStatus: this.input.healthCheckConfig.insufficientDataHealthStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateHealthCheck.HealthCheck.HealthCheckConfig.MeasureLatency', props);
    return resource.getResponseField('HealthCheck.HealthCheckConfig.MeasureLatency') as unknown as boolean;
  }

  public get inverted(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateHealthCheck.HealthCheck.HealthCheckConfig.Inverted'),
        outputPath: 'HealthCheck.HealthCheckConfig.Inverted',
        parameters: {
          CallerReference: this.input.callerReference,
          HealthCheckConfig: {
            IPAddress: this.input.healthCheckConfig.ipAddress,
            Port: this.input.healthCheckConfig.port,
            Type: this.input.healthCheckConfig.type,
            ResourcePath: this.input.healthCheckConfig.resourcePath,
            FullyQualifiedDomainName: this.input.healthCheckConfig.fullyQualifiedDomainName,
            SearchString: this.input.healthCheckConfig.searchString,
            RequestInterval: this.input.healthCheckConfig.requestInterval,
            FailureThreshold: this.input.healthCheckConfig.failureThreshold,
            MeasureLatency: this.input.healthCheckConfig.measureLatency,
            Inverted: this.input.healthCheckConfig.inverted,
            Disabled: this.input.healthCheckConfig.disabled,
            HealthThreshold: this.input.healthCheckConfig.healthThreshold,
            ChildHealthChecks: this.input.healthCheckConfig.childHealthChecks,
            EnableSNI: this.input.healthCheckConfig.enableSni,
            Regions: this.input.healthCheckConfig.regions,
            AlarmIdentifier: {
              Region: this.input.healthCheckConfig.alarmIdentifier?.region,
              Name: this.input.healthCheckConfig.alarmIdentifier?.name,
            },
            InsufficientDataHealthStatus: this.input.healthCheckConfig.insufficientDataHealthStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateHealthCheck.HealthCheck.HealthCheckConfig.Inverted', props);
    return resource.getResponseField('HealthCheck.HealthCheckConfig.Inverted') as unknown as boolean;
  }

  public get disabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateHealthCheck.HealthCheck.HealthCheckConfig.Disabled'),
        outputPath: 'HealthCheck.HealthCheckConfig.Disabled',
        parameters: {
          CallerReference: this.input.callerReference,
          HealthCheckConfig: {
            IPAddress: this.input.healthCheckConfig.ipAddress,
            Port: this.input.healthCheckConfig.port,
            Type: this.input.healthCheckConfig.type,
            ResourcePath: this.input.healthCheckConfig.resourcePath,
            FullyQualifiedDomainName: this.input.healthCheckConfig.fullyQualifiedDomainName,
            SearchString: this.input.healthCheckConfig.searchString,
            RequestInterval: this.input.healthCheckConfig.requestInterval,
            FailureThreshold: this.input.healthCheckConfig.failureThreshold,
            MeasureLatency: this.input.healthCheckConfig.measureLatency,
            Inverted: this.input.healthCheckConfig.inverted,
            Disabled: this.input.healthCheckConfig.disabled,
            HealthThreshold: this.input.healthCheckConfig.healthThreshold,
            ChildHealthChecks: this.input.healthCheckConfig.childHealthChecks,
            EnableSNI: this.input.healthCheckConfig.enableSni,
            Regions: this.input.healthCheckConfig.regions,
            AlarmIdentifier: {
              Region: this.input.healthCheckConfig.alarmIdentifier?.region,
              Name: this.input.healthCheckConfig.alarmIdentifier?.name,
            },
            InsufficientDataHealthStatus: this.input.healthCheckConfig.insufficientDataHealthStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateHealthCheck.HealthCheck.HealthCheckConfig.Disabled', props);
    return resource.getResponseField('HealthCheck.HealthCheckConfig.Disabled') as unknown as boolean;
  }

  public get healthThreshold(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateHealthCheck.HealthCheck.HealthCheckConfig.HealthThreshold'),
        outputPath: 'HealthCheck.HealthCheckConfig.HealthThreshold',
        parameters: {
          CallerReference: this.input.callerReference,
          HealthCheckConfig: {
            IPAddress: this.input.healthCheckConfig.ipAddress,
            Port: this.input.healthCheckConfig.port,
            Type: this.input.healthCheckConfig.type,
            ResourcePath: this.input.healthCheckConfig.resourcePath,
            FullyQualifiedDomainName: this.input.healthCheckConfig.fullyQualifiedDomainName,
            SearchString: this.input.healthCheckConfig.searchString,
            RequestInterval: this.input.healthCheckConfig.requestInterval,
            FailureThreshold: this.input.healthCheckConfig.failureThreshold,
            MeasureLatency: this.input.healthCheckConfig.measureLatency,
            Inverted: this.input.healthCheckConfig.inverted,
            Disabled: this.input.healthCheckConfig.disabled,
            HealthThreshold: this.input.healthCheckConfig.healthThreshold,
            ChildHealthChecks: this.input.healthCheckConfig.childHealthChecks,
            EnableSNI: this.input.healthCheckConfig.enableSni,
            Regions: this.input.healthCheckConfig.regions,
            AlarmIdentifier: {
              Region: this.input.healthCheckConfig.alarmIdentifier?.region,
              Name: this.input.healthCheckConfig.alarmIdentifier?.name,
            },
            InsufficientDataHealthStatus: this.input.healthCheckConfig.insufficientDataHealthStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateHealthCheck.HealthCheck.HealthCheckConfig.HealthThreshold', props);
    return resource.getResponseField('HealthCheck.HealthCheckConfig.HealthThreshold') as unknown as number;
  }

  public get childHealthChecks(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateHealthCheck.HealthCheck.HealthCheckConfig.ChildHealthChecks'),
        outputPath: 'HealthCheck.HealthCheckConfig.ChildHealthChecks',
        parameters: {
          CallerReference: this.input.callerReference,
          HealthCheckConfig: {
            IPAddress: this.input.healthCheckConfig.ipAddress,
            Port: this.input.healthCheckConfig.port,
            Type: this.input.healthCheckConfig.type,
            ResourcePath: this.input.healthCheckConfig.resourcePath,
            FullyQualifiedDomainName: this.input.healthCheckConfig.fullyQualifiedDomainName,
            SearchString: this.input.healthCheckConfig.searchString,
            RequestInterval: this.input.healthCheckConfig.requestInterval,
            FailureThreshold: this.input.healthCheckConfig.failureThreshold,
            MeasureLatency: this.input.healthCheckConfig.measureLatency,
            Inverted: this.input.healthCheckConfig.inverted,
            Disabled: this.input.healthCheckConfig.disabled,
            HealthThreshold: this.input.healthCheckConfig.healthThreshold,
            ChildHealthChecks: this.input.healthCheckConfig.childHealthChecks,
            EnableSNI: this.input.healthCheckConfig.enableSni,
            Regions: this.input.healthCheckConfig.regions,
            AlarmIdentifier: {
              Region: this.input.healthCheckConfig.alarmIdentifier?.region,
              Name: this.input.healthCheckConfig.alarmIdentifier?.name,
            },
            InsufficientDataHealthStatus: this.input.healthCheckConfig.insufficientDataHealthStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateHealthCheck.HealthCheck.HealthCheckConfig.ChildHealthChecks', props);
    return resource.getResponseField('HealthCheck.HealthCheckConfig.ChildHealthChecks') as unknown as string[];
  }

  public get enableSni(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateHealthCheck.HealthCheck.HealthCheckConfig.EnableSNI'),
        outputPath: 'HealthCheck.HealthCheckConfig.EnableSNI',
        parameters: {
          CallerReference: this.input.callerReference,
          HealthCheckConfig: {
            IPAddress: this.input.healthCheckConfig.ipAddress,
            Port: this.input.healthCheckConfig.port,
            Type: this.input.healthCheckConfig.type,
            ResourcePath: this.input.healthCheckConfig.resourcePath,
            FullyQualifiedDomainName: this.input.healthCheckConfig.fullyQualifiedDomainName,
            SearchString: this.input.healthCheckConfig.searchString,
            RequestInterval: this.input.healthCheckConfig.requestInterval,
            FailureThreshold: this.input.healthCheckConfig.failureThreshold,
            MeasureLatency: this.input.healthCheckConfig.measureLatency,
            Inverted: this.input.healthCheckConfig.inverted,
            Disabled: this.input.healthCheckConfig.disabled,
            HealthThreshold: this.input.healthCheckConfig.healthThreshold,
            ChildHealthChecks: this.input.healthCheckConfig.childHealthChecks,
            EnableSNI: this.input.healthCheckConfig.enableSni,
            Regions: this.input.healthCheckConfig.regions,
            AlarmIdentifier: {
              Region: this.input.healthCheckConfig.alarmIdentifier?.region,
              Name: this.input.healthCheckConfig.alarmIdentifier?.name,
            },
            InsufficientDataHealthStatus: this.input.healthCheckConfig.insufficientDataHealthStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateHealthCheck.HealthCheck.HealthCheckConfig.EnableSNI', props);
    return resource.getResponseField('HealthCheck.HealthCheckConfig.EnableSNI') as unknown as boolean;
  }

  public get regions(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateHealthCheck.HealthCheck.HealthCheckConfig.Regions'),
        outputPath: 'HealthCheck.HealthCheckConfig.Regions',
        parameters: {
          CallerReference: this.input.callerReference,
          HealthCheckConfig: {
            IPAddress: this.input.healthCheckConfig.ipAddress,
            Port: this.input.healthCheckConfig.port,
            Type: this.input.healthCheckConfig.type,
            ResourcePath: this.input.healthCheckConfig.resourcePath,
            FullyQualifiedDomainName: this.input.healthCheckConfig.fullyQualifiedDomainName,
            SearchString: this.input.healthCheckConfig.searchString,
            RequestInterval: this.input.healthCheckConfig.requestInterval,
            FailureThreshold: this.input.healthCheckConfig.failureThreshold,
            MeasureLatency: this.input.healthCheckConfig.measureLatency,
            Inverted: this.input.healthCheckConfig.inverted,
            Disabled: this.input.healthCheckConfig.disabled,
            HealthThreshold: this.input.healthCheckConfig.healthThreshold,
            ChildHealthChecks: this.input.healthCheckConfig.childHealthChecks,
            EnableSNI: this.input.healthCheckConfig.enableSni,
            Regions: this.input.healthCheckConfig.regions,
            AlarmIdentifier: {
              Region: this.input.healthCheckConfig.alarmIdentifier?.region,
              Name: this.input.healthCheckConfig.alarmIdentifier?.name,
            },
            InsufficientDataHealthStatus: this.input.healthCheckConfig.insufficientDataHealthStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateHealthCheck.HealthCheck.HealthCheckConfig.Regions', props);
    return resource.getResponseField('HealthCheck.HealthCheckConfig.Regions') as unknown as string[];
  }

  public get alarmIdentifier(): Route53CreateHealthCheckHealthCheckHealthCheckConfigAlarmIdentifier {
    return new Route53CreateHealthCheckHealthCheckHealthCheckConfigAlarmIdentifier(this, 'AlarmIdentifier', this.__resources, this.input);
  }

  public get insufficientDataHealthStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateHealthCheck.HealthCheck.HealthCheckConfig.InsufficientDataHealthStatus'),
        outputPath: 'HealthCheck.HealthCheckConfig.InsufficientDataHealthStatus',
        parameters: {
          CallerReference: this.input.callerReference,
          HealthCheckConfig: {
            IPAddress: this.input.healthCheckConfig.ipAddress,
            Port: this.input.healthCheckConfig.port,
            Type: this.input.healthCheckConfig.type,
            ResourcePath: this.input.healthCheckConfig.resourcePath,
            FullyQualifiedDomainName: this.input.healthCheckConfig.fullyQualifiedDomainName,
            SearchString: this.input.healthCheckConfig.searchString,
            RequestInterval: this.input.healthCheckConfig.requestInterval,
            FailureThreshold: this.input.healthCheckConfig.failureThreshold,
            MeasureLatency: this.input.healthCheckConfig.measureLatency,
            Inverted: this.input.healthCheckConfig.inverted,
            Disabled: this.input.healthCheckConfig.disabled,
            HealthThreshold: this.input.healthCheckConfig.healthThreshold,
            ChildHealthChecks: this.input.healthCheckConfig.childHealthChecks,
            EnableSNI: this.input.healthCheckConfig.enableSni,
            Regions: this.input.healthCheckConfig.regions,
            AlarmIdentifier: {
              Region: this.input.healthCheckConfig.alarmIdentifier?.region,
              Name: this.input.healthCheckConfig.alarmIdentifier?.name,
            },
            InsufficientDataHealthStatus: this.input.healthCheckConfig.insufficientDataHealthStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateHealthCheck.HealthCheck.HealthCheckConfig.InsufficientDataHealthStatus', props);
    return resource.getResponseField('HealthCheck.HealthCheckConfig.InsufficientDataHealthStatus') as unknown as string;
  }

}

export class Route53CreateHealthCheckHealthCheckHealthCheckConfigAlarmIdentifier extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53CreateHealthCheckRequest) {
    super(scope, id);
  }

  public get region(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateHealthCheck.HealthCheck.HealthCheckConfig.AlarmIdentifier.Region'),
        outputPath: 'HealthCheck.HealthCheckConfig.AlarmIdentifier.Region',
        parameters: {
          CallerReference: this.input.callerReference,
          HealthCheckConfig: {
            IPAddress: this.input.healthCheckConfig.ipAddress,
            Port: this.input.healthCheckConfig.port,
            Type: this.input.healthCheckConfig.type,
            ResourcePath: this.input.healthCheckConfig.resourcePath,
            FullyQualifiedDomainName: this.input.healthCheckConfig.fullyQualifiedDomainName,
            SearchString: this.input.healthCheckConfig.searchString,
            RequestInterval: this.input.healthCheckConfig.requestInterval,
            FailureThreshold: this.input.healthCheckConfig.failureThreshold,
            MeasureLatency: this.input.healthCheckConfig.measureLatency,
            Inverted: this.input.healthCheckConfig.inverted,
            Disabled: this.input.healthCheckConfig.disabled,
            HealthThreshold: this.input.healthCheckConfig.healthThreshold,
            ChildHealthChecks: this.input.healthCheckConfig.childHealthChecks,
            EnableSNI: this.input.healthCheckConfig.enableSni,
            Regions: this.input.healthCheckConfig.regions,
            AlarmIdentifier: {
              Region: this.input.healthCheckConfig.alarmIdentifier?.region,
              Name: this.input.healthCheckConfig.alarmIdentifier?.name,
            },
            InsufficientDataHealthStatus: this.input.healthCheckConfig.insufficientDataHealthStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateHealthCheck.HealthCheck.HealthCheckConfig.AlarmIdentifier.Region', props);
    return resource.getResponseField('HealthCheck.HealthCheckConfig.AlarmIdentifier.Region') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateHealthCheck.HealthCheck.HealthCheckConfig.AlarmIdentifier.Name'),
        outputPath: 'HealthCheck.HealthCheckConfig.AlarmIdentifier.Name',
        parameters: {
          CallerReference: this.input.callerReference,
          HealthCheckConfig: {
            IPAddress: this.input.healthCheckConfig.ipAddress,
            Port: this.input.healthCheckConfig.port,
            Type: this.input.healthCheckConfig.type,
            ResourcePath: this.input.healthCheckConfig.resourcePath,
            FullyQualifiedDomainName: this.input.healthCheckConfig.fullyQualifiedDomainName,
            SearchString: this.input.healthCheckConfig.searchString,
            RequestInterval: this.input.healthCheckConfig.requestInterval,
            FailureThreshold: this.input.healthCheckConfig.failureThreshold,
            MeasureLatency: this.input.healthCheckConfig.measureLatency,
            Inverted: this.input.healthCheckConfig.inverted,
            Disabled: this.input.healthCheckConfig.disabled,
            HealthThreshold: this.input.healthCheckConfig.healthThreshold,
            ChildHealthChecks: this.input.healthCheckConfig.childHealthChecks,
            EnableSNI: this.input.healthCheckConfig.enableSni,
            Regions: this.input.healthCheckConfig.regions,
            AlarmIdentifier: {
              Region: this.input.healthCheckConfig.alarmIdentifier?.region,
              Name: this.input.healthCheckConfig.alarmIdentifier?.name,
            },
            InsufficientDataHealthStatus: this.input.healthCheckConfig.insufficientDataHealthStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateHealthCheck.HealthCheck.HealthCheckConfig.AlarmIdentifier.Name', props);
    return resource.getResponseField('HealthCheck.HealthCheckConfig.AlarmIdentifier.Name') as unknown as string;
  }

}

export class Route53CreateHealthCheckHealthCheckCloudWatchAlarmConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53CreateHealthCheckRequest) {
    super(scope, id);
  }

  public get evaluationPeriods(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateHealthCheck.HealthCheck.CloudWatchAlarmConfiguration.EvaluationPeriods'),
        outputPath: 'HealthCheck.CloudWatchAlarmConfiguration.EvaluationPeriods',
        parameters: {
          CallerReference: this.input.callerReference,
          HealthCheckConfig: {
            IPAddress: this.input.healthCheckConfig.ipAddress,
            Port: this.input.healthCheckConfig.port,
            Type: this.input.healthCheckConfig.type,
            ResourcePath: this.input.healthCheckConfig.resourcePath,
            FullyQualifiedDomainName: this.input.healthCheckConfig.fullyQualifiedDomainName,
            SearchString: this.input.healthCheckConfig.searchString,
            RequestInterval: this.input.healthCheckConfig.requestInterval,
            FailureThreshold: this.input.healthCheckConfig.failureThreshold,
            MeasureLatency: this.input.healthCheckConfig.measureLatency,
            Inverted: this.input.healthCheckConfig.inverted,
            Disabled: this.input.healthCheckConfig.disabled,
            HealthThreshold: this.input.healthCheckConfig.healthThreshold,
            ChildHealthChecks: this.input.healthCheckConfig.childHealthChecks,
            EnableSNI: this.input.healthCheckConfig.enableSni,
            Regions: this.input.healthCheckConfig.regions,
            AlarmIdentifier: {
              Region: this.input.healthCheckConfig.alarmIdentifier?.region,
              Name: this.input.healthCheckConfig.alarmIdentifier?.name,
            },
            InsufficientDataHealthStatus: this.input.healthCheckConfig.insufficientDataHealthStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateHealthCheck.HealthCheck.CloudWatchAlarmConfiguration.EvaluationPeriods', props);
    return resource.getResponseField('HealthCheck.CloudWatchAlarmConfiguration.EvaluationPeriods') as unknown as number;
  }

  public get threshold(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateHealthCheck.HealthCheck.CloudWatchAlarmConfiguration.Threshold'),
        outputPath: 'HealthCheck.CloudWatchAlarmConfiguration.Threshold',
        parameters: {
          CallerReference: this.input.callerReference,
          HealthCheckConfig: {
            IPAddress: this.input.healthCheckConfig.ipAddress,
            Port: this.input.healthCheckConfig.port,
            Type: this.input.healthCheckConfig.type,
            ResourcePath: this.input.healthCheckConfig.resourcePath,
            FullyQualifiedDomainName: this.input.healthCheckConfig.fullyQualifiedDomainName,
            SearchString: this.input.healthCheckConfig.searchString,
            RequestInterval: this.input.healthCheckConfig.requestInterval,
            FailureThreshold: this.input.healthCheckConfig.failureThreshold,
            MeasureLatency: this.input.healthCheckConfig.measureLatency,
            Inverted: this.input.healthCheckConfig.inverted,
            Disabled: this.input.healthCheckConfig.disabled,
            HealthThreshold: this.input.healthCheckConfig.healthThreshold,
            ChildHealthChecks: this.input.healthCheckConfig.childHealthChecks,
            EnableSNI: this.input.healthCheckConfig.enableSni,
            Regions: this.input.healthCheckConfig.regions,
            AlarmIdentifier: {
              Region: this.input.healthCheckConfig.alarmIdentifier?.region,
              Name: this.input.healthCheckConfig.alarmIdentifier?.name,
            },
            InsufficientDataHealthStatus: this.input.healthCheckConfig.insufficientDataHealthStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateHealthCheck.HealthCheck.CloudWatchAlarmConfiguration.Threshold', props);
    return resource.getResponseField('HealthCheck.CloudWatchAlarmConfiguration.Threshold') as unknown as number;
  }

  public get comparisonOperator(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateHealthCheck.HealthCheck.CloudWatchAlarmConfiguration.ComparisonOperator'),
        outputPath: 'HealthCheck.CloudWatchAlarmConfiguration.ComparisonOperator',
        parameters: {
          CallerReference: this.input.callerReference,
          HealthCheckConfig: {
            IPAddress: this.input.healthCheckConfig.ipAddress,
            Port: this.input.healthCheckConfig.port,
            Type: this.input.healthCheckConfig.type,
            ResourcePath: this.input.healthCheckConfig.resourcePath,
            FullyQualifiedDomainName: this.input.healthCheckConfig.fullyQualifiedDomainName,
            SearchString: this.input.healthCheckConfig.searchString,
            RequestInterval: this.input.healthCheckConfig.requestInterval,
            FailureThreshold: this.input.healthCheckConfig.failureThreshold,
            MeasureLatency: this.input.healthCheckConfig.measureLatency,
            Inverted: this.input.healthCheckConfig.inverted,
            Disabled: this.input.healthCheckConfig.disabled,
            HealthThreshold: this.input.healthCheckConfig.healthThreshold,
            ChildHealthChecks: this.input.healthCheckConfig.childHealthChecks,
            EnableSNI: this.input.healthCheckConfig.enableSni,
            Regions: this.input.healthCheckConfig.regions,
            AlarmIdentifier: {
              Region: this.input.healthCheckConfig.alarmIdentifier?.region,
              Name: this.input.healthCheckConfig.alarmIdentifier?.name,
            },
            InsufficientDataHealthStatus: this.input.healthCheckConfig.insufficientDataHealthStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateHealthCheck.HealthCheck.CloudWatchAlarmConfiguration.ComparisonOperator', props);
    return resource.getResponseField('HealthCheck.CloudWatchAlarmConfiguration.ComparisonOperator') as unknown as string;
  }

  public get period(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateHealthCheck.HealthCheck.CloudWatchAlarmConfiguration.Period'),
        outputPath: 'HealthCheck.CloudWatchAlarmConfiguration.Period',
        parameters: {
          CallerReference: this.input.callerReference,
          HealthCheckConfig: {
            IPAddress: this.input.healthCheckConfig.ipAddress,
            Port: this.input.healthCheckConfig.port,
            Type: this.input.healthCheckConfig.type,
            ResourcePath: this.input.healthCheckConfig.resourcePath,
            FullyQualifiedDomainName: this.input.healthCheckConfig.fullyQualifiedDomainName,
            SearchString: this.input.healthCheckConfig.searchString,
            RequestInterval: this.input.healthCheckConfig.requestInterval,
            FailureThreshold: this.input.healthCheckConfig.failureThreshold,
            MeasureLatency: this.input.healthCheckConfig.measureLatency,
            Inverted: this.input.healthCheckConfig.inverted,
            Disabled: this.input.healthCheckConfig.disabled,
            HealthThreshold: this.input.healthCheckConfig.healthThreshold,
            ChildHealthChecks: this.input.healthCheckConfig.childHealthChecks,
            EnableSNI: this.input.healthCheckConfig.enableSni,
            Regions: this.input.healthCheckConfig.regions,
            AlarmIdentifier: {
              Region: this.input.healthCheckConfig.alarmIdentifier?.region,
              Name: this.input.healthCheckConfig.alarmIdentifier?.name,
            },
            InsufficientDataHealthStatus: this.input.healthCheckConfig.insufficientDataHealthStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateHealthCheck.HealthCheck.CloudWatchAlarmConfiguration.Period', props);
    return resource.getResponseField('HealthCheck.CloudWatchAlarmConfiguration.Period') as unknown as number;
  }

  public get metricName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateHealthCheck.HealthCheck.CloudWatchAlarmConfiguration.MetricName'),
        outputPath: 'HealthCheck.CloudWatchAlarmConfiguration.MetricName',
        parameters: {
          CallerReference: this.input.callerReference,
          HealthCheckConfig: {
            IPAddress: this.input.healthCheckConfig.ipAddress,
            Port: this.input.healthCheckConfig.port,
            Type: this.input.healthCheckConfig.type,
            ResourcePath: this.input.healthCheckConfig.resourcePath,
            FullyQualifiedDomainName: this.input.healthCheckConfig.fullyQualifiedDomainName,
            SearchString: this.input.healthCheckConfig.searchString,
            RequestInterval: this.input.healthCheckConfig.requestInterval,
            FailureThreshold: this.input.healthCheckConfig.failureThreshold,
            MeasureLatency: this.input.healthCheckConfig.measureLatency,
            Inverted: this.input.healthCheckConfig.inverted,
            Disabled: this.input.healthCheckConfig.disabled,
            HealthThreshold: this.input.healthCheckConfig.healthThreshold,
            ChildHealthChecks: this.input.healthCheckConfig.childHealthChecks,
            EnableSNI: this.input.healthCheckConfig.enableSni,
            Regions: this.input.healthCheckConfig.regions,
            AlarmIdentifier: {
              Region: this.input.healthCheckConfig.alarmIdentifier?.region,
              Name: this.input.healthCheckConfig.alarmIdentifier?.name,
            },
            InsufficientDataHealthStatus: this.input.healthCheckConfig.insufficientDataHealthStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateHealthCheck.HealthCheck.CloudWatchAlarmConfiguration.MetricName', props);
    return resource.getResponseField('HealthCheck.CloudWatchAlarmConfiguration.MetricName') as unknown as string;
  }

  public get namespace(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateHealthCheck.HealthCheck.CloudWatchAlarmConfiguration.Namespace'),
        outputPath: 'HealthCheck.CloudWatchAlarmConfiguration.Namespace',
        parameters: {
          CallerReference: this.input.callerReference,
          HealthCheckConfig: {
            IPAddress: this.input.healthCheckConfig.ipAddress,
            Port: this.input.healthCheckConfig.port,
            Type: this.input.healthCheckConfig.type,
            ResourcePath: this.input.healthCheckConfig.resourcePath,
            FullyQualifiedDomainName: this.input.healthCheckConfig.fullyQualifiedDomainName,
            SearchString: this.input.healthCheckConfig.searchString,
            RequestInterval: this.input.healthCheckConfig.requestInterval,
            FailureThreshold: this.input.healthCheckConfig.failureThreshold,
            MeasureLatency: this.input.healthCheckConfig.measureLatency,
            Inverted: this.input.healthCheckConfig.inverted,
            Disabled: this.input.healthCheckConfig.disabled,
            HealthThreshold: this.input.healthCheckConfig.healthThreshold,
            ChildHealthChecks: this.input.healthCheckConfig.childHealthChecks,
            EnableSNI: this.input.healthCheckConfig.enableSni,
            Regions: this.input.healthCheckConfig.regions,
            AlarmIdentifier: {
              Region: this.input.healthCheckConfig.alarmIdentifier?.region,
              Name: this.input.healthCheckConfig.alarmIdentifier?.name,
            },
            InsufficientDataHealthStatus: this.input.healthCheckConfig.insufficientDataHealthStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateHealthCheck.HealthCheck.CloudWatchAlarmConfiguration.Namespace', props);
    return resource.getResponseField('HealthCheck.CloudWatchAlarmConfiguration.Namespace') as unknown as string;
  }

  public get statistic(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateHealthCheck.HealthCheck.CloudWatchAlarmConfiguration.Statistic'),
        outputPath: 'HealthCheck.CloudWatchAlarmConfiguration.Statistic',
        parameters: {
          CallerReference: this.input.callerReference,
          HealthCheckConfig: {
            IPAddress: this.input.healthCheckConfig.ipAddress,
            Port: this.input.healthCheckConfig.port,
            Type: this.input.healthCheckConfig.type,
            ResourcePath: this.input.healthCheckConfig.resourcePath,
            FullyQualifiedDomainName: this.input.healthCheckConfig.fullyQualifiedDomainName,
            SearchString: this.input.healthCheckConfig.searchString,
            RequestInterval: this.input.healthCheckConfig.requestInterval,
            FailureThreshold: this.input.healthCheckConfig.failureThreshold,
            MeasureLatency: this.input.healthCheckConfig.measureLatency,
            Inverted: this.input.healthCheckConfig.inverted,
            Disabled: this.input.healthCheckConfig.disabled,
            HealthThreshold: this.input.healthCheckConfig.healthThreshold,
            ChildHealthChecks: this.input.healthCheckConfig.childHealthChecks,
            EnableSNI: this.input.healthCheckConfig.enableSni,
            Regions: this.input.healthCheckConfig.regions,
            AlarmIdentifier: {
              Region: this.input.healthCheckConfig.alarmIdentifier?.region,
              Name: this.input.healthCheckConfig.alarmIdentifier?.name,
            },
            InsufficientDataHealthStatus: this.input.healthCheckConfig.insufficientDataHealthStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateHealthCheck.HealthCheck.CloudWatchAlarmConfiguration.Statistic', props);
    return resource.getResponseField('HealthCheck.CloudWatchAlarmConfiguration.Statistic') as unknown as string;
  }

  public get dimensions(): shapes.Route53Dimension[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateHealthCheck.HealthCheck.CloudWatchAlarmConfiguration.Dimensions'),
        outputPath: 'HealthCheck.CloudWatchAlarmConfiguration.Dimensions',
        parameters: {
          CallerReference: this.input.callerReference,
          HealthCheckConfig: {
            IPAddress: this.input.healthCheckConfig.ipAddress,
            Port: this.input.healthCheckConfig.port,
            Type: this.input.healthCheckConfig.type,
            ResourcePath: this.input.healthCheckConfig.resourcePath,
            FullyQualifiedDomainName: this.input.healthCheckConfig.fullyQualifiedDomainName,
            SearchString: this.input.healthCheckConfig.searchString,
            RequestInterval: this.input.healthCheckConfig.requestInterval,
            FailureThreshold: this.input.healthCheckConfig.failureThreshold,
            MeasureLatency: this.input.healthCheckConfig.measureLatency,
            Inverted: this.input.healthCheckConfig.inverted,
            Disabled: this.input.healthCheckConfig.disabled,
            HealthThreshold: this.input.healthCheckConfig.healthThreshold,
            ChildHealthChecks: this.input.healthCheckConfig.childHealthChecks,
            EnableSNI: this.input.healthCheckConfig.enableSni,
            Regions: this.input.healthCheckConfig.regions,
            AlarmIdentifier: {
              Region: this.input.healthCheckConfig.alarmIdentifier?.region,
              Name: this.input.healthCheckConfig.alarmIdentifier?.name,
            },
            InsufficientDataHealthStatus: this.input.healthCheckConfig.insufficientDataHealthStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateHealthCheck.HealthCheck.CloudWatchAlarmConfiguration.Dimensions', props);
    return resource.getResponseField('HealthCheck.CloudWatchAlarmConfiguration.Dimensions') as unknown as shapes.Route53Dimension[];
  }

}

export class Route53CreateHostedZone extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53CreateHostedZoneRequest) {
    super(scope, id);
  }

  public get hostedZone(): Route53CreateHostedZoneHostedZone {
    return new Route53CreateHostedZoneHostedZone(this, 'HostedZone', this.__resources, this.input);
  }

  public get changeInfo(): Route53CreateHostedZoneChangeInfo {
    return new Route53CreateHostedZoneChangeInfo(this, 'ChangeInfo', this.__resources, this.input);
  }

  public get delegationSet(): Route53CreateHostedZoneDelegationSet {
    return new Route53CreateHostedZoneDelegationSet(this, 'DelegationSet', this.__resources, this.input);
  }

  public get vpc(): Route53CreateHostedZoneVpc {
    return new Route53CreateHostedZoneVpc(this, 'Vpc', this.__resources, this.input);
  }

  public get location(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createHostedZone',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateHostedZone.Location'),
        outputPath: 'Location',
        parameters: {
          Name: this.input.name,
          VPC: {
            VPCRegion: this.input.vpc?.vpcRegion,
            VPCId: this.input.vpc?.vpcId,
          },
          CallerReference: this.input.callerReference,
          HostedZoneConfig: {
            Comment: this.input.hostedZoneConfig?.comment,
            PrivateZone: this.input.hostedZoneConfig?.privateZone,
          },
          DelegationSetId: this.input.delegationSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateHostedZone.Location', props);
    return resource.getResponseField('Location') as unknown as string;
  }

}

export class Route53CreateHostedZoneHostedZone extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53CreateHostedZoneRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createHostedZone',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateHostedZone.HostedZone.Id'),
        outputPath: 'HostedZone.Id',
        parameters: {
          Name: this.input.name,
          VPC: {
            VPCRegion: this.input.vpc?.vpcRegion,
            VPCId: this.input.vpc?.vpcId,
          },
          CallerReference: this.input.callerReference,
          HostedZoneConfig: {
            Comment: this.input.hostedZoneConfig?.comment,
            PrivateZone: this.input.hostedZoneConfig?.privateZone,
          },
          DelegationSetId: this.input.delegationSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateHostedZone.HostedZone.Id', props);
    return resource.getResponseField('HostedZone.Id') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createHostedZone',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateHostedZone.HostedZone.Name'),
        outputPath: 'HostedZone.Name',
        parameters: {
          Name: this.input.name,
          VPC: {
            VPCRegion: this.input.vpc?.vpcRegion,
            VPCId: this.input.vpc?.vpcId,
          },
          CallerReference: this.input.callerReference,
          HostedZoneConfig: {
            Comment: this.input.hostedZoneConfig?.comment,
            PrivateZone: this.input.hostedZoneConfig?.privateZone,
          },
          DelegationSetId: this.input.delegationSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateHostedZone.HostedZone.Name', props);
    return resource.getResponseField('HostedZone.Name') as unknown as string;
  }

  public get callerReference(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createHostedZone',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateHostedZone.HostedZone.CallerReference'),
        outputPath: 'HostedZone.CallerReference',
        parameters: {
          Name: this.input.name,
          VPC: {
            VPCRegion: this.input.vpc?.vpcRegion,
            VPCId: this.input.vpc?.vpcId,
          },
          CallerReference: this.input.callerReference,
          HostedZoneConfig: {
            Comment: this.input.hostedZoneConfig?.comment,
            PrivateZone: this.input.hostedZoneConfig?.privateZone,
          },
          DelegationSetId: this.input.delegationSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateHostedZone.HostedZone.CallerReference', props);
    return resource.getResponseField('HostedZone.CallerReference') as unknown as string;
  }

  public get config(): Route53CreateHostedZoneHostedZoneConfig {
    return new Route53CreateHostedZoneHostedZoneConfig(this, 'Config', this.__resources, this.input);
  }

  public get resourceRecordSetCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createHostedZone',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateHostedZone.HostedZone.ResourceRecordSetCount'),
        outputPath: 'HostedZone.ResourceRecordSetCount',
        parameters: {
          Name: this.input.name,
          VPC: {
            VPCRegion: this.input.vpc?.vpcRegion,
            VPCId: this.input.vpc?.vpcId,
          },
          CallerReference: this.input.callerReference,
          HostedZoneConfig: {
            Comment: this.input.hostedZoneConfig?.comment,
            PrivateZone: this.input.hostedZoneConfig?.privateZone,
          },
          DelegationSetId: this.input.delegationSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateHostedZone.HostedZone.ResourceRecordSetCount', props);
    return resource.getResponseField('HostedZone.ResourceRecordSetCount') as unknown as number;
  }

  public get linkedService(): Route53CreateHostedZoneHostedZoneLinkedService {
    return new Route53CreateHostedZoneHostedZoneLinkedService(this, 'LinkedService', this.__resources, this.input);
  }

}

export class Route53CreateHostedZoneHostedZoneConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53CreateHostedZoneRequest) {
    super(scope, id);
  }

  public get comment(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createHostedZone',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateHostedZone.HostedZone.Config.Comment'),
        outputPath: 'HostedZone.Config.Comment',
        parameters: {
          Name: this.input.name,
          VPC: {
            VPCRegion: this.input.vpc?.vpcRegion,
            VPCId: this.input.vpc?.vpcId,
          },
          CallerReference: this.input.callerReference,
          HostedZoneConfig: {
            Comment: this.input.hostedZoneConfig?.comment,
            PrivateZone: this.input.hostedZoneConfig?.privateZone,
          },
          DelegationSetId: this.input.delegationSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateHostedZone.HostedZone.Config.Comment', props);
    return resource.getResponseField('HostedZone.Config.Comment') as unknown as string;
  }

  public get privateZone(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createHostedZone',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateHostedZone.HostedZone.Config.PrivateZone'),
        outputPath: 'HostedZone.Config.PrivateZone',
        parameters: {
          Name: this.input.name,
          VPC: {
            VPCRegion: this.input.vpc?.vpcRegion,
            VPCId: this.input.vpc?.vpcId,
          },
          CallerReference: this.input.callerReference,
          HostedZoneConfig: {
            Comment: this.input.hostedZoneConfig?.comment,
            PrivateZone: this.input.hostedZoneConfig?.privateZone,
          },
          DelegationSetId: this.input.delegationSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateHostedZone.HostedZone.Config.PrivateZone', props);
    return resource.getResponseField('HostedZone.Config.PrivateZone') as unknown as boolean;
  }

}

export class Route53CreateHostedZoneHostedZoneLinkedService extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53CreateHostedZoneRequest) {
    super(scope, id);
  }

  public get servicePrincipal(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createHostedZone',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateHostedZone.HostedZone.LinkedService.ServicePrincipal'),
        outputPath: 'HostedZone.LinkedService.ServicePrincipal',
        parameters: {
          Name: this.input.name,
          VPC: {
            VPCRegion: this.input.vpc?.vpcRegion,
            VPCId: this.input.vpc?.vpcId,
          },
          CallerReference: this.input.callerReference,
          HostedZoneConfig: {
            Comment: this.input.hostedZoneConfig?.comment,
            PrivateZone: this.input.hostedZoneConfig?.privateZone,
          },
          DelegationSetId: this.input.delegationSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateHostedZone.HostedZone.LinkedService.ServicePrincipal', props);
    return resource.getResponseField('HostedZone.LinkedService.ServicePrincipal') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createHostedZone',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateHostedZone.HostedZone.LinkedService.Description'),
        outputPath: 'HostedZone.LinkedService.Description',
        parameters: {
          Name: this.input.name,
          VPC: {
            VPCRegion: this.input.vpc?.vpcRegion,
            VPCId: this.input.vpc?.vpcId,
          },
          CallerReference: this.input.callerReference,
          HostedZoneConfig: {
            Comment: this.input.hostedZoneConfig?.comment,
            PrivateZone: this.input.hostedZoneConfig?.privateZone,
          },
          DelegationSetId: this.input.delegationSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateHostedZone.HostedZone.LinkedService.Description', props);
    return resource.getResponseField('HostedZone.LinkedService.Description') as unknown as string;
  }

}

export class Route53CreateHostedZoneChangeInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53CreateHostedZoneRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createHostedZone',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateHostedZone.ChangeInfo.Id'),
        outputPath: 'ChangeInfo.Id',
        parameters: {
          Name: this.input.name,
          VPC: {
            VPCRegion: this.input.vpc?.vpcRegion,
            VPCId: this.input.vpc?.vpcId,
          },
          CallerReference: this.input.callerReference,
          HostedZoneConfig: {
            Comment: this.input.hostedZoneConfig?.comment,
            PrivateZone: this.input.hostedZoneConfig?.privateZone,
          },
          DelegationSetId: this.input.delegationSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateHostedZone.ChangeInfo.Id', props);
    return resource.getResponseField('ChangeInfo.Id') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createHostedZone',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateHostedZone.ChangeInfo.Status'),
        outputPath: 'ChangeInfo.Status',
        parameters: {
          Name: this.input.name,
          VPC: {
            VPCRegion: this.input.vpc?.vpcRegion,
            VPCId: this.input.vpc?.vpcId,
          },
          CallerReference: this.input.callerReference,
          HostedZoneConfig: {
            Comment: this.input.hostedZoneConfig?.comment,
            PrivateZone: this.input.hostedZoneConfig?.privateZone,
          },
          DelegationSetId: this.input.delegationSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateHostedZone.ChangeInfo.Status', props);
    return resource.getResponseField('ChangeInfo.Status') as unknown as string;
  }

  public get submittedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createHostedZone',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateHostedZone.ChangeInfo.SubmittedAt'),
        outputPath: 'ChangeInfo.SubmittedAt',
        parameters: {
          Name: this.input.name,
          VPC: {
            VPCRegion: this.input.vpc?.vpcRegion,
            VPCId: this.input.vpc?.vpcId,
          },
          CallerReference: this.input.callerReference,
          HostedZoneConfig: {
            Comment: this.input.hostedZoneConfig?.comment,
            PrivateZone: this.input.hostedZoneConfig?.privateZone,
          },
          DelegationSetId: this.input.delegationSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateHostedZone.ChangeInfo.SubmittedAt', props);
    return resource.getResponseField('ChangeInfo.SubmittedAt') as unknown as string;
  }

  public get comment(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createHostedZone',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateHostedZone.ChangeInfo.Comment'),
        outputPath: 'ChangeInfo.Comment',
        parameters: {
          Name: this.input.name,
          VPC: {
            VPCRegion: this.input.vpc?.vpcRegion,
            VPCId: this.input.vpc?.vpcId,
          },
          CallerReference: this.input.callerReference,
          HostedZoneConfig: {
            Comment: this.input.hostedZoneConfig?.comment,
            PrivateZone: this.input.hostedZoneConfig?.privateZone,
          },
          DelegationSetId: this.input.delegationSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateHostedZone.ChangeInfo.Comment', props);
    return resource.getResponseField('ChangeInfo.Comment') as unknown as string;
  }

}

export class Route53CreateHostedZoneDelegationSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53CreateHostedZoneRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createHostedZone',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateHostedZone.DelegationSet.Id'),
        outputPath: 'DelegationSet.Id',
        parameters: {
          Name: this.input.name,
          VPC: {
            VPCRegion: this.input.vpc?.vpcRegion,
            VPCId: this.input.vpc?.vpcId,
          },
          CallerReference: this.input.callerReference,
          HostedZoneConfig: {
            Comment: this.input.hostedZoneConfig?.comment,
            PrivateZone: this.input.hostedZoneConfig?.privateZone,
          },
          DelegationSetId: this.input.delegationSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateHostedZone.DelegationSet.Id', props);
    return resource.getResponseField('DelegationSet.Id') as unknown as string;
  }

  public get callerReference(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createHostedZone',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateHostedZone.DelegationSet.CallerReference'),
        outputPath: 'DelegationSet.CallerReference',
        parameters: {
          Name: this.input.name,
          VPC: {
            VPCRegion: this.input.vpc?.vpcRegion,
            VPCId: this.input.vpc?.vpcId,
          },
          CallerReference: this.input.callerReference,
          HostedZoneConfig: {
            Comment: this.input.hostedZoneConfig?.comment,
            PrivateZone: this.input.hostedZoneConfig?.privateZone,
          },
          DelegationSetId: this.input.delegationSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateHostedZone.DelegationSet.CallerReference', props);
    return resource.getResponseField('DelegationSet.CallerReference') as unknown as string;
  }

  public get nameServers(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createHostedZone',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateHostedZone.DelegationSet.NameServers'),
        outputPath: 'DelegationSet.NameServers',
        parameters: {
          Name: this.input.name,
          VPC: {
            VPCRegion: this.input.vpc?.vpcRegion,
            VPCId: this.input.vpc?.vpcId,
          },
          CallerReference: this.input.callerReference,
          HostedZoneConfig: {
            Comment: this.input.hostedZoneConfig?.comment,
            PrivateZone: this.input.hostedZoneConfig?.privateZone,
          },
          DelegationSetId: this.input.delegationSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateHostedZone.DelegationSet.NameServers', props);
    return resource.getResponseField('DelegationSet.NameServers') as unknown as string[];
  }

}

export class Route53CreateHostedZoneVpc extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53CreateHostedZoneRequest) {
    super(scope, id);
  }

  public get vpcRegion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createHostedZone',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateHostedZone.VPC.VPCRegion'),
        outputPath: 'VPC.VPCRegion',
        parameters: {
          Name: this.input.name,
          VPC: {
            VPCRegion: this.input.vpc?.vpcRegion,
            VPCId: this.input.vpc?.vpcId,
          },
          CallerReference: this.input.callerReference,
          HostedZoneConfig: {
            Comment: this.input.hostedZoneConfig?.comment,
            PrivateZone: this.input.hostedZoneConfig?.privateZone,
          },
          DelegationSetId: this.input.delegationSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateHostedZone.VPC.VPCRegion', props);
    return resource.getResponseField('VPC.VPCRegion') as unknown as string;
  }

  public get vpcId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createHostedZone',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateHostedZone.VPC.VPCId'),
        outputPath: 'VPC.VPCId',
        parameters: {
          Name: this.input.name,
          VPC: {
            VPCRegion: this.input.vpc?.vpcRegion,
            VPCId: this.input.vpc?.vpcId,
          },
          CallerReference: this.input.callerReference,
          HostedZoneConfig: {
            Comment: this.input.hostedZoneConfig?.comment,
            PrivateZone: this.input.hostedZoneConfig?.privateZone,
          },
          DelegationSetId: this.input.delegationSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateHostedZone.VPC.VPCId', props);
    return resource.getResponseField('VPC.VPCId') as unknown as string;
  }

}

export class Route53CreateQueryLoggingConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53CreateQueryLoggingConfigRequest) {
    super(scope, id);
  }

  public get queryLoggingConfig(): Route53CreateQueryLoggingConfigQueryLoggingConfig {
    return new Route53CreateQueryLoggingConfigQueryLoggingConfig(this, 'QueryLoggingConfig', this.__resources, this.input);
  }

  public get location(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createQueryLoggingConfig',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateQueryLoggingConfig.Location'),
        outputPath: 'Location',
        parameters: {
          HostedZoneId: this.input.hostedZoneId,
          CloudWatchLogsLogGroupArn: this.input.cloudWatchLogsLogGroupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateQueryLoggingConfig.Location', props);
    return resource.getResponseField('Location') as unknown as string;
  }

}

export class Route53CreateQueryLoggingConfigQueryLoggingConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53CreateQueryLoggingConfigRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createQueryLoggingConfig',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateQueryLoggingConfig.QueryLoggingConfig.Id'),
        outputPath: 'QueryLoggingConfig.Id',
        parameters: {
          HostedZoneId: this.input.hostedZoneId,
          CloudWatchLogsLogGroupArn: this.input.cloudWatchLogsLogGroupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateQueryLoggingConfig.QueryLoggingConfig.Id', props);
    return resource.getResponseField('QueryLoggingConfig.Id') as unknown as string;
  }

  public get hostedZoneId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createQueryLoggingConfig',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateQueryLoggingConfig.QueryLoggingConfig.HostedZoneId'),
        outputPath: 'QueryLoggingConfig.HostedZoneId',
        parameters: {
          HostedZoneId: this.input.hostedZoneId,
          CloudWatchLogsLogGroupArn: this.input.cloudWatchLogsLogGroupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateQueryLoggingConfig.QueryLoggingConfig.HostedZoneId', props);
    return resource.getResponseField('QueryLoggingConfig.HostedZoneId') as unknown as string;
  }

  public get cloudWatchLogsLogGroupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createQueryLoggingConfig',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateQueryLoggingConfig.QueryLoggingConfig.CloudWatchLogsLogGroupArn'),
        outputPath: 'QueryLoggingConfig.CloudWatchLogsLogGroupArn',
        parameters: {
          HostedZoneId: this.input.hostedZoneId,
          CloudWatchLogsLogGroupArn: this.input.cloudWatchLogsLogGroupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateQueryLoggingConfig.QueryLoggingConfig.CloudWatchLogsLogGroupArn', props);
    return resource.getResponseField('QueryLoggingConfig.CloudWatchLogsLogGroupArn') as unknown as string;
  }

}

export class Route53CreateReusableDelegationSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53CreateReusableDelegationSetRequest) {
    super(scope, id);
  }

  public get delegationSet(): Route53CreateReusableDelegationSetDelegationSet {
    return new Route53CreateReusableDelegationSetDelegationSet(this, 'DelegationSet', this.__resources, this.input);
  }

  public get location(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createReusableDelegationSet',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateReusableDelegationSet.Location'),
        outputPath: 'Location',
        parameters: {
          CallerReference: this.input.callerReference,
          HostedZoneId: this.input.hostedZoneId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateReusableDelegationSet.Location', props);
    return resource.getResponseField('Location') as unknown as string;
  }

}

export class Route53CreateReusableDelegationSetDelegationSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53CreateReusableDelegationSetRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createReusableDelegationSet',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateReusableDelegationSet.DelegationSet.Id'),
        outputPath: 'DelegationSet.Id',
        parameters: {
          CallerReference: this.input.callerReference,
          HostedZoneId: this.input.hostedZoneId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateReusableDelegationSet.DelegationSet.Id', props);
    return resource.getResponseField('DelegationSet.Id') as unknown as string;
  }

  public get callerReference(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createReusableDelegationSet',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateReusableDelegationSet.DelegationSet.CallerReference'),
        outputPath: 'DelegationSet.CallerReference',
        parameters: {
          CallerReference: this.input.callerReference,
          HostedZoneId: this.input.hostedZoneId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateReusableDelegationSet.DelegationSet.CallerReference', props);
    return resource.getResponseField('DelegationSet.CallerReference') as unknown as string;
  }

  public get nameServers(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createReusableDelegationSet',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateReusableDelegationSet.DelegationSet.NameServers'),
        outputPath: 'DelegationSet.NameServers',
        parameters: {
          CallerReference: this.input.callerReference,
          HostedZoneId: this.input.hostedZoneId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateReusableDelegationSet.DelegationSet.NameServers', props);
    return resource.getResponseField('DelegationSet.NameServers') as unknown as string[];
  }

}

export class Route53CreateTrafficPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53CreateTrafficPolicyRequest) {
    super(scope, id);
  }

  public get trafficPolicy(): Route53CreateTrafficPolicyTrafficPolicy {
    return new Route53CreateTrafficPolicyTrafficPolicy(this, 'TrafficPolicy', this.__resources, this.input);
  }

  public get location(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTrafficPolicy',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateTrafficPolicy.Location'),
        outputPath: 'Location',
        parameters: {
          Name: this.input.name,
          Document: this.input.document,
          Comment: this.input.comment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTrafficPolicy.Location', props);
    return resource.getResponseField('Location') as unknown as string;
  }

}

export class Route53CreateTrafficPolicyTrafficPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53CreateTrafficPolicyRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTrafficPolicy',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateTrafficPolicy.TrafficPolicy.Id'),
        outputPath: 'TrafficPolicy.Id',
        parameters: {
          Name: this.input.name,
          Document: this.input.document,
          Comment: this.input.comment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTrafficPolicy.TrafficPolicy.Id', props);
    return resource.getResponseField('TrafficPolicy.Id') as unknown as string;
  }

  public get version(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTrafficPolicy',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateTrafficPolicy.TrafficPolicy.Version'),
        outputPath: 'TrafficPolicy.Version',
        parameters: {
          Name: this.input.name,
          Document: this.input.document,
          Comment: this.input.comment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTrafficPolicy.TrafficPolicy.Version', props);
    return resource.getResponseField('TrafficPolicy.Version') as unknown as number;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTrafficPolicy',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateTrafficPolicy.TrafficPolicy.Name'),
        outputPath: 'TrafficPolicy.Name',
        parameters: {
          Name: this.input.name,
          Document: this.input.document,
          Comment: this.input.comment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTrafficPolicy.TrafficPolicy.Name', props);
    return resource.getResponseField('TrafficPolicy.Name') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTrafficPolicy',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateTrafficPolicy.TrafficPolicy.Type'),
        outputPath: 'TrafficPolicy.Type',
        parameters: {
          Name: this.input.name,
          Document: this.input.document,
          Comment: this.input.comment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTrafficPolicy.TrafficPolicy.Type', props);
    return resource.getResponseField('TrafficPolicy.Type') as unknown as string;
  }

  public get document(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTrafficPolicy',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateTrafficPolicy.TrafficPolicy.Document'),
        outputPath: 'TrafficPolicy.Document',
        parameters: {
          Name: this.input.name,
          Document: this.input.document,
          Comment: this.input.comment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTrafficPolicy.TrafficPolicy.Document', props);
    return resource.getResponseField('TrafficPolicy.Document') as unknown as string;
  }

  public get comment(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTrafficPolicy',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateTrafficPolicy.TrafficPolicy.Comment'),
        outputPath: 'TrafficPolicy.Comment',
        parameters: {
          Name: this.input.name,
          Document: this.input.document,
          Comment: this.input.comment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTrafficPolicy.TrafficPolicy.Comment', props);
    return resource.getResponseField('TrafficPolicy.Comment') as unknown as string;
  }

}

export class Route53CreateTrafficPolicyInstance extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53CreateTrafficPolicyInstanceRequest) {
    super(scope, id);
  }

  public get trafficPolicyInstance(): Route53CreateTrafficPolicyInstanceTrafficPolicyInstance {
    return new Route53CreateTrafficPolicyInstanceTrafficPolicyInstance(this, 'TrafficPolicyInstance', this.__resources, this.input);
  }

  public get location(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTrafficPolicyInstance',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateTrafficPolicyInstance.Location'),
        outputPath: 'Location',
        parameters: {
          HostedZoneId: this.input.hostedZoneId,
          Name: this.input.name,
          TTL: this.input.ttl,
          TrafficPolicyId: this.input.trafficPolicyId,
          TrafficPolicyVersion: this.input.trafficPolicyVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTrafficPolicyInstance.Location', props);
    return resource.getResponseField('Location') as unknown as string;
  }

}

export class Route53CreateTrafficPolicyInstanceTrafficPolicyInstance extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53CreateTrafficPolicyInstanceRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTrafficPolicyInstance',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateTrafficPolicyInstance.TrafficPolicyInstance.Id'),
        outputPath: 'TrafficPolicyInstance.Id',
        parameters: {
          HostedZoneId: this.input.hostedZoneId,
          Name: this.input.name,
          TTL: this.input.ttl,
          TrafficPolicyId: this.input.trafficPolicyId,
          TrafficPolicyVersion: this.input.trafficPolicyVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTrafficPolicyInstance.TrafficPolicyInstance.Id', props);
    return resource.getResponseField('TrafficPolicyInstance.Id') as unknown as string;
  }

  public get hostedZoneId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTrafficPolicyInstance',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateTrafficPolicyInstance.TrafficPolicyInstance.HostedZoneId'),
        outputPath: 'TrafficPolicyInstance.HostedZoneId',
        parameters: {
          HostedZoneId: this.input.hostedZoneId,
          Name: this.input.name,
          TTL: this.input.ttl,
          TrafficPolicyId: this.input.trafficPolicyId,
          TrafficPolicyVersion: this.input.trafficPolicyVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTrafficPolicyInstance.TrafficPolicyInstance.HostedZoneId', props);
    return resource.getResponseField('TrafficPolicyInstance.HostedZoneId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTrafficPolicyInstance',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateTrafficPolicyInstance.TrafficPolicyInstance.Name'),
        outputPath: 'TrafficPolicyInstance.Name',
        parameters: {
          HostedZoneId: this.input.hostedZoneId,
          Name: this.input.name,
          TTL: this.input.ttl,
          TrafficPolicyId: this.input.trafficPolicyId,
          TrafficPolicyVersion: this.input.trafficPolicyVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTrafficPolicyInstance.TrafficPolicyInstance.Name', props);
    return resource.getResponseField('TrafficPolicyInstance.Name') as unknown as string;
  }

  public get ttl(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTrafficPolicyInstance',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateTrafficPolicyInstance.TrafficPolicyInstance.TTL'),
        outputPath: 'TrafficPolicyInstance.TTL',
        parameters: {
          HostedZoneId: this.input.hostedZoneId,
          Name: this.input.name,
          TTL: this.input.ttl,
          TrafficPolicyId: this.input.trafficPolicyId,
          TrafficPolicyVersion: this.input.trafficPolicyVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTrafficPolicyInstance.TrafficPolicyInstance.TTL', props);
    return resource.getResponseField('TrafficPolicyInstance.TTL') as unknown as number;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTrafficPolicyInstance',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateTrafficPolicyInstance.TrafficPolicyInstance.State'),
        outputPath: 'TrafficPolicyInstance.State',
        parameters: {
          HostedZoneId: this.input.hostedZoneId,
          Name: this.input.name,
          TTL: this.input.ttl,
          TrafficPolicyId: this.input.trafficPolicyId,
          TrafficPolicyVersion: this.input.trafficPolicyVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTrafficPolicyInstance.TrafficPolicyInstance.State', props);
    return resource.getResponseField('TrafficPolicyInstance.State') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTrafficPolicyInstance',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateTrafficPolicyInstance.TrafficPolicyInstance.Message'),
        outputPath: 'TrafficPolicyInstance.Message',
        parameters: {
          HostedZoneId: this.input.hostedZoneId,
          Name: this.input.name,
          TTL: this.input.ttl,
          TrafficPolicyId: this.input.trafficPolicyId,
          TrafficPolicyVersion: this.input.trafficPolicyVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTrafficPolicyInstance.TrafficPolicyInstance.Message', props);
    return resource.getResponseField('TrafficPolicyInstance.Message') as unknown as string;
  }

  public get trafficPolicyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTrafficPolicyInstance',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateTrafficPolicyInstance.TrafficPolicyInstance.TrafficPolicyId'),
        outputPath: 'TrafficPolicyInstance.TrafficPolicyId',
        parameters: {
          HostedZoneId: this.input.hostedZoneId,
          Name: this.input.name,
          TTL: this.input.ttl,
          TrafficPolicyId: this.input.trafficPolicyId,
          TrafficPolicyVersion: this.input.trafficPolicyVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTrafficPolicyInstance.TrafficPolicyInstance.TrafficPolicyId', props);
    return resource.getResponseField('TrafficPolicyInstance.TrafficPolicyId') as unknown as string;
  }

  public get trafficPolicyVersion(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTrafficPolicyInstance',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateTrafficPolicyInstance.TrafficPolicyInstance.TrafficPolicyVersion'),
        outputPath: 'TrafficPolicyInstance.TrafficPolicyVersion',
        parameters: {
          HostedZoneId: this.input.hostedZoneId,
          Name: this.input.name,
          TTL: this.input.ttl,
          TrafficPolicyId: this.input.trafficPolicyId,
          TrafficPolicyVersion: this.input.trafficPolicyVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTrafficPolicyInstance.TrafficPolicyInstance.TrafficPolicyVersion', props);
    return resource.getResponseField('TrafficPolicyInstance.TrafficPolicyVersion') as unknown as number;
  }

  public get trafficPolicyType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTrafficPolicyInstance',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateTrafficPolicyInstance.TrafficPolicyInstance.TrafficPolicyType'),
        outputPath: 'TrafficPolicyInstance.TrafficPolicyType',
        parameters: {
          HostedZoneId: this.input.hostedZoneId,
          Name: this.input.name,
          TTL: this.input.ttl,
          TrafficPolicyId: this.input.trafficPolicyId,
          TrafficPolicyVersion: this.input.trafficPolicyVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTrafficPolicyInstance.TrafficPolicyInstance.TrafficPolicyType', props);
    return resource.getResponseField('TrafficPolicyInstance.TrafficPolicyType') as unknown as string;
  }

}

export class Route53CreateTrafficPolicyVersion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53CreateTrafficPolicyVersionRequest) {
    super(scope, id);
  }

  public get trafficPolicy(): Route53CreateTrafficPolicyVersionTrafficPolicy {
    return new Route53CreateTrafficPolicyVersionTrafficPolicy(this, 'TrafficPolicy', this.__resources, this.input);
  }

  public get location(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTrafficPolicyVersion',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateTrafficPolicyVersion.Location'),
        outputPath: 'Location',
        parameters: {
          Id: this.input.id,
          Document: this.input.document,
          Comment: this.input.comment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTrafficPolicyVersion.Location', props);
    return resource.getResponseField('Location') as unknown as string;
  }

}

export class Route53CreateTrafficPolicyVersionTrafficPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53CreateTrafficPolicyVersionRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTrafficPolicyVersion',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateTrafficPolicyVersion.TrafficPolicy.Id'),
        outputPath: 'TrafficPolicy.Id',
        parameters: {
          Id: this.input.id,
          Document: this.input.document,
          Comment: this.input.comment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTrafficPolicyVersion.TrafficPolicy.Id', props);
    return resource.getResponseField('TrafficPolicy.Id') as unknown as string;
  }

  public get version(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTrafficPolicyVersion',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateTrafficPolicyVersion.TrafficPolicy.Version'),
        outputPath: 'TrafficPolicy.Version',
        parameters: {
          Id: this.input.id,
          Document: this.input.document,
          Comment: this.input.comment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTrafficPolicyVersion.TrafficPolicy.Version', props);
    return resource.getResponseField('TrafficPolicy.Version') as unknown as number;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTrafficPolicyVersion',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateTrafficPolicyVersion.TrafficPolicy.Name'),
        outputPath: 'TrafficPolicy.Name',
        parameters: {
          Id: this.input.id,
          Document: this.input.document,
          Comment: this.input.comment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTrafficPolicyVersion.TrafficPolicy.Name', props);
    return resource.getResponseField('TrafficPolicy.Name') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTrafficPolicyVersion',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateTrafficPolicyVersion.TrafficPolicy.Type'),
        outputPath: 'TrafficPolicy.Type',
        parameters: {
          Id: this.input.id,
          Document: this.input.document,
          Comment: this.input.comment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTrafficPolicyVersion.TrafficPolicy.Type', props);
    return resource.getResponseField('TrafficPolicy.Type') as unknown as string;
  }

  public get document(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTrafficPolicyVersion',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateTrafficPolicyVersion.TrafficPolicy.Document'),
        outputPath: 'TrafficPolicy.Document',
        parameters: {
          Id: this.input.id,
          Document: this.input.document,
          Comment: this.input.comment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTrafficPolicyVersion.TrafficPolicy.Document', props);
    return resource.getResponseField('TrafficPolicy.Document') as unknown as string;
  }

  public get comment(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTrafficPolicyVersion',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateTrafficPolicyVersion.TrafficPolicy.Comment'),
        outputPath: 'TrafficPolicy.Comment',
        parameters: {
          Id: this.input.id,
          Document: this.input.document,
          Comment: this.input.comment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTrafficPolicyVersion.TrafficPolicy.Comment', props);
    return resource.getResponseField('TrafficPolicy.Comment') as unknown as string;
  }

}

export class Route53CreateVpcAssociationAuthorization extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53CreateVpcAssociationAuthorizationRequest) {
    super(scope, id);
  }

  public get hostedZoneId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createVpcAssociationAuthorization',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateVPCAssociationAuthorization.HostedZoneId'),
        outputPath: 'HostedZoneId',
        parameters: {
          HostedZoneId: this.input.hostedZoneId,
          VPC: {
            VPCRegion: this.input.vpc.vpcRegion,
            VPCId: this.input.vpc.vpcId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateVPCAssociationAuthorization.HostedZoneId', props);
    return resource.getResponseField('HostedZoneId') as unknown as string;
  }

  public get vpc(): Route53CreateVpcAssociationAuthorizationVpc {
    return new Route53CreateVpcAssociationAuthorizationVpc(this, 'Vpc', this.__resources, this.input);
  }

}

export class Route53CreateVpcAssociationAuthorizationVpc extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53CreateVpcAssociationAuthorizationRequest) {
    super(scope, id);
  }

  public get vpcRegion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createVpcAssociationAuthorization',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateVPCAssociationAuthorization.VPC.VPCRegion'),
        outputPath: 'VPC.VPCRegion',
        parameters: {
          HostedZoneId: this.input.hostedZoneId,
          VPC: {
            VPCRegion: this.input.vpc.vpcRegion,
            VPCId: this.input.vpc.vpcId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateVPCAssociationAuthorization.VPC.VPCRegion', props);
    return resource.getResponseField('VPC.VPCRegion') as unknown as string;
  }

  public get vpcId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createVpcAssociationAuthorization',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.CreateVPCAssociationAuthorization.VPC.VPCId'),
        outputPath: 'VPC.VPCId',
        parameters: {
          HostedZoneId: this.input.hostedZoneId,
          VPC: {
            VPCRegion: this.input.vpc.vpcRegion,
            VPCId: this.input.vpc.vpcId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateVPCAssociationAuthorization.VPC.VPCId', props);
    return resource.getResponseField('VPC.VPCId') as unknown as string;
  }

}

export class Route53DeleteHostedZone extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53DeleteHostedZoneRequest) {
    super(scope, id);
  }

  public get changeInfo(): Route53DeleteHostedZoneChangeInfo {
    return new Route53DeleteHostedZoneChangeInfo(this, 'ChangeInfo', this.__resources, this.input);
  }

}

export class Route53DeleteHostedZoneChangeInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53DeleteHostedZoneRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteHostedZone',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.DeleteHostedZone.ChangeInfo.Id'),
        outputPath: 'ChangeInfo.Id',
        parameters: {
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteHostedZone.ChangeInfo.Id', props);
    return resource.getResponseField('ChangeInfo.Id') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteHostedZone',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.DeleteHostedZone.ChangeInfo.Status'),
        outputPath: 'ChangeInfo.Status',
        parameters: {
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteHostedZone.ChangeInfo.Status', props);
    return resource.getResponseField('ChangeInfo.Status') as unknown as string;
  }

  public get submittedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteHostedZone',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.DeleteHostedZone.ChangeInfo.SubmittedAt'),
        outputPath: 'ChangeInfo.SubmittedAt',
        parameters: {
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteHostedZone.ChangeInfo.SubmittedAt', props);
    return resource.getResponseField('ChangeInfo.SubmittedAt') as unknown as string;
  }

  public get comment(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteHostedZone',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.DeleteHostedZone.ChangeInfo.Comment'),
        outputPath: 'ChangeInfo.Comment',
        parameters: {
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteHostedZone.ChangeInfo.Comment', props);
    return resource.getResponseField('ChangeInfo.Comment') as unknown as string;
  }

}

export class Route53DisassociateVpcFromHostedZone extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53DisassociateVpcFromHostedZoneRequest) {
    super(scope, id);
  }

  public get changeInfo(): Route53DisassociateVpcFromHostedZoneChangeInfo {
    return new Route53DisassociateVpcFromHostedZoneChangeInfo(this, 'ChangeInfo', this.__resources, this.input);
  }

}

export class Route53DisassociateVpcFromHostedZoneChangeInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53DisassociateVpcFromHostedZoneRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateVpcFromHostedZone',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.DisassociateVPCFromHostedZone.ChangeInfo.Id'),
        outputPath: 'ChangeInfo.Id',
        parameters: {
          HostedZoneId: this.input.hostedZoneId,
          VPC: {
            VPCRegion: this.input.vpc.vpcRegion,
            VPCId: this.input.vpc.vpcId,
          },
          Comment: this.input.comment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateVPCFromHostedZone.ChangeInfo.Id', props);
    return resource.getResponseField('ChangeInfo.Id') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateVpcFromHostedZone',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.DisassociateVPCFromHostedZone.ChangeInfo.Status'),
        outputPath: 'ChangeInfo.Status',
        parameters: {
          HostedZoneId: this.input.hostedZoneId,
          VPC: {
            VPCRegion: this.input.vpc.vpcRegion,
            VPCId: this.input.vpc.vpcId,
          },
          Comment: this.input.comment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateVPCFromHostedZone.ChangeInfo.Status', props);
    return resource.getResponseField('ChangeInfo.Status') as unknown as string;
  }

  public get submittedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateVpcFromHostedZone',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.DisassociateVPCFromHostedZone.ChangeInfo.SubmittedAt'),
        outputPath: 'ChangeInfo.SubmittedAt',
        parameters: {
          HostedZoneId: this.input.hostedZoneId,
          VPC: {
            VPCRegion: this.input.vpc.vpcRegion,
            VPCId: this.input.vpc.vpcId,
          },
          Comment: this.input.comment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateVPCFromHostedZone.ChangeInfo.SubmittedAt', props);
    return resource.getResponseField('ChangeInfo.SubmittedAt') as unknown as string;
  }

  public get comment(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateVpcFromHostedZone',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.DisassociateVPCFromHostedZone.ChangeInfo.Comment'),
        outputPath: 'ChangeInfo.Comment',
        parameters: {
          HostedZoneId: this.input.hostedZoneId,
          VPC: {
            VPCRegion: this.input.vpc.vpcRegion,
            VPCId: this.input.vpc.vpcId,
          },
          Comment: this.input.comment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateVPCFromHostedZone.ChangeInfo.Comment', props);
    return resource.getResponseField('ChangeInfo.Comment') as unknown as string;
  }

}

export class Route53FetchAccountLimit extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53GetAccountLimitRequest) {
    super(scope, id);
  }

  public get limit(): Route53FetchAccountLimitLimit {
    return new Route53FetchAccountLimitLimit(this, 'Limit', this.__resources, this.input);
  }

  public get count(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccountLimit',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetAccountLimit.Count'),
        outputPath: 'Count',
        parameters: {
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAccountLimit.Count', props);
    return resource.getResponseField('Count') as unknown as number;
  }

}

export class Route53FetchAccountLimitLimit extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53GetAccountLimitRequest) {
    super(scope, id);
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccountLimit',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetAccountLimit.Limit.Type'),
        outputPath: 'Limit.Type',
        parameters: {
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAccountLimit.Limit.Type', props);
    return resource.getResponseField('Limit.Type') as unknown as string;
  }

  public get value(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccountLimit',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetAccountLimit.Limit.Value'),
        outputPath: 'Limit.Value',
        parameters: {
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAccountLimit.Limit.Value', props);
    return resource.getResponseField('Limit.Value') as unknown as number;
  }

}

export class Route53FetchChange extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53GetChangeRequest) {
    super(scope, id);
  }

  public get changeInfo(): Route53FetchChangeChangeInfo {
    return new Route53FetchChangeChangeInfo(this, 'ChangeInfo', this.__resources, this.input);
  }

}

export class Route53FetchChangeChangeInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53GetChangeRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getChange',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetChange.ChangeInfo.Id'),
        outputPath: 'ChangeInfo.Id',
        parameters: {
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetChange.ChangeInfo.Id', props);
    return resource.getResponseField('ChangeInfo.Id') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getChange',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetChange.ChangeInfo.Status'),
        outputPath: 'ChangeInfo.Status',
        parameters: {
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetChange.ChangeInfo.Status', props);
    return resource.getResponseField('ChangeInfo.Status') as unknown as string;
  }

  public get submittedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getChange',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetChange.ChangeInfo.SubmittedAt'),
        outputPath: 'ChangeInfo.SubmittedAt',
        parameters: {
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetChange.ChangeInfo.SubmittedAt', props);
    return resource.getResponseField('ChangeInfo.SubmittedAt') as unknown as string;
  }

  public get comment(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getChange',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetChange.ChangeInfo.Comment'),
        outputPath: 'ChangeInfo.Comment',
        parameters: {
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetChange.ChangeInfo.Comment', props);
    return resource.getResponseField('ChangeInfo.Comment') as unknown as string;
  }

}

export class Route53FetchCheckerIpRanges extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get checkerIpRanges(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCheckerIpRanges',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetCheckerIpRanges.CheckerIpRanges'),
        outputPath: 'CheckerIpRanges',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCheckerIpRanges.CheckerIpRanges', props);
    return resource.getResponseField('CheckerIpRanges') as unknown as string[];
  }

}

export class Route53FetchGeoLocation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53GetGeoLocationRequest) {
    super(scope, id);
  }

  public get geoLocationDetails(): Route53FetchGeoLocationGeoLocationDetails {
    return new Route53FetchGeoLocationGeoLocationDetails(this, 'GeoLocationDetails', this.__resources, this.input);
  }

}

export class Route53FetchGeoLocationGeoLocationDetails extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53GetGeoLocationRequest) {
    super(scope, id);
  }

  public get continentCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGeoLocation',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetGeoLocation.GeoLocationDetails.ContinentCode'),
        outputPath: 'GeoLocationDetails.ContinentCode',
        parameters: {
          ContinentCode: this.input.continentCode,
          CountryCode: this.input.countryCode,
          SubdivisionCode: this.input.subdivisionCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGeoLocation.GeoLocationDetails.ContinentCode', props);
    return resource.getResponseField('GeoLocationDetails.ContinentCode') as unknown as string;
  }

  public get continentName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGeoLocation',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetGeoLocation.GeoLocationDetails.ContinentName'),
        outputPath: 'GeoLocationDetails.ContinentName',
        parameters: {
          ContinentCode: this.input.continentCode,
          CountryCode: this.input.countryCode,
          SubdivisionCode: this.input.subdivisionCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGeoLocation.GeoLocationDetails.ContinentName', props);
    return resource.getResponseField('GeoLocationDetails.ContinentName') as unknown as string;
  }

  public get countryCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGeoLocation',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetGeoLocation.GeoLocationDetails.CountryCode'),
        outputPath: 'GeoLocationDetails.CountryCode',
        parameters: {
          ContinentCode: this.input.continentCode,
          CountryCode: this.input.countryCode,
          SubdivisionCode: this.input.subdivisionCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGeoLocation.GeoLocationDetails.CountryCode', props);
    return resource.getResponseField('GeoLocationDetails.CountryCode') as unknown as string;
  }

  public get countryName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGeoLocation',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetGeoLocation.GeoLocationDetails.CountryName'),
        outputPath: 'GeoLocationDetails.CountryName',
        parameters: {
          ContinentCode: this.input.continentCode,
          CountryCode: this.input.countryCode,
          SubdivisionCode: this.input.subdivisionCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGeoLocation.GeoLocationDetails.CountryName', props);
    return resource.getResponseField('GeoLocationDetails.CountryName') as unknown as string;
  }

  public get subdivisionCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGeoLocation',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetGeoLocation.GeoLocationDetails.SubdivisionCode'),
        outputPath: 'GeoLocationDetails.SubdivisionCode',
        parameters: {
          ContinentCode: this.input.continentCode,
          CountryCode: this.input.countryCode,
          SubdivisionCode: this.input.subdivisionCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGeoLocation.GeoLocationDetails.SubdivisionCode', props);
    return resource.getResponseField('GeoLocationDetails.SubdivisionCode') as unknown as string;
  }

  public get subdivisionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGeoLocation',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetGeoLocation.GeoLocationDetails.SubdivisionName'),
        outputPath: 'GeoLocationDetails.SubdivisionName',
        parameters: {
          ContinentCode: this.input.continentCode,
          CountryCode: this.input.countryCode,
          SubdivisionCode: this.input.subdivisionCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGeoLocation.GeoLocationDetails.SubdivisionName', props);
    return resource.getResponseField('GeoLocationDetails.SubdivisionName') as unknown as string;
  }

}

export class Route53FetchHealthCheck extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53GetHealthCheckRequest) {
    super(scope, id);
  }

  public get healthCheck(): Route53FetchHealthCheckHealthCheck {
    return new Route53FetchHealthCheckHealthCheck(this, 'HealthCheck', this.__resources, this.input);
  }

}

export class Route53FetchHealthCheckHealthCheck extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53GetHealthCheckRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetHealthCheck.HealthCheck.Id'),
        outputPath: 'HealthCheck.Id',
        parameters: {
          HealthCheckId: this.input.healthCheckId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetHealthCheck.HealthCheck.Id', props);
    return resource.getResponseField('HealthCheck.Id') as unknown as string;
  }

  public get callerReference(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetHealthCheck.HealthCheck.CallerReference'),
        outputPath: 'HealthCheck.CallerReference',
        parameters: {
          HealthCheckId: this.input.healthCheckId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetHealthCheck.HealthCheck.CallerReference', props);
    return resource.getResponseField('HealthCheck.CallerReference') as unknown as string;
  }

  public get linkedService(): Route53FetchHealthCheckHealthCheckLinkedService {
    return new Route53FetchHealthCheckHealthCheckLinkedService(this, 'LinkedService', this.__resources, this.input);
  }

  public get healthCheckConfig(): Route53FetchHealthCheckHealthCheckHealthCheckConfig {
    return new Route53FetchHealthCheckHealthCheckHealthCheckConfig(this, 'HealthCheckConfig', this.__resources, this.input);
  }

  public get healthCheckVersion(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetHealthCheck.HealthCheck.HealthCheckVersion'),
        outputPath: 'HealthCheck.HealthCheckVersion',
        parameters: {
          HealthCheckId: this.input.healthCheckId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetHealthCheck.HealthCheck.HealthCheckVersion', props);
    return resource.getResponseField('HealthCheck.HealthCheckVersion') as unknown as number;
  }

  public get cloudWatchAlarmConfiguration(): Route53FetchHealthCheckHealthCheckCloudWatchAlarmConfiguration {
    return new Route53FetchHealthCheckHealthCheckCloudWatchAlarmConfiguration(this, 'CloudWatchAlarmConfiguration', this.__resources, this.input);
  }

}

export class Route53FetchHealthCheckHealthCheckLinkedService extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53GetHealthCheckRequest) {
    super(scope, id);
  }

  public get servicePrincipal(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetHealthCheck.HealthCheck.LinkedService.ServicePrincipal'),
        outputPath: 'HealthCheck.LinkedService.ServicePrincipal',
        parameters: {
          HealthCheckId: this.input.healthCheckId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetHealthCheck.HealthCheck.LinkedService.ServicePrincipal', props);
    return resource.getResponseField('HealthCheck.LinkedService.ServicePrincipal') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetHealthCheck.HealthCheck.LinkedService.Description'),
        outputPath: 'HealthCheck.LinkedService.Description',
        parameters: {
          HealthCheckId: this.input.healthCheckId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetHealthCheck.HealthCheck.LinkedService.Description', props);
    return resource.getResponseField('HealthCheck.LinkedService.Description') as unknown as string;
  }

}

export class Route53FetchHealthCheckHealthCheckHealthCheckConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53GetHealthCheckRequest) {
    super(scope, id);
  }

  public get ipAddress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetHealthCheck.HealthCheck.HealthCheckConfig.IPAddress'),
        outputPath: 'HealthCheck.HealthCheckConfig.IPAddress',
        parameters: {
          HealthCheckId: this.input.healthCheckId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetHealthCheck.HealthCheck.HealthCheckConfig.IPAddress', props);
    return resource.getResponseField('HealthCheck.HealthCheckConfig.IPAddress') as unknown as string;
  }

  public get port(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetHealthCheck.HealthCheck.HealthCheckConfig.Port'),
        outputPath: 'HealthCheck.HealthCheckConfig.Port',
        parameters: {
          HealthCheckId: this.input.healthCheckId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetHealthCheck.HealthCheck.HealthCheckConfig.Port', props);
    return resource.getResponseField('HealthCheck.HealthCheckConfig.Port') as unknown as number;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetHealthCheck.HealthCheck.HealthCheckConfig.Type'),
        outputPath: 'HealthCheck.HealthCheckConfig.Type',
        parameters: {
          HealthCheckId: this.input.healthCheckId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetHealthCheck.HealthCheck.HealthCheckConfig.Type', props);
    return resource.getResponseField('HealthCheck.HealthCheckConfig.Type') as unknown as string;
  }

  public get resourcePath(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetHealthCheck.HealthCheck.HealthCheckConfig.ResourcePath'),
        outputPath: 'HealthCheck.HealthCheckConfig.ResourcePath',
        parameters: {
          HealthCheckId: this.input.healthCheckId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetHealthCheck.HealthCheck.HealthCheckConfig.ResourcePath', props);
    return resource.getResponseField('HealthCheck.HealthCheckConfig.ResourcePath') as unknown as string;
  }

  public get fullyQualifiedDomainName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetHealthCheck.HealthCheck.HealthCheckConfig.FullyQualifiedDomainName'),
        outputPath: 'HealthCheck.HealthCheckConfig.FullyQualifiedDomainName',
        parameters: {
          HealthCheckId: this.input.healthCheckId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetHealthCheck.HealthCheck.HealthCheckConfig.FullyQualifiedDomainName', props);
    return resource.getResponseField('HealthCheck.HealthCheckConfig.FullyQualifiedDomainName') as unknown as string;
  }

  public get searchString(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetHealthCheck.HealthCheck.HealthCheckConfig.SearchString'),
        outputPath: 'HealthCheck.HealthCheckConfig.SearchString',
        parameters: {
          HealthCheckId: this.input.healthCheckId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetHealthCheck.HealthCheck.HealthCheckConfig.SearchString', props);
    return resource.getResponseField('HealthCheck.HealthCheckConfig.SearchString') as unknown as string;
  }

  public get requestInterval(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetHealthCheck.HealthCheck.HealthCheckConfig.RequestInterval'),
        outputPath: 'HealthCheck.HealthCheckConfig.RequestInterval',
        parameters: {
          HealthCheckId: this.input.healthCheckId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetHealthCheck.HealthCheck.HealthCheckConfig.RequestInterval', props);
    return resource.getResponseField('HealthCheck.HealthCheckConfig.RequestInterval') as unknown as number;
  }

  public get failureThreshold(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetHealthCheck.HealthCheck.HealthCheckConfig.FailureThreshold'),
        outputPath: 'HealthCheck.HealthCheckConfig.FailureThreshold',
        parameters: {
          HealthCheckId: this.input.healthCheckId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetHealthCheck.HealthCheck.HealthCheckConfig.FailureThreshold', props);
    return resource.getResponseField('HealthCheck.HealthCheckConfig.FailureThreshold') as unknown as number;
  }

  public get measureLatency(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetHealthCheck.HealthCheck.HealthCheckConfig.MeasureLatency'),
        outputPath: 'HealthCheck.HealthCheckConfig.MeasureLatency',
        parameters: {
          HealthCheckId: this.input.healthCheckId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetHealthCheck.HealthCheck.HealthCheckConfig.MeasureLatency', props);
    return resource.getResponseField('HealthCheck.HealthCheckConfig.MeasureLatency') as unknown as boolean;
  }

  public get inverted(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetHealthCheck.HealthCheck.HealthCheckConfig.Inverted'),
        outputPath: 'HealthCheck.HealthCheckConfig.Inverted',
        parameters: {
          HealthCheckId: this.input.healthCheckId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetHealthCheck.HealthCheck.HealthCheckConfig.Inverted', props);
    return resource.getResponseField('HealthCheck.HealthCheckConfig.Inverted') as unknown as boolean;
  }

  public get disabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetHealthCheck.HealthCheck.HealthCheckConfig.Disabled'),
        outputPath: 'HealthCheck.HealthCheckConfig.Disabled',
        parameters: {
          HealthCheckId: this.input.healthCheckId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetHealthCheck.HealthCheck.HealthCheckConfig.Disabled', props);
    return resource.getResponseField('HealthCheck.HealthCheckConfig.Disabled') as unknown as boolean;
  }

  public get healthThreshold(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetHealthCheck.HealthCheck.HealthCheckConfig.HealthThreshold'),
        outputPath: 'HealthCheck.HealthCheckConfig.HealthThreshold',
        parameters: {
          HealthCheckId: this.input.healthCheckId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetHealthCheck.HealthCheck.HealthCheckConfig.HealthThreshold', props);
    return resource.getResponseField('HealthCheck.HealthCheckConfig.HealthThreshold') as unknown as number;
  }

  public get childHealthChecks(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetHealthCheck.HealthCheck.HealthCheckConfig.ChildHealthChecks'),
        outputPath: 'HealthCheck.HealthCheckConfig.ChildHealthChecks',
        parameters: {
          HealthCheckId: this.input.healthCheckId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetHealthCheck.HealthCheck.HealthCheckConfig.ChildHealthChecks', props);
    return resource.getResponseField('HealthCheck.HealthCheckConfig.ChildHealthChecks') as unknown as string[];
  }

  public get enableSni(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetHealthCheck.HealthCheck.HealthCheckConfig.EnableSNI'),
        outputPath: 'HealthCheck.HealthCheckConfig.EnableSNI',
        parameters: {
          HealthCheckId: this.input.healthCheckId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetHealthCheck.HealthCheck.HealthCheckConfig.EnableSNI', props);
    return resource.getResponseField('HealthCheck.HealthCheckConfig.EnableSNI') as unknown as boolean;
  }

  public get regions(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetHealthCheck.HealthCheck.HealthCheckConfig.Regions'),
        outputPath: 'HealthCheck.HealthCheckConfig.Regions',
        parameters: {
          HealthCheckId: this.input.healthCheckId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetHealthCheck.HealthCheck.HealthCheckConfig.Regions', props);
    return resource.getResponseField('HealthCheck.HealthCheckConfig.Regions') as unknown as string[];
  }

  public get alarmIdentifier(): Route53FetchHealthCheckHealthCheckHealthCheckConfigAlarmIdentifier {
    return new Route53FetchHealthCheckHealthCheckHealthCheckConfigAlarmIdentifier(this, 'AlarmIdentifier', this.__resources, this.input);
  }

  public get insufficientDataHealthStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetHealthCheck.HealthCheck.HealthCheckConfig.InsufficientDataHealthStatus'),
        outputPath: 'HealthCheck.HealthCheckConfig.InsufficientDataHealthStatus',
        parameters: {
          HealthCheckId: this.input.healthCheckId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetHealthCheck.HealthCheck.HealthCheckConfig.InsufficientDataHealthStatus', props);
    return resource.getResponseField('HealthCheck.HealthCheckConfig.InsufficientDataHealthStatus') as unknown as string;
  }

}

export class Route53FetchHealthCheckHealthCheckHealthCheckConfigAlarmIdentifier extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53GetHealthCheckRequest) {
    super(scope, id);
  }

  public get region(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetHealthCheck.HealthCheck.HealthCheckConfig.AlarmIdentifier.Region'),
        outputPath: 'HealthCheck.HealthCheckConfig.AlarmIdentifier.Region',
        parameters: {
          HealthCheckId: this.input.healthCheckId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetHealthCheck.HealthCheck.HealthCheckConfig.AlarmIdentifier.Region', props);
    return resource.getResponseField('HealthCheck.HealthCheckConfig.AlarmIdentifier.Region') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetHealthCheck.HealthCheck.HealthCheckConfig.AlarmIdentifier.Name'),
        outputPath: 'HealthCheck.HealthCheckConfig.AlarmIdentifier.Name',
        parameters: {
          HealthCheckId: this.input.healthCheckId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetHealthCheck.HealthCheck.HealthCheckConfig.AlarmIdentifier.Name', props);
    return resource.getResponseField('HealthCheck.HealthCheckConfig.AlarmIdentifier.Name') as unknown as string;
  }

}

export class Route53FetchHealthCheckHealthCheckCloudWatchAlarmConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53GetHealthCheckRequest) {
    super(scope, id);
  }

  public get evaluationPeriods(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetHealthCheck.HealthCheck.CloudWatchAlarmConfiguration.EvaluationPeriods'),
        outputPath: 'HealthCheck.CloudWatchAlarmConfiguration.EvaluationPeriods',
        parameters: {
          HealthCheckId: this.input.healthCheckId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetHealthCheck.HealthCheck.CloudWatchAlarmConfiguration.EvaluationPeriods', props);
    return resource.getResponseField('HealthCheck.CloudWatchAlarmConfiguration.EvaluationPeriods') as unknown as number;
  }

  public get threshold(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetHealthCheck.HealthCheck.CloudWatchAlarmConfiguration.Threshold'),
        outputPath: 'HealthCheck.CloudWatchAlarmConfiguration.Threshold',
        parameters: {
          HealthCheckId: this.input.healthCheckId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetHealthCheck.HealthCheck.CloudWatchAlarmConfiguration.Threshold', props);
    return resource.getResponseField('HealthCheck.CloudWatchAlarmConfiguration.Threshold') as unknown as number;
  }

  public get comparisonOperator(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetHealthCheck.HealthCheck.CloudWatchAlarmConfiguration.ComparisonOperator'),
        outputPath: 'HealthCheck.CloudWatchAlarmConfiguration.ComparisonOperator',
        parameters: {
          HealthCheckId: this.input.healthCheckId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetHealthCheck.HealthCheck.CloudWatchAlarmConfiguration.ComparisonOperator', props);
    return resource.getResponseField('HealthCheck.CloudWatchAlarmConfiguration.ComparisonOperator') as unknown as string;
  }

  public get period(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetHealthCheck.HealthCheck.CloudWatchAlarmConfiguration.Period'),
        outputPath: 'HealthCheck.CloudWatchAlarmConfiguration.Period',
        parameters: {
          HealthCheckId: this.input.healthCheckId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetHealthCheck.HealthCheck.CloudWatchAlarmConfiguration.Period', props);
    return resource.getResponseField('HealthCheck.CloudWatchAlarmConfiguration.Period') as unknown as number;
  }

  public get metricName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetHealthCheck.HealthCheck.CloudWatchAlarmConfiguration.MetricName'),
        outputPath: 'HealthCheck.CloudWatchAlarmConfiguration.MetricName',
        parameters: {
          HealthCheckId: this.input.healthCheckId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetHealthCheck.HealthCheck.CloudWatchAlarmConfiguration.MetricName', props);
    return resource.getResponseField('HealthCheck.CloudWatchAlarmConfiguration.MetricName') as unknown as string;
  }

  public get namespace(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetHealthCheck.HealthCheck.CloudWatchAlarmConfiguration.Namespace'),
        outputPath: 'HealthCheck.CloudWatchAlarmConfiguration.Namespace',
        parameters: {
          HealthCheckId: this.input.healthCheckId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetHealthCheck.HealthCheck.CloudWatchAlarmConfiguration.Namespace', props);
    return resource.getResponseField('HealthCheck.CloudWatchAlarmConfiguration.Namespace') as unknown as string;
  }

  public get statistic(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetHealthCheck.HealthCheck.CloudWatchAlarmConfiguration.Statistic'),
        outputPath: 'HealthCheck.CloudWatchAlarmConfiguration.Statistic',
        parameters: {
          HealthCheckId: this.input.healthCheckId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetHealthCheck.HealthCheck.CloudWatchAlarmConfiguration.Statistic', props);
    return resource.getResponseField('HealthCheck.CloudWatchAlarmConfiguration.Statistic') as unknown as string;
  }

  public get dimensions(): shapes.Route53Dimension[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetHealthCheck.HealthCheck.CloudWatchAlarmConfiguration.Dimensions'),
        outputPath: 'HealthCheck.CloudWatchAlarmConfiguration.Dimensions',
        parameters: {
          HealthCheckId: this.input.healthCheckId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetHealthCheck.HealthCheck.CloudWatchAlarmConfiguration.Dimensions', props);
    return resource.getResponseField('HealthCheck.CloudWatchAlarmConfiguration.Dimensions') as unknown as shapes.Route53Dimension[];
  }

}

export class Route53FetchHealthCheckCount extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get healthCheckCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getHealthCheckCount',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetHealthCheckCount.HealthCheckCount'),
        outputPath: 'HealthCheckCount',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetHealthCheckCount.HealthCheckCount', props);
    return resource.getResponseField('HealthCheckCount') as unknown as number;
  }

}

export class Route53FetchHealthCheckLastFailureReason extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53GetHealthCheckLastFailureReasonRequest) {
    super(scope, id);
  }

  public get healthCheckObservations(): shapes.Route53HealthCheckObservation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getHealthCheckLastFailureReason',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetHealthCheckLastFailureReason.HealthCheckObservations'),
        outputPath: 'HealthCheckObservations',
        parameters: {
          HealthCheckId: this.input.healthCheckId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetHealthCheckLastFailureReason.HealthCheckObservations', props);
    return resource.getResponseField('HealthCheckObservations') as unknown as shapes.Route53HealthCheckObservation[];
  }

}

export class Route53FetchHealthCheckStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53GetHealthCheckStatusRequest) {
    super(scope, id);
  }

  public get healthCheckObservations(): shapes.Route53HealthCheckObservation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getHealthCheckStatus',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetHealthCheckStatus.HealthCheckObservations'),
        outputPath: 'HealthCheckObservations',
        parameters: {
          HealthCheckId: this.input.healthCheckId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetHealthCheckStatus.HealthCheckObservations', props);
    return resource.getResponseField('HealthCheckObservations') as unknown as shapes.Route53HealthCheckObservation[];
  }

}

export class Route53FetchHostedZone extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53GetHostedZoneRequest) {
    super(scope, id);
  }

  public get hostedZone(): Route53FetchHostedZoneHostedZone {
    return new Route53FetchHostedZoneHostedZone(this, 'HostedZone', this.__resources, this.input);
  }

  public get delegationSet(): Route53FetchHostedZoneDelegationSet {
    return new Route53FetchHostedZoneDelegationSet(this, 'DelegationSet', this.__resources, this.input);
  }

  public get vpCs(): shapes.Route53Vpc[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getHostedZone',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetHostedZone.VPCs'),
        outputPath: 'VPCs',
        parameters: {
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetHostedZone.VPCs', props);
    return resource.getResponseField('VPCs') as unknown as shapes.Route53Vpc[];
  }

}

export class Route53FetchHostedZoneHostedZone extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53GetHostedZoneRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getHostedZone',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetHostedZone.HostedZone.Id'),
        outputPath: 'HostedZone.Id',
        parameters: {
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetHostedZone.HostedZone.Id', props);
    return resource.getResponseField('HostedZone.Id') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getHostedZone',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetHostedZone.HostedZone.Name'),
        outputPath: 'HostedZone.Name',
        parameters: {
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetHostedZone.HostedZone.Name', props);
    return resource.getResponseField('HostedZone.Name') as unknown as string;
  }

  public get callerReference(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getHostedZone',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetHostedZone.HostedZone.CallerReference'),
        outputPath: 'HostedZone.CallerReference',
        parameters: {
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetHostedZone.HostedZone.CallerReference', props);
    return resource.getResponseField('HostedZone.CallerReference') as unknown as string;
  }

  public get config(): Route53FetchHostedZoneHostedZoneConfig {
    return new Route53FetchHostedZoneHostedZoneConfig(this, 'Config', this.__resources, this.input);
  }

  public get resourceRecordSetCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getHostedZone',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetHostedZone.HostedZone.ResourceRecordSetCount'),
        outputPath: 'HostedZone.ResourceRecordSetCount',
        parameters: {
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetHostedZone.HostedZone.ResourceRecordSetCount', props);
    return resource.getResponseField('HostedZone.ResourceRecordSetCount') as unknown as number;
  }

  public get linkedService(): Route53FetchHostedZoneHostedZoneLinkedService {
    return new Route53FetchHostedZoneHostedZoneLinkedService(this, 'LinkedService', this.__resources, this.input);
  }

}

export class Route53FetchHostedZoneHostedZoneConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53GetHostedZoneRequest) {
    super(scope, id);
  }

  public get comment(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getHostedZone',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetHostedZone.HostedZone.Config.Comment'),
        outputPath: 'HostedZone.Config.Comment',
        parameters: {
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetHostedZone.HostedZone.Config.Comment', props);
    return resource.getResponseField('HostedZone.Config.Comment') as unknown as string;
  }

  public get privateZone(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getHostedZone',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetHostedZone.HostedZone.Config.PrivateZone'),
        outputPath: 'HostedZone.Config.PrivateZone',
        parameters: {
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetHostedZone.HostedZone.Config.PrivateZone', props);
    return resource.getResponseField('HostedZone.Config.PrivateZone') as unknown as boolean;
  }

}

export class Route53FetchHostedZoneHostedZoneLinkedService extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53GetHostedZoneRequest) {
    super(scope, id);
  }

  public get servicePrincipal(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getHostedZone',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetHostedZone.HostedZone.LinkedService.ServicePrincipal'),
        outputPath: 'HostedZone.LinkedService.ServicePrincipal',
        parameters: {
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetHostedZone.HostedZone.LinkedService.ServicePrincipal', props);
    return resource.getResponseField('HostedZone.LinkedService.ServicePrincipal') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getHostedZone',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetHostedZone.HostedZone.LinkedService.Description'),
        outputPath: 'HostedZone.LinkedService.Description',
        parameters: {
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetHostedZone.HostedZone.LinkedService.Description', props);
    return resource.getResponseField('HostedZone.LinkedService.Description') as unknown as string;
  }

}

export class Route53FetchHostedZoneDelegationSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53GetHostedZoneRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getHostedZone',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetHostedZone.DelegationSet.Id'),
        outputPath: 'DelegationSet.Id',
        parameters: {
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetHostedZone.DelegationSet.Id', props);
    return resource.getResponseField('DelegationSet.Id') as unknown as string;
  }

  public get callerReference(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getHostedZone',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetHostedZone.DelegationSet.CallerReference'),
        outputPath: 'DelegationSet.CallerReference',
        parameters: {
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetHostedZone.DelegationSet.CallerReference', props);
    return resource.getResponseField('DelegationSet.CallerReference') as unknown as string;
  }

  public get nameServers(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getHostedZone',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetHostedZone.DelegationSet.NameServers'),
        outputPath: 'DelegationSet.NameServers',
        parameters: {
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetHostedZone.DelegationSet.NameServers', props);
    return resource.getResponseField('DelegationSet.NameServers') as unknown as string[];
  }

}

export class Route53FetchHostedZoneCount extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get hostedZoneCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getHostedZoneCount',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetHostedZoneCount.HostedZoneCount'),
        outputPath: 'HostedZoneCount',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetHostedZoneCount.HostedZoneCount', props);
    return resource.getResponseField('HostedZoneCount') as unknown as number;
  }

}

export class Route53FetchHostedZoneLimit extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53GetHostedZoneLimitRequest) {
    super(scope, id);
  }

  public get limit(): Route53FetchHostedZoneLimitLimit {
    return new Route53FetchHostedZoneLimitLimit(this, 'Limit', this.__resources, this.input);
  }

  public get count(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getHostedZoneLimit',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetHostedZoneLimit.Count'),
        outputPath: 'Count',
        parameters: {
          Type: this.input.type,
          HostedZoneId: this.input.hostedZoneId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetHostedZoneLimit.Count', props);
    return resource.getResponseField('Count') as unknown as number;
  }

}

export class Route53FetchHostedZoneLimitLimit extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53GetHostedZoneLimitRequest) {
    super(scope, id);
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getHostedZoneLimit',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetHostedZoneLimit.Limit.Type'),
        outputPath: 'Limit.Type',
        parameters: {
          Type: this.input.type,
          HostedZoneId: this.input.hostedZoneId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetHostedZoneLimit.Limit.Type', props);
    return resource.getResponseField('Limit.Type') as unknown as string;
  }

  public get value(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getHostedZoneLimit',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetHostedZoneLimit.Limit.Value'),
        outputPath: 'Limit.Value',
        parameters: {
          Type: this.input.type,
          HostedZoneId: this.input.hostedZoneId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetHostedZoneLimit.Limit.Value', props);
    return resource.getResponseField('Limit.Value') as unknown as number;
  }

}

export class Route53FetchQueryLoggingConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53GetQueryLoggingConfigRequest) {
    super(scope, id);
  }

  public get queryLoggingConfig(): Route53FetchQueryLoggingConfigQueryLoggingConfig {
    return new Route53FetchQueryLoggingConfigQueryLoggingConfig(this, 'QueryLoggingConfig', this.__resources, this.input);
  }

}

export class Route53FetchQueryLoggingConfigQueryLoggingConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53GetQueryLoggingConfigRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getQueryLoggingConfig',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetQueryLoggingConfig.QueryLoggingConfig.Id'),
        outputPath: 'QueryLoggingConfig.Id',
        parameters: {
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetQueryLoggingConfig.QueryLoggingConfig.Id', props);
    return resource.getResponseField('QueryLoggingConfig.Id') as unknown as string;
  }

  public get hostedZoneId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getQueryLoggingConfig',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetQueryLoggingConfig.QueryLoggingConfig.HostedZoneId'),
        outputPath: 'QueryLoggingConfig.HostedZoneId',
        parameters: {
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetQueryLoggingConfig.QueryLoggingConfig.HostedZoneId', props);
    return resource.getResponseField('QueryLoggingConfig.HostedZoneId') as unknown as string;
  }

  public get cloudWatchLogsLogGroupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getQueryLoggingConfig',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetQueryLoggingConfig.QueryLoggingConfig.CloudWatchLogsLogGroupArn'),
        outputPath: 'QueryLoggingConfig.CloudWatchLogsLogGroupArn',
        parameters: {
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetQueryLoggingConfig.QueryLoggingConfig.CloudWatchLogsLogGroupArn', props);
    return resource.getResponseField('QueryLoggingConfig.CloudWatchLogsLogGroupArn') as unknown as string;
  }

}

export class Route53FetchReusableDelegationSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53GetReusableDelegationSetRequest) {
    super(scope, id);
  }

  public get delegationSet(): Route53FetchReusableDelegationSetDelegationSet {
    return new Route53FetchReusableDelegationSetDelegationSet(this, 'DelegationSet', this.__resources, this.input);
  }

}

export class Route53FetchReusableDelegationSetDelegationSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53GetReusableDelegationSetRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getReusableDelegationSet',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetReusableDelegationSet.DelegationSet.Id'),
        outputPath: 'DelegationSet.Id',
        parameters: {
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetReusableDelegationSet.DelegationSet.Id', props);
    return resource.getResponseField('DelegationSet.Id') as unknown as string;
  }

  public get callerReference(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getReusableDelegationSet',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetReusableDelegationSet.DelegationSet.CallerReference'),
        outputPath: 'DelegationSet.CallerReference',
        parameters: {
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetReusableDelegationSet.DelegationSet.CallerReference', props);
    return resource.getResponseField('DelegationSet.CallerReference') as unknown as string;
  }

  public get nameServers(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getReusableDelegationSet',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetReusableDelegationSet.DelegationSet.NameServers'),
        outputPath: 'DelegationSet.NameServers',
        parameters: {
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetReusableDelegationSet.DelegationSet.NameServers', props);
    return resource.getResponseField('DelegationSet.NameServers') as unknown as string[];
  }

}

export class Route53FetchReusableDelegationSetLimit extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53GetReusableDelegationSetLimitRequest) {
    super(scope, id);
  }

  public get limit(): Route53FetchReusableDelegationSetLimitLimit {
    return new Route53FetchReusableDelegationSetLimitLimit(this, 'Limit', this.__resources, this.input);
  }

  public get count(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getReusableDelegationSetLimit',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetReusableDelegationSetLimit.Count'),
        outputPath: 'Count',
        parameters: {
          Type: this.input.type,
          DelegationSetId: this.input.delegationSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetReusableDelegationSetLimit.Count', props);
    return resource.getResponseField('Count') as unknown as number;
  }

}

export class Route53FetchReusableDelegationSetLimitLimit extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53GetReusableDelegationSetLimitRequest) {
    super(scope, id);
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getReusableDelegationSetLimit',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetReusableDelegationSetLimit.Limit.Type'),
        outputPath: 'Limit.Type',
        parameters: {
          Type: this.input.type,
          DelegationSetId: this.input.delegationSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetReusableDelegationSetLimit.Limit.Type', props);
    return resource.getResponseField('Limit.Type') as unknown as string;
  }

  public get value(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getReusableDelegationSetLimit',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetReusableDelegationSetLimit.Limit.Value'),
        outputPath: 'Limit.Value',
        parameters: {
          Type: this.input.type,
          DelegationSetId: this.input.delegationSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetReusableDelegationSetLimit.Limit.Value', props);
    return resource.getResponseField('Limit.Value') as unknown as number;
  }

}

export class Route53FetchTrafficPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53GetTrafficPolicyRequest) {
    super(scope, id);
  }

  public get trafficPolicy(): Route53FetchTrafficPolicyTrafficPolicy {
    return new Route53FetchTrafficPolicyTrafficPolicy(this, 'TrafficPolicy', this.__resources, this.input);
  }

}

export class Route53FetchTrafficPolicyTrafficPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53GetTrafficPolicyRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTrafficPolicy',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetTrafficPolicy.TrafficPolicy.Id'),
        outputPath: 'TrafficPolicy.Id',
        parameters: {
          Id: this.input.id,
          Version: this.input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTrafficPolicy.TrafficPolicy.Id', props);
    return resource.getResponseField('TrafficPolicy.Id') as unknown as string;
  }

  public get version(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTrafficPolicy',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetTrafficPolicy.TrafficPolicy.Version'),
        outputPath: 'TrafficPolicy.Version',
        parameters: {
          Id: this.input.id,
          Version: this.input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTrafficPolicy.TrafficPolicy.Version', props);
    return resource.getResponseField('TrafficPolicy.Version') as unknown as number;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTrafficPolicy',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetTrafficPolicy.TrafficPolicy.Name'),
        outputPath: 'TrafficPolicy.Name',
        parameters: {
          Id: this.input.id,
          Version: this.input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTrafficPolicy.TrafficPolicy.Name', props);
    return resource.getResponseField('TrafficPolicy.Name') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTrafficPolicy',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetTrafficPolicy.TrafficPolicy.Type'),
        outputPath: 'TrafficPolicy.Type',
        parameters: {
          Id: this.input.id,
          Version: this.input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTrafficPolicy.TrafficPolicy.Type', props);
    return resource.getResponseField('TrafficPolicy.Type') as unknown as string;
  }

  public get document(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTrafficPolicy',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetTrafficPolicy.TrafficPolicy.Document'),
        outputPath: 'TrafficPolicy.Document',
        parameters: {
          Id: this.input.id,
          Version: this.input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTrafficPolicy.TrafficPolicy.Document', props);
    return resource.getResponseField('TrafficPolicy.Document') as unknown as string;
  }

  public get comment(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTrafficPolicy',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetTrafficPolicy.TrafficPolicy.Comment'),
        outputPath: 'TrafficPolicy.Comment',
        parameters: {
          Id: this.input.id,
          Version: this.input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTrafficPolicy.TrafficPolicy.Comment', props);
    return resource.getResponseField('TrafficPolicy.Comment') as unknown as string;
  }

}

export class Route53FetchTrafficPolicyInstance extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53GetTrafficPolicyInstanceRequest) {
    super(scope, id);
  }

  public get trafficPolicyInstance(): Route53FetchTrafficPolicyInstanceTrafficPolicyInstance {
    return new Route53FetchTrafficPolicyInstanceTrafficPolicyInstance(this, 'TrafficPolicyInstance', this.__resources, this.input);
  }

}

export class Route53FetchTrafficPolicyInstanceTrafficPolicyInstance extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53GetTrafficPolicyInstanceRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTrafficPolicyInstance',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetTrafficPolicyInstance.TrafficPolicyInstance.Id'),
        outputPath: 'TrafficPolicyInstance.Id',
        parameters: {
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTrafficPolicyInstance.TrafficPolicyInstance.Id', props);
    return resource.getResponseField('TrafficPolicyInstance.Id') as unknown as string;
  }

  public get hostedZoneId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTrafficPolicyInstance',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetTrafficPolicyInstance.TrafficPolicyInstance.HostedZoneId'),
        outputPath: 'TrafficPolicyInstance.HostedZoneId',
        parameters: {
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTrafficPolicyInstance.TrafficPolicyInstance.HostedZoneId', props);
    return resource.getResponseField('TrafficPolicyInstance.HostedZoneId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTrafficPolicyInstance',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetTrafficPolicyInstance.TrafficPolicyInstance.Name'),
        outputPath: 'TrafficPolicyInstance.Name',
        parameters: {
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTrafficPolicyInstance.TrafficPolicyInstance.Name', props);
    return resource.getResponseField('TrafficPolicyInstance.Name') as unknown as string;
  }

  public get ttl(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTrafficPolicyInstance',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetTrafficPolicyInstance.TrafficPolicyInstance.TTL'),
        outputPath: 'TrafficPolicyInstance.TTL',
        parameters: {
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTrafficPolicyInstance.TrafficPolicyInstance.TTL', props);
    return resource.getResponseField('TrafficPolicyInstance.TTL') as unknown as number;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTrafficPolicyInstance',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetTrafficPolicyInstance.TrafficPolicyInstance.State'),
        outputPath: 'TrafficPolicyInstance.State',
        parameters: {
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTrafficPolicyInstance.TrafficPolicyInstance.State', props);
    return resource.getResponseField('TrafficPolicyInstance.State') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTrafficPolicyInstance',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetTrafficPolicyInstance.TrafficPolicyInstance.Message'),
        outputPath: 'TrafficPolicyInstance.Message',
        parameters: {
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTrafficPolicyInstance.TrafficPolicyInstance.Message', props);
    return resource.getResponseField('TrafficPolicyInstance.Message') as unknown as string;
  }

  public get trafficPolicyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTrafficPolicyInstance',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetTrafficPolicyInstance.TrafficPolicyInstance.TrafficPolicyId'),
        outputPath: 'TrafficPolicyInstance.TrafficPolicyId',
        parameters: {
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTrafficPolicyInstance.TrafficPolicyInstance.TrafficPolicyId', props);
    return resource.getResponseField('TrafficPolicyInstance.TrafficPolicyId') as unknown as string;
  }

  public get trafficPolicyVersion(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTrafficPolicyInstance',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetTrafficPolicyInstance.TrafficPolicyInstance.TrafficPolicyVersion'),
        outputPath: 'TrafficPolicyInstance.TrafficPolicyVersion',
        parameters: {
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTrafficPolicyInstance.TrafficPolicyInstance.TrafficPolicyVersion', props);
    return resource.getResponseField('TrafficPolicyInstance.TrafficPolicyVersion') as unknown as number;
  }

  public get trafficPolicyType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTrafficPolicyInstance',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetTrafficPolicyInstance.TrafficPolicyInstance.TrafficPolicyType'),
        outputPath: 'TrafficPolicyInstance.TrafficPolicyType',
        parameters: {
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTrafficPolicyInstance.TrafficPolicyInstance.TrafficPolicyType', props);
    return resource.getResponseField('TrafficPolicyInstance.TrafficPolicyType') as unknown as string;
  }

}

export class Route53FetchTrafficPolicyInstanceCount extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get trafficPolicyInstanceCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTrafficPolicyInstanceCount',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.GetTrafficPolicyInstanceCount.TrafficPolicyInstanceCount'),
        outputPath: 'TrafficPolicyInstanceCount',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTrafficPolicyInstanceCount.TrafficPolicyInstanceCount', props);
    return resource.getResponseField('TrafficPolicyInstanceCount') as unknown as number;
  }

}

export class Route53ListGeoLocations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53ListGeoLocationsRequest) {
    super(scope, id);
  }

  public get geoLocationDetailsList(): shapes.Route53GeoLocationDetails[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listGeoLocations',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.ListGeoLocations.GeoLocationDetailsList'),
        outputPath: 'GeoLocationDetailsList',
        parameters: {
          StartContinentCode: this.input.startContinentCode,
          StartCountryCode: this.input.startCountryCode,
          StartSubdivisionCode: this.input.startSubdivisionCode,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListGeoLocations.GeoLocationDetailsList', props);
    return resource.getResponseField('GeoLocationDetailsList') as unknown as shapes.Route53GeoLocationDetails[];
  }

  public get isTruncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listGeoLocations',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.ListGeoLocations.IsTruncated'),
        outputPath: 'IsTruncated',
        parameters: {
          StartContinentCode: this.input.startContinentCode,
          StartCountryCode: this.input.startCountryCode,
          StartSubdivisionCode: this.input.startSubdivisionCode,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListGeoLocations.IsTruncated', props);
    return resource.getResponseField('IsTruncated') as unknown as boolean;
  }

  public get nextContinentCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listGeoLocations',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.ListGeoLocations.NextContinentCode'),
        outputPath: 'NextContinentCode',
        parameters: {
          StartContinentCode: this.input.startContinentCode,
          StartCountryCode: this.input.startCountryCode,
          StartSubdivisionCode: this.input.startSubdivisionCode,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListGeoLocations.NextContinentCode', props);
    return resource.getResponseField('NextContinentCode') as unknown as string;
  }

  public get nextCountryCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listGeoLocations',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.ListGeoLocations.NextCountryCode'),
        outputPath: 'NextCountryCode',
        parameters: {
          StartContinentCode: this.input.startContinentCode,
          StartCountryCode: this.input.startCountryCode,
          StartSubdivisionCode: this.input.startSubdivisionCode,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListGeoLocations.NextCountryCode', props);
    return resource.getResponseField('NextCountryCode') as unknown as string;
  }

  public get nextSubdivisionCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listGeoLocations',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.ListGeoLocations.NextSubdivisionCode'),
        outputPath: 'NextSubdivisionCode',
        parameters: {
          StartContinentCode: this.input.startContinentCode,
          StartCountryCode: this.input.startCountryCode,
          StartSubdivisionCode: this.input.startSubdivisionCode,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListGeoLocations.NextSubdivisionCode', props);
    return resource.getResponseField('NextSubdivisionCode') as unknown as string;
  }

  public get maxItems(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listGeoLocations',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.ListGeoLocations.MaxItems'),
        outputPath: 'MaxItems',
        parameters: {
          StartContinentCode: this.input.startContinentCode,
          StartCountryCode: this.input.startCountryCode,
          StartSubdivisionCode: this.input.startSubdivisionCode,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListGeoLocations.MaxItems', props);
    return resource.getResponseField('MaxItems') as unknown as string;
  }

}

export class Route53ListHealthChecks extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53ListHealthChecksRequest) {
    super(scope, id);
  }

  public get healthChecks(): shapes.Route53HealthCheck[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listHealthChecks',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.ListHealthChecks.HealthChecks'),
        outputPath: 'HealthChecks',
        parameters: {
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListHealthChecks.HealthChecks', props);
    return resource.getResponseField('HealthChecks') as unknown as shapes.Route53HealthCheck[];
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listHealthChecks',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.ListHealthChecks.Marker'),
        outputPath: 'Marker',
        parameters: {
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListHealthChecks.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

  public get isTruncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listHealthChecks',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.ListHealthChecks.IsTruncated'),
        outputPath: 'IsTruncated',
        parameters: {
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListHealthChecks.IsTruncated', props);
    return resource.getResponseField('IsTruncated') as unknown as boolean;
  }

  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listHealthChecks',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.ListHealthChecks.NextMarker'),
        outputPath: 'NextMarker',
        parameters: {
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListHealthChecks.NextMarker', props);
    return resource.getResponseField('NextMarker') as unknown as string;
  }

  public get maxItems(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listHealthChecks',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.ListHealthChecks.MaxItems'),
        outputPath: 'MaxItems',
        parameters: {
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListHealthChecks.MaxItems', props);
    return resource.getResponseField('MaxItems') as unknown as string;
  }

}

export class Route53ListHostedZones extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53ListHostedZonesRequest) {
    super(scope, id);
  }

  public get hostedZones(): shapes.Route53HostedZone[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listHostedZones',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.ListHostedZones.HostedZones'),
        outputPath: 'HostedZones',
        parameters: {
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
          DelegationSetId: this.input.delegationSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListHostedZones.HostedZones', props);
    return resource.getResponseField('HostedZones') as unknown as shapes.Route53HostedZone[];
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listHostedZones',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.ListHostedZones.Marker'),
        outputPath: 'Marker',
        parameters: {
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
          DelegationSetId: this.input.delegationSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListHostedZones.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

  public get isTruncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listHostedZones',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.ListHostedZones.IsTruncated'),
        outputPath: 'IsTruncated',
        parameters: {
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
          DelegationSetId: this.input.delegationSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListHostedZones.IsTruncated', props);
    return resource.getResponseField('IsTruncated') as unknown as boolean;
  }

  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listHostedZones',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.ListHostedZones.NextMarker'),
        outputPath: 'NextMarker',
        parameters: {
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
          DelegationSetId: this.input.delegationSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListHostedZones.NextMarker', props);
    return resource.getResponseField('NextMarker') as unknown as string;
  }

  public get maxItems(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listHostedZones',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.ListHostedZones.MaxItems'),
        outputPath: 'MaxItems',
        parameters: {
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
          DelegationSetId: this.input.delegationSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListHostedZones.MaxItems', props);
    return resource.getResponseField('MaxItems') as unknown as string;
  }

}

export class Route53ListHostedZonesByName extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53ListHostedZonesByNameRequest) {
    super(scope, id);
  }

  public get hostedZones(): shapes.Route53HostedZone[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listHostedZonesByName',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.ListHostedZonesByName.HostedZones'),
        outputPath: 'HostedZones',
        parameters: {
          DNSName: this.input.dnsName,
          HostedZoneId: this.input.hostedZoneId,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListHostedZonesByName.HostedZones', props);
    return resource.getResponseField('HostedZones') as unknown as shapes.Route53HostedZone[];
  }

  public get dnsName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listHostedZonesByName',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.ListHostedZonesByName.DNSName'),
        outputPath: 'DNSName',
        parameters: {
          DNSName: this.input.dnsName,
          HostedZoneId: this.input.hostedZoneId,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListHostedZonesByName.DNSName', props);
    return resource.getResponseField('DNSName') as unknown as string;
  }

  public get hostedZoneId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listHostedZonesByName',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.ListHostedZonesByName.HostedZoneId'),
        outputPath: 'HostedZoneId',
        parameters: {
          DNSName: this.input.dnsName,
          HostedZoneId: this.input.hostedZoneId,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListHostedZonesByName.HostedZoneId', props);
    return resource.getResponseField('HostedZoneId') as unknown as string;
  }

  public get isTruncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listHostedZonesByName',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.ListHostedZonesByName.IsTruncated'),
        outputPath: 'IsTruncated',
        parameters: {
          DNSName: this.input.dnsName,
          HostedZoneId: this.input.hostedZoneId,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListHostedZonesByName.IsTruncated', props);
    return resource.getResponseField('IsTruncated') as unknown as boolean;
  }

  public get nextDnsName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listHostedZonesByName',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.ListHostedZonesByName.NextDNSName'),
        outputPath: 'NextDNSName',
        parameters: {
          DNSName: this.input.dnsName,
          HostedZoneId: this.input.hostedZoneId,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListHostedZonesByName.NextDNSName', props);
    return resource.getResponseField('NextDNSName') as unknown as string;
  }

  public get nextHostedZoneId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listHostedZonesByName',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.ListHostedZonesByName.NextHostedZoneId'),
        outputPath: 'NextHostedZoneId',
        parameters: {
          DNSName: this.input.dnsName,
          HostedZoneId: this.input.hostedZoneId,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListHostedZonesByName.NextHostedZoneId', props);
    return resource.getResponseField('NextHostedZoneId') as unknown as string;
  }

  public get maxItems(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listHostedZonesByName',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.ListHostedZonesByName.MaxItems'),
        outputPath: 'MaxItems',
        parameters: {
          DNSName: this.input.dnsName,
          HostedZoneId: this.input.hostedZoneId,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListHostedZonesByName.MaxItems', props);
    return resource.getResponseField('MaxItems') as unknown as string;
  }

}

export class Route53ListHostedZonesByVpc extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53ListHostedZonesByVpcRequest) {
    super(scope, id);
  }

  public get hostedZoneSummaries(): shapes.Route53HostedZoneSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listHostedZonesByVpc',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.ListHostedZonesByVPC.HostedZoneSummaries'),
        outputPath: 'HostedZoneSummaries',
        parameters: {
          VPCId: this.input.vpcId,
          VPCRegion: this.input.vpcRegion,
          MaxItems: this.input.maxItems,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListHostedZonesByVPC.HostedZoneSummaries', props);
    return resource.getResponseField('HostedZoneSummaries') as unknown as shapes.Route53HostedZoneSummary[];
  }

  public get maxItems(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listHostedZonesByVpc',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.ListHostedZonesByVPC.MaxItems'),
        outputPath: 'MaxItems',
        parameters: {
          VPCId: this.input.vpcId,
          VPCRegion: this.input.vpcRegion,
          MaxItems: this.input.maxItems,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListHostedZonesByVPC.MaxItems', props);
    return resource.getResponseField('MaxItems') as unknown as string;
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listHostedZonesByVpc',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.ListHostedZonesByVPC.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          VPCId: this.input.vpcId,
          VPCRegion: this.input.vpcRegion,
          MaxItems: this.input.maxItems,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListHostedZonesByVPC.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class Route53ListQueryLoggingConfigs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53ListQueryLoggingConfigsRequest) {
    super(scope, id);
  }

  public get queryLoggingConfigs(): shapes.Route53QueryLoggingConfig[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listQueryLoggingConfigs',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.ListQueryLoggingConfigs.QueryLoggingConfigs'),
        outputPath: 'QueryLoggingConfigs',
        parameters: {
          HostedZoneId: this.input.hostedZoneId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListQueryLoggingConfigs.QueryLoggingConfigs', props);
    return resource.getResponseField('QueryLoggingConfigs') as unknown as shapes.Route53QueryLoggingConfig[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listQueryLoggingConfigs',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.ListQueryLoggingConfigs.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          HostedZoneId: this.input.hostedZoneId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListQueryLoggingConfigs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class Route53ListResourceRecordSets extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53ListResourceRecordSetsRequest) {
    super(scope, id);
  }

  public get resourceRecordSets(): shapes.Route53ResourceRecordSet[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listResourceRecordSets',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.ListResourceRecordSets.ResourceRecordSets'),
        outputPath: 'ResourceRecordSets',
        parameters: {
          HostedZoneId: this.input.hostedZoneId,
          StartRecordName: this.input.startRecordName,
          StartRecordType: this.input.startRecordType,
          StartRecordIdentifier: this.input.startRecordIdentifier,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListResourceRecordSets.ResourceRecordSets', props);
    return resource.getResponseField('ResourceRecordSets') as unknown as shapes.Route53ResourceRecordSet[];
  }

  public get isTruncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listResourceRecordSets',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.ListResourceRecordSets.IsTruncated'),
        outputPath: 'IsTruncated',
        parameters: {
          HostedZoneId: this.input.hostedZoneId,
          StartRecordName: this.input.startRecordName,
          StartRecordType: this.input.startRecordType,
          StartRecordIdentifier: this.input.startRecordIdentifier,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListResourceRecordSets.IsTruncated', props);
    return resource.getResponseField('IsTruncated') as unknown as boolean;
  }

  public get nextRecordName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listResourceRecordSets',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.ListResourceRecordSets.NextRecordName'),
        outputPath: 'NextRecordName',
        parameters: {
          HostedZoneId: this.input.hostedZoneId,
          StartRecordName: this.input.startRecordName,
          StartRecordType: this.input.startRecordType,
          StartRecordIdentifier: this.input.startRecordIdentifier,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListResourceRecordSets.NextRecordName', props);
    return resource.getResponseField('NextRecordName') as unknown as string;
  }

  public get nextRecordType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listResourceRecordSets',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.ListResourceRecordSets.NextRecordType'),
        outputPath: 'NextRecordType',
        parameters: {
          HostedZoneId: this.input.hostedZoneId,
          StartRecordName: this.input.startRecordName,
          StartRecordType: this.input.startRecordType,
          StartRecordIdentifier: this.input.startRecordIdentifier,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListResourceRecordSets.NextRecordType', props);
    return resource.getResponseField('NextRecordType') as unknown as string;
  }

  public get nextRecordIdentifier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listResourceRecordSets',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.ListResourceRecordSets.NextRecordIdentifier'),
        outputPath: 'NextRecordIdentifier',
        parameters: {
          HostedZoneId: this.input.hostedZoneId,
          StartRecordName: this.input.startRecordName,
          StartRecordType: this.input.startRecordType,
          StartRecordIdentifier: this.input.startRecordIdentifier,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListResourceRecordSets.NextRecordIdentifier', props);
    return resource.getResponseField('NextRecordIdentifier') as unknown as string;
  }

  public get maxItems(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listResourceRecordSets',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.ListResourceRecordSets.MaxItems'),
        outputPath: 'MaxItems',
        parameters: {
          HostedZoneId: this.input.hostedZoneId,
          StartRecordName: this.input.startRecordName,
          StartRecordType: this.input.startRecordType,
          StartRecordIdentifier: this.input.startRecordIdentifier,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListResourceRecordSets.MaxItems', props);
    return resource.getResponseField('MaxItems') as unknown as string;
  }

}

export class Route53ListReusableDelegationSets extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53ListReusableDelegationSetsRequest) {
    super(scope, id);
  }

  public get delegationSets(): shapes.Route53DelegationSet[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listReusableDelegationSets',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.ListReusableDelegationSets.DelegationSets'),
        outputPath: 'DelegationSets',
        parameters: {
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListReusableDelegationSets.DelegationSets', props);
    return resource.getResponseField('DelegationSets') as unknown as shapes.Route53DelegationSet[];
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listReusableDelegationSets',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.ListReusableDelegationSets.Marker'),
        outputPath: 'Marker',
        parameters: {
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListReusableDelegationSets.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

  public get isTruncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listReusableDelegationSets',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.ListReusableDelegationSets.IsTruncated'),
        outputPath: 'IsTruncated',
        parameters: {
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListReusableDelegationSets.IsTruncated', props);
    return resource.getResponseField('IsTruncated') as unknown as boolean;
  }

  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listReusableDelegationSets',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.ListReusableDelegationSets.NextMarker'),
        outputPath: 'NextMarker',
        parameters: {
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListReusableDelegationSets.NextMarker', props);
    return resource.getResponseField('NextMarker') as unknown as string;
  }

  public get maxItems(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listReusableDelegationSets',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.ListReusableDelegationSets.MaxItems'),
        outputPath: 'MaxItems',
        parameters: {
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListReusableDelegationSets.MaxItems', props);
    return resource.getResponseField('MaxItems') as unknown as string;
  }

}

export class Route53ListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53ListTagsForResourceRequest) {
    super(scope, id);
  }

  public get resourceTagSet(): Route53ListTagsForResourceResourceTagSet {
    return new Route53ListTagsForResourceResourceTagSet(this, 'ResourceTagSet', this.__resources, this.input);
  }

}

export class Route53ListTagsForResourceResourceTagSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53ListTagsForResourceRequest) {
    super(scope, id);
  }

  public get resourceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.ListTagsForResource.ResourceTagSet.ResourceType'),
        outputPath: 'ResourceTagSet.ResourceType',
        parameters: {
          ResourceType: this.input.resourceType,
          ResourceId: this.input.resourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.ResourceTagSet.ResourceType', props);
    return resource.getResponseField('ResourceTagSet.ResourceType') as unknown as string;
  }

  public get resourceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.ListTagsForResource.ResourceTagSet.ResourceId'),
        outputPath: 'ResourceTagSet.ResourceId',
        parameters: {
          ResourceType: this.input.resourceType,
          ResourceId: this.input.resourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.ResourceTagSet.ResourceId', props);
    return resource.getResponseField('ResourceTagSet.ResourceId') as unknown as string;
  }

  public get tags(): shapes.Route53Tag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.ListTagsForResource.ResourceTagSet.Tags'),
        outputPath: 'ResourceTagSet.Tags',
        parameters: {
          ResourceType: this.input.resourceType,
          ResourceId: this.input.resourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.ResourceTagSet.Tags', props);
    return resource.getResponseField('ResourceTagSet.Tags') as unknown as shapes.Route53Tag[];
  }

}

export class Route53ListTagsForResources extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53ListTagsForResourcesRequest) {
    super(scope, id);
  }

  public get resourceTagSets(): shapes.Route53ResourceTagSet[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResources',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.ListTagsForResources.ResourceTagSets'),
        outputPath: 'ResourceTagSets',
        parameters: {
          ResourceType: this.input.resourceType,
          ResourceIds: this.input.resourceIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResources.ResourceTagSets', props);
    return resource.getResponseField('ResourceTagSets') as unknown as shapes.Route53ResourceTagSet[];
  }

}

export class Route53ListTrafficPolicies extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53ListTrafficPoliciesRequest) {
    super(scope, id);
  }

  public get trafficPolicySummaries(): shapes.Route53TrafficPolicySummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTrafficPolicies',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.ListTrafficPolicies.TrafficPolicySummaries'),
        outputPath: 'TrafficPolicySummaries',
        parameters: {
          TrafficPolicyIdMarker: this.input.trafficPolicyIdMarker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTrafficPolicies.TrafficPolicySummaries', props);
    return resource.getResponseField('TrafficPolicySummaries') as unknown as shapes.Route53TrafficPolicySummary[];
  }

  public get isTruncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTrafficPolicies',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.ListTrafficPolicies.IsTruncated'),
        outputPath: 'IsTruncated',
        parameters: {
          TrafficPolicyIdMarker: this.input.trafficPolicyIdMarker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTrafficPolicies.IsTruncated', props);
    return resource.getResponseField('IsTruncated') as unknown as boolean;
  }

  public get trafficPolicyIdMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTrafficPolicies',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.ListTrafficPolicies.TrafficPolicyIdMarker'),
        outputPath: 'TrafficPolicyIdMarker',
        parameters: {
          TrafficPolicyIdMarker: this.input.trafficPolicyIdMarker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTrafficPolicies.TrafficPolicyIdMarker', props);
    return resource.getResponseField('TrafficPolicyIdMarker') as unknown as string;
  }

  public get maxItems(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTrafficPolicies',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.ListTrafficPolicies.MaxItems'),
        outputPath: 'MaxItems',
        parameters: {
          TrafficPolicyIdMarker: this.input.trafficPolicyIdMarker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTrafficPolicies.MaxItems', props);
    return resource.getResponseField('MaxItems') as unknown as string;
  }

}

export class Route53ListTrafficPolicyInstances extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53ListTrafficPolicyInstancesRequest) {
    super(scope, id);
  }

  public get trafficPolicyInstances(): shapes.Route53TrafficPolicyInstance[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTrafficPolicyInstances',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.ListTrafficPolicyInstances.TrafficPolicyInstances'),
        outputPath: 'TrafficPolicyInstances',
        parameters: {
          HostedZoneIdMarker: this.input.hostedZoneIdMarker,
          TrafficPolicyInstanceNameMarker: this.input.trafficPolicyInstanceNameMarker,
          TrafficPolicyInstanceTypeMarker: this.input.trafficPolicyInstanceTypeMarker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTrafficPolicyInstances.TrafficPolicyInstances', props);
    return resource.getResponseField('TrafficPolicyInstances') as unknown as shapes.Route53TrafficPolicyInstance[];
  }

  public get hostedZoneIdMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTrafficPolicyInstances',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.ListTrafficPolicyInstances.HostedZoneIdMarker'),
        outputPath: 'HostedZoneIdMarker',
        parameters: {
          HostedZoneIdMarker: this.input.hostedZoneIdMarker,
          TrafficPolicyInstanceNameMarker: this.input.trafficPolicyInstanceNameMarker,
          TrafficPolicyInstanceTypeMarker: this.input.trafficPolicyInstanceTypeMarker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTrafficPolicyInstances.HostedZoneIdMarker', props);
    return resource.getResponseField('HostedZoneIdMarker') as unknown as string;
  }

  public get trafficPolicyInstanceNameMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTrafficPolicyInstances',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.ListTrafficPolicyInstances.TrafficPolicyInstanceNameMarker'),
        outputPath: 'TrafficPolicyInstanceNameMarker',
        parameters: {
          HostedZoneIdMarker: this.input.hostedZoneIdMarker,
          TrafficPolicyInstanceNameMarker: this.input.trafficPolicyInstanceNameMarker,
          TrafficPolicyInstanceTypeMarker: this.input.trafficPolicyInstanceTypeMarker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTrafficPolicyInstances.TrafficPolicyInstanceNameMarker', props);
    return resource.getResponseField('TrafficPolicyInstanceNameMarker') as unknown as string;
  }

  public get trafficPolicyInstanceTypeMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTrafficPolicyInstances',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.ListTrafficPolicyInstances.TrafficPolicyInstanceTypeMarker'),
        outputPath: 'TrafficPolicyInstanceTypeMarker',
        parameters: {
          HostedZoneIdMarker: this.input.hostedZoneIdMarker,
          TrafficPolicyInstanceNameMarker: this.input.trafficPolicyInstanceNameMarker,
          TrafficPolicyInstanceTypeMarker: this.input.trafficPolicyInstanceTypeMarker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTrafficPolicyInstances.TrafficPolicyInstanceTypeMarker', props);
    return resource.getResponseField('TrafficPolicyInstanceTypeMarker') as unknown as string;
  }

  public get isTruncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTrafficPolicyInstances',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.ListTrafficPolicyInstances.IsTruncated'),
        outputPath: 'IsTruncated',
        parameters: {
          HostedZoneIdMarker: this.input.hostedZoneIdMarker,
          TrafficPolicyInstanceNameMarker: this.input.trafficPolicyInstanceNameMarker,
          TrafficPolicyInstanceTypeMarker: this.input.trafficPolicyInstanceTypeMarker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTrafficPolicyInstances.IsTruncated', props);
    return resource.getResponseField('IsTruncated') as unknown as boolean;
  }

  public get maxItems(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTrafficPolicyInstances',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.ListTrafficPolicyInstances.MaxItems'),
        outputPath: 'MaxItems',
        parameters: {
          HostedZoneIdMarker: this.input.hostedZoneIdMarker,
          TrafficPolicyInstanceNameMarker: this.input.trafficPolicyInstanceNameMarker,
          TrafficPolicyInstanceTypeMarker: this.input.trafficPolicyInstanceTypeMarker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTrafficPolicyInstances.MaxItems', props);
    return resource.getResponseField('MaxItems') as unknown as string;
  }

}

export class Route53ListTrafficPolicyInstancesByHostedZone extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53ListTrafficPolicyInstancesByHostedZoneRequest) {
    super(scope, id);
  }

  public get trafficPolicyInstances(): shapes.Route53TrafficPolicyInstance[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTrafficPolicyInstancesByHostedZone',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.ListTrafficPolicyInstancesByHostedZone.TrafficPolicyInstances'),
        outputPath: 'TrafficPolicyInstances',
        parameters: {
          HostedZoneId: this.input.hostedZoneId,
          TrafficPolicyInstanceNameMarker: this.input.trafficPolicyInstanceNameMarker,
          TrafficPolicyInstanceTypeMarker: this.input.trafficPolicyInstanceTypeMarker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTrafficPolicyInstancesByHostedZone.TrafficPolicyInstances', props);
    return resource.getResponseField('TrafficPolicyInstances') as unknown as shapes.Route53TrafficPolicyInstance[];
  }

  public get trafficPolicyInstanceNameMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTrafficPolicyInstancesByHostedZone',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.ListTrafficPolicyInstancesByHostedZone.TrafficPolicyInstanceNameMarker'),
        outputPath: 'TrafficPolicyInstanceNameMarker',
        parameters: {
          HostedZoneId: this.input.hostedZoneId,
          TrafficPolicyInstanceNameMarker: this.input.trafficPolicyInstanceNameMarker,
          TrafficPolicyInstanceTypeMarker: this.input.trafficPolicyInstanceTypeMarker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTrafficPolicyInstancesByHostedZone.TrafficPolicyInstanceNameMarker', props);
    return resource.getResponseField('TrafficPolicyInstanceNameMarker') as unknown as string;
  }

  public get trafficPolicyInstanceTypeMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTrafficPolicyInstancesByHostedZone',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.ListTrafficPolicyInstancesByHostedZone.TrafficPolicyInstanceTypeMarker'),
        outputPath: 'TrafficPolicyInstanceTypeMarker',
        parameters: {
          HostedZoneId: this.input.hostedZoneId,
          TrafficPolicyInstanceNameMarker: this.input.trafficPolicyInstanceNameMarker,
          TrafficPolicyInstanceTypeMarker: this.input.trafficPolicyInstanceTypeMarker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTrafficPolicyInstancesByHostedZone.TrafficPolicyInstanceTypeMarker', props);
    return resource.getResponseField('TrafficPolicyInstanceTypeMarker') as unknown as string;
  }

  public get isTruncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTrafficPolicyInstancesByHostedZone',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.ListTrafficPolicyInstancesByHostedZone.IsTruncated'),
        outputPath: 'IsTruncated',
        parameters: {
          HostedZoneId: this.input.hostedZoneId,
          TrafficPolicyInstanceNameMarker: this.input.trafficPolicyInstanceNameMarker,
          TrafficPolicyInstanceTypeMarker: this.input.trafficPolicyInstanceTypeMarker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTrafficPolicyInstancesByHostedZone.IsTruncated', props);
    return resource.getResponseField('IsTruncated') as unknown as boolean;
  }

  public get maxItems(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTrafficPolicyInstancesByHostedZone',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.ListTrafficPolicyInstancesByHostedZone.MaxItems'),
        outputPath: 'MaxItems',
        parameters: {
          HostedZoneId: this.input.hostedZoneId,
          TrafficPolicyInstanceNameMarker: this.input.trafficPolicyInstanceNameMarker,
          TrafficPolicyInstanceTypeMarker: this.input.trafficPolicyInstanceTypeMarker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTrafficPolicyInstancesByHostedZone.MaxItems', props);
    return resource.getResponseField('MaxItems') as unknown as string;
  }

}

export class Route53ListTrafficPolicyInstancesByPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53ListTrafficPolicyInstancesByPolicyRequest) {
    super(scope, id);
  }

  public get trafficPolicyInstances(): shapes.Route53TrafficPolicyInstance[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTrafficPolicyInstancesByPolicy',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.ListTrafficPolicyInstancesByPolicy.TrafficPolicyInstances'),
        outputPath: 'TrafficPolicyInstances',
        parameters: {
          TrafficPolicyId: this.input.trafficPolicyId,
          TrafficPolicyVersion: this.input.trafficPolicyVersion,
          HostedZoneIdMarker: this.input.hostedZoneIdMarker,
          TrafficPolicyInstanceNameMarker: this.input.trafficPolicyInstanceNameMarker,
          TrafficPolicyInstanceTypeMarker: this.input.trafficPolicyInstanceTypeMarker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTrafficPolicyInstancesByPolicy.TrafficPolicyInstances', props);
    return resource.getResponseField('TrafficPolicyInstances') as unknown as shapes.Route53TrafficPolicyInstance[];
  }

  public get hostedZoneIdMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTrafficPolicyInstancesByPolicy',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.ListTrafficPolicyInstancesByPolicy.HostedZoneIdMarker'),
        outputPath: 'HostedZoneIdMarker',
        parameters: {
          TrafficPolicyId: this.input.trafficPolicyId,
          TrafficPolicyVersion: this.input.trafficPolicyVersion,
          HostedZoneIdMarker: this.input.hostedZoneIdMarker,
          TrafficPolicyInstanceNameMarker: this.input.trafficPolicyInstanceNameMarker,
          TrafficPolicyInstanceTypeMarker: this.input.trafficPolicyInstanceTypeMarker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTrafficPolicyInstancesByPolicy.HostedZoneIdMarker', props);
    return resource.getResponseField('HostedZoneIdMarker') as unknown as string;
  }

  public get trafficPolicyInstanceNameMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTrafficPolicyInstancesByPolicy',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.ListTrafficPolicyInstancesByPolicy.TrafficPolicyInstanceNameMarker'),
        outputPath: 'TrafficPolicyInstanceNameMarker',
        parameters: {
          TrafficPolicyId: this.input.trafficPolicyId,
          TrafficPolicyVersion: this.input.trafficPolicyVersion,
          HostedZoneIdMarker: this.input.hostedZoneIdMarker,
          TrafficPolicyInstanceNameMarker: this.input.trafficPolicyInstanceNameMarker,
          TrafficPolicyInstanceTypeMarker: this.input.trafficPolicyInstanceTypeMarker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTrafficPolicyInstancesByPolicy.TrafficPolicyInstanceNameMarker', props);
    return resource.getResponseField('TrafficPolicyInstanceNameMarker') as unknown as string;
  }

  public get trafficPolicyInstanceTypeMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTrafficPolicyInstancesByPolicy',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.ListTrafficPolicyInstancesByPolicy.TrafficPolicyInstanceTypeMarker'),
        outputPath: 'TrafficPolicyInstanceTypeMarker',
        parameters: {
          TrafficPolicyId: this.input.trafficPolicyId,
          TrafficPolicyVersion: this.input.trafficPolicyVersion,
          HostedZoneIdMarker: this.input.hostedZoneIdMarker,
          TrafficPolicyInstanceNameMarker: this.input.trafficPolicyInstanceNameMarker,
          TrafficPolicyInstanceTypeMarker: this.input.trafficPolicyInstanceTypeMarker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTrafficPolicyInstancesByPolicy.TrafficPolicyInstanceTypeMarker', props);
    return resource.getResponseField('TrafficPolicyInstanceTypeMarker') as unknown as string;
  }

  public get isTruncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTrafficPolicyInstancesByPolicy',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.ListTrafficPolicyInstancesByPolicy.IsTruncated'),
        outputPath: 'IsTruncated',
        parameters: {
          TrafficPolicyId: this.input.trafficPolicyId,
          TrafficPolicyVersion: this.input.trafficPolicyVersion,
          HostedZoneIdMarker: this.input.hostedZoneIdMarker,
          TrafficPolicyInstanceNameMarker: this.input.trafficPolicyInstanceNameMarker,
          TrafficPolicyInstanceTypeMarker: this.input.trafficPolicyInstanceTypeMarker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTrafficPolicyInstancesByPolicy.IsTruncated', props);
    return resource.getResponseField('IsTruncated') as unknown as boolean;
  }

  public get maxItems(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTrafficPolicyInstancesByPolicy',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.ListTrafficPolicyInstancesByPolicy.MaxItems'),
        outputPath: 'MaxItems',
        parameters: {
          TrafficPolicyId: this.input.trafficPolicyId,
          TrafficPolicyVersion: this.input.trafficPolicyVersion,
          HostedZoneIdMarker: this.input.hostedZoneIdMarker,
          TrafficPolicyInstanceNameMarker: this.input.trafficPolicyInstanceNameMarker,
          TrafficPolicyInstanceTypeMarker: this.input.trafficPolicyInstanceTypeMarker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTrafficPolicyInstancesByPolicy.MaxItems', props);
    return resource.getResponseField('MaxItems') as unknown as string;
  }

}

export class Route53ListTrafficPolicyVersions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53ListTrafficPolicyVersionsRequest) {
    super(scope, id);
  }

  public get trafficPolicies(): shapes.Route53TrafficPolicy[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTrafficPolicyVersions',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.ListTrafficPolicyVersions.TrafficPolicies'),
        outputPath: 'TrafficPolicies',
        parameters: {
          Id: this.input.id,
          TrafficPolicyVersionMarker: this.input.trafficPolicyVersionMarker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTrafficPolicyVersions.TrafficPolicies', props);
    return resource.getResponseField('TrafficPolicies') as unknown as shapes.Route53TrafficPolicy[];
  }

  public get isTruncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTrafficPolicyVersions',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.ListTrafficPolicyVersions.IsTruncated'),
        outputPath: 'IsTruncated',
        parameters: {
          Id: this.input.id,
          TrafficPolicyVersionMarker: this.input.trafficPolicyVersionMarker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTrafficPolicyVersions.IsTruncated', props);
    return resource.getResponseField('IsTruncated') as unknown as boolean;
  }

  public get trafficPolicyVersionMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTrafficPolicyVersions',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.ListTrafficPolicyVersions.TrafficPolicyVersionMarker'),
        outputPath: 'TrafficPolicyVersionMarker',
        parameters: {
          Id: this.input.id,
          TrafficPolicyVersionMarker: this.input.trafficPolicyVersionMarker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTrafficPolicyVersions.TrafficPolicyVersionMarker', props);
    return resource.getResponseField('TrafficPolicyVersionMarker') as unknown as string;
  }

  public get maxItems(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTrafficPolicyVersions',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.ListTrafficPolicyVersions.MaxItems'),
        outputPath: 'MaxItems',
        parameters: {
          Id: this.input.id,
          TrafficPolicyVersionMarker: this.input.trafficPolicyVersionMarker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTrafficPolicyVersions.MaxItems', props);
    return resource.getResponseField('MaxItems') as unknown as string;
  }

}

export class Route53ListVpcAssociationAuthorizations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53ListVpcAssociationAuthorizationsRequest) {
    super(scope, id);
  }

  public get hostedZoneId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listVpcAssociationAuthorizations',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.ListVPCAssociationAuthorizations.HostedZoneId'),
        outputPath: 'HostedZoneId',
        parameters: {
          HostedZoneId: this.input.hostedZoneId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListVPCAssociationAuthorizations.HostedZoneId', props);
    return resource.getResponseField('HostedZoneId') as unknown as string;
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listVpcAssociationAuthorizations',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.ListVPCAssociationAuthorizations.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          HostedZoneId: this.input.hostedZoneId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListVPCAssociationAuthorizations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get vpCs(): shapes.Route53Vpc[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listVpcAssociationAuthorizations',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.ListVPCAssociationAuthorizations.VPCs'),
        outputPath: 'VPCs',
        parameters: {
          HostedZoneId: this.input.hostedZoneId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListVPCAssociationAuthorizations.VPCs', props);
    return resource.getResponseField('VPCs') as unknown as shapes.Route53Vpc[];
  }

}

export class Route53TestDnsAnswer extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53TestDnsAnswerRequest) {
    super(scope, id);
  }

  public get nameserver(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'testDnsAnswer',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.TestDNSAnswer.Nameserver'),
        outputPath: 'Nameserver',
        parameters: {
          HostedZoneId: this.input.hostedZoneId,
          RecordName: this.input.recordName,
          RecordType: this.input.recordType,
          ResolverIP: this.input.resolverIp,
          EDNS0ClientSubnetIP: this.input.edns0ClientSubnetIp,
          EDNS0ClientSubnetMask: this.input.edns0ClientSubnetMask,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TestDNSAnswer.Nameserver', props);
    return resource.getResponseField('Nameserver') as unknown as string;
  }

  public get recordName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'testDnsAnswer',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.TestDNSAnswer.RecordName'),
        outputPath: 'RecordName',
        parameters: {
          HostedZoneId: this.input.hostedZoneId,
          RecordName: this.input.recordName,
          RecordType: this.input.recordType,
          ResolverIP: this.input.resolverIp,
          EDNS0ClientSubnetIP: this.input.edns0ClientSubnetIp,
          EDNS0ClientSubnetMask: this.input.edns0ClientSubnetMask,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TestDNSAnswer.RecordName', props);
    return resource.getResponseField('RecordName') as unknown as string;
  }

  public get recordType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'testDnsAnswer',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.TestDNSAnswer.RecordType'),
        outputPath: 'RecordType',
        parameters: {
          HostedZoneId: this.input.hostedZoneId,
          RecordName: this.input.recordName,
          RecordType: this.input.recordType,
          ResolverIP: this.input.resolverIp,
          EDNS0ClientSubnetIP: this.input.edns0ClientSubnetIp,
          EDNS0ClientSubnetMask: this.input.edns0ClientSubnetMask,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TestDNSAnswer.RecordType', props);
    return resource.getResponseField('RecordType') as unknown as string;
  }

  public get recordData(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'testDnsAnswer',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.TestDNSAnswer.RecordData'),
        outputPath: 'RecordData',
        parameters: {
          HostedZoneId: this.input.hostedZoneId,
          RecordName: this.input.recordName,
          RecordType: this.input.recordType,
          ResolverIP: this.input.resolverIp,
          EDNS0ClientSubnetIP: this.input.edns0ClientSubnetIp,
          EDNS0ClientSubnetMask: this.input.edns0ClientSubnetMask,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TestDNSAnswer.RecordData', props);
    return resource.getResponseField('RecordData') as unknown as string[];
  }

  public get responseCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'testDnsAnswer',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.TestDNSAnswer.ResponseCode'),
        outputPath: 'ResponseCode',
        parameters: {
          HostedZoneId: this.input.hostedZoneId,
          RecordName: this.input.recordName,
          RecordType: this.input.recordType,
          ResolverIP: this.input.resolverIp,
          EDNS0ClientSubnetIP: this.input.edns0ClientSubnetIp,
          EDNS0ClientSubnetMask: this.input.edns0ClientSubnetMask,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TestDNSAnswer.ResponseCode', props);
    return resource.getResponseField('ResponseCode') as unknown as string;
  }

  public get protocol(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'testDnsAnswer',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.TestDNSAnswer.Protocol'),
        outputPath: 'Protocol',
        parameters: {
          HostedZoneId: this.input.hostedZoneId,
          RecordName: this.input.recordName,
          RecordType: this.input.recordType,
          ResolverIP: this.input.resolverIp,
          EDNS0ClientSubnetIP: this.input.edns0ClientSubnetIp,
          EDNS0ClientSubnetMask: this.input.edns0ClientSubnetMask,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TestDNSAnswer.Protocol', props);
    return resource.getResponseField('Protocol') as unknown as string;
  }

}

export class Route53UpdateHealthCheck extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53UpdateHealthCheckRequest) {
    super(scope, id);
  }

  public get healthCheck(): Route53UpdateHealthCheckHealthCheck {
    return new Route53UpdateHealthCheckHealthCheck(this, 'HealthCheck', this.__resources, this.input);
  }

}

export class Route53UpdateHealthCheckHealthCheck extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53UpdateHealthCheckRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.UpdateHealthCheck.HealthCheck.Id'),
        outputPath: 'HealthCheck.Id',
        parameters: {
          HealthCheckId: this.input.healthCheckId,
          HealthCheckVersion: this.input.healthCheckVersion,
          IPAddress: this.input.ipAddress,
          Port: this.input.port,
          ResourcePath: this.input.resourcePath,
          FullyQualifiedDomainName: this.input.fullyQualifiedDomainName,
          SearchString: this.input.searchString,
          FailureThreshold: this.input.failureThreshold,
          Inverted: this.input.inverted,
          Disabled: this.input.disabled,
          HealthThreshold: this.input.healthThreshold,
          ChildHealthChecks: this.input.childHealthChecks,
          EnableSNI: this.input.enableSni,
          Regions: this.input.regions,
          AlarmIdentifier: {
            Region: this.input.alarmIdentifier?.region,
            Name: this.input.alarmIdentifier?.name,
          },
          InsufficientDataHealthStatus: this.input.insufficientDataHealthStatus,
          ResetElements: this.input.resetElements,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateHealthCheck.HealthCheck.Id', props);
    return resource.getResponseField('HealthCheck.Id') as unknown as string;
  }

  public get callerReference(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.UpdateHealthCheck.HealthCheck.CallerReference'),
        outputPath: 'HealthCheck.CallerReference',
        parameters: {
          HealthCheckId: this.input.healthCheckId,
          HealthCheckVersion: this.input.healthCheckVersion,
          IPAddress: this.input.ipAddress,
          Port: this.input.port,
          ResourcePath: this.input.resourcePath,
          FullyQualifiedDomainName: this.input.fullyQualifiedDomainName,
          SearchString: this.input.searchString,
          FailureThreshold: this.input.failureThreshold,
          Inverted: this.input.inverted,
          Disabled: this.input.disabled,
          HealthThreshold: this.input.healthThreshold,
          ChildHealthChecks: this.input.childHealthChecks,
          EnableSNI: this.input.enableSni,
          Regions: this.input.regions,
          AlarmIdentifier: {
            Region: this.input.alarmIdentifier?.region,
            Name: this.input.alarmIdentifier?.name,
          },
          InsufficientDataHealthStatus: this.input.insufficientDataHealthStatus,
          ResetElements: this.input.resetElements,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateHealthCheck.HealthCheck.CallerReference', props);
    return resource.getResponseField('HealthCheck.CallerReference') as unknown as string;
  }

  public get linkedService(): Route53UpdateHealthCheckHealthCheckLinkedService {
    return new Route53UpdateHealthCheckHealthCheckLinkedService(this, 'LinkedService', this.__resources, this.input);
  }

  public get healthCheckConfig(): Route53UpdateHealthCheckHealthCheckHealthCheckConfig {
    return new Route53UpdateHealthCheckHealthCheckHealthCheckConfig(this, 'HealthCheckConfig', this.__resources, this.input);
  }

  public get healthCheckVersion(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.UpdateHealthCheck.HealthCheck.HealthCheckVersion'),
        outputPath: 'HealthCheck.HealthCheckVersion',
        parameters: {
          HealthCheckId: this.input.healthCheckId,
          HealthCheckVersion: this.input.healthCheckVersion,
          IPAddress: this.input.ipAddress,
          Port: this.input.port,
          ResourcePath: this.input.resourcePath,
          FullyQualifiedDomainName: this.input.fullyQualifiedDomainName,
          SearchString: this.input.searchString,
          FailureThreshold: this.input.failureThreshold,
          Inverted: this.input.inverted,
          Disabled: this.input.disabled,
          HealthThreshold: this.input.healthThreshold,
          ChildHealthChecks: this.input.childHealthChecks,
          EnableSNI: this.input.enableSni,
          Regions: this.input.regions,
          AlarmIdentifier: {
            Region: this.input.alarmIdentifier?.region,
            Name: this.input.alarmIdentifier?.name,
          },
          InsufficientDataHealthStatus: this.input.insufficientDataHealthStatus,
          ResetElements: this.input.resetElements,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateHealthCheck.HealthCheck.HealthCheckVersion', props);
    return resource.getResponseField('HealthCheck.HealthCheckVersion') as unknown as number;
  }

  public get cloudWatchAlarmConfiguration(): Route53UpdateHealthCheckHealthCheckCloudWatchAlarmConfiguration {
    return new Route53UpdateHealthCheckHealthCheckCloudWatchAlarmConfiguration(this, 'CloudWatchAlarmConfiguration', this.__resources, this.input);
  }

}

export class Route53UpdateHealthCheckHealthCheckLinkedService extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53UpdateHealthCheckRequest) {
    super(scope, id);
  }

  public get servicePrincipal(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.UpdateHealthCheck.HealthCheck.LinkedService.ServicePrincipal'),
        outputPath: 'HealthCheck.LinkedService.ServicePrincipal',
        parameters: {
          HealthCheckId: this.input.healthCheckId,
          HealthCheckVersion: this.input.healthCheckVersion,
          IPAddress: this.input.ipAddress,
          Port: this.input.port,
          ResourcePath: this.input.resourcePath,
          FullyQualifiedDomainName: this.input.fullyQualifiedDomainName,
          SearchString: this.input.searchString,
          FailureThreshold: this.input.failureThreshold,
          Inverted: this.input.inverted,
          Disabled: this.input.disabled,
          HealthThreshold: this.input.healthThreshold,
          ChildHealthChecks: this.input.childHealthChecks,
          EnableSNI: this.input.enableSni,
          Regions: this.input.regions,
          AlarmIdentifier: {
            Region: this.input.alarmIdentifier?.region,
            Name: this.input.alarmIdentifier?.name,
          },
          InsufficientDataHealthStatus: this.input.insufficientDataHealthStatus,
          ResetElements: this.input.resetElements,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateHealthCheck.HealthCheck.LinkedService.ServicePrincipal', props);
    return resource.getResponseField('HealthCheck.LinkedService.ServicePrincipal') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.UpdateHealthCheck.HealthCheck.LinkedService.Description'),
        outputPath: 'HealthCheck.LinkedService.Description',
        parameters: {
          HealthCheckId: this.input.healthCheckId,
          HealthCheckVersion: this.input.healthCheckVersion,
          IPAddress: this.input.ipAddress,
          Port: this.input.port,
          ResourcePath: this.input.resourcePath,
          FullyQualifiedDomainName: this.input.fullyQualifiedDomainName,
          SearchString: this.input.searchString,
          FailureThreshold: this.input.failureThreshold,
          Inverted: this.input.inverted,
          Disabled: this.input.disabled,
          HealthThreshold: this.input.healthThreshold,
          ChildHealthChecks: this.input.childHealthChecks,
          EnableSNI: this.input.enableSni,
          Regions: this.input.regions,
          AlarmIdentifier: {
            Region: this.input.alarmIdentifier?.region,
            Name: this.input.alarmIdentifier?.name,
          },
          InsufficientDataHealthStatus: this.input.insufficientDataHealthStatus,
          ResetElements: this.input.resetElements,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateHealthCheck.HealthCheck.LinkedService.Description', props);
    return resource.getResponseField('HealthCheck.LinkedService.Description') as unknown as string;
  }

}

export class Route53UpdateHealthCheckHealthCheckHealthCheckConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53UpdateHealthCheckRequest) {
    super(scope, id);
  }

  public get ipAddress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.UpdateHealthCheck.HealthCheck.HealthCheckConfig.IPAddress'),
        outputPath: 'HealthCheck.HealthCheckConfig.IPAddress',
        parameters: {
          HealthCheckId: this.input.healthCheckId,
          HealthCheckVersion: this.input.healthCheckVersion,
          IPAddress: this.input.ipAddress,
          Port: this.input.port,
          ResourcePath: this.input.resourcePath,
          FullyQualifiedDomainName: this.input.fullyQualifiedDomainName,
          SearchString: this.input.searchString,
          FailureThreshold: this.input.failureThreshold,
          Inverted: this.input.inverted,
          Disabled: this.input.disabled,
          HealthThreshold: this.input.healthThreshold,
          ChildHealthChecks: this.input.childHealthChecks,
          EnableSNI: this.input.enableSni,
          Regions: this.input.regions,
          AlarmIdentifier: {
            Region: this.input.alarmIdentifier?.region,
            Name: this.input.alarmIdentifier?.name,
          },
          InsufficientDataHealthStatus: this.input.insufficientDataHealthStatus,
          ResetElements: this.input.resetElements,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateHealthCheck.HealthCheck.HealthCheckConfig.IPAddress', props);
    return resource.getResponseField('HealthCheck.HealthCheckConfig.IPAddress') as unknown as string;
  }

  public get port(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.UpdateHealthCheck.HealthCheck.HealthCheckConfig.Port'),
        outputPath: 'HealthCheck.HealthCheckConfig.Port',
        parameters: {
          HealthCheckId: this.input.healthCheckId,
          HealthCheckVersion: this.input.healthCheckVersion,
          IPAddress: this.input.ipAddress,
          Port: this.input.port,
          ResourcePath: this.input.resourcePath,
          FullyQualifiedDomainName: this.input.fullyQualifiedDomainName,
          SearchString: this.input.searchString,
          FailureThreshold: this.input.failureThreshold,
          Inverted: this.input.inverted,
          Disabled: this.input.disabled,
          HealthThreshold: this.input.healthThreshold,
          ChildHealthChecks: this.input.childHealthChecks,
          EnableSNI: this.input.enableSni,
          Regions: this.input.regions,
          AlarmIdentifier: {
            Region: this.input.alarmIdentifier?.region,
            Name: this.input.alarmIdentifier?.name,
          },
          InsufficientDataHealthStatus: this.input.insufficientDataHealthStatus,
          ResetElements: this.input.resetElements,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateHealthCheck.HealthCheck.HealthCheckConfig.Port', props);
    return resource.getResponseField('HealthCheck.HealthCheckConfig.Port') as unknown as number;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.UpdateHealthCheck.HealthCheck.HealthCheckConfig.Type'),
        outputPath: 'HealthCheck.HealthCheckConfig.Type',
        parameters: {
          HealthCheckId: this.input.healthCheckId,
          HealthCheckVersion: this.input.healthCheckVersion,
          IPAddress: this.input.ipAddress,
          Port: this.input.port,
          ResourcePath: this.input.resourcePath,
          FullyQualifiedDomainName: this.input.fullyQualifiedDomainName,
          SearchString: this.input.searchString,
          FailureThreshold: this.input.failureThreshold,
          Inverted: this.input.inverted,
          Disabled: this.input.disabled,
          HealthThreshold: this.input.healthThreshold,
          ChildHealthChecks: this.input.childHealthChecks,
          EnableSNI: this.input.enableSni,
          Regions: this.input.regions,
          AlarmIdentifier: {
            Region: this.input.alarmIdentifier?.region,
            Name: this.input.alarmIdentifier?.name,
          },
          InsufficientDataHealthStatus: this.input.insufficientDataHealthStatus,
          ResetElements: this.input.resetElements,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateHealthCheck.HealthCheck.HealthCheckConfig.Type', props);
    return resource.getResponseField('HealthCheck.HealthCheckConfig.Type') as unknown as string;
  }

  public get resourcePath(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.UpdateHealthCheck.HealthCheck.HealthCheckConfig.ResourcePath'),
        outputPath: 'HealthCheck.HealthCheckConfig.ResourcePath',
        parameters: {
          HealthCheckId: this.input.healthCheckId,
          HealthCheckVersion: this.input.healthCheckVersion,
          IPAddress: this.input.ipAddress,
          Port: this.input.port,
          ResourcePath: this.input.resourcePath,
          FullyQualifiedDomainName: this.input.fullyQualifiedDomainName,
          SearchString: this.input.searchString,
          FailureThreshold: this.input.failureThreshold,
          Inverted: this.input.inverted,
          Disabled: this.input.disabled,
          HealthThreshold: this.input.healthThreshold,
          ChildHealthChecks: this.input.childHealthChecks,
          EnableSNI: this.input.enableSni,
          Regions: this.input.regions,
          AlarmIdentifier: {
            Region: this.input.alarmIdentifier?.region,
            Name: this.input.alarmIdentifier?.name,
          },
          InsufficientDataHealthStatus: this.input.insufficientDataHealthStatus,
          ResetElements: this.input.resetElements,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateHealthCheck.HealthCheck.HealthCheckConfig.ResourcePath', props);
    return resource.getResponseField('HealthCheck.HealthCheckConfig.ResourcePath') as unknown as string;
  }

  public get fullyQualifiedDomainName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.UpdateHealthCheck.HealthCheck.HealthCheckConfig.FullyQualifiedDomainName'),
        outputPath: 'HealthCheck.HealthCheckConfig.FullyQualifiedDomainName',
        parameters: {
          HealthCheckId: this.input.healthCheckId,
          HealthCheckVersion: this.input.healthCheckVersion,
          IPAddress: this.input.ipAddress,
          Port: this.input.port,
          ResourcePath: this.input.resourcePath,
          FullyQualifiedDomainName: this.input.fullyQualifiedDomainName,
          SearchString: this.input.searchString,
          FailureThreshold: this.input.failureThreshold,
          Inverted: this.input.inverted,
          Disabled: this.input.disabled,
          HealthThreshold: this.input.healthThreshold,
          ChildHealthChecks: this.input.childHealthChecks,
          EnableSNI: this.input.enableSni,
          Regions: this.input.regions,
          AlarmIdentifier: {
            Region: this.input.alarmIdentifier?.region,
            Name: this.input.alarmIdentifier?.name,
          },
          InsufficientDataHealthStatus: this.input.insufficientDataHealthStatus,
          ResetElements: this.input.resetElements,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateHealthCheck.HealthCheck.HealthCheckConfig.FullyQualifiedDomainName', props);
    return resource.getResponseField('HealthCheck.HealthCheckConfig.FullyQualifiedDomainName') as unknown as string;
  }

  public get searchString(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.UpdateHealthCheck.HealthCheck.HealthCheckConfig.SearchString'),
        outputPath: 'HealthCheck.HealthCheckConfig.SearchString',
        parameters: {
          HealthCheckId: this.input.healthCheckId,
          HealthCheckVersion: this.input.healthCheckVersion,
          IPAddress: this.input.ipAddress,
          Port: this.input.port,
          ResourcePath: this.input.resourcePath,
          FullyQualifiedDomainName: this.input.fullyQualifiedDomainName,
          SearchString: this.input.searchString,
          FailureThreshold: this.input.failureThreshold,
          Inverted: this.input.inverted,
          Disabled: this.input.disabled,
          HealthThreshold: this.input.healthThreshold,
          ChildHealthChecks: this.input.childHealthChecks,
          EnableSNI: this.input.enableSni,
          Regions: this.input.regions,
          AlarmIdentifier: {
            Region: this.input.alarmIdentifier?.region,
            Name: this.input.alarmIdentifier?.name,
          },
          InsufficientDataHealthStatus: this.input.insufficientDataHealthStatus,
          ResetElements: this.input.resetElements,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateHealthCheck.HealthCheck.HealthCheckConfig.SearchString', props);
    return resource.getResponseField('HealthCheck.HealthCheckConfig.SearchString') as unknown as string;
  }

  public get requestInterval(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.UpdateHealthCheck.HealthCheck.HealthCheckConfig.RequestInterval'),
        outputPath: 'HealthCheck.HealthCheckConfig.RequestInterval',
        parameters: {
          HealthCheckId: this.input.healthCheckId,
          HealthCheckVersion: this.input.healthCheckVersion,
          IPAddress: this.input.ipAddress,
          Port: this.input.port,
          ResourcePath: this.input.resourcePath,
          FullyQualifiedDomainName: this.input.fullyQualifiedDomainName,
          SearchString: this.input.searchString,
          FailureThreshold: this.input.failureThreshold,
          Inverted: this.input.inverted,
          Disabled: this.input.disabled,
          HealthThreshold: this.input.healthThreshold,
          ChildHealthChecks: this.input.childHealthChecks,
          EnableSNI: this.input.enableSni,
          Regions: this.input.regions,
          AlarmIdentifier: {
            Region: this.input.alarmIdentifier?.region,
            Name: this.input.alarmIdentifier?.name,
          },
          InsufficientDataHealthStatus: this.input.insufficientDataHealthStatus,
          ResetElements: this.input.resetElements,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateHealthCheck.HealthCheck.HealthCheckConfig.RequestInterval', props);
    return resource.getResponseField('HealthCheck.HealthCheckConfig.RequestInterval') as unknown as number;
  }

  public get failureThreshold(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.UpdateHealthCheck.HealthCheck.HealthCheckConfig.FailureThreshold'),
        outputPath: 'HealthCheck.HealthCheckConfig.FailureThreshold',
        parameters: {
          HealthCheckId: this.input.healthCheckId,
          HealthCheckVersion: this.input.healthCheckVersion,
          IPAddress: this.input.ipAddress,
          Port: this.input.port,
          ResourcePath: this.input.resourcePath,
          FullyQualifiedDomainName: this.input.fullyQualifiedDomainName,
          SearchString: this.input.searchString,
          FailureThreshold: this.input.failureThreshold,
          Inverted: this.input.inverted,
          Disabled: this.input.disabled,
          HealthThreshold: this.input.healthThreshold,
          ChildHealthChecks: this.input.childHealthChecks,
          EnableSNI: this.input.enableSni,
          Regions: this.input.regions,
          AlarmIdentifier: {
            Region: this.input.alarmIdentifier?.region,
            Name: this.input.alarmIdentifier?.name,
          },
          InsufficientDataHealthStatus: this.input.insufficientDataHealthStatus,
          ResetElements: this.input.resetElements,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateHealthCheck.HealthCheck.HealthCheckConfig.FailureThreshold', props);
    return resource.getResponseField('HealthCheck.HealthCheckConfig.FailureThreshold') as unknown as number;
  }

  public get measureLatency(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.UpdateHealthCheck.HealthCheck.HealthCheckConfig.MeasureLatency'),
        outputPath: 'HealthCheck.HealthCheckConfig.MeasureLatency',
        parameters: {
          HealthCheckId: this.input.healthCheckId,
          HealthCheckVersion: this.input.healthCheckVersion,
          IPAddress: this.input.ipAddress,
          Port: this.input.port,
          ResourcePath: this.input.resourcePath,
          FullyQualifiedDomainName: this.input.fullyQualifiedDomainName,
          SearchString: this.input.searchString,
          FailureThreshold: this.input.failureThreshold,
          Inverted: this.input.inverted,
          Disabled: this.input.disabled,
          HealthThreshold: this.input.healthThreshold,
          ChildHealthChecks: this.input.childHealthChecks,
          EnableSNI: this.input.enableSni,
          Regions: this.input.regions,
          AlarmIdentifier: {
            Region: this.input.alarmIdentifier?.region,
            Name: this.input.alarmIdentifier?.name,
          },
          InsufficientDataHealthStatus: this.input.insufficientDataHealthStatus,
          ResetElements: this.input.resetElements,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateHealthCheck.HealthCheck.HealthCheckConfig.MeasureLatency', props);
    return resource.getResponseField('HealthCheck.HealthCheckConfig.MeasureLatency') as unknown as boolean;
  }

  public get inverted(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.UpdateHealthCheck.HealthCheck.HealthCheckConfig.Inverted'),
        outputPath: 'HealthCheck.HealthCheckConfig.Inverted',
        parameters: {
          HealthCheckId: this.input.healthCheckId,
          HealthCheckVersion: this.input.healthCheckVersion,
          IPAddress: this.input.ipAddress,
          Port: this.input.port,
          ResourcePath: this.input.resourcePath,
          FullyQualifiedDomainName: this.input.fullyQualifiedDomainName,
          SearchString: this.input.searchString,
          FailureThreshold: this.input.failureThreshold,
          Inverted: this.input.inverted,
          Disabled: this.input.disabled,
          HealthThreshold: this.input.healthThreshold,
          ChildHealthChecks: this.input.childHealthChecks,
          EnableSNI: this.input.enableSni,
          Regions: this.input.regions,
          AlarmIdentifier: {
            Region: this.input.alarmIdentifier?.region,
            Name: this.input.alarmIdentifier?.name,
          },
          InsufficientDataHealthStatus: this.input.insufficientDataHealthStatus,
          ResetElements: this.input.resetElements,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateHealthCheck.HealthCheck.HealthCheckConfig.Inverted', props);
    return resource.getResponseField('HealthCheck.HealthCheckConfig.Inverted') as unknown as boolean;
  }

  public get disabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.UpdateHealthCheck.HealthCheck.HealthCheckConfig.Disabled'),
        outputPath: 'HealthCheck.HealthCheckConfig.Disabled',
        parameters: {
          HealthCheckId: this.input.healthCheckId,
          HealthCheckVersion: this.input.healthCheckVersion,
          IPAddress: this.input.ipAddress,
          Port: this.input.port,
          ResourcePath: this.input.resourcePath,
          FullyQualifiedDomainName: this.input.fullyQualifiedDomainName,
          SearchString: this.input.searchString,
          FailureThreshold: this.input.failureThreshold,
          Inverted: this.input.inverted,
          Disabled: this.input.disabled,
          HealthThreshold: this.input.healthThreshold,
          ChildHealthChecks: this.input.childHealthChecks,
          EnableSNI: this.input.enableSni,
          Regions: this.input.regions,
          AlarmIdentifier: {
            Region: this.input.alarmIdentifier?.region,
            Name: this.input.alarmIdentifier?.name,
          },
          InsufficientDataHealthStatus: this.input.insufficientDataHealthStatus,
          ResetElements: this.input.resetElements,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateHealthCheck.HealthCheck.HealthCheckConfig.Disabled', props);
    return resource.getResponseField('HealthCheck.HealthCheckConfig.Disabled') as unknown as boolean;
  }

  public get healthThreshold(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.UpdateHealthCheck.HealthCheck.HealthCheckConfig.HealthThreshold'),
        outputPath: 'HealthCheck.HealthCheckConfig.HealthThreshold',
        parameters: {
          HealthCheckId: this.input.healthCheckId,
          HealthCheckVersion: this.input.healthCheckVersion,
          IPAddress: this.input.ipAddress,
          Port: this.input.port,
          ResourcePath: this.input.resourcePath,
          FullyQualifiedDomainName: this.input.fullyQualifiedDomainName,
          SearchString: this.input.searchString,
          FailureThreshold: this.input.failureThreshold,
          Inverted: this.input.inverted,
          Disabled: this.input.disabled,
          HealthThreshold: this.input.healthThreshold,
          ChildHealthChecks: this.input.childHealthChecks,
          EnableSNI: this.input.enableSni,
          Regions: this.input.regions,
          AlarmIdentifier: {
            Region: this.input.alarmIdentifier?.region,
            Name: this.input.alarmIdentifier?.name,
          },
          InsufficientDataHealthStatus: this.input.insufficientDataHealthStatus,
          ResetElements: this.input.resetElements,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateHealthCheck.HealthCheck.HealthCheckConfig.HealthThreshold', props);
    return resource.getResponseField('HealthCheck.HealthCheckConfig.HealthThreshold') as unknown as number;
  }

  public get childHealthChecks(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.UpdateHealthCheck.HealthCheck.HealthCheckConfig.ChildHealthChecks'),
        outputPath: 'HealthCheck.HealthCheckConfig.ChildHealthChecks',
        parameters: {
          HealthCheckId: this.input.healthCheckId,
          HealthCheckVersion: this.input.healthCheckVersion,
          IPAddress: this.input.ipAddress,
          Port: this.input.port,
          ResourcePath: this.input.resourcePath,
          FullyQualifiedDomainName: this.input.fullyQualifiedDomainName,
          SearchString: this.input.searchString,
          FailureThreshold: this.input.failureThreshold,
          Inverted: this.input.inverted,
          Disabled: this.input.disabled,
          HealthThreshold: this.input.healthThreshold,
          ChildHealthChecks: this.input.childHealthChecks,
          EnableSNI: this.input.enableSni,
          Regions: this.input.regions,
          AlarmIdentifier: {
            Region: this.input.alarmIdentifier?.region,
            Name: this.input.alarmIdentifier?.name,
          },
          InsufficientDataHealthStatus: this.input.insufficientDataHealthStatus,
          ResetElements: this.input.resetElements,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateHealthCheck.HealthCheck.HealthCheckConfig.ChildHealthChecks', props);
    return resource.getResponseField('HealthCheck.HealthCheckConfig.ChildHealthChecks') as unknown as string[];
  }

  public get enableSni(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.UpdateHealthCheck.HealthCheck.HealthCheckConfig.EnableSNI'),
        outputPath: 'HealthCheck.HealthCheckConfig.EnableSNI',
        parameters: {
          HealthCheckId: this.input.healthCheckId,
          HealthCheckVersion: this.input.healthCheckVersion,
          IPAddress: this.input.ipAddress,
          Port: this.input.port,
          ResourcePath: this.input.resourcePath,
          FullyQualifiedDomainName: this.input.fullyQualifiedDomainName,
          SearchString: this.input.searchString,
          FailureThreshold: this.input.failureThreshold,
          Inverted: this.input.inverted,
          Disabled: this.input.disabled,
          HealthThreshold: this.input.healthThreshold,
          ChildHealthChecks: this.input.childHealthChecks,
          EnableSNI: this.input.enableSni,
          Regions: this.input.regions,
          AlarmIdentifier: {
            Region: this.input.alarmIdentifier?.region,
            Name: this.input.alarmIdentifier?.name,
          },
          InsufficientDataHealthStatus: this.input.insufficientDataHealthStatus,
          ResetElements: this.input.resetElements,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateHealthCheck.HealthCheck.HealthCheckConfig.EnableSNI', props);
    return resource.getResponseField('HealthCheck.HealthCheckConfig.EnableSNI') as unknown as boolean;
  }

  public get regions(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.UpdateHealthCheck.HealthCheck.HealthCheckConfig.Regions'),
        outputPath: 'HealthCheck.HealthCheckConfig.Regions',
        parameters: {
          HealthCheckId: this.input.healthCheckId,
          HealthCheckVersion: this.input.healthCheckVersion,
          IPAddress: this.input.ipAddress,
          Port: this.input.port,
          ResourcePath: this.input.resourcePath,
          FullyQualifiedDomainName: this.input.fullyQualifiedDomainName,
          SearchString: this.input.searchString,
          FailureThreshold: this.input.failureThreshold,
          Inverted: this.input.inverted,
          Disabled: this.input.disabled,
          HealthThreshold: this.input.healthThreshold,
          ChildHealthChecks: this.input.childHealthChecks,
          EnableSNI: this.input.enableSni,
          Regions: this.input.regions,
          AlarmIdentifier: {
            Region: this.input.alarmIdentifier?.region,
            Name: this.input.alarmIdentifier?.name,
          },
          InsufficientDataHealthStatus: this.input.insufficientDataHealthStatus,
          ResetElements: this.input.resetElements,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateHealthCheck.HealthCheck.HealthCheckConfig.Regions', props);
    return resource.getResponseField('HealthCheck.HealthCheckConfig.Regions') as unknown as string[];
  }

  public get alarmIdentifier(): Route53UpdateHealthCheckHealthCheckHealthCheckConfigAlarmIdentifier {
    return new Route53UpdateHealthCheckHealthCheckHealthCheckConfigAlarmIdentifier(this, 'AlarmIdentifier', this.__resources, this.input);
  }

  public get insufficientDataHealthStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.UpdateHealthCheck.HealthCheck.HealthCheckConfig.InsufficientDataHealthStatus'),
        outputPath: 'HealthCheck.HealthCheckConfig.InsufficientDataHealthStatus',
        parameters: {
          HealthCheckId: this.input.healthCheckId,
          HealthCheckVersion: this.input.healthCheckVersion,
          IPAddress: this.input.ipAddress,
          Port: this.input.port,
          ResourcePath: this.input.resourcePath,
          FullyQualifiedDomainName: this.input.fullyQualifiedDomainName,
          SearchString: this.input.searchString,
          FailureThreshold: this.input.failureThreshold,
          Inverted: this.input.inverted,
          Disabled: this.input.disabled,
          HealthThreshold: this.input.healthThreshold,
          ChildHealthChecks: this.input.childHealthChecks,
          EnableSNI: this.input.enableSni,
          Regions: this.input.regions,
          AlarmIdentifier: {
            Region: this.input.alarmIdentifier?.region,
            Name: this.input.alarmIdentifier?.name,
          },
          InsufficientDataHealthStatus: this.input.insufficientDataHealthStatus,
          ResetElements: this.input.resetElements,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateHealthCheck.HealthCheck.HealthCheckConfig.InsufficientDataHealthStatus', props);
    return resource.getResponseField('HealthCheck.HealthCheckConfig.InsufficientDataHealthStatus') as unknown as string;
  }

}

export class Route53UpdateHealthCheckHealthCheckHealthCheckConfigAlarmIdentifier extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53UpdateHealthCheckRequest) {
    super(scope, id);
  }

  public get region(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.UpdateHealthCheck.HealthCheck.HealthCheckConfig.AlarmIdentifier.Region'),
        outputPath: 'HealthCheck.HealthCheckConfig.AlarmIdentifier.Region',
        parameters: {
          HealthCheckId: this.input.healthCheckId,
          HealthCheckVersion: this.input.healthCheckVersion,
          IPAddress: this.input.ipAddress,
          Port: this.input.port,
          ResourcePath: this.input.resourcePath,
          FullyQualifiedDomainName: this.input.fullyQualifiedDomainName,
          SearchString: this.input.searchString,
          FailureThreshold: this.input.failureThreshold,
          Inverted: this.input.inverted,
          Disabled: this.input.disabled,
          HealthThreshold: this.input.healthThreshold,
          ChildHealthChecks: this.input.childHealthChecks,
          EnableSNI: this.input.enableSni,
          Regions: this.input.regions,
          AlarmIdentifier: {
            Region: this.input.alarmIdentifier?.region,
            Name: this.input.alarmIdentifier?.name,
          },
          InsufficientDataHealthStatus: this.input.insufficientDataHealthStatus,
          ResetElements: this.input.resetElements,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateHealthCheck.HealthCheck.HealthCheckConfig.AlarmIdentifier.Region', props);
    return resource.getResponseField('HealthCheck.HealthCheckConfig.AlarmIdentifier.Region') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.UpdateHealthCheck.HealthCheck.HealthCheckConfig.AlarmIdentifier.Name'),
        outputPath: 'HealthCheck.HealthCheckConfig.AlarmIdentifier.Name',
        parameters: {
          HealthCheckId: this.input.healthCheckId,
          HealthCheckVersion: this.input.healthCheckVersion,
          IPAddress: this.input.ipAddress,
          Port: this.input.port,
          ResourcePath: this.input.resourcePath,
          FullyQualifiedDomainName: this.input.fullyQualifiedDomainName,
          SearchString: this.input.searchString,
          FailureThreshold: this.input.failureThreshold,
          Inverted: this.input.inverted,
          Disabled: this.input.disabled,
          HealthThreshold: this.input.healthThreshold,
          ChildHealthChecks: this.input.childHealthChecks,
          EnableSNI: this.input.enableSni,
          Regions: this.input.regions,
          AlarmIdentifier: {
            Region: this.input.alarmIdentifier?.region,
            Name: this.input.alarmIdentifier?.name,
          },
          InsufficientDataHealthStatus: this.input.insufficientDataHealthStatus,
          ResetElements: this.input.resetElements,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateHealthCheck.HealthCheck.HealthCheckConfig.AlarmIdentifier.Name', props);
    return resource.getResponseField('HealthCheck.HealthCheckConfig.AlarmIdentifier.Name') as unknown as string;
  }

}

export class Route53UpdateHealthCheckHealthCheckCloudWatchAlarmConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53UpdateHealthCheckRequest) {
    super(scope, id);
  }

  public get evaluationPeriods(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.UpdateHealthCheck.HealthCheck.CloudWatchAlarmConfiguration.EvaluationPeriods'),
        outputPath: 'HealthCheck.CloudWatchAlarmConfiguration.EvaluationPeriods',
        parameters: {
          HealthCheckId: this.input.healthCheckId,
          HealthCheckVersion: this.input.healthCheckVersion,
          IPAddress: this.input.ipAddress,
          Port: this.input.port,
          ResourcePath: this.input.resourcePath,
          FullyQualifiedDomainName: this.input.fullyQualifiedDomainName,
          SearchString: this.input.searchString,
          FailureThreshold: this.input.failureThreshold,
          Inverted: this.input.inverted,
          Disabled: this.input.disabled,
          HealthThreshold: this.input.healthThreshold,
          ChildHealthChecks: this.input.childHealthChecks,
          EnableSNI: this.input.enableSni,
          Regions: this.input.regions,
          AlarmIdentifier: {
            Region: this.input.alarmIdentifier?.region,
            Name: this.input.alarmIdentifier?.name,
          },
          InsufficientDataHealthStatus: this.input.insufficientDataHealthStatus,
          ResetElements: this.input.resetElements,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateHealthCheck.HealthCheck.CloudWatchAlarmConfiguration.EvaluationPeriods', props);
    return resource.getResponseField('HealthCheck.CloudWatchAlarmConfiguration.EvaluationPeriods') as unknown as number;
  }

  public get threshold(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.UpdateHealthCheck.HealthCheck.CloudWatchAlarmConfiguration.Threshold'),
        outputPath: 'HealthCheck.CloudWatchAlarmConfiguration.Threshold',
        parameters: {
          HealthCheckId: this.input.healthCheckId,
          HealthCheckVersion: this.input.healthCheckVersion,
          IPAddress: this.input.ipAddress,
          Port: this.input.port,
          ResourcePath: this.input.resourcePath,
          FullyQualifiedDomainName: this.input.fullyQualifiedDomainName,
          SearchString: this.input.searchString,
          FailureThreshold: this.input.failureThreshold,
          Inverted: this.input.inverted,
          Disabled: this.input.disabled,
          HealthThreshold: this.input.healthThreshold,
          ChildHealthChecks: this.input.childHealthChecks,
          EnableSNI: this.input.enableSni,
          Regions: this.input.regions,
          AlarmIdentifier: {
            Region: this.input.alarmIdentifier?.region,
            Name: this.input.alarmIdentifier?.name,
          },
          InsufficientDataHealthStatus: this.input.insufficientDataHealthStatus,
          ResetElements: this.input.resetElements,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateHealthCheck.HealthCheck.CloudWatchAlarmConfiguration.Threshold', props);
    return resource.getResponseField('HealthCheck.CloudWatchAlarmConfiguration.Threshold') as unknown as number;
  }

  public get comparisonOperator(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.UpdateHealthCheck.HealthCheck.CloudWatchAlarmConfiguration.ComparisonOperator'),
        outputPath: 'HealthCheck.CloudWatchAlarmConfiguration.ComparisonOperator',
        parameters: {
          HealthCheckId: this.input.healthCheckId,
          HealthCheckVersion: this.input.healthCheckVersion,
          IPAddress: this.input.ipAddress,
          Port: this.input.port,
          ResourcePath: this.input.resourcePath,
          FullyQualifiedDomainName: this.input.fullyQualifiedDomainName,
          SearchString: this.input.searchString,
          FailureThreshold: this.input.failureThreshold,
          Inverted: this.input.inverted,
          Disabled: this.input.disabled,
          HealthThreshold: this.input.healthThreshold,
          ChildHealthChecks: this.input.childHealthChecks,
          EnableSNI: this.input.enableSni,
          Regions: this.input.regions,
          AlarmIdentifier: {
            Region: this.input.alarmIdentifier?.region,
            Name: this.input.alarmIdentifier?.name,
          },
          InsufficientDataHealthStatus: this.input.insufficientDataHealthStatus,
          ResetElements: this.input.resetElements,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateHealthCheck.HealthCheck.CloudWatchAlarmConfiguration.ComparisonOperator', props);
    return resource.getResponseField('HealthCheck.CloudWatchAlarmConfiguration.ComparisonOperator') as unknown as string;
  }

  public get period(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.UpdateHealthCheck.HealthCheck.CloudWatchAlarmConfiguration.Period'),
        outputPath: 'HealthCheck.CloudWatchAlarmConfiguration.Period',
        parameters: {
          HealthCheckId: this.input.healthCheckId,
          HealthCheckVersion: this.input.healthCheckVersion,
          IPAddress: this.input.ipAddress,
          Port: this.input.port,
          ResourcePath: this.input.resourcePath,
          FullyQualifiedDomainName: this.input.fullyQualifiedDomainName,
          SearchString: this.input.searchString,
          FailureThreshold: this.input.failureThreshold,
          Inverted: this.input.inverted,
          Disabled: this.input.disabled,
          HealthThreshold: this.input.healthThreshold,
          ChildHealthChecks: this.input.childHealthChecks,
          EnableSNI: this.input.enableSni,
          Regions: this.input.regions,
          AlarmIdentifier: {
            Region: this.input.alarmIdentifier?.region,
            Name: this.input.alarmIdentifier?.name,
          },
          InsufficientDataHealthStatus: this.input.insufficientDataHealthStatus,
          ResetElements: this.input.resetElements,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateHealthCheck.HealthCheck.CloudWatchAlarmConfiguration.Period', props);
    return resource.getResponseField('HealthCheck.CloudWatchAlarmConfiguration.Period') as unknown as number;
  }

  public get metricName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.UpdateHealthCheck.HealthCheck.CloudWatchAlarmConfiguration.MetricName'),
        outputPath: 'HealthCheck.CloudWatchAlarmConfiguration.MetricName',
        parameters: {
          HealthCheckId: this.input.healthCheckId,
          HealthCheckVersion: this.input.healthCheckVersion,
          IPAddress: this.input.ipAddress,
          Port: this.input.port,
          ResourcePath: this.input.resourcePath,
          FullyQualifiedDomainName: this.input.fullyQualifiedDomainName,
          SearchString: this.input.searchString,
          FailureThreshold: this.input.failureThreshold,
          Inverted: this.input.inverted,
          Disabled: this.input.disabled,
          HealthThreshold: this.input.healthThreshold,
          ChildHealthChecks: this.input.childHealthChecks,
          EnableSNI: this.input.enableSni,
          Regions: this.input.regions,
          AlarmIdentifier: {
            Region: this.input.alarmIdentifier?.region,
            Name: this.input.alarmIdentifier?.name,
          },
          InsufficientDataHealthStatus: this.input.insufficientDataHealthStatus,
          ResetElements: this.input.resetElements,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateHealthCheck.HealthCheck.CloudWatchAlarmConfiguration.MetricName', props);
    return resource.getResponseField('HealthCheck.CloudWatchAlarmConfiguration.MetricName') as unknown as string;
  }

  public get namespace(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.UpdateHealthCheck.HealthCheck.CloudWatchAlarmConfiguration.Namespace'),
        outputPath: 'HealthCheck.CloudWatchAlarmConfiguration.Namespace',
        parameters: {
          HealthCheckId: this.input.healthCheckId,
          HealthCheckVersion: this.input.healthCheckVersion,
          IPAddress: this.input.ipAddress,
          Port: this.input.port,
          ResourcePath: this.input.resourcePath,
          FullyQualifiedDomainName: this.input.fullyQualifiedDomainName,
          SearchString: this.input.searchString,
          FailureThreshold: this.input.failureThreshold,
          Inverted: this.input.inverted,
          Disabled: this.input.disabled,
          HealthThreshold: this.input.healthThreshold,
          ChildHealthChecks: this.input.childHealthChecks,
          EnableSNI: this.input.enableSni,
          Regions: this.input.regions,
          AlarmIdentifier: {
            Region: this.input.alarmIdentifier?.region,
            Name: this.input.alarmIdentifier?.name,
          },
          InsufficientDataHealthStatus: this.input.insufficientDataHealthStatus,
          ResetElements: this.input.resetElements,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateHealthCheck.HealthCheck.CloudWatchAlarmConfiguration.Namespace', props);
    return resource.getResponseField('HealthCheck.CloudWatchAlarmConfiguration.Namespace') as unknown as string;
  }

  public get statistic(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.UpdateHealthCheck.HealthCheck.CloudWatchAlarmConfiguration.Statistic'),
        outputPath: 'HealthCheck.CloudWatchAlarmConfiguration.Statistic',
        parameters: {
          HealthCheckId: this.input.healthCheckId,
          HealthCheckVersion: this.input.healthCheckVersion,
          IPAddress: this.input.ipAddress,
          Port: this.input.port,
          ResourcePath: this.input.resourcePath,
          FullyQualifiedDomainName: this.input.fullyQualifiedDomainName,
          SearchString: this.input.searchString,
          FailureThreshold: this.input.failureThreshold,
          Inverted: this.input.inverted,
          Disabled: this.input.disabled,
          HealthThreshold: this.input.healthThreshold,
          ChildHealthChecks: this.input.childHealthChecks,
          EnableSNI: this.input.enableSni,
          Regions: this.input.regions,
          AlarmIdentifier: {
            Region: this.input.alarmIdentifier?.region,
            Name: this.input.alarmIdentifier?.name,
          },
          InsufficientDataHealthStatus: this.input.insufficientDataHealthStatus,
          ResetElements: this.input.resetElements,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateHealthCheck.HealthCheck.CloudWatchAlarmConfiguration.Statistic', props);
    return resource.getResponseField('HealthCheck.CloudWatchAlarmConfiguration.Statistic') as unknown as string;
  }

  public get dimensions(): shapes.Route53Dimension[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateHealthCheck',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.UpdateHealthCheck.HealthCheck.CloudWatchAlarmConfiguration.Dimensions'),
        outputPath: 'HealthCheck.CloudWatchAlarmConfiguration.Dimensions',
        parameters: {
          HealthCheckId: this.input.healthCheckId,
          HealthCheckVersion: this.input.healthCheckVersion,
          IPAddress: this.input.ipAddress,
          Port: this.input.port,
          ResourcePath: this.input.resourcePath,
          FullyQualifiedDomainName: this.input.fullyQualifiedDomainName,
          SearchString: this.input.searchString,
          FailureThreshold: this.input.failureThreshold,
          Inverted: this.input.inverted,
          Disabled: this.input.disabled,
          HealthThreshold: this.input.healthThreshold,
          ChildHealthChecks: this.input.childHealthChecks,
          EnableSNI: this.input.enableSni,
          Regions: this.input.regions,
          AlarmIdentifier: {
            Region: this.input.alarmIdentifier?.region,
            Name: this.input.alarmIdentifier?.name,
          },
          InsufficientDataHealthStatus: this.input.insufficientDataHealthStatus,
          ResetElements: this.input.resetElements,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateHealthCheck.HealthCheck.CloudWatchAlarmConfiguration.Dimensions', props);
    return resource.getResponseField('HealthCheck.CloudWatchAlarmConfiguration.Dimensions') as unknown as shapes.Route53Dimension[];
  }

}

export class Route53UpdateHostedZoneComment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53UpdateHostedZoneCommentRequest) {
    super(scope, id);
  }

  public get hostedZone(): Route53UpdateHostedZoneCommentHostedZone {
    return new Route53UpdateHostedZoneCommentHostedZone(this, 'HostedZone', this.__resources, this.input);
  }

}

export class Route53UpdateHostedZoneCommentHostedZone extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53UpdateHostedZoneCommentRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateHostedZoneComment',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.UpdateHostedZoneComment.HostedZone.Id'),
        outputPath: 'HostedZone.Id',
        parameters: {
          Id: this.input.id,
          Comment: this.input.comment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateHostedZoneComment.HostedZone.Id', props);
    return resource.getResponseField('HostedZone.Id') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateHostedZoneComment',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.UpdateHostedZoneComment.HostedZone.Name'),
        outputPath: 'HostedZone.Name',
        parameters: {
          Id: this.input.id,
          Comment: this.input.comment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateHostedZoneComment.HostedZone.Name', props);
    return resource.getResponseField('HostedZone.Name') as unknown as string;
  }

  public get callerReference(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateHostedZoneComment',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.UpdateHostedZoneComment.HostedZone.CallerReference'),
        outputPath: 'HostedZone.CallerReference',
        parameters: {
          Id: this.input.id,
          Comment: this.input.comment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateHostedZoneComment.HostedZone.CallerReference', props);
    return resource.getResponseField('HostedZone.CallerReference') as unknown as string;
  }

  public get config(): Route53UpdateHostedZoneCommentHostedZoneConfig {
    return new Route53UpdateHostedZoneCommentHostedZoneConfig(this, 'Config', this.__resources, this.input);
  }

  public get resourceRecordSetCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateHostedZoneComment',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.UpdateHostedZoneComment.HostedZone.ResourceRecordSetCount'),
        outputPath: 'HostedZone.ResourceRecordSetCount',
        parameters: {
          Id: this.input.id,
          Comment: this.input.comment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateHostedZoneComment.HostedZone.ResourceRecordSetCount', props);
    return resource.getResponseField('HostedZone.ResourceRecordSetCount') as unknown as number;
  }

  public get linkedService(): Route53UpdateHostedZoneCommentHostedZoneLinkedService {
    return new Route53UpdateHostedZoneCommentHostedZoneLinkedService(this, 'LinkedService', this.__resources, this.input);
  }

}

export class Route53UpdateHostedZoneCommentHostedZoneConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53UpdateHostedZoneCommentRequest) {
    super(scope, id);
  }

  public get comment(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateHostedZoneComment',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.UpdateHostedZoneComment.HostedZone.Config.Comment'),
        outputPath: 'HostedZone.Config.Comment',
        parameters: {
          Id: this.input.id,
          Comment: this.input.comment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateHostedZoneComment.HostedZone.Config.Comment', props);
    return resource.getResponseField('HostedZone.Config.Comment') as unknown as string;
  }

  public get privateZone(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateHostedZoneComment',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.UpdateHostedZoneComment.HostedZone.Config.PrivateZone'),
        outputPath: 'HostedZone.Config.PrivateZone',
        parameters: {
          Id: this.input.id,
          Comment: this.input.comment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateHostedZoneComment.HostedZone.Config.PrivateZone', props);
    return resource.getResponseField('HostedZone.Config.PrivateZone') as unknown as boolean;
  }

}

export class Route53UpdateHostedZoneCommentHostedZoneLinkedService extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53UpdateHostedZoneCommentRequest) {
    super(scope, id);
  }

  public get servicePrincipal(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateHostedZoneComment',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.UpdateHostedZoneComment.HostedZone.LinkedService.ServicePrincipal'),
        outputPath: 'HostedZone.LinkedService.ServicePrincipal',
        parameters: {
          Id: this.input.id,
          Comment: this.input.comment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateHostedZoneComment.HostedZone.LinkedService.ServicePrincipal', props);
    return resource.getResponseField('HostedZone.LinkedService.ServicePrincipal') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateHostedZoneComment',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.UpdateHostedZoneComment.HostedZone.LinkedService.Description'),
        outputPath: 'HostedZone.LinkedService.Description',
        parameters: {
          Id: this.input.id,
          Comment: this.input.comment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateHostedZoneComment.HostedZone.LinkedService.Description', props);
    return resource.getResponseField('HostedZone.LinkedService.Description') as unknown as string;
  }

}

export class Route53UpdateTrafficPolicyComment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53UpdateTrafficPolicyCommentRequest) {
    super(scope, id);
  }

  public get trafficPolicy(): Route53UpdateTrafficPolicyCommentTrafficPolicy {
    return new Route53UpdateTrafficPolicyCommentTrafficPolicy(this, 'TrafficPolicy', this.__resources, this.input);
  }

}

export class Route53UpdateTrafficPolicyCommentTrafficPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53UpdateTrafficPolicyCommentRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTrafficPolicyComment',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.UpdateTrafficPolicyComment.TrafficPolicy.Id'),
        outputPath: 'TrafficPolicy.Id',
        parameters: {
          Id: this.input.id,
          Version: this.input.version,
          Comment: this.input.comment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTrafficPolicyComment.TrafficPolicy.Id', props);
    return resource.getResponseField('TrafficPolicy.Id') as unknown as string;
  }

  public get version(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTrafficPolicyComment',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.UpdateTrafficPolicyComment.TrafficPolicy.Version'),
        outputPath: 'TrafficPolicy.Version',
        parameters: {
          Id: this.input.id,
          Version: this.input.version,
          Comment: this.input.comment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTrafficPolicyComment.TrafficPolicy.Version', props);
    return resource.getResponseField('TrafficPolicy.Version') as unknown as number;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTrafficPolicyComment',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.UpdateTrafficPolicyComment.TrafficPolicy.Name'),
        outputPath: 'TrafficPolicy.Name',
        parameters: {
          Id: this.input.id,
          Version: this.input.version,
          Comment: this.input.comment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTrafficPolicyComment.TrafficPolicy.Name', props);
    return resource.getResponseField('TrafficPolicy.Name') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTrafficPolicyComment',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.UpdateTrafficPolicyComment.TrafficPolicy.Type'),
        outputPath: 'TrafficPolicy.Type',
        parameters: {
          Id: this.input.id,
          Version: this.input.version,
          Comment: this.input.comment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTrafficPolicyComment.TrafficPolicy.Type', props);
    return resource.getResponseField('TrafficPolicy.Type') as unknown as string;
  }

  public get document(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTrafficPolicyComment',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.UpdateTrafficPolicyComment.TrafficPolicy.Document'),
        outputPath: 'TrafficPolicy.Document',
        parameters: {
          Id: this.input.id,
          Version: this.input.version,
          Comment: this.input.comment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTrafficPolicyComment.TrafficPolicy.Document', props);
    return resource.getResponseField('TrafficPolicy.Document') as unknown as string;
  }

  public get comment(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTrafficPolicyComment',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.UpdateTrafficPolicyComment.TrafficPolicy.Comment'),
        outputPath: 'TrafficPolicy.Comment',
        parameters: {
          Id: this.input.id,
          Version: this.input.version,
          Comment: this.input.comment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTrafficPolicyComment.TrafficPolicy.Comment', props);
    return resource.getResponseField('TrafficPolicy.Comment') as unknown as string;
  }

}

export class Route53UpdateTrafficPolicyInstance extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53UpdateTrafficPolicyInstanceRequest) {
    super(scope, id);
  }

  public get trafficPolicyInstance(): Route53UpdateTrafficPolicyInstanceTrafficPolicyInstance {
    return new Route53UpdateTrafficPolicyInstanceTrafficPolicyInstance(this, 'TrafficPolicyInstance', this.__resources, this.input);
  }

}

export class Route53UpdateTrafficPolicyInstanceTrafficPolicyInstance extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53UpdateTrafficPolicyInstanceRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTrafficPolicyInstance',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.UpdateTrafficPolicyInstance.TrafficPolicyInstance.Id'),
        outputPath: 'TrafficPolicyInstance.Id',
        parameters: {
          Id: this.input.id,
          TTL: this.input.ttl,
          TrafficPolicyId: this.input.trafficPolicyId,
          TrafficPolicyVersion: this.input.trafficPolicyVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTrafficPolicyInstance.TrafficPolicyInstance.Id', props);
    return resource.getResponseField('TrafficPolicyInstance.Id') as unknown as string;
  }

  public get hostedZoneId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTrafficPolicyInstance',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.UpdateTrafficPolicyInstance.TrafficPolicyInstance.HostedZoneId'),
        outputPath: 'TrafficPolicyInstance.HostedZoneId',
        parameters: {
          Id: this.input.id,
          TTL: this.input.ttl,
          TrafficPolicyId: this.input.trafficPolicyId,
          TrafficPolicyVersion: this.input.trafficPolicyVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTrafficPolicyInstance.TrafficPolicyInstance.HostedZoneId', props);
    return resource.getResponseField('TrafficPolicyInstance.HostedZoneId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTrafficPolicyInstance',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.UpdateTrafficPolicyInstance.TrafficPolicyInstance.Name'),
        outputPath: 'TrafficPolicyInstance.Name',
        parameters: {
          Id: this.input.id,
          TTL: this.input.ttl,
          TrafficPolicyId: this.input.trafficPolicyId,
          TrafficPolicyVersion: this.input.trafficPolicyVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTrafficPolicyInstance.TrafficPolicyInstance.Name', props);
    return resource.getResponseField('TrafficPolicyInstance.Name') as unknown as string;
  }

  public get ttl(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTrafficPolicyInstance',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.UpdateTrafficPolicyInstance.TrafficPolicyInstance.TTL'),
        outputPath: 'TrafficPolicyInstance.TTL',
        parameters: {
          Id: this.input.id,
          TTL: this.input.ttl,
          TrafficPolicyId: this.input.trafficPolicyId,
          TrafficPolicyVersion: this.input.trafficPolicyVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTrafficPolicyInstance.TrafficPolicyInstance.TTL', props);
    return resource.getResponseField('TrafficPolicyInstance.TTL') as unknown as number;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTrafficPolicyInstance',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.UpdateTrafficPolicyInstance.TrafficPolicyInstance.State'),
        outputPath: 'TrafficPolicyInstance.State',
        parameters: {
          Id: this.input.id,
          TTL: this.input.ttl,
          TrafficPolicyId: this.input.trafficPolicyId,
          TrafficPolicyVersion: this.input.trafficPolicyVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTrafficPolicyInstance.TrafficPolicyInstance.State', props);
    return resource.getResponseField('TrafficPolicyInstance.State') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTrafficPolicyInstance',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.UpdateTrafficPolicyInstance.TrafficPolicyInstance.Message'),
        outputPath: 'TrafficPolicyInstance.Message',
        parameters: {
          Id: this.input.id,
          TTL: this.input.ttl,
          TrafficPolicyId: this.input.trafficPolicyId,
          TrafficPolicyVersion: this.input.trafficPolicyVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTrafficPolicyInstance.TrafficPolicyInstance.Message', props);
    return resource.getResponseField('TrafficPolicyInstance.Message') as unknown as string;
  }

  public get trafficPolicyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTrafficPolicyInstance',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.UpdateTrafficPolicyInstance.TrafficPolicyInstance.TrafficPolicyId'),
        outputPath: 'TrafficPolicyInstance.TrafficPolicyId',
        parameters: {
          Id: this.input.id,
          TTL: this.input.ttl,
          TrafficPolicyId: this.input.trafficPolicyId,
          TrafficPolicyVersion: this.input.trafficPolicyVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTrafficPolicyInstance.TrafficPolicyInstance.TrafficPolicyId', props);
    return resource.getResponseField('TrafficPolicyInstance.TrafficPolicyId') as unknown as string;
  }

  public get trafficPolicyVersion(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTrafficPolicyInstance',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.UpdateTrafficPolicyInstance.TrafficPolicyInstance.TrafficPolicyVersion'),
        outputPath: 'TrafficPolicyInstance.TrafficPolicyVersion',
        parameters: {
          Id: this.input.id,
          TTL: this.input.ttl,
          TrafficPolicyId: this.input.trafficPolicyId,
          TrafficPolicyVersion: this.input.trafficPolicyVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTrafficPolicyInstance.TrafficPolicyInstance.TrafficPolicyVersion', props);
    return resource.getResponseField('TrafficPolicyInstance.TrafficPolicyVersion') as unknown as number;
  }

  public get trafficPolicyType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTrafficPolicyInstance',
        service: 'Route53',
        physicalResourceId: cr.PhysicalResourceId.of('Route53.UpdateTrafficPolicyInstance.TrafficPolicyInstance.TrafficPolicyType'),
        outputPath: 'TrafficPolicyInstance.TrafficPolicyType',
        parameters: {
          Id: this.input.id,
          TTL: this.input.ttl,
          TrafficPolicyId: this.input.trafficPolicyId,
          TrafficPolicyVersion: this.input.trafficPolicyVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTrafficPolicyInstance.TrafficPolicyInstance.TrafficPolicyType', props);
    return resource.getResponseField('TrafficPolicyInstance.TrafficPolicyType') as unknown as string;
  }

}

