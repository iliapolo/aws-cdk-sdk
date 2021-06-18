import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class TextractClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public analyzeDocument(input: shapes.TextractAnalyzeDocumentRequest): TextractAnalyzeDocument {
    return new TextractAnalyzeDocument(this, 'AnalyzeDocument', this.__resources, input);
  }

  public detectDocumentText(input: shapes.TextractDetectDocumentTextRequest): TextractDetectDocumentText {
    return new TextractDetectDocumentText(this, 'DetectDocumentText', this.__resources, input);
  }

  public fetchDocumentAnalysis(input: shapes.TextractGetDocumentAnalysisRequest): TextractFetchDocumentAnalysis {
    return new TextractFetchDocumentAnalysis(this, 'FetchDocumentAnalysis', this.__resources, input);
  }

  public fetchDocumentTextDetection(input: shapes.TextractGetDocumentTextDetectionRequest): TextractFetchDocumentTextDetection {
    return new TextractFetchDocumentTextDetection(this, 'FetchDocumentTextDetection', this.__resources, input);
  }

  public startDocumentAnalysis(input: shapes.TextractStartDocumentAnalysisRequest): TextractStartDocumentAnalysis {
    return new TextractStartDocumentAnalysis(this, 'StartDocumentAnalysis', this.__resources, input);
  }

  public startDocumentTextDetection(input: shapes.TextractStartDocumentTextDetectionRequest): TextractStartDocumentTextDetection {
    return new TextractStartDocumentTextDetection(this, 'StartDocumentTextDetection', this.__resources, input);
  }

}

export class TextractAnalyzeDocument extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.TextractAnalyzeDocumentRequest) {
    super(scope, id);
  }

  public get documentMetadata(): TextractAnalyzeDocumentDocumentMetadata {
    return new TextractAnalyzeDocumentDocumentMetadata(this, 'DocumentMetadata', this.__resources, this.input);
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
              Bucket: this.input.document.s3Object?.bucket,
              Name: this.input.document.s3Object?.name,
              Version: this.input.document.s3Object?.version,
            },
          },
          FeatureTypes: this.input.featureTypes,
          HumanLoopConfig: {
            HumanLoopName: this.input.humanLoopConfig?.humanLoopName,
            FlowDefinitionArn: this.input.humanLoopConfig?.flowDefinitionArn,
            DataAttributes: {
              ContentClassifiers: this.input.humanLoopConfig?.dataAttributes?.contentClassifiers,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AnalyzeDocument.Blocks', props);
    return resource.getResponseField('Blocks') as unknown as shapes.TextractBlock[];
  }

  public get humanLoopActivationOutput(): TextractAnalyzeDocumentHumanLoopActivationOutput {
    return new TextractAnalyzeDocumentHumanLoopActivationOutput(this, 'HumanLoopActivationOutput', this.__resources, this.input);
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
              Bucket: this.input.document.s3Object?.bucket,
              Name: this.input.document.s3Object?.name,
              Version: this.input.document.s3Object?.version,
            },
          },
          FeatureTypes: this.input.featureTypes,
          HumanLoopConfig: {
            HumanLoopName: this.input.humanLoopConfig?.humanLoopName,
            FlowDefinitionArn: this.input.humanLoopConfig?.flowDefinitionArn,
            DataAttributes: {
              ContentClassifiers: this.input.humanLoopConfig?.dataAttributes?.contentClassifiers,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AnalyzeDocument.AnalyzeDocumentModelVersion', props);
    return resource.getResponseField('AnalyzeDocumentModelVersion') as unknown as string;
  }

}

export class TextractAnalyzeDocumentDocumentMetadata extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.TextractAnalyzeDocumentRequest) {
    super(scope, id);
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
              Bucket: this.input.document.s3Object?.bucket,
              Name: this.input.document.s3Object?.name,
              Version: this.input.document.s3Object?.version,
            },
          },
          FeatureTypes: this.input.featureTypes,
          HumanLoopConfig: {
            HumanLoopName: this.input.humanLoopConfig?.humanLoopName,
            FlowDefinitionArn: this.input.humanLoopConfig?.flowDefinitionArn,
            DataAttributes: {
              ContentClassifiers: this.input.humanLoopConfig?.dataAttributes?.contentClassifiers,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AnalyzeDocument.DocumentMetadata.Pages', props);
    return resource.getResponseField('DocumentMetadata.Pages') as unknown as number;
  }

}

export class TextractAnalyzeDocumentHumanLoopActivationOutput extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.TextractAnalyzeDocumentRequest) {
    super(scope, id);
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
              Bucket: this.input.document.s3Object?.bucket,
              Name: this.input.document.s3Object?.name,
              Version: this.input.document.s3Object?.version,
            },
          },
          FeatureTypes: this.input.featureTypes,
          HumanLoopConfig: {
            HumanLoopName: this.input.humanLoopConfig?.humanLoopName,
            FlowDefinitionArn: this.input.humanLoopConfig?.flowDefinitionArn,
            DataAttributes: {
              ContentClassifiers: this.input.humanLoopConfig?.dataAttributes?.contentClassifiers,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AnalyzeDocument.HumanLoopActivationOutput.HumanLoopArn', props);
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
              Bucket: this.input.document.s3Object?.bucket,
              Name: this.input.document.s3Object?.name,
              Version: this.input.document.s3Object?.version,
            },
          },
          FeatureTypes: this.input.featureTypes,
          HumanLoopConfig: {
            HumanLoopName: this.input.humanLoopConfig?.humanLoopName,
            FlowDefinitionArn: this.input.humanLoopConfig?.flowDefinitionArn,
            DataAttributes: {
              ContentClassifiers: this.input.humanLoopConfig?.dataAttributes?.contentClassifiers,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AnalyzeDocument.HumanLoopActivationOutput.HumanLoopActivationReasons', props);
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
              Bucket: this.input.document.s3Object?.bucket,
              Name: this.input.document.s3Object?.name,
              Version: this.input.document.s3Object?.version,
            },
          },
          FeatureTypes: this.input.featureTypes,
          HumanLoopConfig: {
            HumanLoopName: this.input.humanLoopConfig?.humanLoopName,
            FlowDefinitionArn: this.input.humanLoopConfig?.flowDefinitionArn,
            DataAttributes: {
              ContentClassifiers: this.input.humanLoopConfig?.dataAttributes?.contentClassifiers,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AnalyzeDocument.HumanLoopActivationOutput.HumanLoopActivationConditionsEvaluationResults', props);
    return resource.getResponseField('HumanLoopActivationOutput.HumanLoopActivationConditionsEvaluationResults') as unknown as string;
  }

}

export class TextractDetectDocumentText extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.TextractDetectDocumentTextRequest) {
    super(scope, id);
  }

  public get documentMetadata(): TextractDetectDocumentTextDocumentMetadata {
    return new TextractDetectDocumentTextDocumentMetadata(this, 'DocumentMetadata', this.__resources, this.input);
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
              Bucket: this.input.document.s3Object?.bucket,
              Name: this.input.document.s3Object?.name,
              Version: this.input.document.s3Object?.version,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DetectDocumentText.Blocks', props);
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
              Bucket: this.input.document.s3Object?.bucket,
              Name: this.input.document.s3Object?.name,
              Version: this.input.document.s3Object?.version,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DetectDocumentText.DetectDocumentTextModelVersion', props);
    return resource.getResponseField('DetectDocumentTextModelVersion') as unknown as string;
  }

}

export class TextractDetectDocumentTextDocumentMetadata extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.TextractDetectDocumentTextRequest) {
    super(scope, id);
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
              Bucket: this.input.document.s3Object?.bucket,
              Name: this.input.document.s3Object?.name,
              Version: this.input.document.s3Object?.version,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DetectDocumentText.DocumentMetadata.Pages', props);
    return resource.getResponseField('DocumentMetadata.Pages') as unknown as number;
  }

}

export class TextractFetchDocumentAnalysis extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.TextractGetDocumentAnalysisRequest) {
    super(scope, id);
  }

  public get documentMetadata(): TextractFetchDocumentAnalysisDocumentMetadata {
    return new TextractFetchDocumentAnalysisDocumentMetadata(this, 'DocumentMetadata', this.__resources, this.input);
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
          JobId: this.input.jobId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDocumentAnalysis.JobStatus', props);
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
          JobId: this.input.jobId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDocumentAnalysis.NextToken', props);
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
          JobId: this.input.jobId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDocumentAnalysis.Blocks', props);
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
          JobId: this.input.jobId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDocumentAnalysis.Warnings', props);
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
          JobId: this.input.jobId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDocumentAnalysis.StatusMessage', props);
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
          JobId: this.input.jobId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDocumentAnalysis.AnalyzeDocumentModelVersion', props);
    return resource.getResponseField('AnalyzeDocumentModelVersion') as unknown as string;
  }

}

export class TextractFetchDocumentAnalysisDocumentMetadata extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.TextractGetDocumentAnalysisRequest) {
    super(scope, id);
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
          JobId: this.input.jobId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDocumentAnalysis.DocumentMetadata.Pages', props);
    return resource.getResponseField('DocumentMetadata.Pages') as unknown as number;
  }

}

export class TextractFetchDocumentTextDetection extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.TextractGetDocumentTextDetectionRequest) {
    super(scope, id);
  }

  public get documentMetadata(): TextractFetchDocumentTextDetectionDocumentMetadata {
    return new TextractFetchDocumentTextDetectionDocumentMetadata(this, 'DocumentMetadata', this.__resources, this.input);
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
          JobId: this.input.jobId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDocumentTextDetection.JobStatus', props);
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
          JobId: this.input.jobId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDocumentTextDetection.NextToken', props);
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
          JobId: this.input.jobId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDocumentTextDetection.Blocks', props);
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
          JobId: this.input.jobId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDocumentTextDetection.Warnings', props);
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
          JobId: this.input.jobId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDocumentTextDetection.StatusMessage', props);
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
          JobId: this.input.jobId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDocumentTextDetection.DetectDocumentTextModelVersion', props);
    return resource.getResponseField('DetectDocumentTextModelVersion') as unknown as string;
  }

}

export class TextractFetchDocumentTextDetectionDocumentMetadata extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.TextractGetDocumentTextDetectionRequest) {
    super(scope, id);
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
          JobId: this.input.jobId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDocumentTextDetection.DocumentMetadata.Pages', props);
    return resource.getResponseField('DocumentMetadata.Pages') as unknown as number;
  }

}

export class TextractStartDocumentAnalysis extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.TextractStartDocumentAnalysisRequest) {
    super(scope, id);
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
              Bucket: this.input.documentLocation.s3Object?.bucket,
              Name: this.input.documentLocation.s3Object?.name,
              Version: this.input.documentLocation.s3Object?.version,
            },
          },
          FeatureTypes: this.input.featureTypes,
          ClientRequestToken: this.input.clientRequestToken,
          JobTag: this.input.jobTag,
          NotificationChannel: {
            SNSTopicArn: this.input.notificationChannel?.snsTopicArn,
            RoleArn: this.input.notificationChannel?.roleArn,
          },
          OutputConfig: {
            S3Bucket: this.input.outputConfig?.s3Bucket,
            S3Prefix: this.input.outputConfig?.s3Prefix,
          },
          KMSKeyId: this.input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartDocumentAnalysis.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

}

export class TextractStartDocumentTextDetection extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.TextractStartDocumentTextDetectionRequest) {
    super(scope, id);
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
              Bucket: this.input.documentLocation.s3Object?.bucket,
              Name: this.input.documentLocation.s3Object?.name,
              Version: this.input.documentLocation.s3Object?.version,
            },
          },
          ClientRequestToken: this.input.clientRequestToken,
          JobTag: this.input.jobTag,
          NotificationChannel: {
            SNSTopicArn: this.input.notificationChannel?.snsTopicArn,
            RoleArn: this.input.notificationChannel?.roleArn,
          },
          OutputConfig: {
            S3Bucket: this.input.outputConfig?.s3Bucket,
            S3Prefix: this.input.outputConfig?.s3Prefix,
          },
          KMSKeyId: this.input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartDocumentTextDetection.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

}

