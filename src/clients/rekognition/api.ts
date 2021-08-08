import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class RekognitionClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public compareFaces(input: shapes.RekognitionCompareFacesRequest): RekognitionResponsesCompareFaces {
    return new RekognitionResponsesCompareFaces(this, this.__resources, input);
  }

  public createCollection(input: shapes.RekognitionCreateCollectionRequest): RekognitionResponsesCreateCollection {
    return new RekognitionResponsesCreateCollection(this, this.__resources, input);
  }

  public createProject(input: shapes.RekognitionCreateProjectRequest): RekognitionResponsesCreateProject {
    return new RekognitionResponsesCreateProject(this, this.__resources, input);
  }

  public createProjectVersion(input: shapes.RekognitionCreateProjectVersionRequest): RekognitionResponsesCreateProjectVersion {
    return new RekognitionResponsesCreateProjectVersion(this, this.__resources, input);
  }

  public createStreamProcessor(input: shapes.RekognitionCreateStreamProcessorRequest): RekognitionResponsesCreateStreamProcessor {
    return new RekognitionResponsesCreateStreamProcessor(this, this.__resources, input);
  }

  public deleteCollection(input: shapes.RekognitionDeleteCollectionRequest): RekognitionResponsesDeleteCollection {
    return new RekognitionResponsesDeleteCollection(this, this.__resources, input);
  }

  public deleteFaces(input: shapes.RekognitionDeleteFacesRequest): RekognitionResponsesDeleteFaces {
    return new RekognitionResponsesDeleteFaces(this, this.__resources, input);
  }

  public deleteProject(input: shapes.RekognitionDeleteProjectRequest): RekognitionResponsesDeleteProject {
    return new RekognitionResponsesDeleteProject(this, this.__resources, input);
  }

  public deleteProjectVersion(input: shapes.RekognitionDeleteProjectVersionRequest): RekognitionResponsesDeleteProjectVersion {
    return new RekognitionResponsesDeleteProjectVersion(this, this.__resources, input);
  }

  public deleteStreamProcessor(input: shapes.RekognitionDeleteStreamProcessorRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStreamProcessor',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.DeleteStreamProcessor'),
        parameters: {
          Name: input.name,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteStreamProcessor', props);
  }

  public describeCollection(input: shapes.RekognitionDescribeCollectionRequest): RekognitionResponsesDescribeCollection {
    return new RekognitionResponsesDescribeCollection(this, this.__resources, input);
  }

  public describeProjectVersions(input: shapes.RekognitionDescribeProjectVersionsRequest): RekognitionResponsesDescribeProjectVersions {
    return new RekognitionResponsesDescribeProjectVersions(this, this.__resources, input);
  }

  public describeProjects(input: shapes.RekognitionDescribeProjectsRequest): RekognitionResponsesDescribeProjects {
    return new RekognitionResponsesDescribeProjects(this, this.__resources, input);
  }

  public describeStreamProcessor(input: shapes.RekognitionDescribeStreamProcessorRequest): RekognitionResponsesDescribeStreamProcessor {
    return new RekognitionResponsesDescribeStreamProcessor(this, this.__resources, input);
  }

  public detectCustomLabels(input: shapes.RekognitionDetectCustomLabelsRequest): RekognitionResponsesDetectCustomLabels {
    return new RekognitionResponsesDetectCustomLabels(this, this.__resources, input);
  }

  public detectFaces(input: shapes.RekognitionDetectFacesRequest): RekognitionResponsesDetectFaces {
    return new RekognitionResponsesDetectFaces(this, this.__resources, input);
  }

  public detectLabels(input: shapes.RekognitionDetectLabelsRequest): RekognitionResponsesDetectLabels {
    return new RekognitionResponsesDetectLabels(this, this.__resources, input);
  }

  public detectModerationLabels(input: shapes.RekognitionDetectModerationLabelsRequest): RekognitionResponsesDetectModerationLabels {
    return new RekognitionResponsesDetectModerationLabels(this, this.__resources, input);
  }

  public detectProtectiveEquipment(input: shapes.RekognitionDetectProtectiveEquipmentRequest): RekognitionResponsesDetectProtectiveEquipment {
    return new RekognitionResponsesDetectProtectiveEquipment(this, this.__resources, input);
  }

  public detectText(input: shapes.RekognitionDetectTextRequest): RekognitionResponsesDetectText {
    return new RekognitionResponsesDetectText(this, this.__resources, input);
  }

  public fetchCelebrityInfo(input: shapes.RekognitionGetCelebrityInfoRequest): RekognitionResponsesFetchCelebrityInfo {
    return new RekognitionResponsesFetchCelebrityInfo(this, this.__resources, input);
  }

  public fetchCelebrityRecognition(input: shapes.RekognitionGetCelebrityRecognitionRequest): RekognitionResponsesFetchCelebrityRecognition {
    return new RekognitionResponsesFetchCelebrityRecognition(this, this.__resources, input);
  }

  public fetchContentModeration(input: shapes.RekognitionGetContentModerationRequest): RekognitionResponsesFetchContentModeration {
    return new RekognitionResponsesFetchContentModeration(this, this.__resources, input);
  }

  public fetchFaceDetection(input: shapes.RekognitionGetFaceDetectionRequest): RekognitionResponsesFetchFaceDetection {
    return new RekognitionResponsesFetchFaceDetection(this, this.__resources, input);
  }

  public fetchFaceSearch(input: shapes.RekognitionGetFaceSearchRequest): RekognitionResponsesFetchFaceSearch {
    return new RekognitionResponsesFetchFaceSearch(this, this.__resources, input);
  }

  public fetchLabelDetection(input: shapes.RekognitionGetLabelDetectionRequest): RekognitionResponsesFetchLabelDetection {
    return new RekognitionResponsesFetchLabelDetection(this, this.__resources, input);
  }

  public fetchPersonTracking(input: shapes.RekognitionGetPersonTrackingRequest): RekognitionResponsesFetchPersonTracking {
    return new RekognitionResponsesFetchPersonTracking(this, this.__resources, input);
  }

  public fetchSegmentDetection(input: shapes.RekognitionGetSegmentDetectionRequest): RekognitionResponsesFetchSegmentDetection {
    return new RekognitionResponsesFetchSegmentDetection(this, this.__resources, input);
  }

  public fetchTextDetection(input: shapes.RekognitionGetTextDetectionRequest): RekognitionResponsesFetchTextDetection {
    return new RekognitionResponsesFetchTextDetection(this, this.__resources, input);
  }

  public indexFaces(input: shapes.RekognitionIndexFacesRequest): RekognitionResponsesIndexFaces {
    return new RekognitionResponsesIndexFaces(this, this.__resources, input);
  }

  public listCollections(input: shapes.RekognitionListCollectionsRequest): RekognitionResponsesListCollections {
    return new RekognitionResponsesListCollections(this, this.__resources, input);
  }

  public listFaces(input: shapes.RekognitionListFacesRequest): RekognitionResponsesListFaces {
    return new RekognitionResponsesListFaces(this, this.__resources, input);
  }

  public listStreamProcessors(input: shapes.RekognitionListStreamProcessorsRequest): RekognitionResponsesListStreamProcessors {
    return new RekognitionResponsesListStreamProcessors(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.RekognitionListTagsForResourceRequest): RekognitionResponsesListTagsForResource {
    return new RekognitionResponsesListTagsForResource(this, this.__resources, input);
  }

  public recognizeCelebrities(input: shapes.RekognitionRecognizeCelebritiesRequest): RekognitionResponsesRecognizeCelebrities {
    return new RekognitionResponsesRecognizeCelebrities(this, this.__resources, input);
  }

  public searchFaces(input: shapes.RekognitionSearchFacesRequest): RekognitionResponsesSearchFaces {
    return new RekognitionResponsesSearchFaces(this, this.__resources, input);
  }

  public searchFacesByImage(input: shapes.RekognitionSearchFacesByImageRequest): RekognitionResponsesSearchFacesByImage {
    return new RekognitionResponsesSearchFacesByImage(this, this.__resources, input);
  }

  public startCelebrityRecognition(input: shapes.RekognitionStartCelebrityRecognitionRequest): RekognitionResponsesStartCelebrityRecognition {
    return new RekognitionResponsesStartCelebrityRecognition(this, this.__resources, input);
  }

  public startContentModeration(input: shapes.RekognitionStartContentModerationRequest): RekognitionResponsesStartContentModeration {
    return new RekognitionResponsesStartContentModeration(this, this.__resources, input);
  }

  public startFaceDetection(input: shapes.RekognitionStartFaceDetectionRequest): RekognitionResponsesStartFaceDetection {
    return new RekognitionResponsesStartFaceDetection(this, this.__resources, input);
  }

  public startFaceSearch(input: shapes.RekognitionStartFaceSearchRequest): RekognitionResponsesStartFaceSearch {
    return new RekognitionResponsesStartFaceSearch(this, this.__resources, input);
  }

  public startLabelDetection(input: shapes.RekognitionStartLabelDetectionRequest): RekognitionResponsesStartLabelDetection {
    return new RekognitionResponsesStartLabelDetection(this, this.__resources, input);
  }

  public startPersonTracking(input: shapes.RekognitionStartPersonTrackingRequest): RekognitionResponsesStartPersonTracking {
    return new RekognitionResponsesStartPersonTracking(this, this.__resources, input);
  }

  public startProjectVersion(input: shapes.RekognitionStartProjectVersionRequest): RekognitionResponsesStartProjectVersion {
    return new RekognitionResponsesStartProjectVersion(this, this.__resources, input);
  }

  public startSegmentDetection(input: shapes.RekognitionStartSegmentDetectionRequest): RekognitionResponsesStartSegmentDetection {
    return new RekognitionResponsesStartSegmentDetection(this, this.__resources, input);
  }

  public startStreamProcessor(input: shapes.RekognitionStartStreamProcessorRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startStreamProcessor',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.StartStreamProcessor'),
        parameters: {
          Name: input.name,
        },
      },
    };
    new cr.AwsCustomResource(this, 'StartStreamProcessor', props);
  }

  public startTextDetection(input: shapes.RekognitionStartTextDetectionRequest): RekognitionResponsesStartTextDetection {
    return new RekognitionResponsesStartTextDetection(this, this.__resources, input);
  }

  public stopProjectVersion(input: shapes.RekognitionStopProjectVersionRequest): RekognitionResponsesStopProjectVersion {
    return new RekognitionResponsesStopProjectVersion(this, this.__resources, input);
  }

  public stopStreamProcessor(input: shapes.RekognitionStopStreamProcessorRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopStreamProcessor',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.StopStreamProcessor'),
        parameters: {
          Name: input.name,
        },
      },
    };
    new cr.AwsCustomResource(this, 'StopStreamProcessor', props);
  }

  public tagResource(input: shapes.RekognitionTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.TagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.RekognitionUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.UntagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

}

export class RekognitionResponsesCompareFaces {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RekognitionCompareFacesRequest) {
  }

  public get sourceImageFace(): RekognitionResponsesCompareFacesSourceImageFace {
    return new RekognitionResponsesCompareFacesSourceImageFace(this.__scope, this.__resources, this.__input);
  }

  public get faceMatches(): shapes.RekognitionCompareFacesMatch[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'compareFaces',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.CompareFaces.FaceMatches'),
        outputPath: 'FaceMatches',
        parameters: {
          SourceImage: {
            Bytes: {
            },
            S3Object: {
              Bucket: this.__input.sourceImage.s3Object?.bucket,
              Name: this.__input.sourceImage.s3Object?.name,
              Version: this.__input.sourceImage.s3Object?.version,
            },
          },
          TargetImage: {
            Bytes: {
            },
            S3Object: {
              Bucket: this.__input.targetImage.s3Object?.bucket,
              Name: this.__input.targetImage.s3Object?.name,
              Version: this.__input.targetImage.s3Object?.version,
            },
          },
          SimilarityThreshold: this.__input.similarityThreshold,
          QualityFilter: this.__input.qualityFilter,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CompareFaces.FaceMatches', props);
    return resource.getResponseField('FaceMatches') as unknown as shapes.RekognitionCompareFacesMatch[];
  }

  public get unmatchedFaces(): shapes.RekognitionComparedFace[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'compareFaces',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.CompareFaces.UnmatchedFaces'),
        outputPath: 'UnmatchedFaces',
        parameters: {
          SourceImage: {
            Bytes: {
            },
            S3Object: {
              Bucket: this.__input.sourceImage.s3Object?.bucket,
              Name: this.__input.sourceImage.s3Object?.name,
              Version: this.__input.sourceImage.s3Object?.version,
            },
          },
          TargetImage: {
            Bytes: {
            },
            S3Object: {
              Bucket: this.__input.targetImage.s3Object?.bucket,
              Name: this.__input.targetImage.s3Object?.name,
              Version: this.__input.targetImage.s3Object?.version,
            },
          },
          SimilarityThreshold: this.__input.similarityThreshold,
          QualityFilter: this.__input.qualityFilter,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CompareFaces.UnmatchedFaces', props);
    return resource.getResponseField('UnmatchedFaces') as unknown as shapes.RekognitionComparedFace[];
  }

  public get sourceImageOrientationCorrection(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'compareFaces',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.CompareFaces.SourceImageOrientationCorrection'),
        outputPath: 'SourceImageOrientationCorrection',
        parameters: {
          SourceImage: {
            Bytes: {
            },
            S3Object: {
              Bucket: this.__input.sourceImage.s3Object?.bucket,
              Name: this.__input.sourceImage.s3Object?.name,
              Version: this.__input.sourceImage.s3Object?.version,
            },
          },
          TargetImage: {
            Bytes: {
            },
            S3Object: {
              Bucket: this.__input.targetImage.s3Object?.bucket,
              Name: this.__input.targetImage.s3Object?.name,
              Version: this.__input.targetImage.s3Object?.version,
            },
          },
          SimilarityThreshold: this.__input.similarityThreshold,
          QualityFilter: this.__input.qualityFilter,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CompareFaces.SourceImageOrientationCorrection', props);
    return resource.getResponseField('SourceImageOrientationCorrection') as unknown as string;
  }

  public get targetImageOrientationCorrection(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'compareFaces',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.CompareFaces.TargetImageOrientationCorrection'),
        outputPath: 'TargetImageOrientationCorrection',
        parameters: {
          SourceImage: {
            Bytes: {
            },
            S3Object: {
              Bucket: this.__input.sourceImage.s3Object?.bucket,
              Name: this.__input.sourceImage.s3Object?.name,
              Version: this.__input.sourceImage.s3Object?.version,
            },
          },
          TargetImage: {
            Bytes: {
            },
            S3Object: {
              Bucket: this.__input.targetImage.s3Object?.bucket,
              Name: this.__input.targetImage.s3Object?.name,
              Version: this.__input.targetImage.s3Object?.version,
            },
          },
          SimilarityThreshold: this.__input.similarityThreshold,
          QualityFilter: this.__input.qualityFilter,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CompareFaces.TargetImageOrientationCorrection', props);
    return resource.getResponseField('TargetImageOrientationCorrection') as unknown as string;
  }

}

export class RekognitionResponsesCompareFacesSourceImageFace {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RekognitionCompareFacesRequest) {
  }

  public get boundingBox(): RekognitionResponsesCompareFacesSourceImageFaceBoundingBox {
    return new RekognitionResponsesCompareFacesSourceImageFaceBoundingBox(this.__scope, this.__resources, this.__input);
  }

  public get confidence(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'compareFaces',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.CompareFaces.SourceImageFace.Confidence'),
        outputPath: 'SourceImageFace.Confidence',
        parameters: {
          SourceImage: {
            Bytes: {
            },
            S3Object: {
              Bucket: this.__input.sourceImage.s3Object?.bucket,
              Name: this.__input.sourceImage.s3Object?.name,
              Version: this.__input.sourceImage.s3Object?.version,
            },
          },
          TargetImage: {
            Bytes: {
            },
            S3Object: {
              Bucket: this.__input.targetImage.s3Object?.bucket,
              Name: this.__input.targetImage.s3Object?.name,
              Version: this.__input.targetImage.s3Object?.version,
            },
          },
          SimilarityThreshold: this.__input.similarityThreshold,
          QualityFilter: this.__input.qualityFilter,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CompareFaces.SourceImageFace.Confidence', props);
    return resource.getResponseField('SourceImageFace.Confidence') as unknown as number;
  }

}

export class RekognitionResponsesCompareFacesSourceImageFaceBoundingBox {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RekognitionCompareFacesRequest) {
  }

  public get width(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'compareFaces',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.CompareFaces.SourceImageFace.BoundingBox.Width'),
        outputPath: 'SourceImageFace.BoundingBox.Width',
        parameters: {
          SourceImage: {
            Bytes: {
            },
            S3Object: {
              Bucket: this.__input.sourceImage.s3Object?.bucket,
              Name: this.__input.sourceImage.s3Object?.name,
              Version: this.__input.sourceImage.s3Object?.version,
            },
          },
          TargetImage: {
            Bytes: {
            },
            S3Object: {
              Bucket: this.__input.targetImage.s3Object?.bucket,
              Name: this.__input.targetImage.s3Object?.name,
              Version: this.__input.targetImage.s3Object?.version,
            },
          },
          SimilarityThreshold: this.__input.similarityThreshold,
          QualityFilter: this.__input.qualityFilter,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CompareFaces.SourceImageFace.BoundingBox.Width', props);
    return resource.getResponseField('SourceImageFace.BoundingBox.Width') as unknown as number;
  }

  public get height(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'compareFaces',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.CompareFaces.SourceImageFace.BoundingBox.Height'),
        outputPath: 'SourceImageFace.BoundingBox.Height',
        parameters: {
          SourceImage: {
            Bytes: {
            },
            S3Object: {
              Bucket: this.__input.sourceImage.s3Object?.bucket,
              Name: this.__input.sourceImage.s3Object?.name,
              Version: this.__input.sourceImage.s3Object?.version,
            },
          },
          TargetImage: {
            Bytes: {
            },
            S3Object: {
              Bucket: this.__input.targetImage.s3Object?.bucket,
              Name: this.__input.targetImage.s3Object?.name,
              Version: this.__input.targetImage.s3Object?.version,
            },
          },
          SimilarityThreshold: this.__input.similarityThreshold,
          QualityFilter: this.__input.qualityFilter,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CompareFaces.SourceImageFace.BoundingBox.Height', props);
    return resource.getResponseField('SourceImageFace.BoundingBox.Height') as unknown as number;
  }

  public get left(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'compareFaces',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.CompareFaces.SourceImageFace.BoundingBox.Left'),
        outputPath: 'SourceImageFace.BoundingBox.Left',
        parameters: {
          SourceImage: {
            Bytes: {
            },
            S3Object: {
              Bucket: this.__input.sourceImage.s3Object?.bucket,
              Name: this.__input.sourceImage.s3Object?.name,
              Version: this.__input.sourceImage.s3Object?.version,
            },
          },
          TargetImage: {
            Bytes: {
            },
            S3Object: {
              Bucket: this.__input.targetImage.s3Object?.bucket,
              Name: this.__input.targetImage.s3Object?.name,
              Version: this.__input.targetImage.s3Object?.version,
            },
          },
          SimilarityThreshold: this.__input.similarityThreshold,
          QualityFilter: this.__input.qualityFilter,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CompareFaces.SourceImageFace.BoundingBox.Left', props);
    return resource.getResponseField('SourceImageFace.BoundingBox.Left') as unknown as number;
  }

  public get top(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'compareFaces',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.CompareFaces.SourceImageFace.BoundingBox.Top'),
        outputPath: 'SourceImageFace.BoundingBox.Top',
        parameters: {
          SourceImage: {
            Bytes: {
            },
            S3Object: {
              Bucket: this.__input.sourceImage.s3Object?.bucket,
              Name: this.__input.sourceImage.s3Object?.name,
              Version: this.__input.sourceImage.s3Object?.version,
            },
          },
          TargetImage: {
            Bytes: {
            },
            S3Object: {
              Bucket: this.__input.targetImage.s3Object?.bucket,
              Name: this.__input.targetImage.s3Object?.name,
              Version: this.__input.targetImage.s3Object?.version,
            },
          },
          SimilarityThreshold: this.__input.similarityThreshold,
          QualityFilter: this.__input.qualityFilter,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CompareFaces.SourceImageFace.BoundingBox.Top', props);
    return resource.getResponseField('SourceImageFace.BoundingBox.Top') as unknown as number;
  }

}

export class RekognitionResponsesCreateCollection {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RekognitionCreateCollectionRequest) {
  }

  public get statusCode(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCollection',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.CreateCollection.StatusCode'),
        outputPath: 'StatusCode',
        parameters: {
          CollectionId: this.__input.collectionId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCollection.StatusCode', props);
    return resource.getResponseField('StatusCode') as unknown as number;
  }

  public get collectionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCollection',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.CreateCollection.CollectionArn'),
        outputPath: 'CollectionArn',
        parameters: {
          CollectionId: this.__input.collectionId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCollection.CollectionArn', props);
    return resource.getResponseField('CollectionArn') as unknown as string;
  }

  public get faceModelVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCollection',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.CreateCollection.FaceModelVersion'),
        outputPath: 'FaceModelVersion',
        parameters: {
          CollectionId: this.__input.collectionId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCollection.FaceModelVersion', props);
    return resource.getResponseField('FaceModelVersion') as unknown as string;
  }

}

export class RekognitionResponsesCreateProject {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RekognitionCreateProjectRequest) {
  }

  public get projectArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProject',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.CreateProject.ProjectArn'),
        outputPath: 'ProjectArn',
        parameters: {
          ProjectName: this.__input.projectName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProject.ProjectArn', props);
    return resource.getResponseField('ProjectArn') as unknown as string;
  }

}

export class RekognitionResponsesCreateProjectVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RekognitionCreateProjectVersionRequest) {
  }

  public get projectVersionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProjectVersion',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.CreateProjectVersion.ProjectVersionArn'),
        outputPath: 'ProjectVersionArn',
        parameters: {
          ProjectArn: this.__input.projectArn,
          VersionName: this.__input.versionName,
          OutputConfig: {
            S3Bucket: this.__input.outputConfig.s3Bucket,
            S3KeyPrefix: this.__input.outputConfig.s3KeyPrefix,
          },
          TrainingData: {
            Assets: this.__input.trainingData.assets,
          },
          TestingData: {
            Assets: this.__input.testingData.assets,
            AutoCreate: this.__input.testingData.autoCreate,
          },
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProjectVersion.ProjectVersionArn', props);
    return resource.getResponseField('ProjectVersionArn') as unknown as string;
  }

}

export class RekognitionResponsesCreateStreamProcessor {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RekognitionCreateStreamProcessorRequest) {
  }

  public get streamProcessorArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStreamProcessor',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.CreateStreamProcessor.StreamProcessorArn'),
        outputPath: 'StreamProcessorArn',
        parameters: {
          Input: {
            KinesisVideoStream: {
              Arn: this.__input.input.kinesisVideoStream?.arn,
            },
          },
          Output: {
            KinesisDataStream: {
              Arn: this.__input.output.kinesisDataStream?.arn,
            },
          },
          Name: this.__input.name,
          Settings: {
            FaceSearch: {
              CollectionId: this.__input.settings.faceSearch?.collectionId,
              FaceMatchThreshold: this.__input.settings.faceSearch?.faceMatchThreshold,
            },
          },
          RoleArn: this.__input.roleArn,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStreamProcessor.StreamProcessorArn', props);
    return resource.getResponseField('StreamProcessorArn') as unknown as string;
  }

}

export class RekognitionResponsesDeleteCollection {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RekognitionDeleteCollectionRequest) {
  }

  public get statusCode(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCollection',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.DeleteCollection.StatusCode'),
        outputPath: 'StatusCode',
        parameters: {
          CollectionId: this.__input.collectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCollection.StatusCode', props);
    return resource.getResponseField('StatusCode') as unknown as number;
  }

}

export class RekognitionResponsesDeleteFaces {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RekognitionDeleteFacesRequest) {
  }

  public get deletedFaces(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFaces',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.DeleteFaces.DeletedFaces'),
        outputPath: 'DeletedFaces',
        parameters: {
          CollectionId: this.__input.collectionId,
          FaceIds: this.__input.faceIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFaces.DeletedFaces', props);
    return resource.getResponseField('DeletedFaces') as unknown as string[];
  }

}

export class RekognitionResponsesDeleteProject {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RekognitionDeleteProjectRequest) {
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteProject',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.DeleteProject.Status'),
        outputPath: 'Status',
        parameters: {
          ProjectArn: this.__input.projectArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteProject.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class RekognitionResponsesDeleteProjectVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RekognitionDeleteProjectVersionRequest) {
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteProjectVersion',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.DeleteProjectVersion.Status'),
        outputPath: 'Status',
        parameters: {
          ProjectVersionArn: this.__input.projectVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteProjectVersion.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class RekognitionResponsesDescribeCollection {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RekognitionDescribeCollectionRequest) {
  }

  public get faceCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCollection',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.DescribeCollection.FaceCount'),
        outputPath: 'FaceCount',
        parameters: {
          CollectionId: this.__input.collectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCollection.FaceCount', props);
    return resource.getResponseField('FaceCount') as unknown as number;
  }

  public get faceModelVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCollection',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.DescribeCollection.FaceModelVersion'),
        outputPath: 'FaceModelVersion',
        parameters: {
          CollectionId: this.__input.collectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCollection.FaceModelVersion', props);
    return resource.getResponseField('FaceModelVersion') as unknown as string;
  }

  public get collectionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCollection',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.DescribeCollection.CollectionARN'),
        outputPath: 'CollectionARN',
        parameters: {
          CollectionId: this.__input.collectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCollection.CollectionARN', props);
    return resource.getResponseField('CollectionARN') as unknown as string;
  }

  public get creationTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCollection',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.DescribeCollection.CreationTimestamp'),
        outputPath: 'CreationTimestamp',
        parameters: {
          CollectionId: this.__input.collectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCollection.CreationTimestamp', props);
    return resource.getResponseField('CreationTimestamp') as unknown as string;
  }

}

export class RekognitionResponsesDescribeProjectVersions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RekognitionDescribeProjectVersionsRequest) {
  }

  public get projectVersionDescriptions(): shapes.RekognitionProjectVersionDescription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProjectVersions',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.DescribeProjectVersions.ProjectVersionDescriptions'),
        outputPath: 'ProjectVersionDescriptions',
        parameters: {
          ProjectArn: this.__input.projectArn,
          VersionNames: this.__input.versionNames,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProjectVersions.ProjectVersionDescriptions', props);
    return resource.getResponseField('ProjectVersionDescriptions') as unknown as shapes.RekognitionProjectVersionDescription[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProjectVersions',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.DescribeProjectVersions.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ProjectArn: this.__input.projectArn,
          VersionNames: this.__input.versionNames,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProjectVersions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class RekognitionResponsesDescribeProjects {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RekognitionDescribeProjectsRequest) {
  }

  public get projectDescriptions(): shapes.RekognitionProjectDescription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProjects',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.DescribeProjects.ProjectDescriptions'),
        outputPath: 'ProjectDescriptions',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProjects.ProjectDescriptions', props);
    return resource.getResponseField('ProjectDescriptions') as unknown as shapes.RekognitionProjectDescription[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProjects',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.DescribeProjects.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProjects.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class RekognitionResponsesDescribeStreamProcessor {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RekognitionDescribeStreamProcessorRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStreamProcessor',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.DescribeStreamProcessor.Name'),
        outputPath: 'Name',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStreamProcessor.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get streamProcessorArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStreamProcessor',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.DescribeStreamProcessor.StreamProcessorArn'),
        outputPath: 'StreamProcessorArn',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStreamProcessor.StreamProcessorArn', props);
    return resource.getResponseField('StreamProcessorArn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStreamProcessor',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.DescribeStreamProcessor.Status'),
        outputPath: 'Status',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStreamProcessor.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStreamProcessor',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.DescribeStreamProcessor.StatusMessage'),
        outputPath: 'StatusMessage',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStreamProcessor.StatusMessage', props);
    return resource.getResponseField('StatusMessage') as unknown as string;
  }

  public get creationTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStreamProcessor',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.DescribeStreamProcessor.CreationTimestamp'),
        outputPath: 'CreationTimestamp',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStreamProcessor.CreationTimestamp', props);
    return resource.getResponseField('CreationTimestamp') as unknown as string;
  }

  public get lastUpdateTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStreamProcessor',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.DescribeStreamProcessor.LastUpdateTimestamp'),
        outputPath: 'LastUpdateTimestamp',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStreamProcessor.LastUpdateTimestamp', props);
    return resource.getResponseField('LastUpdateTimestamp') as unknown as string;
  }

  public get input(): RekognitionResponsesDescribeStreamProcessorInput {
    return new RekognitionResponsesDescribeStreamProcessorInput(this.__scope, this.__resources, this.__input);
  }

  public get output(): RekognitionResponsesDescribeStreamProcessorOutput {
    return new RekognitionResponsesDescribeStreamProcessorOutput(this.__scope, this.__resources, this.__input);
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStreamProcessor',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.DescribeStreamProcessor.RoleArn'),
        outputPath: 'RoleArn',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStreamProcessor.RoleArn', props);
    return resource.getResponseField('RoleArn') as unknown as string;
  }

  public get settings(): RekognitionResponsesDescribeStreamProcessorSettings {
    return new RekognitionResponsesDescribeStreamProcessorSettings(this.__scope, this.__resources, this.__input);
  }

}

export class RekognitionResponsesDescribeStreamProcessorInput {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RekognitionDescribeStreamProcessorRequest) {
  }

  public get kinesisVideoStream(): RekognitionResponsesDescribeStreamProcessorInputKinesisVideoStream {
    return new RekognitionResponsesDescribeStreamProcessorInputKinesisVideoStream(this.__scope, this.__resources, this.__input);
  }

}

export class RekognitionResponsesDescribeStreamProcessorInputKinesisVideoStream {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RekognitionDescribeStreamProcessorRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStreamProcessor',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.DescribeStreamProcessor.Input.KinesisVideoStream.Arn'),
        outputPath: 'Input.KinesisVideoStream.Arn',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStreamProcessor.Input.KinesisVideoStream.Arn', props);
    return resource.getResponseField('Input.KinesisVideoStream.Arn') as unknown as string;
  }

}

export class RekognitionResponsesDescribeStreamProcessorOutput {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RekognitionDescribeStreamProcessorRequest) {
  }

  public get kinesisDataStream(): RekognitionResponsesDescribeStreamProcessorOutputKinesisDataStream {
    return new RekognitionResponsesDescribeStreamProcessorOutputKinesisDataStream(this.__scope, this.__resources, this.__input);
  }

}

export class RekognitionResponsesDescribeStreamProcessorOutputKinesisDataStream {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RekognitionDescribeStreamProcessorRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStreamProcessor',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.DescribeStreamProcessor.Output.KinesisDataStream.Arn'),
        outputPath: 'Output.KinesisDataStream.Arn',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStreamProcessor.Output.KinesisDataStream.Arn', props);
    return resource.getResponseField('Output.KinesisDataStream.Arn') as unknown as string;
  }

}

export class RekognitionResponsesDescribeStreamProcessorSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RekognitionDescribeStreamProcessorRequest) {
  }

  public get faceSearch(): RekognitionResponsesDescribeStreamProcessorSettingsFaceSearch {
    return new RekognitionResponsesDescribeStreamProcessorSettingsFaceSearch(this.__scope, this.__resources, this.__input);
  }

}

export class RekognitionResponsesDescribeStreamProcessorSettingsFaceSearch {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RekognitionDescribeStreamProcessorRequest) {
  }

  public get collectionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStreamProcessor',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.DescribeStreamProcessor.Settings.FaceSearch.CollectionId'),
        outputPath: 'Settings.FaceSearch.CollectionId',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStreamProcessor.Settings.FaceSearch.CollectionId', props);
    return resource.getResponseField('Settings.FaceSearch.CollectionId') as unknown as string;
  }

  public get faceMatchThreshold(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStreamProcessor',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.DescribeStreamProcessor.Settings.FaceSearch.FaceMatchThreshold'),
        outputPath: 'Settings.FaceSearch.FaceMatchThreshold',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStreamProcessor.Settings.FaceSearch.FaceMatchThreshold', props);
    return resource.getResponseField('Settings.FaceSearch.FaceMatchThreshold') as unknown as number;
  }

}

export class RekognitionResponsesDetectCustomLabels {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RekognitionDetectCustomLabelsRequest) {
  }

  public get customLabels(): shapes.RekognitionCustomLabel[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detectCustomLabels',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.DetectCustomLabels.CustomLabels'),
        outputPath: 'CustomLabels',
        parameters: {
          ProjectVersionArn: this.__input.projectVersionArn,
          Image: {
            Bytes: {
            },
            S3Object: {
              Bucket: this.__input.image.s3Object?.bucket,
              Name: this.__input.image.s3Object?.name,
              Version: this.__input.image.s3Object?.version,
            },
          },
          MaxResults: this.__input.maxResults,
          MinConfidence: this.__input.minConfidence,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DetectCustomLabels.CustomLabels', props);
    return resource.getResponseField('CustomLabels') as unknown as shapes.RekognitionCustomLabel[];
  }

}

export class RekognitionResponsesDetectFaces {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RekognitionDetectFacesRequest) {
  }

  public get faceDetails(): shapes.RekognitionFaceDetail[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detectFaces',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.DetectFaces.FaceDetails'),
        outputPath: 'FaceDetails',
        parameters: {
          Image: {
            Bytes: {
            },
            S3Object: {
              Bucket: this.__input.image.s3Object?.bucket,
              Name: this.__input.image.s3Object?.name,
              Version: this.__input.image.s3Object?.version,
            },
          },
          Attributes: this.__input.attributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DetectFaces.FaceDetails', props);
    return resource.getResponseField('FaceDetails') as unknown as shapes.RekognitionFaceDetail[];
  }

  public get orientationCorrection(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detectFaces',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.DetectFaces.OrientationCorrection'),
        outputPath: 'OrientationCorrection',
        parameters: {
          Image: {
            Bytes: {
            },
            S3Object: {
              Bucket: this.__input.image.s3Object?.bucket,
              Name: this.__input.image.s3Object?.name,
              Version: this.__input.image.s3Object?.version,
            },
          },
          Attributes: this.__input.attributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DetectFaces.OrientationCorrection', props);
    return resource.getResponseField('OrientationCorrection') as unknown as string;
  }

}

export class RekognitionResponsesDetectLabels {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RekognitionDetectLabelsRequest) {
  }

  public get labels(): shapes.RekognitionLabel[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detectLabels',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.DetectLabels.Labels'),
        outputPath: 'Labels',
        parameters: {
          Image: {
            Bytes: {
            },
            S3Object: {
              Bucket: this.__input.image.s3Object?.bucket,
              Name: this.__input.image.s3Object?.name,
              Version: this.__input.image.s3Object?.version,
            },
          },
          MaxLabels: this.__input.maxLabels,
          MinConfidence: this.__input.minConfidence,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DetectLabels.Labels', props);
    return resource.getResponseField('Labels') as unknown as shapes.RekognitionLabel[];
  }

  public get orientationCorrection(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detectLabels',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.DetectLabels.OrientationCorrection'),
        outputPath: 'OrientationCorrection',
        parameters: {
          Image: {
            Bytes: {
            },
            S3Object: {
              Bucket: this.__input.image.s3Object?.bucket,
              Name: this.__input.image.s3Object?.name,
              Version: this.__input.image.s3Object?.version,
            },
          },
          MaxLabels: this.__input.maxLabels,
          MinConfidence: this.__input.minConfidence,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DetectLabels.OrientationCorrection', props);
    return resource.getResponseField('OrientationCorrection') as unknown as string;
  }

  public get labelModelVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detectLabels',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.DetectLabels.LabelModelVersion'),
        outputPath: 'LabelModelVersion',
        parameters: {
          Image: {
            Bytes: {
            },
            S3Object: {
              Bucket: this.__input.image.s3Object?.bucket,
              Name: this.__input.image.s3Object?.name,
              Version: this.__input.image.s3Object?.version,
            },
          },
          MaxLabels: this.__input.maxLabels,
          MinConfidence: this.__input.minConfidence,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DetectLabels.LabelModelVersion', props);
    return resource.getResponseField('LabelModelVersion') as unknown as string;
  }

}

export class RekognitionResponsesDetectModerationLabels {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RekognitionDetectModerationLabelsRequest) {
  }

  public get moderationLabels(): shapes.RekognitionModerationLabel[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detectModerationLabels',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.DetectModerationLabels.ModerationLabels'),
        outputPath: 'ModerationLabels',
        parameters: {
          Image: {
            Bytes: {
            },
            S3Object: {
              Bucket: this.__input.image.s3Object?.bucket,
              Name: this.__input.image.s3Object?.name,
              Version: this.__input.image.s3Object?.version,
            },
          },
          MinConfidence: this.__input.minConfidence,
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
    const resource = new cr.AwsCustomResource(this.__scope, 'DetectModerationLabels.ModerationLabels', props);
    return resource.getResponseField('ModerationLabels') as unknown as shapes.RekognitionModerationLabel[];
  }

  public get moderationModelVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detectModerationLabels',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.DetectModerationLabels.ModerationModelVersion'),
        outputPath: 'ModerationModelVersion',
        parameters: {
          Image: {
            Bytes: {
            },
            S3Object: {
              Bucket: this.__input.image.s3Object?.bucket,
              Name: this.__input.image.s3Object?.name,
              Version: this.__input.image.s3Object?.version,
            },
          },
          MinConfidence: this.__input.minConfidence,
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
    const resource = new cr.AwsCustomResource(this.__scope, 'DetectModerationLabels.ModerationModelVersion', props);
    return resource.getResponseField('ModerationModelVersion') as unknown as string;
  }

  public get humanLoopActivationOutput(): RekognitionResponsesDetectModerationLabelsHumanLoopActivationOutput {
    return new RekognitionResponsesDetectModerationLabelsHumanLoopActivationOutput(this.__scope, this.__resources, this.__input);
  }

}

export class RekognitionResponsesDetectModerationLabelsHumanLoopActivationOutput {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RekognitionDetectModerationLabelsRequest) {
  }

  public get humanLoopArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detectModerationLabels',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.DetectModerationLabels.HumanLoopActivationOutput.HumanLoopArn'),
        outputPath: 'HumanLoopActivationOutput.HumanLoopArn',
        parameters: {
          Image: {
            Bytes: {
            },
            S3Object: {
              Bucket: this.__input.image.s3Object?.bucket,
              Name: this.__input.image.s3Object?.name,
              Version: this.__input.image.s3Object?.version,
            },
          },
          MinConfidence: this.__input.minConfidence,
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
    const resource = new cr.AwsCustomResource(this.__scope, 'DetectModerationLabels.HumanLoopActivationOutput.HumanLoopArn', props);
    return resource.getResponseField('HumanLoopActivationOutput.HumanLoopArn') as unknown as string;
  }

  public get humanLoopActivationReasons(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detectModerationLabels',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.DetectModerationLabels.HumanLoopActivationOutput.HumanLoopActivationReasons'),
        outputPath: 'HumanLoopActivationOutput.HumanLoopActivationReasons',
        parameters: {
          Image: {
            Bytes: {
            },
            S3Object: {
              Bucket: this.__input.image.s3Object?.bucket,
              Name: this.__input.image.s3Object?.name,
              Version: this.__input.image.s3Object?.version,
            },
          },
          MinConfidence: this.__input.minConfidence,
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
    const resource = new cr.AwsCustomResource(this.__scope, 'DetectModerationLabels.HumanLoopActivationOutput.HumanLoopActivationReasons', props);
    return resource.getResponseField('HumanLoopActivationOutput.HumanLoopActivationReasons') as unknown as string[];
  }

  public get humanLoopActivationConditionsEvaluationResults(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detectModerationLabels',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.DetectModerationLabels.HumanLoopActivationOutput.HumanLoopActivationConditionsEvaluationResults'),
        outputPath: 'HumanLoopActivationOutput.HumanLoopActivationConditionsEvaluationResults',
        parameters: {
          Image: {
            Bytes: {
            },
            S3Object: {
              Bucket: this.__input.image.s3Object?.bucket,
              Name: this.__input.image.s3Object?.name,
              Version: this.__input.image.s3Object?.version,
            },
          },
          MinConfidence: this.__input.minConfidence,
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
    const resource = new cr.AwsCustomResource(this.__scope, 'DetectModerationLabels.HumanLoopActivationOutput.HumanLoopActivationConditionsEvaluationResults', props);
    return resource.getResponseField('HumanLoopActivationOutput.HumanLoopActivationConditionsEvaluationResults') as unknown as string;
  }

}

export class RekognitionResponsesDetectProtectiveEquipment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RekognitionDetectProtectiveEquipmentRequest) {
  }

  public get protectiveEquipmentModelVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detectProtectiveEquipment',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.DetectProtectiveEquipment.ProtectiveEquipmentModelVersion'),
        outputPath: 'ProtectiveEquipmentModelVersion',
        parameters: {
          Image: {
            Bytes: {
            },
            S3Object: {
              Bucket: this.__input.image.s3Object?.bucket,
              Name: this.__input.image.s3Object?.name,
              Version: this.__input.image.s3Object?.version,
            },
          },
          SummarizationAttributes: {
            MinConfidence: this.__input.summarizationAttributes?.minConfidence,
            RequiredEquipmentTypes: this.__input.summarizationAttributes?.requiredEquipmentTypes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DetectProtectiveEquipment.ProtectiveEquipmentModelVersion', props);
    return resource.getResponseField('ProtectiveEquipmentModelVersion') as unknown as string;
  }

  public get persons(): shapes.RekognitionProtectiveEquipmentPerson[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detectProtectiveEquipment',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.DetectProtectiveEquipment.Persons'),
        outputPath: 'Persons',
        parameters: {
          Image: {
            Bytes: {
            },
            S3Object: {
              Bucket: this.__input.image.s3Object?.bucket,
              Name: this.__input.image.s3Object?.name,
              Version: this.__input.image.s3Object?.version,
            },
          },
          SummarizationAttributes: {
            MinConfidence: this.__input.summarizationAttributes?.minConfidence,
            RequiredEquipmentTypes: this.__input.summarizationAttributes?.requiredEquipmentTypes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DetectProtectiveEquipment.Persons', props);
    return resource.getResponseField('Persons') as unknown as shapes.RekognitionProtectiveEquipmentPerson[];
  }

  public get summary(): RekognitionResponsesDetectProtectiveEquipmentSummary {
    return new RekognitionResponsesDetectProtectiveEquipmentSummary(this.__scope, this.__resources, this.__input);
  }

}

export class RekognitionResponsesDetectProtectiveEquipmentSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RekognitionDetectProtectiveEquipmentRequest) {
  }

  public get personsWithRequiredEquipment(): number[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detectProtectiveEquipment',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.DetectProtectiveEquipment.Summary.PersonsWithRequiredEquipment'),
        outputPath: 'Summary.PersonsWithRequiredEquipment',
        parameters: {
          Image: {
            Bytes: {
            },
            S3Object: {
              Bucket: this.__input.image.s3Object?.bucket,
              Name: this.__input.image.s3Object?.name,
              Version: this.__input.image.s3Object?.version,
            },
          },
          SummarizationAttributes: {
            MinConfidence: this.__input.summarizationAttributes?.minConfidence,
            RequiredEquipmentTypes: this.__input.summarizationAttributes?.requiredEquipmentTypes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DetectProtectiveEquipment.Summary.PersonsWithRequiredEquipment', props);
    return resource.getResponseField('Summary.PersonsWithRequiredEquipment') as unknown as number[];
  }

  public get personsWithoutRequiredEquipment(): number[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detectProtectiveEquipment',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.DetectProtectiveEquipment.Summary.PersonsWithoutRequiredEquipment'),
        outputPath: 'Summary.PersonsWithoutRequiredEquipment',
        parameters: {
          Image: {
            Bytes: {
            },
            S3Object: {
              Bucket: this.__input.image.s3Object?.bucket,
              Name: this.__input.image.s3Object?.name,
              Version: this.__input.image.s3Object?.version,
            },
          },
          SummarizationAttributes: {
            MinConfidence: this.__input.summarizationAttributes?.minConfidence,
            RequiredEquipmentTypes: this.__input.summarizationAttributes?.requiredEquipmentTypes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DetectProtectiveEquipment.Summary.PersonsWithoutRequiredEquipment', props);
    return resource.getResponseField('Summary.PersonsWithoutRequiredEquipment') as unknown as number[];
  }

  public get personsIndeterminate(): number[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detectProtectiveEquipment',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.DetectProtectiveEquipment.Summary.PersonsIndeterminate'),
        outputPath: 'Summary.PersonsIndeterminate',
        parameters: {
          Image: {
            Bytes: {
            },
            S3Object: {
              Bucket: this.__input.image.s3Object?.bucket,
              Name: this.__input.image.s3Object?.name,
              Version: this.__input.image.s3Object?.version,
            },
          },
          SummarizationAttributes: {
            MinConfidence: this.__input.summarizationAttributes?.minConfidence,
            RequiredEquipmentTypes: this.__input.summarizationAttributes?.requiredEquipmentTypes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DetectProtectiveEquipment.Summary.PersonsIndeterminate', props);
    return resource.getResponseField('Summary.PersonsIndeterminate') as unknown as number[];
  }

}

export class RekognitionResponsesDetectText {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RekognitionDetectTextRequest) {
  }

  public get textDetections(): shapes.RekognitionTextDetection[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detectText',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.DetectText.TextDetections'),
        outputPath: 'TextDetections',
        parameters: {
          Image: {
            Bytes: {
            },
            S3Object: {
              Bucket: this.__input.image.s3Object?.bucket,
              Name: this.__input.image.s3Object?.name,
              Version: this.__input.image.s3Object?.version,
            },
          },
          Filters: {
            WordFilter: {
              MinConfidence: this.__input.filters?.wordFilter?.minConfidence,
              MinBoundingBoxHeight: this.__input.filters?.wordFilter?.minBoundingBoxHeight,
              MinBoundingBoxWidth: this.__input.filters?.wordFilter?.minBoundingBoxWidth,
            },
            RegionsOfInterest: this.__input.filters?.regionsOfInterest,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DetectText.TextDetections', props);
    return resource.getResponseField('TextDetections') as unknown as shapes.RekognitionTextDetection[];
  }

  public get textModelVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detectText',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.DetectText.TextModelVersion'),
        outputPath: 'TextModelVersion',
        parameters: {
          Image: {
            Bytes: {
            },
            S3Object: {
              Bucket: this.__input.image.s3Object?.bucket,
              Name: this.__input.image.s3Object?.name,
              Version: this.__input.image.s3Object?.version,
            },
          },
          Filters: {
            WordFilter: {
              MinConfidence: this.__input.filters?.wordFilter?.minConfidence,
              MinBoundingBoxHeight: this.__input.filters?.wordFilter?.minBoundingBoxHeight,
              MinBoundingBoxWidth: this.__input.filters?.wordFilter?.minBoundingBoxWidth,
            },
            RegionsOfInterest: this.__input.filters?.regionsOfInterest,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DetectText.TextModelVersion', props);
    return resource.getResponseField('TextModelVersion') as unknown as string;
  }

}

export class RekognitionResponsesFetchCelebrityInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RekognitionGetCelebrityInfoRequest) {
  }

  public get urls(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCelebrityInfo',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetCelebrityInfo.Urls'),
        outputPath: 'Urls',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCelebrityInfo.Urls', props);
    return resource.getResponseField('Urls') as unknown as string[];
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCelebrityInfo',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetCelebrityInfo.Name'),
        outputPath: 'Name',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCelebrityInfo.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class RekognitionResponsesFetchCelebrityRecognition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RekognitionGetCelebrityRecognitionRequest) {
  }

  public get jobStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCelebrityRecognition',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetCelebrityRecognition.JobStatus'),
        outputPath: 'JobStatus',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          SortBy: this.__input.sortBy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCelebrityRecognition.JobStatus', props);
    return resource.getResponseField('JobStatus') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCelebrityRecognition',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetCelebrityRecognition.StatusMessage'),
        outputPath: 'StatusMessage',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          SortBy: this.__input.sortBy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCelebrityRecognition.StatusMessage', props);
    return resource.getResponseField('StatusMessage') as unknown as string;
  }

  public get videoMetadata(): RekognitionResponsesFetchCelebrityRecognitionVideoMetadata {
    return new RekognitionResponsesFetchCelebrityRecognitionVideoMetadata(this.__scope, this.__resources, this.__input);
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCelebrityRecognition',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetCelebrityRecognition.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          SortBy: this.__input.sortBy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCelebrityRecognition.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get celebrities(): shapes.RekognitionCelebrityRecognition[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCelebrityRecognition',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetCelebrityRecognition.Celebrities'),
        outputPath: 'Celebrities',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          SortBy: this.__input.sortBy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCelebrityRecognition.Celebrities', props);
    return resource.getResponseField('Celebrities') as unknown as shapes.RekognitionCelebrityRecognition[];
  }

}

export class RekognitionResponsesFetchCelebrityRecognitionVideoMetadata {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RekognitionGetCelebrityRecognitionRequest) {
  }

  public get codec(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCelebrityRecognition',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetCelebrityRecognition.VideoMetadata.Codec'),
        outputPath: 'VideoMetadata.Codec',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          SortBy: this.__input.sortBy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCelebrityRecognition.VideoMetadata.Codec', props);
    return resource.getResponseField('VideoMetadata.Codec') as unknown as string;
  }

  public get durationMillis(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCelebrityRecognition',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetCelebrityRecognition.VideoMetadata.DurationMillis'),
        outputPath: 'VideoMetadata.DurationMillis',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          SortBy: this.__input.sortBy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCelebrityRecognition.VideoMetadata.DurationMillis', props);
    return resource.getResponseField('VideoMetadata.DurationMillis') as unknown as number;
  }

  public get format(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCelebrityRecognition',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetCelebrityRecognition.VideoMetadata.Format'),
        outputPath: 'VideoMetadata.Format',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          SortBy: this.__input.sortBy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCelebrityRecognition.VideoMetadata.Format', props);
    return resource.getResponseField('VideoMetadata.Format') as unknown as string;
  }

  public get frameRate(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCelebrityRecognition',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetCelebrityRecognition.VideoMetadata.FrameRate'),
        outputPath: 'VideoMetadata.FrameRate',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          SortBy: this.__input.sortBy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCelebrityRecognition.VideoMetadata.FrameRate', props);
    return resource.getResponseField('VideoMetadata.FrameRate') as unknown as number;
  }

  public get frameHeight(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCelebrityRecognition',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetCelebrityRecognition.VideoMetadata.FrameHeight'),
        outputPath: 'VideoMetadata.FrameHeight',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          SortBy: this.__input.sortBy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCelebrityRecognition.VideoMetadata.FrameHeight', props);
    return resource.getResponseField('VideoMetadata.FrameHeight') as unknown as number;
  }

  public get frameWidth(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCelebrityRecognition',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetCelebrityRecognition.VideoMetadata.FrameWidth'),
        outputPath: 'VideoMetadata.FrameWidth',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          SortBy: this.__input.sortBy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCelebrityRecognition.VideoMetadata.FrameWidth', props);
    return resource.getResponseField('VideoMetadata.FrameWidth') as unknown as number;
  }

}

export class RekognitionResponsesFetchContentModeration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RekognitionGetContentModerationRequest) {
  }

  public get jobStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContentModeration',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetContentModeration.JobStatus'),
        outputPath: 'JobStatus',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          SortBy: this.__input.sortBy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContentModeration.JobStatus', props);
    return resource.getResponseField('JobStatus') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContentModeration',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetContentModeration.StatusMessage'),
        outputPath: 'StatusMessage',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          SortBy: this.__input.sortBy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContentModeration.StatusMessage', props);
    return resource.getResponseField('StatusMessage') as unknown as string;
  }

  public get videoMetadata(): RekognitionResponsesFetchContentModerationVideoMetadata {
    return new RekognitionResponsesFetchContentModerationVideoMetadata(this.__scope, this.__resources, this.__input);
  }

  public get moderationLabels(): shapes.RekognitionContentModerationDetection[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContentModeration',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetContentModeration.ModerationLabels'),
        outputPath: 'ModerationLabels',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          SortBy: this.__input.sortBy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContentModeration.ModerationLabels', props);
    return resource.getResponseField('ModerationLabels') as unknown as shapes.RekognitionContentModerationDetection[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContentModeration',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetContentModeration.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          SortBy: this.__input.sortBy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContentModeration.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get moderationModelVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContentModeration',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetContentModeration.ModerationModelVersion'),
        outputPath: 'ModerationModelVersion',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          SortBy: this.__input.sortBy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContentModeration.ModerationModelVersion', props);
    return resource.getResponseField('ModerationModelVersion') as unknown as string;
  }

}

export class RekognitionResponsesFetchContentModerationVideoMetadata {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RekognitionGetContentModerationRequest) {
  }

  public get codec(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContentModeration',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetContentModeration.VideoMetadata.Codec'),
        outputPath: 'VideoMetadata.Codec',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          SortBy: this.__input.sortBy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContentModeration.VideoMetadata.Codec', props);
    return resource.getResponseField('VideoMetadata.Codec') as unknown as string;
  }

  public get durationMillis(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContentModeration',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetContentModeration.VideoMetadata.DurationMillis'),
        outputPath: 'VideoMetadata.DurationMillis',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          SortBy: this.__input.sortBy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContentModeration.VideoMetadata.DurationMillis', props);
    return resource.getResponseField('VideoMetadata.DurationMillis') as unknown as number;
  }

  public get format(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContentModeration',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetContentModeration.VideoMetadata.Format'),
        outputPath: 'VideoMetadata.Format',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          SortBy: this.__input.sortBy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContentModeration.VideoMetadata.Format', props);
    return resource.getResponseField('VideoMetadata.Format') as unknown as string;
  }

  public get frameRate(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContentModeration',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetContentModeration.VideoMetadata.FrameRate'),
        outputPath: 'VideoMetadata.FrameRate',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          SortBy: this.__input.sortBy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContentModeration.VideoMetadata.FrameRate', props);
    return resource.getResponseField('VideoMetadata.FrameRate') as unknown as number;
  }

  public get frameHeight(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContentModeration',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetContentModeration.VideoMetadata.FrameHeight'),
        outputPath: 'VideoMetadata.FrameHeight',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          SortBy: this.__input.sortBy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContentModeration.VideoMetadata.FrameHeight', props);
    return resource.getResponseField('VideoMetadata.FrameHeight') as unknown as number;
  }

  public get frameWidth(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContentModeration',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetContentModeration.VideoMetadata.FrameWidth'),
        outputPath: 'VideoMetadata.FrameWidth',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          SortBy: this.__input.sortBy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContentModeration.VideoMetadata.FrameWidth', props);
    return resource.getResponseField('VideoMetadata.FrameWidth') as unknown as number;
  }

}

export class RekognitionResponsesFetchFaceDetection {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RekognitionGetFaceDetectionRequest) {
  }

  public get jobStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFaceDetection',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetFaceDetection.JobStatus'),
        outputPath: 'JobStatus',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFaceDetection.JobStatus', props);
    return resource.getResponseField('JobStatus') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFaceDetection',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetFaceDetection.StatusMessage'),
        outputPath: 'StatusMessage',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFaceDetection.StatusMessage', props);
    return resource.getResponseField('StatusMessage') as unknown as string;
  }

  public get videoMetadata(): RekognitionResponsesFetchFaceDetectionVideoMetadata {
    return new RekognitionResponsesFetchFaceDetectionVideoMetadata(this.__scope, this.__resources, this.__input);
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFaceDetection',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetFaceDetection.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFaceDetection.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get faces(): shapes.RekognitionFaceDetection[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFaceDetection',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetFaceDetection.Faces'),
        outputPath: 'Faces',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFaceDetection.Faces', props);
    return resource.getResponseField('Faces') as unknown as shapes.RekognitionFaceDetection[];
  }

}

export class RekognitionResponsesFetchFaceDetectionVideoMetadata {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RekognitionGetFaceDetectionRequest) {
  }

  public get codec(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFaceDetection',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetFaceDetection.VideoMetadata.Codec'),
        outputPath: 'VideoMetadata.Codec',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFaceDetection.VideoMetadata.Codec', props);
    return resource.getResponseField('VideoMetadata.Codec') as unknown as string;
  }

  public get durationMillis(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFaceDetection',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetFaceDetection.VideoMetadata.DurationMillis'),
        outputPath: 'VideoMetadata.DurationMillis',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFaceDetection.VideoMetadata.DurationMillis', props);
    return resource.getResponseField('VideoMetadata.DurationMillis') as unknown as number;
  }

  public get format(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFaceDetection',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetFaceDetection.VideoMetadata.Format'),
        outputPath: 'VideoMetadata.Format',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFaceDetection.VideoMetadata.Format', props);
    return resource.getResponseField('VideoMetadata.Format') as unknown as string;
  }

  public get frameRate(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFaceDetection',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetFaceDetection.VideoMetadata.FrameRate'),
        outputPath: 'VideoMetadata.FrameRate',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFaceDetection.VideoMetadata.FrameRate', props);
    return resource.getResponseField('VideoMetadata.FrameRate') as unknown as number;
  }

  public get frameHeight(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFaceDetection',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetFaceDetection.VideoMetadata.FrameHeight'),
        outputPath: 'VideoMetadata.FrameHeight',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFaceDetection.VideoMetadata.FrameHeight', props);
    return resource.getResponseField('VideoMetadata.FrameHeight') as unknown as number;
  }

  public get frameWidth(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFaceDetection',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetFaceDetection.VideoMetadata.FrameWidth'),
        outputPath: 'VideoMetadata.FrameWidth',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFaceDetection.VideoMetadata.FrameWidth', props);
    return resource.getResponseField('VideoMetadata.FrameWidth') as unknown as number;
  }

}

export class RekognitionResponsesFetchFaceSearch {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RekognitionGetFaceSearchRequest) {
  }

  public get jobStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFaceSearch',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetFaceSearch.JobStatus'),
        outputPath: 'JobStatus',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          SortBy: this.__input.sortBy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFaceSearch.JobStatus', props);
    return resource.getResponseField('JobStatus') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFaceSearch',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetFaceSearch.StatusMessage'),
        outputPath: 'StatusMessage',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          SortBy: this.__input.sortBy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFaceSearch.StatusMessage', props);
    return resource.getResponseField('StatusMessage') as unknown as string;
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFaceSearch',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetFaceSearch.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          SortBy: this.__input.sortBy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFaceSearch.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get videoMetadata(): RekognitionResponsesFetchFaceSearchVideoMetadata {
    return new RekognitionResponsesFetchFaceSearchVideoMetadata(this.__scope, this.__resources, this.__input);
  }

  public get persons(): shapes.RekognitionPersonMatch[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFaceSearch',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetFaceSearch.Persons'),
        outputPath: 'Persons',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          SortBy: this.__input.sortBy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFaceSearch.Persons', props);
    return resource.getResponseField('Persons') as unknown as shapes.RekognitionPersonMatch[];
  }

}

export class RekognitionResponsesFetchFaceSearchVideoMetadata {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RekognitionGetFaceSearchRequest) {
  }

  public get codec(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFaceSearch',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetFaceSearch.VideoMetadata.Codec'),
        outputPath: 'VideoMetadata.Codec',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          SortBy: this.__input.sortBy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFaceSearch.VideoMetadata.Codec', props);
    return resource.getResponseField('VideoMetadata.Codec') as unknown as string;
  }

  public get durationMillis(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFaceSearch',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetFaceSearch.VideoMetadata.DurationMillis'),
        outputPath: 'VideoMetadata.DurationMillis',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          SortBy: this.__input.sortBy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFaceSearch.VideoMetadata.DurationMillis', props);
    return resource.getResponseField('VideoMetadata.DurationMillis') as unknown as number;
  }

  public get format(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFaceSearch',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetFaceSearch.VideoMetadata.Format'),
        outputPath: 'VideoMetadata.Format',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          SortBy: this.__input.sortBy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFaceSearch.VideoMetadata.Format', props);
    return resource.getResponseField('VideoMetadata.Format') as unknown as string;
  }

  public get frameRate(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFaceSearch',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetFaceSearch.VideoMetadata.FrameRate'),
        outputPath: 'VideoMetadata.FrameRate',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          SortBy: this.__input.sortBy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFaceSearch.VideoMetadata.FrameRate', props);
    return resource.getResponseField('VideoMetadata.FrameRate') as unknown as number;
  }

  public get frameHeight(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFaceSearch',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetFaceSearch.VideoMetadata.FrameHeight'),
        outputPath: 'VideoMetadata.FrameHeight',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          SortBy: this.__input.sortBy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFaceSearch.VideoMetadata.FrameHeight', props);
    return resource.getResponseField('VideoMetadata.FrameHeight') as unknown as number;
  }

  public get frameWidth(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFaceSearch',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetFaceSearch.VideoMetadata.FrameWidth'),
        outputPath: 'VideoMetadata.FrameWidth',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          SortBy: this.__input.sortBy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFaceSearch.VideoMetadata.FrameWidth', props);
    return resource.getResponseField('VideoMetadata.FrameWidth') as unknown as number;
  }

}

export class RekognitionResponsesFetchLabelDetection {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RekognitionGetLabelDetectionRequest) {
  }

  public get jobStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLabelDetection',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetLabelDetection.JobStatus'),
        outputPath: 'JobStatus',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          SortBy: this.__input.sortBy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLabelDetection.JobStatus', props);
    return resource.getResponseField('JobStatus') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLabelDetection',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetLabelDetection.StatusMessage'),
        outputPath: 'StatusMessage',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          SortBy: this.__input.sortBy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLabelDetection.StatusMessage', props);
    return resource.getResponseField('StatusMessage') as unknown as string;
  }

  public get videoMetadata(): RekognitionResponsesFetchLabelDetectionVideoMetadata {
    return new RekognitionResponsesFetchLabelDetectionVideoMetadata(this.__scope, this.__resources, this.__input);
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLabelDetection',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetLabelDetection.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          SortBy: this.__input.sortBy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLabelDetection.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get labels(): shapes.RekognitionLabelDetection[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLabelDetection',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetLabelDetection.Labels'),
        outputPath: 'Labels',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          SortBy: this.__input.sortBy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLabelDetection.Labels', props);
    return resource.getResponseField('Labels') as unknown as shapes.RekognitionLabelDetection[];
  }

  public get labelModelVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLabelDetection',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetLabelDetection.LabelModelVersion'),
        outputPath: 'LabelModelVersion',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          SortBy: this.__input.sortBy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLabelDetection.LabelModelVersion', props);
    return resource.getResponseField('LabelModelVersion') as unknown as string;
  }

}

export class RekognitionResponsesFetchLabelDetectionVideoMetadata {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RekognitionGetLabelDetectionRequest) {
  }

  public get codec(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLabelDetection',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetLabelDetection.VideoMetadata.Codec'),
        outputPath: 'VideoMetadata.Codec',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          SortBy: this.__input.sortBy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLabelDetection.VideoMetadata.Codec', props);
    return resource.getResponseField('VideoMetadata.Codec') as unknown as string;
  }

  public get durationMillis(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLabelDetection',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetLabelDetection.VideoMetadata.DurationMillis'),
        outputPath: 'VideoMetadata.DurationMillis',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          SortBy: this.__input.sortBy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLabelDetection.VideoMetadata.DurationMillis', props);
    return resource.getResponseField('VideoMetadata.DurationMillis') as unknown as number;
  }

  public get format(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLabelDetection',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetLabelDetection.VideoMetadata.Format'),
        outputPath: 'VideoMetadata.Format',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          SortBy: this.__input.sortBy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLabelDetection.VideoMetadata.Format', props);
    return resource.getResponseField('VideoMetadata.Format') as unknown as string;
  }

  public get frameRate(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLabelDetection',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetLabelDetection.VideoMetadata.FrameRate'),
        outputPath: 'VideoMetadata.FrameRate',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          SortBy: this.__input.sortBy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLabelDetection.VideoMetadata.FrameRate', props);
    return resource.getResponseField('VideoMetadata.FrameRate') as unknown as number;
  }

  public get frameHeight(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLabelDetection',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetLabelDetection.VideoMetadata.FrameHeight'),
        outputPath: 'VideoMetadata.FrameHeight',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          SortBy: this.__input.sortBy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLabelDetection.VideoMetadata.FrameHeight', props);
    return resource.getResponseField('VideoMetadata.FrameHeight') as unknown as number;
  }

  public get frameWidth(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLabelDetection',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetLabelDetection.VideoMetadata.FrameWidth'),
        outputPath: 'VideoMetadata.FrameWidth',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          SortBy: this.__input.sortBy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLabelDetection.VideoMetadata.FrameWidth', props);
    return resource.getResponseField('VideoMetadata.FrameWidth') as unknown as number;
  }

}

export class RekognitionResponsesFetchPersonTracking {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RekognitionGetPersonTrackingRequest) {
  }

  public get jobStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPersonTracking',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetPersonTracking.JobStatus'),
        outputPath: 'JobStatus',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          SortBy: this.__input.sortBy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPersonTracking.JobStatus', props);
    return resource.getResponseField('JobStatus') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPersonTracking',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetPersonTracking.StatusMessage'),
        outputPath: 'StatusMessage',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          SortBy: this.__input.sortBy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPersonTracking.StatusMessage', props);
    return resource.getResponseField('StatusMessage') as unknown as string;
  }

  public get videoMetadata(): RekognitionResponsesFetchPersonTrackingVideoMetadata {
    return new RekognitionResponsesFetchPersonTrackingVideoMetadata(this.__scope, this.__resources, this.__input);
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPersonTracking',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetPersonTracking.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          SortBy: this.__input.sortBy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPersonTracking.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get persons(): shapes.RekognitionPersonDetection[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPersonTracking',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetPersonTracking.Persons'),
        outputPath: 'Persons',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          SortBy: this.__input.sortBy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPersonTracking.Persons', props);
    return resource.getResponseField('Persons') as unknown as shapes.RekognitionPersonDetection[];
  }

}

export class RekognitionResponsesFetchPersonTrackingVideoMetadata {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RekognitionGetPersonTrackingRequest) {
  }

  public get codec(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPersonTracking',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetPersonTracking.VideoMetadata.Codec'),
        outputPath: 'VideoMetadata.Codec',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          SortBy: this.__input.sortBy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPersonTracking.VideoMetadata.Codec', props);
    return resource.getResponseField('VideoMetadata.Codec') as unknown as string;
  }

  public get durationMillis(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPersonTracking',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetPersonTracking.VideoMetadata.DurationMillis'),
        outputPath: 'VideoMetadata.DurationMillis',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          SortBy: this.__input.sortBy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPersonTracking.VideoMetadata.DurationMillis', props);
    return resource.getResponseField('VideoMetadata.DurationMillis') as unknown as number;
  }

  public get format(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPersonTracking',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetPersonTracking.VideoMetadata.Format'),
        outputPath: 'VideoMetadata.Format',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          SortBy: this.__input.sortBy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPersonTracking.VideoMetadata.Format', props);
    return resource.getResponseField('VideoMetadata.Format') as unknown as string;
  }

  public get frameRate(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPersonTracking',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetPersonTracking.VideoMetadata.FrameRate'),
        outputPath: 'VideoMetadata.FrameRate',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          SortBy: this.__input.sortBy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPersonTracking.VideoMetadata.FrameRate', props);
    return resource.getResponseField('VideoMetadata.FrameRate') as unknown as number;
  }

  public get frameHeight(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPersonTracking',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetPersonTracking.VideoMetadata.FrameHeight'),
        outputPath: 'VideoMetadata.FrameHeight',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          SortBy: this.__input.sortBy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPersonTracking.VideoMetadata.FrameHeight', props);
    return resource.getResponseField('VideoMetadata.FrameHeight') as unknown as number;
  }

  public get frameWidth(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPersonTracking',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetPersonTracking.VideoMetadata.FrameWidth'),
        outputPath: 'VideoMetadata.FrameWidth',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          SortBy: this.__input.sortBy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPersonTracking.VideoMetadata.FrameWidth', props);
    return resource.getResponseField('VideoMetadata.FrameWidth') as unknown as number;
  }

}

export class RekognitionResponsesFetchSegmentDetection {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RekognitionGetSegmentDetectionRequest) {
  }

  public get jobStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSegmentDetection',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetSegmentDetection.JobStatus'),
        outputPath: 'JobStatus',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSegmentDetection.JobStatus', props);
    return resource.getResponseField('JobStatus') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSegmentDetection',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetSegmentDetection.StatusMessage'),
        outputPath: 'StatusMessage',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSegmentDetection.StatusMessage', props);
    return resource.getResponseField('StatusMessage') as unknown as string;
  }

  public get videoMetadata(): shapes.RekognitionVideoMetadata[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSegmentDetection',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetSegmentDetection.VideoMetadata'),
        outputPath: 'VideoMetadata',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSegmentDetection.VideoMetadata', props);
    return resource.getResponseField('VideoMetadata') as unknown as shapes.RekognitionVideoMetadata[];
  }

  public get audioMetadata(): shapes.RekognitionAudioMetadata[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSegmentDetection',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetSegmentDetection.AudioMetadata'),
        outputPath: 'AudioMetadata',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSegmentDetection.AudioMetadata', props);
    return resource.getResponseField('AudioMetadata') as unknown as shapes.RekognitionAudioMetadata[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSegmentDetection',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetSegmentDetection.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSegmentDetection.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get segments(): shapes.RekognitionSegmentDetection[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSegmentDetection',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetSegmentDetection.Segments'),
        outputPath: 'Segments',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSegmentDetection.Segments', props);
    return resource.getResponseField('Segments') as unknown as shapes.RekognitionSegmentDetection[];
  }

  public get selectedSegmentTypes(): shapes.RekognitionSegmentTypeInfo[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSegmentDetection',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetSegmentDetection.SelectedSegmentTypes'),
        outputPath: 'SelectedSegmentTypes',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSegmentDetection.SelectedSegmentTypes', props);
    return resource.getResponseField('SelectedSegmentTypes') as unknown as shapes.RekognitionSegmentTypeInfo[];
  }

}

export class RekognitionResponsesFetchTextDetection {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RekognitionGetTextDetectionRequest) {
  }

  public get jobStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTextDetection',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetTextDetection.JobStatus'),
        outputPath: 'JobStatus',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTextDetection.JobStatus', props);
    return resource.getResponseField('JobStatus') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTextDetection',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetTextDetection.StatusMessage'),
        outputPath: 'StatusMessage',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTextDetection.StatusMessage', props);
    return resource.getResponseField('StatusMessage') as unknown as string;
  }

  public get videoMetadata(): RekognitionResponsesFetchTextDetectionVideoMetadata {
    return new RekognitionResponsesFetchTextDetectionVideoMetadata(this.__scope, this.__resources, this.__input);
  }

  public get textDetections(): shapes.RekognitionTextDetectionResult[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTextDetection',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetTextDetection.TextDetections'),
        outputPath: 'TextDetections',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTextDetection.TextDetections', props);
    return resource.getResponseField('TextDetections') as unknown as shapes.RekognitionTextDetectionResult[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTextDetection',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetTextDetection.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTextDetection.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get textModelVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTextDetection',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetTextDetection.TextModelVersion'),
        outputPath: 'TextModelVersion',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTextDetection.TextModelVersion', props);
    return resource.getResponseField('TextModelVersion') as unknown as string;
  }

}

export class RekognitionResponsesFetchTextDetectionVideoMetadata {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RekognitionGetTextDetectionRequest) {
  }

  public get codec(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTextDetection',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetTextDetection.VideoMetadata.Codec'),
        outputPath: 'VideoMetadata.Codec',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTextDetection.VideoMetadata.Codec', props);
    return resource.getResponseField('VideoMetadata.Codec') as unknown as string;
  }

  public get durationMillis(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTextDetection',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetTextDetection.VideoMetadata.DurationMillis'),
        outputPath: 'VideoMetadata.DurationMillis',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTextDetection.VideoMetadata.DurationMillis', props);
    return resource.getResponseField('VideoMetadata.DurationMillis') as unknown as number;
  }

  public get format(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTextDetection',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetTextDetection.VideoMetadata.Format'),
        outputPath: 'VideoMetadata.Format',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTextDetection.VideoMetadata.Format', props);
    return resource.getResponseField('VideoMetadata.Format') as unknown as string;
  }

  public get frameRate(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTextDetection',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetTextDetection.VideoMetadata.FrameRate'),
        outputPath: 'VideoMetadata.FrameRate',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTextDetection.VideoMetadata.FrameRate', props);
    return resource.getResponseField('VideoMetadata.FrameRate') as unknown as number;
  }

  public get frameHeight(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTextDetection',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetTextDetection.VideoMetadata.FrameHeight'),
        outputPath: 'VideoMetadata.FrameHeight',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTextDetection.VideoMetadata.FrameHeight', props);
    return resource.getResponseField('VideoMetadata.FrameHeight') as unknown as number;
  }

  public get frameWidth(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTextDetection',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.GetTextDetection.VideoMetadata.FrameWidth'),
        outputPath: 'VideoMetadata.FrameWidth',
        parameters: {
          JobId: this.__input.jobId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTextDetection.VideoMetadata.FrameWidth', props);
    return resource.getResponseField('VideoMetadata.FrameWidth') as unknown as number;
  }

}

export class RekognitionResponsesIndexFaces {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RekognitionIndexFacesRequest) {
  }

  public get faceRecords(): shapes.RekognitionFaceRecord[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'indexFaces',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.IndexFaces.FaceRecords'),
        outputPath: 'FaceRecords',
        parameters: {
          CollectionId: this.__input.collectionId,
          Image: {
            Bytes: {
            },
            S3Object: {
              Bucket: this.__input.image.s3Object?.bucket,
              Name: this.__input.image.s3Object?.name,
              Version: this.__input.image.s3Object?.version,
            },
          },
          ExternalImageId: this.__input.externalImageId,
          DetectionAttributes: this.__input.detectionAttributes,
          MaxFaces: this.__input.maxFaces,
          QualityFilter: this.__input.qualityFilter,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'IndexFaces.FaceRecords', props);
    return resource.getResponseField('FaceRecords') as unknown as shapes.RekognitionFaceRecord[];
  }

  public get orientationCorrection(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'indexFaces',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.IndexFaces.OrientationCorrection'),
        outputPath: 'OrientationCorrection',
        parameters: {
          CollectionId: this.__input.collectionId,
          Image: {
            Bytes: {
            },
            S3Object: {
              Bucket: this.__input.image.s3Object?.bucket,
              Name: this.__input.image.s3Object?.name,
              Version: this.__input.image.s3Object?.version,
            },
          },
          ExternalImageId: this.__input.externalImageId,
          DetectionAttributes: this.__input.detectionAttributes,
          MaxFaces: this.__input.maxFaces,
          QualityFilter: this.__input.qualityFilter,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'IndexFaces.OrientationCorrection', props);
    return resource.getResponseField('OrientationCorrection') as unknown as string;
  }

  public get faceModelVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'indexFaces',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.IndexFaces.FaceModelVersion'),
        outputPath: 'FaceModelVersion',
        parameters: {
          CollectionId: this.__input.collectionId,
          Image: {
            Bytes: {
            },
            S3Object: {
              Bucket: this.__input.image.s3Object?.bucket,
              Name: this.__input.image.s3Object?.name,
              Version: this.__input.image.s3Object?.version,
            },
          },
          ExternalImageId: this.__input.externalImageId,
          DetectionAttributes: this.__input.detectionAttributes,
          MaxFaces: this.__input.maxFaces,
          QualityFilter: this.__input.qualityFilter,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'IndexFaces.FaceModelVersion', props);
    return resource.getResponseField('FaceModelVersion') as unknown as string;
  }

  public get unindexedFaces(): shapes.RekognitionUnindexedFace[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'indexFaces',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.IndexFaces.UnindexedFaces'),
        outputPath: 'UnindexedFaces',
        parameters: {
          CollectionId: this.__input.collectionId,
          Image: {
            Bytes: {
            },
            S3Object: {
              Bucket: this.__input.image.s3Object?.bucket,
              Name: this.__input.image.s3Object?.name,
              Version: this.__input.image.s3Object?.version,
            },
          },
          ExternalImageId: this.__input.externalImageId,
          DetectionAttributes: this.__input.detectionAttributes,
          MaxFaces: this.__input.maxFaces,
          QualityFilter: this.__input.qualityFilter,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'IndexFaces.UnindexedFaces', props);
    return resource.getResponseField('UnindexedFaces') as unknown as shapes.RekognitionUnindexedFace[];
  }

}

export class RekognitionResponsesListCollections {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RekognitionListCollectionsRequest) {
  }

  public get collectionIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listCollections',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.ListCollections.CollectionIds'),
        outputPath: 'CollectionIds',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListCollections.CollectionIds', props);
    return resource.getResponseField('CollectionIds') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listCollections',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.ListCollections.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListCollections.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get faceModelVersions(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listCollections',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.ListCollections.FaceModelVersions'),
        outputPath: 'FaceModelVersions',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListCollections.FaceModelVersions', props);
    return resource.getResponseField('FaceModelVersions') as unknown as string[];
  }

}

export class RekognitionResponsesListFaces {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RekognitionListFacesRequest) {
  }

  public get faces(): shapes.RekognitionFace[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFaces',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.ListFaces.Faces'),
        outputPath: 'Faces',
        parameters: {
          CollectionId: this.__input.collectionId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFaces.Faces', props);
    return resource.getResponseField('Faces') as unknown as shapes.RekognitionFace[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFaces',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.ListFaces.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          CollectionId: this.__input.collectionId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFaces.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get faceModelVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFaces',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.ListFaces.FaceModelVersion'),
        outputPath: 'FaceModelVersion',
        parameters: {
          CollectionId: this.__input.collectionId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFaces.FaceModelVersion', props);
    return resource.getResponseField('FaceModelVersion') as unknown as string;
  }

}

export class RekognitionResponsesListStreamProcessors {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RekognitionListStreamProcessorsRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listStreamProcessors',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.ListStreamProcessors.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListStreamProcessors.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get streamProcessors(): shapes.RekognitionStreamProcessor[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listStreamProcessors',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.ListStreamProcessors.StreamProcessors'),
        outputPath: 'StreamProcessors',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListStreamProcessors.StreamProcessors', props);
    return resource.getResponseField('StreamProcessors') as unknown as shapes.RekognitionStreamProcessor[];
  }

}

export class RekognitionResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RekognitionListTagsForResourceRequest) {
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.ListTagsForResource.Tags'),
        outputPath: 'Tags',
        parameters: {
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class RekognitionResponsesRecognizeCelebrities {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RekognitionRecognizeCelebritiesRequest) {
  }

  public get celebrityFaces(): shapes.RekognitionCelebrity[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'recognizeCelebrities',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.RecognizeCelebrities.CelebrityFaces'),
        outputPath: 'CelebrityFaces',
        parameters: {
          Image: {
            Bytes: {
            },
            S3Object: {
              Bucket: this.__input.image.s3Object?.bucket,
              Name: this.__input.image.s3Object?.name,
              Version: this.__input.image.s3Object?.version,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RecognizeCelebrities.CelebrityFaces', props);
    return resource.getResponseField('CelebrityFaces') as unknown as shapes.RekognitionCelebrity[];
  }

  public get unrecognizedFaces(): shapes.RekognitionComparedFace[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'recognizeCelebrities',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.RecognizeCelebrities.UnrecognizedFaces'),
        outputPath: 'UnrecognizedFaces',
        parameters: {
          Image: {
            Bytes: {
            },
            S3Object: {
              Bucket: this.__input.image.s3Object?.bucket,
              Name: this.__input.image.s3Object?.name,
              Version: this.__input.image.s3Object?.version,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RecognizeCelebrities.UnrecognizedFaces', props);
    return resource.getResponseField('UnrecognizedFaces') as unknown as shapes.RekognitionComparedFace[];
  }

  public get orientationCorrection(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'recognizeCelebrities',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.RecognizeCelebrities.OrientationCorrection'),
        outputPath: 'OrientationCorrection',
        parameters: {
          Image: {
            Bytes: {
            },
            S3Object: {
              Bucket: this.__input.image.s3Object?.bucket,
              Name: this.__input.image.s3Object?.name,
              Version: this.__input.image.s3Object?.version,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RecognizeCelebrities.OrientationCorrection', props);
    return resource.getResponseField('OrientationCorrection') as unknown as string;
  }

}

export class RekognitionResponsesSearchFaces {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RekognitionSearchFacesRequest) {
  }

  public get searchedFaceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchFaces',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.SearchFaces.SearchedFaceId'),
        outputPath: 'SearchedFaceId',
        parameters: {
          CollectionId: this.__input.collectionId,
          FaceId: this.__input.faceId,
          MaxFaces: this.__input.maxFaces,
          FaceMatchThreshold: this.__input.faceMatchThreshold,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchFaces.SearchedFaceId', props);
    return resource.getResponseField('SearchedFaceId') as unknown as string;
  }

  public get faceMatches(): shapes.RekognitionFaceMatch[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchFaces',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.SearchFaces.FaceMatches'),
        outputPath: 'FaceMatches',
        parameters: {
          CollectionId: this.__input.collectionId,
          FaceId: this.__input.faceId,
          MaxFaces: this.__input.maxFaces,
          FaceMatchThreshold: this.__input.faceMatchThreshold,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchFaces.FaceMatches', props);
    return resource.getResponseField('FaceMatches') as unknown as shapes.RekognitionFaceMatch[];
  }

  public get faceModelVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchFaces',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.SearchFaces.FaceModelVersion'),
        outputPath: 'FaceModelVersion',
        parameters: {
          CollectionId: this.__input.collectionId,
          FaceId: this.__input.faceId,
          MaxFaces: this.__input.maxFaces,
          FaceMatchThreshold: this.__input.faceMatchThreshold,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchFaces.FaceModelVersion', props);
    return resource.getResponseField('FaceModelVersion') as unknown as string;
  }

}

export class RekognitionResponsesSearchFacesByImage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RekognitionSearchFacesByImageRequest) {
  }

  public get searchedFaceBoundingBox(): RekognitionResponsesSearchFacesByImageSearchedFaceBoundingBox {
    return new RekognitionResponsesSearchFacesByImageSearchedFaceBoundingBox(this.__scope, this.__resources, this.__input);
  }

  public get searchedFaceConfidence(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchFacesByImage',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.SearchFacesByImage.SearchedFaceConfidence'),
        outputPath: 'SearchedFaceConfidence',
        parameters: {
          CollectionId: this.__input.collectionId,
          Image: {
            Bytes: {
            },
            S3Object: {
              Bucket: this.__input.image.s3Object?.bucket,
              Name: this.__input.image.s3Object?.name,
              Version: this.__input.image.s3Object?.version,
            },
          },
          MaxFaces: this.__input.maxFaces,
          FaceMatchThreshold: this.__input.faceMatchThreshold,
          QualityFilter: this.__input.qualityFilter,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchFacesByImage.SearchedFaceConfidence', props);
    return resource.getResponseField('SearchedFaceConfidence') as unknown as number;
  }

  public get faceMatches(): shapes.RekognitionFaceMatch[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchFacesByImage',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.SearchFacesByImage.FaceMatches'),
        outputPath: 'FaceMatches',
        parameters: {
          CollectionId: this.__input.collectionId,
          Image: {
            Bytes: {
            },
            S3Object: {
              Bucket: this.__input.image.s3Object?.bucket,
              Name: this.__input.image.s3Object?.name,
              Version: this.__input.image.s3Object?.version,
            },
          },
          MaxFaces: this.__input.maxFaces,
          FaceMatchThreshold: this.__input.faceMatchThreshold,
          QualityFilter: this.__input.qualityFilter,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchFacesByImage.FaceMatches', props);
    return resource.getResponseField('FaceMatches') as unknown as shapes.RekognitionFaceMatch[];
  }

  public get faceModelVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchFacesByImage',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.SearchFacesByImage.FaceModelVersion'),
        outputPath: 'FaceModelVersion',
        parameters: {
          CollectionId: this.__input.collectionId,
          Image: {
            Bytes: {
            },
            S3Object: {
              Bucket: this.__input.image.s3Object?.bucket,
              Name: this.__input.image.s3Object?.name,
              Version: this.__input.image.s3Object?.version,
            },
          },
          MaxFaces: this.__input.maxFaces,
          FaceMatchThreshold: this.__input.faceMatchThreshold,
          QualityFilter: this.__input.qualityFilter,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchFacesByImage.FaceModelVersion', props);
    return resource.getResponseField('FaceModelVersion') as unknown as string;
  }

}

export class RekognitionResponsesSearchFacesByImageSearchedFaceBoundingBox {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RekognitionSearchFacesByImageRequest) {
  }

  public get width(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchFacesByImage',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.SearchFacesByImage.SearchedFaceBoundingBox.Width'),
        outputPath: 'SearchedFaceBoundingBox.Width',
        parameters: {
          CollectionId: this.__input.collectionId,
          Image: {
            Bytes: {
            },
            S3Object: {
              Bucket: this.__input.image.s3Object?.bucket,
              Name: this.__input.image.s3Object?.name,
              Version: this.__input.image.s3Object?.version,
            },
          },
          MaxFaces: this.__input.maxFaces,
          FaceMatchThreshold: this.__input.faceMatchThreshold,
          QualityFilter: this.__input.qualityFilter,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchFacesByImage.SearchedFaceBoundingBox.Width', props);
    return resource.getResponseField('SearchedFaceBoundingBox.Width') as unknown as number;
  }

  public get height(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchFacesByImage',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.SearchFacesByImage.SearchedFaceBoundingBox.Height'),
        outputPath: 'SearchedFaceBoundingBox.Height',
        parameters: {
          CollectionId: this.__input.collectionId,
          Image: {
            Bytes: {
            },
            S3Object: {
              Bucket: this.__input.image.s3Object?.bucket,
              Name: this.__input.image.s3Object?.name,
              Version: this.__input.image.s3Object?.version,
            },
          },
          MaxFaces: this.__input.maxFaces,
          FaceMatchThreshold: this.__input.faceMatchThreshold,
          QualityFilter: this.__input.qualityFilter,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchFacesByImage.SearchedFaceBoundingBox.Height', props);
    return resource.getResponseField('SearchedFaceBoundingBox.Height') as unknown as number;
  }

  public get left(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchFacesByImage',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.SearchFacesByImage.SearchedFaceBoundingBox.Left'),
        outputPath: 'SearchedFaceBoundingBox.Left',
        parameters: {
          CollectionId: this.__input.collectionId,
          Image: {
            Bytes: {
            },
            S3Object: {
              Bucket: this.__input.image.s3Object?.bucket,
              Name: this.__input.image.s3Object?.name,
              Version: this.__input.image.s3Object?.version,
            },
          },
          MaxFaces: this.__input.maxFaces,
          FaceMatchThreshold: this.__input.faceMatchThreshold,
          QualityFilter: this.__input.qualityFilter,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchFacesByImage.SearchedFaceBoundingBox.Left', props);
    return resource.getResponseField('SearchedFaceBoundingBox.Left') as unknown as number;
  }

  public get top(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchFacesByImage',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.SearchFacesByImage.SearchedFaceBoundingBox.Top'),
        outputPath: 'SearchedFaceBoundingBox.Top',
        parameters: {
          CollectionId: this.__input.collectionId,
          Image: {
            Bytes: {
            },
            S3Object: {
              Bucket: this.__input.image.s3Object?.bucket,
              Name: this.__input.image.s3Object?.name,
              Version: this.__input.image.s3Object?.version,
            },
          },
          MaxFaces: this.__input.maxFaces,
          FaceMatchThreshold: this.__input.faceMatchThreshold,
          QualityFilter: this.__input.qualityFilter,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchFacesByImage.SearchedFaceBoundingBox.Top', props);
    return resource.getResponseField('SearchedFaceBoundingBox.Top') as unknown as number;
  }

}

export class RekognitionResponsesStartCelebrityRecognition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RekognitionStartCelebrityRecognitionRequest) {
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startCelebrityRecognition',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.StartCelebrityRecognition.JobId'),
        outputPath: 'JobId',
        parameters: {
          Video: {
            S3Object: {
              Bucket: this.__input.video.s3Object?.bucket,
              Name: this.__input.video.s3Object?.name,
              Version: this.__input.video.s3Object?.version,
            },
          },
          ClientRequestToken: this.__input.clientRequestToken,
          NotificationChannel: {
            SNSTopicArn: this.__input.notificationChannel?.snsTopicArn,
            RoleArn: this.__input.notificationChannel?.roleArn,
          },
          JobTag: this.__input.jobTag,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartCelebrityRecognition.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

}

export class RekognitionResponsesStartContentModeration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RekognitionStartContentModerationRequest) {
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startContentModeration',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.StartContentModeration.JobId'),
        outputPath: 'JobId',
        parameters: {
          Video: {
            S3Object: {
              Bucket: this.__input.video.s3Object?.bucket,
              Name: this.__input.video.s3Object?.name,
              Version: this.__input.video.s3Object?.version,
            },
          },
          MinConfidence: this.__input.minConfidence,
          ClientRequestToken: this.__input.clientRequestToken,
          NotificationChannel: {
            SNSTopicArn: this.__input.notificationChannel?.snsTopicArn,
            RoleArn: this.__input.notificationChannel?.roleArn,
          },
          JobTag: this.__input.jobTag,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartContentModeration.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

}

export class RekognitionResponsesStartFaceDetection {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RekognitionStartFaceDetectionRequest) {
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startFaceDetection',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.StartFaceDetection.JobId'),
        outputPath: 'JobId',
        parameters: {
          Video: {
            S3Object: {
              Bucket: this.__input.video.s3Object?.bucket,
              Name: this.__input.video.s3Object?.name,
              Version: this.__input.video.s3Object?.version,
            },
          },
          ClientRequestToken: this.__input.clientRequestToken,
          NotificationChannel: {
            SNSTopicArn: this.__input.notificationChannel?.snsTopicArn,
            RoleArn: this.__input.notificationChannel?.roleArn,
          },
          FaceAttributes: this.__input.faceAttributes,
          JobTag: this.__input.jobTag,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartFaceDetection.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

}

export class RekognitionResponsesStartFaceSearch {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RekognitionStartFaceSearchRequest) {
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startFaceSearch',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.StartFaceSearch.JobId'),
        outputPath: 'JobId',
        parameters: {
          Video: {
            S3Object: {
              Bucket: this.__input.video.s3Object?.bucket,
              Name: this.__input.video.s3Object?.name,
              Version: this.__input.video.s3Object?.version,
            },
          },
          ClientRequestToken: this.__input.clientRequestToken,
          FaceMatchThreshold: this.__input.faceMatchThreshold,
          CollectionId: this.__input.collectionId,
          NotificationChannel: {
            SNSTopicArn: this.__input.notificationChannel?.snsTopicArn,
            RoleArn: this.__input.notificationChannel?.roleArn,
          },
          JobTag: this.__input.jobTag,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartFaceSearch.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

}

export class RekognitionResponsesStartLabelDetection {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RekognitionStartLabelDetectionRequest) {
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startLabelDetection',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.StartLabelDetection.JobId'),
        outputPath: 'JobId',
        parameters: {
          Video: {
            S3Object: {
              Bucket: this.__input.video.s3Object?.bucket,
              Name: this.__input.video.s3Object?.name,
              Version: this.__input.video.s3Object?.version,
            },
          },
          ClientRequestToken: this.__input.clientRequestToken,
          MinConfidence: this.__input.minConfidence,
          NotificationChannel: {
            SNSTopicArn: this.__input.notificationChannel?.snsTopicArn,
            RoleArn: this.__input.notificationChannel?.roleArn,
          },
          JobTag: this.__input.jobTag,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartLabelDetection.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

}

export class RekognitionResponsesStartPersonTracking {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RekognitionStartPersonTrackingRequest) {
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startPersonTracking',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.StartPersonTracking.JobId'),
        outputPath: 'JobId',
        parameters: {
          Video: {
            S3Object: {
              Bucket: this.__input.video.s3Object?.bucket,
              Name: this.__input.video.s3Object?.name,
              Version: this.__input.video.s3Object?.version,
            },
          },
          ClientRequestToken: this.__input.clientRequestToken,
          NotificationChannel: {
            SNSTopicArn: this.__input.notificationChannel?.snsTopicArn,
            RoleArn: this.__input.notificationChannel?.roleArn,
          },
          JobTag: this.__input.jobTag,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartPersonTracking.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

}

export class RekognitionResponsesStartProjectVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RekognitionStartProjectVersionRequest) {
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startProjectVersion',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.StartProjectVersion.Status'),
        outputPath: 'Status',
        parameters: {
          ProjectVersionArn: this.__input.projectVersionArn,
          MinInferenceUnits: this.__input.minInferenceUnits,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartProjectVersion.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class RekognitionResponsesStartSegmentDetection {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RekognitionStartSegmentDetectionRequest) {
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startSegmentDetection',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.StartSegmentDetection.JobId'),
        outputPath: 'JobId',
        parameters: {
          Video: {
            S3Object: {
              Bucket: this.__input.video.s3Object?.bucket,
              Name: this.__input.video.s3Object?.name,
              Version: this.__input.video.s3Object?.version,
            },
          },
          ClientRequestToken: this.__input.clientRequestToken,
          NotificationChannel: {
            SNSTopicArn: this.__input.notificationChannel?.snsTopicArn,
            RoleArn: this.__input.notificationChannel?.roleArn,
          },
          JobTag: this.__input.jobTag,
          Filters: {
            TechnicalCueFilter: {
              MinSegmentConfidence: this.__input.filters?.technicalCueFilter?.minSegmentConfidence,
            },
            ShotFilter: {
              MinSegmentConfidence: this.__input.filters?.shotFilter?.minSegmentConfidence,
            },
          },
          SegmentTypes: this.__input.segmentTypes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartSegmentDetection.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

}

export class RekognitionResponsesStartTextDetection {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RekognitionStartTextDetectionRequest) {
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startTextDetection',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.StartTextDetection.JobId'),
        outputPath: 'JobId',
        parameters: {
          Video: {
            S3Object: {
              Bucket: this.__input.video.s3Object?.bucket,
              Name: this.__input.video.s3Object?.name,
              Version: this.__input.video.s3Object?.version,
            },
          },
          ClientRequestToken: this.__input.clientRequestToken,
          NotificationChannel: {
            SNSTopicArn: this.__input.notificationChannel?.snsTopicArn,
            RoleArn: this.__input.notificationChannel?.roleArn,
          },
          JobTag: this.__input.jobTag,
          Filters: {
            WordFilter: {
              MinConfidence: this.__input.filters?.wordFilter?.minConfidence,
              MinBoundingBoxHeight: this.__input.filters?.wordFilter?.minBoundingBoxHeight,
              MinBoundingBoxWidth: this.__input.filters?.wordFilter?.minBoundingBoxWidth,
            },
            RegionsOfInterest: this.__input.filters?.regionsOfInterest,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartTextDetection.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

}

export class RekognitionResponsesStopProjectVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RekognitionStopProjectVersionRequest) {
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopProjectVersion',
        service: 'Rekognition',
        physicalResourceId: cr.PhysicalResourceId.of('Rekognition.StopProjectVersion.Status'),
        outputPath: 'Status',
        parameters: {
          ProjectVersionArn: this.__input.projectVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopProjectVersion.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

