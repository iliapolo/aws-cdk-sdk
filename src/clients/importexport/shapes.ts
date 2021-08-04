/**
 * @schema ImportExportCancelJobInput
 */
export interface ImportExportCancelJobInput {
  /**
   * @schema ImportExportCancelJobInput#JobId
   */
  readonly jobId: string;

  /**
   * @schema ImportExportCancelJobInput#APIVersion
   */
  readonly apiVersion?: string;

}

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
 * @schema ImportExportCreateJobInput
 */
export interface ImportExportCreateJobInput {
  /**
   * @schema ImportExportCreateJobInput#JobType
   */
  readonly jobType: string;

  /**
   * @schema ImportExportCreateJobInput#Manifest
   */
  readonly manifest: string;

  /**
   * @schema ImportExportCreateJobInput#ManifestAddendum
   */
  readonly manifestAddendum?: string;

  /**
   * @schema ImportExportCreateJobInput#ValidateOnly
   */
  readonly validateOnly: boolean;

  /**
   * @schema ImportExportCreateJobInput#APIVersion
   */
  readonly apiVersion?: string;

}

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
 * @schema ImportExportGetStatusInput
 */
export interface ImportExportGetStatusInput {
  /**
   * @schema ImportExportGetStatusInput#JobId
   */
  readonly jobId: string;

  /**
   * @schema ImportExportGetStatusInput#APIVersion
   */
  readonly apiVersion?: string;

}

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
 * @schema ImportExportUpdateJobInput
 */
export interface ImportExportUpdateJobInput {
  /**
   * @schema ImportExportUpdateJobInput#JobId
   */
  readonly jobId: string;

  /**
   * @schema ImportExportUpdateJobInput#Manifest
   */
  readonly manifest: string;

  /**
   * @schema ImportExportUpdateJobInput#JobType
   */
  readonly jobType: string;

  /**
   * @schema ImportExportUpdateJobInput#ValidateOnly
   */
  readonly validateOnly: boolean;

  /**
   * @schema ImportExportUpdateJobInput#APIVersion
   */
  readonly apiVersion?: string;

}

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
