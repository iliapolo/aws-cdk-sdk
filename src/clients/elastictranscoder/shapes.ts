/**
 * @schema ElasticTranscoderCancelJobRequest
 */
export interface ElasticTranscoderCancelJobRequest {
  /**
   * @schema ElasticTranscoderCancelJobRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'ElasticTranscoderCancelJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticTranscoderCancelJobRequest(obj: ElasticTranscoderCancelJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticTranscoderCancelJobResponse
 */
export interface ElasticTranscoderCancelJobResponse {
}

/**
 * Converts an object of type 'ElasticTranscoderCancelJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticTranscoderCancelJobResponse(obj: ElasticTranscoderCancelJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticTranscoderCreateJobRequest
 */
export interface ElasticTranscoderCreateJobRequest {
  /**
   * @schema ElasticTranscoderCreateJobRequest#PipelineId
   */
  readonly pipelineId?: string;

  /**
   * @schema ElasticTranscoderCreateJobRequest#Input
   */
  readonly input?: ElasticTranscoderJobInput;

  /**
   * @schema ElasticTranscoderCreateJobRequest#Inputs
   */
  readonly inputs?: ElasticTranscoderJobInput[];

  /**
   * @schema ElasticTranscoderCreateJobRequest#Output
   */
  readonly output?: ElasticTranscoderCreateJobOutput;

  /**
   * @schema ElasticTranscoderCreateJobRequest#Outputs
   */
  readonly outputs?: ElasticTranscoderCreateJobOutput[];

  /**
   * @schema ElasticTranscoderCreateJobRequest#OutputKeyPrefix
   */
  readonly outputKeyPrefix?: string;

  /**
   * @schema ElasticTranscoderCreateJobRequest#Playlists
   */
  readonly playlists?: ElasticTranscoderCreateJobPlaylist[];

  /**
   * @schema ElasticTranscoderCreateJobRequest#UserMetadata
   */
  readonly userMetadata?: { [key: string]: string };

}

/**
 * Converts an object of type 'ElasticTranscoderCreateJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticTranscoderCreateJobRequest(obj: ElasticTranscoderCreateJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PipelineId': obj.pipelineId,
    'Input': toJson_ElasticTranscoderJobInput(obj.input),
    'Inputs': obj.inputs?.map(y => toJson_ElasticTranscoderJobInput(y)),
    'Output': toJson_ElasticTranscoderCreateJobOutput(obj.output),
    'Outputs': obj.outputs?.map(y => toJson_ElasticTranscoderCreateJobOutput(y)),
    'OutputKeyPrefix': obj.outputKeyPrefix,
    'Playlists': obj.playlists?.map(y => toJson_ElasticTranscoderCreateJobPlaylist(y)),
    'UserMetadata': ((obj.userMetadata) === undefined) ? undefined : (Object.entries(obj.userMetadata).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticTranscoderCreateJobResponse
 */
export interface ElasticTranscoderCreateJobResponse {
  /**
   * @schema ElasticTranscoderCreateJobResponse#Job
   */
  readonly job?: ElasticTranscoderJob;

}

/**
 * Converts an object of type 'ElasticTranscoderCreateJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticTranscoderCreateJobResponse(obj: ElasticTranscoderCreateJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Job': toJson_ElasticTranscoderJob(obj.job),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticTranscoderCreatePipelineRequest
 */
export interface ElasticTranscoderCreatePipelineRequest {
  /**
   * @schema ElasticTranscoderCreatePipelineRequest#Name
   */
  readonly name?: string;

  /**
   * @schema ElasticTranscoderCreatePipelineRequest#InputBucket
   */
  readonly inputBucket?: string;

  /**
   * @schema ElasticTranscoderCreatePipelineRequest#OutputBucket
   */
  readonly outputBucket?: string;

  /**
   * @schema ElasticTranscoderCreatePipelineRequest#Role
   */
  readonly role?: string;

  /**
   * @schema ElasticTranscoderCreatePipelineRequest#AwsKmsKeyArn
   */
  readonly awsKmsKeyArn?: string;

  /**
   * @schema ElasticTranscoderCreatePipelineRequest#Notifications
   */
  readonly notifications?: ElasticTranscoderNotifications;

  /**
   * @schema ElasticTranscoderCreatePipelineRequest#ContentConfig
   */
  readonly contentConfig?: ElasticTranscoderPipelineOutputConfig;

  /**
   * @schema ElasticTranscoderCreatePipelineRequest#ThumbnailConfig
   */
  readonly thumbnailConfig?: ElasticTranscoderPipelineOutputConfig;

}

/**
 * Converts an object of type 'ElasticTranscoderCreatePipelineRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticTranscoderCreatePipelineRequest(obj: ElasticTranscoderCreatePipelineRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'InputBucket': obj.inputBucket,
    'OutputBucket': obj.outputBucket,
    'Role': obj.role,
    'AwsKmsKeyArn': obj.awsKmsKeyArn,
    'Notifications': toJson_ElasticTranscoderNotifications(obj.notifications),
    'ContentConfig': toJson_ElasticTranscoderPipelineOutputConfig(obj.contentConfig),
    'ThumbnailConfig': toJson_ElasticTranscoderPipelineOutputConfig(obj.thumbnailConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticTranscoderCreatePipelineResponse
 */
export interface ElasticTranscoderCreatePipelineResponse {
  /**
   * @schema ElasticTranscoderCreatePipelineResponse#Pipeline
   */
  readonly pipeline?: ElasticTranscoderPipeline;

  /**
   * @schema ElasticTranscoderCreatePipelineResponse#Warnings
   */
  readonly warnings?: ElasticTranscoderWarning[];

}

/**
 * Converts an object of type 'ElasticTranscoderCreatePipelineResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticTranscoderCreatePipelineResponse(obj: ElasticTranscoderCreatePipelineResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Pipeline': toJson_ElasticTranscoderPipeline(obj.pipeline),
    'Warnings': obj.warnings?.map(y => toJson_ElasticTranscoderWarning(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticTranscoderCreatePresetRequest
 */
export interface ElasticTranscoderCreatePresetRequest {
  /**
   * @schema ElasticTranscoderCreatePresetRequest#Name
   */
  readonly name?: string;

  /**
   * @schema ElasticTranscoderCreatePresetRequest#Description
   */
  readonly description?: string;

  /**
   * @schema ElasticTranscoderCreatePresetRequest#Container
   */
  readonly container?: string;

  /**
   * @schema ElasticTranscoderCreatePresetRequest#Video
   */
  readonly video?: ElasticTranscoderVideoParameters;

  /**
   * @schema ElasticTranscoderCreatePresetRequest#Audio
   */
  readonly audio?: ElasticTranscoderAudioParameters;

  /**
   * @schema ElasticTranscoderCreatePresetRequest#Thumbnails
   */
  readonly thumbnails?: ElasticTranscoderThumbnails;

}

/**
 * Converts an object of type 'ElasticTranscoderCreatePresetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticTranscoderCreatePresetRequest(obj: ElasticTranscoderCreatePresetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Description': obj.description,
    'Container': obj.container,
    'Video': toJson_ElasticTranscoderVideoParameters(obj.video),
    'Audio': toJson_ElasticTranscoderAudioParameters(obj.audio),
    'Thumbnails': toJson_ElasticTranscoderThumbnails(obj.thumbnails),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticTranscoderCreatePresetResponse
 */
export interface ElasticTranscoderCreatePresetResponse {
  /**
   * @schema ElasticTranscoderCreatePresetResponse#Preset
   */
  readonly preset?: ElasticTranscoderPreset;

  /**
   * @schema ElasticTranscoderCreatePresetResponse#Warning
   */
  readonly warning?: string;

}

/**
 * Converts an object of type 'ElasticTranscoderCreatePresetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticTranscoderCreatePresetResponse(obj: ElasticTranscoderCreatePresetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Preset': toJson_ElasticTranscoderPreset(obj.preset),
    'Warning': obj.warning,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticTranscoderDeletePipelineRequest
 */
export interface ElasticTranscoderDeletePipelineRequest {
  /**
   * @schema ElasticTranscoderDeletePipelineRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'ElasticTranscoderDeletePipelineRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticTranscoderDeletePipelineRequest(obj: ElasticTranscoderDeletePipelineRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticTranscoderDeletePipelineResponse
 */
export interface ElasticTranscoderDeletePipelineResponse {
}

/**
 * Converts an object of type 'ElasticTranscoderDeletePipelineResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticTranscoderDeletePipelineResponse(obj: ElasticTranscoderDeletePipelineResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticTranscoderDeletePresetRequest
 */
export interface ElasticTranscoderDeletePresetRequest {
  /**
   * @schema ElasticTranscoderDeletePresetRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'ElasticTranscoderDeletePresetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticTranscoderDeletePresetRequest(obj: ElasticTranscoderDeletePresetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticTranscoderDeletePresetResponse
 */
export interface ElasticTranscoderDeletePresetResponse {
}

/**
 * Converts an object of type 'ElasticTranscoderDeletePresetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticTranscoderDeletePresetResponse(obj: ElasticTranscoderDeletePresetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticTranscoderListJobsByPipelineRequest
 */
export interface ElasticTranscoderListJobsByPipelineRequest {
  /**
   * @schema ElasticTranscoderListJobsByPipelineRequest#PipelineId
   */
  readonly pipelineId?: string;

  /**
   * @schema ElasticTranscoderListJobsByPipelineRequest#Ascending
   */
  readonly ascending?: string;

  /**
   * @schema ElasticTranscoderListJobsByPipelineRequest#PageToken
   */
  readonly pageToken?: string;

}

/**
 * Converts an object of type 'ElasticTranscoderListJobsByPipelineRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticTranscoderListJobsByPipelineRequest(obj: ElasticTranscoderListJobsByPipelineRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PipelineId': obj.pipelineId,
    'Ascending': obj.ascending,
    'PageToken': obj.pageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticTranscoderListJobsByPipelineResponse
 */
export interface ElasticTranscoderListJobsByPipelineResponse {
  /**
   * @schema ElasticTranscoderListJobsByPipelineResponse#Jobs
   */
  readonly jobs?: ElasticTranscoderJob[];

  /**
   * @schema ElasticTranscoderListJobsByPipelineResponse#NextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * Converts an object of type 'ElasticTranscoderListJobsByPipelineResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticTranscoderListJobsByPipelineResponse(obj: ElasticTranscoderListJobsByPipelineResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Jobs': obj.jobs?.map(y => toJson_ElasticTranscoderJob(y)),
    'NextPageToken': obj.nextPageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticTranscoderListJobsByStatusRequest
 */
export interface ElasticTranscoderListJobsByStatusRequest {
  /**
   * @schema ElasticTranscoderListJobsByStatusRequest#Status
   */
  readonly status?: string;

  /**
   * @schema ElasticTranscoderListJobsByStatusRequest#Ascending
   */
  readonly ascending?: string;

  /**
   * @schema ElasticTranscoderListJobsByStatusRequest#PageToken
   */
  readonly pageToken?: string;

}

/**
 * Converts an object of type 'ElasticTranscoderListJobsByStatusRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticTranscoderListJobsByStatusRequest(obj: ElasticTranscoderListJobsByStatusRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
    'Ascending': obj.ascending,
    'PageToken': obj.pageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticTranscoderListJobsByStatusResponse
 */
export interface ElasticTranscoderListJobsByStatusResponse {
  /**
   * @schema ElasticTranscoderListJobsByStatusResponse#Jobs
   */
  readonly jobs?: ElasticTranscoderJob[];

  /**
   * @schema ElasticTranscoderListJobsByStatusResponse#NextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * Converts an object of type 'ElasticTranscoderListJobsByStatusResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticTranscoderListJobsByStatusResponse(obj: ElasticTranscoderListJobsByStatusResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Jobs': obj.jobs?.map(y => toJson_ElasticTranscoderJob(y)),
    'NextPageToken': obj.nextPageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticTranscoderListPipelinesRequest
 */
export interface ElasticTranscoderListPipelinesRequest {
  /**
   * @schema ElasticTranscoderListPipelinesRequest#Ascending
   */
  readonly ascending?: string;

  /**
   * @schema ElasticTranscoderListPipelinesRequest#PageToken
   */
  readonly pageToken?: string;

}

/**
 * Converts an object of type 'ElasticTranscoderListPipelinesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticTranscoderListPipelinesRequest(obj: ElasticTranscoderListPipelinesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Ascending': obj.ascending,
    'PageToken': obj.pageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticTranscoderListPipelinesResponse
 */
export interface ElasticTranscoderListPipelinesResponse {
  /**
   * @schema ElasticTranscoderListPipelinesResponse#Pipelines
   */
  readonly pipelines?: ElasticTranscoderPipeline[];

  /**
   * @schema ElasticTranscoderListPipelinesResponse#NextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * Converts an object of type 'ElasticTranscoderListPipelinesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticTranscoderListPipelinesResponse(obj: ElasticTranscoderListPipelinesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Pipelines': obj.pipelines?.map(y => toJson_ElasticTranscoderPipeline(y)),
    'NextPageToken': obj.nextPageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticTranscoderListPresetsRequest
 */
export interface ElasticTranscoderListPresetsRequest {
  /**
   * @schema ElasticTranscoderListPresetsRequest#Ascending
   */
  readonly ascending?: string;

  /**
   * @schema ElasticTranscoderListPresetsRequest#PageToken
   */
  readonly pageToken?: string;

}

/**
 * Converts an object of type 'ElasticTranscoderListPresetsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticTranscoderListPresetsRequest(obj: ElasticTranscoderListPresetsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Ascending': obj.ascending,
    'PageToken': obj.pageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticTranscoderListPresetsResponse
 */
export interface ElasticTranscoderListPresetsResponse {
  /**
   * @schema ElasticTranscoderListPresetsResponse#Presets
   */
  readonly presets?: ElasticTranscoderPreset[];

  /**
   * @schema ElasticTranscoderListPresetsResponse#NextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * Converts an object of type 'ElasticTranscoderListPresetsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticTranscoderListPresetsResponse(obj: ElasticTranscoderListPresetsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Presets': obj.presets?.map(y => toJson_ElasticTranscoderPreset(y)),
    'NextPageToken': obj.nextPageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticTranscoderReadJobRequest
 */
export interface ElasticTranscoderReadJobRequest {
  /**
   * @schema ElasticTranscoderReadJobRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'ElasticTranscoderReadJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticTranscoderReadJobRequest(obj: ElasticTranscoderReadJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticTranscoderReadJobResponse
 */
export interface ElasticTranscoderReadJobResponse {
  /**
   * @schema ElasticTranscoderReadJobResponse#Job
   */
  readonly job?: ElasticTranscoderJob;

}

/**
 * Converts an object of type 'ElasticTranscoderReadJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticTranscoderReadJobResponse(obj: ElasticTranscoderReadJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Job': toJson_ElasticTranscoderJob(obj.job),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticTranscoderReadPipelineRequest
 */
export interface ElasticTranscoderReadPipelineRequest {
  /**
   * @schema ElasticTranscoderReadPipelineRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'ElasticTranscoderReadPipelineRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticTranscoderReadPipelineRequest(obj: ElasticTranscoderReadPipelineRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticTranscoderReadPipelineResponse
 */
export interface ElasticTranscoderReadPipelineResponse {
  /**
   * @schema ElasticTranscoderReadPipelineResponse#Pipeline
   */
  readonly pipeline?: ElasticTranscoderPipeline;

  /**
   * @schema ElasticTranscoderReadPipelineResponse#Warnings
   */
  readonly warnings?: ElasticTranscoderWarning[];

}

/**
 * Converts an object of type 'ElasticTranscoderReadPipelineResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticTranscoderReadPipelineResponse(obj: ElasticTranscoderReadPipelineResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Pipeline': toJson_ElasticTranscoderPipeline(obj.pipeline),
    'Warnings': obj.warnings?.map(y => toJson_ElasticTranscoderWarning(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticTranscoderReadPresetRequest
 */
export interface ElasticTranscoderReadPresetRequest {
  /**
   * @schema ElasticTranscoderReadPresetRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'ElasticTranscoderReadPresetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticTranscoderReadPresetRequest(obj: ElasticTranscoderReadPresetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticTranscoderReadPresetResponse
 */
export interface ElasticTranscoderReadPresetResponse {
  /**
   * @schema ElasticTranscoderReadPresetResponse#Preset
   */
  readonly preset?: ElasticTranscoderPreset;

}

/**
 * Converts an object of type 'ElasticTranscoderReadPresetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticTranscoderReadPresetResponse(obj: ElasticTranscoderReadPresetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Preset': toJson_ElasticTranscoderPreset(obj.preset),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticTranscoderTestRoleRequest
 */
export interface ElasticTranscoderTestRoleRequest {
  /**
   * @schema ElasticTranscoderTestRoleRequest#Role
   */
  readonly role?: string;

  /**
   * @schema ElasticTranscoderTestRoleRequest#InputBucket
   */
  readonly inputBucket?: string;

  /**
   * @schema ElasticTranscoderTestRoleRequest#OutputBucket
   */
  readonly outputBucket?: string;

  /**
   * @schema ElasticTranscoderTestRoleRequest#Topics
   */
  readonly topics?: string[];

}

/**
 * Converts an object of type 'ElasticTranscoderTestRoleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticTranscoderTestRoleRequest(obj: ElasticTranscoderTestRoleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Role': obj.role,
    'InputBucket': obj.inputBucket,
    'OutputBucket': obj.outputBucket,
    'Topics': obj.topics?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticTranscoderTestRoleResponse
 */
export interface ElasticTranscoderTestRoleResponse {
  /**
   * @schema ElasticTranscoderTestRoleResponse#Success
   */
  readonly success?: string;

  /**
   * @schema ElasticTranscoderTestRoleResponse#Messages
   */
  readonly messages?: string[];

}

/**
 * Converts an object of type 'ElasticTranscoderTestRoleResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticTranscoderTestRoleResponse(obj: ElasticTranscoderTestRoleResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Success': obj.success,
    'Messages': obj.messages?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticTranscoderUpdatePipelineRequest
 */
export interface ElasticTranscoderUpdatePipelineRequest {
  /**
   * @schema ElasticTranscoderUpdatePipelineRequest#Id
   */
  readonly id?: string;

  /**
   * @schema ElasticTranscoderUpdatePipelineRequest#Name
   */
  readonly name?: string;

  /**
   * @schema ElasticTranscoderUpdatePipelineRequest#InputBucket
   */
  readonly inputBucket?: string;

  /**
   * @schema ElasticTranscoderUpdatePipelineRequest#Role
   */
  readonly role?: string;

  /**
   * @schema ElasticTranscoderUpdatePipelineRequest#AwsKmsKeyArn
   */
  readonly awsKmsKeyArn?: string;

  /**
   * @schema ElasticTranscoderUpdatePipelineRequest#Notifications
   */
  readonly notifications?: ElasticTranscoderNotifications;

  /**
   * @schema ElasticTranscoderUpdatePipelineRequest#ContentConfig
   */
  readonly contentConfig?: ElasticTranscoderPipelineOutputConfig;

  /**
   * @schema ElasticTranscoderUpdatePipelineRequest#ThumbnailConfig
   */
  readonly thumbnailConfig?: ElasticTranscoderPipelineOutputConfig;

}

/**
 * Converts an object of type 'ElasticTranscoderUpdatePipelineRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticTranscoderUpdatePipelineRequest(obj: ElasticTranscoderUpdatePipelineRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Name': obj.name,
    'InputBucket': obj.inputBucket,
    'Role': obj.role,
    'AwsKmsKeyArn': obj.awsKmsKeyArn,
    'Notifications': toJson_ElasticTranscoderNotifications(obj.notifications),
    'ContentConfig': toJson_ElasticTranscoderPipelineOutputConfig(obj.contentConfig),
    'ThumbnailConfig': toJson_ElasticTranscoderPipelineOutputConfig(obj.thumbnailConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticTranscoderUpdatePipelineResponse
 */
export interface ElasticTranscoderUpdatePipelineResponse {
  /**
   * @schema ElasticTranscoderUpdatePipelineResponse#Pipeline
   */
  readonly pipeline?: ElasticTranscoderPipeline;

  /**
   * @schema ElasticTranscoderUpdatePipelineResponse#Warnings
   */
  readonly warnings?: ElasticTranscoderWarning[];

}

/**
 * Converts an object of type 'ElasticTranscoderUpdatePipelineResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticTranscoderUpdatePipelineResponse(obj: ElasticTranscoderUpdatePipelineResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Pipeline': toJson_ElasticTranscoderPipeline(obj.pipeline),
    'Warnings': obj.warnings?.map(y => toJson_ElasticTranscoderWarning(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticTranscoderUpdatePipelineNotificationsRequest
 */
export interface ElasticTranscoderUpdatePipelineNotificationsRequest {
  /**
   * @schema ElasticTranscoderUpdatePipelineNotificationsRequest#Id
   */
  readonly id?: string;

  /**
   * @schema ElasticTranscoderUpdatePipelineNotificationsRequest#Notifications
   */
  readonly notifications?: ElasticTranscoderNotifications;

}

/**
 * Converts an object of type 'ElasticTranscoderUpdatePipelineNotificationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticTranscoderUpdatePipelineNotificationsRequest(obj: ElasticTranscoderUpdatePipelineNotificationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Notifications': toJson_ElasticTranscoderNotifications(obj.notifications),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticTranscoderUpdatePipelineNotificationsResponse
 */
export interface ElasticTranscoderUpdatePipelineNotificationsResponse {
  /**
   * @schema ElasticTranscoderUpdatePipelineNotificationsResponse#Pipeline
   */
  readonly pipeline?: ElasticTranscoderPipeline;

}

/**
 * Converts an object of type 'ElasticTranscoderUpdatePipelineNotificationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticTranscoderUpdatePipelineNotificationsResponse(obj: ElasticTranscoderUpdatePipelineNotificationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Pipeline': toJson_ElasticTranscoderPipeline(obj.pipeline),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticTranscoderUpdatePipelineStatusRequest
 */
export interface ElasticTranscoderUpdatePipelineStatusRequest {
  /**
   * @schema ElasticTranscoderUpdatePipelineStatusRequest#Id
   */
  readonly id?: string;

  /**
   * @schema ElasticTranscoderUpdatePipelineStatusRequest#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'ElasticTranscoderUpdatePipelineStatusRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticTranscoderUpdatePipelineStatusRequest(obj: ElasticTranscoderUpdatePipelineStatusRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticTranscoderUpdatePipelineStatusResponse
 */
export interface ElasticTranscoderUpdatePipelineStatusResponse {
  /**
   * @schema ElasticTranscoderUpdatePipelineStatusResponse#Pipeline
   */
  readonly pipeline?: ElasticTranscoderPipeline;

}

/**
 * Converts an object of type 'ElasticTranscoderUpdatePipelineStatusResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticTranscoderUpdatePipelineStatusResponse(obj: ElasticTranscoderUpdatePipelineStatusResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Pipeline': toJson_ElasticTranscoderPipeline(obj.pipeline),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticTranscoderJobInput
 */
export interface ElasticTranscoderJobInput {
  /**
   * @schema ElasticTranscoderJobInput#Key
   */
  readonly key?: string;

  /**
   * @schema ElasticTranscoderJobInput#FrameRate
   */
  readonly frameRate?: string;

  /**
   * @schema ElasticTranscoderJobInput#Resolution
   */
  readonly resolution?: string;

  /**
   * @schema ElasticTranscoderJobInput#AspectRatio
   */
  readonly aspectRatio?: string;

  /**
   * @schema ElasticTranscoderJobInput#Interlaced
   */
  readonly interlaced?: string;

  /**
   * @schema ElasticTranscoderJobInput#Container
   */
  readonly container?: string;

  /**
   * @schema ElasticTranscoderJobInput#Encryption
   */
  readonly encryption?: ElasticTranscoderEncryption;

  /**
   * @schema ElasticTranscoderJobInput#TimeSpan
   */
  readonly timeSpan?: ElasticTranscoderTimeSpan;

  /**
   * @schema ElasticTranscoderJobInput#InputCaptions
   */
  readonly inputCaptions?: ElasticTranscoderInputCaptions;

  /**
   * @schema ElasticTranscoderJobInput#DetectedProperties
   */
  readonly detectedProperties?: ElasticTranscoderDetectedProperties;

}

/**
 * Converts an object of type 'ElasticTranscoderJobInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticTranscoderJobInput(obj: ElasticTranscoderJobInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'FrameRate': obj.frameRate,
    'Resolution': obj.resolution,
    'AspectRatio': obj.aspectRatio,
    'Interlaced': obj.interlaced,
    'Container': obj.container,
    'Encryption': toJson_ElasticTranscoderEncryption(obj.encryption),
    'TimeSpan': toJson_ElasticTranscoderTimeSpan(obj.timeSpan),
    'InputCaptions': toJson_ElasticTranscoderInputCaptions(obj.inputCaptions),
    'DetectedProperties': toJson_ElasticTranscoderDetectedProperties(obj.detectedProperties),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticTranscoderCreateJobOutput
 */
export interface ElasticTranscoderCreateJobOutput {
  /**
   * @schema ElasticTranscoderCreateJobOutput#Key
   */
  readonly key?: string;

  /**
   * @schema ElasticTranscoderCreateJobOutput#ThumbnailPattern
   */
  readonly thumbnailPattern?: string;

  /**
   * @schema ElasticTranscoderCreateJobOutput#ThumbnailEncryption
   */
  readonly thumbnailEncryption?: ElasticTranscoderEncryption;

  /**
   * @schema ElasticTranscoderCreateJobOutput#Rotate
   */
  readonly rotate?: string;

  /**
   * @schema ElasticTranscoderCreateJobOutput#PresetId
   */
  readonly presetId?: string;

  /**
   * @schema ElasticTranscoderCreateJobOutput#SegmentDuration
   */
  readonly segmentDuration?: string;

  /**
   * @schema ElasticTranscoderCreateJobOutput#Watermarks
   */
  readonly watermarks?: ElasticTranscoderJobWatermark[];

  /**
   * @schema ElasticTranscoderCreateJobOutput#AlbumArt
   */
  readonly albumArt?: ElasticTranscoderJobAlbumArt;

  /**
   * @schema ElasticTranscoderCreateJobOutput#Composition
   */
  readonly composition?: ElasticTranscoderClip[];

  /**
   * @schema ElasticTranscoderCreateJobOutput#Captions
   */
  readonly captions?: ElasticTranscoderCaptions;

  /**
   * @schema ElasticTranscoderCreateJobOutput#Encryption
   */
  readonly encryption?: ElasticTranscoderEncryption;

}

/**
 * Converts an object of type 'ElasticTranscoderCreateJobOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticTranscoderCreateJobOutput(obj: ElasticTranscoderCreateJobOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'ThumbnailPattern': obj.thumbnailPattern,
    'ThumbnailEncryption': toJson_ElasticTranscoderEncryption(obj.thumbnailEncryption),
    'Rotate': obj.rotate,
    'PresetId': obj.presetId,
    'SegmentDuration': obj.segmentDuration,
    'Watermarks': obj.watermarks?.map(y => toJson_ElasticTranscoderJobWatermark(y)),
    'AlbumArt': toJson_ElasticTranscoderJobAlbumArt(obj.albumArt),
    'Composition': obj.composition?.map(y => toJson_ElasticTranscoderClip(y)),
    'Captions': toJson_ElasticTranscoderCaptions(obj.captions),
    'Encryption': toJson_ElasticTranscoderEncryption(obj.encryption),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticTranscoderCreateJobPlaylist
 */
export interface ElasticTranscoderCreateJobPlaylist {
  /**
   * @schema ElasticTranscoderCreateJobPlaylist#Name
   */
  readonly name?: string;

  /**
   * @schema ElasticTranscoderCreateJobPlaylist#Format
   */
  readonly format?: string;

  /**
   * @schema ElasticTranscoderCreateJobPlaylist#OutputKeys
   */
  readonly outputKeys?: string[];

  /**
   * @schema ElasticTranscoderCreateJobPlaylist#HlsContentProtection
   */
  readonly hlsContentProtection?: ElasticTranscoderHlsContentProtection;

  /**
   * @schema ElasticTranscoderCreateJobPlaylist#PlayReadyDrm
   */
  readonly playReadyDrm?: ElasticTranscoderPlayReadyDrm;

}

/**
 * Converts an object of type 'ElasticTranscoderCreateJobPlaylist' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticTranscoderCreateJobPlaylist(obj: ElasticTranscoderCreateJobPlaylist | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Format': obj.format,
    'OutputKeys': obj.outputKeys?.map(y => y),
    'HlsContentProtection': toJson_ElasticTranscoderHlsContentProtection(obj.hlsContentProtection),
    'PlayReadyDrm': toJson_ElasticTranscoderPlayReadyDrm(obj.playReadyDrm),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticTranscoderJob
 */
export interface ElasticTranscoderJob {
  /**
   * @schema ElasticTranscoderJob#Id
   */
  readonly id?: string;

  /**
   * @schema ElasticTranscoderJob#Arn
   */
  readonly arn?: string;

  /**
   * @schema ElasticTranscoderJob#PipelineId
   */
  readonly pipelineId?: string;

  /**
   * @schema ElasticTranscoderJob#Input
   */
  readonly input?: ElasticTranscoderJobInput;

  /**
   * @schema ElasticTranscoderJob#Inputs
   */
  readonly inputs?: ElasticTranscoderJobInput[];

  /**
   * @schema ElasticTranscoderJob#Output
   */
  readonly output?: ElasticTranscoderJobOutput;

  /**
   * @schema ElasticTranscoderJob#Outputs
   */
  readonly outputs?: ElasticTranscoderJobOutput[];

  /**
   * @schema ElasticTranscoderJob#OutputKeyPrefix
   */
  readonly outputKeyPrefix?: string;

  /**
   * @schema ElasticTranscoderJob#Playlists
   */
  readonly playlists?: ElasticTranscoderPlaylist[];

  /**
   * @schema ElasticTranscoderJob#Status
   */
  readonly status?: string;

  /**
   * @schema ElasticTranscoderJob#UserMetadata
   */
  readonly userMetadata?: { [key: string]: string };

  /**
   * @schema ElasticTranscoderJob#Timing
   */
  readonly timing?: ElasticTranscoderTiming;

}

/**
 * Converts an object of type 'ElasticTranscoderJob' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticTranscoderJob(obj: ElasticTranscoderJob | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Arn': obj.arn,
    'PipelineId': obj.pipelineId,
    'Input': toJson_ElasticTranscoderJobInput(obj.input),
    'Inputs': obj.inputs?.map(y => toJson_ElasticTranscoderJobInput(y)),
    'Output': toJson_ElasticTranscoderJobOutput(obj.output),
    'Outputs': obj.outputs?.map(y => toJson_ElasticTranscoderJobOutput(y)),
    'OutputKeyPrefix': obj.outputKeyPrefix,
    'Playlists': obj.playlists?.map(y => toJson_ElasticTranscoderPlaylist(y)),
    'Status': obj.status,
    'UserMetadata': ((obj.userMetadata) === undefined) ? undefined : (Object.entries(obj.userMetadata).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'Timing': toJson_ElasticTranscoderTiming(obj.timing),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticTranscoderNotifications
 */
export interface ElasticTranscoderNotifications {
  /**
   * @schema ElasticTranscoderNotifications#Progressing
   */
  readonly progressing?: string;

  /**
   * @schema ElasticTranscoderNotifications#Completed
   */
  readonly completed?: string;

  /**
   * @schema ElasticTranscoderNotifications#Warning
   */
  readonly warning?: string;

  /**
   * @schema ElasticTranscoderNotifications#Error
   */
  readonly error?: string;

}

/**
 * Converts an object of type 'ElasticTranscoderNotifications' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticTranscoderNotifications(obj: ElasticTranscoderNotifications | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Progressing': obj.progressing,
    'Completed': obj.completed,
    'Warning': obj.warning,
    'Error': obj.error,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticTranscoderPipelineOutputConfig
 */
export interface ElasticTranscoderPipelineOutputConfig {
  /**
   * @schema ElasticTranscoderPipelineOutputConfig#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema ElasticTranscoderPipelineOutputConfig#StorageClass
   */
  readonly storageClass?: string;

  /**
   * @schema ElasticTranscoderPipelineOutputConfig#Permissions
   */
  readonly permissions?: ElasticTranscoderPermission[];

}

/**
 * Converts an object of type 'ElasticTranscoderPipelineOutputConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticTranscoderPipelineOutputConfig(obj: ElasticTranscoderPipelineOutputConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'StorageClass': obj.storageClass,
    'Permissions': obj.permissions?.map(y => toJson_ElasticTranscoderPermission(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticTranscoderPipeline
 */
export interface ElasticTranscoderPipeline {
  /**
   * @schema ElasticTranscoderPipeline#Id
   */
  readonly id?: string;

  /**
   * @schema ElasticTranscoderPipeline#Arn
   */
  readonly arn?: string;

  /**
   * @schema ElasticTranscoderPipeline#Name
   */
  readonly name?: string;

  /**
   * @schema ElasticTranscoderPipeline#Status
   */
  readonly status?: string;

  /**
   * @schema ElasticTranscoderPipeline#InputBucket
   */
  readonly inputBucket?: string;

  /**
   * @schema ElasticTranscoderPipeline#OutputBucket
   */
  readonly outputBucket?: string;

  /**
   * @schema ElasticTranscoderPipeline#Role
   */
  readonly role?: string;

  /**
   * @schema ElasticTranscoderPipeline#AwsKmsKeyArn
   */
  readonly awsKmsKeyArn?: string;

  /**
   * @schema ElasticTranscoderPipeline#Notifications
   */
  readonly notifications?: ElasticTranscoderNotifications;

  /**
   * @schema ElasticTranscoderPipeline#ContentConfig
   */
  readonly contentConfig?: ElasticTranscoderPipelineOutputConfig;

  /**
   * @schema ElasticTranscoderPipeline#ThumbnailConfig
   */
  readonly thumbnailConfig?: ElasticTranscoderPipelineOutputConfig;

}

/**
 * Converts an object of type 'ElasticTranscoderPipeline' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticTranscoderPipeline(obj: ElasticTranscoderPipeline | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Arn': obj.arn,
    'Name': obj.name,
    'Status': obj.status,
    'InputBucket': obj.inputBucket,
    'OutputBucket': obj.outputBucket,
    'Role': obj.role,
    'AwsKmsKeyArn': obj.awsKmsKeyArn,
    'Notifications': toJson_ElasticTranscoderNotifications(obj.notifications),
    'ContentConfig': toJson_ElasticTranscoderPipelineOutputConfig(obj.contentConfig),
    'ThumbnailConfig': toJson_ElasticTranscoderPipelineOutputConfig(obj.thumbnailConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticTranscoderWarning
 */
export interface ElasticTranscoderWarning {
  /**
   * @schema ElasticTranscoderWarning#Code
   */
  readonly code?: string;

  /**
   * @schema ElasticTranscoderWarning#Message
   */
  readonly message?: string;

}

/**
 * Converts an object of type 'ElasticTranscoderWarning' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticTranscoderWarning(obj: ElasticTranscoderWarning | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Code': obj.code,
    'Message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticTranscoderVideoParameters
 */
export interface ElasticTranscoderVideoParameters {
  /**
   * @schema ElasticTranscoderVideoParameters#Codec
   */
  readonly codec?: string;

  /**
   * @schema ElasticTranscoderVideoParameters#CodecOptions
   */
  readonly codecOptions?: { [key: string]: string };

  /**
   * @schema ElasticTranscoderVideoParameters#KeyframesMaxDist
   */
  readonly keyframesMaxDist?: string;

  /**
   * @schema ElasticTranscoderVideoParameters#FixedGOP
   */
  readonly fixedGop?: string;

  /**
   * @schema ElasticTranscoderVideoParameters#BitRate
   */
  readonly bitRate?: string;

  /**
   * @schema ElasticTranscoderVideoParameters#FrameRate
   */
  readonly frameRate?: string;

  /**
   * @schema ElasticTranscoderVideoParameters#MaxFrameRate
   */
  readonly maxFrameRate?: string;

  /**
   * @schema ElasticTranscoderVideoParameters#Resolution
   */
  readonly resolution?: string;

  /**
   * @schema ElasticTranscoderVideoParameters#AspectRatio
   */
  readonly aspectRatio?: string;

  /**
   * @schema ElasticTranscoderVideoParameters#MaxWidth
   */
  readonly maxWidth?: string;

  /**
   * @schema ElasticTranscoderVideoParameters#MaxHeight
   */
  readonly maxHeight?: string;

  /**
   * @schema ElasticTranscoderVideoParameters#DisplayAspectRatio
   */
  readonly displayAspectRatio?: string;

  /**
   * @schema ElasticTranscoderVideoParameters#SizingPolicy
   */
  readonly sizingPolicy?: string;

  /**
   * @schema ElasticTranscoderVideoParameters#PaddingPolicy
   */
  readonly paddingPolicy?: string;

  /**
   * @schema ElasticTranscoderVideoParameters#Watermarks
   */
  readonly watermarks?: ElasticTranscoderPresetWatermark[];

}

/**
 * Converts an object of type 'ElasticTranscoderVideoParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticTranscoderVideoParameters(obj: ElasticTranscoderVideoParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Codec': obj.codec,
    'CodecOptions': ((obj.codecOptions) === undefined) ? undefined : (Object.entries(obj.codecOptions).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'KeyframesMaxDist': obj.keyframesMaxDist,
    'FixedGOP': obj.fixedGop,
    'BitRate': obj.bitRate,
    'FrameRate': obj.frameRate,
    'MaxFrameRate': obj.maxFrameRate,
    'Resolution': obj.resolution,
    'AspectRatio': obj.aspectRatio,
    'MaxWidth': obj.maxWidth,
    'MaxHeight': obj.maxHeight,
    'DisplayAspectRatio': obj.displayAspectRatio,
    'SizingPolicy': obj.sizingPolicy,
    'PaddingPolicy': obj.paddingPolicy,
    'Watermarks': obj.watermarks?.map(y => toJson_ElasticTranscoderPresetWatermark(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticTranscoderAudioParameters
 */
export interface ElasticTranscoderAudioParameters {
  /**
   * @schema ElasticTranscoderAudioParameters#Codec
   */
  readonly codec?: string;

  /**
   * @schema ElasticTranscoderAudioParameters#SampleRate
   */
  readonly sampleRate?: string;

  /**
   * @schema ElasticTranscoderAudioParameters#BitRate
   */
  readonly bitRate?: string;

  /**
   * @schema ElasticTranscoderAudioParameters#Channels
   */
  readonly channels?: string;

  /**
   * @schema ElasticTranscoderAudioParameters#AudioPackingMode
   */
  readonly audioPackingMode?: string;

  /**
   * @schema ElasticTranscoderAudioParameters#CodecOptions
   */
  readonly codecOptions?: ElasticTranscoderAudioCodecOptions;

}

/**
 * Converts an object of type 'ElasticTranscoderAudioParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticTranscoderAudioParameters(obj: ElasticTranscoderAudioParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Codec': obj.codec,
    'SampleRate': obj.sampleRate,
    'BitRate': obj.bitRate,
    'Channels': obj.channels,
    'AudioPackingMode': obj.audioPackingMode,
    'CodecOptions': toJson_ElasticTranscoderAudioCodecOptions(obj.codecOptions),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticTranscoderThumbnails
 */
export interface ElasticTranscoderThumbnails {
  /**
   * @schema ElasticTranscoderThumbnails#Format
   */
  readonly format?: string;

  /**
   * @schema ElasticTranscoderThumbnails#Interval
   */
  readonly interval?: string;

  /**
   * @schema ElasticTranscoderThumbnails#Resolution
   */
  readonly resolution?: string;

  /**
   * @schema ElasticTranscoderThumbnails#AspectRatio
   */
  readonly aspectRatio?: string;

  /**
   * @schema ElasticTranscoderThumbnails#MaxWidth
   */
  readonly maxWidth?: string;

  /**
   * @schema ElasticTranscoderThumbnails#MaxHeight
   */
  readonly maxHeight?: string;

  /**
   * @schema ElasticTranscoderThumbnails#SizingPolicy
   */
  readonly sizingPolicy?: string;

  /**
   * @schema ElasticTranscoderThumbnails#PaddingPolicy
   */
  readonly paddingPolicy?: string;

}

/**
 * Converts an object of type 'ElasticTranscoderThumbnails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticTranscoderThumbnails(obj: ElasticTranscoderThumbnails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Format': obj.format,
    'Interval': obj.interval,
    'Resolution': obj.resolution,
    'AspectRatio': obj.aspectRatio,
    'MaxWidth': obj.maxWidth,
    'MaxHeight': obj.maxHeight,
    'SizingPolicy': obj.sizingPolicy,
    'PaddingPolicy': obj.paddingPolicy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticTranscoderPreset
 */
export interface ElasticTranscoderPreset {
  /**
   * @schema ElasticTranscoderPreset#Id
   */
  readonly id?: string;

  /**
   * @schema ElasticTranscoderPreset#Arn
   */
  readonly arn?: string;

  /**
   * @schema ElasticTranscoderPreset#Name
   */
  readonly name?: string;

  /**
   * @schema ElasticTranscoderPreset#Description
   */
  readonly description?: string;

  /**
   * @schema ElasticTranscoderPreset#Container
   */
  readonly container?: string;

  /**
   * @schema ElasticTranscoderPreset#Audio
   */
  readonly audio?: ElasticTranscoderAudioParameters;

  /**
   * @schema ElasticTranscoderPreset#Video
   */
  readonly video?: ElasticTranscoderVideoParameters;

  /**
   * @schema ElasticTranscoderPreset#Thumbnails
   */
  readonly thumbnails?: ElasticTranscoderThumbnails;

  /**
   * @schema ElasticTranscoderPreset#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'ElasticTranscoderPreset' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticTranscoderPreset(obj: ElasticTranscoderPreset | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Arn': obj.arn,
    'Name': obj.name,
    'Description': obj.description,
    'Container': obj.container,
    'Audio': toJson_ElasticTranscoderAudioParameters(obj.audio),
    'Video': toJson_ElasticTranscoderVideoParameters(obj.video),
    'Thumbnails': toJson_ElasticTranscoderThumbnails(obj.thumbnails),
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticTranscoderEncryption
 */
export interface ElasticTranscoderEncryption {
  /**
   * @schema ElasticTranscoderEncryption#Mode
   */
  readonly mode?: string;

  /**
   * @schema ElasticTranscoderEncryption#Key
   */
  readonly key?: string;

  /**
   * @schema ElasticTranscoderEncryption#KeyMd5
   */
  readonly keyMd5?: string;

  /**
   * @schema ElasticTranscoderEncryption#InitializationVector
   */
  readonly initializationVector?: string;

}

/**
 * Converts an object of type 'ElasticTranscoderEncryption' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticTranscoderEncryption(obj: ElasticTranscoderEncryption | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Mode': obj.mode,
    'Key': obj.key,
    'KeyMd5': obj.keyMd5,
    'InitializationVector': obj.initializationVector,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticTranscoderTimeSpan
 */
export interface ElasticTranscoderTimeSpan {
  /**
   * @schema ElasticTranscoderTimeSpan#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema ElasticTranscoderTimeSpan#Duration
   */
  readonly duration?: string;

}

/**
 * Converts an object of type 'ElasticTranscoderTimeSpan' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticTranscoderTimeSpan(obj: ElasticTranscoderTimeSpan | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StartTime': obj.startTime,
    'Duration': obj.duration,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticTranscoderInputCaptions
 */
export interface ElasticTranscoderInputCaptions {
  /**
   * @schema ElasticTranscoderInputCaptions#MergePolicy
   */
  readonly mergePolicy?: string;

  /**
   * @schema ElasticTranscoderInputCaptions#CaptionSources
   */
  readonly captionSources?: ElasticTranscoderCaptionSource[];

}

/**
 * Converts an object of type 'ElasticTranscoderInputCaptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticTranscoderInputCaptions(obj: ElasticTranscoderInputCaptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MergePolicy': obj.mergePolicy,
    'CaptionSources': obj.captionSources?.map(y => toJson_ElasticTranscoderCaptionSource(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticTranscoderDetectedProperties
 */
export interface ElasticTranscoderDetectedProperties {
  /**
   * @schema ElasticTranscoderDetectedProperties#Width
   */
  readonly width?: number;

  /**
   * @schema ElasticTranscoderDetectedProperties#Height
   */
  readonly height?: number;

  /**
   * @schema ElasticTranscoderDetectedProperties#FrameRate
   */
  readonly frameRate?: string;

  /**
   * @schema ElasticTranscoderDetectedProperties#FileSize
   */
  readonly fileSize?: number;

  /**
   * @schema ElasticTranscoderDetectedProperties#DurationMillis
   */
  readonly durationMillis?: number;

}

/**
 * Converts an object of type 'ElasticTranscoderDetectedProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticTranscoderDetectedProperties(obj: ElasticTranscoderDetectedProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Width': obj.width,
    'Height': obj.height,
    'FrameRate': obj.frameRate,
    'FileSize': obj.fileSize,
    'DurationMillis': obj.durationMillis,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticTranscoderJobWatermark
 */
export interface ElasticTranscoderJobWatermark {
  /**
   * @schema ElasticTranscoderJobWatermark#PresetWatermarkId
   */
  readonly presetWatermarkId?: string;

  /**
   * @schema ElasticTranscoderJobWatermark#InputKey
   */
  readonly inputKey?: string;

  /**
   * @schema ElasticTranscoderJobWatermark#Encryption
   */
  readonly encryption?: ElasticTranscoderEncryption;

}

/**
 * Converts an object of type 'ElasticTranscoderJobWatermark' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticTranscoderJobWatermark(obj: ElasticTranscoderJobWatermark | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PresetWatermarkId': obj.presetWatermarkId,
    'InputKey': obj.inputKey,
    'Encryption': toJson_ElasticTranscoderEncryption(obj.encryption),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticTranscoderJobAlbumArt
 */
export interface ElasticTranscoderJobAlbumArt {
  /**
   * @schema ElasticTranscoderJobAlbumArt#MergePolicy
   */
  readonly mergePolicy?: string;

  /**
   * @schema ElasticTranscoderJobAlbumArt#Artwork
   */
  readonly artwork?: ElasticTranscoderArtwork[];

}

/**
 * Converts an object of type 'ElasticTranscoderJobAlbumArt' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticTranscoderJobAlbumArt(obj: ElasticTranscoderJobAlbumArt | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MergePolicy': obj.mergePolicy,
    'Artwork': obj.artwork?.map(y => toJson_ElasticTranscoderArtwork(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticTranscoderClip
 */
export interface ElasticTranscoderClip {
  /**
   * @schema ElasticTranscoderClip#TimeSpan
   */
  readonly timeSpan?: ElasticTranscoderTimeSpan;

}

/**
 * Converts an object of type 'ElasticTranscoderClip' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticTranscoderClip(obj: ElasticTranscoderClip | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TimeSpan': toJson_ElasticTranscoderTimeSpan(obj.timeSpan),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticTranscoderCaptions
 */
export interface ElasticTranscoderCaptions {
  /**
   * @schema ElasticTranscoderCaptions#MergePolicy
   */
  readonly mergePolicy?: string;

  /**
   * @schema ElasticTranscoderCaptions#CaptionSources
   */
  readonly captionSources?: ElasticTranscoderCaptionSource[];

  /**
   * @schema ElasticTranscoderCaptions#CaptionFormats
   */
  readonly captionFormats?: ElasticTranscoderCaptionFormat[];

}

/**
 * Converts an object of type 'ElasticTranscoderCaptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticTranscoderCaptions(obj: ElasticTranscoderCaptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MergePolicy': obj.mergePolicy,
    'CaptionSources': obj.captionSources?.map(y => toJson_ElasticTranscoderCaptionSource(y)),
    'CaptionFormats': obj.captionFormats?.map(y => toJson_ElasticTranscoderCaptionFormat(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticTranscoderHlsContentProtection
 */
export interface ElasticTranscoderHlsContentProtection {
  /**
   * @schema ElasticTranscoderHlsContentProtection#Method
   */
  readonly method?: string;

  /**
   * @schema ElasticTranscoderHlsContentProtection#Key
   */
  readonly key?: string;

  /**
   * @schema ElasticTranscoderHlsContentProtection#KeyMd5
   */
  readonly keyMd5?: string;

  /**
   * @schema ElasticTranscoderHlsContentProtection#InitializationVector
   */
  readonly initializationVector?: string;

  /**
   * @schema ElasticTranscoderHlsContentProtection#LicenseAcquisitionUrl
   */
  readonly licenseAcquisitionUrl?: string;

  /**
   * @schema ElasticTranscoderHlsContentProtection#KeyStoragePolicy
   */
  readonly keyStoragePolicy?: string;

}

/**
 * Converts an object of type 'ElasticTranscoderHlsContentProtection' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticTranscoderHlsContentProtection(obj: ElasticTranscoderHlsContentProtection | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Method': obj.method,
    'Key': obj.key,
    'KeyMd5': obj.keyMd5,
    'InitializationVector': obj.initializationVector,
    'LicenseAcquisitionUrl': obj.licenseAcquisitionUrl,
    'KeyStoragePolicy': obj.keyStoragePolicy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticTranscoderPlayReadyDrm
 */
export interface ElasticTranscoderPlayReadyDrm {
  /**
   * @schema ElasticTranscoderPlayReadyDrm#Format
   */
  readonly format?: string;

  /**
   * @schema ElasticTranscoderPlayReadyDrm#Key
   */
  readonly key?: string;

  /**
   * @schema ElasticTranscoderPlayReadyDrm#KeyMd5
   */
  readonly keyMd5?: string;

  /**
   * @schema ElasticTranscoderPlayReadyDrm#KeyId
   */
  readonly keyId?: string;

  /**
   * @schema ElasticTranscoderPlayReadyDrm#InitializationVector
   */
  readonly initializationVector?: string;

  /**
   * @schema ElasticTranscoderPlayReadyDrm#LicenseAcquisitionUrl
   */
  readonly licenseAcquisitionUrl?: string;

}

/**
 * Converts an object of type 'ElasticTranscoderPlayReadyDrm' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticTranscoderPlayReadyDrm(obj: ElasticTranscoderPlayReadyDrm | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Format': obj.format,
    'Key': obj.key,
    'KeyMd5': obj.keyMd5,
    'KeyId': obj.keyId,
    'InitializationVector': obj.initializationVector,
    'LicenseAcquisitionUrl': obj.licenseAcquisitionUrl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticTranscoderJobOutput
 */
export interface ElasticTranscoderJobOutput {
  /**
   * @schema ElasticTranscoderJobOutput#Id
   */
  readonly id?: string;

  /**
   * @schema ElasticTranscoderJobOutput#Key
   */
  readonly key?: string;

  /**
   * @schema ElasticTranscoderJobOutput#ThumbnailPattern
   */
  readonly thumbnailPattern?: string;

  /**
   * @schema ElasticTranscoderJobOutput#ThumbnailEncryption
   */
  readonly thumbnailEncryption?: ElasticTranscoderEncryption;

  /**
   * @schema ElasticTranscoderJobOutput#Rotate
   */
  readonly rotate?: string;

  /**
   * @schema ElasticTranscoderJobOutput#PresetId
   */
  readonly presetId?: string;

  /**
   * @schema ElasticTranscoderJobOutput#SegmentDuration
   */
  readonly segmentDuration?: string;

  /**
   * @schema ElasticTranscoderJobOutput#Status
   */
  readonly status?: string;

  /**
   * @schema ElasticTranscoderJobOutput#StatusDetail
   */
  readonly statusDetail?: string;

  /**
   * @schema ElasticTranscoderJobOutput#Duration
   */
  readonly duration?: number;

  /**
   * @schema ElasticTranscoderJobOutput#Width
   */
  readonly width?: number;

  /**
   * @schema ElasticTranscoderJobOutput#Height
   */
  readonly height?: number;

  /**
   * @schema ElasticTranscoderJobOutput#FrameRate
   */
  readonly frameRate?: string;

  /**
   * @schema ElasticTranscoderJobOutput#FileSize
   */
  readonly fileSize?: number;

  /**
   * @schema ElasticTranscoderJobOutput#DurationMillis
   */
  readonly durationMillis?: number;

  /**
   * @schema ElasticTranscoderJobOutput#Watermarks
   */
  readonly watermarks?: ElasticTranscoderJobWatermark[];

  /**
   * @schema ElasticTranscoderJobOutput#AlbumArt
   */
  readonly albumArt?: ElasticTranscoderJobAlbumArt;

  /**
   * @schema ElasticTranscoderJobOutput#Composition
   */
  readonly composition?: ElasticTranscoderClip[];

  /**
   * @schema ElasticTranscoderJobOutput#Captions
   */
  readonly captions?: ElasticTranscoderCaptions;

  /**
   * @schema ElasticTranscoderJobOutput#Encryption
   */
  readonly encryption?: ElasticTranscoderEncryption;

  /**
   * @schema ElasticTranscoderJobOutput#AppliedColorSpaceConversion
   */
  readonly appliedColorSpaceConversion?: string;

}

/**
 * Converts an object of type 'ElasticTranscoderJobOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticTranscoderJobOutput(obj: ElasticTranscoderJobOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Key': obj.key,
    'ThumbnailPattern': obj.thumbnailPattern,
    'ThumbnailEncryption': toJson_ElasticTranscoderEncryption(obj.thumbnailEncryption),
    'Rotate': obj.rotate,
    'PresetId': obj.presetId,
    'SegmentDuration': obj.segmentDuration,
    'Status': obj.status,
    'StatusDetail': obj.statusDetail,
    'Duration': obj.duration,
    'Width': obj.width,
    'Height': obj.height,
    'FrameRate': obj.frameRate,
    'FileSize': obj.fileSize,
    'DurationMillis': obj.durationMillis,
    'Watermarks': obj.watermarks?.map(y => toJson_ElasticTranscoderJobWatermark(y)),
    'AlbumArt': toJson_ElasticTranscoderJobAlbumArt(obj.albumArt),
    'Composition': obj.composition?.map(y => toJson_ElasticTranscoderClip(y)),
    'Captions': toJson_ElasticTranscoderCaptions(obj.captions),
    'Encryption': toJson_ElasticTranscoderEncryption(obj.encryption),
    'AppliedColorSpaceConversion': obj.appliedColorSpaceConversion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticTranscoderPlaylist
 */
export interface ElasticTranscoderPlaylist {
  /**
   * @schema ElasticTranscoderPlaylist#Name
   */
  readonly name?: string;

  /**
   * @schema ElasticTranscoderPlaylist#Format
   */
  readonly format?: string;

  /**
   * @schema ElasticTranscoderPlaylist#OutputKeys
   */
  readonly outputKeys?: string[];

  /**
   * @schema ElasticTranscoderPlaylist#HlsContentProtection
   */
  readonly hlsContentProtection?: ElasticTranscoderHlsContentProtection;

  /**
   * @schema ElasticTranscoderPlaylist#PlayReadyDrm
   */
  readonly playReadyDrm?: ElasticTranscoderPlayReadyDrm;

  /**
   * @schema ElasticTranscoderPlaylist#Status
   */
  readonly status?: string;

  /**
   * @schema ElasticTranscoderPlaylist#StatusDetail
   */
  readonly statusDetail?: string;

}

/**
 * Converts an object of type 'ElasticTranscoderPlaylist' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticTranscoderPlaylist(obj: ElasticTranscoderPlaylist | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Format': obj.format,
    'OutputKeys': obj.outputKeys?.map(y => y),
    'HlsContentProtection': toJson_ElasticTranscoderHlsContentProtection(obj.hlsContentProtection),
    'PlayReadyDrm': toJson_ElasticTranscoderPlayReadyDrm(obj.playReadyDrm),
    'Status': obj.status,
    'StatusDetail': obj.statusDetail,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticTranscoderTiming
 */
export interface ElasticTranscoderTiming {
  /**
   * @schema ElasticTranscoderTiming#SubmitTimeMillis
   */
  readonly submitTimeMillis?: number;

  /**
   * @schema ElasticTranscoderTiming#StartTimeMillis
   */
  readonly startTimeMillis?: number;

  /**
   * @schema ElasticTranscoderTiming#FinishTimeMillis
   */
  readonly finishTimeMillis?: number;

}

/**
 * Converts an object of type 'ElasticTranscoderTiming' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticTranscoderTiming(obj: ElasticTranscoderTiming | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SubmitTimeMillis': obj.submitTimeMillis,
    'StartTimeMillis': obj.startTimeMillis,
    'FinishTimeMillis': obj.finishTimeMillis,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticTranscoderPermission
 */
export interface ElasticTranscoderPermission {
  /**
   * @schema ElasticTranscoderPermission#GranteeType
   */
  readonly granteeType?: string;

  /**
   * @schema ElasticTranscoderPermission#Grantee
   */
  readonly grantee?: string;

  /**
   * @schema ElasticTranscoderPermission#Access
   */
  readonly access?: string[];

}

/**
 * Converts an object of type 'ElasticTranscoderPermission' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticTranscoderPermission(obj: ElasticTranscoderPermission | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GranteeType': obj.granteeType,
    'Grantee': obj.grantee,
    'Access': obj.access?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticTranscoderPresetWatermark
 */
export interface ElasticTranscoderPresetWatermark {
  /**
   * @schema ElasticTranscoderPresetWatermark#Id
   */
  readonly id?: string;

  /**
   * @schema ElasticTranscoderPresetWatermark#MaxWidth
   */
  readonly maxWidth?: string;

  /**
   * @schema ElasticTranscoderPresetWatermark#MaxHeight
   */
  readonly maxHeight?: string;

  /**
   * @schema ElasticTranscoderPresetWatermark#SizingPolicy
   */
  readonly sizingPolicy?: string;

  /**
   * @schema ElasticTranscoderPresetWatermark#HorizontalAlign
   */
  readonly horizontalAlign?: string;

  /**
   * @schema ElasticTranscoderPresetWatermark#HorizontalOffset
   */
  readonly horizontalOffset?: string;

  /**
   * @schema ElasticTranscoderPresetWatermark#VerticalAlign
   */
  readonly verticalAlign?: string;

  /**
   * @schema ElasticTranscoderPresetWatermark#VerticalOffset
   */
  readonly verticalOffset?: string;

  /**
   * @schema ElasticTranscoderPresetWatermark#Opacity
   */
  readonly opacity?: string;

  /**
   * @schema ElasticTranscoderPresetWatermark#Target
   */
  readonly target?: string;

}

/**
 * Converts an object of type 'ElasticTranscoderPresetWatermark' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticTranscoderPresetWatermark(obj: ElasticTranscoderPresetWatermark | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'MaxWidth': obj.maxWidth,
    'MaxHeight': obj.maxHeight,
    'SizingPolicy': obj.sizingPolicy,
    'HorizontalAlign': obj.horizontalAlign,
    'HorizontalOffset': obj.horizontalOffset,
    'VerticalAlign': obj.verticalAlign,
    'VerticalOffset': obj.verticalOffset,
    'Opacity': obj.opacity,
    'Target': obj.target,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticTranscoderAudioCodecOptions
 */
export interface ElasticTranscoderAudioCodecOptions {
  /**
   * @schema ElasticTranscoderAudioCodecOptions#Profile
   */
  readonly profile?: string;

  /**
   * @schema ElasticTranscoderAudioCodecOptions#BitDepth
   */
  readonly bitDepth?: string;

  /**
   * @schema ElasticTranscoderAudioCodecOptions#BitOrder
   */
  readonly bitOrder?: string;

  /**
   * @schema ElasticTranscoderAudioCodecOptions#Signed
   */
  readonly signed?: string;

}

/**
 * Converts an object of type 'ElasticTranscoderAudioCodecOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticTranscoderAudioCodecOptions(obj: ElasticTranscoderAudioCodecOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Profile': obj.profile,
    'BitDepth': obj.bitDepth,
    'BitOrder': obj.bitOrder,
    'Signed': obj.signed,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticTranscoderCaptionSource
 */
export interface ElasticTranscoderCaptionSource {
  /**
   * @schema ElasticTranscoderCaptionSource#Key
   */
  readonly key?: string;

  /**
   * @schema ElasticTranscoderCaptionSource#Language
   */
  readonly language?: string;

  /**
   * @schema ElasticTranscoderCaptionSource#TimeOffset
   */
  readonly timeOffset?: string;

  /**
   * @schema ElasticTranscoderCaptionSource#Label
   */
  readonly label?: string;

  /**
   * @schema ElasticTranscoderCaptionSource#Encryption
   */
  readonly encryption?: ElasticTranscoderEncryption;

}

/**
 * Converts an object of type 'ElasticTranscoderCaptionSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticTranscoderCaptionSource(obj: ElasticTranscoderCaptionSource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'Language': obj.language,
    'TimeOffset': obj.timeOffset,
    'Label': obj.label,
    'Encryption': toJson_ElasticTranscoderEncryption(obj.encryption),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticTranscoderArtwork
 */
export interface ElasticTranscoderArtwork {
  /**
   * @schema ElasticTranscoderArtwork#InputKey
   */
  readonly inputKey?: string;

  /**
   * @schema ElasticTranscoderArtwork#MaxWidth
   */
  readonly maxWidth?: string;

  /**
   * @schema ElasticTranscoderArtwork#MaxHeight
   */
  readonly maxHeight?: string;

  /**
   * @schema ElasticTranscoderArtwork#SizingPolicy
   */
  readonly sizingPolicy?: string;

  /**
   * @schema ElasticTranscoderArtwork#PaddingPolicy
   */
  readonly paddingPolicy?: string;

  /**
   * @schema ElasticTranscoderArtwork#AlbumArtFormat
   */
  readonly albumArtFormat?: string;

  /**
   * @schema ElasticTranscoderArtwork#Encryption
   */
  readonly encryption?: ElasticTranscoderEncryption;

}

/**
 * Converts an object of type 'ElasticTranscoderArtwork' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticTranscoderArtwork(obj: ElasticTranscoderArtwork | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InputKey': obj.inputKey,
    'MaxWidth': obj.maxWidth,
    'MaxHeight': obj.maxHeight,
    'SizingPolicy': obj.sizingPolicy,
    'PaddingPolicy': obj.paddingPolicy,
    'AlbumArtFormat': obj.albumArtFormat,
    'Encryption': toJson_ElasticTranscoderEncryption(obj.encryption),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ElasticTranscoderCaptionFormat
 */
export interface ElasticTranscoderCaptionFormat {
  /**
   * @schema ElasticTranscoderCaptionFormat#Format
   */
  readonly format?: string;

  /**
   * @schema ElasticTranscoderCaptionFormat#Pattern
   */
  readonly pattern?: string;

  /**
   * @schema ElasticTranscoderCaptionFormat#Encryption
   */
  readonly encryption?: ElasticTranscoderEncryption;

}

/**
 * Converts an object of type 'ElasticTranscoderCaptionFormat' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ElasticTranscoderCaptionFormat(obj: ElasticTranscoderCaptionFormat | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Format': obj.format,
    'Pattern': obj.pattern,
    'Encryption': toJson_ElasticTranscoderEncryption(obj.encryption),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
