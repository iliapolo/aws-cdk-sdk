/**
 * @schema ImportExportCancelJobInput
 */
export interface ImportExportCancelJobInput {
  /**
   * @schema ImportExportCancelJobInput#JobId
   */
  readonly jobId?: string;

  /**
   * @schema ImportExportCancelJobInput#APIVersion
   */
  readonly apiVersion?: string;

}

/**
 * Converts an object of type 'ImportExportCancelJobInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImportExportCancelJobInput(obj: ImportExportCancelJobInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
    'APIVersion': obj.apiVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImportExportCancelJobOutput
 */
export interface ImportExportCancelJobOutput {
  /**
   * @schema ImportExportCancelJobOutput#Success
   */
  readonly success?: boolean;

}

/**
 * Converts an object of type 'ImportExportCancelJobOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImportExportCancelJobOutput(obj: ImportExportCancelJobOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Success': obj.success,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImportExportCreateJobInput
 */
export interface ImportExportCreateJobInput {
  /**
   * @schema ImportExportCreateJobInput#JobType
   */
  readonly jobType?: string;

  /**
   * @schema ImportExportCreateJobInput#Manifest
   */
  readonly manifest?: string;

  /**
   * @schema ImportExportCreateJobInput#ManifestAddendum
   */
  readonly manifestAddendum?: string;

  /**
   * @schema ImportExportCreateJobInput#ValidateOnly
   */
  readonly validateOnly?: boolean;

  /**
   * @schema ImportExportCreateJobInput#APIVersion
   */
  readonly apiVersion?: string;

}

/**
 * Converts an object of type 'ImportExportCreateJobInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImportExportCreateJobInput(obj: ImportExportCreateJobInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobType': obj.jobType,
    'Manifest': obj.manifest,
    'ManifestAddendum': obj.manifestAddendum,
    'ValidateOnly': obj.validateOnly,
    'APIVersion': obj.apiVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImportExportCreateJobOutput
 */
export interface ImportExportCreateJobOutput {
  /**
   * @schema ImportExportCreateJobOutput#JobId
   */
  readonly jobId?: string;

  /**
   * @schema ImportExportCreateJobOutput#JobType
   */
  readonly jobType?: string;

  /**
   * @schema ImportExportCreateJobOutput#Signature
   */
  readonly signature?: string;

  /**
   * @schema ImportExportCreateJobOutput#SignatureFileContents
   */
  readonly signatureFileContents?: string;

  /**
   * @schema ImportExportCreateJobOutput#WarningMessage
   */
  readonly warningMessage?: string;

  /**
   * @schema ImportExportCreateJobOutput#ArtifactList
   */
  readonly artifactList?: ImportExportArtifact[];

}

/**
 * Converts an object of type 'ImportExportCreateJobOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImportExportCreateJobOutput(obj: ImportExportCreateJobOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
    'JobType': obj.jobType,
    'Signature': obj.signature,
    'SignatureFileContents': obj.signatureFileContents,
    'WarningMessage': obj.warningMessage,
    'ArtifactList': obj.artifactList?.map(y => toJson_ImportExportArtifact(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImportExportGetShippingLabelInput
 */
export interface ImportExportGetShippingLabelInput {
  /**
   * @schema ImportExportGetShippingLabelInput#jobIds
   */
  readonly jobIds: string[];

  /**
   * @schema ImportExportGetShippingLabelInput#name
   */
  readonly name?: string;

  /**
   * @schema ImportExportGetShippingLabelInput#company
   */
  readonly company?: string;

  /**
   * @schema ImportExportGetShippingLabelInput#phoneNumber
   */
  readonly phoneNumber?: string;

  /**
   * @schema ImportExportGetShippingLabelInput#country
   */
  readonly country?: string;

  /**
   * @schema ImportExportGetShippingLabelInput#stateOrProvince
   */
  readonly stateOrProvince?: string;

  /**
   * @schema ImportExportGetShippingLabelInput#city
   */
  readonly city?: string;

  /**
   * @schema ImportExportGetShippingLabelInput#postalCode
   */
  readonly postalCode?: string;

  /**
   * @schema ImportExportGetShippingLabelInput#street1
   */
  readonly street1?: string;

  /**
   * @schema ImportExportGetShippingLabelInput#street2
   */
  readonly street2?: string;

  /**
   * @schema ImportExportGetShippingLabelInput#street3
   */
  readonly street3?: string;

  /**
   * @schema ImportExportGetShippingLabelInput#APIVersion
   */
  readonly apiVersion?: string;

}

/**
 * Converts an object of type 'ImportExportGetShippingLabelInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImportExportGetShippingLabelInput(obj: ImportExportGetShippingLabelInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobIds': obj.jobIds?.map(y => y),
    'name': obj.name,
    'company': obj.company,
    'phoneNumber': obj.phoneNumber,
    'country': obj.country,
    'stateOrProvince': obj.stateOrProvince,
    'city': obj.city,
    'postalCode': obj.postalCode,
    'street1': obj.street1,
    'street2': obj.street2,
    'street3': obj.street3,
    'APIVersion': obj.apiVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImportExportGetShippingLabelOutput
 */
export interface ImportExportGetShippingLabelOutput {
  /**
   * @schema ImportExportGetShippingLabelOutput#ShippingLabelURL
   */
  readonly shippingLabelUrl?: string;

  /**
   * @schema ImportExportGetShippingLabelOutput#Warning
   */
  readonly warning?: string;

}

/**
 * Converts an object of type 'ImportExportGetShippingLabelOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImportExportGetShippingLabelOutput(obj: ImportExportGetShippingLabelOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ShippingLabelURL': obj.shippingLabelUrl,
    'Warning': obj.warning,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImportExportGetStatusInput
 */
export interface ImportExportGetStatusInput {
  /**
   * @schema ImportExportGetStatusInput#JobId
   */
  readonly jobId?: string;

  /**
   * @schema ImportExportGetStatusInput#APIVersion
   */
  readonly apiVersion?: string;

}

/**
 * Converts an object of type 'ImportExportGetStatusInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImportExportGetStatusInput(obj: ImportExportGetStatusInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
    'APIVersion': obj.apiVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImportExportGetStatusOutput
 */
export interface ImportExportGetStatusOutput {
  /**
   * @schema ImportExportGetStatusOutput#JobId
   */
  readonly jobId?: string;

  /**
   * @schema ImportExportGetStatusOutput#JobType
   */
  readonly jobType?: string;

  /**
   * @schema ImportExportGetStatusOutput#LocationCode
   */
  readonly locationCode?: string;

  /**
   * @schema ImportExportGetStatusOutput#LocationMessage
   */
  readonly locationMessage?: string;

  /**
   * @schema ImportExportGetStatusOutput#ProgressCode
   */
  readonly progressCode?: string;

  /**
   * @schema ImportExportGetStatusOutput#ProgressMessage
   */
  readonly progressMessage?: string;

  /**
   * @schema ImportExportGetStatusOutput#Carrier
   */
  readonly carrier?: string;

  /**
   * @schema ImportExportGetStatusOutput#TrackingNumber
   */
  readonly trackingNumber?: string;

  /**
   * @schema ImportExportGetStatusOutput#LogBucket
   */
  readonly logBucket?: string;

  /**
   * @schema ImportExportGetStatusOutput#LogKey
   */
  readonly logKey?: string;

  /**
   * @schema ImportExportGetStatusOutput#ErrorCount
   */
  readonly errorCount?: number;

  /**
   * @schema ImportExportGetStatusOutput#Signature
   */
  readonly signature?: string;

  /**
   * @schema ImportExportGetStatusOutput#SignatureFileContents
   */
  readonly signatureFileContents?: string;

  /**
   * @schema ImportExportGetStatusOutput#CurrentManifest
   */
  readonly currentManifest?: string;

  /**
   * @schema ImportExportGetStatusOutput#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema ImportExportGetStatusOutput#ArtifactList
   */
  readonly artifactList?: ImportExportArtifact[];

}

/**
 * Converts an object of type 'ImportExportGetStatusOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImportExportGetStatusOutput(obj: ImportExportGetStatusOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
    'JobType': obj.jobType,
    'LocationCode': obj.locationCode,
    'LocationMessage': obj.locationMessage,
    'ProgressCode': obj.progressCode,
    'ProgressMessage': obj.progressMessage,
    'Carrier': obj.carrier,
    'TrackingNumber': obj.trackingNumber,
    'LogBucket': obj.logBucket,
    'LogKey': obj.logKey,
    'ErrorCount': obj.errorCount,
    'Signature': obj.signature,
    'SignatureFileContents': obj.signatureFileContents,
    'CurrentManifest': obj.currentManifest,
    'CreationDate': obj.creationDate,
    'ArtifactList': obj.artifactList?.map(y => toJson_ImportExportArtifact(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImportExportListJobsInput
 */
export interface ImportExportListJobsInput {
  /**
   * @schema ImportExportListJobsInput#MaxJobs
   */
  readonly maxJobs?: number;

  /**
   * @schema ImportExportListJobsInput#Marker
   */
  readonly marker?: string;

  /**
   * @schema ImportExportListJobsInput#APIVersion
   */
  readonly apiVersion?: string;

}

/**
 * Converts an object of type 'ImportExportListJobsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImportExportListJobsInput(obj: ImportExportListJobsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxJobs': obj.maxJobs,
    'Marker': obj.marker,
    'APIVersion': obj.apiVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImportExportListJobsOutput
 */
export interface ImportExportListJobsOutput {
  /**
   * @schema ImportExportListJobsOutput#Jobs
   */
  readonly jobs?: ImportExportJob[];

  /**
   * @schema ImportExportListJobsOutput#IsTruncated
   */
  readonly isTruncated?: boolean;

}

/**
 * Converts an object of type 'ImportExportListJobsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImportExportListJobsOutput(obj: ImportExportListJobsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Jobs': obj.jobs?.map(y => toJson_ImportExportJob(y)),
    'IsTruncated': obj.isTruncated,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImportExportUpdateJobInput
 */
export interface ImportExportUpdateJobInput {
  /**
   * @schema ImportExportUpdateJobInput#JobId
   */
  readonly jobId?: string;

  /**
   * @schema ImportExportUpdateJobInput#Manifest
   */
  readonly manifest?: string;

  /**
   * @schema ImportExportUpdateJobInput#JobType
   */
  readonly jobType?: string;

  /**
   * @schema ImportExportUpdateJobInput#ValidateOnly
   */
  readonly validateOnly?: boolean;

  /**
   * @schema ImportExportUpdateJobInput#APIVersion
   */
  readonly apiVersion?: string;

}

/**
 * Converts an object of type 'ImportExportUpdateJobInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImportExportUpdateJobInput(obj: ImportExportUpdateJobInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
    'Manifest': obj.manifest,
    'JobType': obj.jobType,
    'ValidateOnly': obj.validateOnly,
    'APIVersion': obj.apiVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImportExportUpdateJobOutput
 */
export interface ImportExportUpdateJobOutput {
  /**
   * @schema ImportExportUpdateJobOutput#Success
   */
  readonly success?: boolean;

  /**
   * @schema ImportExportUpdateJobOutput#WarningMessage
   */
  readonly warningMessage?: string;

  /**
   * @schema ImportExportUpdateJobOutput#ArtifactList
   */
  readonly artifactList?: ImportExportArtifact[];

}

/**
 * Converts an object of type 'ImportExportUpdateJobOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImportExportUpdateJobOutput(obj: ImportExportUpdateJobOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Success': obj.success,
    'WarningMessage': obj.warningMessage,
    'ArtifactList': obj.artifactList?.map(y => toJson_ImportExportArtifact(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImportExportArtifact
 */
export interface ImportExportArtifact {
  /**
   * @schema ImportExportArtifact#Description
   */
  readonly description?: string;

  /**
   * @schema ImportExportArtifact#URL
   */
  readonly url?: string;

}

/**
 * Converts an object of type 'ImportExportArtifact' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImportExportArtifact(obj: ImportExportArtifact | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Description': obj.description,
    'URL': obj.url,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ImportExportJob
 */
export interface ImportExportJob {
  /**
   * @schema ImportExportJob#JobId
   */
  readonly jobId?: string;

  /**
   * @schema ImportExportJob#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema ImportExportJob#IsCanceled
   */
  readonly isCanceled?: boolean;

  /**
   * @schema ImportExportJob#JobType
   */
  readonly jobType?: string;

}

/**
 * Converts an object of type 'ImportExportJob' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImportExportJob(obj: ImportExportJob | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
    'CreationDate': obj.creationDate,
    'IsCanceled': obj.isCanceled,
    'JobType': obj.jobType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
