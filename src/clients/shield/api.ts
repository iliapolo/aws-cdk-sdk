import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class ShieldClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public associateDrtLogBucket(input: shapes.ShieldAssociateDrtLogBucketRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateDrtLogBucket',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.AssociateDRTLogBucket'),
        parameters: {
          LogBucket: input.logBucket,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AssociateDRTLogBucket', props);
  }

  public associateDrtRole(input: shapes.ShieldAssociateDrtRoleRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateDrtRole',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.AssociateDRTRole'),
        parameters: {
          RoleArn: input.roleArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AssociateDRTRole', props);
  }

  public associateHealthCheck(input: shapes.ShieldAssociateHealthCheckRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateHealthCheck',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.AssociateHealthCheck'),
        parameters: {
          ProtectionId: input.protectionId,
          HealthCheckArn: input.healthCheckArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AssociateHealthCheck', props);
  }

  public associateProactiveEngagementDetails(input: shapes.ShieldAssociateProactiveEngagementDetailsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateProactiveEngagementDetails',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.AssociateProactiveEngagementDetails'),
        parameters: {
          EmergencyContactList: input.emergencyContactList,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AssociateProactiveEngagementDetails', props);
  }

  public createProtection(input: shapes.ShieldCreateProtectionRequest): ShieldResponsesCreateProtection {
    return new ShieldResponsesCreateProtection(this, this.__resources, input);
  }

  public createProtectionGroup(input: shapes.ShieldCreateProtectionGroupRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProtectionGroup',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.CreateProtectionGroup'),
        parameters: {
          ProtectionGroupId: input.protectionGroupId,
          Aggregation: input.aggregation,
          Pattern: input.pattern,
          ResourceType: input.resourceType,
          Members: input.members,
        },
      },
    };
    new cr.AwsCustomResource(this, 'CreateProtectionGroup', props);
  }

  public createSubscription(): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSubscription',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.CreateSubscription'),
        parameters: {
        },
      },
    };
    new cr.AwsCustomResource(this, 'CreateSubscription', props);
  }

  public deleteProtection(input: shapes.ShieldDeleteProtectionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteProtection',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.DeleteProtection'),
        parameters: {
          ProtectionId: input.protectionId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteProtection', props);
  }

  public deleteProtectionGroup(input: shapes.ShieldDeleteProtectionGroupRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteProtectionGroup',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.DeleteProtectionGroup'),
        parameters: {
          ProtectionGroupId: input.protectionGroupId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteProtectionGroup', props);
  }

  public deleteSubscription(): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSubscription',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.DeleteSubscription'),
        parameters: {
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteSubscription', props);
  }

  public describeAttack(input: shapes.ShieldDescribeAttackRequest): ShieldResponsesDescribeAttack {
    return new ShieldResponsesDescribeAttack(this, this.__resources, input);
  }

  public describeAttackStatistics(): ShieldResponsesDescribeAttackStatistics {
    return new ShieldResponsesDescribeAttackStatistics(this, this.__resources);
  }

  public describeDrtAccess(): ShieldResponsesDescribeDrtAccess {
    return new ShieldResponsesDescribeDrtAccess(this, this.__resources);
  }

  public describeEmergencyContactSettings(): ShieldResponsesDescribeEmergencyContactSettings {
    return new ShieldResponsesDescribeEmergencyContactSettings(this, this.__resources);
  }

  public describeProtection(input: shapes.ShieldDescribeProtectionRequest): ShieldResponsesDescribeProtection {
    return new ShieldResponsesDescribeProtection(this, this.__resources, input);
  }

  public describeProtectionGroup(input: shapes.ShieldDescribeProtectionGroupRequest): ShieldResponsesDescribeProtectionGroup {
    return new ShieldResponsesDescribeProtectionGroup(this, this.__resources, input);
  }

  public describeSubscription(): ShieldResponsesDescribeSubscription {
    return new ShieldResponsesDescribeSubscription(this, this.__resources);
  }

  public disableProactiveEngagement(): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disableProactiveEngagement',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.DisableProactiveEngagement'),
        parameters: {
        },
      },
    };
    new cr.AwsCustomResource(this, 'DisableProactiveEngagement', props);
  }

  public disassociateDrtLogBucket(input: shapes.ShieldDisassociateDrtLogBucketRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateDrtLogBucket',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.DisassociateDRTLogBucket'),
        parameters: {
          LogBucket: input.logBucket,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DisassociateDRTLogBucket', props);
  }

  public disassociateDrtRole(): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateDrtRole',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.DisassociateDRTRole'),
        parameters: {
        },
      },
    };
    new cr.AwsCustomResource(this, 'DisassociateDRTRole', props);
  }

  public disassociateHealthCheck(input: shapes.ShieldDisassociateHealthCheckRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateHealthCheck',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.DisassociateHealthCheck'),
        parameters: {
          ProtectionId: input.protectionId,
          HealthCheckArn: input.healthCheckArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DisassociateHealthCheck', props);
  }

  public enableProactiveEngagement(): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'enableProactiveEngagement',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.EnableProactiveEngagement'),
        parameters: {
        },
      },
    };
    new cr.AwsCustomResource(this, 'EnableProactiveEngagement', props);
  }

  public fetchSubscriptionState(): ShieldResponsesFetchSubscriptionState {
    return new ShieldResponsesFetchSubscriptionState(this, this.__resources);
  }

  public listAttacks(input: shapes.ShieldListAttacksRequest): ShieldResponsesListAttacks {
    return new ShieldResponsesListAttacks(this, this.__resources, input);
  }

  public listProtectionGroups(input: shapes.ShieldListProtectionGroupsRequest): ShieldResponsesListProtectionGroups {
    return new ShieldResponsesListProtectionGroups(this, this.__resources, input);
  }

  public listProtections(input: shapes.ShieldListProtectionsRequest): ShieldResponsesListProtections {
    return new ShieldResponsesListProtections(this, this.__resources, input);
  }

  public listResourcesInProtectionGroup(input: shapes.ShieldListResourcesInProtectionGroupRequest): ShieldResponsesListResourcesInProtectionGroup {
    return new ShieldResponsesListResourcesInProtectionGroup(this, this.__resources, input);
  }

  public updateEmergencyContactSettings(input: shapes.ShieldUpdateEmergencyContactSettingsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEmergencyContactSettings',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.UpdateEmergencyContactSettings'),
        parameters: {
          EmergencyContactList: input.emergencyContactList,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateEmergencyContactSettings', props);
  }

  public updateProtectionGroup(input: shapes.ShieldUpdateProtectionGroupRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProtectionGroup',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.UpdateProtectionGroup'),
        parameters: {
          ProtectionGroupId: input.protectionGroupId,
          Aggregation: input.aggregation,
          Pattern: input.pattern,
          ResourceType: input.resourceType,
          Members: input.members,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateProtectionGroup', props);
  }

  public updateSubscription(input: shapes.ShieldUpdateSubscriptionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSubscription',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.UpdateSubscription'),
        parameters: {
          AutoRenew: input.autoRenew,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateSubscription', props);
  }

}

export class ShieldResponsesCreateProtection {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ShieldCreateProtectionRequest) {
  }

  public get protectionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProtection',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.CreateProtection.ProtectionId'),
        outputPath: 'ProtectionId',
        parameters: {
          Name: this.__input.name,
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProtection.ProtectionId', props);
    return resource.getResponseField('ProtectionId') as unknown as string;
  }

}

export class ShieldResponsesDescribeAttack {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ShieldDescribeAttackRequest) {
  }

  public get attack(): ShieldResponsesDescribeAttackAttack {
    return new ShieldResponsesDescribeAttackAttack(this.__scope, this.__resources, this.__input);
  }

}

export class ShieldResponsesDescribeAttackAttack {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ShieldDescribeAttackRequest) {
  }

  public get attackId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAttack',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.DescribeAttack.Attack.AttackId'),
        outputPath: 'Attack.AttackId',
        parameters: {
          AttackId: this.__input.attackId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAttack.Attack.AttackId', props);
    return resource.getResponseField('Attack.AttackId') as unknown as string;
  }

  public get resourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAttack',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.DescribeAttack.Attack.ResourceArn'),
        outputPath: 'Attack.ResourceArn',
        parameters: {
          AttackId: this.__input.attackId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAttack.Attack.ResourceArn', props);
    return resource.getResponseField('Attack.ResourceArn') as unknown as string;
  }

  public get subResources(): shapes.ShieldSubResourceSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAttack',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.DescribeAttack.Attack.SubResources'),
        outputPath: 'Attack.SubResources',
        parameters: {
          AttackId: this.__input.attackId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAttack.Attack.SubResources', props);
    return resource.getResponseField('Attack.SubResources') as unknown as shapes.ShieldSubResourceSummary[];
  }

  public get startTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAttack',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.DescribeAttack.Attack.StartTime'),
        outputPath: 'Attack.StartTime',
        parameters: {
          AttackId: this.__input.attackId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAttack.Attack.StartTime', props);
    return resource.getResponseField('Attack.StartTime') as unknown as string;
  }

  public get endTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAttack',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.DescribeAttack.Attack.EndTime'),
        outputPath: 'Attack.EndTime',
        parameters: {
          AttackId: this.__input.attackId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAttack.Attack.EndTime', props);
    return resource.getResponseField('Attack.EndTime') as unknown as string;
  }

  public get attackCounters(): shapes.ShieldSummarizedCounter[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAttack',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.DescribeAttack.Attack.AttackCounters'),
        outputPath: 'Attack.AttackCounters',
        parameters: {
          AttackId: this.__input.attackId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAttack.Attack.AttackCounters', props);
    return resource.getResponseField('Attack.AttackCounters') as unknown as shapes.ShieldSummarizedCounter[];
  }

  public get attackProperties(): shapes.ShieldAttackProperty[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAttack',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.DescribeAttack.Attack.AttackProperties'),
        outputPath: 'Attack.AttackProperties',
        parameters: {
          AttackId: this.__input.attackId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAttack.Attack.AttackProperties', props);
    return resource.getResponseField('Attack.AttackProperties') as unknown as shapes.ShieldAttackProperty[];
  }

  public get mitigations(): shapes.ShieldMitigation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAttack',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.DescribeAttack.Attack.Mitigations'),
        outputPath: 'Attack.Mitigations',
        parameters: {
          AttackId: this.__input.attackId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAttack.Attack.Mitigations', props);
    return resource.getResponseField('Attack.Mitigations') as unknown as shapes.ShieldMitigation[];
  }

}

export class ShieldResponsesDescribeAttackStatistics {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get timeRange(): ShieldResponsesDescribeAttackStatisticsTimeRange {
    return new ShieldResponsesDescribeAttackStatisticsTimeRange(this.__scope, this.__resources);
  }

  public get dataItems(): shapes.ShieldAttackStatisticsDataItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAttackStatistics',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.DescribeAttackStatistics.DataItems'),
        outputPath: 'DataItems',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAttackStatistics.DataItems', props);
    return resource.getResponseField('DataItems') as unknown as shapes.ShieldAttackStatisticsDataItem[];
  }

}

export class ShieldResponsesDescribeAttackStatisticsTimeRange {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get fromInclusive(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAttackStatistics',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.DescribeAttackStatistics.TimeRange.FromInclusive'),
        outputPath: 'TimeRange.FromInclusive',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAttackStatistics.TimeRange.FromInclusive', props);
    return resource.getResponseField('TimeRange.FromInclusive') as unknown as string;
  }

  public get toExclusive(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAttackStatistics',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.DescribeAttackStatistics.TimeRange.ToExclusive'),
        outputPath: 'TimeRange.ToExclusive',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAttackStatistics.TimeRange.ToExclusive', props);
    return resource.getResponseField('TimeRange.ToExclusive') as unknown as string;
  }

}

export class ShieldResponsesDescribeDrtAccess {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDrtAccess',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.DescribeDRTAccess.RoleArn'),
        outputPath: 'RoleArn',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDRTAccess.RoleArn', props);
    return resource.getResponseField('RoleArn') as unknown as string;
  }

  public get logBucketList(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDrtAccess',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.DescribeDRTAccess.LogBucketList'),
        outputPath: 'LogBucketList',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDRTAccess.LogBucketList', props);
    return resource.getResponseField('LogBucketList') as unknown as string[];
  }

}

export class ShieldResponsesDescribeEmergencyContactSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get emergencyContactList(): shapes.ShieldEmergencyContact[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEmergencyContactSettings',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.DescribeEmergencyContactSettings.EmergencyContactList'),
        outputPath: 'EmergencyContactList',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEmergencyContactSettings.EmergencyContactList', props);
    return resource.getResponseField('EmergencyContactList') as unknown as shapes.ShieldEmergencyContact[];
  }

}

export class ShieldResponsesDescribeProtection {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ShieldDescribeProtectionRequest) {
  }

  public get protection(): ShieldResponsesDescribeProtectionProtection {
    return new ShieldResponsesDescribeProtectionProtection(this.__scope, this.__resources, this.__input);
  }

}

export class ShieldResponsesDescribeProtectionProtection {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ShieldDescribeProtectionRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProtection',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.DescribeProtection.Protection.Id'),
        outputPath: 'Protection.Id',
        parameters: {
          ProtectionId: this.__input.protectionId,
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProtection.Protection.Id', props);
    return resource.getResponseField('Protection.Id') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProtection',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.DescribeProtection.Protection.Name'),
        outputPath: 'Protection.Name',
        parameters: {
          ProtectionId: this.__input.protectionId,
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProtection.Protection.Name', props);
    return resource.getResponseField('Protection.Name') as unknown as string;
  }

  public get resourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProtection',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.DescribeProtection.Protection.ResourceArn'),
        outputPath: 'Protection.ResourceArn',
        parameters: {
          ProtectionId: this.__input.protectionId,
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProtection.Protection.ResourceArn', props);
    return resource.getResponseField('Protection.ResourceArn') as unknown as string;
  }

  public get healthCheckIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProtection',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.DescribeProtection.Protection.HealthCheckIds'),
        outputPath: 'Protection.HealthCheckIds',
        parameters: {
          ProtectionId: this.__input.protectionId,
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProtection.Protection.HealthCheckIds', props);
    return resource.getResponseField('Protection.HealthCheckIds') as unknown as string[];
  }

}

export class ShieldResponsesDescribeProtectionGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ShieldDescribeProtectionGroupRequest) {
  }

  public get protectionGroup(): ShieldResponsesDescribeProtectionGroupProtectionGroup {
    return new ShieldResponsesDescribeProtectionGroupProtectionGroup(this.__scope, this.__resources, this.__input);
  }

}

export class ShieldResponsesDescribeProtectionGroupProtectionGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ShieldDescribeProtectionGroupRequest) {
  }

  public get protectionGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProtectionGroup',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.DescribeProtectionGroup.ProtectionGroup.ProtectionGroupId'),
        outputPath: 'ProtectionGroup.ProtectionGroupId',
        parameters: {
          ProtectionGroupId: this.__input.protectionGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProtectionGroup.ProtectionGroup.ProtectionGroupId', props);
    return resource.getResponseField('ProtectionGroup.ProtectionGroupId') as unknown as string;
  }

  public get aggregation(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProtectionGroup',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.DescribeProtectionGroup.ProtectionGroup.Aggregation'),
        outputPath: 'ProtectionGroup.Aggregation',
        parameters: {
          ProtectionGroupId: this.__input.protectionGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProtectionGroup.ProtectionGroup.Aggregation', props);
    return resource.getResponseField('ProtectionGroup.Aggregation') as unknown as string;
  }

  public get pattern(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProtectionGroup',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.DescribeProtectionGroup.ProtectionGroup.Pattern'),
        outputPath: 'ProtectionGroup.Pattern',
        parameters: {
          ProtectionGroupId: this.__input.protectionGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProtectionGroup.ProtectionGroup.Pattern', props);
    return resource.getResponseField('ProtectionGroup.Pattern') as unknown as string;
  }

  public get resourceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProtectionGroup',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.DescribeProtectionGroup.ProtectionGroup.ResourceType'),
        outputPath: 'ProtectionGroup.ResourceType',
        parameters: {
          ProtectionGroupId: this.__input.protectionGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProtectionGroup.ProtectionGroup.ResourceType', props);
    return resource.getResponseField('ProtectionGroup.ResourceType') as unknown as string;
  }

  public get members(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProtectionGroup',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.DescribeProtectionGroup.ProtectionGroup.Members'),
        outputPath: 'ProtectionGroup.Members',
        parameters: {
          ProtectionGroupId: this.__input.protectionGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProtectionGroup.ProtectionGroup.Members', props);
    return resource.getResponseField('ProtectionGroup.Members') as unknown as string[];
  }

}

export class ShieldResponsesDescribeSubscription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get subscription(): ShieldResponsesDescribeSubscriptionSubscription {
    return new ShieldResponsesDescribeSubscriptionSubscription(this.__scope, this.__resources);
  }

}

export class ShieldResponsesDescribeSubscriptionSubscription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get startTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSubscription',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.DescribeSubscription.Subscription.StartTime'),
        outputPath: 'Subscription.StartTime',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSubscription.Subscription.StartTime', props);
    return resource.getResponseField('Subscription.StartTime') as unknown as string;
  }

  public get endTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSubscription',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.DescribeSubscription.Subscription.EndTime'),
        outputPath: 'Subscription.EndTime',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSubscription.Subscription.EndTime', props);
    return resource.getResponseField('Subscription.EndTime') as unknown as string;
  }

  public get timeCommitmentInSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSubscription',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.DescribeSubscription.Subscription.TimeCommitmentInSeconds'),
        outputPath: 'Subscription.TimeCommitmentInSeconds',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSubscription.Subscription.TimeCommitmentInSeconds', props);
    return resource.getResponseField('Subscription.TimeCommitmentInSeconds') as unknown as number;
  }

  public get autoRenew(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSubscription',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.DescribeSubscription.Subscription.AutoRenew'),
        outputPath: 'Subscription.AutoRenew',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSubscription.Subscription.AutoRenew', props);
    return resource.getResponseField('Subscription.AutoRenew') as unknown as string;
  }

  public get limits(): shapes.ShieldLimit[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSubscription',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.DescribeSubscription.Subscription.Limits'),
        outputPath: 'Subscription.Limits',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSubscription.Subscription.Limits', props);
    return resource.getResponseField('Subscription.Limits') as unknown as shapes.ShieldLimit[];
  }

  public get proactiveEngagementStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSubscription',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.DescribeSubscription.Subscription.ProactiveEngagementStatus'),
        outputPath: 'Subscription.ProactiveEngagementStatus',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSubscription.Subscription.ProactiveEngagementStatus', props);
    return resource.getResponseField('Subscription.ProactiveEngagementStatus') as unknown as string;
  }

  public get subscriptionLimits(): ShieldResponsesDescribeSubscriptionSubscriptionSubscriptionLimits {
    return new ShieldResponsesDescribeSubscriptionSubscriptionSubscriptionLimits(this.__scope, this.__resources);
  }

}

export class ShieldResponsesDescribeSubscriptionSubscriptionSubscriptionLimits {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get protectionLimits(): ShieldResponsesDescribeSubscriptionSubscriptionSubscriptionLimitsProtectionLimits {
    return new ShieldResponsesDescribeSubscriptionSubscriptionSubscriptionLimitsProtectionLimits(this.__scope, this.__resources);
  }

  public get protectionGroupLimits(): ShieldResponsesDescribeSubscriptionSubscriptionSubscriptionLimitsProtectionGroupLimits {
    return new ShieldResponsesDescribeSubscriptionSubscriptionSubscriptionLimitsProtectionGroupLimits(this.__scope, this.__resources);
  }

}

export class ShieldResponsesDescribeSubscriptionSubscriptionSubscriptionLimitsProtectionLimits {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get protectedResourceTypeLimits(): shapes.ShieldLimit[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSubscription',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.DescribeSubscription.Subscription.SubscriptionLimits.ProtectionLimits.ProtectedResourceTypeLimits'),
        outputPath: 'Subscription.SubscriptionLimits.ProtectionLimits.ProtectedResourceTypeLimits',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSubscription.Subscription.SubscriptionLimits.ProtectionLimits.ProtectedResourceTypeLimits', props);
    return resource.getResponseField('Subscription.SubscriptionLimits.ProtectionLimits.ProtectedResourceTypeLimits') as unknown as shapes.ShieldLimit[];
  }

}

export class ShieldResponsesDescribeSubscriptionSubscriptionSubscriptionLimitsProtectionGroupLimits {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get maxProtectionGroups(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSubscription',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.DescribeSubscription.Subscription.SubscriptionLimits.ProtectionGroupLimits.MaxProtectionGroups'),
        outputPath: 'Subscription.SubscriptionLimits.ProtectionGroupLimits.MaxProtectionGroups',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSubscription.Subscription.SubscriptionLimits.ProtectionGroupLimits.MaxProtectionGroups', props);
    return resource.getResponseField('Subscription.SubscriptionLimits.ProtectionGroupLimits.MaxProtectionGroups') as unknown as number;
  }

  public get patternTypeLimits(): ShieldResponsesDescribeSubscriptionSubscriptionSubscriptionLimitsProtectionGroupLimitsPatternTypeLimits {
    return new ShieldResponsesDescribeSubscriptionSubscriptionSubscriptionLimitsProtectionGroupLimitsPatternTypeLimits(this.__scope, this.__resources);
  }

}

export class ShieldResponsesDescribeSubscriptionSubscriptionSubscriptionLimitsProtectionGroupLimitsPatternTypeLimits {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get arbitraryPatternLimits(): ShieldResponsesDescribeSubscriptionSubscriptionSubscriptionLimitsProtectionGroupLimitsPatternTypeLimitsArbitraryPatternLimits {
    return new ShieldResponsesDescribeSubscriptionSubscriptionSubscriptionLimitsProtectionGroupLimitsPatternTypeLimitsArbitraryPatternLimits(this.__scope, this.__resources);
  }

}

export class ShieldResponsesDescribeSubscriptionSubscriptionSubscriptionLimitsProtectionGroupLimitsPatternTypeLimitsArbitraryPatternLimits {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get maxMembers(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSubscription',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.DescribeSubscription.Subscription.SubscriptionLimits.ProtectionGroupLimits.PatternTypeLimits.ArbitraryPatternLimits.MaxMembers'),
        outputPath: 'Subscription.SubscriptionLimits.ProtectionGroupLimits.PatternTypeLimits.ArbitraryPatternLimits.MaxMembers',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSubscription.Subscription.SubscriptionLimits.ProtectionGroupLimits.PatternTypeLimits.ArbitraryPatternLimits.MaxMembers', props);
    return resource.getResponseField('Subscription.SubscriptionLimits.ProtectionGroupLimits.PatternTypeLimits.ArbitraryPatternLimits.MaxMembers') as unknown as number;
  }

}

export class ShieldResponsesFetchSubscriptionState {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get subscriptionState(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSubscriptionState',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.GetSubscriptionState.SubscriptionState'),
        outputPath: 'SubscriptionState',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSubscriptionState.SubscriptionState', props);
    return resource.getResponseField('SubscriptionState') as unknown as string;
  }

}

export class ShieldResponsesListAttacks {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ShieldListAttacksRequest) {
  }

  public get attackSummaries(): shapes.ShieldAttackSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAttacks',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.ListAttacks.AttackSummaries'),
        outputPath: 'AttackSummaries',
        parameters: {
          ResourceArns: this.__input.resourceArns,
          StartTime: {
            FromInclusive: this.__input.startTime?.fromInclusive,
            ToExclusive: this.__input.startTime?.toExclusive,
          },
          EndTime: {
            FromInclusive: this.__input.endTime?.fromInclusive,
            ToExclusive: this.__input.endTime?.toExclusive,
          },
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAttacks.AttackSummaries', props);
    return resource.getResponseField('AttackSummaries') as unknown as shapes.ShieldAttackSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAttacks',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.ListAttacks.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ResourceArns: this.__input.resourceArns,
          StartTime: {
            FromInclusive: this.__input.startTime?.fromInclusive,
            ToExclusive: this.__input.startTime?.toExclusive,
          },
          EndTime: {
            FromInclusive: this.__input.endTime?.fromInclusive,
            ToExclusive: this.__input.endTime?.toExclusive,
          },
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAttacks.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ShieldResponsesListProtectionGroups {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ShieldListProtectionGroupsRequest) {
  }

  public get protectionGroups(): shapes.ShieldProtectionGroup[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listProtectionGroups',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.ListProtectionGroups.ProtectionGroups'),
        outputPath: 'ProtectionGroups',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListProtectionGroups.ProtectionGroups', props);
    return resource.getResponseField('ProtectionGroups') as unknown as shapes.ShieldProtectionGroup[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listProtectionGroups',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.ListProtectionGroups.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListProtectionGroups.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ShieldResponsesListProtections {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ShieldListProtectionsRequest) {
  }

  public get protections(): shapes.ShieldProtection[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listProtections',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.ListProtections.Protections'),
        outputPath: 'Protections',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListProtections.Protections', props);
    return resource.getResponseField('Protections') as unknown as shapes.ShieldProtection[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listProtections',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.ListProtections.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListProtections.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ShieldResponsesListResourcesInProtectionGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ShieldListResourcesInProtectionGroupRequest) {
  }

  public get resourceArns(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listResourcesInProtectionGroup',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.ListResourcesInProtectionGroup.ResourceArns'),
        outputPath: 'ResourceArns',
        parameters: {
          ProtectionGroupId: this.__input.protectionGroupId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListResourcesInProtectionGroup.ResourceArns', props);
    return resource.getResponseField('ResourceArns') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listResourcesInProtectionGroup',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.ListResourcesInProtectionGroup.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ProtectionGroupId: this.__input.protectionGroupId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListResourcesInProtectionGroup.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

