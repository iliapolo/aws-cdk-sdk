import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class ImportExportClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public cancelJob(input: shapes.ImportExportCancelJobInput): ImportExportCancelJob {
    return new ImportExportCancelJob(this, 'CancelJob', this.__resources, input);
  }

  public createJob(input: shapes.ImportExportCreateJobInput): ImportExportCreateJob {
    return new ImportExportCreateJob(this, 'CreateJob', this.__resources, input);
  }

  public fetchShippingLabel(input: shapes.ImportExportGetShippingLabelInput): ImportExportFetchShippingLabel {
    return new ImportExportFetchShippingLabel(this, 'FetchShippingLabel', this.__resources, input);
  }

  public fetchStatus(input: shapes.ImportExportGetStatusInput): ImportExportFetchStatus {
    return new ImportExportFetchStatus(this, 'FetchStatus', this.__resources, input);
  }

  public listJobs(input: shapes.ImportExportListJobsInput): ImportExportListJobs {
    return new ImportExportListJobs(this, 'ListJobs', this.__resources, input);
  }

  public updateJob(input: shapes.ImportExportUpdateJobInput): ImportExportUpdateJob {
    return new ImportExportUpdateJob(this, 'UpdateJob', this.__resources, input);
  }

}

export class ImportExportCancelJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ImportExportCancelJobInput) {
    super(scope, id);
  }

  public get success(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelJob',
        service: 'ImportExport',
        physicalResourceId: cr.PhysicalResourceId.of('ImportExport.CancelJob.Success'),
        outputPath: 'Success',
        parameters: {
          JobId: this.input.jobId,
          APIVersion: this.input.apiVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CancelJob.Success', props);
    return resource.getResponseField('Success') as unknown as boolean;
  }

}

export class ImportExportCreateJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ImportExportCreateJobInput) {
    super(scope, id);
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'ImportExport',
        physicalResourceId: cr.PhysicalResourceId.of('ImportExport.CreateJob.JobId'),
        outputPath: 'JobId',
        parameters: {
          JobType: this.input.jobType,
          Manifest: this.input.manifest,
          ManifestAddendum: this.input.manifestAddendum,
          ValidateOnly: this.input.validateOnly,
          APIVersion: this.input.apiVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

  public get jobType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'ImportExport',
        physicalResourceId: cr.PhysicalResourceId.of('ImportExport.CreateJob.JobType'),
        outputPath: 'JobType',
        parameters: {
          JobType: this.input.jobType,
          Manifest: this.input.manifest,
          ManifestAddendum: this.input.manifestAddendum,
          ValidateOnly: this.input.validateOnly,
          APIVersion: this.input.apiVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.JobType', props);
    return resource.getResponseField('JobType') as unknown as string;
  }

  public get signature(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'ImportExport',
        physicalResourceId: cr.PhysicalResourceId.of('ImportExport.CreateJob.Signature'),
        outputPath: 'Signature',
        parameters: {
          JobType: this.input.jobType,
          Manifest: this.input.manifest,
          ManifestAddendum: this.input.manifestAddendum,
          ValidateOnly: this.input.validateOnly,
          APIVersion: this.input.apiVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Signature', props);
    return resource.getResponseField('Signature') as unknown as string;
  }

  public get signatureFileContents(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'ImportExport',
        physicalResourceId: cr.PhysicalResourceId.of('ImportExport.CreateJob.SignatureFileContents'),
        outputPath: 'SignatureFileContents',
        parameters: {
          JobType: this.input.jobType,
          Manifest: this.input.manifest,
          ManifestAddendum: this.input.manifestAddendum,
          ValidateOnly: this.input.validateOnly,
          APIVersion: this.input.apiVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.SignatureFileContents', props);
    return resource.getResponseField('SignatureFileContents') as unknown as string;
  }

  public get warningMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'ImportExport',
        physicalResourceId: cr.PhysicalResourceId.of('ImportExport.CreateJob.WarningMessage'),
        outputPath: 'WarningMessage',
        parameters: {
          JobType: this.input.jobType,
          Manifest: this.input.manifest,
          ManifestAddendum: this.input.manifestAddendum,
          ValidateOnly: this.input.validateOnly,
          APIVersion: this.input.apiVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.WarningMessage', props);
    return resource.getResponseField('WarningMessage') as unknown as string;
  }

  public get artifactList(): shapes.ImportExportArtifact[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'ImportExport',
        physicalResourceId: cr.PhysicalResourceId.of('ImportExport.CreateJob.ArtifactList'),
        outputPath: 'ArtifactList',
        parameters: {
          JobType: this.input.jobType,
          Manifest: this.input.manifest,
          ManifestAddendum: this.input.manifestAddendum,
          ValidateOnly: this.input.validateOnly,
          APIVersion: this.input.apiVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.ArtifactList', props);
    return resource.getResponseField('ArtifactList') as unknown as shapes.ImportExportArtifact[];
  }

}

export class ImportExportFetchShippingLabel extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ImportExportGetShippingLabelInput) {
    super(scope, id);
  }

  public get shippingLabelUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getShippingLabel',
        service: 'ImportExport',
        physicalResourceId: cr.PhysicalResourceId.of('ImportExport.GetShippingLabel.ShippingLabelURL'),
        outputPath: 'ShippingLabelURL',
        parameters: {
          jobIds: this.input.jobIds,
          name: this.input.name,
          company: this.input.company,
          phoneNumber: this.input.phoneNumber,
          country: this.input.country,
          stateOrProvince: this.input.stateOrProvince,
          city: this.input.city,
          postalCode: this.input.postalCode,
          street1: this.input.street1,
          street2: this.input.street2,
          street3: this.input.street3,
          APIVersion: this.input.apiVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetShippingLabel.ShippingLabelURL', props);
    return resource.getResponseField('ShippingLabelURL') as unknown as string;
  }

  public get warning(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getShippingLabel',
        service: 'ImportExport',
        physicalResourceId: cr.PhysicalResourceId.of('ImportExport.GetShippingLabel.Warning'),
        outputPath: 'Warning',
        parameters: {
          jobIds: this.input.jobIds,
          name: this.input.name,
          company: this.input.company,
          phoneNumber: this.input.phoneNumber,
          country: this.input.country,
          stateOrProvince: this.input.stateOrProvince,
          city: this.input.city,
          postalCode: this.input.postalCode,
          street1: this.input.street1,
          street2: this.input.street2,
          street3: this.input.street3,
          APIVersion: this.input.apiVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetShippingLabel.Warning', props);
    return resource.getResponseField('Warning') as unknown as string;
  }

}

export class ImportExportFetchStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ImportExportGetStatusInput) {
    super(scope, id);
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStatus',
        service: 'ImportExport',
        physicalResourceId: cr.PhysicalResourceId.of('ImportExport.GetStatus.JobId'),
        outputPath: 'JobId',
        parameters: {
          JobId: this.input.jobId,
          APIVersion: this.input.apiVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStatus.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

  public get jobType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStatus',
        service: 'ImportExport',
        physicalResourceId: cr.PhysicalResourceId.of('ImportExport.GetStatus.JobType'),
        outputPath: 'JobType',
        parameters: {
          JobId: this.input.jobId,
          APIVersion: this.input.apiVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStatus.JobType', props);
    return resource.getResponseField('JobType') as unknown as string;
  }

  public get locationCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStatus',
        service: 'ImportExport',
        physicalResourceId: cr.PhysicalResourceId.of('ImportExport.GetStatus.LocationCode'),
        outputPath: 'LocationCode',
        parameters: {
          JobId: this.input.jobId,
          APIVersion: this.input.apiVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStatus.LocationCode', props);
    return resource.getResponseField('LocationCode') as unknown as string;
  }

  public get locationMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStatus',
        service: 'ImportExport',
        physicalResourceId: cr.PhysicalResourceId.of('ImportExport.GetStatus.LocationMessage'),
        outputPath: 'LocationMessage',
        parameters: {
          JobId: this.input.jobId,
          APIVersion: this.input.apiVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStatus.LocationMessage', props);
    return resource.getResponseField('LocationMessage') as unknown as string;
  }

  public get progressCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStatus',
        service: 'ImportExport',
        physicalResourceId: cr.PhysicalResourceId.of('ImportExport.GetStatus.ProgressCode'),
        outputPath: 'ProgressCode',
        parameters: {
          JobId: this.input.jobId,
          APIVersion: this.input.apiVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStatus.ProgressCode', props);
    return resource.getResponseField('ProgressCode') as unknown as string;
  }

  public get progressMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStatus',
        service: 'ImportExport',
        physicalResourceId: cr.PhysicalResourceId.of('ImportExport.GetStatus.ProgressMessage'),
        outputPath: 'ProgressMessage',
        parameters: {
          JobId: this.input.jobId,
          APIVersion: this.input.apiVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStatus.ProgressMessage', props);
    return resource.getResponseField('ProgressMessage') as unknown as string;
  }

  public get carrier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStatus',
        service: 'ImportExport',
        physicalResourceId: cr.PhysicalResourceId.of('ImportExport.GetStatus.Carrier'),
        outputPath: 'Carrier',
        parameters: {
          JobId: this.input.jobId,
          APIVersion: this.input.apiVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStatus.Carrier', props);
    return resource.getResponseField('Carrier') as unknown as string;
  }

  public get trackingNumber(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStatus',
        service: 'ImportExport',
        physicalResourceId: cr.PhysicalResourceId.of('ImportExport.GetStatus.TrackingNumber'),
        outputPath: 'TrackingNumber',
        parameters: {
          JobId: this.input.jobId,
          APIVersion: this.input.apiVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStatus.TrackingNumber', props);
    return resource.getResponseField('TrackingNumber') as unknown as string;
  }

  public get logBucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStatus',
        service: 'ImportExport',
        physicalResourceId: cr.PhysicalResourceId.of('ImportExport.GetStatus.LogBucket'),
        outputPath: 'LogBucket',
        parameters: {
          JobId: this.input.jobId,
          APIVersion: this.input.apiVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStatus.LogBucket', props);
    return resource.getResponseField('LogBucket') as unknown as string;
  }

  public get logKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStatus',
        service: 'ImportExport',
        physicalResourceId: cr.PhysicalResourceId.of('ImportExport.GetStatus.LogKey'),
        outputPath: 'LogKey',
        parameters: {
          JobId: this.input.jobId,
          APIVersion: this.input.apiVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStatus.LogKey', props);
    return resource.getResponseField('LogKey') as unknown as string;
  }

  public get errorCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStatus',
        service: 'ImportExport',
        physicalResourceId: cr.PhysicalResourceId.of('ImportExport.GetStatus.ErrorCount'),
        outputPath: 'ErrorCount',
        parameters: {
          JobId: this.input.jobId,
          APIVersion: this.input.apiVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStatus.ErrorCount', props);
    return resource.getResponseField('ErrorCount') as unknown as number;
  }

  public get signature(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStatus',
        service: 'ImportExport',
        physicalResourceId: cr.PhysicalResourceId.of('ImportExport.GetStatus.Signature'),
        outputPath: 'Signature',
        parameters: {
          JobId: this.input.jobId,
          APIVersion: this.input.apiVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStatus.Signature', props);
    return resource.getResponseField('Signature') as unknown as string;
  }

  public get signatureFileContents(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStatus',
        service: 'ImportExport',
        physicalResourceId: cr.PhysicalResourceId.of('ImportExport.GetStatus.SignatureFileContents'),
        outputPath: 'SignatureFileContents',
        parameters: {
          JobId: this.input.jobId,
          APIVersion: this.input.apiVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStatus.SignatureFileContents', props);
    return resource.getResponseField('SignatureFileContents') as unknown as string;
  }

  public get currentManifest(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStatus',
        service: 'ImportExport',
        physicalResourceId: cr.PhysicalResourceId.of('ImportExport.GetStatus.CurrentManifest'),
        outputPath: 'CurrentManifest',
        parameters: {
          JobId: this.input.jobId,
          APIVersion: this.input.apiVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStatus.CurrentManifest', props);
    return resource.getResponseField('CurrentManifest') as unknown as string;
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStatus',
        service: 'ImportExport',
        physicalResourceId: cr.PhysicalResourceId.of('ImportExport.GetStatus.CreationDate'),
        outputPath: 'CreationDate',
        parameters: {
          JobId: this.input.jobId,
          APIVersion: this.input.apiVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStatus.CreationDate', props);
    return resource.getResponseField('CreationDate') as unknown as string;
  }

  public get artifactList(): shapes.ImportExportArtifact[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStatus',
        service: 'ImportExport',
        physicalResourceId: cr.PhysicalResourceId.of('ImportExport.GetStatus.ArtifactList'),
        outputPath: 'ArtifactList',
        parameters: {
          JobId: this.input.jobId,
          APIVersion: this.input.apiVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStatus.ArtifactList', props);
    return resource.getResponseField('ArtifactList') as unknown as shapes.ImportExportArtifact[];
  }

}

export class ImportExportListJobs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ImportExportListJobsInput) {
    super(scope, id);
  }

  public get jobs(): shapes.ImportExportJob[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listJobs',
        service: 'ImportExport',
        physicalResourceId: cr.PhysicalResourceId.of('ImportExport.ListJobs.Jobs'),
        outputPath: 'Jobs',
        parameters: {
          MaxJobs: this.input.maxJobs,
          Marker: this.input.marker,
          APIVersion: this.input.apiVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListJobs.Jobs', props);
    return resource.getResponseField('Jobs') as unknown as shapes.ImportExportJob[];
  }

  public get isTruncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listJobs',
        service: 'ImportExport',
        physicalResourceId: cr.PhysicalResourceId.of('ImportExport.ListJobs.IsTruncated'),
        outputPath: 'IsTruncated',
        parameters: {
          MaxJobs: this.input.maxJobs,
          Marker: this.input.marker,
          APIVersion: this.input.apiVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListJobs.IsTruncated', props);
    return resource.getResponseField('IsTruncated') as unknown as boolean;
  }

}

export class ImportExportUpdateJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ImportExportUpdateJobInput) {
    super(scope, id);
  }

  public get success(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateJob',
        service: 'ImportExport',
        physicalResourceId: cr.PhysicalResourceId.of('ImportExport.UpdateJob.Success'),
        outputPath: 'Success',
        parameters: {
          JobId: this.input.jobId,
          Manifest: this.input.manifest,
          JobType: this.input.jobType,
          ValidateOnly: this.input.validateOnly,
          APIVersion: this.input.apiVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateJob.Success', props);
    return resource.getResponseField('Success') as unknown as boolean;
  }

  public get warningMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateJob',
        service: 'ImportExport',
        physicalResourceId: cr.PhysicalResourceId.of('ImportExport.UpdateJob.WarningMessage'),
        outputPath: 'WarningMessage',
        parameters: {
          JobId: this.input.jobId,
          Manifest: this.input.manifest,
          JobType: this.input.jobType,
          ValidateOnly: this.input.validateOnly,
          APIVersion: this.input.apiVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateJob.WarningMessage', props);
    return resource.getResponseField('WarningMessage') as unknown as string;
  }

  public get artifactList(): shapes.ImportExportArtifact[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateJob',
        service: 'ImportExport',
        physicalResourceId: cr.PhysicalResourceId.of('ImportExport.UpdateJob.ArtifactList'),
        outputPath: 'ArtifactList',
        parameters: {
          JobId: this.input.jobId,
          Manifest: this.input.manifest,
          JobType: this.input.jobType,
          ValidateOnly: this.input.validateOnly,
          APIVersion: this.input.apiVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateJob.ArtifactList', props);
    return resource.getResponseField('ArtifactList') as unknown as shapes.ImportExportArtifact[];
  }

}

