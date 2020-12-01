/**
 * @schema CancelJobInput
 */
export interface CancelJobInput {
  /**
   * @schema CancelJobInput#JobId
   */
  readonly jobId: string;

  /**
   * @schema CancelJobInput#APIVersion
   */
  readonly apiVersion?: string;

}

/**
 * @schema CancelJobOutput
 */
export interface CancelJobOutput {
  /**
   * @schema CancelJobOutput#Success
   */
  readonly success?: boolean;

}

/**
 * @schema CreateJobInput
 */
export interface CreateJobInput {
  /**
   * @schema CreateJobInput#JobType
   */
  readonly jobType: string;

  /**
   * @schema CreateJobInput#Manifest
   */
  readonly manifest: string;

  /**
   * @schema CreateJobInput#ManifestAddendum
   */
  readonly manifestAddendum?: string;

  /**
   * @schema CreateJobInput#ValidateOnly
   */
  readonly validateOnly: boolean;

  /**
   * @schema CreateJobInput#APIVersion
   */
  readonly apiVersion?: string;

}

/**
 * @schema CreateJobOutput
 */
export interface CreateJobOutput {
  /**
   * @schema CreateJobOutput#JobId
   */
  readonly jobId?: string;

  /**
   * @schema CreateJobOutput#JobType
   */
  readonly jobType?: string;

  /**
   * @schema CreateJobOutput#Signature
   */
  readonly signature?: string;

  /**
   * @schema CreateJobOutput#SignatureFileContents
   */
  readonly signatureFileContents?: string;

  /**
   * @schema CreateJobOutput#WarningMessage
   */
  readonly warningMessage?: string;

  /**
   * @schema CreateJobOutput#ArtifactList
   */
  readonly artifactList?: Artifact[];

}

/**
 * @schema GetShippingLabelInput
 */
export interface GetShippingLabelInput {
  /**
   * @schema GetShippingLabelInput#jobIds
   */
  readonly jobIds: string[];

  /**
   * @schema GetShippingLabelInput#name
   */
  readonly name?: string;

  /**
   * @schema GetShippingLabelInput#company
   */
  readonly company?: string;

  /**
   * @schema GetShippingLabelInput#phoneNumber
   */
  readonly phoneNumber?: string;

  /**
   * @schema GetShippingLabelInput#country
   */
  readonly country?: string;

  /**
   * @schema GetShippingLabelInput#stateOrProvince
   */
  readonly stateOrProvince?: string;

  /**
   * @schema GetShippingLabelInput#city
   */
  readonly city?: string;

  /**
   * @schema GetShippingLabelInput#postalCode
   */
  readonly postalCode?: string;

  /**
   * @schema GetShippingLabelInput#street1
   */
  readonly street1?: string;

  /**
   * @schema GetShippingLabelInput#street2
   */
  readonly street2?: string;

  /**
   * @schema GetShippingLabelInput#street3
   */
  readonly street3?: string;

  /**
   * @schema GetShippingLabelInput#APIVersion
   */
  readonly apiVersion?: string;

}

/**
 * @schema GetShippingLabelOutput
 */
export interface GetShippingLabelOutput {
  /**
   * @schema GetShippingLabelOutput#ShippingLabelURL
   */
  readonly shippingLabelUrl?: string;

  /**
   * @schema GetShippingLabelOutput#Warning
   */
  readonly warning?: string;

}

/**
 * @schema GetStatusInput
 */
export interface GetStatusInput {
  /**
   * @schema GetStatusInput#JobId
   */
  readonly jobId: string;

  /**
   * @schema GetStatusInput#APIVersion
   */
  readonly apiVersion?: string;

}

/**
 * @schema GetStatusOutput
 */
export interface GetStatusOutput {
  /**
   * @schema GetStatusOutput#JobId
   */
  readonly jobId?: string;

  /**
   * @schema GetStatusOutput#JobType
   */
  readonly jobType?: string;

  /**
   * @schema GetStatusOutput#LocationCode
   */
  readonly locationCode?: string;

  /**
   * @schema GetStatusOutput#LocationMessage
   */
  readonly locationMessage?: string;

  /**
   * @schema GetStatusOutput#ProgressCode
   */
  readonly progressCode?: string;

  /**
   * @schema GetStatusOutput#ProgressMessage
   */
  readonly progressMessage?: string;

  /**
   * @schema GetStatusOutput#Carrier
   */
  readonly carrier?: string;

  /**
   * @schema GetStatusOutput#TrackingNumber
   */
  readonly trackingNumber?: string;

  /**
   * @schema GetStatusOutput#LogBucket
   */
  readonly logBucket?: string;

  /**
   * @schema GetStatusOutput#LogKey
   */
  readonly logKey?: string;

  /**
   * @schema GetStatusOutput#ErrorCount
   */
  readonly errorCount?: number;

  /**
   * @schema GetStatusOutput#Signature
   */
  readonly signature?: string;

  /**
   * @schema GetStatusOutput#SignatureFileContents
   */
  readonly signatureFileContents?: string;

  /**
   * @schema GetStatusOutput#CurrentManifest
   */
  readonly currentManifest?: string;

  /**
   * @schema GetStatusOutput#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema GetStatusOutput#ArtifactList
   */
  readonly artifactList?: Artifact[];

}

/**
 * @schema ListJobsInput
 */
export interface ListJobsInput {
  /**
   * @schema ListJobsInput#MaxJobs
   */
  readonly maxJobs?: number;

  /**
   * @schema ListJobsInput#Marker
   */
  readonly marker?: string;

  /**
   * @schema ListJobsInput#APIVersion
   */
  readonly apiVersion?: string;

}

/**
 * @schema ListJobsOutput
 */
export interface ListJobsOutput {
  /**
   * @schema ListJobsOutput#Jobs
   */
  readonly jobs?: Job[];

  /**
   * @schema ListJobsOutput#IsTruncated
   */
  readonly isTruncated?: boolean;

}

/**
 * @schema UpdateJobInput
 */
export interface UpdateJobInput {
  /**
   * @schema UpdateJobInput#JobId
   */
  readonly jobId: string;

  /**
   * @schema UpdateJobInput#Manifest
   */
  readonly manifest: string;

  /**
   * @schema UpdateJobInput#JobType
   */
  readonly jobType: string;

  /**
   * @schema UpdateJobInput#ValidateOnly
   */
  readonly validateOnly: boolean;

  /**
   * @schema UpdateJobInput#APIVersion
   */
  readonly apiVersion?: string;

}

/**
 * @schema UpdateJobOutput
 */
export interface UpdateJobOutput {
  /**
   * @schema UpdateJobOutput#Success
   */
  readonly success?: boolean;

  /**
   * @schema UpdateJobOutput#WarningMessage
   */
  readonly warningMessage?: string;

  /**
   * @schema UpdateJobOutput#ArtifactList
   */
  readonly artifactList?: Artifact[];

}

/**
 * @schema Artifact
 */
export interface Artifact {
  /**
   * @schema Artifact#Description
   */
  readonly description?: string;

  /**
   * @schema Artifact#URL
   */
  readonly url?: string;

}

/**
 * @schema Job
 */
export interface Job {
  /**
   * @schema Job#JobId
   */
  readonly jobId?: string;

  /**
   * @schema Job#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema Job#IsCanceled
   */
  readonly isCanceled?: boolean;

  /**
   * @schema Job#JobType
   */
  readonly jobType?: string;

}
