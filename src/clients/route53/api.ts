import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class Route53Client extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public associateVpcWithHostedZone(input: shapes.Route53AssociateVpcWithHostedZoneRequest): Route53ResponsesAssociateVpcWithHostedZone {
    return new Route53ResponsesAssociateVpcWithHostedZone(this, this.__resources, input);
  }

  public changeResourceRecordSets(input: shapes.Route53ChangeResourceRecordSetsRequest): Route53ResponsesChangeResourceRecordSets {
    return new Route53ResponsesChangeResourceRecordSets(this, this.__resources, input);
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

  public createHealthCheck(input: shapes.Route53CreateHealthCheckRequest): Route53ResponsesCreateHealthCheck {
    return new Route53ResponsesCreateHealthCheck(this, this.__resources, input);
  }

  public createHostedZone(input: shapes.Route53CreateHostedZoneRequest): Route53ResponsesCreateHostedZone {
    return new Route53ResponsesCreateHostedZone(this, this.__resources, input);
  }

  public createQueryLoggingConfig(input: shapes.Route53CreateQueryLoggingConfigRequest): Route53ResponsesCreateQueryLoggingConfig {
    return new Route53ResponsesCreateQueryLoggingConfig(this, this.__resources, input);
  }

  public createReusableDelegationSet(input: shapes.Route53CreateReusableDelegationSetRequest): Route53ResponsesCreateReusableDelegationSet {
    return new Route53ResponsesCreateReusableDelegationSet(this, this.__resources, input);
  }

  public createTrafficPolicy(input: shapes.Route53CreateTrafficPolicyRequest): Route53ResponsesCreateTrafficPolicy {
    return new Route53ResponsesCreateTrafficPolicy(this, this.__resources, input);
  }

  public createTrafficPolicyInstance(input: shapes.Route53CreateTrafficPolicyInstanceRequest): Route53ResponsesCreateTrafficPolicyInstance {
    return new Route53ResponsesCreateTrafficPolicyInstance(this, this.__resources, input);
  }

  public createTrafficPolicyVersion(input: shapes.Route53CreateTrafficPolicyVersionRequest): Route53ResponsesCreateTrafficPolicyVersion {
    return new Route53ResponsesCreateTrafficPolicyVersion(this, this.__resources, input);
  }

  public createVpcAssociationAuthorization(input: shapes.Route53CreateVpcAssociationAuthorizationRequest): Route53ResponsesCreateVpcAssociationAuthorization {
    return new Route53ResponsesCreateVpcAssociationAuthorization(this, this.__resources, input);
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

  public deleteHostedZone(input: shapes.Route53DeleteHostedZoneRequest): Route53ResponsesDeleteHostedZone {
    return new Route53ResponsesDeleteHostedZone(this, this.__resources, input);
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

  public disassociateVpcFromHostedZone(input: shapes.Route53DisassociateVpcFromHostedZoneRequest): Route53ResponsesDisassociateVpcFromHostedZone {
    return new Route53ResponsesDisassociateVpcFromHostedZone(this, this.__resources, input);
  }

  public fetchAccountLimit(input: shapes.Route53GetAccountLimitRequest): Route53ResponsesFetchAccountLimit {
    return new Route53ResponsesFetchAccountLimit(this, this.__resources, input);
  }

  public fetchChange(input: shapes.Route53GetChangeRequest): Route53ResponsesFetchChange {
    return new Route53ResponsesFetchChange(this, this.__resources, input);
  }

  public fetchCheckerIpRanges(): Route53ResponsesFetchCheckerIpRanges {
    return new Route53ResponsesFetchCheckerIpRanges(this, this.__resources);
  }

  public fetchGeoLocation(input: shapes.Route53GetGeoLocationRequest): Route53ResponsesFetchGeoLocation {
    return new Route53ResponsesFetchGeoLocation(this, this.__resources, input);
  }

  public fetchHealthCheck(input: shapes.Route53GetHealthCheckRequest): Route53ResponsesFetchHealthCheck {
    return new Route53ResponsesFetchHealthCheck(this, this.__resources, input);
  }

  public fetchHealthCheckCount(): Route53ResponsesFetchHealthCheckCount {
    return new Route53ResponsesFetchHealthCheckCount(this, this.__resources);
  }

  public fetchHealthCheckLastFailureReason(input: shapes.Route53GetHealthCheckLastFailureReasonRequest): Route53ResponsesFetchHealthCheckLastFailureReason {
    return new Route53ResponsesFetchHealthCheckLastFailureReason(this, this.__resources, input);
  }

  public fetchHealthCheckStatus(input: shapes.Route53GetHealthCheckStatusRequest): Route53ResponsesFetchHealthCheckStatus {
    return new Route53ResponsesFetchHealthCheckStatus(this, this.__resources, input);
  }

  public fetchHostedZone(input: shapes.Route53GetHostedZoneRequest): Route53ResponsesFetchHostedZone {
    return new Route53ResponsesFetchHostedZone(this, this.__resources, input);
  }

  public fetchHostedZoneCount(): Route53ResponsesFetchHostedZoneCount {
    return new Route53ResponsesFetchHostedZoneCount(this, this.__resources);
  }

  public fetchHostedZoneLimit(input: shapes.Route53GetHostedZoneLimitRequest): Route53ResponsesFetchHostedZoneLimit {
    return new Route53ResponsesFetchHostedZoneLimit(this, this.__resources, input);
  }

  public fetchQueryLoggingConfig(input: shapes.Route53GetQueryLoggingConfigRequest): Route53ResponsesFetchQueryLoggingConfig {
    return new Route53ResponsesFetchQueryLoggingConfig(this, this.__resources, input);
  }

  public fetchReusableDelegationSet(input: shapes.Route53GetReusableDelegationSetRequest): Route53ResponsesFetchReusableDelegationSet {
    return new Route53ResponsesFetchReusableDelegationSet(this, this.__resources, input);
  }

  public fetchReusableDelegationSetLimit(input: shapes.Route53GetReusableDelegationSetLimitRequest): Route53ResponsesFetchReusableDelegationSetLimit {
    return new Route53ResponsesFetchReusableDelegationSetLimit(this, this.__resources, input);
  }

  public fetchTrafficPolicy(input: shapes.Route53GetTrafficPolicyRequest): Route53ResponsesFetchTrafficPolicy {
    return new Route53ResponsesFetchTrafficPolicy(this, this.__resources, input);
  }

  public fetchTrafficPolicyInstance(input: shapes.Route53GetTrafficPolicyInstanceRequest): Route53ResponsesFetchTrafficPolicyInstance {
    return new Route53ResponsesFetchTrafficPolicyInstance(this, this.__resources, input);
  }

  public fetchTrafficPolicyInstanceCount(): Route53ResponsesFetchTrafficPolicyInstanceCount {
    return new Route53ResponsesFetchTrafficPolicyInstanceCount(this, this.__resources);
  }

  public listGeoLocations(input: shapes.Route53ListGeoLocationsRequest): Route53ResponsesListGeoLocations {
    return new Route53ResponsesListGeoLocations(this, this.__resources, input);
  }

  public listHealthChecks(input: shapes.Route53ListHealthChecksRequest): Route53ResponsesListHealthChecks {
    return new Route53ResponsesListHealthChecks(this, this.__resources, input);
  }

  public listHostedZones(input: shapes.Route53ListHostedZonesRequest): Route53ResponsesListHostedZones {
    return new Route53ResponsesListHostedZones(this, this.__resources, input);
  }

  public listHostedZonesByName(input: shapes.Route53ListHostedZonesByNameRequest): Route53ResponsesListHostedZonesByName {
    return new Route53ResponsesListHostedZonesByName(this, this.__resources, input);
  }

  public listHostedZonesByVpc(input: shapes.Route53ListHostedZonesByVpcRequest): Route53ResponsesListHostedZonesByVpc {
    return new Route53ResponsesListHostedZonesByVpc(this, this.__resources, input);
  }

  public listQueryLoggingConfigs(input: shapes.Route53ListQueryLoggingConfigsRequest): Route53ResponsesListQueryLoggingConfigs {
    return new Route53ResponsesListQueryLoggingConfigs(this, this.__resources, input);
  }

  public listResourceRecordSets(input: shapes.Route53ListResourceRecordSetsRequest): Route53ResponsesListResourceRecordSets {
    return new Route53ResponsesListResourceRecordSets(this, this.__resources, input);
  }

  public listReusableDelegationSets(input: shapes.Route53ListReusableDelegationSetsRequest): Route53ResponsesListReusableDelegationSets {
    return new Route53ResponsesListReusableDelegationSets(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.Route53ListTagsForResourceRequest): Route53ResponsesListTagsForResource {
    return new Route53ResponsesListTagsForResource(this, this.__resources, input);
  }

  public listTagsForResources(input: shapes.Route53ListTagsForResourcesRequest): Route53ResponsesListTagsForResources {
    return new Route53ResponsesListTagsForResources(this, this.__resources, input);
  }

  public listTrafficPolicies(input: shapes.Route53ListTrafficPoliciesRequest): Route53ResponsesListTrafficPolicies {
    return new Route53ResponsesListTrafficPolicies(this, this.__resources, input);
  }

  public listTrafficPolicyInstances(input: shapes.Route53ListTrafficPolicyInstancesRequest): Route53ResponsesListTrafficPolicyInstances {
    return new Route53ResponsesListTrafficPolicyInstances(this, this.__resources, input);
  }

  public listTrafficPolicyInstancesByHostedZone(input: shapes.Route53ListTrafficPolicyInstancesByHostedZoneRequest): Route53ResponsesListTrafficPolicyInstancesByHostedZone {
    return new Route53ResponsesListTrafficPolicyInstancesByHostedZone(this, this.__resources, input);
  }

  public listTrafficPolicyInstancesByPolicy(input: shapes.Route53ListTrafficPolicyInstancesByPolicyRequest): Route53ResponsesListTrafficPolicyInstancesByPolicy {
    return new Route53ResponsesListTrafficPolicyInstancesByPolicy(this, this.__resources, input);
  }

  public listTrafficPolicyVersions(input: shapes.Route53ListTrafficPolicyVersionsRequest): Route53ResponsesListTrafficPolicyVersions {
    return new Route53ResponsesListTrafficPolicyVersions(this, this.__resources, input);
  }

  public listVpcAssociationAuthorizations(input: shapes.Route53ListVpcAssociationAuthorizationsRequest): Route53ResponsesListVpcAssociationAuthorizations {
    return new Route53ResponsesListVpcAssociationAuthorizations(this, this.__resources, input);
  }

  public testDnsAnswer(input: shapes.Route53TestDnsAnswerRequest): Route53ResponsesTestDnsAnswer {
    return new Route53ResponsesTestDnsAnswer(this, this.__resources, input);
  }

  public updateHealthCheck(input: shapes.Route53UpdateHealthCheckRequest): Route53ResponsesUpdateHealthCheck {
    return new Route53ResponsesUpdateHealthCheck(this, this.__resources, input);
  }

  public updateHostedZoneComment(input: shapes.Route53UpdateHostedZoneCommentRequest): Route53ResponsesUpdateHostedZoneComment {
    return new Route53ResponsesUpdateHostedZoneComment(this, this.__resources, input);
  }

  public updateTrafficPolicyComment(input: shapes.Route53UpdateTrafficPolicyCommentRequest): Route53ResponsesUpdateTrafficPolicyComment {
    return new Route53ResponsesUpdateTrafficPolicyComment(this, this.__resources, input);
  }

  public updateTrafficPolicyInstance(input: shapes.Route53UpdateTrafficPolicyInstanceRequest): Route53ResponsesUpdateTrafficPolicyInstance {
    return new Route53ResponsesUpdateTrafficPolicyInstance(this, this.__resources, input);
  }

}

export class Route53ResponsesAssociateVpcWithHostedZone {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53AssociateVpcWithHostedZoneRequest) {
  }

  public get changeInfo(): Route53ResponsesAssociateVpcWithHostedZoneChangeInfo {
    return new Route53ResponsesAssociateVpcWithHostedZoneChangeInfo(this.__scope, this.__resources, this.__input);
  }

}

export class Route53ResponsesAssociateVpcWithHostedZoneChangeInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53AssociateVpcWithHostedZoneRequest) {
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
          HostedZoneId: this.__input.hostedZoneId,
          VPC: {
            VPCRegion: this.__input.vpc.vpcRegion,
            VPCId: this.__input.vpc.vpcId,
          },
          Comment: this.__input.comment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateVPCWithHostedZone.ChangeInfo.Id', props);
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
          HostedZoneId: this.__input.hostedZoneId,
          VPC: {
            VPCRegion: this.__input.vpc.vpcRegion,
            VPCId: this.__input.vpc.vpcId,
          },
          Comment: this.__input.comment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateVPCWithHostedZone.ChangeInfo.Status', props);
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
          HostedZoneId: this.__input.hostedZoneId,
          VPC: {
            VPCRegion: this.__input.vpc.vpcRegion,
            VPCId: this.__input.vpc.vpcId,
          },
          Comment: this.__input.comment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateVPCWithHostedZone.ChangeInfo.SubmittedAt', props);
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
          HostedZoneId: this.__input.hostedZoneId,
          VPC: {
            VPCRegion: this.__input.vpc.vpcRegion,
            VPCId: this.__input.vpc.vpcId,
          },
          Comment: this.__input.comment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateVPCWithHostedZone.ChangeInfo.Comment', props);
    return resource.getResponseField('ChangeInfo.Comment') as unknown as string;
  }

}

export class Route53ResponsesChangeResourceRecordSets {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ChangeResourceRecordSetsRequest) {
  }

  public get changeInfo(): Route53ResponsesChangeResourceRecordSetsChangeInfo {
    return new Route53ResponsesChangeResourceRecordSetsChangeInfo(this.__scope, this.__resources, this.__input);
  }

}

export class Route53ResponsesChangeResourceRecordSetsChangeInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ChangeResourceRecordSetsRequest) {
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
          HostedZoneId: this.__input.hostedZoneId,
          ChangeBatch: {
            Comment: this.__input.changeBatch.comment,
            Changes: this.__input.changeBatch.changes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ChangeResourceRecordSets.ChangeInfo.Id', props);
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
          HostedZoneId: this.__input.hostedZoneId,
          ChangeBatch: {
            Comment: this.__input.changeBatch.comment,
            Changes: this.__input.changeBatch.changes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ChangeResourceRecordSets.ChangeInfo.Status', props);
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
          HostedZoneId: this.__input.hostedZoneId,
          ChangeBatch: {
            Comment: this.__input.changeBatch.comment,
            Changes: this.__input.changeBatch.changes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ChangeResourceRecordSets.ChangeInfo.SubmittedAt', props);
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
          HostedZoneId: this.__input.hostedZoneId,
          ChangeBatch: {
            Comment: this.__input.changeBatch.comment,
            Changes: this.__input.changeBatch.changes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ChangeResourceRecordSets.ChangeInfo.Comment', props);
    return resource.getResponseField('ChangeInfo.Comment') as unknown as string;
  }

}

export class Route53ResponsesCreateHealthCheck {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53CreateHealthCheckRequest) {
  }

  public get healthCheck(): Route53ResponsesCreateHealthCheckHealthCheck {
    return new Route53ResponsesCreateHealthCheckHealthCheck(this.__scope, this.__resources, this.__input);
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
          CallerReference: this.__input.callerReference,
          HealthCheckConfig: {
            IPAddress: this.__input.healthCheckConfig.ipAddress,
            Port: this.__input.healthCheckConfig.port,
            Type: this.__input.healthCheckConfig.type,
            ResourcePath: this.__input.healthCheckConfig.resourcePath,
            FullyQualifiedDomainName: this.__input.healthCheckConfig.fullyQualifiedDomainName,
            SearchString: this.__input.healthCheckConfig.searchString,
            RequestInterval: this.__input.healthCheckConfig.requestInterval,
            FailureThreshold: this.__input.healthCheckConfig.failureThreshold,
            MeasureLatency: this.__input.healthCheckConfig.measureLatency,
            Inverted: this.__input.healthCheckConfig.inverted,
            Disabled: this.__input.healthCheckConfig.disabled,
            HealthThreshold: this.__input.healthCheckConfig.healthThreshold,
            ChildHealthChecks: this.__input.healthCheckConfig.childHealthChecks,
            EnableSNI: this.__input.healthCheckConfig.enableSni,
            Regions: this.__input.healthCheckConfig.regions,
            AlarmIdentifier: {
              Region: this.__input.healthCheckConfig.alarmIdentifier?.region,
              Name: this.__input.healthCheckConfig.alarmIdentifier?.name,
            },
            InsufficientDataHealthStatus: this.__input.healthCheckConfig.insufficientDataHealthStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateHealthCheck.Location', props);
    return resource.getResponseField('Location') as unknown as string;
  }

}

export class Route53ResponsesCreateHealthCheckHealthCheck {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53CreateHealthCheckRequest) {
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
          CallerReference: this.__input.callerReference,
          HealthCheckConfig: {
            IPAddress: this.__input.healthCheckConfig.ipAddress,
            Port: this.__input.healthCheckConfig.port,
            Type: this.__input.healthCheckConfig.type,
            ResourcePath: this.__input.healthCheckConfig.resourcePath,
            FullyQualifiedDomainName: this.__input.healthCheckConfig.fullyQualifiedDomainName,
            SearchString: this.__input.healthCheckConfig.searchString,
            RequestInterval: this.__input.healthCheckConfig.requestInterval,
            FailureThreshold: this.__input.healthCheckConfig.failureThreshold,
            MeasureLatency: this.__input.healthCheckConfig.measureLatency,
            Inverted: this.__input.healthCheckConfig.inverted,
            Disabled: this.__input.healthCheckConfig.disabled,
            HealthThreshold: this.__input.healthCheckConfig.healthThreshold,
            ChildHealthChecks: this.__input.healthCheckConfig.childHealthChecks,
            EnableSNI: this.__input.healthCheckConfig.enableSni,
            Regions: this.__input.healthCheckConfig.regions,
            AlarmIdentifier: {
              Region: this.__input.healthCheckConfig.alarmIdentifier?.region,
              Name: this.__input.healthCheckConfig.alarmIdentifier?.name,
            },
            InsufficientDataHealthStatus: this.__input.healthCheckConfig.insufficientDataHealthStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateHealthCheck.HealthCheck.Id', props);
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
          CallerReference: this.__input.callerReference,
          HealthCheckConfig: {
            IPAddress: this.__input.healthCheckConfig.ipAddress,
            Port: this.__input.healthCheckConfig.port,
            Type: this.__input.healthCheckConfig.type,
            ResourcePath: this.__input.healthCheckConfig.resourcePath,
            FullyQualifiedDomainName: this.__input.healthCheckConfig.fullyQualifiedDomainName,
            SearchString: this.__input.healthCheckConfig.searchString,
            RequestInterval: this.__input.healthCheckConfig.requestInterval,
            FailureThreshold: this.__input.healthCheckConfig.failureThreshold,
            MeasureLatency: this.__input.healthCheckConfig.measureLatency,
            Inverted: this.__input.healthCheckConfig.inverted,
            Disabled: this.__input.healthCheckConfig.disabled,
            HealthThreshold: this.__input.healthCheckConfig.healthThreshold,
            ChildHealthChecks: this.__input.healthCheckConfig.childHealthChecks,
            EnableSNI: this.__input.healthCheckConfig.enableSni,
            Regions: this.__input.healthCheckConfig.regions,
            AlarmIdentifier: {
              Region: this.__input.healthCheckConfig.alarmIdentifier?.region,
              Name: this.__input.healthCheckConfig.alarmIdentifier?.name,
            },
            InsufficientDataHealthStatus: this.__input.healthCheckConfig.insufficientDataHealthStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateHealthCheck.HealthCheck.CallerReference', props);
    return resource.getResponseField('HealthCheck.CallerReference') as unknown as string;
  }

  public get linkedService(): Route53ResponsesCreateHealthCheckHealthCheckLinkedService {
    return new Route53ResponsesCreateHealthCheckHealthCheckLinkedService(this.__scope, this.__resources, this.__input);
  }

  public get healthCheckConfig(): Route53ResponsesCreateHealthCheckHealthCheckHealthCheckConfig {
    return new Route53ResponsesCreateHealthCheckHealthCheckHealthCheckConfig(this.__scope, this.__resources, this.__input);
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
          CallerReference: this.__input.callerReference,
          HealthCheckConfig: {
            IPAddress: this.__input.healthCheckConfig.ipAddress,
            Port: this.__input.healthCheckConfig.port,
            Type: this.__input.healthCheckConfig.type,
            ResourcePath: this.__input.healthCheckConfig.resourcePath,
            FullyQualifiedDomainName: this.__input.healthCheckConfig.fullyQualifiedDomainName,
            SearchString: this.__input.healthCheckConfig.searchString,
            RequestInterval: this.__input.healthCheckConfig.requestInterval,
            FailureThreshold: this.__input.healthCheckConfig.failureThreshold,
            MeasureLatency: this.__input.healthCheckConfig.measureLatency,
            Inverted: this.__input.healthCheckConfig.inverted,
            Disabled: this.__input.healthCheckConfig.disabled,
            HealthThreshold: this.__input.healthCheckConfig.healthThreshold,
            ChildHealthChecks: this.__input.healthCheckConfig.childHealthChecks,
            EnableSNI: this.__input.healthCheckConfig.enableSni,
            Regions: this.__input.healthCheckConfig.regions,
            AlarmIdentifier: {
              Region: this.__input.healthCheckConfig.alarmIdentifier?.region,
              Name: this.__input.healthCheckConfig.alarmIdentifier?.name,
            },
            InsufficientDataHealthStatus: this.__input.healthCheckConfig.insufficientDataHealthStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateHealthCheck.HealthCheck.HealthCheckVersion', props);
    return resource.getResponseField('HealthCheck.HealthCheckVersion') as unknown as number;
  }

  public get cloudWatchAlarmConfiguration(): Route53ResponsesCreateHealthCheckHealthCheckCloudWatchAlarmConfiguration {
    return new Route53ResponsesCreateHealthCheckHealthCheckCloudWatchAlarmConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class Route53ResponsesCreateHealthCheckHealthCheckLinkedService {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53CreateHealthCheckRequest) {
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
          CallerReference: this.__input.callerReference,
          HealthCheckConfig: {
            IPAddress: this.__input.healthCheckConfig.ipAddress,
            Port: this.__input.healthCheckConfig.port,
            Type: this.__input.healthCheckConfig.type,
            ResourcePath: this.__input.healthCheckConfig.resourcePath,
            FullyQualifiedDomainName: this.__input.healthCheckConfig.fullyQualifiedDomainName,
            SearchString: this.__input.healthCheckConfig.searchString,
            RequestInterval: this.__input.healthCheckConfig.requestInterval,
            FailureThreshold: this.__input.healthCheckConfig.failureThreshold,
            MeasureLatency: this.__input.healthCheckConfig.measureLatency,
            Inverted: this.__input.healthCheckConfig.inverted,
            Disabled: this.__input.healthCheckConfig.disabled,
            HealthThreshold: this.__input.healthCheckConfig.healthThreshold,
            ChildHealthChecks: this.__input.healthCheckConfig.childHealthChecks,
            EnableSNI: this.__input.healthCheckConfig.enableSni,
            Regions: this.__input.healthCheckConfig.regions,
            AlarmIdentifier: {
              Region: this.__input.healthCheckConfig.alarmIdentifier?.region,
              Name: this.__input.healthCheckConfig.alarmIdentifier?.name,
            },
            InsufficientDataHealthStatus: this.__input.healthCheckConfig.insufficientDataHealthStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateHealthCheck.HealthCheck.LinkedService.ServicePrincipal', props);
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
          CallerReference: this.__input.callerReference,
          HealthCheckConfig: {
            IPAddress: this.__input.healthCheckConfig.ipAddress,
            Port: this.__input.healthCheckConfig.port,
            Type: this.__input.healthCheckConfig.type,
            ResourcePath: this.__input.healthCheckConfig.resourcePath,
            FullyQualifiedDomainName: this.__input.healthCheckConfig.fullyQualifiedDomainName,
            SearchString: this.__input.healthCheckConfig.searchString,
            RequestInterval: this.__input.healthCheckConfig.requestInterval,
            FailureThreshold: this.__input.healthCheckConfig.failureThreshold,
            MeasureLatency: this.__input.healthCheckConfig.measureLatency,
            Inverted: this.__input.healthCheckConfig.inverted,
            Disabled: this.__input.healthCheckConfig.disabled,
            HealthThreshold: this.__input.healthCheckConfig.healthThreshold,
            ChildHealthChecks: this.__input.healthCheckConfig.childHealthChecks,
            EnableSNI: this.__input.healthCheckConfig.enableSni,
            Regions: this.__input.healthCheckConfig.regions,
            AlarmIdentifier: {
              Region: this.__input.healthCheckConfig.alarmIdentifier?.region,
              Name: this.__input.healthCheckConfig.alarmIdentifier?.name,
            },
            InsufficientDataHealthStatus: this.__input.healthCheckConfig.insufficientDataHealthStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateHealthCheck.HealthCheck.LinkedService.Description', props);
    return resource.getResponseField('HealthCheck.LinkedService.Description') as unknown as string;
  }

}

export class Route53ResponsesCreateHealthCheckHealthCheckHealthCheckConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53CreateHealthCheckRequest) {
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
          CallerReference: this.__input.callerReference,
          HealthCheckConfig: {
            IPAddress: this.__input.healthCheckConfig.ipAddress,
            Port: this.__input.healthCheckConfig.port,
            Type: this.__input.healthCheckConfig.type,
            ResourcePath: this.__input.healthCheckConfig.resourcePath,
            FullyQualifiedDomainName: this.__input.healthCheckConfig.fullyQualifiedDomainName,
            SearchString: this.__input.healthCheckConfig.searchString,
            RequestInterval: this.__input.healthCheckConfig.requestInterval,
            FailureThreshold: this.__input.healthCheckConfig.failureThreshold,
            MeasureLatency: this.__input.healthCheckConfig.measureLatency,
            Inverted: this.__input.healthCheckConfig.inverted,
            Disabled: this.__input.healthCheckConfig.disabled,
            HealthThreshold: this.__input.healthCheckConfig.healthThreshold,
            ChildHealthChecks: this.__input.healthCheckConfig.childHealthChecks,
            EnableSNI: this.__input.healthCheckConfig.enableSni,
            Regions: this.__input.healthCheckConfig.regions,
            AlarmIdentifier: {
              Region: this.__input.healthCheckConfig.alarmIdentifier?.region,
              Name: this.__input.healthCheckConfig.alarmIdentifier?.name,
            },
            InsufficientDataHealthStatus: this.__input.healthCheckConfig.insufficientDataHealthStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateHealthCheck.HealthCheck.HealthCheckConfig.IPAddress', props);
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
          CallerReference: this.__input.callerReference,
          HealthCheckConfig: {
            IPAddress: this.__input.healthCheckConfig.ipAddress,
            Port: this.__input.healthCheckConfig.port,
            Type: this.__input.healthCheckConfig.type,
            ResourcePath: this.__input.healthCheckConfig.resourcePath,
            FullyQualifiedDomainName: this.__input.healthCheckConfig.fullyQualifiedDomainName,
            SearchString: this.__input.healthCheckConfig.searchString,
            RequestInterval: this.__input.healthCheckConfig.requestInterval,
            FailureThreshold: this.__input.healthCheckConfig.failureThreshold,
            MeasureLatency: this.__input.healthCheckConfig.measureLatency,
            Inverted: this.__input.healthCheckConfig.inverted,
            Disabled: this.__input.healthCheckConfig.disabled,
            HealthThreshold: this.__input.healthCheckConfig.healthThreshold,
            ChildHealthChecks: this.__input.healthCheckConfig.childHealthChecks,
            EnableSNI: this.__input.healthCheckConfig.enableSni,
            Regions: this.__input.healthCheckConfig.regions,
            AlarmIdentifier: {
              Region: this.__input.healthCheckConfig.alarmIdentifier?.region,
              Name: this.__input.healthCheckConfig.alarmIdentifier?.name,
            },
            InsufficientDataHealthStatus: this.__input.healthCheckConfig.insufficientDataHealthStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateHealthCheck.HealthCheck.HealthCheckConfig.Port', props);
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
          CallerReference: this.__input.callerReference,
          HealthCheckConfig: {
            IPAddress: this.__input.healthCheckConfig.ipAddress,
            Port: this.__input.healthCheckConfig.port,
            Type: this.__input.healthCheckConfig.type,
            ResourcePath: this.__input.healthCheckConfig.resourcePath,
            FullyQualifiedDomainName: this.__input.healthCheckConfig.fullyQualifiedDomainName,
            SearchString: this.__input.healthCheckConfig.searchString,
            RequestInterval: this.__input.healthCheckConfig.requestInterval,
            FailureThreshold: this.__input.healthCheckConfig.failureThreshold,
            MeasureLatency: this.__input.healthCheckConfig.measureLatency,
            Inverted: this.__input.healthCheckConfig.inverted,
            Disabled: this.__input.healthCheckConfig.disabled,
            HealthThreshold: this.__input.healthCheckConfig.healthThreshold,
            ChildHealthChecks: this.__input.healthCheckConfig.childHealthChecks,
            EnableSNI: this.__input.healthCheckConfig.enableSni,
            Regions: this.__input.healthCheckConfig.regions,
            AlarmIdentifier: {
              Region: this.__input.healthCheckConfig.alarmIdentifier?.region,
              Name: this.__input.healthCheckConfig.alarmIdentifier?.name,
            },
            InsufficientDataHealthStatus: this.__input.healthCheckConfig.insufficientDataHealthStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateHealthCheck.HealthCheck.HealthCheckConfig.Type', props);
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
          CallerReference: this.__input.callerReference,
          HealthCheckConfig: {
            IPAddress: this.__input.healthCheckConfig.ipAddress,
            Port: this.__input.healthCheckConfig.port,
            Type: this.__input.healthCheckConfig.type,
            ResourcePath: this.__input.healthCheckConfig.resourcePath,
            FullyQualifiedDomainName: this.__input.healthCheckConfig.fullyQualifiedDomainName,
            SearchString: this.__input.healthCheckConfig.searchString,
            RequestInterval: this.__input.healthCheckConfig.requestInterval,
            FailureThreshold: this.__input.healthCheckConfig.failureThreshold,
            MeasureLatency: this.__input.healthCheckConfig.measureLatency,
            Inverted: this.__input.healthCheckConfig.inverted,
            Disabled: this.__input.healthCheckConfig.disabled,
            HealthThreshold: this.__input.healthCheckConfig.healthThreshold,
            ChildHealthChecks: this.__input.healthCheckConfig.childHealthChecks,
            EnableSNI: this.__input.healthCheckConfig.enableSni,
            Regions: this.__input.healthCheckConfig.regions,
            AlarmIdentifier: {
              Region: this.__input.healthCheckConfig.alarmIdentifier?.region,
              Name: this.__input.healthCheckConfig.alarmIdentifier?.name,
            },
            InsufficientDataHealthStatus: this.__input.healthCheckConfig.insufficientDataHealthStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateHealthCheck.HealthCheck.HealthCheckConfig.ResourcePath', props);
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
          CallerReference: this.__input.callerReference,
          HealthCheckConfig: {
            IPAddress: this.__input.healthCheckConfig.ipAddress,
            Port: this.__input.healthCheckConfig.port,
            Type: this.__input.healthCheckConfig.type,
            ResourcePath: this.__input.healthCheckConfig.resourcePath,
            FullyQualifiedDomainName: this.__input.healthCheckConfig.fullyQualifiedDomainName,
            SearchString: this.__input.healthCheckConfig.searchString,
            RequestInterval: this.__input.healthCheckConfig.requestInterval,
            FailureThreshold: this.__input.healthCheckConfig.failureThreshold,
            MeasureLatency: this.__input.healthCheckConfig.measureLatency,
            Inverted: this.__input.healthCheckConfig.inverted,
            Disabled: this.__input.healthCheckConfig.disabled,
            HealthThreshold: this.__input.healthCheckConfig.healthThreshold,
            ChildHealthChecks: this.__input.healthCheckConfig.childHealthChecks,
            EnableSNI: this.__input.healthCheckConfig.enableSni,
            Regions: this.__input.healthCheckConfig.regions,
            AlarmIdentifier: {
              Region: this.__input.healthCheckConfig.alarmIdentifier?.region,
              Name: this.__input.healthCheckConfig.alarmIdentifier?.name,
            },
            InsufficientDataHealthStatus: this.__input.healthCheckConfig.insufficientDataHealthStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateHealthCheck.HealthCheck.HealthCheckConfig.FullyQualifiedDomainName', props);
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
          CallerReference: this.__input.callerReference,
          HealthCheckConfig: {
            IPAddress: this.__input.healthCheckConfig.ipAddress,
            Port: this.__input.healthCheckConfig.port,
            Type: this.__input.healthCheckConfig.type,
            ResourcePath: this.__input.healthCheckConfig.resourcePath,
            FullyQualifiedDomainName: this.__input.healthCheckConfig.fullyQualifiedDomainName,
            SearchString: this.__input.healthCheckConfig.searchString,
            RequestInterval: this.__input.healthCheckConfig.requestInterval,
            FailureThreshold: this.__input.healthCheckConfig.failureThreshold,
            MeasureLatency: this.__input.healthCheckConfig.measureLatency,
            Inverted: this.__input.healthCheckConfig.inverted,
            Disabled: this.__input.healthCheckConfig.disabled,
            HealthThreshold: this.__input.healthCheckConfig.healthThreshold,
            ChildHealthChecks: this.__input.healthCheckConfig.childHealthChecks,
            EnableSNI: this.__input.healthCheckConfig.enableSni,
            Regions: this.__input.healthCheckConfig.regions,
            AlarmIdentifier: {
              Region: this.__input.healthCheckConfig.alarmIdentifier?.region,
              Name: this.__input.healthCheckConfig.alarmIdentifier?.name,
            },
            InsufficientDataHealthStatus: this.__input.healthCheckConfig.insufficientDataHealthStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateHealthCheck.HealthCheck.HealthCheckConfig.SearchString', props);
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
          CallerReference: this.__input.callerReference,
          HealthCheckConfig: {
            IPAddress: this.__input.healthCheckConfig.ipAddress,
            Port: this.__input.healthCheckConfig.port,
            Type: this.__input.healthCheckConfig.type,
            ResourcePath: this.__input.healthCheckConfig.resourcePath,
            FullyQualifiedDomainName: this.__input.healthCheckConfig.fullyQualifiedDomainName,
            SearchString: this.__input.healthCheckConfig.searchString,
            RequestInterval: this.__input.healthCheckConfig.requestInterval,
            FailureThreshold: this.__input.healthCheckConfig.failureThreshold,
            MeasureLatency: this.__input.healthCheckConfig.measureLatency,
            Inverted: this.__input.healthCheckConfig.inverted,
            Disabled: this.__input.healthCheckConfig.disabled,
            HealthThreshold: this.__input.healthCheckConfig.healthThreshold,
            ChildHealthChecks: this.__input.healthCheckConfig.childHealthChecks,
            EnableSNI: this.__input.healthCheckConfig.enableSni,
            Regions: this.__input.healthCheckConfig.regions,
            AlarmIdentifier: {
              Region: this.__input.healthCheckConfig.alarmIdentifier?.region,
              Name: this.__input.healthCheckConfig.alarmIdentifier?.name,
            },
            InsufficientDataHealthStatus: this.__input.healthCheckConfig.insufficientDataHealthStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateHealthCheck.HealthCheck.HealthCheckConfig.RequestInterval', props);
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
          CallerReference: this.__input.callerReference,
          HealthCheckConfig: {
            IPAddress: this.__input.healthCheckConfig.ipAddress,
            Port: this.__input.healthCheckConfig.port,
            Type: this.__input.healthCheckConfig.type,
            ResourcePath: this.__input.healthCheckConfig.resourcePath,
            FullyQualifiedDomainName: this.__input.healthCheckConfig.fullyQualifiedDomainName,
            SearchString: this.__input.healthCheckConfig.searchString,
            RequestInterval: this.__input.healthCheckConfig.requestInterval,
            FailureThreshold: this.__input.healthCheckConfig.failureThreshold,
            MeasureLatency: this.__input.healthCheckConfig.measureLatency,
            Inverted: this.__input.healthCheckConfig.inverted,
            Disabled: this.__input.healthCheckConfig.disabled,
            HealthThreshold: this.__input.healthCheckConfig.healthThreshold,
            ChildHealthChecks: this.__input.healthCheckConfig.childHealthChecks,
            EnableSNI: this.__input.healthCheckConfig.enableSni,
            Regions: this.__input.healthCheckConfig.regions,
            AlarmIdentifier: {
              Region: this.__input.healthCheckConfig.alarmIdentifier?.region,
              Name: this.__input.healthCheckConfig.alarmIdentifier?.name,
            },
            InsufficientDataHealthStatus: this.__input.healthCheckConfig.insufficientDataHealthStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateHealthCheck.HealthCheck.HealthCheckConfig.FailureThreshold', props);
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
          CallerReference: this.__input.callerReference,
          HealthCheckConfig: {
            IPAddress: this.__input.healthCheckConfig.ipAddress,
            Port: this.__input.healthCheckConfig.port,
            Type: this.__input.healthCheckConfig.type,
            ResourcePath: this.__input.healthCheckConfig.resourcePath,
            FullyQualifiedDomainName: this.__input.healthCheckConfig.fullyQualifiedDomainName,
            SearchString: this.__input.healthCheckConfig.searchString,
            RequestInterval: this.__input.healthCheckConfig.requestInterval,
            FailureThreshold: this.__input.healthCheckConfig.failureThreshold,
            MeasureLatency: this.__input.healthCheckConfig.measureLatency,
            Inverted: this.__input.healthCheckConfig.inverted,
            Disabled: this.__input.healthCheckConfig.disabled,
            HealthThreshold: this.__input.healthCheckConfig.healthThreshold,
            ChildHealthChecks: this.__input.healthCheckConfig.childHealthChecks,
            EnableSNI: this.__input.healthCheckConfig.enableSni,
            Regions: this.__input.healthCheckConfig.regions,
            AlarmIdentifier: {
              Region: this.__input.healthCheckConfig.alarmIdentifier?.region,
              Name: this.__input.healthCheckConfig.alarmIdentifier?.name,
            },
            InsufficientDataHealthStatus: this.__input.healthCheckConfig.insufficientDataHealthStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateHealthCheck.HealthCheck.HealthCheckConfig.MeasureLatency', props);
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
          CallerReference: this.__input.callerReference,
          HealthCheckConfig: {
            IPAddress: this.__input.healthCheckConfig.ipAddress,
            Port: this.__input.healthCheckConfig.port,
            Type: this.__input.healthCheckConfig.type,
            ResourcePath: this.__input.healthCheckConfig.resourcePath,
            FullyQualifiedDomainName: this.__input.healthCheckConfig.fullyQualifiedDomainName,
            SearchString: this.__input.healthCheckConfig.searchString,
            RequestInterval: this.__input.healthCheckConfig.requestInterval,
            FailureThreshold: this.__input.healthCheckConfig.failureThreshold,
            MeasureLatency: this.__input.healthCheckConfig.measureLatency,
            Inverted: this.__input.healthCheckConfig.inverted,
            Disabled: this.__input.healthCheckConfig.disabled,
            HealthThreshold: this.__input.healthCheckConfig.healthThreshold,
            ChildHealthChecks: this.__input.healthCheckConfig.childHealthChecks,
            EnableSNI: this.__input.healthCheckConfig.enableSni,
            Regions: this.__input.healthCheckConfig.regions,
            AlarmIdentifier: {
              Region: this.__input.healthCheckConfig.alarmIdentifier?.region,
              Name: this.__input.healthCheckConfig.alarmIdentifier?.name,
            },
            InsufficientDataHealthStatus: this.__input.healthCheckConfig.insufficientDataHealthStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateHealthCheck.HealthCheck.HealthCheckConfig.Inverted', props);
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
          CallerReference: this.__input.callerReference,
          HealthCheckConfig: {
            IPAddress: this.__input.healthCheckConfig.ipAddress,
            Port: this.__input.healthCheckConfig.port,
            Type: this.__input.healthCheckConfig.type,
            ResourcePath: this.__input.healthCheckConfig.resourcePath,
            FullyQualifiedDomainName: this.__input.healthCheckConfig.fullyQualifiedDomainName,
            SearchString: this.__input.healthCheckConfig.searchString,
            RequestInterval: this.__input.healthCheckConfig.requestInterval,
            FailureThreshold: this.__input.healthCheckConfig.failureThreshold,
            MeasureLatency: this.__input.healthCheckConfig.measureLatency,
            Inverted: this.__input.healthCheckConfig.inverted,
            Disabled: this.__input.healthCheckConfig.disabled,
            HealthThreshold: this.__input.healthCheckConfig.healthThreshold,
            ChildHealthChecks: this.__input.healthCheckConfig.childHealthChecks,
            EnableSNI: this.__input.healthCheckConfig.enableSni,
            Regions: this.__input.healthCheckConfig.regions,
            AlarmIdentifier: {
              Region: this.__input.healthCheckConfig.alarmIdentifier?.region,
              Name: this.__input.healthCheckConfig.alarmIdentifier?.name,
            },
            InsufficientDataHealthStatus: this.__input.healthCheckConfig.insufficientDataHealthStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateHealthCheck.HealthCheck.HealthCheckConfig.Disabled', props);
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
          CallerReference: this.__input.callerReference,
          HealthCheckConfig: {
            IPAddress: this.__input.healthCheckConfig.ipAddress,
            Port: this.__input.healthCheckConfig.port,
            Type: this.__input.healthCheckConfig.type,
            ResourcePath: this.__input.healthCheckConfig.resourcePath,
            FullyQualifiedDomainName: this.__input.healthCheckConfig.fullyQualifiedDomainName,
            SearchString: this.__input.healthCheckConfig.searchString,
            RequestInterval: this.__input.healthCheckConfig.requestInterval,
            FailureThreshold: this.__input.healthCheckConfig.failureThreshold,
            MeasureLatency: this.__input.healthCheckConfig.measureLatency,
            Inverted: this.__input.healthCheckConfig.inverted,
            Disabled: this.__input.healthCheckConfig.disabled,
            HealthThreshold: this.__input.healthCheckConfig.healthThreshold,
            ChildHealthChecks: this.__input.healthCheckConfig.childHealthChecks,
            EnableSNI: this.__input.healthCheckConfig.enableSni,
            Regions: this.__input.healthCheckConfig.regions,
            AlarmIdentifier: {
              Region: this.__input.healthCheckConfig.alarmIdentifier?.region,
              Name: this.__input.healthCheckConfig.alarmIdentifier?.name,
            },
            InsufficientDataHealthStatus: this.__input.healthCheckConfig.insufficientDataHealthStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateHealthCheck.HealthCheck.HealthCheckConfig.HealthThreshold', props);
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
          CallerReference: this.__input.callerReference,
          HealthCheckConfig: {
            IPAddress: this.__input.healthCheckConfig.ipAddress,
            Port: this.__input.healthCheckConfig.port,
            Type: this.__input.healthCheckConfig.type,
            ResourcePath: this.__input.healthCheckConfig.resourcePath,
            FullyQualifiedDomainName: this.__input.healthCheckConfig.fullyQualifiedDomainName,
            SearchString: this.__input.healthCheckConfig.searchString,
            RequestInterval: this.__input.healthCheckConfig.requestInterval,
            FailureThreshold: this.__input.healthCheckConfig.failureThreshold,
            MeasureLatency: this.__input.healthCheckConfig.measureLatency,
            Inverted: this.__input.healthCheckConfig.inverted,
            Disabled: this.__input.healthCheckConfig.disabled,
            HealthThreshold: this.__input.healthCheckConfig.healthThreshold,
            ChildHealthChecks: this.__input.healthCheckConfig.childHealthChecks,
            EnableSNI: this.__input.healthCheckConfig.enableSni,
            Regions: this.__input.healthCheckConfig.regions,
            AlarmIdentifier: {
              Region: this.__input.healthCheckConfig.alarmIdentifier?.region,
              Name: this.__input.healthCheckConfig.alarmIdentifier?.name,
            },
            InsufficientDataHealthStatus: this.__input.healthCheckConfig.insufficientDataHealthStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateHealthCheck.HealthCheck.HealthCheckConfig.ChildHealthChecks', props);
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
          CallerReference: this.__input.callerReference,
          HealthCheckConfig: {
            IPAddress: this.__input.healthCheckConfig.ipAddress,
            Port: this.__input.healthCheckConfig.port,
            Type: this.__input.healthCheckConfig.type,
            ResourcePath: this.__input.healthCheckConfig.resourcePath,
            FullyQualifiedDomainName: this.__input.healthCheckConfig.fullyQualifiedDomainName,
            SearchString: this.__input.healthCheckConfig.searchString,
            RequestInterval: this.__input.healthCheckConfig.requestInterval,
            FailureThreshold: this.__input.healthCheckConfig.failureThreshold,
            MeasureLatency: this.__input.healthCheckConfig.measureLatency,
            Inverted: this.__input.healthCheckConfig.inverted,
            Disabled: this.__input.healthCheckConfig.disabled,
            HealthThreshold: this.__input.healthCheckConfig.healthThreshold,
            ChildHealthChecks: this.__input.healthCheckConfig.childHealthChecks,
            EnableSNI: this.__input.healthCheckConfig.enableSni,
            Regions: this.__input.healthCheckConfig.regions,
            AlarmIdentifier: {
              Region: this.__input.healthCheckConfig.alarmIdentifier?.region,
              Name: this.__input.healthCheckConfig.alarmIdentifier?.name,
            },
            InsufficientDataHealthStatus: this.__input.healthCheckConfig.insufficientDataHealthStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateHealthCheck.HealthCheck.HealthCheckConfig.EnableSNI', props);
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
          CallerReference: this.__input.callerReference,
          HealthCheckConfig: {
            IPAddress: this.__input.healthCheckConfig.ipAddress,
            Port: this.__input.healthCheckConfig.port,
            Type: this.__input.healthCheckConfig.type,
            ResourcePath: this.__input.healthCheckConfig.resourcePath,
            FullyQualifiedDomainName: this.__input.healthCheckConfig.fullyQualifiedDomainName,
            SearchString: this.__input.healthCheckConfig.searchString,
            RequestInterval: this.__input.healthCheckConfig.requestInterval,
            FailureThreshold: this.__input.healthCheckConfig.failureThreshold,
            MeasureLatency: this.__input.healthCheckConfig.measureLatency,
            Inverted: this.__input.healthCheckConfig.inverted,
            Disabled: this.__input.healthCheckConfig.disabled,
            HealthThreshold: this.__input.healthCheckConfig.healthThreshold,
            ChildHealthChecks: this.__input.healthCheckConfig.childHealthChecks,
            EnableSNI: this.__input.healthCheckConfig.enableSni,
            Regions: this.__input.healthCheckConfig.regions,
            AlarmIdentifier: {
              Region: this.__input.healthCheckConfig.alarmIdentifier?.region,
              Name: this.__input.healthCheckConfig.alarmIdentifier?.name,
            },
            InsufficientDataHealthStatus: this.__input.healthCheckConfig.insufficientDataHealthStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateHealthCheck.HealthCheck.HealthCheckConfig.Regions', props);
    return resource.getResponseField('HealthCheck.HealthCheckConfig.Regions') as unknown as string[];
  }

  public get alarmIdentifier(): Route53ResponsesCreateHealthCheckHealthCheckHealthCheckConfigAlarmIdentifier {
    return new Route53ResponsesCreateHealthCheckHealthCheckHealthCheckConfigAlarmIdentifier(this.__scope, this.__resources, this.__input);
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
          CallerReference: this.__input.callerReference,
          HealthCheckConfig: {
            IPAddress: this.__input.healthCheckConfig.ipAddress,
            Port: this.__input.healthCheckConfig.port,
            Type: this.__input.healthCheckConfig.type,
            ResourcePath: this.__input.healthCheckConfig.resourcePath,
            FullyQualifiedDomainName: this.__input.healthCheckConfig.fullyQualifiedDomainName,
            SearchString: this.__input.healthCheckConfig.searchString,
            RequestInterval: this.__input.healthCheckConfig.requestInterval,
            FailureThreshold: this.__input.healthCheckConfig.failureThreshold,
            MeasureLatency: this.__input.healthCheckConfig.measureLatency,
            Inverted: this.__input.healthCheckConfig.inverted,
            Disabled: this.__input.healthCheckConfig.disabled,
            HealthThreshold: this.__input.healthCheckConfig.healthThreshold,
            ChildHealthChecks: this.__input.healthCheckConfig.childHealthChecks,
            EnableSNI: this.__input.healthCheckConfig.enableSni,
            Regions: this.__input.healthCheckConfig.regions,
            AlarmIdentifier: {
              Region: this.__input.healthCheckConfig.alarmIdentifier?.region,
              Name: this.__input.healthCheckConfig.alarmIdentifier?.name,
            },
            InsufficientDataHealthStatus: this.__input.healthCheckConfig.insufficientDataHealthStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateHealthCheck.HealthCheck.HealthCheckConfig.InsufficientDataHealthStatus', props);
    return resource.getResponseField('HealthCheck.HealthCheckConfig.InsufficientDataHealthStatus') as unknown as string;
  }

}

export class Route53ResponsesCreateHealthCheckHealthCheckHealthCheckConfigAlarmIdentifier {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53CreateHealthCheckRequest) {
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
          CallerReference: this.__input.callerReference,
          HealthCheckConfig: {
            IPAddress: this.__input.healthCheckConfig.ipAddress,
            Port: this.__input.healthCheckConfig.port,
            Type: this.__input.healthCheckConfig.type,
            ResourcePath: this.__input.healthCheckConfig.resourcePath,
            FullyQualifiedDomainName: this.__input.healthCheckConfig.fullyQualifiedDomainName,
            SearchString: this.__input.healthCheckConfig.searchString,
            RequestInterval: this.__input.healthCheckConfig.requestInterval,
            FailureThreshold: this.__input.healthCheckConfig.failureThreshold,
            MeasureLatency: this.__input.healthCheckConfig.measureLatency,
            Inverted: this.__input.healthCheckConfig.inverted,
            Disabled: this.__input.healthCheckConfig.disabled,
            HealthThreshold: this.__input.healthCheckConfig.healthThreshold,
            ChildHealthChecks: this.__input.healthCheckConfig.childHealthChecks,
            EnableSNI: this.__input.healthCheckConfig.enableSni,
            Regions: this.__input.healthCheckConfig.regions,
            AlarmIdentifier: {
              Region: this.__input.healthCheckConfig.alarmIdentifier?.region,
              Name: this.__input.healthCheckConfig.alarmIdentifier?.name,
            },
            InsufficientDataHealthStatus: this.__input.healthCheckConfig.insufficientDataHealthStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateHealthCheck.HealthCheck.HealthCheckConfig.AlarmIdentifier.Region', props);
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
          CallerReference: this.__input.callerReference,
          HealthCheckConfig: {
            IPAddress: this.__input.healthCheckConfig.ipAddress,
            Port: this.__input.healthCheckConfig.port,
            Type: this.__input.healthCheckConfig.type,
            ResourcePath: this.__input.healthCheckConfig.resourcePath,
            FullyQualifiedDomainName: this.__input.healthCheckConfig.fullyQualifiedDomainName,
            SearchString: this.__input.healthCheckConfig.searchString,
            RequestInterval: this.__input.healthCheckConfig.requestInterval,
            FailureThreshold: this.__input.healthCheckConfig.failureThreshold,
            MeasureLatency: this.__input.healthCheckConfig.measureLatency,
            Inverted: this.__input.healthCheckConfig.inverted,
            Disabled: this.__input.healthCheckConfig.disabled,
            HealthThreshold: this.__input.healthCheckConfig.healthThreshold,
            ChildHealthChecks: this.__input.healthCheckConfig.childHealthChecks,
            EnableSNI: this.__input.healthCheckConfig.enableSni,
            Regions: this.__input.healthCheckConfig.regions,
            AlarmIdentifier: {
              Region: this.__input.healthCheckConfig.alarmIdentifier?.region,
              Name: this.__input.healthCheckConfig.alarmIdentifier?.name,
            },
            InsufficientDataHealthStatus: this.__input.healthCheckConfig.insufficientDataHealthStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateHealthCheck.HealthCheck.HealthCheckConfig.AlarmIdentifier.Name', props);
    return resource.getResponseField('HealthCheck.HealthCheckConfig.AlarmIdentifier.Name') as unknown as string;
  }

}

export class Route53ResponsesCreateHealthCheckHealthCheckCloudWatchAlarmConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53CreateHealthCheckRequest) {
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
          CallerReference: this.__input.callerReference,
          HealthCheckConfig: {
            IPAddress: this.__input.healthCheckConfig.ipAddress,
            Port: this.__input.healthCheckConfig.port,
            Type: this.__input.healthCheckConfig.type,
            ResourcePath: this.__input.healthCheckConfig.resourcePath,
            FullyQualifiedDomainName: this.__input.healthCheckConfig.fullyQualifiedDomainName,
            SearchString: this.__input.healthCheckConfig.searchString,
            RequestInterval: this.__input.healthCheckConfig.requestInterval,
            FailureThreshold: this.__input.healthCheckConfig.failureThreshold,
            MeasureLatency: this.__input.healthCheckConfig.measureLatency,
            Inverted: this.__input.healthCheckConfig.inverted,
            Disabled: this.__input.healthCheckConfig.disabled,
            HealthThreshold: this.__input.healthCheckConfig.healthThreshold,
            ChildHealthChecks: this.__input.healthCheckConfig.childHealthChecks,
            EnableSNI: this.__input.healthCheckConfig.enableSni,
            Regions: this.__input.healthCheckConfig.regions,
            AlarmIdentifier: {
              Region: this.__input.healthCheckConfig.alarmIdentifier?.region,
              Name: this.__input.healthCheckConfig.alarmIdentifier?.name,
            },
            InsufficientDataHealthStatus: this.__input.healthCheckConfig.insufficientDataHealthStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateHealthCheck.HealthCheck.CloudWatchAlarmConfiguration.EvaluationPeriods', props);
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
          CallerReference: this.__input.callerReference,
          HealthCheckConfig: {
            IPAddress: this.__input.healthCheckConfig.ipAddress,
            Port: this.__input.healthCheckConfig.port,
            Type: this.__input.healthCheckConfig.type,
            ResourcePath: this.__input.healthCheckConfig.resourcePath,
            FullyQualifiedDomainName: this.__input.healthCheckConfig.fullyQualifiedDomainName,
            SearchString: this.__input.healthCheckConfig.searchString,
            RequestInterval: this.__input.healthCheckConfig.requestInterval,
            FailureThreshold: this.__input.healthCheckConfig.failureThreshold,
            MeasureLatency: this.__input.healthCheckConfig.measureLatency,
            Inverted: this.__input.healthCheckConfig.inverted,
            Disabled: this.__input.healthCheckConfig.disabled,
            HealthThreshold: this.__input.healthCheckConfig.healthThreshold,
            ChildHealthChecks: this.__input.healthCheckConfig.childHealthChecks,
            EnableSNI: this.__input.healthCheckConfig.enableSni,
            Regions: this.__input.healthCheckConfig.regions,
            AlarmIdentifier: {
              Region: this.__input.healthCheckConfig.alarmIdentifier?.region,
              Name: this.__input.healthCheckConfig.alarmIdentifier?.name,
            },
            InsufficientDataHealthStatus: this.__input.healthCheckConfig.insufficientDataHealthStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateHealthCheck.HealthCheck.CloudWatchAlarmConfiguration.Threshold', props);
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
          CallerReference: this.__input.callerReference,
          HealthCheckConfig: {
            IPAddress: this.__input.healthCheckConfig.ipAddress,
            Port: this.__input.healthCheckConfig.port,
            Type: this.__input.healthCheckConfig.type,
            ResourcePath: this.__input.healthCheckConfig.resourcePath,
            FullyQualifiedDomainName: this.__input.healthCheckConfig.fullyQualifiedDomainName,
            SearchString: this.__input.healthCheckConfig.searchString,
            RequestInterval: this.__input.healthCheckConfig.requestInterval,
            FailureThreshold: this.__input.healthCheckConfig.failureThreshold,
            MeasureLatency: this.__input.healthCheckConfig.measureLatency,
            Inverted: this.__input.healthCheckConfig.inverted,
            Disabled: this.__input.healthCheckConfig.disabled,
            HealthThreshold: this.__input.healthCheckConfig.healthThreshold,
            ChildHealthChecks: this.__input.healthCheckConfig.childHealthChecks,
            EnableSNI: this.__input.healthCheckConfig.enableSni,
            Regions: this.__input.healthCheckConfig.regions,
            AlarmIdentifier: {
              Region: this.__input.healthCheckConfig.alarmIdentifier?.region,
              Name: this.__input.healthCheckConfig.alarmIdentifier?.name,
            },
            InsufficientDataHealthStatus: this.__input.healthCheckConfig.insufficientDataHealthStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateHealthCheck.HealthCheck.CloudWatchAlarmConfiguration.ComparisonOperator', props);
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
          CallerReference: this.__input.callerReference,
          HealthCheckConfig: {
            IPAddress: this.__input.healthCheckConfig.ipAddress,
            Port: this.__input.healthCheckConfig.port,
            Type: this.__input.healthCheckConfig.type,
            ResourcePath: this.__input.healthCheckConfig.resourcePath,
            FullyQualifiedDomainName: this.__input.healthCheckConfig.fullyQualifiedDomainName,
            SearchString: this.__input.healthCheckConfig.searchString,
            RequestInterval: this.__input.healthCheckConfig.requestInterval,
            FailureThreshold: this.__input.healthCheckConfig.failureThreshold,
            MeasureLatency: this.__input.healthCheckConfig.measureLatency,
            Inverted: this.__input.healthCheckConfig.inverted,
            Disabled: this.__input.healthCheckConfig.disabled,
            HealthThreshold: this.__input.healthCheckConfig.healthThreshold,
            ChildHealthChecks: this.__input.healthCheckConfig.childHealthChecks,
            EnableSNI: this.__input.healthCheckConfig.enableSni,
            Regions: this.__input.healthCheckConfig.regions,
            AlarmIdentifier: {
              Region: this.__input.healthCheckConfig.alarmIdentifier?.region,
              Name: this.__input.healthCheckConfig.alarmIdentifier?.name,
            },
            InsufficientDataHealthStatus: this.__input.healthCheckConfig.insufficientDataHealthStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateHealthCheck.HealthCheck.CloudWatchAlarmConfiguration.Period', props);
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
          CallerReference: this.__input.callerReference,
          HealthCheckConfig: {
            IPAddress: this.__input.healthCheckConfig.ipAddress,
            Port: this.__input.healthCheckConfig.port,
            Type: this.__input.healthCheckConfig.type,
            ResourcePath: this.__input.healthCheckConfig.resourcePath,
            FullyQualifiedDomainName: this.__input.healthCheckConfig.fullyQualifiedDomainName,
            SearchString: this.__input.healthCheckConfig.searchString,
            RequestInterval: this.__input.healthCheckConfig.requestInterval,
            FailureThreshold: this.__input.healthCheckConfig.failureThreshold,
            MeasureLatency: this.__input.healthCheckConfig.measureLatency,
            Inverted: this.__input.healthCheckConfig.inverted,
            Disabled: this.__input.healthCheckConfig.disabled,
            HealthThreshold: this.__input.healthCheckConfig.healthThreshold,
            ChildHealthChecks: this.__input.healthCheckConfig.childHealthChecks,
            EnableSNI: this.__input.healthCheckConfig.enableSni,
            Regions: this.__input.healthCheckConfig.regions,
            AlarmIdentifier: {
              Region: this.__input.healthCheckConfig.alarmIdentifier?.region,
              Name: this.__input.healthCheckConfig.alarmIdentifier?.name,
            },
            InsufficientDataHealthStatus: this.__input.healthCheckConfig.insufficientDataHealthStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateHealthCheck.HealthCheck.CloudWatchAlarmConfiguration.MetricName', props);
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
          CallerReference: this.__input.callerReference,
          HealthCheckConfig: {
            IPAddress: this.__input.healthCheckConfig.ipAddress,
            Port: this.__input.healthCheckConfig.port,
            Type: this.__input.healthCheckConfig.type,
            ResourcePath: this.__input.healthCheckConfig.resourcePath,
            FullyQualifiedDomainName: this.__input.healthCheckConfig.fullyQualifiedDomainName,
            SearchString: this.__input.healthCheckConfig.searchString,
            RequestInterval: this.__input.healthCheckConfig.requestInterval,
            FailureThreshold: this.__input.healthCheckConfig.failureThreshold,
            MeasureLatency: this.__input.healthCheckConfig.measureLatency,
            Inverted: this.__input.healthCheckConfig.inverted,
            Disabled: this.__input.healthCheckConfig.disabled,
            HealthThreshold: this.__input.healthCheckConfig.healthThreshold,
            ChildHealthChecks: this.__input.healthCheckConfig.childHealthChecks,
            EnableSNI: this.__input.healthCheckConfig.enableSni,
            Regions: this.__input.healthCheckConfig.regions,
            AlarmIdentifier: {
              Region: this.__input.healthCheckConfig.alarmIdentifier?.region,
              Name: this.__input.healthCheckConfig.alarmIdentifier?.name,
            },
            InsufficientDataHealthStatus: this.__input.healthCheckConfig.insufficientDataHealthStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateHealthCheck.HealthCheck.CloudWatchAlarmConfiguration.Namespace', props);
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
          CallerReference: this.__input.callerReference,
          HealthCheckConfig: {
            IPAddress: this.__input.healthCheckConfig.ipAddress,
            Port: this.__input.healthCheckConfig.port,
            Type: this.__input.healthCheckConfig.type,
            ResourcePath: this.__input.healthCheckConfig.resourcePath,
            FullyQualifiedDomainName: this.__input.healthCheckConfig.fullyQualifiedDomainName,
            SearchString: this.__input.healthCheckConfig.searchString,
            RequestInterval: this.__input.healthCheckConfig.requestInterval,
            FailureThreshold: this.__input.healthCheckConfig.failureThreshold,
            MeasureLatency: this.__input.healthCheckConfig.measureLatency,
            Inverted: this.__input.healthCheckConfig.inverted,
            Disabled: this.__input.healthCheckConfig.disabled,
            HealthThreshold: this.__input.healthCheckConfig.healthThreshold,
            ChildHealthChecks: this.__input.healthCheckConfig.childHealthChecks,
            EnableSNI: this.__input.healthCheckConfig.enableSni,
            Regions: this.__input.healthCheckConfig.regions,
            AlarmIdentifier: {
              Region: this.__input.healthCheckConfig.alarmIdentifier?.region,
              Name: this.__input.healthCheckConfig.alarmIdentifier?.name,
            },
            InsufficientDataHealthStatus: this.__input.healthCheckConfig.insufficientDataHealthStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateHealthCheck.HealthCheck.CloudWatchAlarmConfiguration.Statistic', props);
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
          CallerReference: this.__input.callerReference,
          HealthCheckConfig: {
            IPAddress: this.__input.healthCheckConfig.ipAddress,
            Port: this.__input.healthCheckConfig.port,
            Type: this.__input.healthCheckConfig.type,
            ResourcePath: this.__input.healthCheckConfig.resourcePath,
            FullyQualifiedDomainName: this.__input.healthCheckConfig.fullyQualifiedDomainName,
            SearchString: this.__input.healthCheckConfig.searchString,
            RequestInterval: this.__input.healthCheckConfig.requestInterval,
            FailureThreshold: this.__input.healthCheckConfig.failureThreshold,
            MeasureLatency: this.__input.healthCheckConfig.measureLatency,
            Inverted: this.__input.healthCheckConfig.inverted,
            Disabled: this.__input.healthCheckConfig.disabled,
            HealthThreshold: this.__input.healthCheckConfig.healthThreshold,
            ChildHealthChecks: this.__input.healthCheckConfig.childHealthChecks,
            EnableSNI: this.__input.healthCheckConfig.enableSni,
            Regions: this.__input.healthCheckConfig.regions,
            AlarmIdentifier: {
              Region: this.__input.healthCheckConfig.alarmIdentifier?.region,
              Name: this.__input.healthCheckConfig.alarmIdentifier?.name,
            },
            InsufficientDataHealthStatus: this.__input.healthCheckConfig.insufficientDataHealthStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateHealthCheck.HealthCheck.CloudWatchAlarmConfiguration.Dimensions', props);
    return resource.getResponseField('HealthCheck.CloudWatchAlarmConfiguration.Dimensions') as unknown as shapes.Route53Dimension[];
  }

}

export class Route53ResponsesCreateHostedZone {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53CreateHostedZoneRequest) {
  }

  public get hostedZone(): Route53ResponsesCreateHostedZoneHostedZone {
    return new Route53ResponsesCreateHostedZoneHostedZone(this.__scope, this.__resources, this.__input);
  }

  public get changeInfo(): Route53ResponsesCreateHostedZoneChangeInfo {
    return new Route53ResponsesCreateHostedZoneChangeInfo(this.__scope, this.__resources, this.__input);
  }

  public get delegationSet(): Route53ResponsesCreateHostedZoneDelegationSet {
    return new Route53ResponsesCreateHostedZoneDelegationSet(this.__scope, this.__resources, this.__input);
  }

  public get vpc(): Route53ResponsesCreateHostedZoneVpc {
    return new Route53ResponsesCreateHostedZoneVpc(this.__scope, this.__resources, this.__input);
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
          Name: this.__input.name,
          VPC: {
            VPCRegion: this.__input.vpc?.vpcRegion,
            VPCId: this.__input.vpc?.vpcId,
          },
          CallerReference: this.__input.callerReference,
          HostedZoneConfig: {
            Comment: this.__input.hostedZoneConfig?.comment,
            PrivateZone: this.__input.hostedZoneConfig?.privateZone,
          },
          DelegationSetId: this.__input.delegationSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateHostedZone.Location', props);
    return resource.getResponseField('Location') as unknown as string;
  }

}

export class Route53ResponsesCreateHostedZoneHostedZone {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53CreateHostedZoneRequest) {
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
          Name: this.__input.name,
          VPC: {
            VPCRegion: this.__input.vpc?.vpcRegion,
            VPCId: this.__input.vpc?.vpcId,
          },
          CallerReference: this.__input.callerReference,
          HostedZoneConfig: {
            Comment: this.__input.hostedZoneConfig?.comment,
            PrivateZone: this.__input.hostedZoneConfig?.privateZone,
          },
          DelegationSetId: this.__input.delegationSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateHostedZone.HostedZone.Id', props);
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
          Name: this.__input.name,
          VPC: {
            VPCRegion: this.__input.vpc?.vpcRegion,
            VPCId: this.__input.vpc?.vpcId,
          },
          CallerReference: this.__input.callerReference,
          HostedZoneConfig: {
            Comment: this.__input.hostedZoneConfig?.comment,
            PrivateZone: this.__input.hostedZoneConfig?.privateZone,
          },
          DelegationSetId: this.__input.delegationSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateHostedZone.HostedZone.Name', props);
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
          Name: this.__input.name,
          VPC: {
            VPCRegion: this.__input.vpc?.vpcRegion,
            VPCId: this.__input.vpc?.vpcId,
          },
          CallerReference: this.__input.callerReference,
          HostedZoneConfig: {
            Comment: this.__input.hostedZoneConfig?.comment,
            PrivateZone: this.__input.hostedZoneConfig?.privateZone,
          },
          DelegationSetId: this.__input.delegationSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateHostedZone.HostedZone.CallerReference', props);
    return resource.getResponseField('HostedZone.CallerReference') as unknown as string;
  }

  public get config(): Route53ResponsesCreateHostedZoneHostedZoneConfig {
    return new Route53ResponsesCreateHostedZoneHostedZoneConfig(this.__scope, this.__resources, this.__input);
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
          Name: this.__input.name,
          VPC: {
            VPCRegion: this.__input.vpc?.vpcRegion,
            VPCId: this.__input.vpc?.vpcId,
          },
          CallerReference: this.__input.callerReference,
          HostedZoneConfig: {
            Comment: this.__input.hostedZoneConfig?.comment,
            PrivateZone: this.__input.hostedZoneConfig?.privateZone,
          },
          DelegationSetId: this.__input.delegationSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateHostedZone.HostedZone.ResourceRecordSetCount', props);
    return resource.getResponseField('HostedZone.ResourceRecordSetCount') as unknown as number;
  }

  public get linkedService(): Route53ResponsesCreateHostedZoneHostedZoneLinkedService {
    return new Route53ResponsesCreateHostedZoneHostedZoneLinkedService(this.__scope, this.__resources, this.__input);
  }

}

export class Route53ResponsesCreateHostedZoneHostedZoneConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53CreateHostedZoneRequest) {
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
          Name: this.__input.name,
          VPC: {
            VPCRegion: this.__input.vpc?.vpcRegion,
            VPCId: this.__input.vpc?.vpcId,
          },
          CallerReference: this.__input.callerReference,
          HostedZoneConfig: {
            Comment: this.__input.hostedZoneConfig?.comment,
            PrivateZone: this.__input.hostedZoneConfig?.privateZone,
          },
          DelegationSetId: this.__input.delegationSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateHostedZone.HostedZone.Config.Comment', props);
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
          Name: this.__input.name,
          VPC: {
            VPCRegion: this.__input.vpc?.vpcRegion,
            VPCId: this.__input.vpc?.vpcId,
          },
          CallerReference: this.__input.callerReference,
          HostedZoneConfig: {
            Comment: this.__input.hostedZoneConfig?.comment,
            PrivateZone: this.__input.hostedZoneConfig?.privateZone,
          },
          DelegationSetId: this.__input.delegationSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateHostedZone.HostedZone.Config.PrivateZone', props);
    return resource.getResponseField('HostedZone.Config.PrivateZone') as unknown as boolean;
  }

}

export class Route53ResponsesCreateHostedZoneHostedZoneLinkedService {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53CreateHostedZoneRequest) {
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
          Name: this.__input.name,
          VPC: {
            VPCRegion: this.__input.vpc?.vpcRegion,
            VPCId: this.__input.vpc?.vpcId,
          },
          CallerReference: this.__input.callerReference,
          HostedZoneConfig: {
            Comment: this.__input.hostedZoneConfig?.comment,
            PrivateZone: this.__input.hostedZoneConfig?.privateZone,
          },
          DelegationSetId: this.__input.delegationSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateHostedZone.HostedZone.LinkedService.ServicePrincipal', props);
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
          Name: this.__input.name,
          VPC: {
            VPCRegion: this.__input.vpc?.vpcRegion,
            VPCId: this.__input.vpc?.vpcId,
          },
          CallerReference: this.__input.callerReference,
          HostedZoneConfig: {
            Comment: this.__input.hostedZoneConfig?.comment,
            PrivateZone: this.__input.hostedZoneConfig?.privateZone,
          },
          DelegationSetId: this.__input.delegationSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateHostedZone.HostedZone.LinkedService.Description', props);
    return resource.getResponseField('HostedZone.LinkedService.Description') as unknown as string;
  }

}

export class Route53ResponsesCreateHostedZoneChangeInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53CreateHostedZoneRequest) {
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
          Name: this.__input.name,
          VPC: {
            VPCRegion: this.__input.vpc?.vpcRegion,
            VPCId: this.__input.vpc?.vpcId,
          },
          CallerReference: this.__input.callerReference,
          HostedZoneConfig: {
            Comment: this.__input.hostedZoneConfig?.comment,
            PrivateZone: this.__input.hostedZoneConfig?.privateZone,
          },
          DelegationSetId: this.__input.delegationSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateHostedZone.ChangeInfo.Id', props);
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
          Name: this.__input.name,
          VPC: {
            VPCRegion: this.__input.vpc?.vpcRegion,
            VPCId: this.__input.vpc?.vpcId,
          },
          CallerReference: this.__input.callerReference,
          HostedZoneConfig: {
            Comment: this.__input.hostedZoneConfig?.comment,
            PrivateZone: this.__input.hostedZoneConfig?.privateZone,
          },
          DelegationSetId: this.__input.delegationSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateHostedZone.ChangeInfo.Status', props);
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
          Name: this.__input.name,
          VPC: {
            VPCRegion: this.__input.vpc?.vpcRegion,
            VPCId: this.__input.vpc?.vpcId,
          },
          CallerReference: this.__input.callerReference,
          HostedZoneConfig: {
            Comment: this.__input.hostedZoneConfig?.comment,
            PrivateZone: this.__input.hostedZoneConfig?.privateZone,
          },
          DelegationSetId: this.__input.delegationSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateHostedZone.ChangeInfo.SubmittedAt', props);
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
          Name: this.__input.name,
          VPC: {
            VPCRegion: this.__input.vpc?.vpcRegion,
            VPCId: this.__input.vpc?.vpcId,
          },
          CallerReference: this.__input.callerReference,
          HostedZoneConfig: {
            Comment: this.__input.hostedZoneConfig?.comment,
            PrivateZone: this.__input.hostedZoneConfig?.privateZone,
          },
          DelegationSetId: this.__input.delegationSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateHostedZone.ChangeInfo.Comment', props);
    return resource.getResponseField('ChangeInfo.Comment') as unknown as string;
  }

}

export class Route53ResponsesCreateHostedZoneDelegationSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53CreateHostedZoneRequest) {
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
          Name: this.__input.name,
          VPC: {
            VPCRegion: this.__input.vpc?.vpcRegion,
            VPCId: this.__input.vpc?.vpcId,
          },
          CallerReference: this.__input.callerReference,
          HostedZoneConfig: {
            Comment: this.__input.hostedZoneConfig?.comment,
            PrivateZone: this.__input.hostedZoneConfig?.privateZone,
          },
          DelegationSetId: this.__input.delegationSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateHostedZone.DelegationSet.Id', props);
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
          Name: this.__input.name,
          VPC: {
            VPCRegion: this.__input.vpc?.vpcRegion,
            VPCId: this.__input.vpc?.vpcId,
          },
          CallerReference: this.__input.callerReference,
          HostedZoneConfig: {
            Comment: this.__input.hostedZoneConfig?.comment,
            PrivateZone: this.__input.hostedZoneConfig?.privateZone,
          },
          DelegationSetId: this.__input.delegationSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateHostedZone.DelegationSet.CallerReference', props);
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
          Name: this.__input.name,
          VPC: {
            VPCRegion: this.__input.vpc?.vpcRegion,
            VPCId: this.__input.vpc?.vpcId,
          },
          CallerReference: this.__input.callerReference,
          HostedZoneConfig: {
            Comment: this.__input.hostedZoneConfig?.comment,
            PrivateZone: this.__input.hostedZoneConfig?.privateZone,
          },
          DelegationSetId: this.__input.delegationSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateHostedZone.DelegationSet.NameServers', props);
    return resource.getResponseField('DelegationSet.NameServers') as unknown as string[];
  }

}

export class Route53ResponsesCreateHostedZoneVpc {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53CreateHostedZoneRequest) {
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
          Name: this.__input.name,
          VPC: {
            VPCRegion: this.__input.vpc?.vpcRegion,
            VPCId: this.__input.vpc?.vpcId,
          },
          CallerReference: this.__input.callerReference,
          HostedZoneConfig: {
            Comment: this.__input.hostedZoneConfig?.comment,
            PrivateZone: this.__input.hostedZoneConfig?.privateZone,
          },
          DelegationSetId: this.__input.delegationSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateHostedZone.VPC.VPCRegion', props);
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
          Name: this.__input.name,
          VPC: {
            VPCRegion: this.__input.vpc?.vpcRegion,
            VPCId: this.__input.vpc?.vpcId,
          },
          CallerReference: this.__input.callerReference,
          HostedZoneConfig: {
            Comment: this.__input.hostedZoneConfig?.comment,
            PrivateZone: this.__input.hostedZoneConfig?.privateZone,
          },
          DelegationSetId: this.__input.delegationSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateHostedZone.VPC.VPCId', props);
    return resource.getResponseField('VPC.VPCId') as unknown as string;
  }

}

export class Route53ResponsesCreateQueryLoggingConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53CreateQueryLoggingConfigRequest) {
  }

  public get queryLoggingConfig(): Route53ResponsesCreateQueryLoggingConfigQueryLoggingConfig {
    return new Route53ResponsesCreateQueryLoggingConfigQueryLoggingConfig(this.__scope, this.__resources, this.__input);
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
          HostedZoneId: this.__input.hostedZoneId,
          CloudWatchLogsLogGroupArn: this.__input.cloudWatchLogsLogGroupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateQueryLoggingConfig.Location', props);
    return resource.getResponseField('Location') as unknown as string;
  }

}

export class Route53ResponsesCreateQueryLoggingConfigQueryLoggingConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53CreateQueryLoggingConfigRequest) {
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
          HostedZoneId: this.__input.hostedZoneId,
          CloudWatchLogsLogGroupArn: this.__input.cloudWatchLogsLogGroupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateQueryLoggingConfig.QueryLoggingConfig.Id', props);
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
          HostedZoneId: this.__input.hostedZoneId,
          CloudWatchLogsLogGroupArn: this.__input.cloudWatchLogsLogGroupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateQueryLoggingConfig.QueryLoggingConfig.HostedZoneId', props);
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
          HostedZoneId: this.__input.hostedZoneId,
          CloudWatchLogsLogGroupArn: this.__input.cloudWatchLogsLogGroupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateQueryLoggingConfig.QueryLoggingConfig.CloudWatchLogsLogGroupArn', props);
    return resource.getResponseField('QueryLoggingConfig.CloudWatchLogsLogGroupArn') as unknown as string;
  }

}

export class Route53ResponsesCreateReusableDelegationSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53CreateReusableDelegationSetRequest) {
  }

  public get delegationSet(): Route53ResponsesCreateReusableDelegationSetDelegationSet {
    return new Route53ResponsesCreateReusableDelegationSetDelegationSet(this.__scope, this.__resources, this.__input);
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
          CallerReference: this.__input.callerReference,
          HostedZoneId: this.__input.hostedZoneId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateReusableDelegationSet.Location', props);
    return resource.getResponseField('Location') as unknown as string;
  }

}

export class Route53ResponsesCreateReusableDelegationSetDelegationSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53CreateReusableDelegationSetRequest) {
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
          CallerReference: this.__input.callerReference,
          HostedZoneId: this.__input.hostedZoneId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateReusableDelegationSet.DelegationSet.Id', props);
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
          CallerReference: this.__input.callerReference,
          HostedZoneId: this.__input.hostedZoneId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateReusableDelegationSet.DelegationSet.CallerReference', props);
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
          CallerReference: this.__input.callerReference,
          HostedZoneId: this.__input.hostedZoneId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateReusableDelegationSet.DelegationSet.NameServers', props);
    return resource.getResponseField('DelegationSet.NameServers') as unknown as string[];
  }

}

export class Route53ResponsesCreateTrafficPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53CreateTrafficPolicyRequest) {
  }

  public get trafficPolicy(): Route53ResponsesCreateTrafficPolicyTrafficPolicy {
    return new Route53ResponsesCreateTrafficPolicyTrafficPolicy(this.__scope, this.__resources, this.__input);
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
          Name: this.__input.name,
          Document: this.__input.document,
          Comment: this.__input.comment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTrafficPolicy.Location', props);
    return resource.getResponseField('Location') as unknown as string;
  }

}

export class Route53ResponsesCreateTrafficPolicyTrafficPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53CreateTrafficPolicyRequest) {
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
          Name: this.__input.name,
          Document: this.__input.document,
          Comment: this.__input.comment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTrafficPolicy.TrafficPolicy.Id', props);
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
          Name: this.__input.name,
          Document: this.__input.document,
          Comment: this.__input.comment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTrafficPolicy.TrafficPolicy.Version', props);
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
          Name: this.__input.name,
          Document: this.__input.document,
          Comment: this.__input.comment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTrafficPolicy.TrafficPolicy.Name', props);
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
          Name: this.__input.name,
          Document: this.__input.document,
          Comment: this.__input.comment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTrafficPolicy.TrafficPolicy.Type', props);
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
          Name: this.__input.name,
          Document: this.__input.document,
          Comment: this.__input.comment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTrafficPolicy.TrafficPolicy.Document', props);
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
          Name: this.__input.name,
          Document: this.__input.document,
          Comment: this.__input.comment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTrafficPolicy.TrafficPolicy.Comment', props);
    return resource.getResponseField('TrafficPolicy.Comment') as unknown as string;
  }

}

export class Route53ResponsesCreateTrafficPolicyInstance {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53CreateTrafficPolicyInstanceRequest) {
  }

  public get trafficPolicyInstance(): Route53ResponsesCreateTrafficPolicyInstanceTrafficPolicyInstance {
    return new Route53ResponsesCreateTrafficPolicyInstanceTrafficPolicyInstance(this.__scope, this.__resources, this.__input);
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
          HostedZoneId: this.__input.hostedZoneId,
          Name: this.__input.name,
          TTL: this.__input.ttl,
          TrafficPolicyId: this.__input.trafficPolicyId,
          TrafficPolicyVersion: this.__input.trafficPolicyVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTrafficPolicyInstance.Location', props);
    return resource.getResponseField('Location') as unknown as string;
  }

}

export class Route53ResponsesCreateTrafficPolicyInstanceTrafficPolicyInstance {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53CreateTrafficPolicyInstanceRequest) {
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
          HostedZoneId: this.__input.hostedZoneId,
          Name: this.__input.name,
          TTL: this.__input.ttl,
          TrafficPolicyId: this.__input.trafficPolicyId,
          TrafficPolicyVersion: this.__input.trafficPolicyVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTrafficPolicyInstance.TrafficPolicyInstance.Id', props);
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
          HostedZoneId: this.__input.hostedZoneId,
          Name: this.__input.name,
          TTL: this.__input.ttl,
          TrafficPolicyId: this.__input.trafficPolicyId,
          TrafficPolicyVersion: this.__input.trafficPolicyVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTrafficPolicyInstance.TrafficPolicyInstance.HostedZoneId', props);
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
          HostedZoneId: this.__input.hostedZoneId,
          Name: this.__input.name,
          TTL: this.__input.ttl,
          TrafficPolicyId: this.__input.trafficPolicyId,
          TrafficPolicyVersion: this.__input.trafficPolicyVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTrafficPolicyInstance.TrafficPolicyInstance.Name', props);
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
          HostedZoneId: this.__input.hostedZoneId,
          Name: this.__input.name,
          TTL: this.__input.ttl,
          TrafficPolicyId: this.__input.trafficPolicyId,
          TrafficPolicyVersion: this.__input.trafficPolicyVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTrafficPolicyInstance.TrafficPolicyInstance.TTL', props);
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
          HostedZoneId: this.__input.hostedZoneId,
          Name: this.__input.name,
          TTL: this.__input.ttl,
          TrafficPolicyId: this.__input.trafficPolicyId,
          TrafficPolicyVersion: this.__input.trafficPolicyVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTrafficPolicyInstance.TrafficPolicyInstance.State', props);
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
          HostedZoneId: this.__input.hostedZoneId,
          Name: this.__input.name,
          TTL: this.__input.ttl,
          TrafficPolicyId: this.__input.trafficPolicyId,
          TrafficPolicyVersion: this.__input.trafficPolicyVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTrafficPolicyInstance.TrafficPolicyInstance.Message', props);
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
          HostedZoneId: this.__input.hostedZoneId,
          Name: this.__input.name,
          TTL: this.__input.ttl,
          TrafficPolicyId: this.__input.trafficPolicyId,
          TrafficPolicyVersion: this.__input.trafficPolicyVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTrafficPolicyInstance.TrafficPolicyInstance.TrafficPolicyId', props);
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
          HostedZoneId: this.__input.hostedZoneId,
          Name: this.__input.name,
          TTL: this.__input.ttl,
          TrafficPolicyId: this.__input.trafficPolicyId,
          TrafficPolicyVersion: this.__input.trafficPolicyVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTrafficPolicyInstance.TrafficPolicyInstance.TrafficPolicyVersion', props);
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
          HostedZoneId: this.__input.hostedZoneId,
          Name: this.__input.name,
          TTL: this.__input.ttl,
          TrafficPolicyId: this.__input.trafficPolicyId,
          TrafficPolicyVersion: this.__input.trafficPolicyVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTrafficPolicyInstance.TrafficPolicyInstance.TrafficPolicyType', props);
    return resource.getResponseField('TrafficPolicyInstance.TrafficPolicyType') as unknown as string;
  }

}

export class Route53ResponsesCreateTrafficPolicyVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53CreateTrafficPolicyVersionRequest) {
  }

  public get trafficPolicy(): Route53ResponsesCreateTrafficPolicyVersionTrafficPolicy {
    return new Route53ResponsesCreateTrafficPolicyVersionTrafficPolicy(this.__scope, this.__resources, this.__input);
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
          Id: this.__input.id,
          Document: this.__input.document,
          Comment: this.__input.comment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTrafficPolicyVersion.Location', props);
    return resource.getResponseField('Location') as unknown as string;
  }

}

export class Route53ResponsesCreateTrafficPolicyVersionTrafficPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53CreateTrafficPolicyVersionRequest) {
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
          Id: this.__input.id,
          Document: this.__input.document,
          Comment: this.__input.comment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTrafficPolicyVersion.TrafficPolicy.Id', props);
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
          Id: this.__input.id,
          Document: this.__input.document,
          Comment: this.__input.comment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTrafficPolicyVersion.TrafficPolicy.Version', props);
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
          Id: this.__input.id,
          Document: this.__input.document,
          Comment: this.__input.comment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTrafficPolicyVersion.TrafficPolicy.Name', props);
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
          Id: this.__input.id,
          Document: this.__input.document,
          Comment: this.__input.comment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTrafficPolicyVersion.TrafficPolicy.Type', props);
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
          Id: this.__input.id,
          Document: this.__input.document,
          Comment: this.__input.comment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTrafficPolicyVersion.TrafficPolicy.Document', props);
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
          Id: this.__input.id,
          Document: this.__input.document,
          Comment: this.__input.comment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTrafficPolicyVersion.TrafficPolicy.Comment', props);
    return resource.getResponseField('TrafficPolicy.Comment') as unknown as string;
  }

}

export class Route53ResponsesCreateVpcAssociationAuthorization {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53CreateVpcAssociationAuthorizationRequest) {
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
          HostedZoneId: this.__input.hostedZoneId,
          VPC: {
            VPCRegion: this.__input.vpc.vpcRegion,
            VPCId: this.__input.vpc.vpcId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateVPCAssociationAuthorization.HostedZoneId', props);
    return resource.getResponseField('HostedZoneId') as unknown as string;
  }

  public get vpc(): Route53ResponsesCreateVpcAssociationAuthorizationVpc {
    return new Route53ResponsesCreateVpcAssociationAuthorizationVpc(this.__scope, this.__resources, this.__input);
  }

}

export class Route53ResponsesCreateVpcAssociationAuthorizationVpc {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53CreateVpcAssociationAuthorizationRequest) {
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
          HostedZoneId: this.__input.hostedZoneId,
          VPC: {
            VPCRegion: this.__input.vpc.vpcRegion,
            VPCId: this.__input.vpc.vpcId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateVPCAssociationAuthorization.VPC.VPCRegion', props);
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
          HostedZoneId: this.__input.hostedZoneId,
          VPC: {
            VPCRegion: this.__input.vpc.vpcRegion,
            VPCId: this.__input.vpc.vpcId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateVPCAssociationAuthorization.VPC.VPCId', props);
    return resource.getResponseField('VPC.VPCId') as unknown as string;
  }

}

export class Route53ResponsesDeleteHostedZone {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53DeleteHostedZoneRequest) {
  }

  public get changeInfo(): Route53ResponsesDeleteHostedZoneChangeInfo {
    return new Route53ResponsesDeleteHostedZoneChangeInfo(this.__scope, this.__resources, this.__input);
  }

}

export class Route53ResponsesDeleteHostedZoneChangeInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53DeleteHostedZoneRequest) {
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
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteHostedZone.ChangeInfo.Id', props);
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
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteHostedZone.ChangeInfo.Status', props);
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
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteHostedZone.ChangeInfo.SubmittedAt', props);
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
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteHostedZone.ChangeInfo.Comment', props);
    return resource.getResponseField('ChangeInfo.Comment') as unknown as string;
  }

}

export class Route53ResponsesDisassociateVpcFromHostedZone {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53DisassociateVpcFromHostedZoneRequest) {
  }

  public get changeInfo(): Route53ResponsesDisassociateVpcFromHostedZoneChangeInfo {
    return new Route53ResponsesDisassociateVpcFromHostedZoneChangeInfo(this.__scope, this.__resources, this.__input);
  }

}

export class Route53ResponsesDisassociateVpcFromHostedZoneChangeInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53DisassociateVpcFromHostedZoneRequest) {
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
          HostedZoneId: this.__input.hostedZoneId,
          VPC: {
            VPCRegion: this.__input.vpc.vpcRegion,
            VPCId: this.__input.vpc.vpcId,
          },
          Comment: this.__input.comment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateVPCFromHostedZone.ChangeInfo.Id', props);
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
          HostedZoneId: this.__input.hostedZoneId,
          VPC: {
            VPCRegion: this.__input.vpc.vpcRegion,
            VPCId: this.__input.vpc.vpcId,
          },
          Comment: this.__input.comment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateVPCFromHostedZone.ChangeInfo.Status', props);
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
          HostedZoneId: this.__input.hostedZoneId,
          VPC: {
            VPCRegion: this.__input.vpc.vpcRegion,
            VPCId: this.__input.vpc.vpcId,
          },
          Comment: this.__input.comment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateVPCFromHostedZone.ChangeInfo.SubmittedAt', props);
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
          HostedZoneId: this.__input.hostedZoneId,
          VPC: {
            VPCRegion: this.__input.vpc.vpcRegion,
            VPCId: this.__input.vpc.vpcId,
          },
          Comment: this.__input.comment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateVPCFromHostedZone.ChangeInfo.Comment', props);
    return resource.getResponseField('ChangeInfo.Comment') as unknown as string;
  }

}

export class Route53ResponsesFetchAccountLimit {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53GetAccountLimitRequest) {
  }

  public get limit(): Route53ResponsesFetchAccountLimitLimit {
    return new Route53ResponsesFetchAccountLimitLimit(this.__scope, this.__resources, this.__input);
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
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccountLimit.Count', props);
    return resource.getResponseField('Count') as unknown as number;
  }

}

export class Route53ResponsesFetchAccountLimitLimit {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53GetAccountLimitRequest) {
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
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccountLimit.Limit.Type', props);
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
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccountLimit.Limit.Value', props);
    return resource.getResponseField('Limit.Value') as unknown as number;
  }

}

export class Route53ResponsesFetchChange {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53GetChangeRequest) {
  }

  public get changeInfo(): Route53ResponsesFetchChangeChangeInfo {
    return new Route53ResponsesFetchChangeChangeInfo(this.__scope, this.__resources, this.__input);
  }

}

export class Route53ResponsesFetchChangeChangeInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53GetChangeRequest) {
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
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetChange.ChangeInfo.Id', props);
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
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetChange.ChangeInfo.Status', props);
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
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetChange.ChangeInfo.SubmittedAt', props);
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
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetChange.ChangeInfo.Comment', props);
    return resource.getResponseField('ChangeInfo.Comment') as unknown as string;
  }

}

export class Route53ResponsesFetchCheckerIpRanges {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCheckerIpRanges.CheckerIpRanges', props);
    return resource.getResponseField('CheckerIpRanges') as unknown as string[];
  }

}

export class Route53ResponsesFetchGeoLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53GetGeoLocationRequest) {
  }

  public get geoLocationDetails(): Route53ResponsesFetchGeoLocationGeoLocationDetails {
    return new Route53ResponsesFetchGeoLocationGeoLocationDetails(this.__scope, this.__resources, this.__input);
  }

}

export class Route53ResponsesFetchGeoLocationGeoLocationDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53GetGeoLocationRequest) {
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
          ContinentCode: this.__input.continentCode,
          CountryCode: this.__input.countryCode,
          SubdivisionCode: this.__input.subdivisionCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGeoLocation.GeoLocationDetails.ContinentCode', props);
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
          ContinentCode: this.__input.continentCode,
          CountryCode: this.__input.countryCode,
          SubdivisionCode: this.__input.subdivisionCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGeoLocation.GeoLocationDetails.ContinentName', props);
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
          ContinentCode: this.__input.continentCode,
          CountryCode: this.__input.countryCode,
          SubdivisionCode: this.__input.subdivisionCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGeoLocation.GeoLocationDetails.CountryCode', props);
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
          ContinentCode: this.__input.continentCode,
          CountryCode: this.__input.countryCode,
          SubdivisionCode: this.__input.subdivisionCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGeoLocation.GeoLocationDetails.CountryName', props);
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
          ContinentCode: this.__input.continentCode,
          CountryCode: this.__input.countryCode,
          SubdivisionCode: this.__input.subdivisionCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGeoLocation.GeoLocationDetails.SubdivisionCode', props);
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
          ContinentCode: this.__input.continentCode,
          CountryCode: this.__input.countryCode,
          SubdivisionCode: this.__input.subdivisionCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGeoLocation.GeoLocationDetails.SubdivisionName', props);
    return resource.getResponseField('GeoLocationDetails.SubdivisionName') as unknown as string;
  }

}

export class Route53ResponsesFetchHealthCheck {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53GetHealthCheckRequest) {
  }

  public get healthCheck(): Route53ResponsesFetchHealthCheckHealthCheck {
    return new Route53ResponsesFetchHealthCheckHealthCheck(this.__scope, this.__resources, this.__input);
  }

}

export class Route53ResponsesFetchHealthCheckHealthCheck {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53GetHealthCheckRequest) {
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
          HealthCheckId: this.__input.healthCheckId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetHealthCheck.HealthCheck.Id', props);
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
          HealthCheckId: this.__input.healthCheckId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetHealthCheck.HealthCheck.CallerReference', props);
    return resource.getResponseField('HealthCheck.CallerReference') as unknown as string;
  }

  public get linkedService(): Route53ResponsesFetchHealthCheckHealthCheckLinkedService {
    return new Route53ResponsesFetchHealthCheckHealthCheckLinkedService(this.__scope, this.__resources, this.__input);
  }

  public get healthCheckConfig(): Route53ResponsesFetchHealthCheckHealthCheckHealthCheckConfig {
    return new Route53ResponsesFetchHealthCheckHealthCheckHealthCheckConfig(this.__scope, this.__resources, this.__input);
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
          HealthCheckId: this.__input.healthCheckId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetHealthCheck.HealthCheck.HealthCheckVersion', props);
    return resource.getResponseField('HealthCheck.HealthCheckVersion') as unknown as number;
  }

  public get cloudWatchAlarmConfiguration(): Route53ResponsesFetchHealthCheckHealthCheckCloudWatchAlarmConfiguration {
    return new Route53ResponsesFetchHealthCheckHealthCheckCloudWatchAlarmConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class Route53ResponsesFetchHealthCheckHealthCheckLinkedService {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53GetHealthCheckRequest) {
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
          HealthCheckId: this.__input.healthCheckId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetHealthCheck.HealthCheck.LinkedService.ServicePrincipal', props);
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
          HealthCheckId: this.__input.healthCheckId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetHealthCheck.HealthCheck.LinkedService.Description', props);
    return resource.getResponseField('HealthCheck.LinkedService.Description') as unknown as string;
  }

}

export class Route53ResponsesFetchHealthCheckHealthCheckHealthCheckConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53GetHealthCheckRequest) {
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
          HealthCheckId: this.__input.healthCheckId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetHealthCheck.HealthCheck.HealthCheckConfig.IPAddress', props);
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
          HealthCheckId: this.__input.healthCheckId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetHealthCheck.HealthCheck.HealthCheckConfig.Port', props);
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
          HealthCheckId: this.__input.healthCheckId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetHealthCheck.HealthCheck.HealthCheckConfig.Type', props);
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
          HealthCheckId: this.__input.healthCheckId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetHealthCheck.HealthCheck.HealthCheckConfig.ResourcePath', props);
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
          HealthCheckId: this.__input.healthCheckId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetHealthCheck.HealthCheck.HealthCheckConfig.FullyQualifiedDomainName', props);
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
          HealthCheckId: this.__input.healthCheckId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetHealthCheck.HealthCheck.HealthCheckConfig.SearchString', props);
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
          HealthCheckId: this.__input.healthCheckId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetHealthCheck.HealthCheck.HealthCheckConfig.RequestInterval', props);
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
          HealthCheckId: this.__input.healthCheckId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetHealthCheck.HealthCheck.HealthCheckConfig.FailureThreshold', props);
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
          HealthCheckId: this.__input.healthCheckId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetHealthCheck.HealthCheck.HealthCheckConfig.MeasureLatency', props);
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
          HealthCheckId: this.__input.healthCheckId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetHealthCheck.HealthCheck.HealthCheckConfig.Inverted', props);
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
          HealthCheckId: this.__input.healthCheckId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetHealthCheck.HealthCheck.HealthCheckConfig.Disabled', props);
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
          HealthCheckId: this.__input.healthCheckId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetHealthCheck.HealthCheck.HealthCheckConfig.HealthThreshold', props);
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
          HealthCheckId: this.__input.healthCheckId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetHealthCheck.HealthCheck.HealthCheckConfig.ChildHealthChecks', props);
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
          HealthCheckId: this.__input.healthCheckId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetHealthCheck.HealthCheck.HealthCheckConfig.EnableSNI', props);
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
          HealthCheckId: this.__input.healthCheckId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetHealthCheck.HealthCheck.HealthCheckConfig.Regions', props);
    return resource.getResponseField('HealthCheck.HealthCheckConfig.Regions') as unknown as string[];
  }

  public get alarmIdentifier(): Route53ResponsesFetchHealthCheckHealthCheckHealthCheckConfigAlarmIdentifier {
    return new Route53ResponsesFetchHealthCheckHealthCheckHealthCheckConfigAlarmIdentifier(this.__scope, this.__resources, this.__input);
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
          HealthCheckId: this.__input.healthCheckId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetHealthCheck.HealthCheck.HealthCheckConfig.InsufficientDataHealthStatus', props);
    return resource.getResponseField('HealthCheck.HealthCheckConfig.InsufficientDataHealthStatus') as unknown as string;
  }

}

export class Route53ResponsesFetchHealthCheckHealthCheckHealthCheckConfigAlarmIdentifier {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53GetHealthCheckRequest) {
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
          HealthCheckId: this.__input.healthCheckId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetHealthCheck.HealthCheck.HealthCheckConfig.AlarmIdentifier.Region', props);
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
          HealthCheckId: this.__input.healthCheckId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetHealthCheck.HealthCheck.HealthCheckConfig.AlarmIdentifier.Name', props);
    return resource.getResponseField('HealthCheck.HealthCheckConfig.AlarmIdentifier.Name') as unknown as string;
  }

}

export class Route53ResponsesFetchHealthCheckHealthCheckCloudWatchAlarmConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53GetHealthCheckRequest) {
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
          HealthCheckId: this.__input.healthCheckId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetHealthCheck.HealthCheck.CloudWatchAlarmConfiguration.EvaluationPeriods', props);
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
          HealthCheckId: this.__input.healthCheckId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetHealthCheck.HealthCheck.CloudWatchAlarmConfiguration.Threshold', props);
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
          HealthCheckId: this.__input.healthCheckId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetHealthCheck.HealthCheck.CloudWatchAlarmConfiguration.ComparisonOperator', props);
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
          HealthCheckId: this.__input.healthCheckId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetHealthCheck.HealthCheck.CloudWatchAlarmConfiguration.Period', props);
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
          HealthCheckId: this.__input.healthCheckId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetHealthCheck.HealthCheck.CloudWatchAlarmConfiguration.MetricName', props);
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
          HealthCheckId: this.__input.healthCheckId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetHealthCheck.HealthCheck.CloudWatchAlarmConfiguration.Namespace', props);
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
          HealthCheckId: this.__input.healthCheckId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetHealthCheck.HealthCheck.CloudWatchAlarmConfiguration.Statistic', props);
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
          HealthCheckId: this.__input.healthCheckId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetHealthCheck.HealthCheck.CloudWatchAlarmConfiguration.Dimensions', props);
    return resource.getResponseField('HealthCheck.CloudWatchAlarmConfiguration.Dimensions') as unknown as shapes.Route53Dimension[];
  }

}

export class Route53ResponsesFetchHealthCheckCount {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetHealthCheckCount.HealthCheckCount', props);
    return resource.getResponseField('HealthCheckCount') as unknown as number;
  }

}

export class Route53ResponsesFetchHealthCheckLastFailureReason {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53GetHealthCheckLastFailureReasonRequest) {
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
          HealthCheckId: this.__input.healthCheckId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetHealthCheckLastFailureReason.HealthCheckObservations', props);
    return resource.getResponseField('HealthCheckObservations') as unknown as shapes.Route53HealthCheckObservation[];
  }

}

export class Route53ResponsesFetchHealthCheckStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53GetHealthCheckStatusRequest) {
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
          HealthCheckId: this.__input.healthCheckId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetHealthCheckStatus.HealthCheckObservations', props);
    return resource.getResponseField('HealthCheckObservations') as unknown as shapes.Route53HealthCheckObservation[];
  }

}

export class Route53ResponsesFetchHostedZone {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53GetHostedZoneRequest) {
  }

  public get hostedZone(): Route53ResponsesFetchHostedZoneHostedZone {
    return new Route53ResponsesFetchHostedZoneHostedZone(this.__scope, this.__resources, this.__input);
  }

  public get delegationSet(): Route53ResponsesFetchHostedZoneDelegationSet {
    return new Route53ResponsesFetchHostedZoneDelegationSet(this.__scope, this.__resources, this.__input);
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
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetHostedZone.VPCs', props);
    return resource.getResponseField('VPCs') as unknown as shapes.Route53Vpc[];
  }

}

export class Route53ResponsesFetchHostedZoneHostedZone {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53GetHostedZoneRequest) {
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
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetHostedZone.HostedZone.Id', props);
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
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetHostedZone.HostedZone.Name', props);
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
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetHostedZone.HostedZone.CallerReference', props);
    return resource.getResponseField('HostedZone.CallerReference') as unknown as string;
  }

  public get config(): Route53ResponsesFetchHostedZoneHostedZoneConfig {
    return new Route53ResponsesFetchHostedZoneHostedZoneConfig(this.__scope, this.__resources, this.__input);
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
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetHostedZone.HostedZone.ResourceRecordSetCount', props);
    return resource.getResponseField('HostedZone.ResourceRecordSetCount') as unknown as number;
  }

  public get linkedService(): Route53ResponsesFetchHostedZoneHostedZoneLinkedService {
    return new Route53ResponsesFetchHostedZoneHostedZoneLinkedService(this.__scope, this.__resources, this.__input);
  }

}

export class Route53ResponsesFetchHostedZoneHostedZoneConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53GetHostedZoneRequest) {
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
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetHostedZone.HostedZone.Config.Comment', props);
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
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetHostedZone.HostedZone.Config.PrivateZone', props);
    return resource.getResponseField('HostedZone.Config.PrivateZone') as unknown as boolean;
  }

}

export class Route53ResponsesFetchHostedZoneHostedZoneLinkedService {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53GetHostedZoneRequest) {
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
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetHostedZone.HostedZone.LinkedService.ServicePrincipal', props);
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
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetHostedZone.HostedZone.LinkedService.Description', props);
    return resource.getResponseField('HostedZone.LinkedService.Description') as unknown as string;
  }

}

export class Route53ResponsesFetchHostedZoneDelegationSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53GetHostedZoneRequest) {
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
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetHostedZone.DelegationSet.Id', props);
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
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetHostedZone.DelegationSet.CallerReference', props);
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
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetHostedZone.DelegationSet.NameServers', props);
    return resource.getResponseField('DelegationSet.NameServers') as unknown as string[];
  }

}

export class Route53ResponsesFetchHostedZoneCount {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetHostedZoneCount.HostedZoneCount', props);
    return resource.getResponseField('HostedZoneCount') as unknown as number;
  }

}

export class Route53ResponsesFetchHostedZoneLimit {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53GetHostedZoneLimitRequest) {
  }

  public get limit(): Route53ResponsesFetchHostedZoneLimitLimit {
    return new Route53ResponsesFetchHostedZoneLimitLimit(this.__scope, this.__resources, this.__input);
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
          Type: this.__input.type,
          HostedZoneId: this.__input.hostedZoneId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetHostedZoneLimit.Count', props);
    return resource.getResponseField('Count') as unknown as number;
  }

}

export class Route53ResponsesFetchHostedZoneLimitLimit {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53GetHostedZoneLimitRequest) {
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
          Type: this.__input.type,
          HostedZoneId: this.__input.hostedZoneId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetHostedZoneLimit.Limit.Type', props);
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
          Type: this.__input.type,
          HostedZoneId: this.__input.hostedZoneId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetHostedZoneLimit.Limit.Value', props);
    return resource.getResponseField('Limit.Value') as unknown as number;
  }

}

export class Route53ResponsesFetchQueryLoggingConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53GetQueryLoggingConfigRequest) {
  }

  public get queryLoggingConfig(): Route53ResponsesFetchQueryLoggingConfigQueryLoggingConfig {
    return new Route53ResponsesFetchQueryLoggingConfigQueryLoggingConfig(this.__scope, this.__resources, this.__input);
  }

}

export class Route53ResponsesFetchQueryLoggingConfigQueryLoggingConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53GetQueryLoggingConfigRequest) {
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
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetQueryLoggingConfig.QueryLoggingConfig.Id', props);
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
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetQueryLoggingConfig.QueryLoggingConfig.HostedZoneId', props);
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
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetQueryLoggingConfig.QueryLoggingConfig.CloudWatchLogsLogGroupArn', props);
    return resource.getResponseField('QueryLoggingConfig.CloudWatchLogsLogGroupArn') as unknown as string;
  }

}

export class Route53ResponsesFetchReusableDelegationSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53GetReusableDelegationSetRequest) {
  }

  public get delegationSet(): Route53ResponsesFetchReusableDelegationSetDelegationSet {
    return new Route53ResponsesFetchReusableDelegationSetDelegationSet(this.__scope, this.__resources, this.__input);
  }

}

export class Route53ResponsesFetchReusableDelegationSetDelegationSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53GetReusableDelegationSetRequest) {
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
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetReusableDelegationSet.DelegationSet.Id', props);
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
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetReusableDelegationSet.DelegationSet.CallerReference', props);
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
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetReusableDelegationSet.DelegationSet.NameServers', props);
    return resource.getResponseField('DelegationSet.NameServers') as unknown as string[];
  }

}

export class Route53ResponsesFetchReusableDelegationSetLimit {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53GetReusableDelegationSetLimitRequest) {
  }

  public get limit(): Route53ResponsesFetchReusableDelegationSetLimitLimit {
    return new Route53ResponsesFetchReusableDelegationSetLimitLimit(this.__scope, this.__resources, this.__input);
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
          Type: this.__input.type,
          DelegationSetId: this.__input.delegationSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetReusableDelegationSetLimit.Count', props);
    return resource.getResponseField('Count') as unknown as number;
  }

}

export class Route53ResponsesFetchReusableDelegationSetLimitLimit {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53GetReusableDelegationSetLimitRequest) {
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
          Type: this.__input.type,
          DelegationSetId: this.__input.delegationSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetReusableDelegationSetLimit.Limit.Type', props);
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
          Type: this.__input.type,
          DelegationSetId: this.__input.delegationSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetReusableDelegationSetLimit.Limit.Value', props);
    return resource.getResponseField('Limit.Value') as unknown as number;
  }

}

export class Route53ResponsesFetchTrafficPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53GetTrafficPolicyRequest) {
  }

  public get trafficPolicy(): Route53ResponsesFetchTrafficPolicyTrafficPolicy {
    return new Route53ResponsesFetchTrafficPolicyTrafficPolicy(this.__scope, this.__resources, this.__input);
  }

}

export class Route53ResponsesFetchTrafficPolicyTrafficPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53GetTrafficPolicyRequest) {
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
          Id: this.__input.id,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTrafficPolicy.TrafficPolicy.Id', props);
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
          Id: this.__input.id,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTrafficPolicy.TrafficPolicy.Version', props);
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
          Id: this.__input.id,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTrafficPolicy.TrafficPolicy.Name', props);
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
          Id: this.__input.id,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTrafficPolicy.TrafficPolicy.Type', props);
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
          Id: this.__input.id,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTrafficPolicy.TrafficPolicy.Document', props);
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
          Id: this.__input.id,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTrafficPolicy.TrafficPolicy.Comment', props);
    return resource.getResponseField('TrafficPolicy.Comment') as unknown as string;
  }

}

export class Route53ResponsesFetchTrafficPolicyInstance {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53GetTrafficPolicyInstanceRequest) {
  }

  public get trafficPolicyInstance(): Route53ResponsesFetchTrafficPolicyInstanceTrafficPolicyInstance {
    return new Route53ResponsesFetchTrafficPolicyInstanceTrafficPolicyInstance(this.__scope, this.__resources, this.__input);
  }

}

export class Route53ResponsesFetchTrafficPolicyInstanceTrafficPolicyInstance {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53GetTrafficPolicyInstanceRequest) {
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
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTrafficPolicyInstance.TrafficPolicyInstance.Id', props);
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
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTrafficPolicyInstance.TrafficPolicyInstance.HostedZoneId', props);
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
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTrafficPolicyInstance.TrafficPolicyInstance.Name', props);
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
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTrafficPolicyInstance.TrafficPolicyInstance.TTL', props);
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
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTrafficPolicyInstance.TrafficPolicyInstance.State', props);
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
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTrafficPolicyInstance.TrafficPolicyInstance.Message', props);
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
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTrafficPolicyInstance.TrafficPolicyInstance.TrafficPolicyId', props);
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
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTrafficPolicyInstance.TrafficPolicyInstance.TrafficPolicyVersion', props);
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
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTrafficPolicyInstance.TrafficPolicyInstance.TrafficPolicyType', props);
    return resource.getResponseField('TrafficPolicyInstance.TrafficPolicyType') as unknown as string;
  }

}

export class Route53ResponsesFetchTrafficPolicyInstanceCount {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTrafficPolicyInstanceCount.TrafficPolicyInstanceCount', props);
    return resource.getResponseField('TrafficPolicyInstanceCount') as unknown as number;
  }

}

export class Route53ResponsesListGeoLocations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ListGeoLocationsRequest) {
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
          StartContinentCode: this.__input.startContinentCode,
          StartCountryCode: this.__input.startCountryCode,
          StartSubdivisionCode: this.__input.startSubdivisionCode,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListGeoLocations.GeoLocationDetailsList', props);
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
          StartContinentCode: this.__input.startContinentCode,
          StartCountryCode: this.__input.startCountryCode,
          StartSubdivisionCode: this.__input.startSubdivisionCode,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListGeoLocations.IsTruncated', props);
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
          StartContinentCode: this.__input.startContinentCode,
          StartCountryCode: this.__input.startCountryCode,
          StartSubdivisionCode: this.__input.startSubdivisionCode,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListGeoLocations.NextContinentCode', props);
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
          StartContinentCode: this.__input.startContinentCode,
          StartCountryCode: this.__input.startCountryCode,
          StartSubdivisionCode: this.__input.startSubdivisionCode,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListGeoLocations.NextCountryCode', props);
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
          StartContinentCode: this.__input.startContinentCode,
          StartCountryCode: this.__input.startCountryCode,
          StartSubdivisionCode: this.__input.startSubdivisionCode,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListGeoLocations.NextSubdivisionCode', props);
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
          StartContinentCode: this.__input.startContinentCode,
          StartCountryCode: this.__input.startCountryCode,
          StartSubdivisionCode: this.__input.startSubdivisionCode,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListGeoLocations.MaxItems', props);
    return resource.getResponseField('MaxItems') as unknown as string;
  }

}

export class Route53ResponsesListHealthChecks {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ListHealthChecksRequest) {
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
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListHealthChecks.HealthChecks', props);
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
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListHealthChecks.Marker', props);
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
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListHealthChecks.IsTruncated', props);
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
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListHealthChecks.NextMarker', props);
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
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListHealthChecks.MaxItems', props);
    return resource.getResponseField('MaxItems') as unknown as string;
  }

}

export class Route53ResponsesListHostedZones {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ListHostedZonesRequest) {
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
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
          DelegationSetId: this.__input.delegationSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListHostedZones.HostedZones', props);
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
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
          DelegationSetId: this.__input.delegationSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListHostedZones.Marker', props);
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
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
          DelegationSetId: this.__input.delegationSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListHostedZones.IsTruncated', props);
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
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
          DelegationSetId: this.__input.delegationSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListHostedZones.NextMarker', props);
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
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
          DelegationSetId: this.__input.delegationSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListHostedZones.MaxItems', props);
    return resource.getResponseField('MaxItems') as unknown as string;
  }

}

export class Route53ResponsesListHostedZonesByName {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ListHostedZonesByNameRequest) {
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
          DNSName: this.__input.dnsName,
          HostedZoneId: this.__input.hostedZoneId,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListHostedZonesByName.HostedZones', props);
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
          DNSName: this.__input.dnsName,
          HostedZoneId: this.__input.hostedZoneId,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListHostedZonesByName.DNSName', props);
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
          DNSName: this.__input.dnsName,
          HostedZoneId: this.__input.hostedZoneId,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListHostedZonesByName.HostedZoneId', props);
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
          DNSName: this.__input.dnsName,
          HostedZoneId: this.__input.hostedZoneId,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListHostedZonesByName.IsTruncated', props);
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
          DNSName: this.__input.dnsName,
          HostedZoneId: this.__input.hostedZoneId,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListHostedZonesByName.NextDNSName', props);
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
          DNSName: this.__input.dnsName,
          HostedZoneId: this.__input.hostedZoneId,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListHostedZonesByName.NextHostedZoneId', props);
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
          DNSName: this.__input.dnsName,
          HostedZoneId: this.__input.hostedZoneId,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListHostedZonesByName.MaxItems', props);
    return resource.getResponseField('MaxItems') as unknown as string;
  }

}

export class Route53ResponsesListHostedZonesByVpc {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ListHostedZonesByVpcRequest) {
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
          VPCId: this.__input.vpcId,
          VPCRegion: this.__input.vpcRegion,
          MaxItems: this.__input.maxItems,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListHostedZonesByVPC.HostedZoneSummaries', props);
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
          VPCId: this.__input.vpcId,
          VPCRegion: this.__input.vpcRegion,
          MaxItems: this.__input.maxItems,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListHostedZonesByVPC.MaxItems', props);
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
          VPCId: this.__input.vpcId,
          VPCRegion: this.__input.vpcRegion,
          MaxItems: this.__input.maxItems,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListHostedZonesByVPC.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class Route53ResponsesListQueryLoggingConfigs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ListQueryLoggingConfigsRequest) {
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
          HostedZoneId: this.__input.hostedZoneId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListQueryLoggingConfigs.QueryLoggingConfigs', props);
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
          HostedZoneId: this.__input.hostedZoneId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListQueryLoggingConfigs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class Route53ResponsesListResourceRecordSets {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ListResourceRecordSetsRequest) {
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
          HostedZoneId: this.__input.hostedZoneId,
          StartRecordName: this.__input.startRecordName,
          StartRecordType: this.__input.startRecordType,
          StartRecordIdentifier: this.__input.startRecordIdentifier,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListResourceRecordSets.ResourceRecordSets', props);
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
          HostedZoneId: this.__input.hostedZoneId,
          StartRecordName: this.__input.startRecordName,
          StartRecordType: this.__input.startRecordType,
          StartRecordIdentifier: this.__input.startRecordIdentifier,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListResourceRecordSets.IsTruncated', props);
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
          HostedZoneId: this.__input.hostedZoneId,
          StartRecordName: this.__input.startRecordName,
          StartRecordType: this.__input.startRecordType,
          StartRecordIdentifier: this.__input.startRecordIdentifier,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListResourceRecordSets.NextRecordName', props);
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
          HostedZoneId: this.__input.hostedZoneId,
          StartRecordName: this.__input.startRecordName,
          StartRecordType: this.__input.startRecordType,
          StartRecordIdentifier: this.__input.startRecordIdentifier,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListResourceRecordSets.NextRecordType', props);
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
          HostedZoneId: this.__input.hostedZoneId,
          StartRecordName: this.__input.startRecordName,
          StartRecordType: this.__input.startRecordType,
          StartRecordIdentifier: this.__input.startRecordIdentifier,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListResourceRecordSets.NextRecordIdentifier', props);
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
          HostedZoneId: this.__input.hostedZoneId,
          StartRecordName: this.__input.startRecordName,
          StartRecordType: this.__input.startRecordType,
          StartRecordIdentifier: this.__input.startRecordIdentifier,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListResourceRecordSets.MaxItems', props);
    return resource.getResponseField('MaxItems') as unknown as string;
  }

}

export class Route53ResponsesListReusableDelegationSets {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ListReusableDelegationSetsRequest) {
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
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListReusableDelegationSets.DelegationSets', props);
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
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListReusableDelegationSets.Marker', props);
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
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListReusableDelegationSets.IsTruncated', props);
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
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListReusableDelegationSets.NextMarker', props);
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
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListReusableDelegationSets.MaxItems', props);
    return resource.getResponseField('MaxItems') as unknown as string;
  }

}

export class Route53ResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ListTagsForResourceRequest) {
  }

  public get resourceTagSet(): Route53ResponsesListTagsForResourceResourceTagSet {
    return new Route53ResponsesListTagsForResourceResourceTagSet(this.__scope, this.__resources, this.__input);
  }

}

export class Route53ResponsesListTagsForResourceResourceTagSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ListTagsForResourceRequest) {
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
          ResourceType: this.__input.resourceType,
          ResourceId: this.__input.resourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.ResourceTagSet.ResourceType', props);
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
          ResourceType: this.__input.resourceType,
          ResourceId: this.__input.resourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.ResourceTagSet.ResourceId', props);
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
          ResourceType: this.__input.resourceType,
          ResourceId: this.__input.resourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.ResourceTagSet.Tags', props);
    return resource.getResponseField('ResourceTagSet.Tags') as unknown as shapes.Route53Tag[];
  }

}

export class Route53ResponsesListTagsForResources {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ListTagsForResourcesRequest) {
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
          ResourceType: this.__input.resourceType,
          ResourceIds: this.__input.resourceIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResources.ResourceTagSets', props);
    return resource.getResponseField('ResourceTagSets') as unknown as shapes.Route53ResourceTagSet[];
  }

}

export class Route53ResponsesListTrafficPolicies {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ListTrafficPoliciesRequest) {
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
          TrafficPolicyIdMarker: this.__input.trafficPolicyIdMarker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTrafficPolicies.TrafficPolicySummaries', props);
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
          TrafficPolicyIdMarker: this.__input.trafficPolicyIdMarker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTrafficPolicies.IsTruncated', props);
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
          TrafficPolicyIdMarker: this.__input.trafficPolicyIdMarker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTrafficPolicies.TrafficPolicyIdMarker', props);
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
          TrafficPolicyIdMarker: this.__input.trafficPolicyIdMarker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTrafficPolicies.MaxItems', props);
    return resource.getResponseField('MaxItems') as unknown as string;
  }

}

export class Route53ResponsesListTrafficPolicyInstances {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ListTrafficPolicyInstancesRequest) {
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
          HostedZoneIdMarker: this.__input.hostedZoneIdMarker,
          TrafficPolicyInstanceNameMarker: this.__input.trafficPolicyInstanceNameMarker,
          TrafficPolicyInstanceTypeMarker: this.__input.trafficPolicyInstanceTypeMarker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTrafficPolicyInstances.TrafficPolicyInstances', props);
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
          HostedZoneIdMarker: this.__input.hostedZoneIdMarker,
          TrafficPolicyInstanceNameMarker: this.__input.trafficPolicyInstanceNameMarker,
          TrafficPolicyInstanceTypeMarker: this.__input.trafficPolicyInstanceTypeMarker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTrafficPolicyInstances.HostedZoneIdMarker', props);
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
          HostedZoneIdMarker: this.__input.hostedZoneIdMarker,
          TrafficPolicyInstanceNameMarker: this.__input.trafficPolicyInstanceNameMarker,
          TrafficPolicyInstanceTypeMarker: this.__input.trafficPolicyInstanceTypeMarker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTrafficPolicyInstances.TrafficPolicyInstanceNameMarker', props);
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
          HostedZoneIdMarker: this.__input.hostedZoneIdMarker,
          TrafficPolicyInstanceNameMarker: this.__input.trafficPolicyInstanceNameMarker,
          TrafficPolicyInstanceTypeMarker: this.__input.trafficPolicyInstanceTypeMarker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTrafficPolicyInstances.TrafficPolicyInstanceTypeMarker', props);
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
          HostedZoneIdMarker: this.__input.hostedZoneIdMarker,
          TrafficPolicyInstanceNameMarker: this.__input.trafficPolicyInstanceNameMarker,
          TrafficPolicyInstanceTypeMarker: this.__input.trafficPolicyInstanceTypeMarker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTrafficPolicyInstances.IsTruncated', props);
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
          HostedZoneIdMarker: this.__input.hostedZoneIdMarker,
          TrafficPolicyInstanceNameMarker: this.__input.trafficPolicyInstanceNameMarker,
          TrafficPolicyInstanceTypeMarker: this.__input.trafficPolicyInstanceTypeMarker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTrafficPolicyInstances.MaxItems', props);
    return resource.getResponseField('MaxItems') as unknown as string;
  }

}

export class Route53ResponsesListTrafficPolicyInstancesByHostedZone {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ListTrafficPolicyInstancesByHostedZoneRequest) {
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
          HostedZoneId: this.__input.hostedZoneId,
          TrafficPolicyInstanceNameMarker: this.__input.trafficPolicyInstanceNameMarker,
          TrafficPolicyInstanceTypeMarker: this.__input.trafficPolicyInstanceTypeMarker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTrafficPolicyInstancesByHostedZone.TrafficPolicyInstances', props);
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
          HostedZoneId: this.__input.hostedZoneId,
          TrafficPolicyInstanceNameMarker: this.__input.trafficPolicyInstanceNameMarker,
          TrafficPolicyInstanceTypeMarker: this.__input.trafficPolicyInstanceTypeMarker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTrafficPolicyInstancesByHostedZone.TrafficPolicyInstanceNameMarker', props);
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
          HostedZoneId: this.__input.hostedZoneId,
          TrafficPolicyInstanceNameMarker: this.__input.trafficPolicyInstanceNameMarker,
          TrafficPolicyInstanceTypeMarker: this.__input.trafficPolicyInstanceTypeMarker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTrafficPolicyInstancesByHostedZone.TrafficPolicyInstanceTypeMarker', props);
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
          HostedZoneId: this.__input.hostedZoneId,
          TrafficPolicyInstanceNameMarker: this.__input.trafficPolicyInstanceNameMarker,
          TrafficPolicyInstanceTypeMarker: this.__input.trafficPolicyInstanceTypeMarker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTrafficPolicyInstancesByHostedZone.IsTruncated', props);
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
          HostedZoneId: this.__input.hostedZoneId,
          TrafficPolicyInstanceNameMarker: this.__input.trafficPolicyInstanceNameMarker,
          TrafficPolicyInstanceTypeMarker: this.__input.trafficPolicyInstanceTypeMarker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTrafficPolicyInstancesByHostedZone.MaxItems', props);
    return resource.getResponseField('MaxItems') as unknown as string;
  }

}

export class Route53ResponsesListTrafficPolicyInstancesByPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ListTrafficPolicyInstancesByPolicyRequest) {
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
          TrafficPolicyId: this.__input.trafficPolicyId,
          TrafficPolicyVersion: this.__input.trafficPolicyVersion,
          HostedZoneIdMarker: this.__input.hostedZoneIdMarker,
          TrafficPolicyInstanceNameMarker: this.__input.trafficPolicyInstanceNameMarker,
          TrafficPolicyInstanceTypeMarker: this.__input.trafficPolicyInstanceTypeMarker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTrafficPolicyInstancesByPolicy.TrafficPolicyInstances', props);
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
          TrafficPolicyId: this.__input.trafficPolicyId,
          TrafficPolicyVersion: this.__input.trafficPolicyVersion,
          HostedZoneIdMarker: this.__input.hostedZoneIdMarker,
          TrafficPolicyInstanceNameMarker: this.__input.trafficPolicyInstanceNameMarker,
          TrafficPolicyInstanceTypeMarker: this.__input.trafficPolicyInstanceTypeMarker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTrafficPolicyInstancesByPolicy.HostedZoneIdMarker', props);
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
          TrafficPolicyId: this.__input.trafficPolicyId,
          TrafficPolicyVersion: this.__input.trafficPolicyVersion,
          HostedZoneIdMarker: this.__input.hostedZoneIdMarker,
          TrafficPolicyInstanceNameMarker: this.__input.trafficPolicyInstanceNameMarker,
          TrafficPolicyInstanceTypeMarker: this.__input.trafficPolicyInstanceTypeMarker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTrafficPolicyInstancesByPolicy.TrafficPolicyInstanceNameMarker', props);
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
          TrafficPolicyId: this.__input.trafficPolicyId,
          TrafficPolicyVersion: this.__input.trafficPolicyVersion,
          HostedZoneIdMarker: this.__input.hostedZoneIdMarker,
          TrafficPolicyInstanceNameMarker: this.__input.trafficPolicyInstanceNameMarker,
          TrafficPolicyInstanceTypeMarker: this.__input.trafficPolicyInstanceTypeMarker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTrafficPolicyInstancesByPolicy.TrafficPolicyInstanceTypeMarker', props);
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
          TrafficPolicyId: this.__input.trafficPolicyId,
          TrafficPolicyVersion: this.__input.trafficPolicyVersion,
          HostedZoneIdMarker: this.__input.hostedZoneIdMarker,
          TrafficPolicyInstanceNameMarker: this.__input.trafficPolicyInstanceNameMarker,
          TrafficPolicyInstanceTypeMarker: this.__input.trafficPolicyInstanceTypeMarker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTrafficPolicyInstancesByPolicy.IsTruncated', props);
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
          TrafficPolicyId: this.__input.trafficPolicyId,
          TrafficPolicyVersion: this.__input.trafficPolicyVersion,
          HostedZoneIdMarker: this.__input.hostedZoneIdMarker,
          TrafficPolicyInstanceNameMarker: this.__input.trafficPolicyInstanceNameMarker,
          TrafficPolicyInstanceTypeMarker: this.__input.trafficPolicyInstanceTypeMarker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTrafficPolicyInstancesByPolicy.MaxItems', props);
    return resource.getResponseField('MaxItems') as unknown as string;
  }

}

export class Route53ResponsesListTrafficPolicyVersions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ListTrafficPolicyVersionsRequest) {
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
          Id: this.__input.id,
          TrafficPolicyVersionMarker: this.__input.trafficPolicyVersionMarker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTrafficPolicyVersions.TrafficPolicies', props);
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
          Id: this.__input.id,
          TrafficPolicyVersionMarker: this.__input.trafficPolicyVersionMarker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTrafficPolicyVersions.IsTruncated', props);
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
          Id: this.__input.id,
          TrafficPolicyVersionMarker: this.__input.trafficPolicyVersionMarker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTrafficPolicyVersions.TrafficPolicyVersionMarker', props);
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
          Id: this.__input.id,
          TrafficPolicyVersionMarker: this.__input.trafficPolicyVersionMarker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTrafficPolicyVersions.MaxItems', props);
    return resource.getResponseField('MaxItems') as unknown as string;
  }

}

export class Route53ResponsesListVpcAssociationAuthorizations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ListVpcAssociationAuthorizationsRequest) {
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
          HostedZoneId: this.__input.hostedZoneId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListVPCAssociationAuthorizations.HostedZoneId', props);
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
          HostedZoneId: this.__input.hostedZoneId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListVPCAssociationAuthorizations.NextToken', props);
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
          HostedZoneId: this.__input.hostedZoneId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListVPCAssociationAuthorizations.VPCs', props);
    return resource.getResponseField('VPCs') as unknown as shapes.Route53Vpc[];
  }

}

export class Route53ResponsesTestDnsAnswer {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53TestDnsAnswerRequest) {
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
          HostedZoneId: this.__input.hostedZoneId,
          RecordName: this.__input.recordName,
          RecordType: this.__input.recordType,
          ResolverIP: this.__input.resolverIp,
          EDNS0ClientSubnetIP: this.__input.edns0ClientSubnetIp,
          EDNS0ClientSubnetMask: this.__input.edns0ClientSubnetMask,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TestDNSAnswer.Nameserver', props);
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
          HostedZoneId: this.__input.hostedZoneId,
          RecordName: this.__input.recordName,
          RecordType: this.__input.recordType,
          ResolverIP: this.__input.resolverIp,
          EDNS0ClientSubnetIP: this.__input.edns0ClientSubnetIp,
          EDNS0ClientSubnetMask: this.__input.edns0ClientSubnetMask,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TestDNSAnswer.RecordName', props);
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
          HostedZoneId: this.__input.hostedZoneId,
          RecordName: this.__input.recordName,
          RecordType: this.__input.recordType,
          ResolverIP: this.__input.resolverIp,
          EDNS0ClientSubnetIP: this.__input.edns0ClientSubnetIp,
          EDNS0ClientSubnetMask: this.__input.edns0ClientSubnetMask,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TestDNSAnswer.RecordType', props);
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
          HostedZoneId: this.__input.hostedZoneId,
          RecordName: this.__input.recordName,
          RecordType: this.__input.recordType,
          ResolverIP: this.__input.resolverIp,
          EDNS0ClientSubnetIP: this.__input.edns0ClientSubnetIp,
          EDNS0ClientSubnetMask: this.__input.edns0ClientSubnetMask,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TestDNSAnswer.RecordData', props);
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
          HostedZoneId: this.__input.hostedZoneId,
          RecordName: this.__input.recordName,
          RecordType: this.__input.recordType,
          ResolverIP: this.__input.resolverIp,
          EDNS0ClientSubnetIP: this.__input.edns0ClientSubnetIp,
          EDNS0ClientSubnetMask: this.__input.edns0ClientSubnetMask,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TestDNSAnswer.ResponseCode', props);
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
          HostedZoneId: this.__input.hostedZoneId,
          RecordName: this.__input.recordName,
          RecordType: this.__input.recordType,
          ResolverIP: this.__input.resolverIp,
          EDNS0ClientSubnetIP: this.__input.edns0ClientSubnetIp,
          EDNS0ClientSubnetMask: this.__input.edns0ClientSubnetMask,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TestDNSAnswer.Protocol', props);
    return resource.getResponseField('Protocol') as unknown as string;
  }

}

export class Route53ResponsesUpdateHealthCheck {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53UpdateHealthCheckRequest) {
  }

  public get healthCheck(): Route53ResponsesUpdateHealthCheckHealthCheck {
    return new Route53ResponsesUpdateHealthCheckHealthCheck(this.__scope, this.__resources, this.__input);
  }

}

export class Route53ResponsesUpdateHealthCheckHealthCheck {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53UpdateHealthCheckRequest) {
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
          HealthCheckId: this.__input.healthCheckId,
          HealthCheckVersion: this.__input.healthCheckVersion,
          IPAddress: this.__input.ipAddress,
          Port: this.__input.port,
          ResourcePath: this.__input.resourcePath,
          FullyQualifiedDomainName: this.__input.fullyQualifiedDomainName,
          SearchString: this.__input.searchString,
          FailureThreshold: this.__input.failureThreshold,
          Inverted: this.__input.inverted,
          Disabled: this.__input.disabled,
          HealthThreshold: this.__input.healthThreshold,
          ChildHealthChecks: this.__input.childHealthChecks,
          EnableSNI: this.__input.enableSni,
          Regions: this.__input.regions,
          AlarmIdentifier: {
            Region: this.__input.alarmIdentifier?.region,
            Name: this.__input.alarmIdentifier?.name,
          },
          InsufficientDataHealthStatus: this.__input.insufficientDataHealthStatus,
          ResetElements: this.__input.resetElements,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateHealthCheck.HealthCheck.Id', props);
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
          HealthCheckId: this.__input.healthCheckId,
          HealthCheckVersion: this.__input.healthCheckVersion,
          IPAddress: this.__input.ipAddress,
          Port: this.__input.port,
          ResourcePath: this.__input.resourcePath,
          FullyQualifiedDomainName: this.__input.fullyQualifiedDomainName,
          SearchString: this.__input.searchString,
          FailureThreshold: this.__input.failureThreshold,
          Inverted: this.__input.inverted,
          Disabled: this.__input.disabled,
          HealthThreshold: this.__input.healthThreshold,
          ChildHealthChecks: this.__input.childHealthChecks,
          EnableSNI: this.__input.enableSni,
          Regions: this.__input.regions,
          AlarmIdentifier: {
            Region: this.__input.alarmIdentifier?.region,
            Name: this.__input.alarmIdentifier?.name,
          },
          InsufficientDataHealthStatus: this.__input.insufficientDataHealthStatus,
          ResetElements: this.__input.resetElements,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateHealthCheck.HealthCheck.CallerReference', props);
    return resource.getResponseField('HealthCheck.CallerReference') as unknown as string;
  }

  public get linkedService(): Route53ResponsesUpdateHealthCheckHealthCheckLinkedService {
    return new Route53ResponsesUpdateHealthCheckHealthCheckLinkedService(this.__scope, this.__resources, this.__input);
  }

  public get healthCheckConfig(): Route53ResponsesUpdateHealthCheckHealthCheckHealthCheckConfig {
    return new Route53ResponsesUpdateHealthCheckHealthCheckHealthCheckConfig(this.__scope, this.__resources, this.__input);
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
          HealthCheckId: this.__input.healthCheckId,
          HealthCheckVersion: this.__input.healthCheckVersion,
          IPAddress: this.__input.ipAddress,
          Port: this.__input.port,
          ResourcePath: this.__input.resourcePath,
          FullyQualifiedDomainName: this.__input.fullyQualifiedDomainName,
          SearchString: this.__input.searchString,
          FailureThreshold: this.__input.failureThreshold,
          Inverted: this.__input.inverted,
          Disabled: this.__input.disabled,
          HealthThreshold: this.__input.healthThreshold,
          ChildHealthChecks: this.__input.childHealthChecks,
          EnableSNI: this.__input.enableSni,
          Regions: this.__input.regions,
          AlarmIdentifier: {
            Region: this.__input.alarmIdentifier?.region,
            Name: this.__input.alarmIdentifier?.name,
          },
          InsufficientDataHealthStatus: this.__input.insufficientDataHealthStatus,
          ResetElements: this.__input.resetElements,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateHealthCheck.HealthCheck.HealthCheckVersion', props);
    return resource.getResponseField('HealthCheck.HealthCheckVersion') as unknown as number;
  }

  public get cloudWatchAlarmConfiguration(): Route53ResponsesUpdateHealthCheckHealthCheckCloudWatchAlarmConfiguration {
    return new Route53ResponsesUpdateHealthCheckHealthCheckCloudWatchAlarmConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class Route53ResponsesUpdateHealthCheckHealthCheckLinkedService {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53UpdateHealthCheckRequest) {
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
          HealthCheckId: this.__input.healthCheckId,
          HealthCheckVersion: this.__input.healthCheckVersion,
          IPAddress: this.__input.ipAddress,
          Port: this.__input.port,
          ResourcePath: this.__input.resourcePath,
          FullyQualifiedDomainName: this.__input.fullyQualifiedDomainName,
          SearchString: this.__input.searchString,
          FailureThreshold: this.__input.failureThreshold,
          Inverted: this.__input.inverted,
          Disabled: this.__input.disabled,
          HealthThreshold: this.__input.healthThreshold,
          ChildHealthChecks: this.__input.childHealthChecks,
          EnableSNI: this.__input.enableSni,
          Regions: this.__input.regions,
          AlarmIdentifier: {
            Region: this.__input.alarmIdentifier?.region,
            Name: this.__input.alarmIdentifier?.name,
          },
          InsufficientDataHealthStatus: this.__input.insufficientDataHealthStatus,
          ResetElements: this.__input.resetElements,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateHealthCheck.HealthCheck.LinkedService.ServicePrincipal', props);
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
          HealthCheckId: this.__input.healthCheckId,
          HealthCheckVersion: this.__input.healthCheckVersion,
          IPAddress: this.__input.ipAddress,
          Port: this.__input.port,
          ResourcePath: this.__input.resourcePath,
          FullyQualifiedDomainName: this.__input.fullyQualifiedDomainName,
          SearchString: this.__input.searchString,
          FailureThreshold: this.__input.failureThreshold,
          Inverted: this.__input.inverted,
          Disabled: this.__input.disabled,
          HealthThreshold: this.__input.healthThreshold,
          ChildHealthChecks: this.__input.childHealthChecks,
          EnableSNI: this.__input.enableSni,
          Regions: this.__input.regions,
          AlarmIdentifier: {
            Region: this.__input.alarmIdentifier?.region,
            Name: this.__input.alarmIdentifier?.name,
          },
          InsufficientDataHealthStatus: this.__input.insufficientDataHealthStatus,
          ResetElements: this.__input.resetElements,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateHealthCheck.HealthCheck.LinkedService.Description', props);
    return resource.getResponseField('HealthCheck.LinkedService.Description') as unknown as string;
  }

}

export class Route53ResponsesUpdateHealthCheckHealthCheckHealthCheckConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53UpdateHealthCheckRequest) {
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
          HealthCheckId: this.__input.healthCheckId,
          HealthCheckVersion: this.__input.healthCheckVersion,
          IPAddress: this.__input.ipAddress,
          Port: this.__input.port,
          ResourcePath: this.__input.resourcePath,
          FullyQualifiedDomainName: this.__input.fullyQualifiedDomainName,
          SearchString: this.__input.searchString,
          FailureThreshold: this.__input.failureThreshold,
          Inverted: this.__input.inverted,
          Disabled: this.__input.disabled,
          HealthThreshold: this.__input.healthThreshold,
          ChildHealthChecks: this.__input.childHealthChecks,
          EnableSNI: this.__input.enableSni,
          Regions: this.__input.regions,
          AlarmIdentifier: {
            Region: this.__input.alarmIdentifier?.region,
            Name: this.__input.alarmIdentifier?.name,
          },
          InsufficientDataHealthStatus: this.__input.insufficientDataHealthStatus,
          ResetElements: this.__input.resetElements,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateHealthCheck.HealthCheck.HealthCheckConfig.IPAddress', props);
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
          HealthCheckId: this.__input.healthCheckId,
          HealthCheckVersion: this.__input.healthCheckVersion,
          IPAddress: this.__input.ipAddress,
          Port: this.__input.port,
          ResourcePath: this.__input.resourcePath,
          FullyQualifiedDomainName: this.__input.fullyQualifiedDomainName,
          SearchString: this.__input.searchString,
          FailureThreshold: this.__input.failureThreshold,
          Inverted: this.__input.inverted,
          Disabled: this.__input.disabled,
          HealthThreshold: this.__input.healthThreshold,
          ChildHealthChecks: this.__input.childHealthChecks,
          EnableSNI: this.__input.enableSni,
          Regions: this.__input.regions,
          AlarmIdentifier: {
            Region: this.__input.alarmIdentifier?.region,
            Name: this.__input.alarmIdentifier?.name,
          },
          InsufficientDataHealthStatus: this.__input.insufficientDataHealthStatus,
          ResetElements: this.__input.resetElements,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateHealthCheck.HealthCheck.HealthCheckConfig.Port', props);
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
          HealthCheckId: this.__input.healthCheckId,
          HealthCheckVersion: this.__input.healthCheckVersion,
          IPAddress: this.__input.ipAddress,
          Port: this.__input.port,
          ResourcePath: this.__input.resourcePath,
          FullyQualifiedDomainName: this.__input.fullyQualifiedDomainName,
          SearchString: this.__input.searchString,
          FailureThreshold: this.__input.failureThreshold,
          Inverted: this.__input.inverted,
          Disabled: this.__input.disabled,
          HealthThreshold: this.__input.healthThreshold,
          ChildHealthChecks: this.__input.childHealthChecks,
          EnableSNI: this.__input.enableSni,
          Regions: this.__input.regions,
          AlarmIdentifier: {
            Region: this.__input.alarmIdentifier?.region,
            Name: this.__input.alarmIdentifier?.name,
          },
          InsufficientDataHealthStatus: this.__input.insufficientDataHealthStatus,
          ResetElements: this.__input.resetElements,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateHealthCheck.HealthCheck.HealthCheckConfig.Type', props);
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
          HealthCheckId: this.__input.healthCheckId,
          HealthCheckVersion: this.__input.healthCheckVersion,
          IPAddress: this.__input.ipAddress,
          Port: this.__input.port,
          ResourcePath: this.__input.resourcePath,
          FullyQualifiedDomainName: this.__input.fullyQualifiedDomainName,
          SearchString: this.__input.searchString,
          FailureThreshold: this.__input.failureThreshold,
          Inverted: this.__input.inverted,
          Disabled: this.__input.disabled,
          HealthThreshold: this.__input.healthThreshold,
          ChildHealthChecks: this.__input.childHealthChecks,
          EnableSNI: this.__input.enableSni,
          Regions: this.__input.regions,
          AlarmIdentifier: {
            Region: this.__input.alarmIdentifier?.region,
            Name: this.__input.alarmIdentifier?.name,
          },
          InsufficientDataHealthStatus: this.__input.insufficientDataHealthStatus,
          ResetElements: this.__input.resetElements,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateHealthCheck.HealthCheck.HealthCheckConfig.ResourcePath', props);
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
          HealthCheckId: this.__input.healthCheckId,
          HealthCheckVersion: this.__input.healthCheckVersion,
          IPAddress: this.__input.ipAddress,
          Port: this.__input.port,
          ResourcePath: this.__input.resourcePath,
          FullyQualifiedDomainName: this.__input.fullyQualifiedDomainName,
          SearchString: this.__input.searchString,
          FailureThreshold: this.__input.failureThreshold,
          Inverted: this.__input.inverted,
          Disabled: this.__input.disabled,
          HealthThreshold: this.__input.healthThreshold,
          ChildHealthChecks: this.__input.childHealthChecks,
          EnableSNI: this.__input.enableSni,
          Regions: this.__input.regions,
          AlarmIdentifier: {
            Region: this.__input.alarmIdentifier?.region,
            Name: this.__input.alarmIdentifier?.name,
          },
          InsufficientDataHealthStatus: this.__input.insufficientDataHealthStatus,
          ResetElements: this.__input.resetElements,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateHealthCheck.HealthCheck.HealthCheckConfig.FullyQualifiedDomainName', props);
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
          HealthCheckId: this.__input.healthCheckId,
          HealthCheckVersion: this.__input.healthCheckVersion,
          IPAddress: this.__input.ipAddress,
          Port: this.__input.port,
          ResourcePath: this.__input.resourcePath,
          FullyQualifiedDomainName: this.__input.fullyQualifiedDomainName,
          SearchString: this.__input.searchString,
          FailureThreshold: this.__input.failureThreshold,
          Inverted: this.__input.inverted,
          Disabled: this.__input.disabled,
          HealthThreshold: this.__input.healthThreshold,
          ChildHealthChecks: this.__input.childHealthChecks,
          EnableSNI: this.__input.enableSni,
          Regions: this.__input.regions,
          AlarmIdentifier: {
            Region: this.__input.alarmIdentifier?.region,
            Name: this.__input.alarmIdentifier?.name,
          },
          InsufficientDataHealthStatus: this.__input.insufficientDataHealthStatus,
          ResetElements: this.__input.resetElements,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateHealthCheck.HealthCheck.HealthCheckConfig.SearchString', props);
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
          HealthCheckId: this.__input.healthCheckId,
          HealthCheckVersion: this.__input.healthCheckVersion,
          IPAddress: this.__input.ipAddress,
          Port: this.__input.port,
          ResourcePath: this.__input.resourcePath,
          FullyQualifiedDomainName: this.__input.fullyQualifiedDomainName,
          SearchString: this.__input.searchString,
          FailureThreshold: this.__input.failureThreshold,
          Inverted: this.__input.inverted,
          Disabled: this.__input.disabled,
          HealthThreshold: this.__input.healthThreshold,
          ChildHealthChecks: this.__input.childHealthChecks,
          EnableSNI: this.__input.enableSni,
          Regions: this.__input.regions,
          AlarmIdentifier: {
            Region: this.__input.alarmIdentifier?.region,
            Name: this.__input.alarmIdentifier?.name,
          },
          InsufficientDataHealthStatus: this.__input.insufficientDataHealthStatus,
          ResetElements: this.__input.resetElements,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateHealthCheck.HealthCheck.HealthCheckConfig.RequestInterval', props);
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
          HealthCheckId: this.__input.healthCheckId,
          HealthCheckVersion: this.__input.healthCheckVersion,
          IPAddress: this.__input.ipAddress,
          Port: this.__input.port,
          ResourcePath: this.__input.resourcePath,
          FullyQualifiedDomainName: this.__input.fullyQualifiedDomainName,
          SearchString: this.__input.searchString,
          FailureThreshold: this.__input.failureThreshold,
          Inverted: this.__input.inverted,
          Disabled: this.__input.disabled,
          HealthThreshold: this.__input.healthThreshold,
          ChildHealthChecks: this.__input.childHealthChecks,
          EnableSNI: this.__input.enableSni,
          Regions: this.__input.regions,
          AlarmIdentifier: {
            Region: this.__input.alarmIdentifier?.region,
            Name: this.__input.alarmIdentifier?.name,
          },
          InsufficientDataHealthStatus: this.__input.insufficientDataHealthStatus,
          ResetElements: this.__input.resetElements,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateHealthCheck.HealthCheck.HealthCheckConfig.FailureThreshold', props);
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
          HealthCheckId: this.__input.healthCheckId,
          HealthCheckVersion: this.__input.healthCheckVersion,
          IPAddress: this.__input.ipAddress,
          Port: this.__input.port,
          ResourcePath: this.__input.resourcePath,
          FullyQualifiedDomainName: this.__input.fullyQualifiedDomainName,
          SearchString: this.__input.searchString,
          FailureThreshold: this.__input.failureThreshold,
          Inverted: this.__input.inverted,
          Disabled: this.__input.disabled,
          HealthThreshold: this.__input.healthThreshold,
          ChildHealthChecks: this.__input.childHealthChecks,
          EnableSNI: this.__input.enableSni,
          Regions: this.__input.regions,
          AlarmIdentifier: {
            Region: this.__input.alarmIdentifier?.region,
            Name: this.__input.alarmIdentifier?.name,
          },
          InsufficientDataHealthStatus: this.__input.insufficientDataHealthStatus,
          ResetElements: this.__input.resetElements,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateHealthCheck.HealthCheck.HealthCheckConfig.MeasureLatency', props);
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
          HealthCheckId: this.__input.healthCheckId,
          HealthCheckVersion: this.__input.healthCheckVersion,
          IPAddress: this.__input.ipAddress,
          Port: this.__input.port,
          ResourcePath: this.__input.resourcePath,
          FullyQualifiedDomainName: this.__input.fullyQualifiedDomainName,
          SearchString: this.__input.searchString,
          FailureThreshold: this.__input.failureThreshold,
          Inverted: this.__input.inverted,
          Disabled: this.__input.disabled,
          HealthThreshold: this.__input.healthThreshold,
          ChildHealthChecks: this.__input.childHealthChecks,
          EnableSNI: this.__input.enableSni,
          Regions: this.__input.regions,
          AlarmIdentifier: {
            Region: this.__input.alarmIdentifier?.region,
            Name: this.__input.alarmIdentifier?.name,
          },
          InsufficientDataHealthStatus: this.__input.insufficientDataHealthStatus,
          ResetElements: this.__input.resetElements,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateHealthCheck.HealthCheck.HealthCheckConfig.Inverted', props);
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
          HealthCheckId: this.__input.healthCheckId,
          HealthCheckVersion: this.__input.healthCheckVersion,
          IPAddress: this.__input.ipAddress,
          Port: this.__input.port,
          ResourcePath: this.__input.resourcePath,
          FullyQualifiedDomainName: this.__input.fullyQualifiedDomainName,
          SearchString: this.__input.searchString,
          FailureThreshold: this.__input.failureThreshold,
          Inverted: this.__input.inverted,
          Disabled: this.__input.disabled,
          HealthThreshold: this.__input.healthThreshold,
          ChildHealthChecks: this.__input.childHealthChecks,
          EnableSNI: this.__input.enableSni,
          Regions: this.__input.regions,
          AlarmIdentifier: {
            Region: this.__input.alarmIdentifier?.region,
            Name: this.__input.alarmIdentifier?.name,
          },
          InsufficientDataHealthStatus: this.__input.insufficientDataHealthStatus,
          ResetElements: this.__input.resetElements,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateHealthCheck.HealthCheck.HealthCheckConfig.Disabled', props);
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
          HealthCheckId: this.__input.healthCheckId,
          HealthCheckVersion: this.__input.healthCheckVersion,
          IPAddress: this.__input.ipAddress,
          Port: this.__input.port,
          ResourcePath: this.__input.resourcePath,
          FullyQualifiedDomainName: this.__input.fullyQualifiedDomainName,
          SearchString: this.__input.searchString,
          FailureThreshold: this.__input.failureThreshold,
          Inverted: this.__input.inverted,
          Disabled: this.__input.disabled,
          HealthThreshold: this.__input.healthThreshold,
          ChildHealthChecks: this.__input.childHealthChecks,
          EnableSNI: this.__input.enableSni,
          Regions: this.__input.regions,
          AlarmIdentifier: {
            Region: this.__input.alarmIdentifier?.region,
            Name: this.__input.alarmIdentifier?.name,
          },
          InsufficientDataHealthStatus: this.__input.insufficientDataHealthStatus,
          ResetElements: this.__input.resetElements,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateHealthCheck.HealthCheck.HealthCheckConfig.HealthThreshold', props);
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
          HealthCheckId: this.__input.healthCheckId,
          HealthCheckVersion: this.__input.healthCheckVersion,
          IPAddress: this.__input.ipAddress,
          Port: this.__input.port,
          ResourcePath: this.__input.resourcePath,
          FullyQualifiedDomainName: this.__input.fullyQualifiedDomainName,
          SearchString: this.__input.searchString,
          FailureThreshold: this.__input.failureThreshold,
          Inverted: this.__input.inverted,
          Disabled: this.__input.disabled,
          HealthThreshold: this.__input.healthThreshold,
          ChildHealthChecks: this.__input.childHealthChecks,
          EnableSNI: this.__input.enableSni,
          Regions: this.__input.regions,
          AlarmIdentifier: {
            Region: this.__input.alarmIdentifier?.region,
            Name: this.__input.alarmIdentifier?.name,
          },
          InsufficientDataHealthStatus: this.__input.insufficientDataHealthStatus,
          ResetElements: this.__input.resetElements,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateHealthCheck.HealthCheck.HealthCheckConfig.ChildHealthChecks', props);
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
          HealthCheckId: this.__input.healthCheckId,
          HealthCheckVersion: this.__input.healthCheckVersion,
          IPAddress: this.__input.ipAddress,
          Port: this.__input.port,
          ResourcePath: this.__input.resourcePath,
          FullyQualifiedDomainName: this.__input.fullyQualifiedDomainName,
          SearchString: this.__input.searchString,
          FailureThreshold: this.__input.failureThreshold,
          Inverted: this.__input.inverted,
          Disabled: this.__input.disabled,
          HealthThreshold: this.__input.healthThreshold,
          ChildHealthChecks: this.__input.childHealthChecks,
          EnableSNI: this.__input.enableSni,
          Regions: this.__input.regions,
          AlarmIdentifier: {
            Region: this.__input.alarmIdentifier?.region,
            Name: this.__input.alarmIdentifier?.name,
          },
          InsufficientDataHealthStatus: this.__input.insufficientDataHealthStatus,
          ResetElements: this.__input.resetElements,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateHealthCheck.HealthCheck.HealthCheckConfig.EnableSNI', props);
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
          HealthCheckId: this.__input.healthCheckId,
          HealthCheckVersion: this.__input.healthCheckVersion,
          IPAddress: this.__input.ipAddress,
          Port: this.__input.port,
          ResourcePath: this.__input.resourcePath,
          FullyQualifiedDomainName: this.__input.fullyQualifiedDomainName,
          SearchString: this.__input.searchString,
          FailureThreshold: this.__input.failureThreshold,
          Inverted: this.__input.inverted,
          Disabled: this.__input.disabled,
          HealthThreshold: this.__input.healthThreshold,
          ChildHealthChecks: this.__input.childHealthChecks,
          EnableSNI: this.__input.enableSni,
          Regions: this.__input.regions,
          AlarmIdentifier: {
            Region: this.__input.alarmIdentifier?.region,
            Name: this.__input.alarmIdentifier?.name,
          },
          InsufficientDataHealthStatus: this.__input.insufficientDataHealthStatus,
          ResetElements: this.__input.resetElements,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateHealthCheck.HealthCheck.HealthCheckConfig.Regions', props);
    return resource.getResponseField('HealthCheck.HealthCheckConfig.Regions') as unknown as string[];
  }

  public get alarmIdentifier(): Route53ResponsesUpdateHealthCheckHealthCheckHealthCheckConfigAlarmIdentifier {
    return new Route53ResponsesUpdateHealthCheckHealthCheckHealthCheckConfigAlarmIdentifier(this.__scope, this.__resources, this.__input);
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
          HealthCheckId: this.__input.healthCheckId,
          HealthCheckVersion: this.__input.healthCheckVersion,
          IPAddress: this.__input.ipAddress,
          Port: this.__input.port,
          ResourcePath: this.__input.resourcePath,
          FullyQualifiedDomainName: this.__input.fullyQualifiedDomainName,
          SearchString: this.__input.searchString,
          FailureThreshold: this.__input.failureThreshold,
          Inverted: this.__input.inverted,
          Disabled: this.__input.disabled,
          HealthThreshold: this.__input.healthThreshold,
          ChildHealthChecks: this.__input.childHealthChecks,
          EnableSNI: this.__input.enableSni,
          Regions: this.__input.regions,
          AlarmIdentifier: {
            Region: this.__input.alarmIdentifier?.region,
            Name: this.__input.alarmIdentifier?.name,
          },
          InsufficientDataHealthStatus: this.__input.insufficientDataHealthStatus,
          ResetElements: this.__input.resetElements,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateHealthCheck.HealthCheck.HealthCheckConfig.InsufficientDataHealthStatus', props);
    return resource.getResponseField('HealthCheck.HealthCheckConfig.InsufficientDataHealthStatus') as unknown as string;
  }

}

export class Route53ResponsesUpdateHealthCheckHealthCheckHealthCheckConfigAlarmIdentifier {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53UpdateHealthCheckRequest) {
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
          HealthCheckId: this.__input.healthCheckId,
          HealthCheckVersion: this.__input.healthCheckVersion,
          IPAddress: this.__input.ipAddress,
          Port: this.__input.port,
          ResourcePath: this.__input.resourcePath,
          FullyQualifiedDomainName: this.__input.fullyQualifiedDomainName,
          SearchString: this.__input.searchString,
          FailureThreshold: this.__input.failureThreshold,
          Inverted: this.__input.inverted,
          Disabled: this.__input.disabled,
          HealthThreshold: this.__input.healthThreshold,
          ChildHealthChecks: this.__input.childHealthChecks,
          EnableSNI: this.__input.enableSni,
          Regions: this.__input.regions,
          AlarmIdentifier: {
            Region: this.__input.alarmIdentifier?.region,
            Name: this.__input.alarmIdentifier?.name,
          },
          InsufficientDataHealthStatus: this.__input.insufficientDataHealthStatus,
          ResetElements: this.__input.resetElements,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateHealthCheck.HealthCheck.HealthCheckConfig.AlarmIdentifier.Region', props);
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
          HealthCheckId: this.__input.healthCheckId,
          HealthCheckVersion: this.__input.healthCheckVersion,
          IPAddress: this.__input.ipAddress,
          Port: this.__input.port,
          ResourcePath: this.__input.resourcePath,
          FullyQualifiedDomainName: this.__input.fullyQualifiedDomainName,
          SearchString: this.__input.searchString,
          FailureThreshold: this.__input.failureThreshold,
          Inverted: this.__input.inverted,
          Disabled: this.__input.disabled,
          HealthThreshold: this.__input.healthThreshold,
          ChildHealthChecks: this.__input.childHealthChecks,
          EnableSNI: this.__input.enableSni,
          Regions: this.__input.regions,
          AlarmIdentifier: {
            Region: this.__input.alarmIdentifier?.region,
            Name: this.__input.alarmIdentifier?.name,
          },
          InsufficientDataHealthStatus: this.__input.insufficientDataHealthStatus,
          ResetElements: this.__input.resetElements,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateHealthCheck.HealthCheck.HealthCheckConfig.AlarmIdentifier.Name', props);
    return resource.getResponseField('HealthCheck.HealthCheckConfig.AlarmIdentifier.Name') as unknown as string;
  }

}

export class Route53ResponsesUpdateHealthCheckHealthCheckCloudWatchAlarmConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53UpdateHealthCheckRequest) {
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
          HealthCheckId: this.__input.healthCheckId,
          HealthCheckVersion: this.__input.healthCheckVersion,
          IPAddress: this.__input.ipAddress,
          Port: this.__input.port,
          ResourcePath: this.__input.resourcePath,
          FullyQualifiedDomainName: this.__input.fullyQualifiedDomainName,
          SearchString: this.__input.searchString,
          FailureThreshold: this.__input.failureThreshold,
          Inverted: this.__input.inverted,
          Disabled: this.__input.disabled,
          HealthThreshold: this.__input.healthThreshold,
          ChildHealthChecks: this.__input.childHealthChecks,
          EnableSNI: this.__input.enableSni,
          Regions: this.__input.regions,
          AlarmIdentifier: {
            Region: this.__input.alarmIdentifier?.region,
            Name: this.__input.alarmIdentifier?.name,
          },
          InsufficientDataHealthStatus: this.__input.insufficientDataHealthStatus,
          ResetElements: this.__input.resetElements,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateHealthCheck.HealthCheck.CloudWatchAlarmConfiguration.EvaluationPeriods', props);
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
          HealthCheckId: this.__input.healthCheckId,
          HealthCheckVersion: this.__input.healthCheckVersion,
          IPAddress: this.__input.ipAddress,
          Port: this.__input.port,
          ResourcePath: this.__input.resourcePath,
          FullyQualifiedDomainName: this.__input.fullyQualifiedDomainName,
          SearchString: this.__input.searchString,
          FailureThreshold: this.__input.failureThreshold,
          Inverted: this.__input.inverted,
          Disabled: this.__input.disabled,
          HealthThreshold: this.__input.healthThreshold,
          ChildHealthChecks: this.__input.childHealthChecks,
          EnableSNI: this.__input.enableSni,
          Regions: this.__input.regions,
          AlarmIdentifier: {
            Region: this.__input.alarmIdentifier?.region,
            Name: this.__input.alarmIdentifier?.name,
          },
          InsufficientDataHealthStatus: this.__input.insufficientDataHealthStatus,
          ResetElements: this.__input.resetElements,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateHealthCheck.HealthCheck.CloudWatchAlarmConfiguration.Threshold', props);
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
          HealthCheckId: this.__input.healthCheckId,
          HealthCheckVersion: this.__input.healthCheckVersion,
          IPAddress: this.__input.ipAddress,
          Port: this.__input.port,
          ResourcePath: this.__input.resourcePath,
          FullyQualifiedDomainName: this.__input.fullyQualifiedDomainName,
          SearchString: this.__input.searchString,
          FailureThreshold: this.__input.failureThreshold,
          Inverted: this.__input.inverted,
          Disabled: this.__input.disabled,
          HealthThreshold: this.__input.healthThreshold,
          ChildHealthChecks: this.__input.childHealthChecks,
          EnableSNI: this.__input.enableSni,
          Regions: this.__input.regions,
          AlarmIdentifier: {
            Region: this.__input.alarmIdentifier?.region,
            Name: this.__input.alarmIdentifier?.name,
          },
          InsufficientDataHealthStatus: this.__input.insufficientDataHealthStatus,
          ResetElements: this.__input.resetElements,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateHealthCheck.HealthCheck.CloudWatchAlarmConfiguration.ComparisonOperator', props);
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
          HealthCheckId: this.__input.healthCheckId,
          HealthCheckVersion: this.__input.healthCheckVersion,
          IPAddress: this.__input.ipAddress,
          Port: this.__input.port,
          ResourcePath: this.__input.resourcePath,
          FullyQualifiedDomainName: this.__input.fullyQualifiedDomainName,
          SearchString: this.__input.searchString,
          FailureThreshold: this.__input.failureThreshold,
          Inverted: this.__input.inverted,
          Disabled: this.__input.disabled,
          HealthThreshold: this.__input.healthThreshold,
          ChildHealthChecks: this.__input.childHealthChecks,
          EnableSNI: this.__input.enableSni,
          Regions: this.__input.regions,
          AlarmIdentifier: {
            Region: this.__input.alarmIdentifier?.region,
            Name: this.__input.alarmIdentifier?.name,
          },
          InsufficientDataHealthStatus: this.__input.insufficientDataHealthStatus,
          ResetElements: this.__input.resetElements,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateHealthCheck.HealthCheck.CloudWatchAlarmConfiguration.Period', props);
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
          HealthCheckId: this.__input.healthCheckId,
          HealthCheckVersion: this.__input.healthCheckVersion,
          IPAddress: this.__input.ipAddress,
          Port: this.__input.port,
          ResourcePath: this.__input.resourcePath,
          FullyQualifiedDomainName: this.__input.fullyQualifiedDomainName,
          SearchString: this.__input.searchString,
          FailureThreshold: this.__input.failureThreshold,
          Inverted: this.__input.inverted,
          Disabled: this.__input.disabled,
          HealthThreshold: this.__input.healthThreshold,
          ChildHealthChecks: this.__input.childHealthChecks,
          EnableSNI: this.__input.enableSni,
          Regions: this.__input.regions,
          AlarmIdentifier: {
            Region: this.__input.alarmIdentifier?.region,
            Name: this.__input.alarmIdentifier?.name,
          },
          InsufficientDataHealthStatus: this.__input.insufficientDataHealthStatus,
          ResetElements: this.__input.resetElements,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateHealthCheck.HealthCheck.CloudWatchAlarmConfiguration.MetricName', props);
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
          HealthCheckId: this.__input.healthCheckId,
          HealthCheckVersion: this.__input.healthCheckVersion,
          IPAddress: this.__input.ipAddress,
          Port: this.__input.port,
          ResourcePath: this.__input.resourcePath,
          FullyQualifiedDomainName: this.__input.fullyQualifiedDomainName,
          SearchString: this.__input.searchString,
          FailureThreshold: this.__input.failureThreshold,
          Inverted: this.__input.inverted,
          Disabled: this.__input.disabled,
          HealthThreshold: this.__input.healthThreshold,
          ChildHealthChecks: this.__input.childHealthChecks,
          EnableSNI: this.__input.enableSni,
          Regions: this.__input.regions,
          AlarmIdentifier: {
            Region: this.__input.alarmIdentifier?.region,
            Name: this.__input.alarmIdentifier?.name,
          },
          InsufficientDataHealthStatus: this.__input.insufficientDataHealthStatus,
          ResetElements: this.__input.resetElements,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateHealthCheck.HealthCheck.CloudWatchAlarmConfiguration.Namespace', props);
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
          HealthCheckId: this.__input.healthCheckId,
          HealthCheckVersion: this.__input.healthCheckVersion,
          IPAddress: this.__input.ipAddress,
          Port: this.__input.port,
          ResourcePath: this.__input.resourcePath,
          FullyQualifiedDomainName: this.__input.fullyQualifiedDomainName,
          SearchString: this.__input.searchString,
          FailureThreshold: this.__input.failureThreshold,
          Inverted: this.__input.inverted,
          Disabled: this.__input.disabled,
          HealthThreshold: this.__input.healthThreshold,
          ChildHealthChecks: this.__input.childHealthChecks,
          EnableSNI: this.__input.enableSni,
          Regions: this.__input.regions,
          AlarmIdentifier: {
            Region: this.__input.alarmIdentifier?.region,
            Name: this.__input.alarmIdentifier?.name,
          },
          InsufficientDataHealthStatus: this.__input.insufficientDataHealthStatus,
          ResetElements: this.__input.resetElements,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateHealthCheck.HealthCheck.CloudWatchAlarmConfiguration.Statistic', props);
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
          HealthCheckId: this.__input.healthCheckId,
          HealthCheckVersion: this.__input.healthCheckVersion,
          IPAddress: this.__input.ipAddress,
          Port: this.__input.port,
          ResourcePath: this.__input.resourcePath,
          FullyQualifiedDomainName: this.__input.fullyQualifiedDomainName,
          SearchString: this.__input.searchString,
          FailureThreshold: this.__input.failureThreshold,
          Inverted: this.__input.inverted,
          Disabled: this.__input.disabled,
          HealthThreshold: this.__input.healthThreshold,
          ChildHealthChecks: this.__input.childHealthChecks,
          EnableSNI: this.__input.enableSni,
          Regions: this.__input.regions,
          AlarmIdentifier: {
            Region: this.__input.alarmIdentifier?.region,
            Name: this.__input.alarmIdentifier?.name,
          },
          InsufficientDataHealthStatus: this.__input.insufficientDataHealthStatus,
          ResetElements: this.__input.resetElements,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateHealthCheck.HealthCheck.CloudWatchAlarmConfiguration.Dimensions', props);
    return resource.getResponseField('HealthCheck.CloudWatchAlarmConfiguration.Dimensions') as unknown as shapes.Route53Dimension[];
  }

}

export class Route53ResponsesUpdateHostedZoneComment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53UpdateHostedZoneCommentRequest) {
  }

  public get hostedZone(): Route53ResponsesUpdateHostedZoneCommentHostedZone {
    return new Route53ResponsesUpdateHostedZoneCommentHostedZone(this.__scope, this.__resources, this.__input);
  }

}

export class Route53ResponsesUpdateHostedZoneCommentHostedZone {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53UpdateHostedZoneCommentRequest) {
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
          Id: this.__input.id,
          Comment: this.__input.comment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateHostedZoneComment.HostedZone.Id', props);
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
          Id: this.__input.id,
          Comment: this.__input.comment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateHostedZoneComment.HostedZone.Name', props);
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
          Id: this.__input.id,
          Comment: this.__input.comment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateHostedZoneComment.HostedZone.CallerReference', props);
    return resource.getResponseField('HostedZone.CallerReference') as unknown as string;
  }

  public get config(): Route53ResponsesUpdateHostedZoneCommentHostedZoneConfig {
    return new Route53ResponsesUpdateHostedZoneCommentHostedZoneConfig(this.__scope, this.__resources, this.__input);
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
          Id: this.__input.id,
          Comment: this.__input.comment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateHostedZoneComment.HostedZone.ResourceRecordSetCount', props);
    return resource.getResponseField('HostedZone.ResourceRecordSetCount') as unknown as number;
  }

  public get linkedService(): Route53ResponsesUpdateHostedZoneCommentHostedZoneLinkedService {
    return new Route53ResponsesUpdateHostedZoneCommentHostedZoneLinkedService(this.__scope, this.__resources, this.__input);
  }

}

export class Route53ResponsesUpdateHostedZoneCommentHostedZoneConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53UpdateHostedZoneCommentRequest) {
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
          Id: this.__input.id,
          Comment: this.__input.comment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateHostedZoneComment.HostedZone.Config.Comment', props);
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
          Id: this.__input.id,
          Comment: this.__input.comment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateHostedZoneComment.HostedZone.Config.PrivateZone', props);
    return resource.getResponseField('HostedZone.Config.PrivateZone') as unknown as boolean;
  }

}

export class Route53ResponsesUpdateHostedZoneCommentHostedZoneLinkedService {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53UpdateHostedZoneCommentRequest) {
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
          Id: this.__input.id,
          Comment: this.__input.comment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateHostedZoneComment.HostedZone.LinkedService.ServicePrincipal', props);
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
          Id: this.__input.id,
          Comment: this.__input.comment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateHostedZoneComment.HostedZone.LinkedService.Description', props);
    return resource.getResponseField('HostedZone.LinkedService.Description') as unknown as string;
  }

}

export class Route53ResponsesUpdateTrafficPolicyComment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53UpdateTrafficPolicyCommentRequest) {
  }

  public get trafficPolicy(): Route53ResponsesUpdateTrafficPolicyCommentTrafficPolicy {
    return new Route53ResponsesUpdateTrafficPolicyCommentTrafficPolicy(this.__scope, this.__resources, this.__input);
  }

}

export class Route53ResponsesUpdateTrafficPolicyCommentTrafficPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53UpdateTrafficPolicyCommentRequest) {
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
          Id: this.__input.id,
          Version: this.__input.version,
          Comment: this.__input.comment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTrafficPolicyComment.TrafficPolicy.Id', props);
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
          Id: this.__input.id,
          Version: this.__input.version,
          Comment: this.__input.comment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTrafficPolicyComment.TrafficPolicy.Version', props);
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
          Id: this.__input.id,
          Version: this.__input.version,
          Comment: this.__input.comment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTrafficPolicyComment.TrafficPolicy.Name', props);
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
          Id: this.__input.id,
          Version: this.__input.version,
          Comment: this.__input.comment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTrafficPolicyComment.TrafficPolicy.Type', props);
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
          Id: this.__input.id,
          Version: this.__input.version,
          Comment: this.__input.comment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTrafficPolicyComment.TrafficPolicy.Document', props);
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
          Id: this.__input.id,
          Version: this.__input.version,
          Comment: this.__input.comment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTrafficPolicyComment.TrafficPolicy.Comment', props);
    return resource.getResponseField('TrafficPolicy.Comment') as unknown as string;
  }

}

export class Route53ResponsesUpdateTrafficPolicyInstance {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53UpdateTrafficPolicyInstanceRequest) {
  }

  public get trafficPolicyInstance(): Route53ResponsesUpdateTrafficPolicyInstanceTrafficPolicyInstance {
    return new Route53ResponsesUpdateTrafficPolicyInstanceTrafficPolicyInstance(this.__scope, this.__resources, this.__input);
  }

}

export class Route53ResponsesUpdateTrafficPolicyInstanceTrafficPolicyInstance {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53UpdateTrafficPolicyInstanceRequest) {
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
          Id: this.__input.id,
          TTL: this.__input.ttl,
          TrafficPolicyId: this.__input.trafficPolicyId,
          TrafficPolicyVersion: this.__input.trafficPolicyVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTrafficPolicyInstance.TrafficPolicyInstance.Id', props);
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
          Id: this.__input.id,
          TTL: this.__input.ttl,
          TrafficPolicyId: this.__input.trafficPolicyId,
          TrafficPolicyVersion: this.__input.trafficPolicyVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTrafficPolicyInstance.TrafficPolicyInstance.HostedZoneId', props);
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
          Id: this.__input.id,
          TTL: this.__input.ttl,
          TrafficPolicyId: this.__input.trafficPolicyId,
          TrafficPolicyVersion: this.__input.trafficPolicyVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTrafficPolicyInstance.TrafficPolicyInstance.Name', props);
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
          Id: this.__input.id,
          TTL: this.__input.ttl,
          TrafficPolicyId: this.__input.trafficPolicyId,
          TrafficPolicyVersion: this.__input.trafficPolicyVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTrafficPolicyInstance.TrafficPolicyInstance.TTL', props);
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
          Id: this.__input.id,
          TTL: this.__input.ttl,
          TrafficPolicyId: this.__input.trafficPolicyId,
          TrafficPolicyVersion: this.__input.trafficPolicyVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTrafficPolicyInstance.TrafficPolicyInstance.State', props);
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
          Id: this.__input.id,
          TTL: this.__input.ttl,
          TrafficPolicyId: this.__input.trafficPolicyId,
          TrafficPolicyVersion: this.__input.trafficPolicyVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTrafficPolicyInstance.TrafficPolicyInstance.Message', props);
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
          Id: this.__input.id,
          TTL: this.__input.ttl,
          TrafficPolicyId: this.__input.trafficPolicyId,
          TrafficPolicyVersion: this.__input.trafficPolicyVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTrafficPolicyInstance.TrafficPolicyInstance.TrafficPolicyId', props);
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
          Id: this.__input.id,
          TTL: this.__input.ttl,
          TrafficPolicyId: this.__input.trafficPolicyId,
          TrafficPolicyVersion: this.__input.trafficPolicyVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTrafficPolicyInstance.TrafficPolicyInstance.TrafficPolicyVersion', props);
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
          Id: this.__input.id,
          TTL: this.__input.ttl,
          TrafficPolicyId: this.__input.trafficPolicyId,
          TrafficPolicyVersion: this.__input.trafficPolicyVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTrafficPolicyInstance.TrafficPolicyInstance.TrafficPolicyType', props);
    return resource.getResponseField('TrafficPolicyInstance.TrafficPolicyType') as unknown as string;
  }

}

