import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class TextractClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public analyzeDocument(input: shapes.TextractAnalyzeDocumentRequest): TextractResponsesAnalyzeDocument {
    return new TextractResponsesAnalyzeDocument(this, this.__resources, input);
  }

  public detectDocumentText(input: shapes.TextractDetectDocumentTextRequest): TextractResponsesDetectDocumentText {
    return new TextractResponsesDetectDocumentText(this, this.__resources, input);
  }

  public fetchDocumentAnalysis(input: shapes.TextractGetDocumentAnalysisRequest): TextractResponsesFetchDocumentAnalysis {
    return new TextractResponsesFetchDocumentAnalysis(this, this.__resources, input);
  }

  public fetchDocumentTextDetection(input: shapes.TextractGetDocumentTextDetectionRequest): TextractResponsesFetchDocumentTextDetection {
    return new TextractResponsesFetchDocumentTextDetection(this, this.__resources, input);
  }

  public startDocumentAnalysis(input: shapes.TextractStartDocumentAnalysisRequest): TextractResponsesStartDocumentAnalysis {
    return new TextractResponsesStartDocumentAnalysis(this, this.__resources, input);
  }

  public startDocumentTextDetection(input: shapes.TextractStartDocumentTextDetectionRequest): TextractResponsesStartDocumentTextDetection {
    return new TextractResponsesStartDocumentTextDetection(this, this.__resources, input);
  }

}

export class TextractResponsesAnalyzeDocument {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TextractAnalyzeDocumentRequest) {
  }

  public get documentMetadata(): TextractResponsesAnalyzeDocumentDocumentMetadata {
    return new TextractResponsesAnalyzeDocumentDocumentMetadata(this.__scope, this.__resources, this.__input);
  }

  public get blocks(): shapes.TextractBlock[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'analyzeDocument',
        service: 'Textract',
        physicalResourceId: cr.PhysicalResourceId.of('Textract.AnalyzeDocument.Blocks'),
        outputPath: 'Blocks',
        parameters: {
          Document: {
            Bytes: {
            },
            S3Object: {
              Bucket: this.__input.document.s3Object?.bucket,
              Name: this.__input.document.s3Object?.name,
              Version: this.__input.document.s3Object?.version,
            },
          },
          FeatureTypes: this.__input.featureTypes,
          HumanLoopConfig: {
            HumanLoopName: this.__input.humanLoopConfig?.humanLoopName,
            FlowDefinitionArn: this.__input.humanLoopConfig?.flowDefinitionArn,
            DataAttributes: {
              ContentClassifiers: this.__input.humanLoopConfig?.dataAttributes?.contentClassifiers,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AnalyzeDocument.Blocks', props);
    return resource.getResponseField('Blocks') as unknown as shapes.TextractBlock[];
  }

  public get humanLoopActivationOutput(): TextractResponsesAnalyzeDocumentHumanLoopActivationOutput {
    return new TextractResponsesAnalyzeDocumentHumanLoopActivationOutput(this.__scope, this.__resources, this.__input);
  }

  public get analyzeDocumentModelVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'analyzeDocument',
        service: 'Textract',
        physicalResourceId: cr.PhysicalResourceId.of('Textract.AnalyzeDocument.AnalyzeDocumentModelVersion'),
        outputPath: 'AnalyzeDocumentModelVersion',
        parameters: {
          Document: {
            Bytes: {
            },
            S3Object: {
              Bucket: this.__input.document.s3Object?.bucket,
              Name: this.__input.document.s3Object?.name,
              Version: this.__input.document.s3Object?.version,
            },
          },
          FeatureTypes: this.__input.featureTypes,
          HumanLoopConfig: {
            HumanLoopName: this.__input.humanLoopConfig?.humanLoopName,
            FlowDefinitionArn: this.__input.humanLoopConfig?.flowDefinitionArn,
            DataAttributes: {
              ContentClassifiers: this.__input.humanLoopConfig?.dataAttributes?.contentClassifiers,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AnalyzeDocument.AnalyzeDocumentModelVersion', props);
    return resource.getResponseField('AnalyzeDocumentModelVersion') as unknown as string;
  }

}

export class TextractResponsesAnalyzeDocumentDocumentMetadata {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TextractAnalyzeDocumentRequest) {
  }

  public get pages(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'analyzeDocument',
        service: 'Textract',
        physicalResourceId: cr.PhysicalResourceId.of('Textract.AnalyzeDocument.DocumentMetadata.Pages'),
        outputPath: 'DocumentMetadata.Pages',
        parameters: {
          Document: {
            Bytes: {
            },
            S3Object: {
              Bucket: this.__input.document.s3Object?.bucket,
              Name: this.__input.document.s3Object?.name,
              Version: this.__input.document.s3Object?.version,
            },
          },
          FeatureTypes: this.__input.featureTypes,
          HumanLoopConfig: {
            HumanLoopName: this.__input.humanLoopConfig?.humanLoopName,
            FlowDefinitionArn: this.__input.humanLoopConfig?.flowDefinitionArn,
            DataAttributes: {
              ContentClassifiers: this.__input.humanLoopConfig?.dataAttributes?.contentClassifiers,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AnalyzeDocument.DocumentMetadata.Pages', props);
    return resource.getResponseField('DocumentMetadata.Pages') as unknown as number;
  }

}

export class TextractResponsesAnalyzeDocumentHumanLoopActivationOutput {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TextractAnalyzeDocumentRequest) {
  }

  public get humanLoopArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'analyzeDocument',
        service: 'Textract',
        physicalResourceId: cr.PhysicalResourceId.of('Textract.AnalyzeDocument.HumanLoopActivationOutput.HumanLoopArn'),
        outputPath: 'HumanLoopActivationOutput.HumanLoopArn',
        parameters: {
          Document: {
            Bytes: {
            },
            S3Object: {
              Bucket: this.__input.document.s3Object?.bucket,
              Name: this.__input.document.s3Object?.name,
              Version: this.__input.document.s3Object?.version,
            },
          },
          FeatureTypes: this.__input.featureTypes,
          HumanLoopConfig: {
            HumanLoopName: this.__input.humanLoopConfig?.humanLoopName,
            FlowDefinitionArn: this.__input.humanLoopConfig?.flowDefinitionArn,
            DataAttributes: {
              ContentClassifiers: this.__input.humanLoopConfig?.dataAttributes?.contentClassifiers,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AnalyzeDocument.HumanLoopActivationOutput.HumanLoopArn', props);
    return resource.getResponseField('HumanLoopActivationOutput.HumanLoopArn') as unknown as string;
  }

  public get humanLoopActivationReasons(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'analyzeDocument',
        service: 'Textract',
        physicalResourceId: cr.PhysicalResourceId.of('Textract.AnalyzeDocument.HumanLoopActivationOutput.HumanLoopActivationReasons'),
        outputPath: 'HumanLoopActivationOutput.HumanLoopActivationReasons',
        parameters: {
          Document: {
            Bytes: {
            },
            S3Object: {
              Bucket: this.__input.document.s3Object?.bucket,
              Name: this.__input.document.s3Object?.name,
              Version: this.__input.document.s3Object?.version,
            },
          },
          FeatureTypes: this.__input.featureTypes,
          HumanLoopConfig: {
            HumanLoopName: this.__input.humanLoopConfig?.humanLoopName,
            FlowDefinitionArn: this.__input.humanLoopConfig?.flowDefinitionArn,
            DataAttributes: {
              ContentClassifiers: this.__input.humanLoopConfig?.dataAttributes?.contentClassifiers,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AnalyzeDocument.HumanLoopActivationOutput.HumanLoopActivationReasons', props);
    return resource.getResponseField('HumanLoopActivationOutput.HumanLoopActivationReasons') as unknown as string[];
  }

  public get humanLoopActivationConditionsEvaluationResults(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'analyzeDocument',
        service: 'Textract',
        physicalResourceId: cr.PhysicalResourceId.of('Textract.AnalyzeDocument.HumanLoopActivationOutput.HumanLoopActivationConditionsEvaluationResults'),
        outputPath: 'HumanLoopActivationOutput.HumanLoopActivationConditionsEvaluationResults',
        parameters: {
          Document: {
            Bytes: {
            },
            S3Object: {
              Bucket: this.__input.document.s3Object?.bucket,
              Name: this.__input.document.s3Object?.name,
              Version: this.__input.document.s3Object?.version,
            },
          },
          FeatureTypes: this.__input.featureTypes,
          HumanLoopConfig: {
            HumanLoopName: this.__input.humanLoopConfig?.humanLoopName,
            FlowDefinitionArn: this.__input.humanLoopConfig?.flowDefinitionArn,
            DataAttributes: {
              ContentClassifiers: this.__input.humanLoopConfig?.dataAttributes?.contentClassifiers,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AnalyzeDocument.HumanLoopActivationOutput.HumanLoopActivationConditionsEvaluationResults', props);
    return resource.getResponseField('HumanLoopActivationOutput.HumanLoopActivationConditionsEvaluationResults') as unknown as string;
  }

}

export class TextractResponsesDetectDocumentText {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TextractDetectDocumentTextRequest) {
  }

  public get documentMetadata(): TextractResponsesDetectDocumentTextDocumentMetadata {
    return new TextractResponsesDetectDocumentTextDocumentMetadata(this.__scope, this.__resources, this.__input);
  }

  public get blocks(): shapes.TextractBlock[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detectDocumentText',
        service: 'Textract',
        physicalResourceId: cr.PhysicalResourceId.of('Textract.DetectDocumentText.Blocks'),
        outputPath: 'Blocks',
        parameters: {
          Document: {
            Bytes: {
            },
            S3Object: {
              Bucket: this.__input.document.s3Object?.bucket,
              Name: this.__input.document.s3Object?.name,
              Version: this.__input.document.s3Object?.version,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DetectDocumentText.Blocks', props);
    return resource.getResponseField('Blocks') as unknown as shapes.TextractBlock[];
  }

  public get detectDocumentTextModelVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detectDocumentText',
        service: 'Textract',
        physicalResourceId: cr.PhysicalResourceId.of('Textract.DetectDocumentText.DetectDocumentTextModelVersion'),
        outputPath: 'DetectDocumentTextModelVersion',
        parameters: {
          Document: {
            Bytes: {
            },
            S3Object: {
              Bucket: this.__input.document.s3Object?.bucket,
              Name: this.__input.document.s3Object?.name,
              Version: this.__input.document.s3Object?.version,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DetectDocumentText.DetectDocumentTextModelVersion', props);
    return resource.getResponseField('DetectDocumentTextModelVersion') as unknown as string;
  }

}

export class TextractResponsesDetectDocumentTextDocumentMetadata {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TextractDetectDocumentTextRequest) {
  }

  public get pages(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detectDocumentText',
        service: 'Textract',
        physicalResourceId: cr.PhysicalResourceId.of('Textract.DetectDocumentText.DocumentMetadata.Pages'),
        outputPath: 'DocumentMetadata.Pages',
        parameters: {
          Document: {
            Bytes: {
            },
            S3Object: {
              Bucket: this.__input.document.s3Object?.bucket,
              Name: this.__input.document.s3Object?.name,
              Version: this.__input.document.s3Object?.version,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DetectDocumentText.DocumentMetadata.Pages', props);
    return resource.getResponseField('DocumentMetadata.Pages') as unknown as number;
  }

}

export class TextractResponsesFetchDocumentAnalysis {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TextractGetDocumentAnalysisRequest) {
  }

  public get documentMetadata(): TextractResponsesFetchDocumentAnalysisDocumentMetadata {
    return new TextractResponsesFetchDocumentAnalysisDocumentMetadata(this.__scope, this.__resources, this.__input);
  }

  public get jobStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDocumentAnalysis',
        service: 'Textract',
        physicalResourceId: cr.PhysicalResourceId.of('Textract.GetDocumentAnalysis.JobStatus'),
        outputPath: 'JobStatus',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDocumentAnalysis.JobStatus', props);
    return resource.getResponseField('JobStatus') as unknown as string;
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDocumentAnalysis',
        service: 'Textract',
        physicalResourceId: cr.PhysicalResourceId.of('Textract.GetDocumentAnalysis.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDocumentAnalysis.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get blocks(): shapes.TextractBlock[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDocumentAnalysis',
        service: 'Textract',
        physicalResourceId: cr.PhysicalResourceId.of('Textract.GetDocumentAnalysis.Blocks'),
        outputPath: 'Blocks',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDocumentAnalysis.Blocks', props);
    return resource.getResponseField('Blocks') as unknown as shapes.TextractBlock[];
  }

  public get warnings(): shapes.TextractWarning[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDocumentAnalysis',
        service: 'Textract',
        physicalResourceId: cr.PhysicalResourceId.of('Textract.GetDocumentAnalysis.Warnings'),
        outputPath: 'Warnings',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDocumentAnalysis.Warnings', props);
    return resource.getResponseField('Warnings') as unknown as shapes.TextractWarning[];
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDocumentAnalysis',
        service: 'Textract',
        physicalResourceId: cr.PhysicalResourceId.of('Textract.GetDocumentAnalysis.StatusMessage'),
        outputPath: 'StatusMessage',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDocumentAnalysis.StatusMessage', props);
    return resource.getResponseField('StatusMessage') as unknown as string;
  }

  public get analyzeDocumentModelVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDocumentAnalysis',
        service: 'Textract',
        physicalResourceId: cr.PhysicalResourceId.of('Textract.GetDocumentAnalysis.AnalyzeDocumentModelVersion'),
        outputPath: 'AnalyzeDocumentModelVersion',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDocumentAnalysis.AnalyzeDocumentModelVersion', props);
    return resource.getResponseField('AnalyzeDocumentModelVersion') as unknown as string;
  }

}

export class TextractResponsesFetchDocumentAnalysisDocumentMetadata {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TextractGetDocumentAnalysisRequest) {
  }

  public get pages(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDocumentAnalysis',
        service: 'Textract',
        physicalResourceId: cr.PhysicalResourceId.of('Textract.GetDocumentAnalysis.DocumentMetadata.Pages'),
        outputPath: 'DocumentMetadata.Pages',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDocumentAnalysis.DocumentMetadata.Pages', props);
    return resource.getResponseField('DocumentMetadata.Pages') as unknown as number;
  }

}

export class TextractResponsesFetchDocumentTextDetection {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TextractGetDocumentTextDetectionRequest) {
  }

  public get documentMetadata(): TextractResponsesFetchDocumentTextDetectionDocumentMetadata {
    return new TextractResponsesFetchDocumentTextDetectionDocumentMetadata(this.__scope, this.__resources, this.__input);
  }

  public get jobStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDocumentTextDetection',
        service: 'Textract',
        physicalResourceId: cr.PhysicalResourceId.of('Textract.GetDocumentTextDetection.JobStatus'),
        outputPath: 'JobStatus',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDocumentTextDetection.JobStatus', props);
    return resource.getResponseField('JobStatus') as unknown as string;
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDocumentTextDetection',
        service: 'Textract',
        physicalResourceId: cr.PhysicalResourceId.of('Textract.GetDocumentTextDetection.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDocumentTextDetection.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get blocks(): shapes.TextractBlock[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDocumentTextDetection',
        service: 'Textract',
        physicalResourceId: cr.PhysicalResourceId.of('Textract.GetDocumentTextDetection.Blocks'),
        outputPath: 'Blocks',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDocumentTextDetection.Blocks', props);
    return resource.getResponseField('Blocks') as unknown as shapes.TextractBlock[];
  }

  public get warnings(): shapes.TextractWarning[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDocumentTextDetection',
        service: 'Textract',
        physicalResourceId: cr.PhysicalResourceId.of('Textract.GetDocumentTextDetection.Warnings'),
        outputPath: 'Warnings',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDocumentTextDetection.Warnings', props);
    return resource.getResponseField('Warnings') as unknown as shapes.TextractWarning[];
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDocumentTextDetection',
        service: 'Textract',
        physicalResourceId: cr.PhysicalResourceId.of('Textract.GetDocumentTextDetection.StatusMessage'),
        outputPath: 'StatusMessage',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDocumentTextDetection.StatusMessage', props);
    return resource.getResponseField('StatusMessage') as unknown as string;
  }

  public get detectDocumentTextModelVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDocumentTextDetection',
        service: 'Textract',
        physicalResourceId: cr.PhysicalResourceId.of('Textract.GetDocumentTextDetection.DetectDocumentTextModelVersion'),
        outputPath: 'DetectDocumentTextModelVersion',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDocumentTextDetection.DetectDocumentTextModelVersion', props);
    return resource.getResponseField('DetectDocumentTextModelVersion') as unknown as string;
  }

}

export class TextractResponsesFetchDocumentTextDetectionDocumentMetadata {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TextractGetDocumentTextDetectionRequest) {
  }

  public get pages(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDocumentTextDetection',
        service: 'Textract',
        physicalResourceId: cr.PhysicalResourceId.of('Textract.GetDocumentTextDetection.DocumentMetadata.Pages'),
        outputPath: 'DocumentMetadata.Pages',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDocumentTextDetection.DocumentMetadata.Pages', props);
    return resource.getResponseField('DocumentMetadata.Pages') as unknown as number;
  }

}

export class TextractResponsesStartDocumentAnalysis {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TextractStartDocumentAnalysisRequest) {
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startDocumentAnalysis',
        service: 'Textract',
        physicalResourceId: cr.PhysicalResourceId.of('Textract.StartDocumentAnalysis.JobId'),
        outputPath: 'JobId',
        parameters: {
          DocumentLocation: {
            S3Object: {
              Bucket: this.__input.documentLocation.s3Object?.bucket,
              Name: this.__input.documentLocation.s3Object?.name,
              Version: this.__input.documentLocation.s3Object?.version,
            },
          },
          FeatureTypes: this.__input.featureTypes,
          ClientRequestToken: this.__input.clientRequestToken,
          JobTag: this.__input.jobTag,
          NotificationChannel: {
            SNSTopicArn: this.__input.notificationChannel?.snsTopicArn,
            RoleArn: this.__input.notificationChannel?.roleArn,
          },
          OutputConfig: {
            S3Bucket: this.__input.outputConfig?.s3Bucket,
            S3Prefix: this.__input.outputConfig?.s3Prefix,
          },
          KMSKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartDocumentAnalysis.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

}

export class TextractResponsesStartDocumentTextDetection {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TextractStartDocumentTextDetectionRequest) {
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startDocumentTextDetection',
        service: 'Textract',
        physicalResourceId: cr.PhysicalResourceId.of('Textract.StartDocumentTextDetection.JobId'),
        outputPath: 'JobId',
        parameters: {
          DocumentLocation: {
            S3Object: {
              Bucket: this.__input.documentLocation.s3Object?.bucket,
              Name: this.__input.documentLocation.s3Object?.name,
              Version: this.__input.documentLocation.s3Object?.version,
            },
          },
          ClientRequestToken: this.__input.clientRequestToken,
          JobTag: this.__input.jobTag,
          NotificationChannel: {
            SNSTopicArn: this.__input.notificationChannel?.snsTopicArn,
            RoleArn: this.__input.notificationChannel?.roleArn,
          },
          OutputConfig: {
            S3Bucket: this.__input.outputConfig?.s3Bucket,
            S3Prefix: this.__input.outputConfig?.s3Prefix,
          },
          KMSKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartDocumentTextDetection.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

}

