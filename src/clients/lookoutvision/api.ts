import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class LookoutVisionClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createDataset(input: shapes.LookoutVisionCreateDatasetRequest): LookoutVisionResponsesCreateDataset {
    return new LookoutVisionResponsesCreateDataset(this, this.__resources, input);
  }

  public createModel(input: shapes.LookoutVisionCreateModelRequest): LookoutVisionResponsesCreateModel {
    return new LookoutVisionResponsesCreateModel(this, this.__resources, input);
  }

  public createProject(input: shapes.LookoutVisionCreateProjectRequest): LookoutVisionResponsesCreateProject {
    return new LookoutVisionResponsesCreateProject(this, this.__resources, input);
  }

  public deleteDataset(input: shapes.LookoutVisionDeleteDatasetRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDataset',
        service: 'LookoutVision',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutVision.DeleteDataset'),
        parameters: {
          ProjectName: input.projectName,
          DatasetType: input.datasetType,
          ClientToken: input.clientToken,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteDataset', props);
  }

  public deleteModel(input: shapes.LookoutVisionDeleteModelRequest): LookoutVisionResponsesDeleteModel {
    return new LookoutVisionResponsesDeleteModel(this, this.__resources, input);
  }

  public deleteProject(input: shapes.LookoutVisionDeleteProjectRequest): LookoutVisionResponsesDeleteProject {
    return new LookoutVisionResponsesDeleteProject(this, this.__resources, input);
  }

  public describeDataset(input: shapes.LookoutVisionDescribeDatasetRequest): LookoutVisionResponsesDescribeDataset {
    return new LookoutVisionResponsesDescribeDataset(this, this.__resources, input);
  }

  public describeModel(input: shapes.LookoutVisionDescribeModelRequest): LookoutVisionResponsesDescribeModel {
    return new LookoutVisionResponsesDescribeModel(this, this.__resources, input);
  }

  public describeProject(input: shapes.LookoutVisionDescribeProjectRequest): LookoutVisionResponsesDescribeProject {
    return new LookoutVisionResponsesDescribeProject(this, this.__resources, input);
  }

  public detectAnomalies(input: shapes.LookoutVisionDetectAnomaliesRequest): LookoutVisionResponsesDetectAnomalies {
    return new LookoutVisionResponsesDetectAnomalies(this, this.__resources, input);
  }

  public listDatasetEntries(input: shapes.LookoutVisionListDatasetEntriesRequest): LookoutVisionResponsesListDatasetEntries {
    return new LookoutVisionResponsesListDatasetEntries(this, this.__resources, input);
  }

  public listModels(input: shapes.LookoutVisionListModelsRequest): LookoutVisionResponsesListModels {
    return new LookoutVisionResponsesListModels(this, this.__resources, input);
  }

  public listProjects(input: shapes.LookoutVisionListProjectsRequest): LookoutVisionResponsesListProjects {
    return new LookoutVisionResponsesListProjects(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.LookoutVisionListTagsForResourceRequest): LookoutVisionResponsesListTagsForResource {
    return new LookoutVisionResponsesListTagsForResource(this, this.__resources, input);
  }

  public startModel(input: shapes.LookoutVisionStartModelRequest): LookoutVisionResponsesStartModel {
    return new LookoutVisionResponsesStartModel(this, this.__resources, input);
  }

  public stopModel(input: shapes.LookoutVisionStopModelRequest): LookoutVisionResponsesStopModel {
    return new LookoutVisionResponsesStopModel(this, this.__resources, input);
  }

  public tagResource(input: shapes.LookoutVisionTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'LookoutVision',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutVision.TagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.LookoutVisionUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'LookoutVision',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutVision.UntagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateDatasetEntries(input: shapes.LookoutVisionUpdateDatasetEntriesRequest): LookoutVisionResponsesUpdateDatasetEntries {
    return new LookoutVisionResponsesUpdateDatasetEntries(this, this.__resources, input);
  }

}

export class LookoutVisionResponsesCreateDataset {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutVisionCreateDatasetRequest) {
  }

  public get datasetMetadata(): LookoutVisionResponsesCreateDatasetDatasetMetadata {
    return new LookoutVisionResponsesCreateDatasetDatasetMetadata(this.__scope, this.__resources, this.__input);
  }

}

export class LookoutVisionResponsesCreateDatasetDatasetMetadata {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutVisionCreateDatasetRequest) {
  }

  public get datasetType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataset',
        service: 'LookoutVision',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutVision.CreateDataset.DatasetMetadata.DatasetType'),
        outputPath: 'DatasetMetadata.DatasetType',
        parameters: {
          ProjectName: this.__input.projectName,
          DatasetType: this.__input.datasetType,
          DatasetSource: {
            GroundTruthManifest: {
              S3Object: {
                Bucket: this.__input.datasetSource?.groundTruthManifest?.s3Object?.bucket,
                Key: this.__input.datasetSource?.groundTruthManifest?.s3Object?.key,
                VersionId: this.__input.datasetSource?.groundTruthManifest?.s3Object?.versionId,
              },
            },
          },
          ClientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataset.DatasetMetadata.DatasetType', props);
    return resource.getResponseField('DatasetMetadata.DatasetType') as unknown as string;
  }

  public get creationTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataset',
        service: 'LookoutVision',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutVision.CreateDataset.DatasetMetadata.CreationTimestamp'),
        outputPath: 'DatasetMetadata.CreationTimestamp',
        parameters: {
          ProjectName: this.__input.projectName,
          DatasetType: this.__input.datasetType,
          DatasetSource: {
            GroundTruthManifest: {
              S3Object: {
                Bucket: this.__input.datasetSource?.groundTruthManifest?.s3Object?.bucket,
                Key: this.__input.datasetSource?.groundTruthManifest?.s3Object?.key,
                VersionId: this.__input.datasetSource?.groundTruthManifest?.s3Object?.versionId,
              },
            },
          },
          ClientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataset.DatasetMetadata.CreationTimestamp', props);
    return resource.getResponseField('DatasetMetadata.CreationTimestamp') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataset',
        service: 'LookoutVision',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutVision.CreateDataset.DatasetMetadata.Status'),
        outputPath: 'DatasetMetadata.Status',
        parameters: {
          ProjectName: this.__input.projectName,
          DatasetType: this.__input.datasetType,
          DatasetSource: {
            GroundTruthManifest: {
              S3Object: {
                Bucket: this.__input.datasetSource?.groundTruthManifest?.s3Object?.bucket,
                Key: this.__input.datasetSource?.groundTruthManifest?.s3Object?.key,
                VersionId: this.__input.datasetSource?.groundTruthManifest?.s3Object?.versionId,
              },
            },
          },
          ClientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataset.DatasetMetadata.Status', props);
    return resource.getResponseField('DatasetMetadata.Status') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataset',
        service: 'LookoutVision',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutVision.CreateDataset.DatasetMetadata.StatusMessage'),
        outputPath: 'DatasetMetadata.StatusMessage',
        parameters: {
          ProjectName: this.__input.projectName,
          DatasetType: this.__input.datasetType,
          DatasetSource: {
            GroundTruthManifest: {
              S3Object: {
                Bucket: this.__input.datasetSource?.groundTruthManifest?.s3Object?.bucket,
                Key: this.__input.datasetSource?.groundTruthManifest?.s3Object?.key,
                VersionId: this.__input.datasetSource?.groundTruthManifest?.s3Object?.versionId,
              },
            },
          },
          ClientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataset.DatasetMetadata.StatusMessage', props);
    return resource.getResponseField('DatasetMetadata.StatusMessage') as unknown as string;
  }

}

export class LookoutVisionResponsesCreateModel {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutVisionCreateModelRequest) {
  }

  public get modelMetadata(): LookoutVisionResponsesCreateModelModelMetadata {
    return new LookoutVisionResponsesCreateModelModelMetadata(this.__scope, this.__resources, this.__input);
  }

}

export class LookoutVisionResponsesCreateModelModelMetadata {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutVisionCreateModelRequest) {
  }

  public get creationTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createModel',
        service: 'LookoutVision',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutVision.CreateModel.ModelMetadata.CreationTimestamp'),
        outputPath: 'ModelMetadata.CreationTimestamp',
        parameters: {
          ProjectName: this.__input.projectName,
          Description: this.__input.description,
          ClientToken: this.__input.clientToken,
          OutputConfig: {
            S3Location: {
              Bucket: this.__input.outputConfig.s3Location.bucket,
              Prefix: this.__input.outputConfig.s3Location.prefix,
            },
          },
          KmsKeyId: this.__input.kmsKeyId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateModel.ModelMetadata.CreationTimestamp', props);
    return resource.getResponseField('ModelMetadata.CreationTimestamp') as unknown as string;
  }

  public get modelVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createModel',
        service: 'LookoutVision',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutVision.CreateModel.ModelMetadata.ModelVersion'),
        outputPath: 'ModelMetadata.ModelVersion',
        parameters: {
          ProjectName: this.__input.projectName,
          Description: this.__input.description,
          ClientToken: this.__input.clientToken,
          OutputConfig: {
            S3Location: {
              Bucket: this.__input.outputConfig.s3Location.bucket,
              Prefix: this.__input.outputConfig.s3Location.prefix,
            },
          },
          KmsKeyId: this.__input.kmsKeyId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateModel.ModelMetadata.ModelVersion', props);
    return resource.getResponseField('ModelMetadata.ModelVersion') as unknown as string;
  }

  public get modelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createModel',
        service: 'LookoutVision',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutVision.CreateModel.ModelMetadata.ModelArn'),
        outputPath: 'ModelMetadata.ModelArn',
        parameters: {
          ProjectName: this.__input.projectName,
          Description: this.__input.description,
          ClientToken: this.__input.clientToken,
          OutputConfig: {
            S3Location: {
              Bucket: this.__input.outputConfig.s3Location.bucket,
              Prefix: this.__input.outputConfig.s3Location.prefix,
            },
          },
          KmsKeyId: this.__input.kmsKeyId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateModel.ModelMetadata.ModelArn', props);
    return resource.getResponseField('ModelMetadata.ModelArn') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createModel',
        service: 'LookoutVision',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutVision.CreateModel.ModelMetadata.Description'),
        outputPath: 'ModelMetadata.Description',
        parameters: {
          ProjectName: this.__input.projectName,
          Description: this.__input.description,
          ClientToken: this.__input.clientToken,
          OutputConfig: {
            S3Location: {
              Bucket: this.__input.outputConfig.s3Location.bucket,
              Prefix: this.__input.outputConfig.s3Location.prefix,
            },
          },
          KmsKeyId: this.__input.kmsKeyId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateModel.ModelMetadata.Description', props);
    return resource.getResponseField('ModelMetadata.Description') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createModel',
        service: 'LookoutVision',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutVision.CreateModel.ModelMetadata.Status'),
        outputPath: 'ModelMetadata.Status',
        parameters: {
          ProjectName: this.__input.projectName,
          Description: this.__input.description,
          ClientToken: this.__input.clientToken,
          OutputConfig: {
            S3Location: {
              Bucket: this.__input.outputConfig.s3Location.bucket,
              Prefix: this.__input.outputConfig.s3Location.prefix,
            },
          },
          KmsKeyId: this.__input.kmsKeyId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateModel.ModelMetadata.Status', props);
    return resource.getResponseField('ModelMetadata.Status') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createModel',
        service: 'LookoutVision',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutVision.CreateModel.ModelMetadata.StatusMessage'),
        outputPath: 'ModelMetadata.StatusMessage',
        parameters: {
          ProjectName: this.__input.projectName,
          Description: this.__input.description,
          ClientToken: this.__input.clientToken,
          OutputConfig: {
            S3Location: {
              Bucket: this.__input.outputConfig.s3Location.bucket,
              Prefix: this.__input.outputConfig.s3Location.prefix,
            },
          },
          KmsKeyId: this.__input.kmsKeyId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateModel.ModelMetadata.StatusMessage', props);
    return resource.getResponseField('ModelMetadata.StatusMessage') as unknown as string;
  }

  public get performance(): LookoutVisionResponsesCreateModelModelMetadataPerformance {
    return new LookoutVisionResponsesCreateModelModelMetadataPerformance(this.__scope, this.__resources, this.__input);
  }

}

export class LookoutVisionResponsesCreateModelModelMetadataPerformance {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutVisionCreateModelRequest) {
  }

  public get f1Score(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createModel',
        service: 'LookoutVision',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutVision.CreateModel.ModelMetadata.Performance.F1Score'),
        outputPath: 'ModelMetadata.Performance.F1Score',
        parameters: {
          ProjectName: this.__input.projectName,
          Description: this.__input.description,
          ClientToken: this.__input.clientToken,
          OutputConfig: {
            S3Location: {
              Bucket: this.__input.outputConfig.s3Location.bucket,
              Prefix: this.__input.outputConfig.s3Location.prefix,
            },
          },
          KmsKeyId: this.__input.kmsKeyId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateModel.ModelMetadata.Performance.F1Score', props);
    return resource.getResponseField('ModelMetadata.Performance.F1Score') as unknown as number;
  }

  public get recall(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createModel',
        service: 'LookoutVision',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutVision.CreateModel.ModelMetadata.Performance.Recall'),
        outputPath: 'ModelMetadata.Performance.Recall',
        parameters: {
          ProjectName: this.__input.projectName,
          Description: this.__input.description,
          ClientToken: this.__input.clientToken,
          OutputConfig: {
            S3Location: {
              Bucket: this.__input.outputConfig.s3Location.bucket,
              Prefix: this.__input.outputConfig.s3Location.prefix,
            },
          },
          KmsKeyId: this.__input.kmsKeyId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateModel.ModelMetadata.Performance.Recall', props);
    return resource.getResponseField('ModelMetadata.Performance.Recall') as unknown as number;
  }

  public get precision(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createModel',
        service: 'LookoutVision',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutVision.CreateModel.ModelMetadata.Performance.Precision'),
        outputPath: 'ModelMetadata.Performance.Precision',
        parameters: {
          ProjectName: this.__input.projectName,
          Description: this.__input.description,
          ClientToken: this.__input.clientToken,
          OutputConfig: {
            S3Location: {
              Bucket: this.__input.outputConfig.s3Location.bucket,
              Prefix: this.__input.outputConfig.s3Location.prefix,
            },
          },
          KmsKeyId: this.__input.kmsKeyId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateModel.ModelMetadata.Performance.Precision', props);
    return resource.getResponseField('ModelMetadata.Performance.Precision') as unknown as number;
  }

}

export class LookoutVisionResponsesCreateProject {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutVisionCreateProjectRequest) {
  }

  public get projectMetadata(): LookoutVisionResponsesCreateProjectProjectMetadata {
    return new LookoutVisionResponsesCreateProjectProjectMetadata(this.__scope, this.__resources, this.__input);
  }

}

export class LookoutVisionResponsesCreateProjectProjectMetadata {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutVisionCreateProjectRequest) {
  }

  public get projectArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProject',
        service: 'LookoutVision',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutVision.CreateProject.ProjectMetadata.ProjectArn'),
        outputPath: 'ProjectMetadata.ProjectArn',
        parameters: {
          ProjectName: this.__input.projectName,
          ClientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProject.ProjectMetadata.ProjectArn', props);
    return resource.getResponseField('ProjectMetadata.ProjectArn') as unknown as string;
  }

  public get projectName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProject',
        service: 'LookoutVision',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutVision.CreateProject.ProjectMetadata.ProjectName'),
        outputPath: 'ProjectMetadata.ProjectName',
        parameters: {
          ProjectName: this.__input.projectName,
          ClientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProject.ProjectMetadata.ProjectName', props);
    return resource.getResponseField('ProjectMetadata.ProjectName') as unknown as string;
  }

  public get creationTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProject',
        service: 'LookoutVision',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutVision.CreateProject.ProjectMetadata.CreationTimestamp'),
        outputPath: 'ProjectMetadata.CreationTimestamp',
        parameters: {
          ProjectName: this.__input.projectName,
          ClientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProject.ProjectMetadata.CreationTimestamp', props);
    return resource.getResponseField('ProjectMetadata.CreationTimestamp') as unknown as string;
  }

}

export class LookoutVisionResponsesDeleteModel {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutVisionDeleteModelRequest) {
  }

  public get modelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteModel',
        service: 'LookoutVision',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutVision.DeleteModel.ModelArn'),
        outputPath: 'ModelArn',
        parameters: {
          ProjectName: this.__input.projectName,
          ModelVersion: this.__input.modelVersion,
          ClientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteModel.ModelArn', props);
    return resource.getResponseField('ModelArn') as unknown as string;
  }

}

export class LookoutVisionResponsesDeleteProject {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutVisionDeleteProjectRequest) {
  }

  public get projectArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteProject',
        service: 'LookoutVision',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutVision.DeleteProject.ProjectArn'),
        outputPath: 'ProjectArn',
        parameters: {
          ProjectName: this.__input.projectName,
          ClientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteProject.ProjectArn', props);
    return resource.getResponseField('ProjectArn') as unknown as string;
  }

}

export class LookoutVisionResponsesDescribeDataset {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutVisionDescribeDatasetRequest) {
  }

  public get datasetDescription(): LookoutVisionResponsesDescribeDatasetDatasetDescription {
    return new LookoutVisionResponsesDescribeDatasetDatasetDescription(this.__scope, this.__resources, this.__input);
  }

}

export class LookoutVisionResponsesDescribeDatasetDatasetDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutVisionDescribeDatasetRequest) {
  }

  public get projectName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataset',
        service: 'LookoutVision',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutVision.DescribeDataset.DatasetDescription.ProjectName'),
        outputPath: 'DatasetDescription.ProjectName',
        parameters: {
          ProjectName: this.__input.projectName,
          DatasetType: this.__input.datasetType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataset.DatasetDescription.ProjectName', props);
    return resource.getResponseField('DatasetDescription.ProjectName') as unknown as string;
  }

  public get datasetType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataset',
        service: 'LookoutVision',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutVision.DescribeDataset.DatasetDescription.DatasetType'),
        outputPath: 'DatasetDescription.DatasetType',
        parameters: {
          ProjectName: this.__input.projectName,
          DatasetType: this.__input.datasetType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataset.DatasetDescription.DatasetType', props);
    return resource.getResponseField('DatasetDescription.DatasetType') as unknown as string;
  }

  public get creationTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataset',
        service: 'LookoutVision',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutVision.DescribeDataset.DatasetDescription.CreationTimestamp'),
        outputPath: 'DatasetDescription.CreationTimestamp',
        parameters: {
          ProjectName: this.__input.projectName,
          DatasetType: this.__input.datasetType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataset.DatasetDescription.CreationTimestamp', props);
    return resource.getResponseField('DatasetDescription.CreationTimestamp') as unknown as string;
  }

  public get lastUpdatedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataset',
        service: 'LookoutVision',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutVision.DescribeDataset.DatasetDescription.LastUpdatedTimestamp'),
        outputPath: 'DatasetDescription.LastUpdatedTimestamp',
        parameters: {
          ProjectName: this.__input.projectName,
          DatasetType: this.__input.datasetType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataset.DatasetDescription.LastUpdatedTimestamp', props);
    return resource.getResponseField('DatasetDescription.LastUpdatedTimestamp') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataset',
        service: 'LookoutVision',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutVision.DescribeDataset.DatasetDescription.Status'),
        outputPath: 'DatasetDescription.Status',
        parameters: {
          ProjectName: this.__input.projectName,
          DatasetType: this.__input.datasetType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataset.DatasetDescription.Status', props);
    return resource.getResponseField('DatasetDescription.Status') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataset',
        service: 'LookoutVision',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutVision.DescribeDataset.DatasetDescription.StatusMessage'),
        outputPath: 'DatasetDescription.StatusMessage',
        parameters: {
          ProjectName: this.__input.projectName,
          DatasetType: this.__input.datasetType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataset.DatasetDescription.StatusMessage', props);
    return resource.getResponseField('DatasetDescription.StatusMessage') as unknown as string;
  }

  public get imageStats(): LookoutVisionResponsesDescribeDatasetDatasetDescriptionImageStats {
    return new LookoutVisionResponsesDescribeDatasetDatasetDescriptionImageStats(this.__scope, this.__resources, this.__input);
  }

}

export class LookoutVisionResponsesDescribeDatasetDatasetDescriptionImageStats {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutVisionDescribeDatasetRequest) {
  }

  public get total(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataset',
        service: 'LookoutVision',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutVision.DescribeDataset.DatasetDescription.ImageStats.Total'),
        outputPath: 'DatasetDescription.ImageStats.Total',
        parameters: {
          ProjectName: this.__input.projectName,
          DatasetType: this.__input.datasetType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataset.DatasetDescription.ImageStats.Total', props);
    return resource.getResponseField('DatasetDescription.ImageStats.Total') as unknown as number;
  }

  public get labeled(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataset',
        service: 'LookoutVision',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutVision.DescribeDataset.DatasetDescription.ImageStats.Labeled'),
        outputPath: 'DatasetDescription.ImageStats.Labeled',
        parameters: {
          ProjectName: this.__input.projectName,
          DatasetType: this.__input.datasetType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataset.DatasetDescription.ImageStats.Labeled', props);
    return resource.getResponseField('DatasetDescription.ImageStats.Labeled') as unknown as number;
  }

  public get normal(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataset',
        service: 'LookoutVision',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutVision.DescribeDataset.DatasetDescription.ImageStats.Normal'),
        outputPath: 'DatasetDescription.ImageStats.Normal',
        parameters: {
          ProjectName: this.__input.projectName,
          DatasetType: this.__input.datasetType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataset.DatasetDescription.ImageStats.Normal', props);
    return resource.getResponseField('DatasetDescription.ImageStats.Normal') as unknown as number;
  }

  public get anomaly(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataset',
        service: 'LookoutVision',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutVision.DescribeDataset.DatasetDescription.ImageStats.Anomaly'),
        outputPath: 'DatasetDescription.ImageStats.Anomaly',
        parameters: {
          ProjectName: this.__input.projectName,
          DatasetType: this.__input.datasetType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataset.DatasetDescription.ImageStats.Anomaly', props);
    return resource.getResponseField('DatasetDescription.ImageStats.Anomaly') as unknown as number;
  }

}

export class LookoutVisionResponsesDescribeModel {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutVisionDescribeModelRequest) {
  }

  public get modelDescription(): LookoutVisionResponsesDescribeModelModelDescription {
    return new LookoutVisionResponsesDescribeModelModelDescription(this.__scope, this.__resources, this.__input);
  }

}

export class LookoutVisionResponsesDescribeModelModelDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutVisionDescribeModelRequest) {
  }

  public get modelVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeModel',
        service: 'LookoutVision',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutVision.DescribeModel.ModelDescription.ModelVersion'),
        outputPath: 'ModelDescription.ModelVersion',
        parameters: {
          ProjectName: this.__input.projectName,
          ModelVersion: this.__input.modelVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeModel.ModelDescription.ModelVersion', props);
    return resource.getResponseField('ModelDescription.ModelVersion') as unknown as string;
  }

  public get modelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeModel',
        service: 'LookoutVision',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutVision.DescribeModel.ModelDescription.ModelArn'),
        outputPath: 'ModelDescription.ModelArn',
        parameters: {
          ProjectName: this.__input.projectName,
          ModelVersion: this.__input.modelVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeModel.ModelDescription.ModelArn', props);
    return resource.getResponseField('ModelDescription.ModelArn') as unknown as string;
  }

  public get creationTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeModel',
        service: 'LookoutVision',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutVision.DescribeModel.ModelDescription.CreationTimestamp'),
        outputPath: 'ModelDescription.CreationTimestamp',
        parameters: {
          ProjectName: this.__input.projectName,
          ModelVersion: this.__input.modelVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeModel.ModelDescription.CreationTimestamp', props);
    return resource.getResponseField('ModelDescription.CreationTimestamp') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeModel',
        service: 'LookoutVision',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutVision.DescribeModel.ModelDescription.Description'),
        outputPath: 'ModelDescription.Description',
        parameters: {
          ProjectName: this.__input.projectName,
          ModelVersion: this.__input.modelVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeModel.ModelDescription.Description', props);
    return resource.getResponseField('ModelDescription.Description') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeModel',
        service: 'LookoutVision',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutVision.DescribeModel.ModelDescription.Status'),
        outputPath: 'ModelDescription.Status',
        parameters: {
          ProjectName: this.__input.projectName,
          ModelVersion: this.__input.modelVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeModel.ModelDescription.Status', props);
    return resource.getResponseField('ModelDescription.Status') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeModel',
        service: 'LookoutVision',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutVision.DescribeModel.ModelDescription.StatusMessage'),
        outputPath: 'ModelDescription.StatusMessage',
        parameters: {
          ProjectName: this.__input.projectName,
          ModelVersion: this.__input.modelVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeModel.ModelDescription.StatusMessage', props);
    return resource.getResponseField('ModelDescription.StatusMessage') as unknown as string;
  }

  public get performance(): LookoutVisionResponsesDescribeModelModelDescriptionPerformance {
    return new LookoutVisionResponsesDescribeModelModelDescriptionPerformance(this.__scope, this.__resources, this.__input);
  }

  public get outputConfig(): LookoutVisionResponsesDescribeModelModelDescriptionOutputConfig {
    return new LookoutVisionResponsesDescribeModelModelDescriptionOutputConfig(this.__scope, this.__resources, this.__input);
  }

  public get evaluationManifest(): LookoutVisionResponsesDescribeModelModelDescriptionEvaluationManifest {
    return new LookoutVisionResponsesDescribeModelModelDescriptionEvaluationManifest(this.__scope, this.__resources, this.__input);
  }

  public get evaluationResult(): LookoutVisionResponsesDescribeModelModelDescriptionEvaluationResult {
    return new LookoutVisionResponsesDescribeModelModelDescriptionEvaluationResult(this.__scope, this.__resources, this.__input);
  }

  public get evaluationEndTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeModel',
        service: 'LookoutVision',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutVision.DescribeModel.ModelDescription.EvaluationEndTimestamp'),
        outputPath: 'ModelDescription.EvaluationEndTimestamp',
        parameters: {
          ProjectName: this.__input.projectName,
          ModelVersion: this.__input.modelVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeModel.ModelDescription.EvaluationEndTimestamp', props);
    return resource.getResponseField('ModelDescription.EvaluationEndTimestamp') as unknown as string;
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeModel',
        service: 'LookoutVision',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutVision.DescribeModel.ModelDescription.KmsKeyId'),
        outputPath: 'ModelDescription.KmsKeyId',
        parameters: {
          ProjectName: this.__input.projectName,
          ModelVersion: this.__input.modelVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeModel.ModelDescription.KmsKeyId', props);
    return resource.getResponseField('ModelDescription.KmsKeyId') as unknown as string;
  }

}

export class LookoutVisionResponsesDescribeModelModelDescriptionPerformance {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutVisionDescribeModelRequest) {
  }

  public get f1Score(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeModel',
        service: 'LookoutVision',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutVision.DescribeModel.ModelDescription.Performance.F1Score'),
        outputPath: 'ModelDescription.Performance.F1Score',
        parameters: {
          ProjectName: this.__input.projectName,
          ModelVersion: this.__input.modelVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeModel.ModelDescription.Performance.F1Score', props);
    return resource.getResponseField('ModelDescription.Performance.F1Score') as unknown as number;
  }

  public get recall(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeModel',
        service: 'LookoutVision',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutVision.DescribeModel.ModelDescription.Performance.Recall'),
        outputPath: 'ModelDescription.Performance.Recall',
        parameters: {
          ProjectName: this.__input.projectName,
          ModelVersion: this.__input.modelVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeModel.ModelDescription.Performance.Recall', props);
    return resource.getResponseField('ModelDescription.Performance.Recall') as unknown as number;
  }

  public get precision(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeModel',
        service: 'LookoutVision',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutVision.DescribeModel.ModelDescription.Performance.Precision'),
        outputPath: 'ModelDescription.Performance.Precision',
        parameters: {
          ProjectName: this.__input.projectName,
          ModelVersion: this.__input.modelVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeModel.ModelDescription.Performance.Precision', props);
    return resource.getResponseField('ModelDescription.Performance.Precision') as unknown as number;
  }

}

export class LookoutVisionResponsesDescribeModelModelDescriptionOutputConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutVisionDescribeModelRequest) {
  }

  public get s3Location(): LookoutVisionResponsesDescribeModelModelDescriptionOutputConfigS3Location {
    return new LookoutVisionResponsesDescribeModelModelDescriptionOutputConfigS3Location(this.__scope, this.__resources, this.__input);
  }

}

export class LookoutVisionResponsesDescribeModelModelDescriptionOutputConfigS3Location {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutVisionDescribeModelRequest) {
  }

  public get bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeModel',
        service: 'LookoutVision',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutVision.DescribeModel.ModelDescription.OutputConfig.S3Location.Bucket'),
        outputPath: 'ModelDescription.OutputConfig.S3Location.Bucket',
        parameters: {
          ProjectName: this.__input.projectName,
          ModelVersion: this.__input.modelVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeModel.ModelDescription.OutputConfig.S3Location.Bucket', props);
    return resource.getResponseField('ModelDescription.OutputConfig.S3Location.Bucket') as unknown as string;
  }

  public get prefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeModel',
        service: 'LookoutVision',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutVision.DescribeModel.ModelDescription.OutputConfig.S3Location.Prefix'),
        outputPath: 'ModelDescription.OutputConfig.S3Location.Prefix',
        parameters: {
          ProjectName: this.__input.projectName,
          ModelVersion: this.__input.modelVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeModel.ModelDescription.OutputConfig.S3Location.Prefix', props);
    return resource.getResponseField('ModelDescription.OutputConfig.S3Location.Prefix') as unknown as string;
  }

}

export class LookoutVisionResponsesDescribeModelModelDescriptionEvaluationManifest {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutVisionDescribeModelRequest) {
  }

  public get bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeModel',
        service: 'LookoutVision',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutVision.DescribeModel.ModelDescription.EvaluationManifest.Bucket'),
        outputPath: 'ModelDescription.EvaluationManifest.Bucket',
        parameters: {
          ProjectName: this.__input.projectName,
          ModelVersion: this.__input.modelVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeModel.ModelDescription.EvaluationManifest.Bucket', props);
    return resource.getResponseField('ModelDescription.EvaluationManifest.Bucket') as unknown as string;
  }

  public get key(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeModel',
        service: 'LookoutVision',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutVision.DescribeModel.ModelDescription.EvaluationManifest.Key'),
        outputPath: 'ModelDescription.EvaluationManifest.Key',
        parameters: {
          ProjectName: this.__input.projectName,
          ModelVersion: this.__input.modelVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeModel.ModelDescription.EvaluationManifest.Key', props);
    return resource.getResponseField('ModelDescription.EvaluationManifest.Key') as unknown as string;
  }

}

export class LookoutVisionResponsesDescribeModelModelDescriptionEvaluationResult {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutVisionDescribeModelRequest) {
  }

  public get bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeModel',
        service: 'LookoutVision',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutVision.DescribeModel.ModelDescription.EvaluationResult.Bucket'),
        outputPath: 'ModelDescription.EvaluationResult.Bucket',
        parameters: {
          ProjectName: this.__input.projectName,
          ModelVersion: this.__input.modelVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeModel.ModelDescription.EvaluationResult.Bucket', props);
    return resource.getResponseField('ModelDescription.EvaluationResult.Bucket') as unknown as string;
  }

  public get key(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeModel',
        service: 'LookoutVision',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutVision.DescribeModel.ModelDescription.EvaluationResult.Key'),
        outputPath: 'ModelDescription.EvaluationResult.Key',
        parameters: {
          ProjectName: this.__input.projectName,
          ModelVersion: this.__input.modelVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeModel.ModelDescription.EvaluationResult.Key', props);
    return resource.getResponseField('ModelDescription.EvaluationResult.Key') as unknown as string;
  }

}

export class LookoutVisionResponsesDescribeProject {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutVisionDescribeProjectRequest) {
  }

  public get projectDescription(): LookoutVisionResponsesDescribeProjectProjectDescription {
    return new LookoutVisionResponsesDescribeProjectProjectDescription(this.__scope, this.__resources, this.__input);
  }

}

export class LookoutVisionResponsesDescribeProjectProjectDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutVisionDescribeProjectRequest) {
  }

  public get projectArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProject',
        service: 'LookoutVision',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutVision.DescribeProject.ProjectDescription.ProjectArn'),
        outputPath: 'ProjectDescription.ProjectArn',
        parameters: {
          ProjectName: this.__input.projectName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProject.ProjectDescription.ProjectArn', props);
    return resource.getResponseField('ProjectDescription.ProjectArn') as unknown as string;
  }

  public get projectName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProject',
        service: 'LookoutVision',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutVision.DescribeProject.ProjectDescription.ProjectName'),
        outputPath: 'ProjectDescription.ProjectName',
        parameters: {
          ProjectName: this.__input.projectName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProject.ProjectDescription.ProjectName', props);
    return resource.getResponseField('ProjectDescription.ProjectName') as unknown as string;
  }

  public get creationTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProject',
        service: 'LookoutVision',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutVision.DescribeProject.ProjectDescription.CreationTimestamp'),
        outputPath: 'ProjectDescription.CreationTimestamp',
        parameters: {
          ProjectName: this.__input.projectName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProject.ProjectDescription.CreationTimestamp', props);
    return resource.getResponseField('ProjectDescription.CreationTimestamp') as unknown as string;
  }

  public get datasets(): shapes.LookoutVisionDatasetMetadata[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProject',
        service: 'LookoutVision',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutVision.DescribeProject.ProjectDescription.Datasets'),
        outputPath: 'ProjectDescription.Datasets',
        parameters: {
          ProjectName: this.__input.projectName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProject.ProjectDescription.Datasets', props);
    return resource.getResponseField('ProjectDescription.Datasets') as unknown as shapes.LookoutVisionDatasetMetadata[];
  }

}

export class LookoutVisionResponsesDetectAnomalies {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutVisionDetectAnomaliesRequest) {
  }

  public get detectAnomalyResult(): LookoutVisionResponsesDetectAnomaliesDetectAnomalyResult {
    return new LookoutVisionResponsesDetectAnomaliesDetectAnomalyResult(this.__scope, this.__resources, this.__input);
  }

}

export class LookoutVisionResponsesDetectAnomaliesDetectAnomalyResult {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutVisionDetectAnomaliesRequest) {
  }

  public get source(): LookoutVisionResponsesDetectAnomaliesDetectAnomalyResultSource {
    return new LookoutVisionResponsesDetectAnomaliesDetectAnomalyResultSource(this.__scope, this.__resources, this.__input);
  }

  public get isAnomalous(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detectAnomalies',
        service: 'LookoutVision',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutVision.DetectAnomalies.DetectAnomalyResult.IsAnomalous'),
        outputPath: 'DetectAnomalyResult.IsAnomalous',
        parameters: {
          ProjectName: this.__input.projectName,
          ModelVersion: this.__input.modelVersion,
          Body: {
          },
          ContentType: this.__input.contentType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DetectAnomalies.DetectAnomalyResult.IsAnomalous', props);
    return resource.getResponseField('DetectAnomalyResult.IsAnomalous') as unknown as boolean;
  }

  public get confidence(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detectAnomalies',
        service: 'LookoutVision',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutVision.DetectAnomalies.DetectAnomalyResult.Confidence'),
        outputPath: 'DetectAnomalyResult.Confidence',
        parameters: {
          ProjectName: this.__input.projectName,
          ModelVersion: this.__input.modelVersion,
          Body: {
          },
          ContentType: this.__input.contentType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DetectAnomalies.DetectAnomalyResult.Confidence', props);
    return resource.getResponseField('DetectAnomalyResult.Confidence') as unknown as number;
  }

}

export class LookoutVisionResponsesDetectAnomaliesDetectAnomalyResultSource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutVisionDetectAnomaliesRequest) {
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detectAnomalies',
        service: 'LookoutVision',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutVision.DetectAnomalies.DetectAnomalyResult.Source.Type'),
        outputPath: 'DetectAnomalyResult.Source.Type',
        parameters: {
          ProjectName: this.__input.projectName,
          ModelVersion: this.__input.modelVersion,
          Body: {
          },
          ContentType: this.__input.contentType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DetectAnomalies.DetectAnomalyResult.Source.Type', props);
    return resource.getResponseField('DetectAnomalyResult.Source.Type') as unknown as string;
  }

}

export class LookoutVisionResponsesListDatasetEntries {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutVisionListDatasetEntriesRequest) {
  }

  public get datasetEntries(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDatasetEntries',
        service: 'LookoutVision',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutVision.ListDatasetEntries.DatasetEntries'),
        outputPath: 'DatasetEntries',
        parameters: {
          ProjectName: this.__input.projectName,
          DatasetType: this.__input.datasetType,
          Labeled: this.__input.labeled,
          AnomalyClass: this.__input.anomalyClass,
          BeforeCreationDate: this.__input.beforeCreationDate,
          AfterCreationDate: this.__input.afterCreationDate,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          SourceRefContains: this.__input.sourceRefContains,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDatasetEntries.DatasetEntries', props);
    return resource.getResponseField('DatasetEntries') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDatasetEntries',
        service: 'LookoutVision',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutVision.ListDatasetEntries.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ProjectName: this.__input.projectName,
          DatasetType: this.__input.datasetType,
          Labeled: this.__input.labeled,
          AnomalyClass: this.__input.anomalyClass,
          BeforeCreationDate: this.__input.beforeCreationDate,
          AfterCreationDate: this.__input.afterCreationDate,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          SourceRefContains: this.__input.sourceRefContains,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDatasetEntries.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class LookoutVisionResponsesListModels {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutVisionListModelsRequest) {
  }

  public get models(): shapes.LookoutVisionModelMetadata[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listModels',
        service: 'LookoutVision',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutVision.ListModels.Models'),
        outputPath: 'Models',
        parameters: {
          ProjectName: this.__input.projectName,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListModels.Models', props);
    return resource.getResponseField('Models') as unknown as shapes.LookoutVisionModelMetadata[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listModels',
        service: 'LookoutVision',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutVision.ListModels.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ProjectName: this.__input.projectName,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListModels.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class LookoutVisionResponsesListProjects {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutVisionListProjectsRequest) {
  }

  public get projects(): shapes.LookoutVisionProjectMetadata[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listProjects',
        service: 'LookoutVision',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutVision.ListProjects.Projects'),
        outputPath: 'Projects',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListProjects.Projects', props);
    return resource.getResponseField('Projects') as unknown as shapes.LookoutVisionProjectMetadata[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listProjects',
        service: 'LookoutVision',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutVision.ListProjects.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListProjects.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class LookoutVisionResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutVisionListTagsForResourceRequest) {
  }

  public get tags(): shapes.LookoutVisionTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'LookoutVision',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutVision.ListTagsForResource.Tags'),
        outputPath: 'Tags',
        parameters: {
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.LookoutVisionTag[];
  }

}

export class LookoutVisionResponsesStartModel {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutVisionStartModelRequest) {
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startModel',
        service: 'LookoutVision',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutVision.StartModel.Status'),
        outputPath: 'Status',
        parameters: {
          ProjectName: this.__input.projectName,
          ModelVersion: this.__input.modelVersion,
          MinInferenceUnits: this.__input.minInferenceUnits,
          ClientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartModel.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class LookoutVisionResponsesStopModel {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutVisionStopModelRequest) {
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopModel',
        service: 'LookoutVision',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutVision.StopModel.Status'),
        outputPath: 'Status',
        parameters: {
          ProjectName: this.__input.projectName,
          ModelVersion: this.__input.modelVersion,
          ClientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopModel.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class LookoutVisionResponsesUpdateDatasetEntries {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutVisionUpdateDatasetEntriesRequest) {
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDatasetEntries',
        service: 'LookoutVision',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutVision.UpdateDatasetEntries.Status'),
        outputPath: 'Status',
        parameters: {
          ProjectName: this.__input.projectName,
          DatasetType: this.__input.datasetType,
          Changes: {
          },
          ClientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDatasetEntries.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

