/**
 * @schema RekognitionCompareFacesRequest
 */
export interface RekognitionCompareFacesRequest {
  /**
   * @schema RekognitionCompareFacesRequest#SourceImage
   */
  readonly sourceImage?: RekognitionImage;

  /**
   * @schema RekognitionCompareFacesRequest#TargetImage
   */
  readonly targetImage?: RekognitionImage;

  /**
   * @schema RekognitionCompareFacesRequest#SimilarityThreshold
   */
  readonly similarityThreshold?: number;

  /**
   * @schema RekognitionCompareFacesRequest#QualityFilter
   */
  readonly qualityFilter?: string;

}

/**
 * Converts an object of type 'RekognitionCompareFacesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionCompareFacesRequest(obj: RekognitionCompareFacesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SourceImage': toJson_RekognitionImage(obj.sourceImage),
    'TargetImage': toJson_RekognitionImage(obj.targetImage),
    'SimilarityThreshold': obj.similarityThreshold,
    'QualityFilter': obj.qualityFilter,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionCompareFacesResponse
 */
export interface RekognitionCompareFacesResponse {
  /**
   * @schema RekognitionCompareFacesResponse#SourceImageFace
   */
  readonly sourceImageFace?: RekognitionComparedSourceImageFace;

  /**
   * @schema RekognitionCompareFacesResponse#FaceMatches
   */
  readonly faceMatches?: RekognitionCompareFacesMatch[];

  /**
   * @schema RekognitionCompareFacesResponse#UnmatchedFaces
   */
  readonly unmatchedFaces?: RekognitionComparedFace[];

  /**
   * @schema RekognitionCompareFacesResponse#SourceImageOrientationCorrection
   */
  readonly sourceImageOrientationCorrection?: string;

  /**
   * @schema RekognitionCompareFacesResponse#TargetImageOrientationCorrection
   */
  readonly targetImageOrientationCorrection?: string;

}

/**
 * Converts an object of type 'RekognitionCompareFacesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionCompareFacesResponse(obj: RekognitionCompareFacesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SourceImageFace': toJson_RekognitionComparedSourceImageFace(obj.sourceImageFace),
    'FaceMatches': obj.faceMatches?.map(y => toJson_RekognitionCompareFacesMatch(y)),
    'UnmatchedFaces': obj.unmatchedFaces?.map(y => toJson_RekognitionComparedFace(y)),
    'SourceImageOrientationCorrection': obj.sourceImageOrientationCorrection,
    'TargetImageOrientationCorrection': obj.targetImageOrientationCorrection,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionCreateCollectionRequest
 */
export interface RekognitionCreateCollectionRequest {
  /**
   * @schema RekognitionCreateCollectionRequest#CollectionId
   */
  readonly collectionId?: string;

  /**
   * @schema RekognitionCreateCollectionRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'RekognitionCreateCollectionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionCreateCollectionRequest(obj: RekognitionCreateCollectionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CollectionId': obj.collectionId,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionCreateCollectionResponse
 */
export interface RekognitionCreateCollectionResponse {
  /**
   * @schema RekognitionCreateCollectionResponse#StatusCode
   */
  readonly statusCode?: number;

  /**
   * @schema RekognitionCreateCollectionResponse#CollectionArn
   */
  readonly collectionArn?: string;

  /**
   * @schema RekognitionCreateCollectionResponse#FaceModelVersion
   */
  readonly faceModelVersion?: string;

}

/**
 * Converts an object of type 'RekognitionCreateCollectionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionCreateCollectionResponse(obj: RekognitionCreateCollectionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StatusCode': obj.statusCode,
    'CollectionArn': obj.collectionArn,
    'FaceModelVersion': obj.faceModelVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionCreateProjectRequest
 */
export interface RekognitionCreateProjectRequest {
  /**
   * @schema RekognitionCreateProjectRequest#ProjectName
   */
  readonly projectName?: string;

}

/**
 * Converts an object of type 'RekognitionCreateProjectRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionCreateProjectRequest(obj: RekognitionCreateProjectRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProjectName': obj.projectName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionCreateProjectResponse
 */
export interface RekognitionCreateProjectResponse {
  /**
   * @schema RekognitionCreateProjectResponse#ProjectArn
   */
  readonly projectArn?: string;

}

/**
 * Converts an object of type 'RekognitionCreateProjectResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionCreateProjectResponse(obj: RekognitionCreateProjectResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProjectArn': obj.projectArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionCreateProjectVersionRequest
 */
export interface RekognitionCreateProjectVersionRequest {
  /**
   * @schema RekognitionCreateProjectVersionRequest#ProjectArn
   */
  readonly projectArn?: string;

  /**
   * @schema RekognitionCreateProjectVersionRequest#VersionName
   */
  readonly versionName?: string;

  /**
   * @schema RekognitionCreateProjectVersionRequest#OutputConfig
   */
  readonly outputConfig?: RekognitionOutputConfig;

  /**
   * @schema RekognitionCreateProjectVersionRequest#TrainingData
   */
  readonly trainingData?: RekognitionTrainingData;

  /**
   * @schema RekognitionCreateProjectVersionRequest#TestingData
   */
  readonly testingData?: RekognitionTestingData;

  /**
   * @schema RekognitionCreateProjectVersionRequest#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema RekognitionCreateProjectVersionRequest#KmsKeyId
   */
  readonly kmsKeyId?: string;

}

/**
 * Converts an object of type 'RekognitionCreateProjectVersionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionCreateProjectVersionRequest(obj: RekognitionCreateProjectVersionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProjectArn': obj.projectArn,
    'VersionName': obj.versionName,
    'OutputConfig': toJson_RekognitionOutputConfig(obj.outputConfig),
    'TrainingData': toJson_RekognitionTrainingData(obj.trainingData),
    'TestingData': toJson_RekognitionTestingData(obj.testingData),
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'KmsKeyId': obj.kmsKeyId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionCreateProjectVersionResponse
 */
export interface RekognitionCreateProjectVersionResponse {
  /**
   * @schema RekognitionCreateProjectVersionResponse#ProjectVersionArn
   */
  readonly projectVersionArn?: string;

}

/**
 * Converts an object of type 'RekognitionCreateProjectVersionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionCreateProjectVersionResponse(obj: RekognitionCreateProjectVersionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProjectVersionArn': obj.projectVersionArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionCreateStreamProcessorRequest
 */
export interface RekognitionCreateStreamProcessorRequest {
  /**
   * @schema RekognitionCreateStreamProcessorRequest#Input
   */
  readonly input?: RekognitionStreamProcessorInput;

  /**
   * @schema RekognitionCreateStreamProcessorRequest#Output
   */
  readonly output?: RekognitionStreamProcessorOutput;

  /**
   * @schema RekognitionCreateStreamProcessorRequest#Name
   */
  readonly name?: string;

  /**
   * @schema RekognitionCreateStreamProcessorRequest#Settings
   */
  readonly settings?: RekognitionStreamProcessorSettings;

  /**
   * @schema RekognitionCreateStreamProcessorRequest#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema RekognitionCreateStreamProcessorRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'RekognitionCreateStreamProcessorRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionCreateStreamProcessorRequest(obj: RekognitionCreateStreamProcessorRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Input': toJson_RekognitionStreamProcessorInput(obj.input),
    'Output': toJson_RekognitionStreamProcessorOutput(obj.output),
    'Name': obj.name,
    'Settings': toJson_RekognitionStreamProcessorSettings(obj.settings),
    'RoleArn': obj.roleArn,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionCreateStreamProcessorResponse
 */
export interface RekognitionCreateStreamProcessorResponse {
  /**
   * @schema RekognitionCreateStreamProcessorResponse#StreamProcessorArn
   */
  readonly streamProcessorArn?: string;

}

/**
 * Converts an object of type 'RekognitionCreateStreamProcessorResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionCreateStreamProcessorResponse(obj: RekognitionCreateStreamProcessorResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StreamProcessorArn': obj.streamProcessorArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionDeleteCollectionRequest
 */
export interface RekognitionDeleteCollectionRequest {
  /**
   * @schema RekognitionDeleteCollectionRequest#CollectionId
   */
  readonly collectionId?: string;

}

/**
 * Converts an object of type 'RekognitionDeleteCollectionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionDeleteCollectionRequest(obj: RekognitionDeleteCollectionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CollectionId': obj.collectionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionDeleteCollectionResponse
 */
export interface RekognitionDeleteCollectionResponse {
  /**
   * @schema RekognitionDeleteCollectionResponse#StatusCode
   */
  readonly statusCode?: number;

}

/**
 * Converts an object of type 'RekognitionDeleteCollectionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionDeleteCollectionResponse(obj: RekognitionDeleteCollectionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StatusCode': obj.statusCode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionDeleteFacesRequest
 */
export interface RekognitionDeleteFacesRequest {
  /**
   * @schema RekognitionDeleteFacesRequest#CollectionId
   */
  readonly collectionId?: string;

  /**
   * @schema RekognitionDeleteFacesRequest#FaceIds
   */
  readonly faceIds?: string[];

}

/**
 * Converts an object of type 'RekognitionDeleteFacesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionDeleteFacesRequest(obj: RekognitionDeleteFacesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CollectionId': obj.collectionId,
    'FaceIds': obj.faceIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionDeleteFacesResponse
 */
export interface RekognitionDeleteFacesResponse {
  /**
   * @schema RekognitionDeleteFacesResponse#DeletedFaces
   */
  readonly deletedFaces?: string[];

}

/**
 * Converts an object of type 'RekognitionDeleteFacesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionDeleteFacesResponse(obj: RekognitionDeleteFacesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeletedFaces': obj.deletedFaces?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionDeleteProjectRequest
 */
export interface RekognitionDeleteProjectRequest {
  /**
   * @schema RekognitionDeleteProjectRequest#ProjectArn
   */
  readonly projectArn?: string;

}

/**
 * Converts an object of type 'RekognitionDeleteProjectRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionDeleteProjectRequest(obj: RekognitionDeleteProjectRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProjectArn': obj.projectArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionDeleteProjectResponse
 */
export interface RekognitionDeleteProjectResponse {
  /**
   * @schema RekognitionDeleteProjectResponse#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'RekognitionDeleteProjectResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionDeleteProjectResponse(obj: RekognitionDeleteProjectResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionDeleteProjectVersionRequest
 */
export interface RekognitionDeleteProjectVersionRequest {
  /**
   * @schema RekognitionDeleteProjectVersionRequest#ProjectVersionArn
   */
  readonly projectVersionArn?: string;

}

/**
 * Converts an object of type 'RekognitionDeleteProjectVersionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionDeleteProjectVersionRequest(obj: RekognitionDeleteProjectVersionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProjectVersionArn': obj.projectVersionArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionDeleteProjectVersionResponse
 */
export interface RekognitionDeleteProjectVersionResponse {
  /**
   * @schema RekognitionDeleteProjectVersionResponse#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'RekognitionDeleteProjectVersionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionDeleteProjectVersionResponse(obj: RekognitionDeleteProjectVersionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionDeleteStreamProcessorRequest
 */
export interface RekognitionDeleteStreamProcessorRequest {
  /**
   * @schema RekognitionDeleteStreamProcessorRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'RekognitionDeleteStreamProcessorRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionDeleteStreamProcessorRequest(obj: RekognitionDeleteStreamProcessorRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionDeleteStreamProcessorResponse
 */
export interface RekognitionDeleteStreamProcessorResponse {
}

/**
 * Converts an object of type 'RekognitionDeleteStreamProcessorResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionDeleteStreamProcessorResponse(obj: RekognitionDeleteStreamProcessorResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionDescribeCollectionRequest
 */
export interface RekognitionDescribeCollectionRequest {
  /**
   * @schema RekognitionDescribeCollectionRequest#CollectionId
   */
  readonly collectionId?: string;

}

/**
 * Converts an object of type 'RekognitionDescribeCollectionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionDescribeCollectionRequest(obj: RekognitionDescribeCollectionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CollectionId': obj.collectionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionDescribeCollectionResponse
 */
export interface RekognitionDescribeCollectionResponse {
  /**
   * @schema RekognitionDescribeCollectionResponse#FaceCount
   */
  readonly faceCount?: number;

  /**
   * @schema RekognitionDescribeCollectionResponse#FaceModelVersion
   */
  readonly faceModelVersion?: string;

  /**
   * @schema RekognitionDescribeCollectionResponse#CollectionARN
   */
  readonly collectionArn?: string;

  /**
   * @schema RekognitionDescribeCollectionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

}

/**
 * Converts an object of type 'RekognitionDescribeCollectionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionDescribeCollectionResponse(obj: RekognitionDescribeCollectionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FaceCount': obj.faceCount,
    'FaceModelVersion': obj.faceModelVersion,
    'CollectionARN': obj.collectionArn,
    'CreationTimestamp': obj.creationTimestamp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionDescribeProjectVersionsRequest
 */
export interface RekognitionDescribeProjectVersionsRequest {
  /**
   * @schema RekognitionDescribeProjectVersionsRequest#ProjectArn
   */
  readonly projectArn?: string;

  /**
   * @schema RekognitionDescribeProjectVersionsRequest#VersionNames
   */
  readonly versionNames?: string[];

  /**
   * @schema RekognitionDescribeProjectVersionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RekognitionDescribeProjectVersionsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'RekognitionDescribeProjectVersionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionDescribeProjectVersionsRequest(obj: RekognitionDescribeProjectVersionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProjectArn': obj.projectArn,
    'VersionNames': obj.versionNames?.map(y => y),
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionDescribeProjectVersionsResponse
 */
export interface RekognitionDescribeProjectVersionsResponse {
  /**
   * @schema RekognitionDescribeProjectVersionsResponse#ProjectVersionDescriptions
   */
  readonly projectVersionDescriptions?: RekognitionProjectVersionDescription[];

  /**
   * @schema RekognitionDescribeProjectVersionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'RekognitionDescribeProjectVersionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionDescribeProjectVersionsResponse(obj: RekognitionDescribeProjectVersionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProjectVersionDescriptions': obj.projectVersionDescriptions?.map(y => toJson_RekognitionProjectVersionDescription(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionDescribeProjectsRequest
 */
export interface RekognitionDescribeProjectsRequest {
  /**
   * @schema RekognitionDescribeProjectsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RekognitionDescribeProjectsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'RekognitionDescribeProjectsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionDescribeProjectsRequest(obj: RekognitionDescribeProjectsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionDescribeProjectsResponse
 */
export interface RekognitionDescribeProjectsResponse {
  /**
   * @schema RekognitionDescribeProjectsResponse#ProjectDescriptions
   */
  readonly projectDescriptions?: RekognitionProjectDescription[];

  /**
   * @schema RekognitionDescribeProjectsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'RekognitionDescribeProjectsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionDescribeProjectsResponse(obj: RekognitionDescribeProjectsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProjectDescriptions': obj.projectDescriptions?.map(y => toJson_RekognitionProjectDescription(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionDescribeStreamProcessorRequest
 */
export interface RekognitionDescribeStreamProcessorRequest {
  /**
   * @schema RekognitionDescribeStreamProcessorRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'RekognitionDescribeStreamProcessorRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionDescribeStreamProcessorRequest(obj: RekognitionDescribeStreamProcessorRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionDescribeStreamProcessorResponse
 */
export interface RekognitionDescribeStreamProcessorResponse {
  /**
   * @schema RekognitionDescribeStreamProcessorResponse#Name
   */
  readonly name?: string;

  /**
   * @schema RekognitionDescribeStreamProcessorResponse#StreamProcessorArn
   */
  readonly streamProcessorArn?: string;

  /**
   * @schema RekognitionDescribeStreamProcessorResponse#Status
   */
  readonly status?: string;

  /**
   * @schema RekognitionDescribeStreamProcessorResponse#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema RekognitionDescribeStreamProcessorResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema RekognitionDescribeStreamProcessorResponse#LastUpdateTimestamp
   */
  readonly lastUpdateTimestamp?: string;

  /**
   * @schema RekognitionDescribeStreamProcessorResponse#Input
   */
  readonly input?: RekognitionStreamProcessorInput;

  /**
   * @schema RekognitionDescribeStreamProcessorResponse#Output
   */
  readonly output?: RekognitionStreamProcessorOutput;

  /**
   * @schema RekognitionDescribeStreamProcessorResponse#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema RekognitionDescribeStreamProcessorResponse#Settings
   */
  readonly settings?: RekognitionStreamProcessorSettings;

}

/**
 * Converts an object of type 'RekognitionDescribeStreamProcessorResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionDescribeStreamProcessorResponse(obj: RekognitionDescribeStreamProcessorResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'StreamProcessorArn': obj.streamProcessorArn,
    'Status': obj.status,
    'StatusMessage': obj.statusMessage,
    'CreationTimestamp': obj.creationTimestamp,
    'LastUpdateTimestamp': obj.lastUpdateTimestamp,
    'Input': toJson_RekognitionStreamProcessorInput(obj.input),
    'Output': toJson_RekognitionStreamProcessorOutput(obj.output),
    'RoleArn': obj.roleArn,
    'Settings': toJson_RekognitionStreamProcessorSettings(obj.settings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionDetectCustomLabelsRequest
 */
export interface RekognitionDetectCustomLabelsRequest {
  /**
   * @schema RekognitionDetectCustomLabelsRequest#ProjectVersionArn
   */
  readonly projectVersionArn?: string;

  /**
   * @schema RekognitionDetectCustomLabelsRequest#Image
   */
  readonly image?: RekognitionImage;

  /**
   * @schema RekognitionDetectCustomLabelsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema RekognitionDetectCustomLabelsRequest#MinConfidence
   */
  readonly minConfidence?: number;

}

/**
 * Converts an object of type 'RekognitionDetectCustomLabelsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionDetectCustomLabelsRequest(obj: RekognitionDetectCustomLabelsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProjectVersionArn': obj.projectVersionArn,
    'Image': toJson_RekognitionImage(obj.image),
    'MaxResults': obj.maxResults,
    'MinConfidence': obj.minConfidence,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionDetectCustomLabelsResponse
 */
export interface RekognitionDetectCustomLabelsResponse {
  /**
   * @schema RekognitionDetectCustomLabelsResponse#CustomLabels
   */
  readonly customLabels?: RekognitionCustomLabel[];

}

/**
 * Converts an object of type 'RekognitionDetectCustomLabelsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionDetectCustomLabelsResponse(obj: RekognitionDetectCustomLabelsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CustomLabels': obj.customLabels?.map(y => toJson_RekognitionCustomLabel(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionDetectFacesRequest
 */
export interface RekognitionDetectFacesRequest {
  /**
   * @schema RekognitionDetectFacesRequest#Image
   */
  readonly image?: RekognitionImage;

  /**
   * @schema RekognitionDetectFacesRequest#Attributes
   */
  readonly attributes?: string[];

}

/**
 * Converts an object of type 'RekognitionDetectFacesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionDetectFacesRequest(obj: RekognitionDetectFacesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Image': toJson_RekognitionImage(obj.image),
    'Attributes': obj.attributes?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionDetectFacesResponse
 */
export interface RekognitionDetectFacesResponse {
  /**
   * @schema RekognitionDetectFacesResponse#FaceDetails
   */
  readonly faceDetails?: RekognitionFaceDetail[];

  /**
   * @schema RekognitionDetectFacesResponse#OrientationCorrection
   */
  readonly orientationCorrection?: string;

}

/**
 * Converts an object of type 'RekognitionDetectFacesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionDetectFacesResponse(obj: RekognitionDetectFacesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FaceDetails': obj.faceDetails?.map(y => toJson_RekognitionFaceDetail(y)),
    'OrientationCorrection': obj.orientationCorrection,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionDetectLabelsRequest
 */
export interface RekognitionDetectLabelsRequest {
  /**
   * @schema RekognitionDetectLabelsRequest#Image
   */
  readonly image?: RekognitionImage;

  /**
   * @schema RekognitionDetectLabelsRequest#MaxLabels
   */
  readonly maxLabels?: number;

  /**
   * @schema RekognitionDetectLabelsRequest#MinConfidence
   */
  readonly minConfidence?: number;

}

/**
 * Converts an object of type 'RekognitionDetectLabelsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionDetectLabelsRequest(obj: RekognitionDetectLabelsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Image': toJson_RekognitionImage(obj.image),
    'MaxLabels': obj.maxLabels,
    'MinConfidence': obj.minConfidence,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionDetectLabelsResponse
 */
export interface RekognitionDetectLabelsResponse {
  /**
   * @schema RekognitionDetectLabelsResponse#Labels
   */
  readonly labels?: RekognitionLabel[];

  /**
   * @schema RekognitionDetectLabelsResponse#OrientationCorrection
   */
  readonly orientationCorrection?: string;

  /**
   * @schema RekognitionDetectLabelsResponse#LabelModelVersion
   */
  readonly labelModelVersion?: string;

}

/**
 * Converts an object of type 'RekognitionDetectLabelsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionDetectLabelsResponse(obj: RekognitionDetectLabelsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Labels': obj.labels?.map(y => toJson_RekognitionLabel(y)),
    'OrientationCorrection': obj.orientationCorrection,
    'LabelModelVersion': obj.labelModelVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionDetectModerationLabelsRequest
 */
export interface RekognitionDetectModerationLabelsRequest {
  /**
   * @schema RekognitionDetectModerationLabelsRequest#Image
   */
  readonly image?: RekognitionImage;

  /**
   * @schema RekognitionDetectModerationLabelsRequest#MinConfidence
   */
  readonly minConfidence?: number;

  /**
   * @schema RekognitionDetectModerationLabelsRequest#HumanLoopConfig
   */
  readonly humanLoopConfig?: RekognitionHumanLoopConfig;

}

/**
 * Converts an object of type 'RekognitionDetectModerationLabelsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionDetectModerationLabelsRequest(obj: RekognitionDetectModerationLabelsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Image': toJson_RekognitionImage(obj.image),
    'MinConfidence': obj.minConfidence,
    'HumanLoopConfig': toJson_RekognitionHumanLoopConfig(obj.humanLoopConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionDetectModerationLabelsResponse
 */
export interface RekognitionDetectModerationLabelsResponse {
  /**
   * @schema RekognitionDetectModerationLabelsResponse#ModerationLabels
   */
  readonly moderationLabels?: RekognitionModerationLabel[];

  /**
   * @schema RekognitionDetectModerationLabelsResponse#ModerationModelVersion
   */
  readonly moderationModelVersion?: string;

  /**
   * @schema RekognitionDetectModerationLabelsResponse#HumanLoopActivationOutput
   */
  readonly humanLoopActivationOutput?: RekognitionHumanLoopActivationOutput;

}

/**
 * Converts an object of type 'RekognitionDetectModerationLabelsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionDetectModerationLabelsResponse(obj: RekognitionDetectModerationLabelsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ModerationLabels': obj.moderationLabels?.map(y => toJson_RekognitionModerationLabel(y)),
    'ModerationModelVersion': obj.moderationModelVersion,
    'HumanLoopActivationOutput': toJson_RekognitionHumanLoopActivationOutput(obj.humanLoopActivationOutput),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionDetectProtectiveEquipmentRequest
 */
export interface RekognitionDetectProtectiveEquipmentRequest {
  /**
   * @schema RekognitionDetectProtectiveEquipmentRequest#Image
   */
  readonly image?: RekognitionImage;

  /**
   * @schema RekognitionDetectProtectiveEquipmentRequest#SummarizationAttributes
   */
  readonly summarizationAttributes?: RekognitionProtectiveEquipmentSummarizationAttributes;

}

/**
 * Converts an object of type 'RekognitionDetectProtectiveEquipmentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionDetectProtectiveEquipmentRequest(obj: RekognitionDetectProtectiveEquipmentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Image': toJson_RekognitionImage(obj.image),
    'SummarizationAttributes': toJson_RekognitionProtectiveEquipmentSummarizationAttributes(obj.summarizationAttributes),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionDetectProtectiveEquipmentResponse
 */
export interface RekognitionDetectProtectiveEquipmentResponse {
  /**
   * @schema RekognitionDetectProtectiveEquipmentResponse#ProtectiveEquipmentModelVersion
   */
  readonly protectiveEquipmentModelVersion?: string;

  /**
   * @schema RekognitionDetectProtectiveEquipmentResponse#Persons
   */
  readonly persons?: RekognitionProtectiveEquipmentPerson[];

  /**
   * @schema RekognitionDetectProtectiveEquipmentResponse#Summary
   */
  readonly summary?: RekognitionProtectiveEquipmentSummary;

}

/**
 * Converts an object of type 'RekognitionDetectProtectiveEquipmentResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionDetectProtectiveEquipmentResponse(obj: RekognitionDetectProtectiveEquipmentResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProtectiveEquipmentModelVersion': obj.protectiveEquipmentModelVersion,
    'Persons': obj.persons?.map(y => toJson_RekognitionProtectiveEquipmentPerson(y)),
    'Summary': toJson_RekognitionProtectiveEquipmentSummary(obj.summary),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionDetectTextRequest
 */
export interface RekognitionDetectTextRequest {
  /**
   * @schema RekognitionDetectTextRequest#Image
   */
  readonly image?: RekognitionImage;

  /**
   * @schema RekognitionDetectTextRequest#Filters
   */
  readonly filters?: RekognitionDetectTextFilters;

}

/**
 * Converts an object of type 'RekognitionDetectTextRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionDetectTextRequest(obj: RekognitionDetectTextRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Image': toJson_RekognitionImage(obj.image),
    'Filters': toJson_RekognitionDetectTextFilters(obj.filters),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionDetectTextResponse
 */
export interface RekognitionDetectTextResponse {
  /**
   * @schema RekognitionDetectTextResponse#TextDetections
   */
  readonly textDetections?: RekognitionTextDetection[];

  /**
   * @schema RekognitionDetectTextResponse#TextModelVersion
   */
  readonly textModelVersion?: string;

}

/**
 * Converts an object of type 'RekognitionDetectTextResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionDetectTextResponse(obj: RekognitionDetectTextResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TextDetections': obj.textDetections?.map(y => toJson_RekognitionTextDetection(y)),
    'TextModelVersion': obj.textModelVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionGetCelebrityInfoRequest
 */
export interface RekognitionGetCelebrityInfoRequest {
  /**
   * @schema RekognitionGetCelebrityInfoRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'RekognitionGetCelebrityInfoRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionGetCelebrityInfoRequest(obj: RekognitionGetCelebrityInfoRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionGetCelebrityInfoResponse
 */
export interface RekognitionGetCelebrityInfoResponse {
  /**
   * @schema RekognitionGetCelebrityInfoResponse#Urls
   */
  readonly urls?: string[];

  /**
   * @schema RekognitionGetCelebrityInfoResponse#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'RekognitionGetCelebrityInfoResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionGetCelebrityInfoResponse(obj: RekognitionGetCelebrityInfoResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Urls': obj.urls?.map(y => y),
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionGetCelebrityRecognitionRequest
 */
export interface RekognitionGetCelebrityRecognitionRequest {
  /**
   * @schema RekognitionGetCelebrityRecognitionRequest#JobId
   */
  readonly jobId?: string;

  /**
   * @schema RekognitionGetCelebrityRecognitionRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema RekognitionGetCelebrityRecognitionRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RekognitionGetCelebrityRecognitionRequest#SortBy
   */
  readonly sortBy?: string;

}

/**
 * Converts an object of type 'RekognitionGetCelebrityRecognitionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionGetCelebrityRecognitionRequest(obj: RekognitionGetCelebrityRecognitionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'SortBy': obj.sortBy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionGetCelebrityRecognitionResponse
 */
export interface RekognitionGetCelebrityRecognitionResponse {
  /**
   * @schema RekognitionGetCelebrityRecognitionResponse#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema RekognitionGetCelebrityRecognitionResponse#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema RekognitionGetCelebrityRecognitionResponse#VideoMetadata
   */
  readonly videoMetadata?: RekognitionVideoMetadata;

  /**
   * @schema RekognitionGetCelebrityRecognitionResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RekognitionGetCelebrityRecognitionResponse#Celebrities
   */
  readonly celebrities?: RekognitionCelebrityRecognition[];

}

/**
 * Converts an object of type 'RekognitionGetCelebrityRecognitionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionGetCelebrityRecognitionResponse(obj: RekognitionGetCelebrityRecognitionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobStatus': obj.jobStatus,
    'StatusMessage': obj.statusMessage,
    'VideoMetadata': toJson_RekognitionVideoMetadata(obj.videoMetadata),
    'NextToken': obj.nextToken,
    'Celebrities': obj.celebrities?.map(y => toJson_RekognitionCelebrityRecognition(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionGetContentModerationRequest
 */
export interface RekognitionGetContentModerationRequest {
  /**
   * @schema RekognitionGetContentModerationRequest#JobId
   */
  readonly jobId?: string;

  /**
   * @schema RekognitionGetContentModerationRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema RekognitionGetContentModerationRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RekognitionGetContentModerationRequest#SortBy
   */
  readonly sortBy?: string;

}

/**
 * Converts an object of type 'RekognitionGetContentModerationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionGetContentModerationRequest(obj: RekognitionGetContentModerationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'SortBy': obj.sortBy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionGetContentModerationResponse
 */
export interface RekognitionGetContentModerationResponse {
  /**
   * @schema RekognitionGetContentModerationResponse#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema RekognitionGetContentModerationResponse#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema RekognitionGetContentModerationResponse#VideoMetadata
   */
  readonly videoMetadata?: RekognitionVideoMetadata;

  /**
   * @schema RekognitionGetContentModerationResponse#ModerationLabels
   */
  readonly moderationLabels?: RekognitionContentModerationDetection[];

  /**
   * @schema RekognitionGetContentModerationResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RekognitionGetContentModerationResponse#ModerationModelVersion
   */
  readonly moderationModelVersion?: string;

}

/**
 * Converts an object of type 'RekognitionGetContentModerationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionGetContentModerationResponse(obj: RekognitionGetContentModerationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobStatus': obj.jobStatus,
    'StatusMessage': obj.statusMessage,
    'VideoMetadata': toJson_RekognitionVideoMetadata(obj.videoMetadata),
    'ModerationLabels': obj.moderationLabels?.map(y => toJson_RekognitionContentModerationDetection(y)),
    'NextToken': obj.nextToken,
    'ModerationModelVersion': obj.moderationModelVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionGetFaceDetectionRequest
 */
export interface RekognitionGetFaceDetectionRequest {
  /**
   * @schema RekognitionGetFaceDetectionRequest#JobId
   */
  readonly jobId?: string;

  /**
   * @schema RekognitionGetFaceDetectionRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema RekognitionGetFaceDetectionRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'RekognitionGetFaceDetectionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionGetFaceDetectionRequest(obj: RekognitionGetFaceDetectionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionGetFaceDetectionResponse
 */
export interface RekognitionGetFaceDetectionResponse {
  /**
   * @schema RekognitionGetFaceDetectionResponse#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema RekognitionGetFaceDetectionResponse#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema RekognitionGetFaceDetectionResponse#VideoMetadata
   */
  readonly videoMetadata?: RekognitionVideoMetadata;

  /**
   * @schema RekognitionGetFaceDetectionResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RekognitionGetFaceDetectionResponse#Faces
   */
  readonly faces?: RekognitionFaceDetection[];

}

/**
 * Converts an object of type 'RekognitionGetFaceDetectionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionGetFaceDetectionResponse(obj: RekognitionGetFaceDetectionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobStatus': obj.jobStatus,
    'StatusMessage': obj.statusMessage,
    'VideoMetadata': toJson_RekognitionVideoMetadata(obj.videoMetadata),
    'NextToken': obj.nextToken,
    'Faces': obj.faces?.map(y => toJson_RekognitionFaceDetection(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionGetFaceSearchRequest
 */
export interface RekognitionGetFaceSearchRequest {
  /**
   * @schema RekognitionGetFaceSearchRequest#JobId
   */
  readonly jobId?: string;

  /**
   * @schema RekognitionGetFaceSearchRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema RekognitionGetFaceSearchRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RekognitionGetFaceSearchRequest#SortBy
   */
  readonly sortBy?: string;

}

/**
 * Converts an object of type 'RekognitionGetFaceSearchRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionGetFaceSearchRequest(obj: RekognitionGetFaceSearchRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'SortBy': obj.sortBy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionGetFaceSearchResponse
 */
export interface RekognitionGetFaceSearchResponse {
  /**
   * @schema RekognitionGetFaceSearchResponse#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema RekognitionGetFaceSearchResponse#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema RekognitionGetFaceSearchResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RekognitionGetFaceSearchResponse#VideoMetadata
   */
  readonly videoMetadata?: RekognitionVideoMetadata;

  /**
   * @schema RekognitionGetFaceSearchResponse#Persons
   */
  readonly persons?: RekognitionPersonMatch[];

}

/**
 * Converts an object of type 'RekognitionGetFaceSearchResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionGetFaceSearchResponse(obj: RekognitionGetFaceSearchResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobStatus': obj.jobStatus,
    'StatusMessage': obj.statusMessage,
    'NextToken': obj.nextToken,
    'VideoMetadata': toJson_RekognitionVideoMetadata(obj.videoMetadata),
    'Persons': obj.persons?.map(y => toJson_RekognitionPersonMatch(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionGetLabelDetectionRequest
 */
export interface RekognitionGetLabelDetectionRequest {
  /**
   * @schema RekognitionGetLabelDetectionRequest#JobId
   */
  readonly jobId?: string;

  /**
   * @schema RekognitionGetLabelDetectionRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema RekognitionGetLabelDetectionRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RekognitionGetLabelDetectionRequest#SortBy
   */
  readonly sortBy?: string;

}

/**
 * Converts an object of type 'RekognitionGetLabelDetectionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionGetLabelDetectionRequest(obj: RekognitionGetLabelDetectionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'SortBy': obj.sortBy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionGetLabelDetectionResponse
 */
export interface RekognitionGetLabelDetectionResponse {
  /**
   * @schema RekognitionGetLabelDetectionResponse#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema RekognitionGetLabelDetectionResponse#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema RekognitionGetLabelDetectionResponse#VideoMetadata
   */
  readonly videoMetadata?: RekognitionVideoMetadata;

  /**
   * @schema RekognitionGetLabelDetectionResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RekognitionGetLabelDetectionResponse#Labels
   */
  readonly labels?: RekognitionLabelDetection[];

  /**
   * @schema RekognitionGetLabelDetectionResponse#LabelModelVersion
   */
  readonly labelModelVersion?: string;

}

/**
 * Converts an object of type 'RekognitionGetLabelDetectionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionGetLabelDetectionResponse(obj: RekognitionGetLabelDetectionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobStatus': obj.jobStatus,
    'StatusMessage': obj.statusMessage,
    'VideoMetadata': toJson_RekognitionVideoMetadata(obj.videoMetadata),
    'NextToken': obj.nextToken,
    'Labels': obj.labels?.map(y => toJson_RekognitionLabelDetection(y)),
    'LabelModelVersion': obj.labelModelVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionGetPersonTrackingRequest
 */
export interface RekognitionGetPersonTrackingRequest {
  /**
   * @schema RekognitionGetPersonTrackingRequest#JobId
   */
  readonly jobId?: string;

  /**
   * @schema RekognitionGetPersonTrackingRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema RekognitionGetPersonTrackingRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RekognitionGetPersonTrackingRequest#SortBy
   */
  readonly sortBy?: string;

}

/**
 * Converts an object of type 'RekognitionGetPersonTrackingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionGetPersonTrackingRequest(obj: RekognitionGetPersonTrackingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'SortBy': obj.sortBy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionGetPersonTrackingResponse
 */
export interface RekognitionGetPersonTrackingResponse {
  /**
   * @schema RekognitionGetPersonTrackingResponse#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema RekognitionGetPersonTrackingResponse#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema RekognitionGetPersonTrackingResponse#VideoMetadata
   */
  readonly videoMetadata?: RekognitionVideoMetadata;

  /**
   * @schema RekognitionGetPersonTrackingResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RekognitionGetPersonTrackingResponse#Persons
   */
  readonly persons?: RekognitionPersonDetection[];

}

/**
 * Converts an object of type 'RekognitionGetPersonTrackingResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionGetPersonTrackingResponse(obj: RekognitionGetPersonTrackingResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobStatus': obj.jobStatus,
    'StatusMessage': obj.statusMessage,
    'VideoMetadata': toJson_RekognitionVideoMetadata(obj.videoMetadata),
    'NextToken': obj.nextToken,
    'Persons': obj.persons?.map(y => toJson_RekognitionPersonDetection(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionGetSegmentDetectionRequest
 */
export interface RekognitionGetSegmentDetectionRequest {
  /**
   * @schema RekognitionGetSegmentDetectionRequest#JobId
   */
  readonly jobId?: string;

  /**
   * @schema RekognitionGetSegmentDetectionRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema RekognitionGetSegmentDetectionRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'RekognitionGetSegmentDetectionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionGetSegmentDetectionRequest(obj: RekognitionGetSegmentDetectionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionGetSegmentDetectionResponse
 */
export interface RekognitionGetSegmentDetectionResponse {
  /**
   * @schema RekognitionGetSegmentDetectionResponse#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema RekognitionGetSegmentDetectionResponse#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema RekognitionGetSegmentDetectionResponse#VideoMetadata
   */
  readonly videoMetadata?: RekognitionVideoMetadata[];

  /**
   * @schema RekognitionGetSegmentDetectionResponse#AudioMetadata
   */
  readonly audioMetadata?: RekognitionAudioMetadata[];

  /**
   * @schema RekognitionGetSegmentDetectionResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RekognitionGetSegmentDetectionResponse#Segments
   */
  readonly segments?: RekognitionSegmentDetection[];

  /**
   * @schema RekognitionGetSegmentDetectionResponse#SelectedSegmentTypes
   */
  readonly selectedSegmentTypes?: RekognitionSegmentTypeInfo[];

}

/**
 * Converts an object of type 'RekognitionGetSegmentDetectionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionGetSegmentDetectionResponse(obj: RekognitionGetSegmentDetectionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobStatus': obj.jobStatus,
    'StatusMessage': obj.statusMessage,
    'VideoMetadata': obj.videoMetadata?.map(y => toJson_RekognitionVideoMetadata(y)),
    'AudioMetadata': obj.audioMetadata?.map(y => toJson_RekognitionAudioMetadata(y)),
    'NextToken': obj.nextToken,
    'Segments': obj.segments?.map(y => toJson_RekognitionSegmentDetection(y)),
    'SelectedSegmentTypes': obj.selectedSegmentTypes?.map(y => toJson_RekognitionSegmentTypeInfo(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionGetTextDetectionRequest
 */
export interface RekognitionGetTextDetectionRequest {
  /**
   * @schema RekognitionGetTextDetectionRequest#JobId
   */
  readonly jobId?: string;

  /**
   * @schema RekognitionGetTextDetectionRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema RekognitionGetTextDetectionRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'RekognitionGetTextDetectionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionGetTextDetectionRequest(obj: RekognitionGetTextDetectionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionGetTextDetectionResponse
 */
export interface RekognitionGetTextDetectionResponse {
  /**
   * @schema RekognitionGetTextDetectionResponse#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema RekognitionGetTextDetectionResponse#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema RekognitionGetTextDetectionResponse#VideoMetadata
   */
  readonly videoMetadata?: RekognitionVideoMetadata;

  /**
   * @schema RekognitionGetTextDetectionResponse#TextDetections
   */
  readonly textDetections?: RekognitionTextDetectionResult[];

  /**
   * @schema RekognitionGetTextDetectionResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RekognitionGetTextDetectionResponse#TextModelVersion
   */
  readonly textModelVersion?: string;

}

/**
 * Converts an object of type 'RekognitionGetTextDetectionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionGetTextDetectionResponse(obj: RekognitionGetTextDetectionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobStatus': obj.jobStatus,
    'StatusMessage': obj.statusMessage,
    'VideoMetadata': toJson_RekognitionVideoMetadata(obj.videoMetadata),
    'TextDetections': obj.textDetections?.map(y => toJson_RekognitionTextDetectionResult(y)),
    'NextToken': obj.nextToken,
    'TextModelVersion': obj.textModelVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionIndexFacesRequest
 */
export interface RekognitionIndexFacesRequest {
  /**
   * @schema RekognitionIndexFacesRequest#CollectionId
   */
  readonly collectionId?: string;

  /**
   * @schema RekognitionIndexFacesRequest#Image
   */
  readonly image?: RekognitionImage;

  /**
   * @schema RekognitionIndexFacesRequest#ExternalImageId
   */
  readonly externalImageId?: string;

  /**
   * @schema RekognitionIndexFacesRequest#DetectionAttributes
   */
  readonly detectionAttributes?: string[];

  /**
   * @schema RekognitionIndexFacesRequest#MaxFaces
   */
  readonly maxFaces?: number;

  /**
   * @schema RekognitionIndexFacesRequest#QualityFilter
   */
  readonly qualityFilter?: string;

}

/**
 * Converts an object of type 'RekognitionIndexFacesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionIndexFacesRequest(obj: RekognitionIndexFacesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CollectionId': obj.collectionId,
    'Image': toJson_RekognitionImage(obj.image),
    'ExternalImageId': obj.externalImageId,
    'DetectionAttributes': obj.detectionAttributes?.map(y => y),
    'MaxFaces': obj.maxFaces,
    'QualityFilter': obj.qualityFilter,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionIndexFacesResponse
 */
export interface RekognitionIndexFacesResponse {
  /**
   * @schema RekognitionIndexFacesResponse#FaceRecords
   */
  readonly faceRecords?: RekognitionFaceRecord[];

  /**
   * @schema RekognitionIndexFacesResponse#OrientationCorrection
   */
  readonly orientationCorrection?: string;

  /**
   * @schema RekognitionIndexFacesResponse#FaceModelVersion
   */
  readonly faceModelVersion?: string;

  /**
   * @schema RekognitionIndexFacesResponse#UnindexedFaces
   */
  readonly unindexedFaces?: RekognitionUnindexedFace[];

}

/**
 * Converts an object of type 'RekognitionIndexFacesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionIndexFacesResponse(obj: RekognitionIndexFacesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FaceRecords': obj.faceRecords?.map(y => toJson_RekognitionFaceRecord(y)),
    'OrientationCorrection': obj.orientationCorrection,
    'FaceModelVersion': obj.faceModelVersion,
    'UnindexedFaces': obj.unindexedFaces?.map(y => toJson_RekognitionUnindexedFace(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionListCollectionsRequest
 */
export interface RekognitionListCollectionsRequest {
  /**
   * @schema RekognitionListCollectionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RekognitionListCollectionsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'RekognitionListCollectionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionListCollectionsRequest(obj: RekognitionListCollectionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionListCollectionsResponse
 */
export interface RekognitionListCollectionsResponse {
  /**
   * @schema RekognitionListCollectionsResponse#CollectionIds
   */
  readonly collectionIds?: string[];

  /**
   * @schema RekognitionListCollectionsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RekognitionListCollectionsResponse#FaceModelVersions
   */
  readonly faceModelVersions?: string[];

}

/**
 * Converts an object of type 'RekognitionListCollectionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionListCollectionsResponse(obj: RekognitionListCollectionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CollectionIds': obj.collectionIds?.map(y => y),
    'NextToken': obj.nextToken,
    'FaceModelVersions': obj.faceModelVersions?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionListFacesRequest
 */
export interface RekognitionListFacesRequest {
  /**
   * @schema RekognitionListFacesRequest#CollectionId
   */
  readonly collectionId?: string;

  /**
   * @schema RekognitionListFacesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RekognitionListFacesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'RekognitionListFacesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionListFacesRequest(obj: RekognitionListFacesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CollectionId': obj.collectionId,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionListFacesResponse
 */
export interface RekognitionListFacesResponse {
  /**
   * @schema RekognitionListFacesResponse#Faces
   */
  readonly faces?: RekognitionFace[];

  /**
   * @schema RekognitionListFacesResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RekognitionListFacesResponse#FaceModelVersion
   */
  readonly faceModelVersion?: string;

}

/**
 * Converts an object of type 'RekognitionListFacesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionListFacesResponse(obj: RekognitionListFacesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Faces': obj.faces?.map(y => toJson_RekognitionFace(y)),
    'NextToken': obj.nextToken,
    'FaceModelVersion': obj.faceModelVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionListStreamProcessorsRequest
 */
export interface RekognitionListStreamProcessorsRequest {
  /**
   * @schema RekognitionListStreamProcessorsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RekognitionListStreamProcessorsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'RekognitionListStreamProcessorsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionListStreamProcessorsRequest(obj: RekognitionListStreamProcessorsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionListStreamProcessorsResponse
 */
export interface RekognitionListStreamProcessorsResponse {
  /**
   * @schema RekognitionListStreamProcessorsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RekognitionListStreamProcessorsResponse#StreamProcessors
   */
  readonly streamProcessors?: RekognitionStreamProcessor[];

}

/**
 * Converts an object of type 'RekognitionListStreamProcessorsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionListStreamProcessorsResponse(obj: RekognitionListStreamProcessorsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'StreamProcessors': obj.streamProcessors?.map(y => toJson_RekognitionStreamProcessor(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionListTagsForResourceRequest
 */
export interface RekognitionListTagsForResourceRequest {
  /**
   * @schema RekognitionListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'RekognitionListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionListTagsForResourceRequest(obj: RekognitionListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionListTagsForResourceResponse
 */
export interface RekognitionListTagsForResourceResponse {
  /**
   * @schema RekognitionListTagsForResourceResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'RekognitionListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionListTagsForResourceResponse(obj: RekognitionListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionRecognizeCelebritiesRequest
 */
export interface RekognitionRecognizeCelebritiesRequest {
  /**
   * @schema RekognitionRecognizeCelebritiesRequest#Image
   */
  readonly image?: RekognitionImage;

}

/**
 * Converts an object of type 'RekognitionRecognizeCelebritiesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionRecognizeCelebritiesRequest(obj: RekognitionRecognizeCelebritiesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Image': toJson_RekognitionImage(obj.image),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionRecognizeCelebritiesResponse
 */
export interface RekognitionRecognizeCelebritiesResponse {
  /**
   * @schema RekognitionRecognizeCelebritiesResponse#CelebrityFaces
   */
  readonly celebrityFaces?: RekognitionCelebrity[];

  /**
   * @schema RekognitionRecognizeCelebritiesResponse#UnrecognizedFaces
   */
  readonly unrecognizedFaces?: RekognitionComparedFace[];

  /**
   * @schema RekognitionRecognizeCelebritiesResponse#OrientationCorrection
   */
  readonly orientationCorrection?: string;

}

/**
 * Converts an object of type 'RekognitionRecognizeCelebritiesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionRecognizeCelebritiesResponse(obj: RekognitionRecognizeCelebritiesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CelebrityFaces': obj.celebrityFaces?.map(y => toJson_RekognitionCelebrity(y)),
    'UnrecognizedFaces': obj.unrecognizedFaces?.map(y => toJson_RekognitionComparedFace(y)),
    'OrientationCorrection': obj.orientationCorrection,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionSearchFacesRequest
 */
export interface RekognitionSearchFacesRequest {
  /**
   * @schema RekognitionSearchFacesRequest#CollectionId
   */
  readonly collectionId?: string;

  /**
   * @schema RekognitionSearchFacesRequest#FaceId
   */
  readonly faceId?: string;

  /**
   * @schema RekognitionSearchFacesRequest#MaxFaces
   */
  readonly maxFaces?: number;

  /**
   * @schema RekognitionSearchFacesRequest#FaceMatchThreshold
   */
  readonly faceMatchThreshold?: number;

}

/**
 * Converts an object of type 'RekognitionSearchFacesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionSearchFacesRequest(obj: RekognitionSearchFacesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CollectionId': obj.collectionId,
    'FaceId': obj.faceId,
    'MaxFaces': obj.maxFaces,
    'FaceMatchThreshold': obj.faceMatchThreshold,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionSearchFacesResponse
 */
export interface RekognitionSearchFacesResponse {
  /**
   * @schema RekognitionSearchFacesResponse#SearchedFaceId
   */
  readonly searchedFaceId?: string;

  /**
   * @schema RekognitionSearchFacesResponse#FaceMatches
   */
  readonly faceMatches?: RekognitionFaceMatch[];

  /**
   * @schema RekognitionSearchFacesResponse#FaceModelVersion
   */
  readonly faceModelVersion?: string;

}

/**
 * Converts an object of type 'RekognitionSearchFacesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionSearchFacesResponse(obj: RekognitionSearchFacesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SearchedFaceId': obj.searchedFaceId,
    'FaceMatches': obj.faceMatches?.map(y => toJson_RekognitionFaceMatch(y)),
    'FaceModelVersion': obj.faceModelVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionSearchFacesByImageRequest
 */
export interface RekognitionSearchFacesByImageRequest {
  /**
   * @schema RekognitionSearchFacesByImageRequest#CollectionId
   */
  readonly collectionId?: string;

  /**
   * @schema RekognitionSearchFacesByImageRequest#Image
   */
  readonly image?: RekognitionImage;

  /**
   * @schema RekognitionSearchFacesByImageRequest#MaxFaces
   */
  readonly maxFaces?: number;

  /**
   * @schema RekognitionSearchFacesByImageRequest#FaceMatchThreshold
   */
  readonly faceMatchThreshold?: number;

  /**
   * @schema RekognitionSearchFacesByImageRequest#QualityFilter
   */
  readonly qualityFilter?: string;

}

/**
 * Converts an object of type 'RekognitionSearchFacesByImageRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionSearchFacesByImageRequest(obj: RekognitionSearchFacesByImageRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CollectionId': obj.collectionId,
    'Image': toJson_RekognitionImage(obj.image),
    'MaxFaces': obj.maxFaces,
    'FaceMatchThreshold': obj.faceMatchThreshold,
    'QualityFilter': obj.qualityFilter,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionSearchFacesByImageResponse
 */
export interface RekognitionSearchFacesByImageResponse {
  /**
   * @schema RekognitionSearchFacesByImageResponse#SearchedFaceBoundingBox
   */
  readonly searchedFaceBoundingBox?: RekognitionBoundingBox;

  /**
   * @schema RekognitionSearchFacesByImageResponse#SearchedFaceConfidence
   */
  readonly searchedFaceConfidence?: number;

  /**
   * @schema RekognitionSearchFacesByImageResponse#FaceMatches
   */
  readonly faceMatches?: RekognitionFaceMatch[];

  /**
   * @schema RekognitionSearchFacesByImageResponse#FaceModelVersion
   */
  readonly faceModelVersion?: string;

}

/**
 * Converts an object of type 'RekognitionSearchFacesByImageResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionSearchFacesByImageResponse(obj: RekognitionSearchFacesByImageResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SearchedFaceBoundingBox': toJson_RekognitionBoundingBox(obj.searchedFaceBoundingBox),
    'SearchedFaceConfidence': obj.searchedFaceConfidence,
    'FaceMatches': obj.faceMatches?.map(y => toJson_RekognitionFaceMatch(y)),
    'FaceModelVersion': obj.faceModelVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionStartCelebrityRecognitionRequest
 */
export interface RekognitionStartCelebrityRecognitionRequest {
  /**
   * @schema RekognitionStartCelebrityRecognitionRequest#Video
   */
  readonly video?: RekognitionVideo;

  /**
   * @schema RekognitionStartCelebrityRecognitionRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema RekognitionStartCelebrityRecognitionRequest#NotificationChannel
   */
  readonly notificationChannel?: RekognitionNotificationChannel;

  /**
   * @schema RekognitionStartCelebrityRecognitionRequest#JobTag
   */
  readonly jobTag?: string;

}

/**
 * Converts an object of type 'RekognitionStartCelebrityRecognitionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionStartCelebrityRecognitionRequest(obj: RekognitionStartCelebrityRecognitionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Video': toJson_RekognitionVideo(obj.video),
    'ClientRequestToken': obj.clientRequestToken,
    'NotificationChannel': toJson_RekognitionNotificationChannel(obj.notificationChannel),
    'JobTag': obj.jobTag,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionStartCelebrityRecognitionResponse
 */
export interface RekognitionStartCelebrityRecognitionResponse {
  /**
   * @schema RekognitionStartCelebrityRecognitionResponse#JobId
   */
  readonly jobId?: string;

}

/**
 * Converts an object of type 'RekognitionStartCelebrityRecognitionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionStartCelebrityRecognitionResponse(obj: RekognitionStartCelebrityRecognitionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionStartContentModerationRequest
 */
export interface RekognitionStartContentModerationRequest {
  /**
   * @schema RekognitionStartContentModerationRequest#Video
   */
  readonly video?: RekognitionVideo;

  /**
   * @schema RekognitionStartContentModerationRequest#MinConfidence
   */
  readonly minConfidence?: number;

  /**
   * @schema RekognitionStartContentModerationRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema RekognitionStartContentModerationRequest#NotificationChannel
   */
  readonly notificationChannel?: RekognitionNotificationChannel;

  /**
   * @schema RekognitionStartContentModerationRequest#JobTag
   */
  readonly jobTag?: string;

}

/**
 * Converts an object of type 'RekognitionStartContentModerationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionStartContentModerationRequest(obj: RekognitionStartContentModerationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Video': toJson_RekognitionVideo(obj.video),
    'MinConfidence': obj.minConfidence,
    'ClientRequestToken': obj.clientRequestToken,
    'NotificationChannel': toJson_RekognitionNotificationChannel(obj.notificationChannel),
    'JobTag': obj.jobTag,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionStartContentModerationResponse
 */
export interface RekognitionStartContentModerationResponse {
  /**
   * @schema RekognitionStartContentModerationResponse#JobId
   */
  readonly jobId?: string;

}

/**
 * Converts an object of type 'RekognitionStartContentModerationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionStartContentModerationResponse(obj: RekognitionStartContentModerationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionStartFaceDetectionRequest
 */
export interface RekognitionStartFaceDetectionRequest {
  /**
   * @schema RekognitionStartFaceDetectionRequest#Video
   */
  readonly video?: RekognitionVideo;

  /**
   * @schema RekognitionStartFaceDetectionRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema RekognitionStartFaceDetectionRequest#NotificationChannel
   */
  readonly notificationChannel?: RekognitionNotificationChannel;

  /**
   * @schema RekognitionStartFaceDetectionRequest#FaceAttributes
   */
  readonly faceAttributes?: string;

  /**
   * @schema RekognitionStartFaceDetectionRequest#JobTag
   */
  readonly jobTag?: string;

}

/**
 * Converts an object of type 'RekognitionStartFaceDetectionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionStartFaceDetectionRequest(obj: RekognitionStartFaceDetectionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Video': toJson_RekognitionVideo(obj.video),
    'ClientRequestToken': obj.clientRequestToken,
    'NotificationChannel': toJson_RekognitionNotificationChannel(obj.notificationChannel),
    'FaceAttributes': obj.faceAttributes,
    'JobTag': obj.jobTag,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionStartFaceDetectionResponse
 */
export interface RekognitionStartFaceDetectionResponse {
  /**
   * @schema RekognitionStartFaceDetectionResponse#JobId
   */
  readonly jobId?: string;

}

/**
 * Converts an object of type 'RekognitionStartFaceDetectionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionStartFaceDetectionResponse(obj: RekognitionStartFaceDetectionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionStartFaceSearchRequest
 */
export interface RekognitionStartFaceSearchRequest {
  /**
   * @schema RekognitionStartFaceSearchRequest#Video
   */
  readonly video?: RekognitionVideo;

  /**
   * @schema RekognitionStartFaceSearchRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema RekognitionStartFaceSearchRequest#FaceMatchThreshold
   */
  readonly faceMatchThreshold?: number;

  /**
   * @schema RekognitionStartFaceSearchRequest#CollectionId
   */
  readonly collectionId?: string;

  /**
   * @schema RekognitionStartFaceSearchRequest#NotificationChannel
   */
  readonly notificationChannel?: RekognitionNotificationChannel;

  /**
   * @schema RekognitionStartFaceSearchRequest#JobTag
   */
  readonly jobTag?: string;

}

/**
 * Converts an object of type 'RekognitionStartFaceSearchRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionStartFaceSearchRequest(obj: RekognitionStartFaceSearchRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Video': toJson_RekognitionVideo(obj.video),
    'ClientRequestToken': obj.clientRequestToken,
    'FaceMatchThreshold': obj.faceMatchThreshold,
    'CollectionId': obj.collectionId,
    'NotificationChannel': toJson_RekognitionNotificationChannel(obj.notificationChannel),
    'JobTag': obj.jobTag,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionStartFaceSearchResponse
 */
export interface RekognitionStartFaceSearchResponse {
  /**
   * @schema RekognitionStartFaceSearchResponse#JobId
   */
  readonly jobId?: string;

}

/**
 * Converts an object of type 'RekognitionStartFaceSearchResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionStartFaceSearchResponse(obj: RekognitionStartFaceSearchResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionStartLabelDetectionRequest
 */
export interface RekognitionStartLabelDetectionRequest {
  /**
   * @schema RekognitionStartLabelDetectionRequest#Video
   */
  readonly video?: RekognitionVideo;

  /**
   * @schema RekognitionStartLabelDetectionRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema RekognitionStartLabelDetectionRequest#MinConfidence
   */
  readonly minConfidence?: number;

  /**
   * @schema RekognitionStartLabelDetectionRequest#NotificationChannel
   */
  readonly notificationChannel?: RekognitionNotificationChannel;

  /**
   * @schema RekognitionStartLabelDetectionRequest#JobTag
   */
  readonly jobTag?: string;

}

/**
 * Converts an object of type 'RekognitionStartLabelDetectionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionStartLabelDetectionRequest(obj: RekognitionStartLabelDetectionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Video': toJson_RekognitionVideo(obj.video),
    'ClientRequestToken': obj.clientRequestToken,
    'MinConfidence': obj.minConfidence,
    'NotificationChannel': toJson_RekognitionNotificationChannel(obj.notificationChannel),
    'JobTag': obj.jobTag,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionStartLabelDetectionResponse
 */
export interface RekognitionStartLabelDetectionResponse {
  /**
   * @schema RekognitionStartLabelDetectionResponse#JobId
   */
  readonly jobId?: string;

}

/**
 * Converts an object of type 'RekognitionStartLabelDetectionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionStartLabelDetectionResponse(obj: RekognitionStartLabelDetectionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionStartPersonTrackingRequest
 */
export interface RekognitionStartPersonTrackingRequest {
  /**
   * @schema RekognitionStartPersonTrackingRequest#Video
   */
  readonly video?: RekognitionVideo;

  /**
   * @schema RekognitionStartPersonTrackingRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema RekognitionStartPersonTrackingRequest#NotificationChannel
   */
  readonly notificationChannel?: RekognitionNotificationChannel;

  /**
   * @schema RekognitionStartPersonTrackingRequest#JobTag
   */
  readonly jobTag?: string;

}

/**
 * Converts an object of type 'RekognitionStartPersonTrackingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionStartPersonTrackingRequest(obj: RekognitionStartPersonTrackingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Video': toJson_RekognitionVideo(obj.video),
    'ClientRequestToken': obj.clientRequestToken,
    'NotificationChannel': toJson_RekognitionNotificationChannel(obj.notificationChannel),
    'JobTag': obj.jobTag,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionStartPersonTrackingResponse
 */
export interface RekognitionStartPersonTrackingResponse {
  /**
   * @schema RekognitionStartPersonTrackingResponse#JobId
   */
  readonly jobId?: string;

}

/**
 * Converts an object of type 'RekognitionStartPersonTrackingResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionStartPersonTrackingResponse(obj: RekognitionStartPersonTrackingResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionStartProjectVersionRequest
 */
export interface RekognitionStartProjectVersionRequest {
  /**
   * @schema RekognitionStartProjectVersionRequest#ProjectVersionArn
   */
  readonly projectVersionArn?: string;

  /**
   * @schema RekognitionStartProjectVersionRequest#MinInferenceUnits
   */
  readonly minInferenceUnits?: number;

}

/**
 * Converts an object of type 'RekognitionStartProjectVersionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionStartProjectVersionRequest(obj: RekognitionStartProjectVersionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProjectVersionArn': obj.projectVersionArn,
    'MinInferenceUnits': obj.minInferenceUnits,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionStartProjectVersionResponse
 */
export interface RekognitionStartProjectVersionResponse {
  /**
   * @schema RekognitionStartProjectVersionResponse#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'RekognitionStartProjectVersionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionStartProjectVersionResponse(obj: RekognitionStartProjectVersionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionStartSegmentDetectionRequest
 */
export interface RekognitionStartSegmentDetectionRequest {
  /**
   * @schema RekognitionStartSegmentDetectionRequest#Video
   */
  readonly video?: RekognitionVideo;

  /**
   * @schema RekognitionStartSegmentDetectionRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema RekognitionStartSegmentDetectionRequest#NotificationChannel
   */
  readonly notificationChannel?: RekognitionNotificationChannel;

  /**
   * @schema RekognitionStartSegmentDetectionRequest#JobTag
   */
  readonly jobTag?: string;

  /**
   * @schema RekognitionStartSegmentDetectionRequest#Filters
   */
  readonly filters?: RekognitionStartSegmentDetectionFilters;

  /**
   * @schema RekognitionStartSegmentDetectionRequest#SegmentTypes
   */
  readonly segmentTypes?: string[];

}

/**
 * Converts an object of type 'RekognitionStartSegmentDetectionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionStartSegmentDetectionRequest(obj: RekognitionStartSegmentDetectionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Video': toJson_RekognitionVideo(obj.video),
    'ClientRequestToken': obj.clientRequestToken,
    'NotificationChannel': toJson_RekognitionNotificationChannel(obj.notificationChannel),
    'JobTag': obj.jobTag,
    'Filters': toJson_RekognitionStartSegmentDetectionFilters(obj.filters),
    'SegmentTypes': obj.segmentTypes?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionStartSegmentDetectionResponse
 */
export interface RekognitionStartSegmentDetectionResponse {
  /**
   * @schema RekognitionStartSegmentDetectionResponse#JobId
   */
  readonly jobId?: string;

}

/**
 * Converts an object of type 'RekognitionStartSegmentDetectionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionStartSegmentDetectionResponse(obj: RekognitionStartSegmentDetectionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionStartStreamProcessorRequest
 */
export interface RekognitionStartStreamProcessorRequest {
  /**
   * @schema RekognitionStartStreamProcessorRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'RekognitionStartStreamProcessorRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionStartStreamProcessorRequest(obj: RekognitionStartStreamProcessorRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionStartStreamProcessorResponse
 */
export interface RekognitionStartStreamProcessorResponse {
}

/**
 * Converts an object of type 'RekognitionStartStreamProcessorResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionStartStreamProcessorResponse(obj: RekognitionStartStreamProcessorResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionStartTextDetectionRequest
 */
export interface RekognitionStartTextDetectionRequest {
  /**
   * @schema RekognitionStartTextDetectionRequest#Video
   */
  readonly video?: RekognitionVideo;

  /**
   * @schema RekognitionStartTextDetectionRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema RekognitionStartTextDetectionRequest#NotificationChannel
   */
  readonly notificationChannel?: RekognitionNotificationChannel;

  /**
   * @schema RekognitionStartTextDetectionRequest#JobTag
   */
  readonly jobTag?: string;

  /**
   * @schema RekognitionStartTextDetectionRequest#Filters
   */
  readonly filters?: RekognitionStartTextDetectionFilters;

}

/**
 * Converts an object of type 'RekognitionStartTextDetectionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionStartTextDetectionRequest(obj: RekognitionStartTextDetectionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Video': toJson_RekognitionVideo(obj.video),
    'ClientRequestToken': obj.clientRequestToken,
    'NotificationChannel': toJson_RekognitionNotificationChannel(obj.notificationChannel),
    'JobTag': obj.jobTag,
    'Filters': toJson_RekognitionStartTextDetectionFilters(obj.filters),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionStartTextDetectionResponse
 */
export interface RekognitionStartTextDetectionResponse {
  /**
   * @schema RekognitionStartTextDetectionResponse#JobId
   */
  readonly jobId?: string;

}

/**
 * Converts an object of type 'RekognitionStartTextDetectionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionStartTextDetectionResponse(obj: RekognitionStartTextDetectionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionStopProjectVersionRequest
 */
export interface RekognitionStopProjectVersionRequest {
  /**
   * @schema RekognitionStopProjectVersionRequest#ProjectVersionArn
   */
  readonly projectVersionArn?: string;

}

/**
 * Converts an object of type 'RekognitionStopProjectVersionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionStopProjectVersionRequest(obj: RekognitionStopProjectVersionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProjectVersionArn': obj.projectVersionArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionStopProjectVersionResponse
 */
export interface RekognitionStopProjectVersionResponse {
  /**
   * @schema RekognitionStopProjectVersionResponse#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'RekognitionStopProjectVersionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionStopProjectVersionResponse(obj: RekognitionStopProjectVersionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionStopStreamProcessorRequest
 */
export interface RekognitionStopStreamProcessorRequest {
  /**
   * @schema RekognitionStopStreamProcessorRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'RekognitionStopStreamProcessorRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionStopStreamProcessorRequest(obj: RekognitionStopStreamProcessorRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionStopStreamProcessorResponse
 */
export interface RekognitionStopStreamProcessorResponse {
}

/**
 * Converts an object of type 'RekognitionStopStreamProcessorResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionStopStreamProcessorResponse(obj: RekognitionStopStreamProcessorResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionTagResourceRequest
 */
export interface RekognitionTagResourceRequest {
  /**
   * @schema RekognitionTagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema RekognitionTagResourceRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'RekognitionTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionTagResourceRequest(obj: RekognitionTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionTagResourceResponse
 */
export interface RekognitionTagResourceResponse {
}

/**
 * Converts an object of type 'RekognitionTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionTagResourceResponse(obj: RekognitionTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionUntagResourceRequest
 */
export interface RekognitionUntagResourceRequest {
  /**
   * @schema RekognitionUntagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema RekognitionUntagResourceRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'RekognitionUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionUntagResourceRequest(obj: RekognitionUntagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'TagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionUntagResourceResponse
 */
export interface RekognitionUntagResourceResponse {
}

/**
 * Converts an object of type 'RekognitionUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionUntagResourceResponse(obj: RekognitionUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionImage
 */
export interface RekognitionImage {
  /**
   * @schema RekognitionImage#Bytes
   */
  readonly bytes?: any;

  /**
   * @schema RekognitionImage#S3Object
   */
  readonly s3Object?: RekognitionS3Object;

}

/**
 * Converts an object of type 'RekognitionImage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionImage(obj: RekognitionImage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bytes': obj.bytes,
    'S3Object': toJson_RekognitionS3Object(obj.s3Object),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionComparedSourceImageFace
 */
export interface RekognitionComparedSourceImageFace {
  /**
   * @schema RekognitionComparedSourceImageFace#BoundingBox
   */
  readonly boundingBox?: RekognitionBoundingBox;

  /**
   * @schema RekognitionComparedSourceImageFace#Confidence
   */
  readonly confidence?: number;

}

/**
 * Converts an object of type 'RekognitionComparedSourceImageFace' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionComparedSourceImageFace(obj: RekognitionComparedSourceImageFace | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BoundingBox': toJson_RekognitionBoundingBox(obj.boundingBox),
    'Confidence': obj.confidence,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionCompareFacesMatch
 */
export interface RekognitionCompareFacesMatch {
  /**
   * @schema RekognitionCompareFacesMatch#Similarity
   */
  readonly similarity?: number;

  /**
   * @schema RekognitionCompareFacesMatch#Face
   */
  readonly face?: RekognitionComparedFace;

}

/**
 * Converts an object of type 'RekognitionCompareFacesMatch' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionCompareFacesMatch(obj: RekognitionCompareFacesMatch | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Similarity': obj.similarity,
    'Face': toJson_RekognitionComparedFace(obj.face),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionComparedFace
 */
export interface RekognitionComparedFace {
  /**
   * @schema RekognitionComparedFace#BoundingBox
   */
  readonly boundingBox?: RekognitionBoundingBox;

  /**
   * @schema RekognitionComparedFace#Confidence
   */
  readonly confidence?: number;

  /**
   * @schema RekognitionComparedFace#Landmarks
   */
  readonly landmarks?: RekognitionLandmark[];

  /**
   * @schema RekognitionComparedFace#Pose
   */
  readonly pose?: RekognitionPose;

  /**
   * @schema RekognitionComparedFace#Quality
   */
  readonly quality?: RekognitionImageQuality;

}

/**
 * Converts an object of type 'RekognitionComparedFace' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionComparedFace(obj: RekognitionComparedFace | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BoundingBox': toJson_RekognitionBoundingBox(obj.boundingBox),
    'Confidence': obj.confidence,
    'Landmarks': obj.landmarks?.map(y => toJson_RekognitionLandmark(y)),
    'Pose': toJson_RekognitionPose(obj.pose),
    'Quality': toJson_RekognitionImageQuality(obj.quality),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionOutputConfig
 */
export interface RekognitionOutputConfig {
  /**
   * @schema RekognitionOutputConfig#S3Bucket
   */
  readonly s3Bucket?: string;

  /**
   * @schema RekognitionOutputConfig#S3KeyPrefix
   */
  readonly s3KeyPrefix?: string;

}

/**
 * Converts an object of type 'RekognitionOutputConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionOutputConfig(obj: RekognitionOutputConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'S3Bucket': obj.s3Bucket,
    'S3KeyPrefix': obj.s3KeyPrefix,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionTrainingData
 */
export interface RekognitionTrainingData {
  /**
   * @schema RekognitionTrainingData#Assets
   */
  readonly assets?: RekognitionAsset[];

}

/**
 * Converts an object of type 'RekognitionTrainingData' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionTrainingData(obj: RekognitionTrainingData | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Assets': obj.assets?.map(y => toJson_RekognitionAsset(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionTestingData
 */
export interface RekognitionTestingData {
  /**
   * @schema RekognitionTestingData#Assets
   */
  readonly assets?: RekognitionAsset[];

  /**
   * @schema RekognitionTestingData#AutoCreate
   */
  readonly autoCreate?: boolean;

}

/**
 * Converts an object of type 'RekognitionTestingData' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionTestingData(obj: RekognitionTestingData | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Assets': obj.assets?.map(y => toJson_RekognitionAsset(y)),
    'AutoCreate': obj.autoCreate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionStreamProcessorInput
 */
export interface RekognitionStreamProcessorInput {
  /**
   * @schema RekognitionStreamProcessorInput#KinesisVideoStream
   */
  readonly kinesisVideoStream?: RekognitionKinesisVideoStream;

}

/**
 * Converts an object of type 'RekognitionStreamProcessorInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionStreamProcessorInput(obj: RekognitionStreamProcessorInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KinesisVideoStream': toJson_RekognitionKinesisVideoStream(obj.kinesisVideoStream),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionStreamProcessorOutput
 */
export interface RekognitionStreamProcessorOutput {
  /**
   * @schema RekognitionStreamProcessorOutput#KinesisDataStream
   */
  readonly kinesisDataStream?: RekognitionKinesisDataStream;

}

/**
 * Converts an object of type 'RekognitionStreamProcessorOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionStreamProcessorOutput(obj: RekognitionStreamProcessorOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KinesisDataStream': toJson_RekognitionKinesisDataStream(obj.kinesisDataStream),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionStreamProcessorSettings
 */
export interface RekognitionStreamProcessorSettings {
  /**
   * @schema RekognitionStreamProcessorSettings#FaceSearch
   */
  readonly faceSearch?: RekognitionFaceSearchSettings;

}

/**
 * Converts an object of type 'RekognitionStreamProcessorSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionStreamProcessorSettings(obj: RekognitionStreamProcessorSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FaceSearch': toJson_RekognitionFaceSearchSettings(obj.faceSearch),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionProjectVersionDescription
 */
export interface RekognitionProjectVersionDescription {
  /**
   * @schema RekognitionProjectVersionDescription#ProjectVersionArn
   */
  readonly projectVersionArn?: string;

  /**
   * @schema RekognitionProjectVersionDescription#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema RekognitionProjectVersionDescription#MinInferenceUnits
   */
  readonly minInferenceUnits?: number;

  /**
   * @schema RekognitionProjectVersionDescription#Status
   */
  readonly status?: string;

  /**
   * @schema RekognitionProjectVersionDescription#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema RekognitionProjectVersionDescription#BillableTrainingTimeInSeconds
   */
  readonly billableTrainingTimeInSeconds?: number;

  /**
   * @schema RekognitionProjectVersionDescription#TrainingEndTimestamp
   */
  readonly trainingEndTimestamp?: string;

  /**
   * @schema RekognitionProjectVersionDescription#OutputConfig
   */
  readonly outputConfig?: RekognitionOutputConfig;

  /**
   * @schema RekognitionProjectVersionDescription#TrainingDataResult
   */
  readonly trainingDataResult?: RekognitionTrainingDataResult;

  /**
   * @schema RekognitionProjectVersionDescription#TestingDataResult
   */
  readonly testingDataResult?: RekognitionTestingDataResult;

  /**
   * @schema RekognitionProjectVersionDescription#EvaluationResult
   */
  readonly evaluationResult?: RekognitionEvaluationResult;

  /**
   * @schema RekognitionProjectVersionDescription#ManifestSummary
   */
  readonly manifestSummary?: RekognitionGroundTruthManifest;

  /**
   * @schema RekognitionProjectVersionDescription#KmsKeyId
   */
  readonly kmsKeyId?: string;

}

/**
 * Converts an object of type 'RekognitionProjectVersionDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionProjectVersionDescription(obj: RekognitionProjectVersionDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProjectVersionArn': obj.projectVersionArn,
    'CreationTimestamp': obj.creationTimestamp,
    'MinInferenceUnits': obj.minInferenceUnits,
    'Status': obj.status,
    'StatusMessage': obj.statusMessage,
    'BillableTrainingTimeInSeconds': obj.billableTrainingTimeInSeconds,
    'TrainingEndTimestamp': obj.trainingEndTimestamp,
    'OutputConfig': toJson_RekognitionOutputConfig(obj.outputConfig),
    'TrainingDataResult': toJson_RekognitionTrainingDataResult(obj.trainingDataResult),
    'TestingDataResult': toJson_RekognitionTestingDataResult(obj.testingDataResult),
    'EvaluationResult': toJson_RekognitionEvaluationResult(obj.evaluationResult),
    'ManifestSummary': toJson_RekognitionGroundTruthManifest(obj.manifestSummary),
    'KmsKeyId': obj.kmsKeyId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionProjectDescription
 */
export interface RekognitionProjectDescription {
  /**
   * @schema RekognitionProjectDescription#ProjectArn
   */
  readonly projectArn?: string;

  /**
   * @schema RekognitionProjectDescription#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema RekognitionProjectDescription#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'RekognitionProjectDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionProjectDescription(obj: RekognitionProjectDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProjectArn': obj.projectArn,
    'CreationTimestamp': obj.creationTimestamp,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionCustomLabel
 */
export interface RekognitionCustomLabel {
  /**
   * @schema RekognitionCustomLabel#Name
   */
  readonly name?: string;

  /**
   * @schema RekognitionCustomLabel#Confidence
   */
  readonly confidence?: number;

  /**
   * @schema RekognitionCustomLabel#Geometry
   */
  readonly geometry?: RekognitionGeometry;

}

/**
 * Converts an object of type 'RekognitionCustomLabel' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionCustomLabel(obj: RekognitionCustomLabel | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Confidence': obj.confidence,
    'Geometry': toJson_RekognitionGeometry(obj.geometry),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionFaceDetail
 */
export interface RekognitionFaceDetail {
  /**
   * @schema RekognitionFaceDetail#BoundingBox
   */
  readonly boundingBox?: RekognitionBoundingBox;

  /**
   * @schema RekognitionFaceDetail#AgeRange
   */
  readonly ageRange?: RekognitionAgeRange;

  /**
   * @schema RekognitionFaceDetail#Smile
   */
  readonly smile?: RekognitionSmile;

  /**
   * @schema RekognitionFaceDetail#Eyeglasses
   */
  readonly eyeglasses?: RekognitionEyeglasses;

  /**
   * @schema RekognitionFaceDetail#Sunglasses
   */
  readonly sunglasses?: RekognitionSunglasses;

  /**
   * @schema RekognitionFaceDetail#Gender
   */
  readonly gender?: RekognitionGender;

  /**
   * @schema RekognitionFaceDetail#Beard
   */
  readonly beard?: RekognitionBeard;

  /**
   * @schema RekognitionFaceDetail#Mustache
   */
  readonly mustache?: RekognitionMustache;

  /**
   * @schema RekognitionFaceDetail#EyesOpen
   */
  readonly eyesOpen?: RekognitionEyeOpen;

  /**
   * @schema RekognitionFaceDetail#MouthOpen
   */
  readonly mouthOpen?: RekognitionMouthOpen;

  /**
   * @schema RekognitionFaceDetail#Emotions
   */
  readonly emotions?: RekognitionEmotion[];

  /**
   * @schema RekognitionFaceDetail#Landmarks
   */
  readonly landmarks?: RekognitionLandmark[];

  /**
   * @schema RekognitionFaceDetail#Pose
   */
  readonly pose?: RekognitionPose;

  /**
   * @schema RekognitionFaceDetail#Quality
   */
  readonly quality?: RekognitionImageQuality;

  /**
   * @schema RekognitionFaceDetail#Confidence
   */
  readonly confidence?: number;

}

/**
 * Converts an object of type 'RekognitionFaceDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionFaceDetail(obj: RekognitionFaceDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BoundingBox': toJson_RekognitionBoundingBox(obj.boundingBox),
    'AgeRange': toJson_RekognitionAgeRange(obj.ageRange),
    'Smile': toJson_RekognitionSmile(obj.smile),
    'Eyeglasses': toJson_RekognitionEyeglasses(obj.eyeglasses),
    'Sunglasses': toJson_RekognitionSunglasses(obj.sunglasses),
    'Gender': toJson_RekognitionGender(obj.gender),
    'Beard': toJson_RekognitionBeard(obj.beard),
    'Mustache': toJson_RekognitionMustache(obj.mustache),
    'EyesOpen': toJson_RekognitionEyeOpen(obj.eyesOpen),
    'MouthOpen': toJson_RekognitionMouthOpen(obj.mouthOpen),
    'Emotions': obj.emotions?.map(y => toJson_RekognitionEmotion(y)),
    'Landmarks': obj.landmarks?.map(y => toJson_RekognitionLandmark(y)),
    'Pose': toJson_RekognitionPose(obj.pose),
    'Quality': toJson_RekognitionImageQuality(obj.quality),
    'Confidence': obj.confidence,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionLabel
 */
export interface RekognitionLabel {
  /**
   * @schema RekognitionLabel#Name
   */
  readonly name?: string;

  /**
   * @schema RekognitionLabel#Confidence
   */
  readonly confidence?: number;

  /**
   * @schema RekognitionLabel#Instances
   */
  readonly instances?: RekognitionInstance[];

  /**
   * @schema RekognitionLabel#Parents
   */
  readonly parents?: RekognitionParent[];

}

/**
 * Converts an object of type 'RekognitionLabel' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionLabel(obj: RekognitionLabel | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Confidence': obj.confidence,
    'Instances': obj.instances?.map(y => toJson_RekognitionInstance(y)),
    'Parents': obj.parents?.map(y => toJson_RekognitionParent(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionHumanLoopConfig
 */
export interface RekognitionHumanLoopConfig {
  /**
   * @schema RekognitionHumanLoopConfig#HumanLoopName
   */
  readonly humanLoopName?: string;

  /**
   * @schema RekognitionHumanLoopConfig#FlowDefinitionArn
   */
  readonly flowDefinitionArn?: string;

  /**
   * @schema RekognitionHumanLoopConfig#DataAttributes
   */
  readonly dataAttributes?: RekognitionHumanLoopDataAttributes;

}

/**
 * Converts an object of type 'RekognitionHumanLoopConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionHumanLoopConfig(obj: RekognitionHumanLoopConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HumanLoopName': obj.humanLoopName,
    'FlowDefinitionArn': obj.flowDefinitionArn,
    'DataAttributes': toJson_RekognitionHumanLoopDataAttributes(obj.dataAttributes),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionModerationLabel
 */
export interface RekognitionModerationLabel {
  /**
   * @schema RekognitionModerationLabel#Confidence
   */
  readonly confidence?: number;

  /**
   * @schema RekognitionModerationLabel#Name
   */
  readonly name?: string;

  /**
   * @schema RekognitionModerationLabel#ParentName
   */
  readonly parentName?: string;

}

/**
 * Converts an object of type 'RekognitionModerationLabel' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionModerationLabel(obj: RekognitionModerationLabel | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Confidence': obj.confidence,
    'Name': obj.name,
    'ParentName': obj.parentName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionHumanLoopActivationOutput
 */
export interface RekognitionHumanLoopActivationOutput {
  /**
   * @schema RekognitionHumanLoopActivationOutput#HumanLoopArn
   */
  readonly humanLoopArn?: string;

  /**
   * @schema RekognitionHumanLoopActivationOutput#HumanLoopActivationReasons
   */
  readonly humanLoopActivationReasons?: string[];

  /**
   * @schema RekognitionHumanLoopActivationOutput#HumanLoopActivationConditionsEvaluationResults
   */
  readonly humanLoopActivationConditionsEvaluationResults?: string;

}

/**
 * Converts an object of type 'RekognitionHumanLoopActivationOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionHumanLoopActivationOutput(obj: RekognitionHumanLoopActivationOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HumanLoopArn': obj.humanLoopArn,
    'HumanLoopActivationReasons': obj.humanLoopActivationReasons?.map(y => y),
    'HumanLoopActivationConditionsEvaluationResults': obj.humanLoopActivationConditionsEvaluationResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionProtectiveEquipmentSummarizationAttributes
 */
export interface RekognitionProtectiveEquipmentSummarizationAttributes {
  /**
   * @schema RekognitionProtectiveEquipmentSummarizationAttributes#MinConfidence
   */
  readonly minConfidence?: number;

  /**
   * @schema RekognitionProtectiveEquipmentSummarizationAttributes#RequiredEquipmentTypes
   */
  readonly requiredEquipmentTypes?: string[];

}

/**
 * Converts an object of type 'RekognitionProtectiveEquipmentSummarizationAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionProtectiveEquipmentSummarizationAttributes(obj: RekognitionProtectiveEquipmentSummarizationAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MinConfidence': obj.minConfidence,
    'RequiredEquipmentTypes': obj.requiredEquipmentTypes?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionProtectiveEquipmentPerson
 */
export interface RekognitionProtectiveEquipmentPerson {
  /**
   * @schema RekognitionProtectiveEquipmentPerson#BodyParts
   */
  readonly bodyParts?: RekognitionProtectiveEquipmentBodyPart[];

  /**
   * @schema RekognitionProtectiveEquipmentPerson#BoundingBox
   */
  readonly boundingBox?: RekognitionBoundingBox;

  /**
   * @schema RekognitionProtectiveEquipmentPerson#Confidence
   */
  readonly confidence?: number;

  /**
   * @schema RekognitionProtectiveEquipmentPerson#Id
   */
  readonly id?: number;

}

/**
 * Converts an object of type 'RekognitionProtectiveEquipmentPerson' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionProtectiveEquipmentPerson(obj: RekognitionProtectiveEquipmentPerson | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BodyParts': obj.bodyParts?.map(y => toJson_RekognitionProtectiveEquipmentBodyPart(y)),
    'BoundingBox': toJson_RekognitionBoundingBox(obj.boundingBox),
    'Confidence': obj.confidence,
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionProtectiveEquipmentSummary
 */
export interface RekognitionProtectiveEquipmentSummary {
  /**
   * @schema RekognitionProtectiveEquipmentSummary#PersonsWithRequiredEquipment
   */
  readonly personsWithRequiredEquipment?: number[];

  /**
   * @schema RekognitionProtectiveEquipmentSummary#PersonsWithoutRequiredEquipment
   */
  readonly personsWithoutRequiredEquipment?: number[];

  /**
   * @schema RekognitionProtectiveEquipmentSummary#PersonsIndeterminate
   */
  readonly personsIndeterminate?: number[];

}

/**
 * Converts an object of type 'RekognitionProtectiveEquipmentSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionProtectiveEquipmentSummary(obj: RekognitionProtectiveEquipmentSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PersonsWithRequiredEquipment': obj.personsWithRequiredEquipment?.map(y => y),
    'PersonsWithoutRequiredEquipment': obj.personsWithoutRequiredEquipment?.map(y => y),
    'PersonsIndeterminate': obj.personsIndeterminate?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionDetectTextFilters
 */
export interface RekognitionDetectTextFilters {
  /**
   * @schema RekognitionDetectTextFilters#WordFilter
   */
  readonly wordFilter?: RekognitionDetectionFilter;

  /**
   * @schema RekognitionDetectTextFilters#RegionsOfInterest
   */
  readonly regionsOfInterest?: RekognitionRegionOfInterest[];

}

/**
 * Converts an object of type 'RekognitionDetectTextFilters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionDetectTextFilters(obj: RekognitionDetectTextFilters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WordFilter': toJson_RekognitionDetectionFilter(obj.wordFilter),
    'RegionsOfInterest': obj.regionsOfInterest?.map(y => toJson_RekognitionRegionOfInterest(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionTextDetection
 */
export interface RekognitionTextDetection {
  /**
   * @schema RekognitionTextDetection#DetectedText
   */
  readonly detectedText?: string;

  /**
   * @schema RekognitionTextDetection#Type
   */
  readonly type?: string;

  /**
   * @schema RekognitionTextDetection#Id
   */
  readonly id?: number;

  /**
   * @schema RekognitionTextDetection#ParentId
   */
  readonly parentId?: number;

  /**
   * @schema RekognitionTextDetection#Confidence
   */
  readonly confidence?: number;

  /**
   * @schema RekognitionTextDetection#Geometry
   */
  readonly geometry?: RekognitionGeometry;

}

/**
 * Converts an object of type 'RekognitionTextDetection' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionTextDetection(obj: RekognitionTextDetection | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DetectedText': obj.detectedText,
    'Type': obj.type,
    'Id': obj.id,
    'ParentId': obj.parentId,
    'Confidence': obj.confidence,
    'Geometry': toJson_RekognitionGeometry(obj.geometry),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionVideoMetadata
 */
export interface RekognitionVideoMetadata {
  /**
   * @schema RekognitionVideoMetadata#Codec
   */
  readonly codec?: string;

  /**
   * @schema RekognitionVideoMetadata#DurationMillis
   */
  readonly durationMillis?: number;

  /**
   * @schema RekognitionVideoMetadata#Format
   */
  readonly format?: string;

  /**
   * @schema RekognitionVideoMetadata#FrameRate
   */
  readonly frameRate?: number;

  /**
   * @schema RekognitionVideoMetadata#FrameHeight
   */
  readonly frameHeight?: number;

  /**
   * @schema RekognitionVideoMetadata#FrameWidth
   */
  readonly frameWidth?: number;

}

/**
 * Converts an object of type 'RekognitionVideoMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionVideoMetadata(obj: RekognitionVideoMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Codec': obj.codec,
    'DurationMillis': obj.durationMillis,
    'Format': obj.format,
    'FrameRate': obj.frameRate,
    'FrameHeight': obj.frameHeight,
    'FrameWidth': obj.frameWidth,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionCelebrityRecognition
 */
export interface RekognitionCelebrityRecognition {
  /**
   * @schema RekognitionCelebrityRecognition#Timestamp
   */
  readonly timestamp?: number;

  /**
   * @schema RekognitionCelebrityRecognition#Celebrity
   */
  readonly celebrity?: RekognitionCelebrityDetail;

}

/**
 * Converts an object of type 'RekognitionCelebrityRecognition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionCelebrityRecognition(obj: RekognitionCelebrityRecognition | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Timestamp': obj.timestamp,
    'Celebrity': toJson_RekognitionCelebrityDetail(obj.celebrity),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionContentModerationDetection
 */
export interface RekognitionContentModerationDetection {
  /**
   * @schema RekognitionContentModerationDetection#Timestamp
   */
  readonly timestamp?: number;

  /**
   * @schema RekognitionContentModerationDetection#ModerationLabel
   */
  readonly moderationLabel?: RekognitionModerationLabel;

}

/**
 * Converts an object of type 'RekognitionContentModerationDetection' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionContentModerationDetection(obj: RekognitionContentModerationDetection | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Timestamp': obj.timestamp,
    'ModerationLabel': toJson_RekognitionModerationLabel(obj.moderationLabel),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionFaceDetection
 */
export interface RekognitionFaceDetection {
  /**
   * @schema RekognitionFaceDetection#Timestamp
   */
  readonly timestamp?: number;

  /**
   * @schema RekognitionFaceDetection#Face
   */
  readonly face?: RekognitionFaceDetail;

}

/**
 * Converts an object of type 'RekognitionFaceDetection' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionFaceDetection(obj: RekognitionFaceDetection | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Timestamp': obj.timestamp,
    'Face': toJson_RekognitionFaceDetail(obj.face),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionPersonMatch
 */
export interface RekognitionPersonMatch {
  /**
   * @schema RekognitionPersonMatch#Timestamp
   */
  readonly timestamp?: number;

  /**
   * @schema RekognitionPersonMatch#Person
   */
  readonly person?: RekognitionPersonDetail;

  /**
   * @schema RekognitionPersonMatch#FaceMatches
   */
  readonly faceMatches?: RekognitionFaceMatch[];

}

/**
 * Converts an object of type 'RekognitionPersonMatch' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionPersonMatch(obj: RekognitionPersonMatch | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Timestamp': obj.timestamp,
    'Person': toJson_RekognitionPersonDetail(obj.person),
    'FaceMatches': obj.faceMatches?.map(y => toJson_RekognitionFaceMatch(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionLabelDetection
 */
export interface RekognitionLabelDetection {
  /**
   * @schema RekognitionLabelDetection#Timestamp
   */
  readonly timestamp?: number;

  /**
   * @schema RekognitionLabelDetection#Label
   */
  readonly label?: RekognitionLabel;

}

/**
 * Converts an object of type 'RekognitionLabelDetection' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionLabelDetection(obj: RekognitionLabelDetection | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Timestamp': obj.timestamp,
    'Label': toJson_RekognitionLabel(obj.label),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionPersonDetection
 */
export interface RekognitionPersonDetection {
  /**
   * @schema RekognitionPersonDetection#Timestamp
   */
  readonly timestamp?: number;

  /**
   * @schema RekognitionPersonDetection#Person
   */
  readonly person?: RekognitionPersonDetail;

}

/**
 * Converts an object of type 'RekognitionPersonDetection' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionPersonDetection(obj: RekognitionPersonDetection | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Timestamp': obj.timestamp,
    'Person': toJson_RekognitionPersonDetail(obj.person),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionAudioMetadata
 */
export interface RekognitionAudioMetadata {
  /**
   * @schema RekognitionAudioMetadata#Codec
   */
  readonly codec?: string;

  /**
   * @schema RekognitionAudioMetadata#DurationMillis
   */
  readonly durationMillis?: number;

  /**
   * @schema RekognitionAudioMetadata#SampleRate
   */
  readonly sampleRate?: number;

  /**
   * @schema RekognitionAudioMetadata#NumberOfChannels
   */
  readonly numberOfChannels?: number;

}

/**
 * Converts an object of type 'RekognitionAudioMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionAudioMetadata(obj: RekognitionAudioMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Codec': obj.codec,
    'DurationMillis': obj.durationMillis,
    'SampleRate': obj.sampleRate,
    'NumberOfChannels': obj.numberOfChannels,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionSegmentDetection
 */
export interface RekognitionSegmentDetection {
  /**
   * @schema RekognitionSegmentDetection#Type
   */
  readonly type?: string;

  /**
   * @schema RekognitionSegmentDetection#StartTimestampMillis
   */
  readonly startTimestampMillis?: number;

  /**
   * @schema RekognitionSegmentDetection#EndTimestampMillis
   */
  readonly endTimestampMillis?: number;

  /**
   * @schema RekognitionSegmentDetection#DurationMillis
   */
  readonly durationMillis?: number;

  /**
   * @schema RekognitionSegmentDetection#StartTimecodeSMPTE
   */
  readonly startTimecodeSmpte?: string;

  /**
   * @schema RekognitionSegmentDetection#EndTimecodeSMPTE
   */
  readonly endTimecodeSmpte?: string;

  /**
   * @schema RekognitionSegmentDetection#DurationSMPTE
   */
  readonly durationSmpte?: string;

  /**
   * @schema RekognitionSegmentDetection#TechnicalCueSegment
   */
  readonly technicalCueSegment?: RekognitionTechnicalCueSegment;

  /**
   * @schema RekognitionSegmentDetection#ShotSegment
   */
  readonly shotSegment?: RekognitionShotSegment;

}

/**
 * Converts an object of type 'RekognitionSegmentDetection' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionSegmentDetection(obj: RekognitionSegmentDetection | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'StartTimestampMillis': obj.startTimestampMillis,
    'EndTimestampMillis': obj.endTimestampMillis,
    'DurationMillis': obj.durationMillis,
    'StartTimecodeSMPTE': obj.startTimecodeSmpte,
    'EndTimecodeSMPTE': obj.endTimecodeSmpte,
    'DurationSMPTE': obj.durationSmpte,
    'TechnicalCueSegment': toJson_RekognitionTechnicalCueSegment(obj.technicalCueSegment),
    'ShotSegment': toJson_RekognitionShotSegment(obj.shotSegment),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionSegmentTypeInfo
 */
export interface RekognitionSegmentTypeInfo {
  /**
   * @schema RekognitionSegmentTypeInfo#Type
   */
  readonly type?: string;

  /**
   * @schema RekognitionSegmentTypeInfo#ModelVersion
   */
  readonly modelVersion?: string;

}

/**
 * Converts an object of type 'RekognitionSegmentTypeInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionSegmentTypeInfo(obj: RekognitionSegmentTypeInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'ModelVersion': obj.modelVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionTextDetectionResult
 */
export interface RekognitionTextDetectionResult {
  /**
   * @schema RekognitionTextDetectionResult#Timestamp
   */
  readonly timestamp?: number;

  /**
   * @schema RekognitionTextDetectionResult#TextDetection
   */
  readonly textDetection?: RekognitionTextDetection;

}

/**
 * Converts an object of type 'RekognitionTextDetectionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionTextDetectionResult(obj: RekognitionTextDetectionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Timestamp': obj.timestamp,
    'TextDetection': toJson_RekognitionTextDetection(obj.textDetection),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionFaceRecord
 */
export interface RekognitionFaceRecord {
  /**
   * @schema RekognitionFaceRecord#Face
   */
  readonly face?: RekognitionFace;

  /**
   * @schema RekognitionFaceRecord#FaceDetail
   */
  readonly faceDetail?: RekognitionFaceDetail;

}

/**
 * Converts an object of type 'RekognitionFaceRecord' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionFaceRecord(obj: RekognitionFaceRecord | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Face': toJson_RekognitionFace(obj.face),
    'FaceDetail': toJson_RekognitionFaceDetail(obj.faceDetail),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionUnindexedFace
 */
export interface RekognitionUnindexedFace {
  /**
   * @schema RekognitionUnindexedFace#Reasons
   */
  readonly reasons?: string[];

  /**
   * @schema RekognitionUnindexedFace#FaceDetail
   */
  readonly faceDetail?: RekognitionFaceDetail;

}

/**
 * Converts an object of type 'RekognitionUnindexedFace' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionUnindexedFace(obj: RekognitionUnindexedFace | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Reasons': obj.reasons?.map(y => y),
    'FaceDetail': toJson_RekognitionFaceDetail(obj.faceDetail),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionFace
 */
export interface RekognitionFace {
  /**
   * @schema RekognitionFace#FaceId
   */
  readonly faceId?: string;

  /**
   * @schema RekognitionFace#BoundingBox
   */
  readonly boundingBox?: RekognitionBoundingBox;

  /**
   * @schema RekognitionFace#ImageId
   */
  readonly imageId?: string;

  /**
   * @schema RekognitionFace#ExternalImageId
   */
  readonly externalImageId?: string;

  /**
   * @schema RekognitionFace#Confidence
   */
  readonly confidence?: number;

}

/**
 * Converts an object of type 'RekognitionFace' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionFace(obj: RekognitionFace | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FaceId': obj.faceId,
    'BoundingBox': toJson_RekognitionBoundingBox(obj.boundingBox),
    'ImageId': obj.imageId,
    'ExternalImageId': obj.externalImageId,
    'Confidence': obj.confidence,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionStreamProcessor
 */
export interface RekognitionStreamProcessor {
  /**
   * @schema RekognitionStreamProcessor#Name
   */
  readonly name?: string;

  /**
   * @schema RekognitionStreamProcessor#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'RekognitionStreamProcessor' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionStreamProcessor(obj: RekognitionStreamProcessor | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionCelebrity
 */
export interface RekognitionCelebrity {
  /**
   * @schema RekognitionCelebrity#Urls
   */
  readonly urls?: string[];

  /**
   * @schema RekognitionCelebrity#Name
   */
  readonly name?: string;

  /**
   * @schema RekognitionCelebrity#Id
   */
  readonly id?: string;

  /**
   * @schema RekognitionCelebrity#Face
   */
  readonly face?: RekognitionComparedFace;

  /**
   * @schema RekognitionCelebrity#MatchConfidence
   */
  readonly matchConfidence?: number;

}

/**
 * Converts an object of type 'RekognitionCelebrity' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionCelebrity(obj: RekognitionCelebrity | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Urls': obj.urls?.map(y => y),
    'Name': obj.name,
    'Id': obj.id,
    'Face': toJson_RekognitionComparedFace(obj.face),
    'MatchConfidence': obj.matchConfidence,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionFaceMatch
 */
export interface RekognitionFaceMatch {
  /**
   * @schema RekognitionFaceMatch#Similarity
   */
  readonly similarity?: number;

  /**
   * @schema RekognitionFaceMatch#Face
   */
  readonly face?: RekognitionFace;

}

/**
 * Converts an object of type 'RekognitionFaceMatch' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionFaceMatch(obj: RekognitionFaceMatch | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Similarity': obj.similarity,
    'Face': toJson_RekognitionFace(obj.face),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionBoundingBox
 */
export interface RekognitionBoundingBox {
  /**
   * @schema RekognitionBoundingBox#Width
   */
  readonly width?: number;

  /**
   * @schema RekognitionBoundingBox#Height
   */
  readonly height?: number;

  /**
   * @schema RekognitionBoundingBox#Left
   */
  readonly left?: number;

  /**
   * @schema RekognitionBoundingBox#Top
   */
  readonly top?: number;

}

/**
 * Converts an object of type 'RekognitionBoundingBox' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionBoundingBox(obj: RekognitionBoundingBox | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Width': obj.width,
    'Height': obj.height,
    'Left': obj.left,
    'Top': obj.top,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionVideo
 */
export interface RekognitionVideo {
  /**
   * @schema RekognitionVideo#S3Object
   */
  readonly s3Object?: RekognitionS3Object;

}

/**
 * Converts an object of type 'RekognitionVideo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionVideo(obj: RekognitionVideo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'S3Object': toJson_RekognitionS3Object(obj.s3Object),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionNotificationChannel
 */
export interface RekognitionNotificationChannel {
  /**
   * @schema RekognitionNotificationChannel#SNSTopicArn
   */
  readonly snsTopicArn?: string;

  /**
   * @schema RekognitionNotificationChannel#RoleArn
   */
  readonly roleArn?: string;

}

/**
 * Converts an object of type 'RekognitionNotificationChannel' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionNotificationChannel(obj: RekognitionNotificationChannel | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SNSTopicArn': obj.snsTopicArn,
    'RoleArn': obj.roleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionStartSegmentDetectionFilters
 */
export interface RekognitionStartSegmentDetectionFilters {
  /**
   * @schema RekognitionStartSegmentDetectionFilters#TechnicalCueFilter
   */
  readonly technicalCueFilter?: RekognitionStartTechnicalCueDetectionFilter;

  /**
   * @schema RekognitionStartSegmentDetectionFilters#ShotFilter
   */
  readonly shotFilter?: RekognitionStartShotDetectionFilter;

}

/**
 * Converts an object of type 'RekognitionStartSegmentDetectionFilters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionStartSegmentDetectionFilters(obj: RekognitionStartSegmentDetectionFilters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TechnicalCueFilter': toJson_RekognitionStartTechnicalCueDetectionFilter(obj.technicalCueFilter),
    'ShotFilter': toJson_RekognitionStartShotDetectionFilter(obj.shotFilter),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionStartTextDetectionFilters
 */
export interface RekognitionStartTextDetectionFilters {
  /**
   * @schema RekognitionStartTextDetectionFilters#WordFilter
   */
  readonly wordFilter?: RekognitionDetectionFilter;

  /**
   * @schema RekognitionStartTextDetectionFilters#RegionsOfInterest
   */
  readonly regionsOfInterest?: RekognitionRegionOfInterest[];

}

/**
 * Converts an object of type 'RekognitionStartTextDetectionFilters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionStartTextDetectionFilters(obj: RekognitionStartTextDetectionFilters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WordFilter': toJson_RekognitionDetectionFilter(obj.wordFilter),
    'RegionsOfInterest': obj.regionsOfInterest?.map(y => toJson_RekognitionRegionOfInterest(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionS3Object
 */
export interface RekognitionS3Object {
  /**
   * @schema RekognitionS3Object#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema RekognitionS3Object#Name
   */
  readonly name?: string;

  /**
   * @schema RekognitionS3Object#Version
   */
  readonly version?: string;

}

/**
 * Converts an object of type 'RekognitionS3Object' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionS3Object(obj: RekognitionS3Object | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'Name': obj.name,
    'Version': obj.version,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionLandmark
 */
export interface RekognitionLandmark {
  /**
   * @schema RekognitionLandmark#Type
   */
  readonly type?: string;

  /**
   * @schema RekognitionLandmark#X
   */
  readonly x?: number;

  /**
   * @schema RekognitionLandmark#Y
   */
  readonly y?: number;

}

/**
 * Converts an object of type 'RekognitionLandmark' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionLandmark(obj: RekognitionLandmark | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'X': obj.x,
    'Y': obj.y,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionPose
 */
export interface RekognitionPose {
  /**
   * @schema RekognitionPose#Roll
   */
  readonly roll?: number;

  /**
   * @schema RekognitionPose#Yaw
   */
  readonly yaw?: number;

  /**
   * @schema RekognitionPose#Pitch
   */
  readonly pitch?: number;

}

/**
 * Converts an object of type 'RekognitionPose' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionPose(obj: RekognitionPose | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Roll': obj.roll,
    'Yaw': obj.yaw,
    'Pitch': obj.pitch,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionImageQuality
 */
export interface RekognitionImageQuality {
  /**
   * @schema RekognitionImageQuality#Brightness
   */
  readonly brightness?: number;

  /**
   * @schema RekognitionImageQuality#Sharpness
   */
  readonly sharpness?: number;

}

/**
 * Converts an object of type 'RekognitionImageQuality' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionImageQuality(obj: RekognitionImageQuality | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Brightness': obj.brightness,
    'Sharpness': obj.sharpness,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionAsset
 */
export interface RekognitionAsset {
  /**
   * @schema RekognitionAsset#GroundTruthManifest
   */
  readonly groundTruthManifest?: RekognitionGroundTruthManifest;

}

/**
 * Converts an object of type 'RekognitionAsset' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionAsset(obj: RekognitionAsset | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroundTruthManifest': toJson_RekognitionGroundTruthManifest(obj.groundTruthManifest),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionKinesisVideoStream
 */
export interface RekognitionKinesisVideoStream {
  /**
   * @schema RekognitionKinesisVideoStream#Arn
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'RekognitionKinesisVideoStream' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionKinesisVideoStream(obj: RekognitionKinesisVideoStream | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionKinesisDataStream
 */
export interface RekognitionKinesisDataStream {
  /**
   * @schema RekognitionKinesisDataStream#Arn
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'RekognitionKinesisDataStream' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionKinesisDataStream(obj: RekognitionKinesisDataStream | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionFaceSearchSettings
 */
export interface RekognitionFaceSearchSettings {
  /**
   * @schema RekognitionFaceSearchSettings#CollectionId
   */
  readonly collectionId?: string;

  /**
   * @schema RekognitionFaceSearchSettings#FaceMatchThreshold
   */
  readonly faceMatchThreshold?: number;

}

/**
 * Converts an object of type 'RekognitionFaceSearchSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionFaceSearchSettings(obj: RekognitionFaceSearchSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CollectionId': obj.collectionId,
    'FaceMatchThreshold': obj.faceMatchThreshold,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionTrainingDataResult
 */
export interface RekognitionTrainingDataResult {
  /**
   * @schema RekognitionTrainingDataResult#Input
   */
  readonly input?: RekognitionTrainingData;

  /**
   * @schema RekognitionTrainingDataResult#Output
   */
  readonly output?: RekognitionTrainingData;

  /**
   * @schema RekognitionTrainingDataResult#Validation
   */
  readonly validation?: RekognitionValidationData;

}

/**
 * Converts an object of type 'RekognitionTrainingDataResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionTrainingDataResult(obj: RekognitionTrainingDataResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Input': toJson_RekognitionTrainingData(obj.input),
    'Output': toJson_RekognitionTrainingData(obj.output),
    'Validation': toJson_RekognitionValidationData(obj.validation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionTestingDataResult
 */
export interface RekognitionTestingDataResult {
  /**
   * @schema RekognitionTestingDataResult#Input
   */
  readonly input?: RekognitionTestingData;

  /**
   * @schema RekognitionTestingDataResult#Output
   */
  readonly output?: RekognitionTestingData;

  /**
   * @schema RekognitionTestingDataResult#Validation
   */
  readonly validation?: RekognitionValidationData;

}

/**
 * Converts an object of type 'RekognitionTestingDataResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionTestingDataResult(obj: RekognitionTestingDataResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Input': toJson_RekognitionTestingData(obj.input),
    'Output': toJson_RekognitionTestingData(obj.output),
    'Validation': toJson_RekognitionValidationData(obj.validation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionEvaluationResult
 */
export interface RekognitionEvaluationResult {
  /**
   * @schema RekognitionEvaluationResult#F1Score
   */
  readonly f1Score?: number;

  /**
   * @schema RekognitionEvaluationResult#Summary
   */
  readonly summary?: RekognitionSummary;

}

/**
 * Converts an object of type 'RekognitionEvaluationResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionEvaluationResult(obj: RekognitionEvaluationResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'F1Score': obj.f1Score,
    'Summary': toJson_RekognitionSummary(obj.summary),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionGroundTruthManifest
 */
export interface RekognitionGroundTruthManifest {
  /**
   * @schema RekognitionGroundTruthManifest#S3Object
   */
  readonly s3Object?: RekognitionS3Object;

}

/**
 * Converts an object of type 'RekognitionGroundTruthManifest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionGroundTruthManifest(obj: RekognitionGroundTruthManifest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'S3Object': toJson_RekognitionS3Object(obj.s3Object),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionGeometry
 */
export interface RekognitionGeometry {
  /**
   * @schema RekognitionGeometry#BoundingBox
   */
  readonly boundingBox?: RekognitionBoundingBox;

  /**
   * @schema RekognitionGeometry#Polygon
   */
  readonly polygon?: RekognitionPoint[];

}

/**
 * Converts an object of type 'RekognitionGeometry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionGeometry(obj: RekognitionGeometry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BoundingBox': toJson_RekognitionBoundingBox(obj.boundingBox),
    'Polygon': obj.polygon?.map(y => toJson_RekognitionPoint(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionAgeRange
 */
export interface RekognitionAgeRange {
  /**
   * @schema RekognitionAgeRange#Low
   */
  readonly low?: number;

  /**
   * @schema RekognitionAgeRange#High
   */
  readonly high?: number;

}

/**
 * Converts an object of type 'RekognitionAgeRange' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionAgeRange(obj: RekognitionAgeRange | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Low': obj.low,
    'High': obj.high,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionSmile
 */
export interface RekognitionSmile {
  /**
   * @schema RekognitionSmile#Value
   */
  readonly value?: boolean;

  /**
   * @schema RekognitionSmile#Confidence
   */
  readonly confidence?: number;

}

/**
 * Converts an object of type 'RekognitionSmile' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionSmile(obj: RekognitionSmile | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Value': obj.value,
    'Confidence': obj.confidence,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionEyeglasses
 */
export interface RekognitionEyeglasses {
  /**
   * @schema RekognitionEyeglasses#Value
   */
  readonly value?: boolean;

  /**
   * @schema RekognitionEyeglasses#Confidence
   */
  readonly confidence?: number;

}

/**
 * Converts an object of type 'RekognitionEyeglasses' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionEyeglasses(obj: RekognitionEyeglasses | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Value': obj.value,
    'Confidence': obj.confidence,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionSunglasses
 */
export interface RekognitionSunglasses {
  /**
   * @schema RekognitionSunglasses#Value
   */
  readonly value?: boolean;

  /**
   * @schema RekognitionSunglasses#Confidence
   */
  readonly confidence?: number;

}

/**
 * Converts an object of type 'RekognitionSunglasses' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionSunglasses(obj: RekognitionSunglasses | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Value': obj.value,
    'Confidence': obj.confidence,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionGender
 */
export interface RekognitionGender {
  /**
   * @schema RekognitionGender#Value
   */
  readonly value?: string;

  /**
   * @schema RekognitionGender#Confidence
   */
  readonly confidence?: number;

}

/**
 * Converts an object of type 'RekognitionGender' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionGender(obj: RekognitionGender | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Value': obj.value,
    'Confidence': obj.confidence,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionBeard
 */
export interface RekognitionBeard {
  /**
   * @schema RekognitionBeard#Value
   */
  readonly value?: boolean;

  /**
   * @schema RekognitionBeard#Confidence
   */
  readonly confidence?: number;

}

/**
 * Converts an object of type 'RekognitionBeard' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionBeard(obj: RekognitionBeard | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Value': obj.value,
    'Confidence': obj.confidence,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionMustache
 */
export interface RekognitionMustache {
  /**
   * @schema RekognitionMustache#Value
   */
  readonly value?: boolean;

  /**
   * @schema RekognitionMustache#Confidence
   */
  readonly confidence?: number;

}

/**
 * Converts an object of type 'RekognitionMustache' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionMustache(obj: RekognitionMustache | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Value': obj.value,
    'Confidence': obj.confidence,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionEyeOpen
 */
export interface RekognitionEyeOpen {
  /**
   * @schema RekognitionEyeOpen#Value
   */
  readonly value?: boolean;

  /**
   * @schema RekognitionEyeOpen#Confidence
   */
  readonly confidence?: number;

}

/**
 * Converts an object of type 'RekognitionEyeOpen' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionEyeOpen(obj: RekognitionEyeOpen | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Value': obj.value,
    'Confidence': obj.confidence,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionMouthOpen
 */
export interface RekognitionMouthOpen {
  /**
   * @schema RekognitionMouthOpen#Value
   */
  readonly value?: boolean;

  /**
   * @schema RekognitionMouthOpen#Confidence
   */
  readonly confidence?: number;

}

/**
 * Converts an object of type 'RekognitionMouthOpen' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionMouthOpen(obj: RekognitionMouthOpen | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Value': obj.value,
    'Confidence': obj.confidence,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionEmotion
 */
export interface RekognitionEmotion {
  /**
   * @schema RekognitionEmotion#Type
   */
  readonly type?: string;

  /**
   * @schema RekognitionEmotion#Confidence
   */
  readonly confidence?: number;

}

/**
 * Converts an object of type 'RekognitionEmotion' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionEmotion(obj: RekognitionEmotion | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'Confidence': obj.confidence,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionInstance
 */
export interface RekognitionInstance {
  /**
   * @schema RekognitionInstance#BoundingBox
   */
  readonly boundingBox?: RekognitionBoundingBox;

  /**
   * @schema RekognitionInstance#Confidence
   */
  readonly confidence?: number;

}

/**
 * Converts an object of type 'RekognitionInstance' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionInstance(obj: RekognitionInstance | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BoundingBox': toJson_RekognitionBoundingBox(obj.boundingBox),
    'Confidence': obj.confidence,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionParent
 */
export interface RekognitionParent {
  /**
   * @schema RekognitionParent#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'RekognitionParent' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionParent(obj: RekognitionParent | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionHumanLoopDataAttributes
 */
export interface RekognitionHumanLoopDataAttributes {
  /**
   * @schema RekognitionHumanLoopDataAttributes#ContentClassifiers
   */
  readonly contentClassifiers?: string[];

}

/**
 * Converts an object of type 'RekognitionHumanLoopDataAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionHumanLoopDataAttributes(obj: RekognitionHumanLoopDataAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContentClassifiers': obj.contentClassifiers?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionProtectiveEquipmentBodyPart
 */
export interface RekognitionProtectiveEquipmentBodyPart {
  /**
   * @schema RekognitionProtectiveEquipmentBodyPart#Name
   */
  readonly name?: string;

  /**
   * @schema RekognitionProtectiveEquipmentBodyPart#Confidence
   */
  readonly confidence?: number;

  /**
   * @schema RekognitionProtectiveEquipmentBodyPart#EquipmentDetections
   */
  readonly equipmentDetections?: RekognitionEquipmentDetection[];

}

/**
 * Converts an object of type 'RekognitionProtectiveEquipmentBodyPart' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionProtectiveEquipmentBodyPart(obj: RekognitionProtectiveEquipmentBodyPart | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Confidence': obj.confidence,
    'EquipmentDetections': obj.equipmentDetections?.map(y => toJson_RekognitionEquipmentDetection(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionDetectionFilter
 */
export interface RekognitionDetectionFilter {
  /**
   * @schema RekognitionDetectionFilter#MinConfidence
   */
  readonly minConfidence?: number;

  /**
   * @schema RekognitionDetectionFilter#MinBoundingBoxHeight
   */
  readonly minBoundingBoxHeight?: number;

  /**
   * @schema RekognitionDetectionFilter#MinBoundingBoxWidth
   */
  readonly minBoundingBoxWidth?: number;

}

/**
 * Converts an object of type 'RekognitionDetectionFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionDetectionFilter(obj: RekognitionDetectionFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MinConfidence': obj.minConfidence,
    'MinBoundingBoxHeight': obj.minBoundingBoxHeight,
    'MinBoundingBoxWidth': obj.minBoundingBoxWidth,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionRegionOfInterest
 */
export interface RekognitionRegionOfInterest {
  /**
   * @schema RekognitionRegionOfInterest#BoundingBox
   */
  readonly boundingBox?: RekognitionBoundingBox;

}

/**
 * Converts an object of type 'RekognitionRegionOfInterest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionRegionOfInterest(obj: RekognitionRegionOfInterest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BoundingBox': toJson_RekognitionBoundingBox(obj.boundingBox),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionCelebrityDetail
 */
export interface RekognitionCelebrityDetail {
  /**
   * @schema RekognitionCelebrityDetail#Urls
   */
  readonly urls?: string[];

  /**
   * @schema RekognitionCelebrityDetail#Name
   */
  readonly name?: string;

  /**
   * @schema RekognitionCelebrityDetail#Id
   */
  readonly id?: string;

  /**
   * @schema RekognitionCelebrityDetail#Confidence
   */
  readonly confidence?: number;

  /**
   * @schema RekognitionCelebrityDetail#BoundingBox
   */
  readonly boundingBox?: RekognitionBoundingBox;

  /**
   * @schema RekognitionCelebrityDetail#Face
   */
  readonly face?: RekognitionFaceDetail;

}

/**
 * Converts an object of type 'RekognitionCelebrityDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionCelebrityDetail(obj: RekognitionCelebrityDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Urls': obj.urls?.map(y => y),
    'Name': obj.name,
    'Id': obj.id,
    'Confidence': obj.confidence,
    'BoundingBox': toJson_RekognitionBoundingBox(obj.boundingBox),
    'Face': toJson_RekognitionFaceDetail(obj.face),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionPersonDetail
 */
export interface RekognitionPersonDetail {
  /**
   * @schema RekognitionPersonDetail#Index
   */
  readonly index?: number;

  /**
   * @schema RekognitionPersonDetail#BoundingBox
   */
  readonly boundingBox?: RekognitionBoundingBox;

  /**
   * @schema RekognitionPersonDetail#Face
   */
  readonly face?: RekognitionFaceDetail;

}

/**
 * Converts an object of type 'RekognitionPersonDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionPersonDetail(obj: RekognitionPersonDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Index': obj.index,
    'BoundingBox': toJson_RekognitionBoundingBox(obj.boundingBox),
    'Face': toJson_RekognitionFaceDetail(obj.face),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionTechnicalCueSegment
 */
export interface RekognitionTechnicalCueSegment {
  /**
   * @schema RekognitionTechnicalCueSegment#Type
   */
  readonly type?: string;

  /**
   * @schema RekognitionTechnicalCueSegment#Confidence
   */
  readonly confidence?: number;

}

/**
 * Converts an object of type 'RekognitionTechnicalCueSegment' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionTechnicalCueSegment(obj: RekognitionTechnicalCueSegment | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'Confidence': obj.confidence,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionShotSegment
 */
export interface RekognitionShotSegment {
  /**
   * @schema RekognitionShotSegment#Index
   */
  readonly index?: number;

  /**
   * @schema RekognitionShotSegment#Confidence
   */
  readonly confidence?: number;

}

/**
 * Converts an object of type 'RekognitionShotSegment' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionShotSegment(obj: RekognitionShotSegment | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Index': obj.index,
    'Confidence': obj.confidence,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionStartTechnicalCueDetectionFilter
 */
export interface RekognitionStartTechnicalCueDetectionFilter {
  /**
   * @schema RekognitionStartTechnicalCueDetectionFilter#MinSegmentConfidence
   */
  readonly minSegmentConfidence?: number;

}

/**
 * Converts an object of type 'RekognitionStartTechnicalCueDetectionFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionStartTechnicalCueDetectionFilter(obj: RekognitionStartTechnicalCueDetectionFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MinSegmentConfidence': obj.minSegmentConfidence,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionStartShotDetectionFilter
 */
export interface RekognitionStartShotDetectionFilter {
  /**
   * @schema RekognitionStartShotDetectionFilter#MinSegmentConfidence
   */
  readonly minSegmentConfidence?: number;

}

/**
 * Converts an object of type 'RekognitionStartShotDetectionFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionStartShotDetectionFilter(obj: RekognitionStartShotDetectionFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MinSegmentConfidence': obj.minSegmentConfidence,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionValidationData
 */
export interface RekognitionValidationData {
  /**
   * @schema RekognitionValidationData#Assets
   */
  readonly assets?: RekognitionAsset[];

}

/**
 * Converts an object of type 'RekognitionValidationData' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionValidationData(obj: RekognitionValidationData | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Assets': obj.assets?.map(y => toJson_RekognitionAsset(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionSummary
 */
export interface RekognitionSummary {
  /**
   * @schema RekognitionSummary#S3Object
   */
  readonly s3Object?: RekognitionS3Object;

}

/**
 * Converts an object of type 'RekognitionSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionSummary(obj: RekognitionSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'S3Object': toJson_RekognitionS3Object(obj.s3Object),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionPoint
 */
export interface RekognitionPoint {
  /**
   * @schema RekognitionPoint#X
   */
  readonly x?: number;

  /**
   * @schema RekognitionPoint#Y
   */
  readonly y?: number;

}

/**
 * Converts an object of type 'RekognitionPoint' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionPoint(obj: RekognitionPoint | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'X': obj.x,
    'Y': obj.y,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionEquipmentDetection
 */
export interface RekognitionEquipmentDetection {
  /**
   * @schema RekognitionEquipmentDetection#BoundingBox
   */
  readonly boundingBox?: RekognitionBoundingBox;

  /**
   * @schema RekognitionEquipmentDetection#Confidence
   */
  readonly confidence?: number;

  /**
   * @schema RekognitionEquipmentDetection#Type
   */
  readonly type?: string;

  /**
   * @schema RekognitionEquipmentDetection#CoversBodyPart
   */
  readonly coversBodyPart?: RekognitionCoversBodyPart;

}

/**
 * Converts an object of type 'RekognitionEquipmentDetection' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionEquipmentDetection(obj: RekognitionEquipmentDetection | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BoundingBox': toJson_RekognitionBoundingBox(obj.boundingBox),
    'Confidence': obj.confidence,
    'Type': obj.type,
    'CoversBodyPart': toJson_RekognitionCoversBodyPart(obj.coversBodyPart),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RekognitionCoversBodyPart
 */
export interface RekognitionCoversBodyPart {
  /**
   * @schema RekognitionCoversBodyPart#Confidence
   */
  readonly confidence?: number;

  /**
   * @schema RekognitionCoversBodyPart#Value
   */
  readonly value?: boolean;

}

/**
 * Converts an object of type 'RekognitionCoversBodyPart' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RekognitionCoversBodyPart(obj: RekognitionCoversBodyPart | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Confidence': obj.confidence,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
