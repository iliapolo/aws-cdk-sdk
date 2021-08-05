import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class CloudTrailClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public addTags(input: shapes.CloudTrailAddTagsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'addTags',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.AddTags'),
        parameters: {
          ResourceId: input.resourceId,
          TagsList: input.tagsList,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AddTags', props);
  }

  public createTrail(input: shapes.CloudTrailCreateTrailRequest): CloudTrailResponsesCreateTrail {
    return new CloudTrailResponsesCreateTrail(this, this.__resources, input);
  }

  public deleteTrail(input: shapes.CloudTrailDeleteTrailRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTrail',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.DeleteTrail'),
        parameters: {
          Name: input.name,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteTrail', props);
  }

  public describeTrails(input: shapes.CloudTrailDescribeTrailsRequest): CloudTrailResponsesDescribeTrails {
    return new CloudTrailResponsesDescribeTrails(this, this.__resources, input);
  }

  public fetchEventSelectors(input: shapes.CloudTrailGetEventSelectorsRequest): CloudTrailResponsesFetchEventSelectors {
    return new CloudTrailResponsesFetchEventSelectors(this, this.__resources, input);
  }

  public fetchInsightSelectors(input: shapes.CloudTrailGetInsightSelectorsRequest): CloudTrailResponsesFetchInsightSelectors {
    return new CloudTrailResponsesFetchInsightSelectors(this, this.__resources, input);
  }

  public fetchTrail(input: shapes.CloudTrailGetTrailRequest): CloudTrailResponsesFetchTrail {
    return new CloudTrailResponsesFetchTrail(this, this.__resources, input);
  }

  public fetchTrailStatus(input: shapes.CloudTrailGetTrailStatusRequest): CloudTrailResponsesFetchTrailStatus {
    return new CloudTrailResponsesFetchTrailStatus(this, this.__resources, input);
  }

  public listPublicKeys(input: shapes.CloudTrailListPublicKeysRequest): CloudTrailResponsesListPublicKeys {
    return new CloudTrailResponsesListPublicKeys(this, this.__resources, input);
  }

  public listTags(input: shapes.CloudTrailListTagsRequest): CloudTrailResponsesListTags {
    return new CloudTrailResponsesListTags(this, this.__resources, input);
  }

  public listTrails(input: shapes.CloudTrailListTrailsRequest): CloudTrailResponsesListTrails {
    return new CloudTrailResponsesListTrails(this, this.__resources, input);
  }

  public lookupEvents(input: shapes.CloudTrailLookupEventsRequest): CloudTrailResponsesLookupEvents {
    return new CloudTrailResponsesLookupEvents(this, this.__resources, input);
  }

  public putEventSelectors(input: shapes.CloudTrailPutEventSelectorsRequest): CloudTrailResponsesPutEventSelectors {
    return new CloudTrailResponsesPutEventSelectors(this, this.__resources, input);
  }

  public putInsightSelectors(input: shapes.CloudTrailPutInsightSelectorsRequest): CloudTrailResponsesPutInsightSelectors {
    return new CloudTrailResponsesPutInsightSelectors(this, this.__resources, input);
  }

  public removeTags(input: shapes.CloudTrailRemoveTagsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'removeTags',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.RemoveTags'),
        parameters: {
          ResourceId: input.resourceId,
          TagsList: input.tagsList,
        },
      },
    };
    new cr.AwsCustomResource(this, 'RemoveTags', props);
  }

  public startLogging(input: shapes.CloudTrailStartLoggingRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startLogging',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.StartLogging'),
        parameters: {
          Name: input.name,
        },
      },
    };
    new cr.AwsCustomResource(this, 'StartLogging', props);
  }

  public stopLogging(input: shapes.CloudTrailStopLoggingRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopLogging',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.StopLogging'),
        parameters: {
          Name: input.name,
        },
      },
    };
    new cr.AwsCustomResource(this, 'StopLogging', props);
  }

  public updateTrail(input: shapes.CloudTrailUpdateTrailRequest): CloudTrailResponsesUpdateTrail {
    return new CloudTrailResponsesUpdateTrail(this, this.__resources, input);
  }

}

export class CloudTrailResponsesCreateTrail {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudTrailCreateTrailRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTrail',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.CreateTrail.Name'),
        outputPath: 'Name',
        parameters: {
          Name: this.__input.name,
          S3BucketName: this.__input.s3BucketName,
          S3KeyPrefix: this.__input.s3KeyPrefix,
          SnsTopicName: this.__input.snsTopicName,
          IncludeGlobalServiceEvents: this.__input.includeGlobalServiceEvents,
          IsMultiRegionTrail: this.__input.isMultiRegionTrail,
          EnableLogFileValidation: this.__input.enableLogFileValidation,
          CloudWatchLogsLogGroupArn: this.__input.cloudWatchLogsLogGroupArn,
          CloudWatchLogsRoleArn: this.__input.cloudWatchLogsRoleArn,
          KmsKeyId: this.__input.kmsKeyId,
          IsOrganizationTrail: this.__input.isOrganizationTrail,
          TagsList: this.__input.tagsList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTrail.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get s3BucketName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTrail',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.CreateTrail.S3BucketName'),
        outputPath: 'S3BucketName',
        parameters: {
          Name: this.__input.name,
          S3BucketName: this.__input.s3BucketName,
          S3KeyPrefix: this.__input.s3KeyPrefix,
          SnsTopicName: this.__input.snsTopicName,
          IncludeGlobalServiceEvents: this.__input.includeGlobalServiceEvents,
          IsMultiRegionTrail: this.__input.isMultiRegionTrail,
          EnableLogFileValidation: this.__input.enableLogFileValidation,
          CloudWatchLogsLogGroupArn: this.__input.cloudWatchLogsLogGroupArn,
          CloudWatchLogsRoleArn: this.__input.cloudWatchLogsRoleArn,
          KmsKeyId: this.__input.kmsKeyId,
          IsOrganizationTrail: this.__input.isOrganizationTrail,
          TagsList: this.__input.tagsList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTrail.S3BucketName', props);
    return resource.getResponseField('S3BucketName') as unknown as string;
  }

  public get s3KeyPrefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTrail',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.CreateTrail.S3KeyPrefix'),
        outputPath: 'S3KeyPrefix',
        parameters: {
          Name: this.__input.name,
          S3BucketName: this.__input.s3BucketName,
          S3KeyPrefix: this.__input.s3KeyPrefix,
          SnsTopicName: this.__input.snsTopicName,
          IncludeGlobalServiceEvents: this.__input.includeGlobalServiceEvents,
          IsMultiRegionTrail: this.__input.isMultiRegionTrail,
          EnableLogFileValidation: this.__input.enableLogFileValidation,
          CloudWatchLogsLogGroupArn: this.__input.cloudWatchLogsLogGroupArn,
          CloudWatchLogsRoleArn: this.__input.cloudWatchLogsRoleArn,
          KmsKeyId: this.__input.kmsKeyId,
          IsOrganizationTrail: this.__input.isOrganizationTrail,
          TagsList: this.__input.tagsList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTrail.S3KeyPrefix', props);
    return resource.getResponseField('S3KeyPrefix') as unknown as string;
  }

  public get snsTopicName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTrail',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.CreateTrail.SnsTopicName'),
        outputPath: 'SnsTopicName',
        parameters: {
          Name: this.__input.name,
          S3BucketName: this.__input.s3BucketName,
          S3KeyPrefix: this.__input.s3KeyPrefix,
          SnsTopicName: this.__input.snsTopicName,
          IncludeGlobalServiceEvents: this.__input.includeGlobalServiceEvents,
          IsMultiRegionTrail: this.__input.isMultiRegionTrail,
          EnableLogFileValidation: this.__input.enableLogFileValidation,
          CloudWatchLogsLogGroupArn: this.__input.cloudWatchLogsLogGroupArn,
          CloudWatchLogsRoleArn: this.__input.cloudWatchLogsRoleArn,
          KmsKeyId: this.__input.kmsKeyId,
          IsOrganizationTrail: this.__input.isOrganizationTrail,
          TagsList: this.__input.tagsList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTrail.SnsTopicName', props);
    return resource.getResponseField('SnsTopicName') as unknown as string;
  }

  public get snsTopicArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTrail',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.CreateTrail.SnsTopicARN'),
        outputPath: 'SnsTopicARN',
        parameters: {
          Name: this.__input.name,
          S3BucketName: this.__input.s3BucketName,
          S3KeyPrefix: this.__input.s3KeyPrefix,
          SnsTopicName: this.__input.snsTopicName,
          IncludeGlobalServiceEvents: this.__input.includeGlobalServiceEvents,
          IsMultiRegionTrail: this.__input.isMultiRegionTrail,
          EnableLogFileValidation: this.__input.enableLogFileValidation,
          CloudWatchLogsLogGroupArn: this.__input.cloudWatchLogsLogGroupArn,
          CloudWatchLogsRoleArn: this.__input.cloudWatchLogsRoleArn,
          KmsKeyId: this.__input.kmsKeyId,
          IsOrganizationTrail: this.__input.isOrganizationTrail,
          TagsList: this.__input.tagsList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTrail.SnsTopicARN', props);
    return resource.getResponseField('SnsTopicARN') as unknown as string;
  }

  public get includeGlobalServiceEvents(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTrail',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.CreateTrail.IncludeGlobalServiceEvents'),
        outputPath: 'IncludeGlobalServiceEvents',
        parameters: {
          Name: this.__input.name,
          S3BucketName: this.__input.s3BucketName,
          S3KeyPrefix: this.__input.s3KeyPrefix,
          SnsTopicName: this.__input.snsTopicName,
          IncludeGlobalServiceEvents: this.__input.includeGlobalServiceEvents,
          IsMultiRegionTrail: this.__input.isMultiRegionTrail,
          EnableLogFileValidation: this.__input.enableLogFileValidation,
          CloudWatchLogsLogGroupArn: this.__input.cloudWatchLogsLogGroupArn,
          CloudWatchLogsRoleArn: this.__input.cloudWatchLogsRoleArn,
          KmsKeyId: this.__input.kmsKeyId,
          IsOrganizationTrail: this.__input.isOrganizationTrail,
          TagsList: this.__input.tagsList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTrail.IncludeGlobalServiceEvents', props);
    return resource.getResponseField('IncludeGlobalServiceEvents') as unknown as boolean;
  }

  public get isMultiRegionTrail(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTrail',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.CreateTrail.IsMultiRegionTrail'),
        outputPath: 'IsMultiRegionTrail',
        parameters: {
          Name: this.__input.name,
          S3BucketName: this.__input.s3BucketName,
          S3KeyPrefix: this.__input.s3KeyPrefix,
          SnsTopicName: this.__input.snsTopicName,
          IncludeGlobalServiceEvents: this.__input.includeGlobalServiceEvents,
          IsMultiRegionTrail: this.__input.isMultiRegionTrail,
          EnableLogFileValidation: this.__input.enableLogFileValidation,
          CloudWatchLogsLogGroupArn: this.__input.cloudWatchLogsLogGroupArn,
          CloudWatchLogsRoleArn: this.__input.cloudWatchLogsRoleArn,
          KmsKeyId: this.__input.kmsKeyId,
          IsOrganizationTrail: this.__input.isOrganizationTrail,
          TagsList: this.__input.tagsList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTrail.IsMultiRegionTrail', props);
    return resource.getResponseField('IsMultiRegionTrail') as unknown as boolean;
  }

  public get trailArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTrail',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.CreateTrail.TrailARN'),
        outputPath: 'TrailARN',
        parameters: {
          Name: this.__input.name,
          S3BucketName: this.__input.s3BucketName,
          S3KeyPrefix: this.__input.s3KeyPrefix,
          SnsTopicName: this.__input.snsTopicName,
          IncludeGlobalServiceEvents: this.__input.includeGlobalServiceEvents,
          IsMultiRegionTrail: this.__input.isMultiRegionTrail,
          EnableLogFileValidation: this.__input.enableLogFileValidation,
          CloudWatchLogsLogGroupArn: this.__input.cloudWatchLogsLogGroupArn,
          CloudWatchLogsRoleArn: this.__input.cloudWatchLogsRoleArn,
          KmsKeyId: this.__input.kmsKeyId,
          IsOrganizationTrail: this.__input.isOrganizationTrail,
          TagsList: this.__input.tagsList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTrail.TrailARN', props);
    return resource.getResponseField('TrailARN') as unknown as string;
  }

  public get logFileValidationEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTrail',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.CreateTrail.LogFileValidationEnabled'),
        outputPath: 'LogFileValidationEnabled',
        parameters: {
          Name: this.__input.name,
          S3BucketName: this.__input.s3BucketName,
          S3KeyPrefix: this.__input.s3KeyPrefix,
          SnsTopicName: this.__input.snsTopicName,
          IncludeGlobalServiceEvents: this.__input.includeGlobalServiceEvents,
          IsMultiRegionTrail: this.__input.isMultiRegionTrail,
          EnableLogFileValidation: this.__input.enableLogFileValidation,
          CloudWatchLogsLogGroupArn: this.__input.cloudWatchLogsLogGroupArn,
          CloudWatchLogsRoleArn: this.__input.cloudWatchLogsRoleArn,
          KmsKeyId: this.__input.kmsKeyId,
          IsOrganizationTrail: this.__input.isOrganizationTrail,
          TagsList: this.__input.tagsList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTrail.LogFileValidationEnabled', props);
    return resource.getResponseField('LogFileValidationEnabled') as unknown as boolean;
  }

  public get cloudWatchLogsLogGroupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTrail',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.CreateTrail.CloudWatchLogsLogGroupArn'),
        outputPath: 'CloudWatchLogsLogGroupArn',
        parameters: {
          Name: this.__input.name,
          S3BucketName: this.__input.s3BucketName,
          S3KeyPrefix: this.__input.s3KeyPrefix,
          SnsTopicName: this.__input.snsTopicName,
          IncludeGlobalServiceEvents: this.__input.includeGlobalServiceEvents,
          IsMultiRegionTrail: this.__input.isMultiRegionTrail,
          EnableLogFileValidation: this.__input.enableLogFileValidation,
          CloudWatchLogsLogGroupArn: this.__input.cloudWatchLogsLogGroupArn,
          CloudWatchLogsRoleArn: this.__input.cloudWatchLogsRoleArn,
          KmsKeyId: this.__input.kmsKeyId,
          IsOrganizationTrail: this.__input.isOrganizationTrail,
          TagsList: this.__input.tagsList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTrail.CloudWatchLogsLogGroupArn', props);
    return resource.getResponseField('CloudWatchLogsLogGroupArn') as unknown as string;
  }

  public get cloudWatchLogsRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTrail',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.CreateTrail.CloudWatchLogsRoleArn'),
        outputPath: 'CloudWatchLogsRoleArn',
        parameters: {
          Name: this.__input.name,
          S3BucketName: this.__input.s3BucketName,
          S3KeyPrefix: this.__input.s3KeyPrefix,
          SnsTopicName: this.__input.snsTopicName,
          IncludeGlobalServiceEvents: this.__input.includeGlobalServiceEvents,
          IsMultiRegionTrail: this.__input.isMultiRegionTrail,
          EnableLogFileValidation: this.__input.enableLogFileValidation,
          CloudWatchLogsLogGroupArn: this.__input.cloudWatchLogsLogGroupArn,
          CloudWatchLogsRoleArn: this.__input.cloudWatchLogsRoleArn,
          KmsKeyId: this.__input.kmsKeyId,
          IsOrganizationTrail: this.__input.isOrganizationTrail,
          TagsList: this.__input.tagsList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTrail.CloudWatchLogsRoleArn', props);
    return resource.getResponseField('CloudWatchLogsRoleArn') as unknown as string;
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTrail',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.CreateTrail.KmsKeyId'),
        outputPath: 'KmsKeyId',
        parameters: {
          Name: this.__input.name,
          S3BucketName: this.__input.s3BucketName,
          S3KeyPrefix: this.__input.s3KeyPrefix,
          SnsTopicName: this.__input.snsTopicName,
          IncludeGlobalServiceEvents: this.__input.includeGlobalServiceEvents,
          IsMultiRegionTrail: this.__input.isMultiRegionTrail,
          EnableLogFileValidation: this.__input.enableLogFileValidation,
          CloudWatchLogsLogGroupArn: this.__input.cloudWatchLogsLogGroupArn,
          CloudWatchLogsRoleArn: this.__input.cloudWatchLogsRoleArn,
          KmsKeyId: this.__input.kmsKeyId,
          IsOrganizationTrail: this.__input.isOrganizationTrail,
          TagsList: this.__input.tagsList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTrail.KmsKeyId', props);
    return resource.getResponseField('KmsKeyId') as unknown as string;
  }

  public get isOrganizationTrail(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTrail',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.CreateTrail.IsOrganizationTrail'),
        outputPath: 'IsOrganizationTrail',
        parameters: {
          Name: this.__input.name,
          S3BucketName: this.__input.s3BucketName,
          S3KeyPrefix: this.__input.s3KeyPrefix,
          SnsTopicName: this.__input.snsTopicName,
          IncludeGlobalServiceEvents: this.__input.includeGlobalServiceEvents,
          IsMultiRegionTrail: this.__input.isMultiRegionTrail,
          EnableLogFileValidation: this.__input.enableLogFileValidation,
          CloudWatchLogsLogGroupArn: this.__input.cloudWatchLogsLogGroupArn,
          CloudWatchLogsRoleArn: this.__input.cloudWatchLogsRoleArn,
          KmsKeyId: this.__input.kmsKeyId,
          IsOrganizationTrail: this.__input.isOrganizationTrail,
          TagsList: this.__input.tagsList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTrail.IsOrganizationTrail', props);
    return resource.getResponseField('IsOrganizationTrail') as unknown as boolean;
  }

}

export class CloudTrailResponsesDescribeTrails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudTrailDescribeTrailsRequest) {
  }

  public get trailList(): shapes.CloudTrailTrail[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrails',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.DescribeTrails.trailList'),
        outputPath: 'trailList',
        parameters: {
          trailNameList: this.__input.trailNameList,
          includeShadowTrails: this.__input.includeShadowTrails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrails.trailList', props);
    return resource.getResponseField('trailList') as unknown as shapes.CloudTrailTrail[];
  }

}

export class CloudTrailResponsesFetchEventSelectors {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudTrailGetEventSelectorsRequest) {
  }

  public get trailArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEventSelectors',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.GetEventSelectors.TrailARN'),
        outputPath: 'TrailARN',
        parameters: {
          TrailName: this.__input.trailName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEventSelectors.TrailARN', props);
    return resource.getResponseField('TrailARN') as unknown as string;
  }

  public get eventSelectors(): shapes.CloudTrailEventSelector[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEventSelectors',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.GetEventSelectors.EventSelectors'),
        outputPath: 'EventSelectors',
        parameters: {
          TrailName: this.__input.trailName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEventSelectors.EventSelectors', props);
    return resource.getResponseField('EventSelectors') as unknown as shapes.CloudTrailEventSelector[];
  }

  public get advancedEventSelectors(): shapes.CloudTrailAdvancedEventSelector[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEventSelectors',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.GetEventSelectors.AdvancedEventSelectors'),
        outputPath: 'AdvancedEventSelectors',
        parameters: {
          TrailName: this.__input.trailName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEventSelectors.AdvancedEventSelectors', props);
    return resource.getResponseField('AdvancedEventSelectors') as unknown as shapes.CloudTrailAdvancedEventSelector[];
  }

}

export class CloudTrailResponsesFetchInsightSelectors {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudTrailGetInsightSelectorsRequest) {
  }

  public get trailArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInsightSelectors',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.GetInsightSelectors.TrailARN'),
        outputPath: 'TrailARN',
        parameters: {
          TrailName: this.__input.trailName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInsightSelectors.TrailARN', props);
    return resource.getResponseField('TrailARN') as unknown as string;
  }

  public get insightSelectors(): shapes.CloudTrailInsightSelector[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInsightSelectors',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.GetInsightSelectors.InsightSelectors'),
        outputPath: 'InsightSelectors',
        parameters: {
          TrailName: this.__input.trailName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInsightSelectors.InsightSelectors', props);
    return resource.getResponseField('InsightSelectors') as unknown as shapes.CloudTrailInsightSelector[];
  }

}

export class CloudTrailResponsesFetchTrail {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudTrailGetTrailRequest) {
  }

  public get trail(): CloudTrailResponsesFetchTrailTrail {
    return new CloudTrailResponsesFetchTrailTrail(this.__scope, this.__resources, this.__input);
  }

}

export class CloudTrailResponsesFetchTrailTrail {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudTrailGetTrailRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTrail',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.GetTrail.Trail.Name'),
        outputPath: 'Trail.Name',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTrail.Trail.Name', props);
    return resource.getResponseField('Trail.Name') as unknown as string;
  }

  public get s3BucketName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTrail',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.GetTrail.Trail.S3BucketName'),
        outputPath: 'Trail.S3BucketName',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTrail.Trail.S3BucketName', props);
    return resource.getResponseField('Trail.S3BucketName') as unknown as string;
  }

  public get s3KeyPrefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTrail',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.GetTrail.Trail.S3KeyPrefix'),
        outputPath: 'Trail.S3KeyPrefix',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTrail.Trail.S3KeyPrefix', props);
    return resource.getResponseField('Trail.S3KeyPrefix') as unknown as string;
  }

  public get snsTopicName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTrail',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.GetTrail.Trail.SnsTopicName'),
        outputPath: 'Trail.SnsTopicName',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTrail.Trail.SnsTopicName', props);
    return resource.getResponseField('Trail.SnsTopicName') as unknown as string;
  }

  public get snsTopicArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTrail',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.GetTrail.Trail.SnsTopicARN'),
        outputPath: 'Trail.SnsTopicARN',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTrail.Trail.SnsTopicARN', props);
    return resource.getResponseField('Trail.SnsTopicARN') as unknown as string;
  }

  public get includeGlobalServiceEvents(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTrail',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.GetTrail.Trail.IncludeGlobalServiceEvents'),
        outputPath: 'Trail.IncludeGlobalServiceEvents',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTrail.Trail.IncludeGlobalServiceEvents', props);
    return resource.getResponseField('Trail.IncludeGlobalServiceEvents') as unknown as boolean;
  }

  public get isMultiRegionTrail(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTrail',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.GetTrail.Trail.IsMultiRegionTrail'),
        outputPath: 'Trail.IsMultiRegionTrail',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTrail.Trail.IsMultiRegionTrail', props);
    return resource.getResponseField('Trail.IsMultiRegionTrail') as unknown as boolean;
  }

  public get homeRegion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTrail',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.GetTrail.Trail.HomeRegion'),
        outputPath: 'Trail.HomeRegion',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTrail.Trail.HomeRegion', props);
    return resource.getResponseField('Trail.HomeRegion') as unknown as string;
  }

  public get trailArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTrail',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.GetTrail.Trail.TrailARN'),
        outputPath: 'Trail.TrailARN',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTrail.Trail.TrailARN', props);
    return resource.getResponseField('Trail.TrailARN') as unknown as string;
  }

  public get logFileValidationEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTrail',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.GetTrail.Trail.LogFileValidationEnabled'),
        outputPath: 'Trail.LogFileValidationEnabled',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTrail.Trail.LogFileValidationEnabled', props);
    return resource.getResponseField('Trail.LogFileValidationEnabled') as unknown as boolean;
  }

  public get cloudWatchLogsLogGroupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTrail',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.GetTrail.Trail.CloudWatchLogsLogGroupArn'),
        outputPath: 'Trail.CloudWatchLogsLogGroupArn',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTrail.Trail.CloudWatchLogsLogGroupArn', props);
    return resource.getResponseField('Trail.CloudWatchLogsLogGroupArn') as unknown as string;
  }

  public get cloudWatchLogsRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTrail',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.GetTrail.Trail.CloudWatchLogsRoleArn'),
        outputPath: 'Trail.CloudWatchLogsRoleArn',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTrail.Trail.CloudWatchLogsRoleArn', props);
    return resource.getResponseField('Trail.CloudWatchLogsRoleArn') as unknown as string;
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTrail',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.GetTrail.Trail.KmsKeyId'),
        outputPath: 'Trail.KmsKeyId',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTrail.Trail.KmsKeyId', props);
    return resource.getResponseField('Trail.KmsKeyId') as unknown as string;
  }

  public get hasCustomEventSelectors(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTrail',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.GetTrail.Trail.HasCustomEventSelectors'),
        outputPath: 'Trail.HasCustomEventSelectors',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTrail.Trail.HasCustomEventSelectors', props);
    return resource.getResponseField('Trail.HasCustomEventSelectors') as unknown as boolean;
  }

  public get hasInsightSelectors(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTrail',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.GetTrail.Trail.HasInsightSelectors'),
        outputPath: 'Trail.HasInsightSelectors',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTrail.Trail.HasInsightSelectors', props);
    return resource.getResponseField('Trail.HasInsightSelectors') as unknown as boolean;
  }

  public get isOrganizationTrail(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTrail',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.GetTrail.Trail.IsOrganizationTrail'),
        outputPath: 'Trail.IsOrganizationTrail',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTrail.Trail.IsOrganizationTrail', props);
    return resource.getResponseField('Trail.IsOrganizationTrail') as unknown as boolean;
  }

}

export class CloudTrailResponsesFetchTrailStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudTrailGetTrailStatusRequest) {
  }

  public get isLogging(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTrailStatus',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.GetTrailStatus.IsLogging'),
        outputPath: 'IsLogging',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTrailStatus.IsLogging', props);
    return resource.getResponseField('IsLogging') as unknown as boolean;
  }

  public get latestDeliveryError(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTrailStatus',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.GetTrailStatus.LatestDeliveryError'),
        outputPath: 'LatestDeliveryError',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTrailStatus.LatestDeliveryError', props);
    return resource.getResponseField('LatestDeliveryError') as unknown as string;
  }

  public get latestNotificationError(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTrailStatus',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.GetTrailStatus.LatestNotificationError'),
        outputPath: 'LatestNotificationError',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTrailStatus.LatestNotificationError', props);
    return resource.getResponseField('LatestNotificationError') as unknown as string;
  }

  public get latestDeliveryTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTrailStatus',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.GetTrailStatus.LatestDeliveryTime'),
        outputPath: 'LatestDeliveryTime',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTrailStatus.LatestDeliveryTime', props);
    return resource.getResponseField('LatestDeliveryTime') as unknown as string;
  }

  public get latestNotificationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTrailStatus',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.GetTrailStatus.LatestNotificationTime'),
        outputPath: 'LatestNotificationTime',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTrailStatus.LatestNotificationTime', props);
    return resource.getResponseField('LatestNotificationTime') as unknown as string;
  }

  public get startLoggingTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTrailStatus',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.GetTrailStatus.StartLoggingTime'),
        outputPath: 'StartLoggingTime',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTrailStatus.StartLoggingTime', props);
    return resource.getResponseField('StartLoggingTime') as unknown as string;
  }

  public get stopLoggingTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTrailStatus',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.GetTrailStatus.StopLoggingTime'),
        outputPath: 'StopLoggingTime',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTrailStatus.StopLoggingTime', props);
    return resource.getResponseField('StopLoggingTime') as unknown as string;
  }

  public get latestCloudWatchLogsDeliveryError(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTrailStatus',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.GetTrailStatus.LatestCloudWatchLogsDeliveryError'),
        outputPath: 'LatestCloudWatchLogsDeliveryError',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTrailStatus.LatestCloudWatchLogsDeliveryError', props);
    return resource.getResponseField('LatestCloudWatchLogsDeliveryError') as unknown as string;
  }

  public get latestCloudWatchLogsDeliveryTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTrailStatus',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.GetTrailStatus.LatestCloudWatchLogsDeliveryTime'),
        outputPath: 'LatestCloudWatchLogsDeliveryTime',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTrailStatus.LatestCloudWatchLogsDeliveryTime', props);
    return resource.getResponseField('LatestCloudWatchLogsDeliveryTime') as unknown as string;
  }

  public get latestDigestDeliveryTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTrailStatus',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.GetTrailStatus.LatestDigestDeliveryTime'),
        outputPath: 'LatestDigestDeliveryTime',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTrailStatus.LatestDigestDeliveryTime', props);
    return resource.getResponseField('LatestDigestDeliveryTime') as unknown as string;
  }

  public get latestDigestDeliveryError(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTrailStatus',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.GetTrailStatus.LatestDigestDeliveryError'),
        outputPath: 'LatestDigestDeliveryError',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTrailStatus.LatestDigestDeliveryError', props);
    return resource.getResponseField('LatestDigestDeliveryError') as unknown as string;
  }

  public get latestDeliveryAttemptTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTrailStatus',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.GetTrailStatus.LatestDeliveryAttemptTime'),
        outputPath: 'LatestDeliveryAttemptTime',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTrailStatus.LatestDeliveryAttemptTime', props);
    return resource.getResponseField('LatestDeliveryAttemptTime') as unknown as string;
  }

  public get latestNotificationAttemptTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTrailStatus',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.GetTrailStatus.LatestNotificationAttemptTime'),
        outputPath: 'LatestNotificationAttemptTime',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTrailStatus.LatestNotificationAttemptTime', props);
    return resource.getResponseField('LatestNotificationAttemptTime') as unknown as string;
  }

  public get latestNotificationAttemptSucceeded(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTrailStatus',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.GetTrailStatus.LatestNotificationAttemptSucceeded'),
        outputPath: 'LatestNotificationAttemptSucceeded',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTrailStatus.LatestNotificationAttemptSucceeded', props);
    return resource.getResponseField('LatestNotificationAttemptSucceeded') as unknown as string;
  }

  public get latestDeliveryAttemptSucceeded(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTrailStatus',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.GetTrailStatus.LatestDeliveryAttemptSucceeded'),
        outputPath: 'LatestDeliveryAttemptSucceeded',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTrailStatus.LatestDeliveryAttemptSucceeded', props);
    return resource.getResponseField('LatestDeliveryAttemptSucceeded') as unknown as string;
  }

  public get timeLoggingStarted(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTrailStatus',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.GetTrailStatus.TimeLoggingStarted'),
        outputPath: 'TimeLoggingStarted',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTrailStatus.TimeLoggingStarted', props);
    return resource.getResponseField('TimeLoggingStarted') as unknown as string;
  }

  public get timeLoggingStopped(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTrailStatus',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.GetTrailStatus.TimeLoggingStopped'),
        outputPath: 'TimeLoggingStopped',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTrailStatus.TimeLoggingStopped', props);
    return resource.getResponseField('TimeLoggingStopped') as unknown as string;
  }

}

export class CloudTrailResponsesListPublicKeys {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudTrailListPublicKeysRequest) {
  }

  public get publicKeyList(): shapes.CloudTrailPublicKey[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPublicKeys',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.ListPublicKeys.PublicKeyList'),
        outputPath: 'PublicKeyList',
        parameters: {
          StartTime: this.__input.startTime,
          EndTime: this.__input.endTime,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPublicKeys.PublicKeyList', props);
    return resource.getResponseField('PublicKeyList') as unknown as shapes.CloudTrailPublicKey[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPublicKeys',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.ListPublicKeys.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          StartTime: this.__input.startTime,
          EndTime: this.__input.endTime,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPublicKeys.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudTrailResponsesListTags {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudTrailListTagsRequest) {
  }

  public get resourceTagList(): shapes.CloudTrailResourceTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTags',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.ListTags.ResourceTagList'),
        outputPath: 'ResourceTagList',
        parameters: {
          ResourceIdList: this.__input.resourceIdList,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTags.ResourceTagList', props);
    return resource.getResponseField('ResourceTagList') as unknown as shapes.CloudTrailResourceTag[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTags',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.ListTags.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ResourceIdList: this.__input.resourceIdList,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTags.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudTrailResponsesListTrails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudTrailListTrailsRequest) {
  }

  public get trails(): shapes.CloudTrailTrailInfo[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTrails',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.ListTrails.Trails'),
        outputPath: 'Trails',
        parameters: {
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTrails.Trails', props);
    return resource.getResponseField('Trails') as unknown as shapes.CloudTrailTrailInfo[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTrails',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.ListTrails.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTrails.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudTrailResponsesLookupEvents {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudTrailLookupEventsRequest) {
  }

  public get events(): shapes.CloudTrailEvent[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'lookupEvents',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.LookupEvents.Events'),
        outputPath: 'Events',
        parameters: {
          LookupAttributes: this.__input.lookupAttributes,
          StartTime: this.__input.startTime,
          EndTime: this.__input.endTime,
          EventCategory: this.__input.eventCategory,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'LookupEvents.Events', props);
    return resource.getResponseField('Events') as unknown as shapes.CloudTrailEvent[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'lookupEvents',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.LookupEvents.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          LookupAttributes: this.__input.lookupAttributes,
          StartTime: this.__input.startTime,
          EndTime: this.__input.endTime,
          EventCategory: this.__input.eventCategory,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'LookupEvents.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudTrailResponsesPutEventSelectors {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudTrailPutEventSelectorsRequest) {
  }

  public get trailArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putEventSelectors',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.PutEventSelectors.TrailARN'),
        outputPath: 'TrailARN',
        parameters: {
          TrailName: this.__input.trailName,
          EventSelectors: this.__input.eventSelectors,
          AdvancedEventSelectors: this.__input.advancedEventSelectors,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutEventSelectors.TrailARN', props);
    return resource.getResponseField('TrailARN') as unknown as string;
  }

  public get eventSelectors(): shapes.CloudTrailEventSelector[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putEventSelectors',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.PutEventSelectors.EventSelectors'),
        outputPath: 'EventSelectors',
        parameters: {
          TrailName: this.__input.trailName,
          EventSelectors: this.__input.eventSelectors,
          AdvancedEventSelectors: this.__input.advancedEventSelectors,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutEventSelectors.EventSelectors', props);
    return resource.getResponseField('EventSelectors') as unknown as shapes.CloudTrailEventSelector[];
  }

  public get advancedEventSelectors(): shapes.CloudTrailAdvancedEventSelector[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putEventSelectors',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.PutEventSelectors.AdvancedEventSelectors'),
        outputPath: 'AdvancedEventSelectors',
        parameters: {
          TrailName: this.__input.trailName,
          EventSelectors: this.__input.eventSelectors,
          AdvancedEventSelectors: this.__input.advancedEventSelectors,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutEventSelectors.AdvancedEventSelectors', props);
    return resource.getResponseField('AdvancedEventSelectors') as unknown as shapes.CloudTrailAdvancedEventSelector[];
  }

}

export class CloudTrailResponsesPutInsightSelectors {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudTrailPutInsightSelectorsRequest) {
  }

  public get trailArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putInsightSelectors',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.PutInsightSelectors.TrailARN'),
        outputPath: 'TrailARN',
        parameters: {
          TrailName: this.__input.trailName,
          InsightSelectors: this.__input.insightSelectors,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutInsightSelectors.TrailARN', props);
    return resource.getResponseField('TrailARN') as unknown as string;
  }

  public get insightSelectors(): shapes.CloudTrailInsightSelector[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putInsightSelectors',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.PutInsightSelectors.InsightSelectors'),
        outputPath: 'InsightSelectors',
        parameters: {
          TrailName: this.__input.trailName,
          InsightSelectors: this.__input.insightSelectors,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutInsightSelectors.InsightSelectors', props);
    return resource.getResponseField('InsightSelectors') as unknown as shapes.CloudTrailInsightSelector[];
  }

}

export class CloudTrailResponsesUpdateTrail {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudTrailUpdateTrailRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTrail',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.UpdateTrail.Name'),
        outputPath: 'Name',
        parameters: {
          Name: this.__input.name,
          S3BucketName: this.__input.s3BucketName,
          S3KeyPrefix: this.__input.s3KeyPrefix,
          SnsTopicName: this.__input.snsTopicName,
          IncludeGlobalServiceEvents: this.__input.includeGlobalServiceEvents,
          IsMultiRegionTrail: this.__input.isMultiRegionTrail,
          EnableLogFileValidation: this.__input.enableLogFileValidation,
          CloudWatchLogsLogGroupArn: this.__input.cloudWatchLogsLogGroupArn,
          CloudWatchLogsRoleArn: this.__input.cloudWatchLogsRoleArn,
          KmsKeyId: this.__input.kmsKeyId,
          IsOrganizationTrail: this.__input.isOrganizationTrail,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTrail.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get s3BucketName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTrail',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.UpdateTrail.S3BucketName'),
        outputPath: 'S3BucketName',
        parameters: {
          Name: this.__input.name,
          S3BucketName: this.__input.s3BucketName,
          S3KeyPrefix: this.__input.s3KeyPrefix,
          SnsTopicName: this.__input.snsTopicName,
          IncludeGlobalServiceEvents: this.__input.includeGlobalServiceEvents,
          IsMultiRegionTrail: this.__input.isMultiRegionTrail,
          EnableLogFileValidation: this.__input.enableLogFileValidation,
          CloudWatchLogsLogGroupArn: this.__input.cloudWatchLogsLogGroupArn,
          CloudWatchLogsRoleArn: this.__input.cloudWatchLogsRoleArn,
          KmsKeyId: this.__input.kmsKeyId,
          IsOrganizationTrail: this.__input.isOrganizationTrail,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTrail.S3BucketName', props);
    return resource.getResponseField('S3BucketName') as unknown as string;
  }

  public get s3KeyPrefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTrail',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.UpdateTrail.S3KeyPrefix'),
        outputPath: 'S3KeyPrefix',
        parameters: {
          Name: this.__input.name,
          S3BucketName: this.__input.s3BucketName,
          S3KeyPrefix: this.__input.s3KeyPrefix,
          SnsTopicName: this.__input.snsTopicName,
          IncludeGlobalServiceEvents: this.__input.includeGlobalServiceEvents,
          IsMultiRegionTrail: this.__input.isMultiRegionTrail,
          EnableLogFileValidation: this.__input.enableLogFileValidation,
          CloudWatchLogsLogGroupArn: this.__input.cloudWatchLogsLogGroupArn,
          CloudWatchLogsRoleArn: this.__input.cloudWatchLogsRoleArn,
          KmsKeyId: this.__input.kmsKeyId,
          IsOrganizationTrail: this.__input.isOrganizationTrail,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTrail.S3KeyPrefix', props);
    return resource.getResponseField('S3KeyPrefix') as unknown as string;
  }

  public get snsTopicName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTrail',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.UpdateTrail.SnsTopicName'),
        outputPath: 'SnsTopicName',
        parameters: {
          Name: this.__input.name,
          S3BucketName: this.__input.s3BucketName,
          S3KeyPrefix: this.__input.s3KeyPrefix,
          SnsTopicName: this.__input.snsTopicName,
          IncludeGlobalServiceEvents: this.__input.includeGlobalServiceEvents,
          IsMultiRegionTrail: this.__input.isMultiRegionTrail,
          EnableLogFileValidation: this.__input.enableLogFileValidation,
          CloudWatchLogsLogGroupArn: this.__input.cloudWatchLogsLogGroupArn,
          CloudWatchLogsRoleArn: this.__input.cloudWatchLogsRoleArn,
          KmsKeyId: this.__input.kmsKeyId,
          IsOrganizationTrail: this.__input.isOrganizationTrail,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTrail.SnsTopicName', props);
    return resource.getResponseField('SnsTopicName') as unknown as string;
  }

  public get snsTopicArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTrail',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.UpdateTrail.SnsTopicARN'),
        outputPath: 'SnsTopicARN',
        parameters: {
          Name: this.__input.name,
          S3BucketName: this.__input.s3BucketName,
          S3KeyPrefix: this.__input.s3KeyPrefix,
          SnsTopicName: this.__input.snsTopicName,
          IncludeGlobalServiceEvents: this.__input.includeGlobalServiceEvents,
          IsMultiRegionTrail: this.__input.isMultiRegionTrail,
          EnableLogFileValidation: this.__input.enableLogFileValidation,
          CloudWatchLogsLogGroupArn: this.__input.cloudWatchLogsLogGroupArn,
          CloudWatchLogsRoleArn: this.__input.cloudWatchLogsRoleArn,
          KmsKeyId: this.__input.kmsKeyId,
          IsOrganizationTrail: this.__input.isOrganizationTrail,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTrail.SnsTopicARN', props);
    return resource.getResponseField('SnsTopicARN') as unknown as string;
  }

  public get includeGlobalServiceEvents(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTrail',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.UpdateTrail.IncludeGlobalServiceEvents'),
        outputPath: 'IncludeGlobalServiceEvents',
        parameters: {
          Name: this.__input.name,
          S3BucketName: this.__input.s3BucketName,
          S3KeyPrefix: this.__input.s3KeyPrefix,
          SnsTopicName: this.__input.snsTopicName,
          IncludeGlobalServiceEvents: this.__input.includeGlobalServiceEvents,
          IsMultiRegionTrail: this.__input.isMultiRegionTrail,
          EnableLogFileValidation: this.__input.enableLogFileValidation,
          CloudWatchLogsLogGroupArn: this.__input.cloudWatchLogsLogGroupArn,
          CloudWatchLogsRoleArn: this.__input.cloudWatchLogsRoleArn,
          KmsKeyId: this.__input.kmsKeyId,
          IsOrganizationTrail: this.__input.isOrganizationTrail,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTrail.IncludeGlobalServiceEvents', props);
    return resource.getResponseField('IncludeGlobalServiceEvents') as unknown as boolean;
  }

  public get isMultiRegionTrail(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTrail',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.UpdateTrail.IsMultiRegionTrail'),
        outputPath: 'IsMultiRegionTrail',
        parameters: {
          Name: this.__input.name,
          S3BucketName: this.__input.s3BucketName,
          S3KeyPrefix: this.__input.s3KeyPrefix,
          SnsTopicName: this.__input.snsTopicName,
          IncludeGlobalServiceEvents: this.__input.includeGlobalServiceEvents,
          IsMultiRegionTrail: this.__input.isMultiRegionTrail,
          EnableLogFileValidation: this.__input.enableLogFileValidation,
          CloudWatchLogsLogGroupArn: this.__input.cloudWatchLogsLogGroupArn,
          CloudWatchLogsRoleArn: this.__input.cloudWatchLogsRoleArn,
          KmsKeyId: this.__input.kmsKeyId,
          IsOrganizationTrail: this.__input.isOrganizationTrail,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTrail.IsMultiRegionTrail', props);
    return resource.getResponseField('IsMultiRegionTrail') as unknown as boolean;
  }

  public get trailArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTrail',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.UpdateTrail.TrailARN'),
        outputPath: 'TrailARN',
        parameters: {
          Name: this.__input.name,
          S3BucketName: this.__input.s3BucketName,
          S3KeyPrefix: this.__input.s3KeyPrefix,
          SnsTopicName: this.__input.snsTopicName,
          IncludeGlobalServiceEvents: this.__input.includeGlobalServiceEvents,
          IsMultiRegionTrail: this.__input.isMultiRegionTrail,
          EnableLogFileValidation: this.__input.enableLogFileValidation,
          CloudWatchLogsLogGroupArn: this.__input.cloudWatchLogsLogGroupArn,
          CloudWatchLogsRoleArn: this.__input.cloudWatchLogsRoleArn,
          KmsKeyId: this.__input.kmsKeyId,
          IsOrganizationTrail: this.__input.isOrganizationTrail,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTrail.TrailARN', props);
    return resource.getResponseField('TrailARN') as unknown as string;
  }

  public get logFileValidationEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTrail',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.UpdateTrail.LogFileValidationEnabled'),
        outputPath: 'LogFileValidationEnabled',
        parameters: {
          Name: this.__input.name,
          S3BucketName: this.__input.s3BucketName,
          S3KeyPrefix: this.__input.s3KeyPrefix,
          SnsTopicName: this.__input.snsTopicName,
          IncludeGlobalServiceEvents: this.__input.includeGlobalServiceEvents,
          IsMultiRegionTrail: this.__input.isMultiRegionTrail,
          EnableLogFileValidation: this.__input.enableLogFileValidation,
          CloudWatchLogsLogGroupArn: this.__input.cloudWatchLogsLogGroupArn,
          CloudWatchLogsRoleArn: this.__input.cloudWatchLogsRoleArn,
          KmsKeyId: this.__input.kmsKeyId,
          IsOrganizationTrail: this.__input.isOrganizationTrail,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTrail.LogFileValidationEnabled', props);
    return resource.getResponseField('LogFileValidationEnabled') as unknown as boolean;
  }

  public get cloudWatchLogsLogGroupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTrail',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.UpdateTrail.CloudWatchLogsLogGroupArn'),
        outputPath: 'CloudWatchLogsLogGroupArn',
        parameters: {
          Name: this.__input.name,
          S3BucketName: this.__input.s3BucketName,
          S3KeyPrefix: this.__input.s3KeyPrefix,
          SnsTopicName: this.__input.snsTopicName,
          IncludeGlobalServiceEvents: this.__input.includeGlobalServiceEvents,
          IsMultiRegionTrail: this.__input.isMultiRegionTrail,
          EnableLogFileValidation: this.__input.enableLogFileValidation,
          CloudWatchLogsLogGroupArn: this.__input.cloudWatchLogsLogGroupArn,
          CloudWatchLogsRoleArn: this.__input.cloudWatchLogsRoleArn,
          KmsKeyId: this.__input.kmsKeyId,
          IsOrganizationTrail: this.__input.isOrganizationTrail,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTrail.CloudWatchLogsLogGroupArn', props);
    return resource.getResponseField('CloudWatchLogsLogGroupArn') as unknown as string;
  }

  public get cloudWatchLogsRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTrail',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.UpdateTrail.CloudWatchLogsRoleArn'),
        outputPath: 'CloudWatchLogsRoleArn',
        parameters: {
          Name: this.__input.name,
          S3BucketName: this.__input.s3BucketName,
          S3KeyPrefix: this.__input.s3KeyPrefix,
          SnsTopicName: this.__input.snsTopicName,
          IncludeGlobalServiceEvents: this.__input.includeGlobalServiceEvents,
          IsMultiRegionTrail: this.__input.isMultiRegionTrail,
          EnableLogFileValidation: this.__input.enableLogFileValidation,
          CloudWatchLogsLogGroupArn: this.__input.cloudWatchLogsLogGroupArn,
          CloudWatchLogsRoleArn: this.__input.cloudWatchLogsRoleArn,
          KmsKeyId: this.__input.kmsKeyId,
          IsOrganizationTrail: this.__input.isOrganizationTrail,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTrail.CloudWatchLogsRoleArn', props);
    return resource.getResponseField('CloudWatchLogsRoleArn') as unknown as string;
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTrail',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.UpdateTrail.KmsKeyId'),
        outputPath: 'KmsKeyId',
        parameters: {
          Name: this.__input.name,
          S3BucketName: this.__input.s3BucketName,
          S3KeyPrefix: this.__input.s3KeyPrefix,
          SnsTopicName: this.__input.snsTopicName,
          IncludeGlobalServiceEvents: this.__input.includeGlobalServiceEvents,
          IsMultiRegionTrail: this.__input.isMultiRegionTrail,
          EnableLogFileValidation: this.__input.enableLogFileValidation,
          CloudWatchLogsLogGroupArn: this.__input.cloudWatchLogsLogGroupArn,
          CloudWatchLogsRoleArn: this.__input.cloudWatchLogsRoleArn,
          KmsKeyId: this.__input.kmsKeyId,
          IsOrganizationTrail: this.__input.isOrganizationTrail,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTrail.KmsKeyId', props);
    return resource.getResponseField('KmsKeyId') as unknown as string;
  }

  public get isOrganizationTrail(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTrail',
        service: 'CloudTrail',
        physicalResourceId: cr.PhysicalResourceId.of('CloudTrail.UpdateTrail.IsOrganizationTrail'),
        outputPath: 'IsOrganizationTrail',
        parameters: {
          Name: this.__input.name,
          S3BucketName: this.__input.s3BucketName,
          S3KeyPrefix: this.__input.s3KeyPrefix,
          SnsTopicName: this.__input.snsTopicName,
          IncludeGlobalServiceEvents: this.__input.includeGlobalServiceEvents,
          IsMultiRegionTrail: this.__input.isMultiRegionTrail,
          EnableLogFileValidation: this.__input.enableLogFileValidation,
          CloudWatchLogsLogGroupArn: this.__input.cloudWatchLogsLogGroupArn,
          CloudWatchLogsRoleArn: this.__input.cloudWatchLogsRoleArn,
          KmsKeyId: this.__input.kmsKeyId,
          IsOrganizationTrail: this.__input.isOrganizationTrail,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTrail.IsOrganizationTrail', props);
    return resource.getResponseField('IsOrganizationTrail') as unknown as boolean;
  }

}

