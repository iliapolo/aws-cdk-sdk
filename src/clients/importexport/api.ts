import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class ImportExportClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public cancelJob(input: shapes.ImportExportCancelJobInput): ImportExportResponsesCancelJob {
    return new ImportExportResponsesCancelJob(this, this.__resources, input);
  }

  public createJob(input: shapes.ImportExportCreateJobInput): ImportExportResponsesCreateJob {
    return new ImportExportResponsesCreateJob(this, this.__resources, input);
  }

  public fetchShippingLabel(input: shapes.ImportExportGetShippingLabelInput): ImportExportResponsesFetchShippingLabel {
    return new ImportExportResponsesFetchShippingLabel(this, this.__resources, input);
  }

  public fetchStatus(input: shapes.ImportExportGetStatusInput): ImportExportResponsesFetchStatus {
    return new ImportExportResponsesFetchStatus(this, this.__resources, input);
  }

  public listJobs(input: shapes.ImportExportListJobsInput): ImportExportResponsesListJobs {
    return new ImportExportResponsesListJobs(this, this.__resources, input);
  }

  public updateJob(input: shapes.ImportExportUpdateJobInput): ImportExportResponsesUpdateJob {
    return new ImportExportResponsesUpdateJob(this, this.__resources, input);
  }

}

export class ImportExportResponsesCancelJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ImportExportCancelJobInput) {
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
          JobId: this.__input.jobId,
          APIVersion: this.__input.apiVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelJob.Success', props);
    return resource.getResponseField('Success') as unknown as boolean;
  }

}

export class ImportExportResponsesCreateJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ImportExportCreateJobInput) {
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
          JobType: this.__input.jobType,
          Manifest: this.__input.manifest,
          ManifestAddendum: this.__input.manifestAddendum,
          ValidateOnly: this.__input.validateOnly,
          APIVersion: this.__input.apiVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.JobId', props);
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
          JobType: this.__input.jobType,
          Manifest: this.__input.manifest,
          ManifestAddendum: this.__input.manifestAddendum,
          ValidateOnly: this.__input.validateOnly,
          APIVersion: this.__input.apiVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.JobType', props);
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
          JobType: this.__input.jobType,
          Manifest: this.__input.manifest,
          ManifestAddendum: this.__input.manifestAddendum,
          ValidateOnly: this.__input.validateOnly,
          APIVersion: this.__input.apiVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Signature', props);
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
          JobType: this.__input.jobType,
          Manifest: this.__input.manifest,
          ManifestAddendum: this.__input.manifestAddendum,
          ValidateOnly: this.__input.validateOnly,
          APIVersion: this.__input.apiVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.SignatureFileContents', props);
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
          JobType: this.__input.jobType,
          Manifest: this.__input.manifest,
          ManifestAddendum: this.__input.manifestAddendum,
          ValidateOnly: this.__input.validateOnly,
          APIVersion: this.__input.apiVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.WarningMessage', props);
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
          JobType: this.__input.jobType,
          Manifest: this.__input.manifest,
          ManifestAddendum: this.__input.manifestAddendum,
          ValidateOnly: this.__input.validateOnly,
          APIVersion: this.__input.apiVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.ArtifactList', props);
    return resource.getResponseField('ArtifactList') as unknown as shapes.ImportExportArtifact[];
  }

}

export class ImportExportResponsesFetchShippingLabel {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ImportExportGetShippingLabelInput) {
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
          jobIds: this.__input.jobIds,
          name: this.__input.name,
          company: this.__input.company,
          phoneNumber: this.__input.phoneNumber,
          country: this.__input.country,
          stateOrProvince: this.__input.stateOrProvince,
          city: this.__input.city,
          postalCode: this.__input.postalCode,
          street1: this.__input.street1,
          street2: this.__input.street2,
          street3: this.__input.street3,
          APIVersion: this.__input.apiVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetShippingLabel.ShippingLabelURL', props);
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
          jobIds: this.__input.jobIds,
          name: this.__input.name,
          company: this.__input.company,
          phoneNumber: this.__input.phoneNumber,
          country: this.__input.country,
          stateOrProvince: this.__input.stateOrProvince,
          city: this.__input.city,
          postalCode: this.__input.postalCode,
          street1: this.__input.street1,
          street2: this.__input.street2,
          street3: this.__input.street3,
          APIVersion: this.__input.apiVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetShippingLabel.Warning', props);
    return resource.getResponseField('Warning') as unknown as string;
  }

}

export class ImportExportResponsesFetchStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ImportExportGetStatusInput) {
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
          JobId: this.__input.jobId,
          APIVersion: this.__input.apiVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStatus.JobId', props);
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
          JobId: this.__input.jobId,
          APIVersion: this.__input.apiVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStatus.JobType', props);
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
          JobId: this.__input.jobId,
          APIVersion: this.__input.apiVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStatus.LocationCode', props);
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
          JobId: this.__input.jobId,
          APIVersion: this.__input.apiVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStatus.LocationMessage', props);
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
          JobId: this.__input.jobId,
          APIVersion: this.__input.apiVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStatus.ProgressCode', props);
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
          JobId: this.__input.jobId,
          APIVersion: this.__input.apiVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStatus.ProgressMessage', props);
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
          JobId: this.__input.jobId,
          APIVersion: this.__input.apiVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStatus.Carrier', props);
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
          JobId: this.__input.jobId,
          APIVersion: this.__input.apiVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStatus.TrackingNumber', props);
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
          JobId: this.__input.jobId,
          APIVersion: this.__input.apiVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStatus.LogBucket', props);
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
          JobId: this.__input.jobId,
          APIVersion: this.__input.apiVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStatus.LogKey', props);
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
          JobId: this.__input.jobId,
          APIVersion: this.__input.apiVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStatus.ErrorCount', props);
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
          JobId: this.__input.jobId,
          APIVersion: this.__input.apiVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStatus.Signature', props);
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
          JobId: this.__input.jobId,
          APIVersion: this.__input.apiVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStatus.SignatureFileContents', props);
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
          JobId: this.__input.jobId,
          APIVersion: this.__input.apiVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStatus.CurrentManifest', props);
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
          JobId: this.__input.jobId,
          APIVersion: this.__input.apiVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStatus.CreationDate', props);
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
          JobId: this.__input.jobId,
          APIVersion: this.__input.apiVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStatus.ArtifactList', props);
    return resource.getResponseField('ArtifactList') as unknown as shapes.ImportExportArtifact[];
  }

}

export class ImportExportResponsesListJobs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ImportExportListJobsInput) {
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
          MaxJobs: this.__input.maxJobs,
          Marker: this.__input.marker,
          APIVersion: this.__input.apiVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListJobs.Jobs', props);
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
          MaxJobs: this.__input.maxJobs,
          Marker: this.__input.marker,
          APIVersion: this.__input.apiVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListJobs.IsTruncated', props);
    return resource.getResponseField('IsTruncated') as unknown as boolean;
  }

}

export class ImportExportResponsesUpdateJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ImportExportUpdateJobInput) {
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
          JobId: this.__input.jobId,
          Manifest: this.__input.manifest,
          JobType: this.__input.jobType,
          ValidateOnly: this.__input.validateOnly,
          APIVersion: this.__input.apiVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateJob.Success', props);
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
          JobId: this.__input.jobId,
          Manifest: this.__input.manifest,
          JobType: this.__input.jobType,
          ValidateOnly: this.__input.validateOnly,
          APIVersion: this.__input.apiVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateJob.WarningMessage', props);
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
          JobId: this.__input.jobId,
          Manifest: this.__input.manifest,
          JobType: this.__input.jobType,
          ValidateOnly: this.__input.validateOnly,
          APIVersion: this.__input.apiVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateJob.ArtifactList', props);
    return resource.getResponseField('ArtifactList') as unknown as shapes.ImportExportArtifact[];
  }

}

