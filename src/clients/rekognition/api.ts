import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class RekognitionClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public compareFaces(input: shapes.RekognitionCompareFacesRequest): RekognitionCompareFaces {
    return new RekognitionCompareFaces(this, 'CompareFaces', this.__resources, input);
  }

  public createCollection(input: shapes.RekognitionCreateCollectionRequest): RekognitionCreateCollection {
    return new RekognitionCreateCollection(this, 'CreateCollection', this.__resources, input);
  }

  public createProject(input: shapes.RekognitionCreateProjectRequest): RekognitionCreateProject {
    return new RekognitionCreateProject(this, 'CreateProject', this.__resources, input);
  }

  public createProjectVersion(input: shapes.RekognitionCreateProjectVersionRequest): RekognitionCreateProjectVersion {
    return new RekognitionCreateProjectVersion(this, 'CreateProjectVersion', this.__resources, input);
  }

  public createStreamProcessor(input: shapes.RekognitionCreateStreamProcessorRequest): RekognitionCreateStreamProcessor {
    return new RekognitionCreateStreamProcessor(this, 'CreateStreamProcessor', this.__resources, input);
  }

  public deleteCollection(input: shapes.RekognitionDeleteCollectionRequest): RekognitionDeleteCollection {
    return new RekognitionDeleteCollection(this, 'DeleteCollection', this.__resources, input);
  }

  public deleteFaces(input: shapes.RekognitionDeleteFacesRequest): RekognitionDeleteFaces {
    return new RekognitionDeleteFaces(this, 'DeleteFaces', this.__resources, input);
  }

  public deleteProject(input: shapes.RekognitionDeleteProjectRequest): RekognitionDeleteProject {
    return new RekognitionDeleteProject(this, 'DeleteProject', this.__resources, input);
  }

  public deleteProjectVersion(input: shapes.RekognitionDeleteProjectVersionRequest): RekognitionDeleteProjectVersion {
    return new RekognitionDeleteProjectVersion(this, 'DeleteProjectVersion', this.__resources, input);
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

  public describeCollection(input: shapes.RekognitionDescribeCollectionRequest): RekognitionDescribeCollection {
    return new RekognitionDescribeCollection(this, 'DescribeCollection', this.__resources, input);
  }

  public describeProjectVersions(input: shapes.RekognitionDescribeProjectVersionsRequest): RekognitionDescribeProjectVersions {
    return new RekognitionDescribeProjectVersions(this, 'DescribeProjectVersions', this.__resources, input);
  }

  public describeProjects(input: shapes.RekognitionDescribeProjectsRequest): RekognitionDescribeProjects {
    return new RekognitionDescribeProjects(this, 'DescribeProjects', this.__resources, input);
  }

  public describeStreamProcessor(input: shapes.RekognitionDescribeStreamProcessorRequest): RekognitionDescribeStreamProcessor {
    return new RekognitionDescribeStreamProcessor(this, 'DescribeStreamProcessor', this.__resources, input);
  }

  public detectCustomLabels(input: shapes.RekognitionDetectCustomLabelsRequest): RekognitionDetectCustomLabels {
    return new RekognitionDetectCustomLabels(this, 'DetectCustomLabels', this.__resources, input);
  }

  public detectFaces(input: shapes.RekognitionDetectFacesRequest): RekognitionDetectFaces {
    return new RekognitionDetectFaces(this, 'DetectFaces', this.__resources, input);
  }

  public detectLabels(input: shapes.RekognitionDetectLabelsRequest): RekognitionDetectLabels {
    return new RekognitionDetectLabels(this, 'DetectLabels', this.__resources, input);
  }

  public detectModerationLabels(input: shapes.RekognitionDetectModerationLabelsRequest): RekognitionDetectModerationLabels {
    return new RekognitionDetectModerationLabels(this, 'DetectModerationLabels', this.__resources, input);
  }

  public detectProtectiveEquipment(input: shapes.RekognitionDetectProtectiveEquipmentRequest): RekognitionDetectProtectiveEquipment {
    return new RekognitionDetectProtectiveEquipment(this, 'DetectProtectiveEquipment', this.__resources, input);
  }

  public detectText(input: shapes.RekognitionDetectTextRequest): RekognitionDetectText {
    return new RekognitionDetectText(this, 'DetectText', this.__resources, input);
  }

  public fetchCelebrityInfo(input: shapes.RekognitionGetCelebrityInfoRequest): RekognitionFetchCelebrityInfo {
    return new RekognitionFetchCelebrityInfo(this, 'FetchCelebrityInfo', this.__resources, input);
  }

  public fetchCelebrityRecognition(input: shapes.RekognitionGetCelebrityRecognitionRequest): RekognitionFetchCelebrityRecognition {
    return new RekognitionFetchCelebrityRecognition(this, 'FetchCelebrityRecognition', this.__resources, input);
  }

  public fetchContentModeration(input: shapes.RekognitionGetContentModerationRequest): RekognitionFetchContentModeration {
    return new RekognitionFetchContentModeration(this, 'FetchContentModeration', this.__resources, input);
  }

  public fetchFaceDetection(input: shapes.RekognitionGetFaceDetectionRequest): RekognitionFetchFaceDetection {
    return new RekognitionFetchFaceDetection(this, 'FetchFaceDetection', this.__resources, input);
  }

  public fetchFaceSearch(input: shapes.RekognitionGetFaceSearchRequest): RekognitionFetchFaceSearch {
    return new RekognitionFetchFaceSearch(this, 'FetchFaceSearch', this.__resources, input);
  }

  public fetchLabelDetection(input: shapes.RekognitionGetLabelDetectionRequest): RekognitionFetchLabelDetection {
    return new RekognitionFetchLabelDetection(this, 'FetchLabelDetection', this.__resources, input);
  }

  public fetchPersonTracking(input: shapes.RekognitionGetPersonTrackingRequest): RekognitionFetchPersonTracking {
    return new RekognitionFetchPersonTracking(this, 'FetchPersonTracking', this.__resources, input);
  }

  public fetchSegmentDetection(input: shapes.RekognitionGetSegmentDetectionRequest): RekognitionFetchSegmentDetection {
    return new RekognitionFetchSegmentDetection(this, 'FetchSegmentDetection', this.__resources, input);
  }

  public fetchTextDetection(input: shapes.RekognitionGetTextDetectionRequest): RekognitionFetchTextDetection {
    return new RekognitionFetchTextDetection(this, 'FetchTextDetection', this.__resources, input);
  }

  public indexFaces(input: shapes.RekognitionIndexFacesRequest): RekognitionIndexFaces {
    return new RekognitionIndexFaces(this, 'IndexFaces', this.__resources, input);
  }

  public listCollections(input: shapes.RekognitionListCollectionsRequest): RekognitionListCollections {
    return new RekognitionListCollections(this, 'ListCollections', this.__resources, input);
  }

  public listFaces(input: shapes.RekognitionListFacesRequest): RekognitionListFaces {
    return new RekognitionListFaces(this, 'ListFaces', this.__resources, input);
  }

  public listStreamProcessors(input: shapes.RekognitionListStreamProcessorsRequest): RekognitionListStreamProcessors {
    return new RekognitionListStreamProcessors(this, 'ListStreamProcessors', this.__resources, input);
  }

  public recognizeCelebrities(input: shapes.RekognitionRecognizeCelebritiesRequest): RekognitionRecognizeCelebrities {
    return new RekognitionRecognizeCelebrities(this, 'RecognizeCelebrities', this.__resources, input);
  }

  public searchFaces(input: shapes.RekognitionSearchFacesRequest): RekognitionSearchFaces {
    return new RekognitionSearchFaces(this, 'SearchFaces', this.__resources, input);
  }

  public searchFacesByImage(input: shapes.RekognitionSearchFacesByImageRequest): RekognitionSearchFacesByImage {
    return new RekognitionSearchFacesByImage(this, 'SearchFacesByImage', this.__resources, input);
  }

  public startCelebrityRecognition(input: shapes.RekognitionStartCelebrityRecognitionRequest): RekognitionStartCelebrityRecognition {
    return new RekognitionStartCelebrityRecognition(this, 'StartCelebrityRecognition', this.__resources, input);
  }

  public startContentModeration(input: shapes.RekognitionStartContentModerationRequest): RekognitionStartContentModeration {
    return new RekognitionStartContentModeration(this, 'StartContentModeration', this.__resources, input);
  }

  public startFaceDetection(input: shapes.RekognitionStartFaceDetectionRequest): RekognitionStartFaceDetection {
    return new RekognitionStartFaceDetection(this, 'StartFaceDetection', this.__resources, input);
  }

  public startFaceSearch(input: shapes.RekognitionStartFaceSearchRequest): RekognitionStartFaceSearch {
    return new RekognitionStartFaceSearch(this, 'StartFaceSearch', this.__resources, input);
  }

  public startLabelDetection(input: shapes.RekognitionStartLabelDetectionRequest): RekognitionStartLabelDetection {
    return new RekognitionStartLabelDetection(this, 'StartLabelDetection', this.__resources, input);
  }

  public startPersonTracking(input: shapes.RekognitionStartPersonTrackingRequest): RekognitionStartPersonTracking {
    return new RekognitionStartPersonTracking(this, 'StartPersonTracking', this.__resources, input);
  }

  public startProjectVersion(input: shapes.RekognitionStartProjectVersionRequest): RekognitionStartProjectVersion {
    return new RekognitionStartProjectVersion(this, 'StartProjectVersion', this.__resources, input);
  }

  public startSegmentDetection(input: shapes.RekognitionStartSegmentDetectionRequest): RekognitionStartSegmentDetection {
    return new RekognitionStartSegmentDetection(this, 'StartSegmentDetection', this.__resources, input);
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

  public startTextDetection(input: shapes.RekognitionStartTextDetectionRequest): RekognitionStartTextDetection {
    return new RekognitionStartTextDetection(this, 'StartTextDetection', this.__resources, input);
  }

  public stopProjectVersion(input: shapes.RekognitionStopProjectVersionRequest): RekognitionStopProjectVersion {
    return new RekognitionStopProjectVersion(this, 'StopProjectVersion', this.__resources, input);
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

}

export class RekognitionCompareFaces extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.RekognitionCompareFacesRequest) {
    super(scope, id);
  }

  public get sourceImageFace(): RekognitionCompareFacesSourceImageFace {
    return new RekognitionCompareFacesSourceImageFace(this, 'SourceImageFace', this.__resources, this.__input);
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
    const resource = new cr.AwsCustomResource(this, 'CompareFaces.FaceMatches', props);
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
    const resource = new cr.AwsCustomResource(this, 'CompareFaces.UnmatchedFaces', props);
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
    const resource = new cr.AwsCustomResource(this, 'CompareFaces.SourceImageOrientationCorrection', props);
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
    const resource = new cr.AwsCustomResource(this, 'CompareFaces.TargetImageOrientationCorrection', props);
    return resource.getResponseField('TargetImageOrientationCorrection') as unknown as string;
  }

}

export class RekognitionCompareFacesSourceImageFace extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.RekognitionCompareFacesRequest) {
    super(scope, id);
  }

  public get boundingBox(): RekognitionCompareFacesSourceImageFaceBoundingBox {
    return new RekognitionCompareFacesSourceImageFaceBoundingBox(this, 'BoundingBox', this.__resources, this.__input);
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
    const resource = new cr.AwsCustomResource(this, 'CompareFaces.SourceImageFace.Confidence', props);
    return resource.getResponseField('SourceImageFace.Confidence') as unknown as number;
  }

}

export class RekognitionCompareFacesSourceImageFaceBoundingBox extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.RekognitionCompareFacesRequest) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'CompareFaces.SourceImageFace.BoundingBox.Width', props);
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
    const resource = new cr.AwsCustomResource(this, 'CompareFaces.SourceImageFace.BoundingBox.Height', props);
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
    const resource = new cr.AwsCustomResource(this, 'CompareFaces.SourceImageFace.BoundingBox.Left', props);
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
    const resource = new cr.AwsCustomResource(this, 'CompareFaces.SourceImageFace.BoundingBox.Top', props);
    return resource.getResponseField('SourceImageFace.BoundingBox.Top') as unknown as number;
  }

}

export class RekognitionCreateCollection extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.RekognitionCreateCollectionRequest) {
    super(scope, id);
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
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCollection.StatusCode', props);
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
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCollection.CollectionArn', props);
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
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCollection.FaceModelVersion', props);
    return resource.getResponseField('FaceModelVersion') as unknown as string;
  }

}

export class RekognitionCreateProject extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.RekognitionCreateProjectRequest) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'CreateProject.ProjectArn', props);
    return resource.getResponseField('ProjectArn') as unknown as string;
  }

}

export class RekognitionCreateProjectVersion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.RekognitionCreateProjectVersionRequest) {
    super(scope, id);
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
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProjectVersion.ProjectVersionArn', props);
    return resource.getResponseField('ProjectVersionArn') as unknown as string;
  }

}

export class RekognitionCreateStreamProcessor extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.RekognitionCreateStreamProcessorRequest) {
    super(scope, id);
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
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStreamProcessor.StreamProcessorArn', props);
    return resource.getResponseField('StreamProcessorArn') as unknown as string;
  }

}

export class RekognitionDeleteCollection extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.RekognitionDeleteCollectionRequest) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'DeleteCollection.StatusCode', props);
    return resource.getResponseField('StatusCode') as unknown as number;
  }

}

export class RekognitionDeleteFaces extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.RekognitionDeleteFacesRequest) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'DeleteFaces.DeletedFaces', props);
    return resource.getResponseField('DeletedFaces') as unknown as string[];
  }

}

export class RekognitionDeleteProject extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.RekognitionDeleteProjectRequest) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'DeleteProject.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class RekognitionDeleteProjectVersion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.RekognitionDeleteProjectVersionRequest) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'DeleteProjectVersion.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class RekognitionDescribeCollection extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.RekognitionDescribeCollectionRequest) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'DescribeCollection.FaceCount', props);
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
    const resource = new cr.AwsCustomResource(this, 'DescribeCollection.FaceModelVersion', props);
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
    const resource = new cr.AwsCustomResource(this, 'DescribeCollection.CollectionARN', props);
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
    const resource = new cr.AwsCustomResource(this, 'DescribeCollection.CreationTimestamp', props);
    return resource.getResponseField('CreationTimestamp') as unknown as string;
  }

}

export class RekognitionDescribeProjectVersions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.RekognitionDescribeProjectVersionsRequest) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'DescribeProjectVersions.ProjectVersionDescriptions', props);
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
    const resource = new cr.AwsCustomResource(this, 'DescribeProjectVersions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class RekognitionDescribeProjects extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.RekognitionDescribeProjectsRequest) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'DescribeProjects.ProjectDescriptions', props);
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
    const resource = new cr.AwsCustomResource(this, 'DescribeProjects.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class RekognitionDescribeStreamProcessor extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.RekognitionDescribeStreamProcessorRequest) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'DescribeStreamProcessor.Name', props);
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
    const resource = new cr.AwsCustomResource(this, 'DescribeStreamProcessor.StreamProcessorArn', props);
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
    const resource = new cr.AwsCustomResource(this, 'DescribeStreamProcessor.Status', props);
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
    const resource = new cr.AwsCustomResource(this, 'DescribeStreamProcessor.StatusMessage', props);
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
    const resource = new cr.AwsCustomResource(this, 'DescribeStreamProcessor.CreationTimestamp', props);
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
    const resource = new cr.AwsCustomResource(this, 'DescribeStreamProcessor.LastUpdateTimestamp', props);
    return resource.getResponseField('LastUpdateTimestamp') as unknown as string;
  }

  public get input(): RekognitionDescribeStreamProcessorInput {
    return new RekognitionDescribeStreamProcessorInput(this, 'Input', this.__resources, this.__input);
  }

  public get output(): RekognitionDescribeStreamProcessorOutput {
    return new RekognitionDescribeStreamProcessorOutput(this, 'Output', this.__resources, this.__input);
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
    const resource = new cr.AwsCustomResource(this, 'DescribeStreamProcessor.RoleArn', props);
    return resource.getResponseField('RoleArn') as unknown as string;
  }

  public get settings(): RekognitionDescribeStreamProcessorSettings {
    return new RekognitionDescribeStreamProcessorSettings(this, 'Settings', this.__resources, this.__input);
  }

}

export class RekognitionDescribeStreamProcessorInput extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.RekognitionDescribeStreamProcessorRequest) {
    super(scope, id);
  }

  public get kinesisVideoStream(): RekognitionDescribeStreamProcessorInputKinesisVideoStream {
    return new RekognitionDescribeStreamProcessorInputKinesisVideoStream(this, 'KinesisVideoStream', this.__resources, this.__input);
  }

}

export class RekognitionDescribeStreamProcessorInputKinesisVideoStream extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.RekognitionDescribeStreamProcessorRequest) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'DescribeStreamProcessor.Input.KinesisVideoStream.Arn', props);
    return resource.getResponseField('Input.KinesisVideoStream.Arn') as unknown as string;
  }

}

export class RekognitionDescribeStreamProcessorOutput extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.RekognitionDescribeStreamProcessorRequest) {
    super(scope, id);
  }

  public get kinesisDataStream(): RekognitionDescribeStreamProcessorOutputKinesisDataStream {
    return new RekognitionDescribeStreamProcessorOutputKinesisDataStream(this, 'KinesisDataStream', this.__resources, this.__input);
  }

}

export class RekognitionDescribeStreamProcessorOutputKinesisDataStream extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.RekognitionDescribeStreamProcessorRequest) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'DescribeStreamProcessor.Output.KinesisDataStream.Arn', props);
    return resource.getResponseField('Output.KinesisDataStream.Arn') as unknown as string;
  }

}

export class RekognitionDescribeStreamProcessorSettings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.RekognitionDescribeStreamProcessorRequest) {
    super(scope, id);
  }

  public get faceSearch(): RekognitionDescribeStreamProcessorSettingsFaceSearch {
    return new RekognitionDescribeStreamProcessorSettingsFaceSearch(this, 'FaceSearch', this.__resources, this.__input);
  }

}

export class RekognitionDescribeStreamProcessorSettingsFaceSearch extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.RekognitionDescribeStreamProcessorRequest) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'DescribeStreamProcessor.Settings.FaceSearch.CollectionId', props);
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
    const resource = new cr.AwsCustomResource(this, 'DescribeStreamProcessor.Settings.FaceSearch.FaceMatchThreshold', props);
    return resource.getResponseField('Settings.FaceSearch.FaceMatchThreshold') as unknown as number;
  }

}

export class RekognitionDetectCustomLabels extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.RekognitionDetectCustomLabelsRequest) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'DetectCustomLabels.CustomLabels', props);
    return resource.getResponseField('CustomLabels') as unknown as shapes.RekognitionCustomLabel[];
  }

}

export class RekognitionDetectFaces extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.RekognitionDetectFacesRequest) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'DetectFaces.FaceDetails', props);
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
    const resource = new cr.AwsCustomResource(this, 'DetectFaces.OrientationCorrection', props);
    return resource.getResponseField('OrientationCorrection') as unknown as string;
  }

}

export class RekognitionDetectLabels extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.RekognitionDetectLabelsRequest) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'DetectLabels.Labels', props);
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
    const resource = new cr.AwsCustomResource(this, 'DetectLabels.OrientationCorrection', props);
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
    const resource = new cr.AwsCustomResource(this, 'DetectLabels.LabelModelVersion', props);
    return resource.getResponseField('LabelModelVersion') as unknown as string;
  }

}

export class RekognitionDetectModerationLabels extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.RekognitionDetectModerationLabelsRequest) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'DetectModerationLabels.ModerationLabels', props);
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
    const resource = new cr.AwsCustomResource(this, 'DetectModerationLabels.ModerationModelVersion', props);
    return resource.getResponseField('ModerationModelVersion') as unknown as string;
  }

  public get humanLoopActivationOutput(): RekognitionDetectModerationLabelsHumanLoopActivationOutput {
    return new RekognitionDetectModerationLabelsHumanLoopActivationOutput(this, 'HumanLoopActivationOutput', this.__resources, this.__input);
  }

}

export class RekognitionDetectModerationLabelsHumanLoopActivationOutput extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.RekognitionDetectModerationLabelsRequest) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'DetectModerationLabels.HumanLoopActivationOutput.HumanLoopArn', props);
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
    const resource = new cr.AwsCustomResource(this, 'DetectModerationLabels.HumanLoopActivationOutput.HumanLoopActivationReasons', props);
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
    const resource = new cr.AwsCustomResource(this, 'DetectModerationLabels.HumanLoopActivationOutput.HumanLoopActivationConditionsEvaluationResults', props);
    return resource.getResponseField('HumanLoopActivationOutput.HumanLoopActivationConditionsEvaluationResults') as unknown as string;
  }

}

export class RekognitionDetectProtectiveEquipment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.RekognitionDetectProtectiveEquipmentRequest) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'DetectProtectiveEquipment.ProtectiveEquipmentModelVersion', props);
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
    const resource = new cr.AwsCustomResource(this, 'DetectProtectiveEquipment.Persons', props);
    return resource.getResponseField('Persons') as unknown as shapes.RekognitionProtectiveEquipmentPerson[];
  }

  public get summary(): RekognitionDetectProtectiveEquipmentSummary {
    return new RekognitionDetectProtectiveEquipmentSummary(this, 'Summary', this.__resources, this.__input);
  }

}

export class RekognitionDetectProtectiveEquipmentSummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.RekognitionDetectProtectiveEquipmentRequest) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'DetectProtectiveEquipment.Summary.PersonsWithRequiredEquipment', props);
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
    const resource = new cr.AwsCustomResource(this, 'DetectProtectiveEquipment.Summary.PersonsWithoutRequiredEquipment', props);
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
    const resource = new cr.AwsCustomResource(this, 'DetectProtectiveEquipment.Summary.PersonsIndeterminate', props);
    return resource.getResponseField('Summary.PersonsIndeterminate') as unknown as number[];
  }

}

export class RekognitionDetectText extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.RekognitionDetectTextRequest) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'DetectText.TextDetections', props);
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
    const resource = new cr.AwsCustomResource(this, 'DetectText.TextModelVersion', props);
    return resource.getResponseField('TextModelVersion') as unknown as string;
  }

}

export class RekognitionFetchCelebrityInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.RekognitionGetCelebrityInfoRequest) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'GetCelebrityInfo.Urls', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetCelebrityInfo.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class RekognitionFetchCelebrityRecognition extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.RekognitionGetCelebrityRecognitionRequest) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'GetCelebrityRecognition.JobStatus', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetCelebrityRecognition.StatusMessage', props);
    return resource.getResponseField('StatusMessage') as unknown as string;
  }

  public get videoMetadata(): RekognitionFetchCelebrityRecognitionVideoMetadata {
    return new RekognitionFetchCelebrityRecognitionVideoMetadata(this, 'VideoMetadata', this.__resources, this.__input);
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
    const resource = new cr.AwsCustomResource(this, 'GetCelebrityRecognition.NextToken', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetCelebrityRecognition.Celebrities', props);
    return resource.getResponseField('Celebrities') as unknown as shapes.RekognitionCelebrityRecognition[];
  }

}

export class RekognitionFetchCelebrityRecognitionVideoMetadata extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.RekognitionGetCelebrityRecognitionRequest) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'GetCelebrityRecognition.VideoMetadata.Codec', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetCelebrityRecognition.VideoMetadata.DurationMillis', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetCelebrityRecognition.VideoMetadata.Format', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetCelebrityRecognition.VideoMetadata.FrameRate', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetCelebrityRecognition.VideoMetadata.FrameHeight', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetCelebrityRecognition.VideoMetadata.FrameWidth', props);
    return resource.getResponseField('VideoMetadata.FrameWidth') as unknown as number;
  }

}

export class RekognitionFetchContentModeration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.RekognitionGetContentModerationRequest) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'GetContentModeration.JobStatus', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetContentModeration.StatusMessage', props);
    return resource.getResponseField('StatusMessage') as unknown as string;
  }

  public get videoMetadata(): RekognitionFetchContentModerationVideoMetadata {
    return new RekognitionFetchContentModerationVideoMetadata(this, 'VideoMetadata', this.__resources, this.__input);
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
    const resource = new cr.AwsCustomResource(this, 'GetContentModeration.ModerationLabels', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetContentModeration.NextToken', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetContentModeration.ModerationModelVersion', props);
    return resource.getResponseField('ModerationModelVersion') as unknown as string;
  }

}

export class RekognitionFetchContentModerationVideoMetadata extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.RekognitionGetContentModerationRequest) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'GetContentModeration.VideoMetadata.Codec', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetContentModeration.VideoMetadata.DurationMillis', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetContentModeration.VideoMetadata.Format', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetContentModeration.VideoMetadata.FrameRate', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetContentModeration.VideoMetadata.FrameHeight', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetContentModeration.VideoMetadata.FrameWidth', props);
    return resource.getResponseField('VideoMetadata.FrameWidth') as unknown as number;
  }

}

export class RekognitionFetchFaceDetection extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.RekognitionGetFaceDetectionRequest) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'GetFaceDetection.JobStatus', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetFaceDetection.StatusMessage', props);
    return resource.getResponseField('StatusMessage') as unknown as string;
  }

  public get videoMetadata(): RekognitionFetchFaceDetectionVideoMetadata {
    return new RekognitionFetchFaceDetectionVideoMetadata(this, 'VideoMetadata', this.__resources, this.__input);
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
    const resource = new cr.AwsCustomResource(this, 'GetFaceDetection.NextToken', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetFaceDetection.Faces', props);
    return resource.getResponseField('Faces') as unknown as shapes.RekognitionFaceDetection[];
  }

}

export class RekognitionFetchFaceDetectionVideoMetadata extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.RekognitionGetFaceDetectionRequest) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'GetFaceDetection.VideoMetadata.Codec', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetFaceDetection.VideoMetadata.DurationMillis', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetFaceDetection.VideoMetadata.Format', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetFaceDetection.VideoMetadata.FrameRate', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetFaceDetection.VideoMetadata.FrameHeight', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetFaceDetection.VideoMetadata.FrameWidth', props);
    return resource.getResponseField('VideoMetadata.FrameWidth') as unknown as number;
  }

}

export class RekognitionFetchFaceSearch extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.RekognitionGetFaceSearchRequest) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'GetFaceSearch.JobStatus', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetFaceSearch.StatusMessage', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetFaceSearch.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get videoMetadata(): RekognitionFetchFaceSearchVideoMetadata {
    return new RekognitionFetchFaceSearchVideoMetadata(this, 'VideoMetadata', this.__resources, this.__input);
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
    const resource = new cr.AwsCustomResource(this, 'GetFaceSearch.Persons', props);
    return resource.getResponseField('Persons') as unknown as shapes.RekognitionPersonMatch[];
  }

}

export class RekognitionFetchFaceSearchVideoMetadata extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.RekognitionGetFaceSearchRequest) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'GetFaceSearch.VideoMetadata.Codec', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetFaceSearch.VideoMetadata.DurationMillis', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetFaceSearch.VideoMetadata.Format', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetFaceSearch.VideoMetadata.FrameRate', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetFaceSearch.VideoMetadata.FrameHeight', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetFaceSearch.VideoMetadata.FrameWidth', props);
    return resource.getResponseField('VideoMetadata.FrameWidth') as unknown as number;
  }

}

export class RekognitionFetchLabelDetection extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.RekognitionGetLabelDetectionRequest) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'GetLabelDetection.JobStatus', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetLabelDetection.StatusMessage', props);
    return resource.getResponseField('StatusMessage') as unknown as string;
  }

  public get videoMetadata(): RekognitionFetchLabelDetectionVideoMetadata {
    return new RekognitionFetchLabelDetectionVideoMetadata(this, 'VideoMetadata', this.__resources, this.__input);
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
    const resource = new cr.AwsCustomResource(this, 'GetLabelDetection.NextToken', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetLabelDetection.Labels', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetLabelDetection.LabelModelVersion', props);
    return resource.getResponseField('LabelModelVersion') as unknown as string;
  }

}

export class RekognitionFetchLabelDetectionVideoMetadata extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.RekognitionGetLabelDetectionRequest) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'GetLabelDetection.VideoMetadata.Codec', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetLabelDetection.VideoMetadata.DurationMillis', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetLabelDetection.VideoMetadata.Format', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetLabelDetection.VideoMetadata.FrameRate', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetLabelDetection.VideoMetadata.FrameHeight', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetLabelDetection.VideoMetadata.FrameWidth', props);
    return resource.getResponseField('VideoMetadata.FrameWidth') as unknown as number;
  }

}

export class RekognitionFetchPersonTracking extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.RekognitionGetPersonTrackingRequest) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'GetPersonTracking.JobStatus', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetPersonTracking.StatusMessage', props);
    return resource.getResponseField('StatusMessage') as unknown as string;
  }

  public get videoMetadata(): RekognitionFetchPersonTrackingVideoMetadata {
    return new RekognitionFetchPersonTrackingVideoMetadata(this, 'VideoMetadata', this.__resources, this.__input);
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
    const resource = new cr.AwsCustomResource(this, 'GetPersonTracking.NextToken', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetPersonTracking.Persons', props);
    return resource.getResponseField('Persons') as unknown as shapes.RekognitionPersonDetection[];
  }

}

export class RekognitionFetchPersonTrackingVideoMetadata extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.RekognitionGetPersonTrackingRequest) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'GetPersonTracking.VideoMetadata.Codec', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetPersonTracking.VideoMetadata.DurationMillis', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetPersonTracking.VideoMetadata.Format', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetPersonTracking.VideoMetadata.FrameRate', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetPersonTracking.VideoMetadata.FrameHeight', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetPersonTracking.VideoMetadata.FrameWidth', props);
    return resource.getResponseField('VideoMetadata.FrameWidth') as unknown as number;
  }

}

export class RekognitionFetchSegmentDetection extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.RekognitionGetSegmentDetectionRequest) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'GetSegmentDetection.JobStatus', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetSegmentDetection.StatusMessage', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetSegmentDetection.VideoMetadata', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetSegmentDetection.AudioMetadata', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetSegmentDetection.NextToken', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetSegmentDetection.Segments', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetSegmentDetection.SelectedSegmentTypes', props);
    return resource.getResponseField('SelectedSegmentTypes') as unknown as shapes.RekognitionSegmentTypeInfo[];
  }

}

export class RekognitionFetchTextDetection extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.RekognitionGetTextDetectionRequest) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'GetTextDetection.JobStatus', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetTextDetection.StatusMessage', props);
    return resource.getResponseField('StatusMessage') as unknown as string;
  }

  public get videoMetadata(): RekognitionFetchTextDetectionVideoMetadata {
    return new RekognitionFetchTextDetectionVideoMetadata(this, 'VideoMetadata', this.__resources, this.__input);
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
    const resource = new cr.AwsCustomResource(this, 'GetTextDetection.TextDetections', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetTextDetection.NextToken', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetTextDetection.TextModelVersion', props);
    return resource.getResponseField('TextModelVersion') as unknown as string;
  }

}

export class RekognitionFetchTextDetectionVideoMetadata extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.RekognitionGetTextDetectionRequest) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'GetTextDetection.VideoMetadata.Codec', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetTextDetection.VideoMetadata.DurationMillis', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetTextDetection.VideoMetadata.Format', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetTextDetection.VideoMetadata.FrameRate', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetTextDetection.VideoMetadata.FrameHeight', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetTextDetection.VideoMetadata.FrameWidth', props);
    return resource.getResponseField('VideoMetadata.FrameWidth') as unknown as number;
  }

}

export class RekognitionIndexFaces extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.RekognitionIndexFacesRequest) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'IndexFaces.FaceRecords', props);
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
    const resource = new cr.AwsCustomResource(this, 'IndexFaces.OrientationCorrection', props);
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
    const resource = new cr.AwsCustomResource(this, 'IndexFaces.FaceModelVersion', props);
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
    const resource = new cr.AwsCustomResource(this, 'IndexFaces.UnindexedFaces', props);
    return resource.getResponseField('UnindexedFaces') as unknown as shapes.RekognitionUnindexedFace[];
  }

}

export class RekognitionListCollections extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.RekognitionListCollectionsRequest) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'ListCollections.CollectionIds', props);
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
    const resource = new cr.AwsCustomResource(this, 'ListCollections.NextToken', props);
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
    const resource = new cr.AwsCustomResource(this, 'ListCollections.FaceModelVersions', props);
    return resource.getResponseField('FaceModelVersions') as unknown as string[];
  }

}

export class RekognitionListFaces extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.RekognitionListFacesRequest) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'ListFaces.Faces', props);
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
    const resource = new cr.AwsCustomResource(this, 'ListFaces.NextToken', props);
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
    const resource = new cr.AwsCustomResource(this, 'ListFaces.FaceModelVersion', props);
    return resource.getResponseField('FaceModelVersion') as unknown as string;
  }

}

export class RekognitionListStreamProcessors extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.RekognitionListStreamProcessorsRequest) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'ListStreamProcessors.NextToken', props);
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
    const resource = new cr.AwsCustomResource(this, 'ListStreamProcessors.StreamProcessors', props);
    return resource.getResponseField('StreamProcessors') as unknown as shapes.RekognitionStreamProcessor[];
  }

}

export class RekognitionRecognizeCelebrities extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.RekognitionRecognizeCelebritiesRequest) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'RecognizeCelebrities.CelebrityFaces', props);
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
    const resource = new cr.AwsCustomResource(this, 'RecognizeCelebrities.UnrecognizedFaces', props);
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
    const resource = new cr.AwsCustomResource(this, 'RecognizeCelebrities.OrientationCorrection', props);
    return resource.getResponseField('OrientationCorrection') as unknown as string;
  }

}

export class RekognitionSearchFaces extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.RekognitionSearchFacesRequest) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'SearchFaces.SearchedFaceId', props);
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
    const resource = new cr.AwsCustomResource(this, 'SearchFaces.FaceMatches', props);
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
    const resource = new cr.AwsCustomResource(this, 'SearchFaces.FaceModelVersion', props);
    return resource.getResponseField('FaceModelVersion') as unknown as string;
  }

}

export class RekognitionSearchFacesByImage extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.RekognitionSearchFacesByImageRequest) {
    super(scope, id);
  }

  public get searchedFaceBoundingBox(): RekognitionSearchFacesByImageSearchedFaceBoundingBox {
    return new RekognitionSearchFacesByImageSearchedFaceBoundingBox(this, 'SearchedFaceBoundingBox', this.__resources, this.__input);
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
    const resource = new cr.AwsCustomResource(this, 'SearchFacesByImage.SearchedFaceConfidence', props);
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
    const resource = new cr.AwsCustomResource(this, 'SearchFacesByImage.FaceMatches', props);
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
    const resource = new cr.AwsCustomResource(this, 'SearchFacesByImage.FaceModelVersion', props);
    return resource.getResponseField('FaceModelVersion') as unknown as string;
  }

}

export class RekognitionSearchFacesByImageSearchedFaceBoundingBox extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.RekognitionSearchFacesByImageRequest) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'SearchFacesByImage.SearchedFaceBoundingBox.Width', props);
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
    const resource = new cr.AwsCustomResource(this, 'SearchFacesByImage.SearchedFaceBoundingBox.Height', props);
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
    const resource = new cr.AwsCustomResource(this, 'SearchFacesByImage.SearchedFaceBoundingBox.Left', props);
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
    const resource = new cr.AwsCustomResource(this, 'SearchFacesByImage.SearchedFaceBoundingBox.Top', props);
    return resource.getResponseField('SearchedFaceBoundingBox.Top') as unknown as number;
  }

}

export class RekognitionStartCelebrityRecognition extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.RekognitionStartCelebrityRecognitionRequest) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'StartCelebrityRecognition.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

}

export class RekognitionStartContentModeration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.RekognitionStartContentModerationRequest) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'StartContentModeration.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

}

export class RekognitionStartFaceDetection extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.RekognitionStartFaceDetectionRequest) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'StartFaceDetection.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

}

export class RekognitionStartFaceSearch extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.RekognitionStartFaceSearchRequest) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'StartFaceSearch.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

}

export class RekognitionStartLabelDetection extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.RekognitionStartLabelDetectionRequest) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'StartLabelDetection.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

}

export class RekognitionStartPersonTracking extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.RekognitionStartPersonTrackingRequest) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'StartPersonTracking.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

}

export class RekognitionStartProjectVersion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.RekognitionStartProjectVersionRequest) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'StartProjectVersion.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class RekognitionStartSegmentDetection extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.RekognitionStartSegmentDetectionRequest) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'StartSegmentDetection.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

}

export class RekognitionStartTextDetection extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.RekognitionStartTextDetectionRequest) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'StartTextDetection.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

}

export class RekognitionStopProjectVersion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.RekognitionStopProjectVersionRequest) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'StopProjectVersion.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

