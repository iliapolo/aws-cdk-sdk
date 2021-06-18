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

  public createTrail(input: shapes.CloudTrailCreateTrailRequest): CloudTrailCreateTrail {
    return new CloudTrailCreateTrail(this, 'CreateTrail', this.__resources, input);
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

  public describeTrails(input: shapes.CloudTrailDescribeTrailsRequest): CloudTrailDescribeTrails {
    return new CloudTrailDescribeTrails(this, 'DescribeTrails', this.__resources, input);
  }

  public fetchEventSelectors(input: shapes.CloudTrailGetEventSelectorsRequest): CloudTrailFetchEventSelectors {
    return new CloudTrailFetchEventSelectors(this, 'FetchEventSelectors', this.__resources, input);
  }

  public fetchInsightSelectors(input: shapes.CloudTrailGetInsightSelectorsRequest): CloudTrailFetchInsightSelectors {
    return new CloudTrailFetchInsightSelectors(this, 'FetchInsightSelectors', this.__resources, input);
  }

  public fetchTrail(input: shapes.CloudTrailGetTrailRequest): CloudTrailFetchTrail {
    return new CloudTrailFetchTrail(this, 'FetchTrail', this.__resources, input);
  }

  public fetchTrailStatus(input: shapes.CloudTrailGetTrailStatusRequest): CloudTrailFetchTrailStatus {
    return new CloudTrailFetchTrailStatus(this, 'FetchTrailStatus', this.__resources, input);
  }

  public listPublicKeys(input: shapes.CloudTrailListPublicKeysRequest): CloudTrailListPublicKeys {
    return new CloudTrailListPublicKeys(this, 'ListPublicKeys', this.__resources, input);
  }

  public listTags(input: shapes.CloudTrailListTagsRequest): CloudTrailListTags {
    return new CloudTrailListTags(this, 'ListTags', this.__resources, input);
  }

  public listTrails(input: shapes.CloudTrailListTrailsRequest): CloudTrailListTrails {
    return new CloudTrailListTrails(this, 'ListTrails', this.__resources, input);
  }

  public lookupEvents(input: shapes.CloudTrailLookupEventsRequest): CloudTrailLookupEvents {
    return new CloudTrailLookupEvents(this, 'LookupEvents', this.__resources, input);
  }

  public putEventSelectors(input: shapes.CloudTrailPutEventSelectorsRequest): CloudTrailPutEventSelectors {
    return new CloudTrailPutEventSelectors(this, 'PutEventSelectors', this.__resources, input);
  }

  public putInsightSelectors(input: shapes.CloudTrailPutInsightSelectorsRequest): CloudTrailPutInsightSelectors {
    return new CloudTrailPutInsightSelectors(this, 'PutInsightSelectors', this.__resources, input);
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

  public updateTrail(input: shapes.CloudTrailUpdateTrailRequest): CloudTrailUpdateTrail {
    return new CloudTrailUpdateTrail(this, 'UpdateTrail', this.__resources, input);
  }

}

export class CloudTrailCreateTrail extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudTrailCreateTrailRequest) {
    super(scope, id);
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
          Name: this.input.name,
          S3BucketName: this.input.s3BucketName,
          S3KeyPrefix: this.input.s3KeyPrefix,
          SnsTopicName: this.input.snsTopicName,
          IncludeGlobalServiceEvents: this.input.includeGlobalServiceEvents,
          IsMultiRegionTrail: this.input.isMultiRegionTrail,
          EnableLogFileValidation: this.input.enableLogFileValidation,
          CloudWatchLogsLogGroupArn: this.input.cloudWatchLogsLogGroupArn,
          CloudWatchLogsRoleArn: this.input.cloudWatchLogsRoleArn,
          KmsKeyId: this.input.kmsKeyId,
          IsOrganizationTrail: this.input.isOrganizationTrail,
          TagsList: this.input.tagsList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTrail.Name', props);
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
          Name: this.input.name,
          S3BucketName: this.input.s3BucketName,
          S3KeyPrefix: this.input.s3KeyPrefix,
          SnsTopicName: this.input.snsTopicName,
          IncludeGlobalServiceEvents: this.input.includeGlobalServiceEvents,
          IsMultiRegionTrail: this.input.isMultiRegionTrail,
          EnableLogFileValidation: this.input.enableLogFileValidation,
          CloudWatchLogsLogGroupArn: this.input.cloudWatchLogsLogGroupArn,
          CloudWatchLogsRoleArn: this.input.cloudWatchLogsRoleArn,
          KmsKeyId: this.input.kmsKeyId,
          IsOrganizationTrail: this.input.isOrganizationTrail,
          TagsList: this.input.tagsList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTrail.S3BucketName', props);
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
          Name: this.input.name,
          S3BucketName: this.input.s3BucketName,
          S3KeyPrefix: this.input.s3KeyPrefix,
          SnsTopicName: this.input.snsTopicName,
          IncludeGlobalServiceEvents: this.input.includeGlobalServiceEvents,
          IsMultiRegionTrail: this.input.isMultiRegionTrail,
          EnableLogFileValidation: this.input.enableLogFileValidation,
          CloudWatchLogsLogGroupArn: this.input.cloudWatchLogsLogGroupArn,
          CloudWatchLogsRoleArn: this.input.cloudWatchLogsRoleArn,
          KmsKeyId: this.input.kmsKeyId,
          IsOrganizationTrail: this.input.isOrganizationTrail,
          TagsList: this.input.tagsList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTrail.S3KeyPrefix', props);
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
          Name: this.input.name,
          S3BucketName: this.input.s3BucketName,
          S3KeyPrefix: this.input.s3KeyPrefix,
          SnsTopicName: this.input.snsTopicName,
          IncludeGlobalServiceEvents: this.input.includeGlobalServiceEvents,
          IsMultiRegionTrail: this.input.isMultiRegionTrail,
          EnableLogFileValidation: this.input.enableLogFileValidation,
          CloudWatchLogsLogGroupArn: this.input.cloudWatchLogsLogGroupArn,
          CloudWatchLogsRoleArn: this.input.cloudWatchLogsRoleArn,
          KmsKeyId: this.input.kmsKeyId,
          IsOrganizationTrail: this.input.isOrganizationTrail,
          TagsList: this.input.tagsList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTrail.SnsTopicName', props);
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
          Name: this.input.name,
          S3BucketName: this.input.s3BucketName,
          S3KeyPrefix: this.input.s3KeyPrefix,
          SnsTopicName: this.input.snsTopicName,
          IncludeGlobalServiceEvents: this.input.includeGlobalServiceEvents,
          IsMultiRegionTrail: this.input.isMultiRegionTrail,
          EnableLogFileValidation: this.input.enableLogFileValidation,
          CloudWatchLogsLogGroupArn: this.input.cloudWatchLogsLogGroupArn,
          CloudWatchLogsRoleArn: this.input.cloudWatchLogsRoleArn,
          KmsKeyId: this.input.kmsKeyId,
          IsOrganizationTrail: this.input.isOrganizationTrail,
          TagsList: this.input.tagsList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTrail.SnsTopicARN', props);
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
          Name: this.input.name,
          S3BucketName: this.input.s3BucketName,
          S3KeyPrefix: this.input.s3KeyPrefix,
          SnsTopicName: this.input.snsTopicName,
          IncludeGlobalServiceEvents: this.input.includeGlobalServiceEvents,
          IsMultiRegionTrail: this.input.isMultiRegionTrail,
          EnableLogFileValidation: this.input.enableLogFileValidation,
          CloudWatchLogsLogGroupArn: this.input.cloudWatchLogsLogGroupArn,
          CloudWatchLogsRoleArn: this.input.cloudWatchLogsRoleArn,
          KmsKeyId: this.input.kmsKeyId,
          IsOrganizationTrail: this.input.isOrganizationTrail,
          TagsList: this.input.tagsList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTrail.IncludeGlobalServiceEvents', props);
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
          Name: this.input.name,
          S3BucketName: this.input.s3BucketName,
          S3KeyPrefix: this.input.s3KeyPrefix,
          SnsTopicName: this.input.snsTopicName,
          IncludeGlobalServiceEvents: this.input.includeGlobalServiceEvents,
          IsMultiRegionTrail: this.input.isMultiRegionTrail,
          EnableLogFileValidation: this.input.enableLogFileValidation,
          CloudWatchLogsLogGroupArn: this.input.cloudWatchLogsLogGroupArn,
          CloudWatchLogsRoleArn: this.input.cloudWatchLogsRoleArn,
          KmsKeyId: this.input.kmsKeyId,
          IsOrganizationTrail: this.input.isOrganizationTrail,
          TagsList: this.input.tagsList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTrail.IsMultiRegionTrail', props);
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
          Name: this.input.name,
          S3BucketName: this.input.s3BucketName,
          S3KeyPrefix: this.input.s3KeyPrefix,
          SnsTopicName: this.input.snsTopicName,
          IncludeGlobalServiceEvents: this.input.includeGlobalServiceEvents,
          IsMultiRegionTrail: this.input.isMultiRegionTrail,
          EnableLogFileValidation: this.input.enableLogFileValidation,
          CloudWatchLogsLogGroupArn: this.input.cloudWatchLogsLogGroupArn,
          CloudWatchLogsRoleArn: this.input.cloudWatchLogsRoleArn,
          KmsKeyId: this.input.kmsKeyId,
          IsOrganizationTrail: this.input.isOrganizationTrail,
          TagsList: this.input.tagsList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTrail.TrailARN', props);
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
          Name: this.input.name,
          S3BucketName: this.input.s3BucketName,
          S3KeyPrefix: this.input.s3KeyPrefix,
          SnsTopicName: this.input.snsTopicName,
          IncludeGlobalServiceEvents: this.input.includeGlobalServiceEvents,
          IsMultiRegionTrail: this.input.isMultiRegionTrail,
          EnableLogFileValidation: this.input.enableLogFileValidation,
          CloudWatchLogsLogGroupArn: this.input.cloudWatchLogsLogGroupArn,
          CloudWatchLogsRoleArn: this.input.cloudWatchLogsRoleArn,
          KmsKeyId: this.input.kmsKeyId,
          IsOrganizationTrail: this.input.isOrganizationTrail,
          TagsList: this.input.tagsList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTrail.LogFileValidationEnabled', props);
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
          Name: this.input.name,
          S3BucketName: this.input.s3BucketName,
          S3KeyPrefix: this.input.s3KeyPrefix,
          SnsTopicName: this.input.snsTopicName,
          IncludeGlobalServiceEvents: this.input.includeGlobalServiceEvents,
          IsMultiRegionTrail: this.input.isMultiRegionTrail,
          EnableLogFileValidation: this.input.enableLogFileValidation,
          CloudWatchLogsLogGroupArn: this.input.cloudWatchLogsLogGroupArn,
          CloudWatchLogsRoleArn: this.input.cloudWatchLogsRoleArn,
          KmsKeyId: this.input.kmsKeyId,
          IsOrganizationTrail: this.input.isOrganizationTrail,
          TagsList: this.input.tagsList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTrail.CloudWatchLogsLogGroupArn', props);
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
          Name: this.input.name,
          S3BucketName: this.input.s3BucketName,
          S3KeyPrefix: this.input.s3KeyPrefix,
          SnsTopicName: this.input.snsTopicName,
          IncludeGlobalServiceEvents: this.input.includeGlobalServiceEvents,
          IsMultiRegionTrail: this.input.isMultiRegionTrail,
          EnableLogFileValidation: this.input.enableLogFileValidation,
          CloudWatchLogsLogGroupArn: this.input.cloudWatchLogsLogGroupArn,
          CloudWatchLogsRoleArn: this.input.cloudWatchLogsRoleArn,
          KmsKeyId: this.input.kmsKeyId,
          IsOrganizationTrail: this.input.isOrganizationTrail,
          TagsList: this.input.tagsList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTrail.CloudWatchLogsRoleArn', props);
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
          Name: this.input.name,
          S3BucketName: this.input.s3BucketName,
          S3KeyPrefix: this.input.s3KeyPrefix,
          SnsTopicName: this.input.snsTopicName,
          IncludeGlobalServiceEvents: this.input.includeGlobalServiceEvents,
          IsMultiRegionTrail: this.input.isMultiRegionTrail,
          EnableLogFileValidation: this.input.enableLogFileValidation,
          CloudWatchLogsLogGroupArn: this.input.cloudWatchLogsLogGroupArn,
          CloudWatchLogsRoleArn: this.input.cloudWatchLogsRoleArn,
          KmsKeyId: this.input.kmsKeyId,
          IsOrganizationTrail: this.input.isOrganizationTrail,
          TagsList: this.input.tagsList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTrail.KmsKeyId', props);
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
          Name: this.input.name,
          S3BucketName: this.input.s3BucketName,
          S3KeyPrefix: this.input.s3KeyPrefix,
          SnsTopicName: this.input.snsTopicName,
          IncludeGlobalServiceEvents: this.input.includeGlobalServiceEvents,
          IsMultiRegionTrail: this.input.isMultiRegionTrail,
          EnableLogFileValidation: this.input.enableLogFileValidation,
          CloudWatchLogsLogGroupArn: this.input.cloudWatchLogsLogGroupArn,
          CloudWatchLogsRoleArn: this.input.cloudWatchLogsRoleArn,
          KmsKeyId: this.input.kmsKeyId,
          IsOrganizationTrail: this.input.isOrganizationTrail,
          TagsList: this.input.tagsList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTrail.IsOrganizationTrail', props);
    return resource.getResponseField('IsOrganizationTrail') as unknown as boolean;
  }

}

export class CloudTrailDescribeTrails extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudTrailDescribeTrailsRequest) {
    super(scope, id);
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
          trailNameList: this.input.trailNameList,
          includeShadowTrails: this.input.includeShadowTrails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrails.trailList', props);
    return resource.getResponseField('trailList') as unknown as shapes.CloudTrailTrail[];
  }

}

export class CloudTrailFetchEventSelectors extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudTrailGetEventSelectorsRequest) {
    super(scope, id);
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
          TrailName: this.input.trailName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEventSelectors.TrailARN', props);
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
          TrailName: this.input.trailName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEventSelectors.EventSelectors', props);
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
          TrailName: this.input.trailName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEventSelectors.AdvancedEventSelectors', props);
    return resource.getResponseField('AdvancedEventSelectors') as unknown as shapes.CloudTrailAdvancedEventSelector[];
  }

}

export class CloudTrailFetchInsightSelectors extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudTrailGetInsightSelectorsRequest) {
    super(scope, id);
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
          TrailName: this.input.trailName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInsightSelectors.TrailARN', props);
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
          TrailName: this.input.trailName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInsightSelectors.InsightSelectors', props);
    return resource.getResponseField('InsightSelectors') as unknown as shapes.CloudTrailInsightSelector[];
  }

}

export class CloudTrailFetchTrail extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudTrailGetTrailRequest) {
    super(scope, id);
  }

  public get trail(): CloudTrailFetchTrailTrail {
    return new CloudTrailFetchTrailTrail(this, 'Trail', this.__resources, this.input);
  }

}

export class CloudTrailFetchTrailTrail extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudTrailGetTrailRequest) {
    super(scope, id);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTrail.Trail.Name', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTrail.Trail.S3BucketName', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTrail.Trail.S3KeyPrefix', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTrail.Trail.SnsTopicName', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTrail.Trail.SnsTopicARN', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTrail.Trail.IncludeGlobalServiceEvents', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTrail.Trail.IsMultiRegionTrail', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTrail.Trail.HomeRegion', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTrail.Trail.TrailARN', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTrail.Trail.LogFileValidationEnabled', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTrail.Trail.CloudWatchLogsLogGroupArn', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTrail.Trail.CloudWatchLogsRoleArn', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTrail.Trail.KmsKeyId', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTrail.Trail.HasCustomEventSelectors', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTrail.Trail.HasInsightSelectors', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTrail.Trail.IsOrganizationTrail', props);
    return resource.getResponseField('Trail.IsOrganizationTrail') as unknown as boolean;
  }

}

export class CloudTrailFetchTrailStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudTrailGetTrailStatusRequest) {
    super(scope, id);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTrailStatus.IsLogging', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTrailStatus.LatestDeliveryError', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTrailStatus.LatestNotificationError', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTrailStatus.LatestDeliveryTime', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTrailStatus.LatestNotificationTime', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTrailStatus.StartLoggingTime', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTrailStatus.StopLoggingTime', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTrailStatus.LatestCloudWatchLogsDeliveryError', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTrailStatus.LatestCloudWatchLogsDeliveryTime', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTrailStatus.LatestDigestDeliveryTime', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTrailStatus.LatestDigestDeliveryError', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTrailStatus.LatestDeliveryAttemptTime', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTrailStatus.LatestNotificationAttemptTime', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTrailStatus.LatestNotificationAttemptSucceeded', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTrailStatus.LatestDeliveryAttemptSucceeded', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTrailStatus.TimeLoggingStarted', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTrailStatus.TimeLoggingStopped', props);
    return resource.getResponseField('TimeLoggingStopped') as unknown as string;
  }

}

export class CloudTrailListPublicKeys extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudTrailListPublicKeysRequest) {
    super(scope, id);
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
          StartTime: this.input.startTime,
          EndTime: this.input.endTime,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPublicKeys.PublicKeyList', props);
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
          StartTime: this.input.startTime,
          EndTime: this.input.endTime,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPublicKeys.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudTrailListTags extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudTrailListTagsRequest) {
    super(scope, id);
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
          ResourceIdList: this.input.resourceIdList,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTags.ResourceTagList', props);
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
          ResourceIdList: this.input.resourceIdList,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTags.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudTrailListTrails extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudTrailListTrailsRequest) {
    super(scope, id);
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
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTrails.Trails', props);
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
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTrails.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudTrailLookupEvents extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudTrailLookupEventsRequest) {
    super(scope, id);
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
          LookupAttributes: this.input.lookupAttributes,
          StartTime: this.input.startTime,
          EndTime: this.input.endTime,
          EventCategory: this.input.eventCategory,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'LookupEvents.Events', props);
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
          LookupAttributes: this.input.lookupAttributes,
          StartTime: this.input.startTime,
          EndTime: this.input.endTime,
          EventCategory: this.input.eventCategory,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'LookupEvents.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudTrailPutEventSelectors extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudTrailPutEventSelectorsRequest) {
    super(scope, id);
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
          TrailName: this.input.trailName,
          EventSelectors: this.input.eventSelectors,
          AdvancedEventSelectors: this.input.advancedEventSelectors,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutEventSelectors.TrailARN', props);
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
          TrailName: this.input.trailName,
          EventSelectors: this.input.eventSelectors,
          AdvancedEventSelectors: this.input.advancedEventSelectors,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutEventSelectors.EventSelectors', props);
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
          TrailName: this.input.trailName,
          EventSelectors: this.input.eventSelectors,
          AdvancedEventSelectors: this.input.advancedEventSelectors,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutEventSelectors.AdvancedEventSelectors', props);
    return resource.getResponseField('AdvancedEventSelectors') as unknown as shapes.CloudTrailAdvancedEventSelector[];
  }

}

export class CloudTrailPutInsightSelectors extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudTrailPutInsightSelectorsRequest) {
    super(scope, id);
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
          TrailName: this.input.trailName,
          InsightSelectors: this.input.insightSelectors,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutInsightSelectors.TrailARN', props);
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
          TrailName: this.input.trailName,
          InsightSelectors: this.input.insightSelectors,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutInsightSelectors.InsightSelectors', props);
    return resource.getResponseField('InsightSelectors') as unknown as shapes.CloudTrailInsightSelector[];
  }

}

export class CloudTrailUpdateTrail extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudTrailUpdateTrailRequest) {
    super(scope, id);
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
          Name: this.input.name,
          S3BucketName: this.input.s3BucketName,
          S3KeyPrefix: this.input.s3KeyPrefix,
          SnsTopicName: this.input.snsTopicName,
          IncludeGlobalServiceEvents: this.input.includeGlobalServiceEvents,
          IsMultiRegionTrail: this.input.isMultiRegionTrail,
          EnableLogFileValidation: this.input.enableLogFileValidation,
          CloudWatchLogsLogGroupArn: this.input.cloudWatchLogsLogGroupArn,
          CloudWatchLogsRoleArn: this.input.cloudWatchLogsRoleArn,
          KmsKeyId: this.input.kmsKeyId,
          IsOrganizationTrail: this.input.isOrganizationTrail,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTrail.Name', props);
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
          Name: this.input.name,
          S3BucketName: this.input.s3BucketName,
          S3KeyPrefix: this.input.s3KeyPrefix,
          SnsTopicName: this.input.snsTopicName,
          IncludeGlobalServiceEvents: this.input.includeGlobalServiceEvents,
          IsMultiRegionTrail: this.input.isMultiRegionTrail,
          EnableLogFileValidation: this.input.enableLogFileValidation,
          CloudWatchLogsLogGroupArn: this.input.cloudWatchLogsLogGroupArn,
          CloudWatchLogsRoleArn: this.input.cloudWatchLogsRoleArn,
          KmsKeyId: this.input.kmsKeyId,
          IsOrganizationTrail: this.input.isOrganizationTrail,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTrail.S3BucketName', props);
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
          Name: this.input.name,
          S3BucketName: this.input.s3BucketName,
          S3KeyPrefix: this.input.s3KeyPrefix,
          SnsTopicName: this.input.snsTopicName,
          IncludeGlobalServiceEvents: this.input.includeGlobalServiceEvents,
          IsMultiRegionTrail: this.input.isMultiRegionTrail,
          EnableLogFileValidation: this.input.enableLogFileValidation,
          CloudWatchLogsLogGroupArn: this.input.cloudWatchLogsLogGroupArn,
          CloudWatchLogsRoleArn: this.input.cloudWatchLogsRoleArn,
          KmsKeyId: this.input.kmsKeyId,
          IsOrganizationTrail: this.input.isOrganizationTrail,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTrail.S3KeyPrefix', props);
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
          Name: this.input.name,
          S3BucketName: this.input.s3BucketName,
          S3KeyPrefix: this.input.s3KeyPrefix,
          SnsTopicName: this.input.snsTopicName,
          IncludeGlobalServiceEvents: this.input.includeGlobalServiceEvents,
          IsMultiRegionTrail: this.input.isMultiRegionTrail,
          EnableLogFileValidation: this.input.enableLogFileValidation,
          CloudWatchLogsLogGroupArn: this.input.cloudWatchLogsLogGroupArn,
          CloudWatchLogsRoleArn: this.input.cloudWatchLogsRoleArn,
          KmsKeyId: this.input.kmsKeyId,
          IsOrganizationTrail: this.input.isOrganizationTrail,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTrail.SnsTopicName', props);
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
          Name: this.input.name,
          S3BucketName: this.input.s3BucketName,
          S3KeyPrefix: this.input.s3KeyPrefix,
          SnsTopicName: this.input.snsTopicName,
          IncludeGlobalServiceEvents: this.input.includeGlobalServiceEvents,
          IsMultiRegionTrail: this.input.isMultiRegionTrail,
          EnableLogFileValidation: this.input.enableLogFileValidation,
          CloudWatchLogsLogGroupArn: this.input.cloudWatchLogsLogGroupArn,
          CloudWatchLogsRoleArn: this.input.cloudWatchLogsRoleArn,
          KmsKeyId: this.input.kmsKeyId,
          IsOrganizationTrail: this.input.isOrganizationTrail,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTrail.SnsTopicARN', props);
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
          Name: this.input.name,
          S3BucketName: this.input.s3BucketName,
          S3KeyPrefix: this.input.s3KeyPrefix,
          SnsTopicName: this.input.snsTopicName,
          IncludeGlobalServiceEvents: this.input.includeGlobalServiceEvents,
          IsMultiRegionTrail: this.input.isMultiRegionTrail,
          EnableLogFileValidation: this.input.enableLogFileValidation,
          CloudWatchLogsLogGroupArn: this.input.cloudWatchLogsLogGroupArn,
          CloudWatchLogsRoleArn: this.input.cloudWatchLogsRoleArn,
          KmsKeyId: this.input.kmsKeyId,
          IsOrganizationTrail: this.input.isOrganizationTrail,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTrail.IncludeGlobalServiceEvents', props);
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
          Name: this.input.name,
          S3BucketName: this.input.s3BucketName,
          S3KeyPrefix: this.input.s3KeyPrefix,
          SnsTopicName: this.input.snsTopicName,
          IncludeGlobalServiceEvents: this.input.includeGlobalServiceEvents,
          IsMultiRegionTrail: this.input.isMultiRegionTrail,
          EnableLogFileValidation: this.input.enableLogFileValidation,
          CloudWatchLogsLogGroupArn: this.input.cloudWatchLogsLogGroupArn,
          CloudWatchLogsRoleArn: this.input.cloudWatchLogsRoleArn,
          KmsKeyId: this.input.kmsKeyId,
          IsOrganizationTrail: this.input.isOrganizationTrail,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTrail.IsMultiRegionTrail', props);
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
          Name: this.input.name,
          S3BucketName: this.input.s3BucketName,
          S3KeyPrefix: this.input.s3KeyPrefix,
          SnsTopicName: this.input.snsTopicName,
          IncludeGlobalServiceEvents: this.input.includeGlobalServiceEvents,
          IsMultiRegionTrail: this.input.isMultiRegionTrail,
          EnableLogFileValidation: this.input.enableLogFileValidation,
          CloudWatchLogsLogGroupArn: this.input.cloudWatchLogsLogGroupArn,
          CloudWatchLogsRoleArn: this.input.cloudWatchLogsRoleArn,
          KmsKeyId: this.input.kmsKeyId,
          IsOrganizationTrail: this.input.isOrganizationTrail,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTrail.TrailARN', props);
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
          Name: this.input.name,
          S3BucketName: this.input.s3BucketName,
          S3KeyPrefix: this.input.s3KeyPrefix,
          SnsTopicName: this.input.snsTopicName,
          IncludeGlobalServiceEvents: this.input.includeGlobalServiceEvents,
          IsMultiRegionTrail: this.input.isMultiRegionTrail,
          EnableLogFileValidation: this.input.enableLogFileValidation,
          CloudWatchLogsLogGroupArn: this.input.cloudWatchLogsLogGroupArn,
          CloudWatchLogsRoleArn: this.input.cloudWatchLogsRoleArn,
          KmsKeyId: this.input.kmsKeyId,
          IsOrganizationTrail: this.input.isOrganizationTrail,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTrail.LogFileValidationEnabled', props);
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
          Name: this.input.name,
          S3BucketName: this.input.s3BucketName,
          S3KeyPrefix: this.input.s3KeyPrefix,
          SnsTopicName: this.input.snsTopicName,
          IncludeGlobalServiceEvents: this.input.includeGlobalServiceEvents,
          IsMultiRegionTrail: this.input.isMultiRegionTrail,
          EnableLogFileValidation: this.input.enableLogFileValidation,
          CloudWatchLogsLogGroupArn: this.input.cloudWatchLogsLogGroupArn,
          CloudWatchLogsRoleArn: this.input.cloudWatchLogsRoleArn,
          KmsKeyId: this.input.kmsKeyId,
          IsOrganizationTrail: this.input.isOrganizationTrail,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTrail.CloudWatchLogsLogGroupArn', props);
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
          Name: this.input.name,
          S3BucketName: this.input.s3BucketName,
          S3KeyPrefix: this.input.s3KeyPrefix,
          SnsTopicName: this.input.snsTopicName,
          IncludeGlobalServiceEvents: this.input.includeGlobalServiceEvents,
          IsMultiRegionTrail: this.input.isMultiRegionTrail,
          EnableLogFileValidation: this.input.enableLogFileValidation,
          CloudWatchLogsLogGroupArn: this.input.cloudWatchLogsLogGroupArn,
          CloudWatchLogsRoleArn: this.input.cloudWatchLogsRoleArn,
          KmsKeyId: this.input.kmsKeyId,
          IsOrganizationTrail: this.input.isOrganizationTrail,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTrail.CloudWatchLogsRoleArn', props);
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
          Name: this.input.name,
          S3BucketName: this.input.s3BucketName,
          S3KeyPrefix: this.input.s3KeyPrefix,
          SnsTopicName: this.input.snsTopicName,
          IncludeGlobalServiceEvents: this.input.includeGlobalServiceEvents,
          IsMultiRegionTrail: this.input.isMultiRegionTrail,
          EnableLogFileValidation: this.input.enableLogFileValidation,
          CloudWatchLogsLogGroupArn: this.input.cloudWatchLogsLogGroupArn,
          CloudWatchLogsRoleArn: this.input.cloudWatchLogsRoleArn,
          KmsKeyId: this.input.kmsKeyId,
          IsOrganizationTrail: this.input.isOrganizationTrail,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTrail.KmsKeyId', props);
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
          Name: this.input.name,
          S3BucketName: this.input.s3BucketName,
          S3KeyPrefix: this.input.s3KeyPrefix,
          SnsTopicName: this.input.snsTopicName,
          IncludeGlobalServiceEvents: this.input.includeGlobalServiceEvents,
          IsMultiRegionTrail: this.input.isMultiRegionTrail,
          EnableLogFileValidation: this.input.enableLogFileValidation,
          CloudWatchLogsLogGroupArn: this.input.cloudWatchLogsLogGroupArn,
          CloudWatchLogsRoleArn: this.input.cloudWatchLogsRoleArn,
          KmsKeyId: this.input.kmsKeyId,
          IsOrganizationTrail: this.input.isOrganizationTrail,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTrail.IsOrganizationTrail', props);
    return resource.getResponseField('IsOrganizationTrail') as unknown as boolean;
  }

}

