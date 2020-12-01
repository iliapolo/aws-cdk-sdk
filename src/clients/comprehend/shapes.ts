/**
 * @schema BatchDetectDominantLanguageRequest
 */
export interface BatchDetectDominantLanguageRequest {
  /**
   * @schema BatchDetectDominantLanguageRequest#TextList
   */
  readonly textList: string[];

}

/**
 * @schema BatchDetectDominantLanguageResponse
 */
export interface BatchDetectDominantLanguageResponse {
  /**
   * @schema BatchDetectDominantLanguageResponse#ResultList
   */
  readonly resultList: BatchDetectDominantLanguageItemResult[];

  /**
   * @schema BatchDetectDominantLanguageResponse#ErrorList
   */
  readonly errorList: BatchItemError[];

}

/**
 * @schema BatchDetectEntitiesRequest
 */
export interface BatchDetectEntitiesRequest {
  /**
   * @schema BatchDetectEntitiesRequest#TextList
   */
  readonly textList: string[];

  /**
   * @schema BatchDetectEntitiesRequest#LanguageCode
   */
  readonly languageCode: string;

}

/**
 * @schema BatchDetectEntitiesResponse
 */
export interface BatchDetectEntitiesResponse {
  /**
   * @schema BatchDetectEntitiesResponse#ResultList
   */
  readonly resultList: BatchDetectEntitiesItemResult[];

  /**
   * @schema BatchDetectEntitiesResponse#ErrorList
   */
  readonly errorList: BatchItemError[];

}

/**
 * @schema BatchDetectKeyPhrasesRequest
 */
export interface BatchDetectKeyPhrasesRequest {
  /**
   * @schema BatchDetectKeyPhrasesRequest#TextList
   */
  readonly textList: string[];

  /**
   * @schema BatchDetectKeyPhrasesRequest#LanguageCode
   */
  readonly languageCode: string;

}

/**
 * @schema BatchDetectKeyPhrasesResponse
 */
export interface BatchDetectKeyPhrasesResponse {
  /**
   * @schema BatchDetectKeyPhrasesResponse#ResultList
   */
  readonly resultList: BatchDetectKeyPhrasesItemResult[];

  /**
   * @schema BatchDetectKeyPhrasesResponse#ErrorList
   */
  readonly errorList: BatchItemError[];

}

/**
 * @schema BatchDetectSentimentRequest
 */
export interface BatchDetectSentimentRequest {
  /**
   * @schema BatchDetectSentimentRequest#TextList
   */
  readonly textList: string[];

  /**
   * @schema BatchDetectSentimentRequest#LanguageCode
   */
  readonly languageCode: string;

}

/**
 * @schema BatchDetectSentimentResponse
 */
export interface BatchDetectSentimentResponse {
  /**
   * @schema BatchDetectSentimentResponse#ResultList
   */
  readonly resultList: BatchDetectSentimentItemResult[];

  /**
   * @schema BatchDetectSentimentResponse#ErrorList
   */
  readonly errorList: BatchItemError[];

}

/**
 * @schema BatchDetectSyntaxRequest
 */
export interface BatchDetectSyntaxRequest {
  /**
   * @schema BatchDetectSyntaxRequest#TextList
   */
  readonly textList: string[];

  /**
   * @schema BatchDetectSyntaxRequest#LanguageCode
   */
  readonly languageCode: string;

}

/**
 * @schema BatchDetectSyntaxResponse
 */
export interface BatchDetectSyntaxResponse {
  /**
   * @schema BatchDetectSyntaxResponse#ResultList
   */
  readonly resultList: BatchDetectSyntaxItemResult[];

  /**
   * @schema BatchDetectSyntaxResponse#ErrorList
   */
  readonly errorList: BatchItemError[];

}

/**
 * @schema ClassifyDocumentRequest
 */
export interface ClassifyDocumentRequest {
  /**
   * @schema ClassifyDocumentRequest#Text
   */
  readonly text: string;

  /**
   * @schema ClassifyDocumentRequest#EndpointArn
   */
  readonly endpointArn: string;

}

/**
 * @schema ClassifyDocumentResponse
 */
export interface ClassifyDocumentResponse {
  /**
   * @schema ClassifyDocumentResponse#Classes
   */
  readonly classes?: DocumentClass[];

  /**
   * @schema ClassifyDocumentResponse#Labels
   */
  readonly labels?: DocumentLabel[];

}

/**
 * @schema CreateDocumentClassifierRequest
 */
export interface CreateDocumentClassifierRequest {
  /**
   * @schema CreateDocumentClassifierRequest#DocumentClassifierName
   */
  readonly documentClassifierName: string;

  /**
   * @schema CreateDocumentClassifierRequest#DataAccessRoleArn
   */
  readonly dataAccessRoleArn: string;

  /**
   * @schema CreateDocumentClassifierRequest#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema CreateDocumentClassifierRequest#InputDataConfig
   */
  readonly inputDataConfig: DocumentClassifierInputDataConfig;

  /**
   * @schema CreateDocumentClassifierRequest#OutputDataConfig
   */
  readonly outputDataConfig?: DocumentClassifierOutputDataConfig;

  /**
   * @schema CreateDocumentClassifierRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema CreateDocumentClassifierRequest#LanguageCode
   */
  readonly languageCode: string;

  /**
   * @schema CreateDocumentClassifierRequest#VolumeKmsKeyId
   */
  readonly volumeKmsKeyId?: string;

  /**
   * @schema CreateDocumentClassifierRequest#VpcConfig
   */
  readonly vpcConfig?: VpcConfig;

  /**
   * @schema CreateDocumentClassifierRequest#Mode
   */
  readonly mode?: string;

}

/**
 * @schema CreateDocumentClassifierResponse
 */
export interface CreateDocumentClassifierResponse {
  /**
   * @schema CreateDocumentClassifierResponse#DocumentClassifierArn
   */
  readonly documentClassifierArn?: string;

}

/**
 * @schema CreateEndpointRequest
 */
export interface CreateEndpointRequest {
  /**
   * @schema CreateEndpointRequest#EndpointName
   */
  readonly endpointName: string;

  /**
   * @schema CreateEndpointRequest#ModelArn
   */
  readonly modelArn: string;

  /**
   * @schema CreateEndpointRequest#DesiredInferenceUnits
   */
  readonly desiredInferenceUnits: number;

  /**
   * @schema CreateEndpointRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema CreateEndpointRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateEndpointResponse
 */
export interface CreateEndpointResponse {
  /**
   * @schema CreateEndpointResponse#EndpointArn
   */
  readonly endpointArn?: string;

}

/**
 * @schema CreateEntityRecognizerRequest
 */
export interface CreateEntityRecognizerRequest {
  /**
   * @schema CreateEntityRecognizerRequest#RecognizerName
   */
  readonly recognizerName: string;

  /**
   * @schema CreateEntityRecognizerRequest#DataAccessRoleArn
   */
  readonly dataAccessRoleArn: string;

  /**
   * @schema CreateEntityRecognizerRequest#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema CreateEntityRecognizerRequest#InputDataConfig
   */
  readonly inputDataConfig: EntityRecognizerInputDataConfig;

  /**
   * @schema CreateEntityRecognizerRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema CreateEntityRecognizerRequest#LanguageCode
   */
  readonly languageCode: string;

  /**
   * @schema CreateEntityRecognizerRequest#VolumeKmsKeyId
   */
  readonly volumeKmsKeyId?: string;

  /**
   * @schema CreateEntityRecognizerRequest#VpcConfig
   */
  readonly vpcConfig?: VpcConfig;

}

/**
 * @schema CreateEntityRecognizerResponse
 */
export interface CreateEntityRecognizerResponse {
  /**
   * @schema CreateEntityRecognizerResponse#EntityRecognizerArn
   */
  readonly entityRecognizerArn?: string;

}

/**
 * @schema DeleteDocumentClassifierRequest
 */
export interface DeleteDocumentClassifierRequest {
  /**
   * @schema DeleteDocumentClassifierRequest#DocumentClassifierArn
   */
  readonly documentClassifierArn: string;

}

/**
 * @schema DeleteDocumentClassifierResponse
 */
export interface DeleteDocumentClassifierResponse {
}

/**
 * @schema DeleteEndpointRequest
 */
export interface DeleteEndpointRequest {
  /**
   * @schema DeleteEndpointRequest#EndpointArn
   */
  readonly endpointArn: string;

}

/**
 * @schema DeleteEndpointResponse
 */
export interface DeleteEndpointResponse {
}

/**
 * @schema DeleteEntityRecognizerRequest
 */
export interface DeleteEntityRecognizerRequest {
  /**
   * @schema DeleteEntityRecognizerRequest#EntityRecognizerArn
   */
  readonly entityRecognizerArn: string;

}

/**
 * @schema DeleteEntityRecognizerResponse
 */
export interface DeleteEntityRecognizerResponse {
}

/**
 * @schema DescribeDocumentClassificationJobRequest
 */
export interface DescribeDocumentClassificationJobRequest {
  /**
   * @schema DescribeDocumentClassificationJobRequest#JobId
   */
  readonly jobId: string;

}

/**
 * @schema DescribeDocumentClassificationJobResponse
 */
export interface DescribeDocumentClassificationJobResponse {
  /**
   * @schema DescribeDocumentClassificationJobResponse#DocumentClassificationJobProperties
   */
  readonly documentClassificationJobProperties?: DocumentClassificationJobProperties;

}

/**
 * @schema DescribeDocumentClassifierRequest
 */
export interface DescribeDocumentClassifierRequest {
  /**
   * @schema DescribeDocumentClassifierRequest#DocumentClassifierArn
   */
  readonly documentClassifierArn: string;

}

/**
 * @schema DescribeDocumentClassifierResponse
 */
export interface DescribeDocumentClassifierResponse {
  /**
   * @schema DescribeDocumentClassifierResponse#DocumentClassifierProperties
   */
  readonly documentClassifierProperties?: DocumentClassifierProperties;

}

/**
 * @schema DescribeDominantLanguageDetectionJobRequest
 */
export interface DescribeDominantLanguageDetectionJobRequest {
  /**
   * @schema DescribeDominantLanguageDetectionJobRequest#JobId
   */
  readonly jobId: string;

}

/**
 * @schema DescribeDominantLanguageDetectionJobResponse
 */
export interface DescribeDominantLanguageDetectionJobResponse {
  /**
   * @schema DescribeDominantLanguageDetectionJobResponse#DominantLanguageDetectionJobProperties
   */
  readonly dominantLanguageDetectionJobProperties?: DominantLanguageDetectionJobProperties;

}

/**
 * @schema DescribeEndpointRequest
 */
export interface DescribeEndpointRequest {
  /**
   * @schema DescribeEndpointRequest#EndpointArn
   */
  readonly endpointArn: string;

}

/**
 * @schema DescribeEndpointResponse
 */
export interface DescribeEndpointResponse {
  /**
   * @schema DescribeEndpointResponse#EndpointProperties
   */
  readonly endpointProperties?: EndpointProperties;

}

/**
 * @schema DescribeEntitiesDetectionJobRequest
 */
export interface DescribeEntitiesDetectionJobRequest {
  /**
   * @schema DescribeEntitiesDetectionJobRequest#JobId
   */
  readonly jobId: string;

}

/**
 * @schema DescribeEntitiesDetectionJobResponse
 */
export interface DescribeEntitiesDetectionJobResponse {
  /**
   * @schema DescribeEntitiesDetectionJobResponse#EntitiesDetectionJobProperties
   */
  readonly entitiesDetectionJobProperties?: EntitiesDetectionJobProperties;

}

/**
 * @schema DescribeEntityRecognizerRequest
 */
export interface DescribeEntityRecognizerRequest {
  /**
   * @schema DescribeEntityRecognizerRequest#EntityRecognizerArn
   */
  readonly entityRecognizerArn: string;

}

/**
 * @schema DescribeEntityRecognizerResponse
 */
export interface DescribeEntityRecognizerResponse {
  /**
   * @schema DescribeEntityRecognizerResponse#EntityRecognizerProperties
   */
  readonly entityRecognizerProperties?: EntityRecognizerProperties;

}

/**
 * @schema DescribeEventsDetectionJobRequest
 */
export interface DescribeEventsDetectionJobRequest {
  /**
   * @schema DescribeEventsDetectionJobRequest#JobId
   */
  readonly jobId: string;

}

/**
 * @schema DescribeEventsDetectionJobResponse
 */
export interface DescribeEventsDetectionJobResponse {
  /**
   * @schema DescribeEventsDetectionJobResponse#EventsDetectionJobProperties
   */
  readonly eventsDetectionJobProperties?: EventsDetectionJobProperties;

}

/**
 * @schema DescribeKeyPhrasesDetectionJobRequest
 */
export interface DescribeKeyPhrasesDetectionJobRequest {
  /**
   * @schema DescribeKeyPhrasesDetectionJobRequest#JobId
   */
  readonly jobId: string;

}

/**
 * @schema DescribeKeyPhrasesDetectionJobResponse
 */
export interface DescribeKeyPhrasesDetectionJobResponse {
  /**
   * @schema DescribeKeyPhrasesDetectionJobResponse#KeyPhrasesDetectionJobProperties
   */
  readonly keyPhrasesDetectionJobProperties?: KeyPhrasesDetectionJobProperties;

}

/**
 * @schema DescribePiiEntitiesDetectionJobRequest
 */
export interface DescribePiiEntitiesDetectionJobRequest {
  /**
   * @schema DescribePiiEntitiesDetectionJobRequest#JobId
   */
  readonly jobId: string;

}

/**
 * @schema DescribePiiEntitiesDetectionJobResponse
 */
export interface DescribePiiEntitiesDetectionJobResponse {
  /**
   * @schema DescribePiiEntitiesDetectionJobResponse#PiiEntitiesDetectionJobProperties
   */
  readonly piiEntitiesDetectionJobProperties?: PiiEntitiesDetectionJobProperties;

}

/**
 * @schema DescribeSentimentDetectionJobRequest
 */
export interface DescribeSentimentDetectionJobRequest {
  /**
   * @schema DescribeSentimentDetectionJobRequest#JobId
   */
  readonly jobId: string;

}

/**
 * @schema DescribeSentimentDetectionJobResponse
 */
export interface DescribeSentimentDetectionJobResponse {
  /**
   * @schema DescribeSentimentDetectionJobResponse#SentimentDetectionJobProperties
   */
  readonly sentimentDetectionJobProperties?: SentimentDetectionJobProperties;

}

/**
 * @schema DescribeTopicsDetectionJobRequest
 */
export interface DescribeTopicsDetectionJobRequest {
  /**
   * @schema DescribeTopicsDetectionJobRequest#JobId
   */
  readonly jobId: string;

}

/**
 * @schema DescribeTopicsDetectionJobResponse
 */
export interface DescribeTopicsDetectionJobResponse {
  /**
   * @schema DescribeTopicsDetectionJobResponse#TopicsDetectionJobProperties
   */
  readonly topicsDetectionJobProperties?: TopicsDetectionJobProperties;

}

/**
 * @schema DetectDominantLanguageRequest
 */
export interface DetectDominantLanguageRequest {
  /**
   * @schema DetectDominantLanguageRequest#Text
   */
  readonly text: string;

}

/**
 * @schema DetectDominantLanguageResponse
 */
export interface DetectDominantLanguageResponse {
  /**
   * @schema DetectDominantLanguageResponse#Languages
   */
  readonly languages?: DominantLanguage[];

}

/**
 * @schema DetectEntitiesRequest
 */
export interface DetectEntitiesRequest {
  /**
   * @schema DetectEntitiesRequest#Text
   */
  readonly text: string;

  /**
   * @schema DetectEntitiesRequest#LanguageCode
   */
  readonly languageCode?: string;

  /**
   * @schema DetectEntitiesRequest#EndpointArn
   */
  readonly endpointArn?: string;

}

/**
 * @schema DetectEntitiesResponse
 */
export interface DetectEntitiesResponse {
  /**
   * @schema DetectEntitiesResponse#Entities
   */
  readonly entities?: Entity[];

}

/**
 * @schema DetectKeyPhrasesRequest
 */
export interface DetectKeyPhrasesRequest {
  /**
   * @schema DetectKeyPhrasesRequest#Text
   */
  readonly text: string;

  /**
   * @schema DetectKeyPhrasesRequest#LanguageCode
   */
  readonly languageCode: string;

}

/**
 * @schema DetectKeyPhrasesResponse
 */
export interface DetectKeyPhrasesResponse {
  /**
   * @schema DetectKeyPhrasesResponse#KeyPhrases
   */
  readonly keyPhrases?: KeyPhrase[];

}

/**
 * @schema DetectPiiEntitiesRequest
 */
export interface DetectPiiEntitiesRequest {
  /**
   * @schema DetectPiiEntitiesRequest#Text
   */
  readonly text: string;

  /**
   * @schema DetectPiiEntitiesRequest#LanguageCode
   */
  readonly languageCode: string;

}

/**
 * @schema DetectPiiEntitiesResponse
 */
export interface DetectPiiEntitiesResponse {
  /**
   * @schema DetectPiiEntitiesResponse#Entities
   */
  readonly entities?: PiiEntity[];

}

/**
 * @schema DetectSentimentRequest
 */
export interface DetectSentimentRequest {
  /**
   * @schema DetectSentimentRequest#Text
   */
  readonly text: string;

  /**
   * @schema DetectSentimentRequest#LanguageCode
   */
  readonly languageCode: string;

}

/**
 * @schema DetectSentimentResponse
 */
export interface DetectSentimentResponse {
  /**
   * @schema DetectSentimentResponse#Sentiment
   */
  readonly sentiment?: string;

  /**
   * @schema DetectSentimentResponse#SentimentScore
   */
  readonly sentimentScore?: SentimentScore;

}

/**
 * @schema DetectSyntaxRequest
 */
export interface DetectSyntaxRequest {
  /**
   * @schema DetectSyntaxRequest#Text
   */
  readonly text: string;

  /**
   * @schema DetectSyntaxRequest#LanguageCode
   */
  readonly languageCode: string;

}

/**
 * @schema DetectSyntaxResponse
 */
export interface DetectSyntaxResponse {
  /**
   * @schema DetectSyntaxResponse#SyntaxTokens
   */
  readonly syntaxTokens?: SyntaxToken[];

}

/**
 * @schema ListDocumentClassificationJobsRequest
 */
export interface ListDocumentClassificationJobsRequest {
  /**
   * @schema ListDocumentClassificationJobsRequest#Filter
   */
  readonly filter?: DocumentClassificationJobFilter;

  /**
   * @schema ListDocumentClassificationJobsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListDocumentClassificationJobsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListDocumentClassificationJobsResponse
 */
export interface ListDocumentClassificationJobsResponse {
  /**
   * @schema ListDocumentClassificationJobsResponse#DocumentClassificationJobPropertiesList
   */
  readonly documentClassificationJobPropertiesList?: DocumentClassificationJobProperties[];

  /**
   * @schema ListDocumentClassificationJobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListDocumentClassifiersRequest
 */
export interface ListDocumentClassifiersRequest {
  /**
   * @schema ListDocumentClassifiersRequest#Filter
   */
  readonly filter?: DocumentClassifierFilter;

  /**
   * @schema ListDocumentClassifiersRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListDocumentClassifiersRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListDocumentClassifiersResponse
 */
export interface ListDocumentClassifiersResponse {
  /**
   * @schema ListDocumentClassifiersResponse#DocumentClassifierPropertiesList
   */
  readonly documentClassifierPropertiesList?: DocumentClassifierProperties[];

  /**
   * @schema ListDocumentClassifiersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListDominantLanguageDetectionJobsRequest
 */
export interface ListDominantLanguageDetectionJobsRequest {
  /**
   * @schema ListDominantLanguageDetectionJobsRequest#Filter
   */
  readonly filter?: DominantLanguageDetectionJobFilter;

  /**
   * @schema ListDominantLanguageDetectionJobsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListDominantLanguageDetectionJobsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListDominantLanguageDetectionJobsResponse
 */
export interface ListDominantLanguageDetectionJobsResponse {
  /**
   * @schema ListDominantLanguageDetectionJobsResponse#DominantLanguageDetectionJobPropertiesList
   */
  readonly dominantLanguageDetectionJobPropertiesList?: DominantLanguageDetectionJobProperties[];

  /**
   * @schema ListDominantLanguageDetectionJobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListEndpointsRequest
 */
export interface ListEndpointsRequest {
  /**
   * @schema ListEndpointsRequest#Filter
   */
  readonly filter?: EndpointFilter;

  /**
   * @schema ListEndpointsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListEndpointsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListEndpointsResponse
 */
export interface ListEndpointsResponse {
  /**
   * @schema ListEndpointsResponse#EndpointPropertiesList
   */
  readonly endpointPropertiesList?: EndpointProperties[];

  /**
   * @schema ListEndpointsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListEntitiesDetectionJobsRequest
 */
export interface ListEntitiesDetectionJobsRequest {
  /**
   * @schema ListEntitiesDetectionJobsRequest#Filter
   */
  readonly filter?: EntitiesDetectionJobFilter;

  /**
   * @schema ListEntitiesDetectionJobsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListEntitiesDetectionJobsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListEntitiesDetectionJobsResponse
 */
export interface ListEntitiesDetectionJobsResponse {
  /**
   * @schema ListEntitiesDetectionJobsResponse#EntitiesDetectionJobPropertiesList
   */
  readonly entitiesDetectionJobPropertiesList?: EntitiesDetectionJobProperties[];

  /**
   * @schema ListEntitiesDetectionJobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListEntityRecognizersRequest
 */
export interface ListEntityRecognizersRequest {
  /**
   * @schema ListEntityRecognizersRequest#Filter
   */
  readonly filter?: EntityRecognizerFilter;

  /**
   * @schema ListEntityRecognizersRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListEntityRecognizersRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListEntityRecognizersResponse
 */
export interface ListEntityRecognizersResponse {
  /**
   * @schema ListEntityRecognizersResponse#EntityRecognizerPropertiesList
   */
  readonly entityRecognizerPropertiesList?: EntityRecognizerProperties[];

  /**
   * @schema ListEntityRecognizersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListEventsDetectionJobsRequest
 */
export interface ListEventsDetectionJobsRequest {
  /**
   * @schema ListEventsDetectionJobsRequest#Filter
   */
  readonly filter?: EventsDetectionJobFilter;

  /**
   * @schema ListEventsDetectionJobsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListEventsDetectionJobsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListEventsDetectionJobsResponse
 */
export interface ListEventsDetectionJobsResponse {
  /**
   * @schema ListEventsDetectionJobsResponse#EventsDetectionJobPropertiesList
   */
  readonly eventsDetectionJobPropertiesList?: EventsDetectionJobProperties[];

  /**
   * @schema ListEventsDetectionJobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListKeyPhrasesDetectionJobsRequest
 */
export interface ListKeyPhrasesDetectionJobsRequest {
  /**
   * @schema ListKeyPhrasesDetectionJobsRequest#Filter
   */
  readonly filter?: KeyPhrasesDetectionJobFilter;

  /**
   * @schema ListKeyPhrasesDetectionJobsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListKeyPhrasesDetectionJobsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListKeyPhrasesDetectionJobsResponse
 */
export interface ListKeyPhrasesDetectionJobsResponse {
  /**
   * @schema ListKeyPhrasesDetectionJobsResponse#KeyPhrasesDetectionJobPropertiesList
   */
  readonly keyPhrasesDetectionJobPropertiesList?: KeyPhrasesDetectionJobProperties[];

  /**
   * @schema ListKeyPhrasesDetectionJobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListPiiEntitiesDetectionJobsRequest
 */
export interface ListPiiEntitiesDetectionJobsRequest {
  /**
   * @schema ListPiiEntitiesDetectionJobsRequest#Filter
   */
  readonly filter?: PiiEntitiesDetectionJobFilter;

  /**
   * @schema ListPiiEntitiesDetectionJobsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListPiiEntitiesDetectionJobsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListPiiEntitiesDetectionJobsResponse
 */
export interface ListPiiEntitiesDetectionJobsResponse {
  /**
   * @schema ListPiiEntitiesDetectionJobsResponse#PiiEntitiesDetectionJobPropertiesList
   */
  readonly piiEntitiesDetectionJobPropertiesList?: PiiEntitiesDetectionJobProperties[];

  /**
   * @schema ListPiiEntitiesDetectionJobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListSentimentDetectionJobsRequest
 */
export interface ListSentimentDetectionJobsRequest {
  /**
   * @schema ListSentimentDetectionJobsRequest#Filter
   */
  readonly filter?: SentimentDetectionJobFilter;

  /**
   * @schema ListSentimentDetectionJobsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListSentimentDetectionJobsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListSentimentDetectionJobsResponse
 */
export interface ListSentimentDetectionJobsResponse {
  /**
   * @schema ListSentimentDetectionJobsResponse#SentimentDetectionJobPropertiesList
   */
  readonly sentimentDetectionJobPropertiesList?: SentimentDetectionJobProperties[];

  /**
   * @schema ListSentimentDetectionJobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTagsForResourceRequest
 */
export interface ListTagsForResourceRequest {
  /**
   * @schema ListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema ListTagsForResourceResponse
 */
export interface ListTagsForResourceResponse {
  /**
   * @schema ListTagsForResourceResponse#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema ListTagsForResourceResponse#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema ListTopicsDetectionJobsRequest
 */
export interface ListTopicsDetectionJobsRequest {
  /**
   * @schema ListTopicsDetectionJobsRequest#Filter
   */
  readonly filter?: TopicsDetectionJobFilter;

  /**
   * @schema ListTopicsDetectionJobsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListTopicsDetectionJobsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListTopicsDetectionJobsResponse
 */
export interface ListTopicsDetectionJobsResponse {
  /**
   * @schema ListTopicsDetectionJobsResponse#TopicsDetectionJobPropertiesList
   */
  readonly topicsDetectionJobPropertiesList?: TopicsDetectionJobProperties[];

  /**
   * @schema ListTopicsDetectionJobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema StartDocumentClassificationJobRequest
 */
export interface StartDocumentClassificationJobRequest {
  /**
   * @schema StartDocumentClassificationJobRequest#JobName
   */
  readonly jobName?: string;

  /**
   * @schema StartDocumentClassificationJobRequest#DocumentClassifierArn
   */
  readonly documentClassifierArn: string;

  /**
   * @schema StartDocumentClassificationJobRequest#InputDataConfig
   */
  readonly inputDataConfig: InputDataConfig;

  /**
   * @schema StartDocumentClassificationJobRequest#OutputDataConfig
   */
  readonly outputDataConfig: OutputDataConfig;

  /**
   * @schema StartDocumentClassificationJobRequest#DataAccessRoleArn
   */
  readonly dataAccessRoleArn: string;

  /**
   * @schema StartDocumentClassificationJobRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema StartDocumentClassificationJobRequest#VolumeKmsKeyId
   */
  readonly volumeKmsKeyId?: string;

  /**
   * @schema StartDocumentClassificationJobRequest#VpcConfig
   */
  readonly vpcConfig?: VpcConfig;

}

/**
 * @schema StartDocumentClassificationJobResponse
 */
export interface StartDocumentClassificationJobResponse {
  /**
   * @schema StartDocumentClassificationJobResponse#JobId
   */
  readonly jobId?: string;

  /**
   * @schema StartDocumentClassificationJobResponse#JobStatus
   */
  readonly jobStatus?: string;

}

/**
 * @schema StartDominantLanguageDetectionJobRequest
 */
export interface StartDominantLanguageDetectionJobRequest {
  /**
   * @schema StartDominantLanguageDetectionJobRequest#InputDataConfig
   */
  readonly inputDataConfig: InputDataConfig;

  /**
   * @schema StartDominantLanguageDetectionJobRequest#OutputDataConfig
   */
  readonly outputDataConfig: OutputDataConfig;

  /**
   * @schema StartDominantLanguageDetectionJobRequest#DataAccessRoleArn
   */
  readonly dataAccessRoleArn: string;

  /**
   * @schema StartDominantLanguageDetectionJobRequest#JobName
   */
  readonly jobName?: string;

  /**
   * @schema StartDominantLanguageDetectionJobRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema StartDominantLanguageDetectionJobRequest#VolumeKmsKeyId
   */
  readonly volumeKmsKeyId?: string;

  /**
   * @schema StartDominantLanguageDetectionJobRequest#VpcConfig
   */
  readonly vpcConfig?: VpcConfig;

}

/**
 * @schema StartDominantLanguageDetectionJobResponse
 */
export interface StartDominantLanguageDetectionJobResponse {
  /**
   * @schema StartDominantLanguageDetectionJobResponse#JobId
   */
  readonly jobId?: string;

  /**
   * @schema StartDominantLanguageDetectionJobResponse#JobStatus
   */
  readonly jobStatus?: string;

}

/**
 * @schema StartEntitiesDetectionJobRequest
 */
export interface StartEntitiesDetectionJobRequest {
  /**
   * @schema StartEntitiesDetectionJobRequest#InputDataConfig
   */
  readonly inputDataConfig: InputDataConfig;

  /**
   * @schema StartEntitiesDetectionJobRequest#OutputDataConfig
   */
  readonly outputDataConfig: OutputDataConfig;

  /**
   * @schema StartEntitiesDetectionJobRequest#DataAccessRoleArn
   */
  readonly dataAccessRoleArn: string;

  /**
   * @schema StartEntitiesDetectionJobRequest#JobName
   */
  readonly jobName?: string;

  /**
   * @schema StartEntitiesDetectionJobRequest#EntityRecognizerArn
   */
  readonly entityRecognizerArn?: string;

  /**
   * @schema StartEntitiesDetectionJobRequest#LanguageCode
   */
  readonly languageCode: string;

  /**
   * @schema StartEntitiesDetectionJobRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema StartEntitiesDetectionJobRequest#VolumeKmsKeyId
   */
  readonly volumeKmsKeyId?: string;

  /**
   * @schema StartEntitiesDetectionJobRequest#VpcConfig
   */
  readonly vpcConfig?: VpcConfig;

}

/**
 * @schema StartEntitiesDetectionJobResponse
 */
export interface StartEntitiesDetectionJobResponse {
  /**
   * @schema StartEntitiesDetectionJobResponse#JobId
   */
  readonly jobId?: string;

  /**
   * @schema StartEntitiesDetectionJobResponse#JobStatus
   */
  readonly jobStatus?: string;

}

/**
 * @schema StartEventsDetectionJobRequest
 */
export interface StartEventsDetectionJobRequest {
  /**
   * @schema StartEventsDetectionJobRequest#InputDataConfig
   */
  readonly inputDataConfig: InputDataConfig;

  /**
   * @schema StartEventsDetectionJobRequest#OutputDataConfig
   */
  readonly outputDataConfig: OutputDataConfig;

  /**
   * @schema StartEventsDetectionJobRequest#DataAccessRoleArn
   */
  readonly dataAccessRoleArn: string;

  /**
   * @schema StartEventsDetectionJobRequest#JobName
   */
  readonly jobName?: string;

  /**
   * @schema StartEventsDetectionJobRequest#LanguageCode
   */
  readonly languageCode: string;

  /**
   * @schema StartEventsDetectionJobRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema StartEventsDetectionJobRequest#TargetEventTypes
   */
  readonly targetEventTypes: string[];

}

/**
 * @schema StartEventsDetectionJobResponse
 */
export interface StartEventsDetectionJobResponse {
  /**
   * @schema StartEventsDetectionJobResponse#JobId
   */
  readonly jobId?: string;

  /**
   * @schema StartEventsDetectionJobResponse#JobStatus
   */
  readonly jobStatus?: string;

}

/**
 * @schema StartKeyPhrasesDetectionJobRequest
 */
export interface StartKeyPhrasesDetectionJobRequest {
  /**
   * @schema StartKeyPhrasesDetectionJobRequest#InputDataConfig
   */
  readonly inputDataConfig: InputDataConfig;

  /**
   * @schema StartKeyPhrasesDetectionJobRequest#OutputDataConfig
   */
  readonly outputDataConfig: OutputDataConfig;

  /**
   * @schema StartKeyPhrasesDetectionJobRequest#DataAccessRoleArn
   */
  readonly dataAccessRoleArn: string;

  /**
   * @schema StartKeyPhrasesDetectionJobRequest#JobName
   */
  readonly jobName?: string;

  /**
   * @schema StartKeyPhrasesDetectionJobRequest#LanguageCode
   */
  readonly languageCode: string;

  /**
   * @schema StartKeyPhrasesDetectionJobRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema StartKeyPhrasesDetectionJobRequest#VolumeKmsKeyId
   */
  readonly volumeKmsKeyId?: string;

  /**
   * @schema StartKeyPhrasesDetectionJobRequest#VpcConfig
   */
  readonly vpcConfig?: VpcConfig;

}

/**
 * @schema StartKeyPhrasesDetectionJobResponse
 */
export interface StartKeyPhrasesDetectionJobResponse {
  /**
   * @schema StartKeyPhrasesDetectionJobResponse#JobId
   */
  readonly jobId?: string;

  /**
   * @schema StartKeyPhrasesDetectionJobResponse#JobStatus
   */
  readonly jobStatus?: string;

}

/**
 * @schema StartPiiEntitiesDetectionJobRequest
 */
export interface StartPiiEntitiesDetectionJobRequest {
  /**
   * @schema StartPiiEntitiesDetectionJobRequest#InputDataConfig
   */
  readonly inputDataConfig: InputDataConfig;

  /**
   * @schema StartPiiEntitiesDetectionJobRequest#OutputDataConfig
   */
  readonly outputDataConfig: OutputDataConfig;

  /**
   * @schema StartPiiEntitiesDetectionJobRequest#Mode
   */
  readonly mode: string;

  /**
   * @schema StartPiiEntitiesDetectionJobRequest#RedactionConfig
   */
  readonly redactionConfig?: RedactionConfig;

  /**
   * @schema StartPiiEntitiesDetectionJobRequest#DataAccessRoleArn
   */
  readonly dataAccessRoleArn: string;

  /**
   * @schema StartPiiEntitiesDetectionJobRequest#JobName
   */
  readonly jobName?: string;

  /**
   * @schema StartPiiEntitiesDetectionJobRequest#LanguageCode
   */
  readonly languageCode: string;

  /**
   * @schema StartPiiEntitiesDetectionJobRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * @schema StartPiiEntitiesDetectionJobResponse
 */
export interface StartPiiEntitiesDetectionJobResponse {
  /**
   * @schema StartPiiEntitiesDetectionJobResponse#JobId
   */
  readonly jobId?: string;

  /**
   * @schema StartPiiEntitiesDetectionJobResponse#JobStatus
   */
  readonly jobStatus?: string;

}

/**
 * @schema StartSentimentDetectionJobRequest
 */
export interface StartSentimentDetectionJobRequest {
  /**
   * @schema StartSentimentDetectionJobRequest#InputDataConfig
   */
  readonly inputDataConfig: InputDataConfig;

  /**
   * @schema StartSentimentDetectionJobRequest#OutputDataConfig
   */
  readonly outputDataConfig: OutputDataConfig;

  /**
   * @schema StartSentimentDetectionJobRequest#DataAccessRoleArn
   */
  readonly dataAccessRoleArn: string;

  /**
   * @schema StartSentimentDetectionJobRequest#JobName
   */
  readonly jobName?: string;

  /**
   * @schema StartSentimentDetectionJobRequest#LanguageCode
   */
  readonly languageCode: string;

  /**
   * @schema StartSentimentDetectionJobRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema StartSentimentDetectionJobRequest#VolumeKmsKeyId
   */
  readonly volumeKmsKeyId?: string;

  /**
   * @schema StartSentimentDetectionJobRequest#VpcConfig
   */
  readonly vpcConfig?: VpcConfig;

}

/**
 * @schema StartSentimentDetectionJobResponse
 */
export interface StartSentimentDetectionJobResponse {
  /**
   * @schema StartSentimentDetectionJobResponse#JobId
   */
  readonly jobId?: string;

  /**
   * @schema StartSentimentDetectionJobResponse#JobStatus
   */
  readonly jobStatus?: string;

}

/**
 * @schema StartTopicsDetectionJobRequest
 */
export interface StartTopicsDetectionJobRequest {
  /**
   * @schema StartTopicsDetectionJobRequest#InputDataConfig
   */
  readonly inputDataConfig: InputDataConfig;

  /**
   * @schema StartTopicsDetectionJobRequest#OutputDataConfig
   */
  readonly outputDataConfig: OutputDataConfig;

  /**
   * @schema StartTopicsDetectionJobRequest#DataAccessRoleArn
   */
  readonly dataAccessRoleArn: string;

  /**
   * @schema StartTopicsDetectionJobRequest#JobName
   */
  readonly jobName?: string;

  /**
   * @schema StartTopicsDetectionJobRequest#NumberOfTopics
   */
  readonly numberOfTopics?: number;

  /**
   * @schema StartTopicsDetectionJobRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema StartTopicsDetectionJobRequest#VolumeKmsKeyId
   */
  readonly volumeKmsKeyId?: string;

  /**
   * @schema StartTopicsDetectionJobRequest#VpcConfig
   */
  readonly vpcConfig?: VpcConfig;

}

/**
 * @schema StartTopicsDetectionJobResponse
 */
export interface StartTopicsDetectionJobResponse {
  /**
   * @schema StartTopicsDetectionJobResponse#JobId
   */
  readonly jobId?: string;

  /**
   * @schema StartTopicsDetectionJobResponse#JobStatus
   */
  readonly jobStatus?: string;

}

/**
 * @schema StopDominantLanguageDetectionJobRequest
 */
export interface StopDominantLanguageDetectionJobRequest {
  /**
   * @schema StopDominantLanguageDetectionJobRequest#JobId
   */
  readonly jobId: string;

}

/**
 * @schema StopDominantLanguageDetectionJobResponse
 */
export interface StopDominantLanguageDetectionJobResponse {
  /**
   * @schema StopDominantLanguageDetectionJobResponse#JobId
   */
  readonly jobId?: string;

  /**
   * @schema StopDominantLanguageDetectionJobResponse#JobStatus
   */
  readonly jobStatus?: string;

}

/**
 * @schema StopEntitiesDetectionJobRequest
 */
export interface StopEntitiesDetectionJobRequest {
  /**
   * @schema StopEntitiesDetectionJobRequest#JobId
   */
  readonly jobId: string;

}

/**
 * @schema StopEntitiesDetectionJobResponse
 */
export interface StopEntitiesDetectionJobResponse {
  /**
   * @schema StopEntitiesDetectionJobResponse#JobId
   */
  readonly jobId?: string;

  /**
   * @schema StopEntitiesDetectionJobResponse#JobStatus
   */
  readonly jobStatus?: string;

}

/**
 * @schema StopEventsDetectionJobRequest
 */
export interface StopEventsDetectionJobRequest {
  /**
   * @schema StopEventsDetectionJobRequest#JobId
   */
  readonly jobId: string;

}

/**
 * @schema StopEventsDetectionJobResponse
 */
export interface StopEventsDetectionJobResponse {
  /**
   * @schema StopEventsDetectionJobResponse#JobId
   */
  readonly jobId?: string;

  /**
   * @schema StopEventsDetectionJobResponse#JobStatus
   */
  readonly jobStatus?: string;

}

/**
 * @schema StopKeyPhrasesDetectionJobRequest
 */
export interface StopKeyPhrasesDetectionJobRequest {
  /**
   * @schema StopKeyPhrasesDetectionJobRequest#JobId
   */
  readonly jobId: string;

}

/**
 * @schema StopKeyPhrasesDetectionJobResponse
 */
export interface StopKeyPhrasesDetectionJobResponse {
  /**
   * @schema StopKeyPhrasesDetectionJobResponse#JobId
   */
  readonly jobId?: string;

  /**
   * @schema StopKeyPhrasesDetectionJobResponse#JobStatus
   */
  readonly jobStatus?: string;

}

/**
 * @schema StopPiiEntitiesDetectionJobRequest
 */
export interface StopPiiEntitiesDetectionJobRequest {
  /**
   * @schema StopPiiEntitiesDetectionJobRequest#JobId
   */
  readonly jobId: string;

}

/**
 * @schema StopPiiEntitiesDetectionJobResponse
 */
export interface StopPiiEntitiesDetectionJobResponse {
  /**
   * @schema StopPiiEntitiesDetectionJobResponse#JobId
   */
  readonly jobId?: string;

  /**
   * @schema StopPiiEntitiesDetectionJobResponse#JobStatus
   */
  readonly jobStatus?: string;

}

/**
 * @schema StopSentimentDetectionJobRequest
 */
export interface StopSentimentDetectionJobRequest {
  /**
   * @schema StopSentimentDetectionJobRequest#JobId
   */
  readonly jobId: string;

}

/**
 * @schema StopSentimentDetectionJobResponse
 */
export interface StopSentimentDetectionJobResponse {
  /**
   * @schema StopSentimentDetectionJobResponse#JobId
   */
  readonly jobId?: string;

  /**
   * @schema StopSentimentDetectionJobResponse#JobStatus
   */
  readonly jobStatus?: string;

}

/**
 * @schema StopTrainingDocumentClassifierRequest
 */
export interface StopTrainingDocumentClassifierRequest {
  /**
   * @schema StopTrainingDocumentClassifierRequest#DocumentClassifierArn
   */
  readonly documentClassifierArn: string;

}

/**
 * @schema StopTrainingDocumentClassifierResponse
 */
export interface StopTrainingDocumentClassifierResponse {
}

/**
 * @schema StopTrainingEntityRecognizerRequest
 */
export interface StopTrainingEntityRecognizerRequest {
  /**
   * @schema StopTrainingEntityRecognizerRequest#EntityRecognizerArn
   */
  readonly entityRecognizerArn: string;

}

/**
 * @schema StopTrainingEntityRecognizerResponse
 */
export interface StopTrainingEntityRecognizerResponse {
}

/**
 * @schema TagResourceRequest
 */
export interface TagResourceRequest {
  /**
   * @schema TagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema TagResourceRequest#Tags
   */
  readonly tags: Tag[];

}

/**
 * @schema TagResourceResponse
 */
export interface TagResourceResponse {
}

/**
 * @schema UntagResourceRequest
 */
export interface UntagResourceRequest {
  /**
   * @schema UntagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema UntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema UntagResourceResponse
 */
export interface UntagResourceResponse {
}

/**
 * @schema UpdateEndpointRequest
 */
export interface UpdateEndpointRequest {
  /**
   * @schema UpdateEndpointRequest#EndpointArn
   */
  readonly endpointArn: string;

  /**
   * @schema UpdateEndpointRequest#DesiredInferenceUnits
   */
  readonly desiredInferenceUnits: number;

}

/**
 * @schema UpdateEndpointResponse
 */
export interface UpdateEndpointResponse {
}

/**
 * @schema BatchDetectDominantLanguageItemResult
 */
export interface BatchDetectDominantLanguageItemResult {
  /**
   * @schema BatchDetectDominantLanguageItemResult#Index
   */
  readonly index?: number;

  /**
   * @schema BatchDetectDominantLanguageItemResult#Languages
   */
  readonly languages?: DominantLanguage[];

}

/**
 * @schema BatchItemError
 */
export interface BatchItemError {
  /**
   * @schema BatchItemError#Index
   */
  readonly index?: number;

  /**
   * @schema BatchItemError#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema BatchItemError#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema BatchDetectEntitiesItemResult
 */
export interface BatchDetectEntitiesItemResult {
  /**
   * @schema BatchDetectEntitiesItemResult#Index
   */
  readonly index?: number;

  /**
   * @schema BatchDetectEntitiesItemResult#Entities
   */
  readonly entities?: Entity[];

}

/**
 * @schema BatchDetectKeyPhrasesItemResult
 */
export interface BatchDetectKeyPhrasesItemResult {
  /**
   * @schema BatchDetectKeyPhrasesItemResult#Index
   */
  readonly index?: number;

  /**
   * @schema BatchDetectKeyPhrasesItemResult#KeyPhrases
   */
  readonly keyPhrases?: KeyPhrase[];

}

/**
 * @schema BatchDetectSentimentItemResult
 */
export interface BatchDetectSentimentItemResult {
  /**
   * @schema BatchDetectSentimentItemResult#Index
   */
  readonly index?: number;

  /**
   * @schema BatchDetectSentimentItemResult#Sentiment
   */
  readonly sentiment?: string;

  /**
   * @schema BatchDetectSentimentItemResult#SentimentScore
   */
  readonly sentimentScore?: SentimentScore;

}

/**
 * @schema BatchDetectSyntaxItemResult
 */
export interface BatchDetectSyntaxItemResult {
  /**
   * @schema BatchDetectSyntaxItemResult#Index
   */
  readonly index?: number;

  /**
   * @schema BatchDetectSyntaxItemResult#SyntaxTokens
   */
  readonly syntaxTokens?: SyntaxToken[];

}

/**
 * @schema DocumentClass
 */
export interface DocumentClass {
  /**
   * @schema DocumentClass#Name
   */
  readonly name?: string;

  /**
   * @schema DocumentClass#Score
   */
  readonly score?: number;

}

/**
 * @schema DocumentLabel
 */
export interface DocumentLabel {
  /**
   * @schema DocumentLabel#Name
   */
  readonly name?: string;

  /**
   * @schema DocumentLabel#Score
   */
  readonly score?: number;

}

/**
 * @schema Tag
 */
export interface Tag {
  /**
   * @schema Tag#Key
   */
  readonly key: string;

  /**
   * @schema Tag#Value
   */
  readonly value?: string;

}

/**
 * @schema DocumentClassifierInputDataConfig
 */
export interface DocumentClassifierInputDataConfig {
  /**
   * @schema DocumentClassifierInputDataConfig#DataFormat
   */
  readonly dataFormat?: string;

  /**
   * @schema DocumentClassifierInputDataConfig#S3Uri
   */
  readonly s3Uri?: string;

  /**
   * @schema DocumentClassifierInputDataConfig#LabelDelimiter
   */
  readonly labelDelimiter?: string;

  /**
   * @schema DocumentClassifierInputDataConfig#AugmentedManifests
   */
  readonly augmentedManifests?: AugmentedManifestsListItem[];

}

/**
 * @schema DocumentClassifierOutputDataConfig
 */
export interface DocumentClassifierOutputDataConfig {
  /**
   * @schema DocumentClassifierOutputDataConfig#S3Uri
   */
  readonly s3Uri?: string;

  /**
   * @schema DocumentClassifierOutputDataConfig#KmsKeyId
   */
  readonly kmsKeyId?: string;

}

/**
 * @schema VpcConfig
 */
export interface VpcConfig {
  /**
   * @schema VpcConfig#SecurityGroupIds
   */
  readonly securityGroupIds: string[];

  /**
   * @schema VpcConfig#Subnets
   */
  readonly subnets: string[];

}

/**
 * @schema EntityRecognizerInputDataConfig
 */
export interface EntityRecognizerInputDataConfig {
  /**
   * @schema EntityRecognizerInputDataConfig#DataFormat
   */
  readonly dataFormat?: string;

  /**
   * @schema EntityRecognizerInputDataConfig#EntityTypes
   */
  readonly entityTypes: EntityTypesListItem[];

  /**
   * @schema EntityRecognizerInputDataConfig#Documents
   */
  readonly documents?: EntityRecognizerDocuments;

  /**
   * @schema EntityRecognizerInputDataConfig#Annotations
   */
  readonly annotations?: EntityRecognizerAnnotations;

  /**
   * @schema EntityRecognizerInputDataConfig#EntityList
   */
  readonly entityList?: EntityRecognizerEntityList;

  /**
   * @schema EntityRecognizerInputDataConfig#AugmentedManifests
   */
  readonly augmentedManifests?: AugmentedManifestsListItem[];

}

/**
 * @schema DocumentClassificationJobProperties
 */
export interface DocumentClassificationJobProperties {
  /**
   * @schema DocumentClassificationJobProperties#JobId
   */
  readonly jobId?: string;

  /**
   * @schema DocumentClassificationJobProperties#JobName
   */
  readonly jobName?: string;

  /**
   * @schema DocumentClassificationJobProperties#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema DocumentClassificationJobProperties#Message
   */
  readonly message?: string;

  /**
   * @schema DocumentClassificationJobProperties#SubmitTime
   */
  readonly submitTime?: string;

  /**
   * @schema DocumentClassificationJobProperties#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema DocumentClassificationJobProperties#DocumentClassifierArn
   */
  readonly documentClassifierArn?: string;

  /**
   * @schema DocumentClassificationJobProperties#InputDataConfig
   */
  readonly inputDataConfig?: InputDataConfig;

  /**
   * @schema DocumentClassificationJobProperties#OutputDataConfig
   */
  readonly outputDataConfig?: OutputDataConfig;

  /**
   * @schema DocumentClassificationJobProperties#DataAccessRoleArn
   */
  readonly dataAccessRoleArn?: string;

  /**
   * @schema DocumentClassificationJobProperties#VolumeKmsKeyId
   */
  readonly volumeKmsKeyId?: string;

  /**
   * @schema DocumentClassificationJobProperties#VpcConfig
   */
  readonly vpcConfig?: VpcConfig;

}

/**
 * @schema DocumentClassifierProperties
 */
export interface DocumentClassifierProperties {
  /**
   * @schema DocumentClassifierProperties#DocumentClassifierArn
   */
  readonly documentClassifierArn?: string;

  /**
   * @schema DocumentClassifierProperties#LanguageCode
   */
  readonly languageCode?: string;

  /**
   * @schema DocumentClassifierProperties#Status
   */
  readonly status?: string;

  /**
   * @schema DocumentClassifierProperties#Message
   */
  readonly message?: string;

  /**
   * @schema DocumentClassifierProperties#SubmitTime
   */
  readonly submitTime?: string;

  /**
   * @schema DocumentClassifierProperties#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema DocumentClassifierProperties#TrainingStartTime
   */
  readonly trainingStartTime?: string;

  /**
   * @schema DocumentClassifierProperties#TrainingEndTime
   */
  readonly trainingEndTime?: string;

  /**
   * @schema DocumentClassifierProperties#InputDataConfig
   */
  readonly inputDataConfig?: DocumentClassifierInputDataConfig;

  /**
   * @schema DocumentClassifierProperties#OutputDataConfig
   */
  readonly outputDataConfig?: DocumentClassifierOutputDataConfig;

  /**
   * @schema DocumentClassifierProperties#ClassifierMetadata
   */
  readonly classifierMetadata?: ClassifierMetadata;

  /**
   * @schema DocumentClassifierProperties#DataAccessRoleArn
   */
  readonly dataAccessRoleArn?: string;

  /**
   * @schema DocumentClassifierProperties#VolumeKmsKeyId
   */
  readonly volumeKmsKeyId?: string;

  /**
   * @schema DocumentClassifierProperties#VpcConfig
   */
  readonly vpcConfig?: VpcConfig;

  /**
   * @schema DocumentClassifierProperties#Mode
   */
  readonly mode?: string;

}

/**
 * @schema DominantLanguageDetectionJobProperties
 */
export interface DominantLanguageDetectionJobProperties {
  /**
   * @schema DominantLanguageDetectionJobProperties#JobId
   */
  readonly jobId?: string;

  /**
   * @schema DominantLanguageDetectionJobProperties#JobName
   */
  readonly jobName?: string;

  /**
   * @schema DominantLanguageDetectionJobProperties#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema DominantLanguageDetectionJobProperties#Message
   */
  readonly message?: string;

  /**
   * @schema DominantLanguageDetectionJobProperties#SubmitTime
   */
  readonly submitTime?: string;

  /**
   * @schema DominantLanguageDetectionJobProperties#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema DominantLanguageDetectionJobProperties#InputDataConfig
   */
  readonly inputDataConfig?: InputDataConfig;

  /**
   * @schema DominantLanguageDetectionJobProperties#OutputDataConfig
   */
  readonly outputDataConfig?: OutputDataConfig;

  /**
   * @schema DominantLanguageDetectionJobProperties#DataAccessRoleArn
   */
  readonly dataAccessRoleArn?: string;

  /**
   * @schema DominantLanguageDetectionJobProperties#VolumeKmsKeyId
   */
  readonly volumeKmsKeyId?: string;

  /**
   * @schema DominantLanguageDetectionJobProperties#VpcConfig
   */
  readonly vpcConfig?: VpcConfig;

}

/**
 * @schema EndpointProperties
 */
export interface EndpointProperties {
  /**
   * @schema EndpointProperties#EndpointArn
   */
  readonly endpointArn?: string;

  /**
   * @schema EndpointProperties#Status
   */
  readonly status?: string;

  /**
   * @schema EndpointProperties#Message
   */
  readonly message?: string;

  /**
   * @schema EndpointProperties#ModelArn
   */
  readonly modelArn?: string;

  /**
   * @schema EndpointProperties#DesiredInferenceUnits
   */
  readonly desiredInferenceUnits?: number;

  /**
   * @schema EndpointProperties#CurrentInferenceUnits
   */
  readonly currentInferenceUnits?: number;

  /**
   * @schema EndpointProperties#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema EndpointProperties#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

}

/**
 * @schema EntitiesDetectionJobProperties
 */
export interface EntitiesDetectionJobProperties {
  /**
   * @schema EntitiesDetectionJobProperties#JobId
   */
  readonly jobId?: string;

  /**
   * @schema EntitiesDetectionJobProperties#JobName
   */
  readonly jobName?: string;

  /**
   * @schema EntitiesDetectionJobProperties#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema EntitiesDetectionJobProperties#Message
   */
  readonly message?: string;

  /**
   * @schema EntitiesDetectionJobProperties#SubmitTime
   */
  readonly submitTime?: string;

  /**
   * @schema EntitiesDetectionJobProperties#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema EntitiesDetectionJobProperties#EntityRecognizerArn
   */
  readonly entityRecognizerArn?: string;

  /**
   * @schema EntitiesDetectionJobProperties#InputDataConfig
   */
  readonly inputDataConfig?: InputDataConfig;

  /**
   * @schema EntitiesDetectionJobProperties#OutputDataConfig
   */
  readonly outputDataConfig?: OutputDataConfig;

  /**
   * @schema EntitiesDetectionJobProperties#LanguageCode
   */
  readonly languageCode?: string;

  /**
   * @schema EntitiesDetectionJobProperties#DataAccessRoleArn
   */
  readonly dataAccessRoleArn?: string;

  /**
   * @schema EntitiesDetectionJobProperties#VolumeKmsKeyId
   */
  readonly volumeKmsKeyId?: string;

  /**
   * @schema EntitiesDetectionJobProperties#VpcConfig
   */
  readonly vpcConfig?: VpcConfig;

}

/**
 * @schema EntityRecognizerProperties
 */
export interface EntityRecognizerProperties {
  /**
   * @schema EntityRecognizerProperties#EntityRecognizerArn
   */
  readonly entityRecognizerArn?: string;

  /**
   * @schema EntityRecognizerProperties#LanguageCode
   */
  readonly languageCode?: string;

  /**
   * @schema EntityRecognizerProperties#Status
   */
  readonly status?: string;

  /**
   * @schema EntityRecognizerProperties#Message
   */
  readonly message?: string;

  /**
   * @schema EntityRecognizerProperties#SubmitTime
   */
  readonly submitTime?: string;

  /**
   * @schema EntityRecognizerProperties#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema EntityRecognizerProperties#TrainingStartTime
   */
  readonly trainingStartTime?: string;

  /**
   * @schema EntityRecognizerProperties#TrainingEndTime
   */
  readonly trainingEndTime?: string;

  /**
   * @schema EntityRecognizerProperties#InputDataConfig
   */
  readonly inputDataConfig?: EntityRecognizerInputDataConfig;

  /**
   * @schema EntityRecognizerProperties#RecognizerMetadata
   */
  readonly recognizerMetadata?: EntityRecognizerMetadata;

  /**
   * @schema EntityRecognizerProperties#DataAccessRoleArn
   */
  readonly dataAccessRoleArn?: string;

  /**
   * @schema EntityRecognizerProperties#VolumeKmsKeyId
   */
  readonly volumeKmsKeyId?: string;

  /**
   * @schema EntityRecognizerProperties#VpcConfig
   */
  readonly vpcConfig?: VpcConfig;

}

/**
 * @schema EventsDetectionJobProperties
 */
export interface EventsDetectionJobProperties {
  /**
   * @schema EventsDetectionJobProperties#JobId
   */
  readonly jobId?: string;

  /**
   * @schema EventsDetectionJobProperties#JobName
   */
  readonly jobName?: string;

  /**
   * @schema EventsDetectionJobProperties#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema EventsDetectionJobProperties#Message
   */
  readonly message?: string;

  /**
   * @schema EventsDetectionJobProperties#SubmitTime
   */
  readonly submitTime?: string;

  /**
   * @schema EventsDetectionJobProperties#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema EventsDetectionJobProperties#InputDataConfig
   */
  readonly inputDataConfig?: InputDataConfig;

  /**
   * @schema EventsDetectionJobProperties#OutputDataConfig
   */
  readonly outputDataConfig?: OutputDataConfig;

  /**
   * @schema EventsDetectionJobProperties#LanguageCode
   */
  readonly languageCode?: string;

  /**
   * @schema EventsDetectionJobProperties#DataAccessRoleArn
   */
  readonly dataAccessRoleArn?: string;

  /**
   * @schema EventsDetectionJobProperties#TargetEventTypes
   */
  readonly targetEventTypes?: string[];

}

/**
 * @schema KeyPhrasesDetectionJobProperties
 */
export interface KeyPhrasesDetectionJobProperties {
  /**
   * @schema KeyPhrasesDetectionJobProperties#JobId
   */
  readonly jobId?: string;

  /**
   * @schema KeyPhrasesDetectionJobProperties#JobName
   */
  readonly jobName?: string;

  /**
   * @schema KeyPhrasesDetectionJobProperties#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema KeyPhrasesDetectionJobProperties#Message
   */
  readonly message?: string;

  /**
   * @schema KeyPhrasesDetectionJobProperties#SubmitTime
   */
  readonly submitTime?: string;

  /**
   * @schema KeyPhrasesDetectionJobProperties#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema KeyPhrasesDetectionJobProperties#InputDataConfig
   */
  readonly inputDataConfig?: InputDataConfig;

  /**
   * @schema KeyPhrasesDetectionJobProperties#OutputDataConfig
   */
  readonly outputDataConfig?: OutputDataConfig;

  /**
   * @schema KeyPhrasesDetectionJobProperties#LanguageCode
   */
  readonly languageCode?: string;

  /**
   * @schema KeyPhrasesDetectionJobProperties#DataAccessRoleArn
   */
  readonly dataAccessRoleArn?: string;

  /**
   * @schema KeyPhrasesDetectionJobProperties#VolumeKmsKeyId
   */
  readonly volumeKmsKeyId?: string;

  /**
   * @schema KeyPhrasesDetectionJobProperties#VpcConfig
   */
  readonly vpcConfig?: VpcConfig;

}

/**
 * @schema PiiEntitiesDetectionJobProperties
 */
export interface PiiEntitiesDetectionJobProperties {
  /**
   * @schema PiiEntitiesDetectionJobProperties#JobId
   */
  readonly jobId?: string;

  /**
   * @schema PiiEntitiesDetectionJobProperties#JobName
   */
  readonly jobName?: string;

  /**
   * @schema PiiEntitiesDetectionJobProperties#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema PiiEntitiesDetectionJobProperties#Message
   */
  readonly message?: string;

  /**
   * @schema PiiEntitiesDetectionJobProperties#SubmitTime
   */
  readonly submitTime?: string;

  /**
   * @schema PiiEntitiesDetectionJobProperties#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema PiiEntitiesDetectionJobProperties#InputDataConfig
   */
  readonly inputDataConfig?: InputDataConfig;

  /**
   * @schema PiiEntitiesDetectionJobProperties#OutputDataConfig
   */
  readonly outputDataConfig?: PiiOutputDataConfig;

  /**
   * @schema PiiEntitiesDetectionJobProperties#RedactionConfig
   */
  readonly redactionConfig?: RedactionConfig;

  /**
   * @schema PiiEntitiesDetectionJobProperties#LanguageCode
   */
  readonly languageCode?: string;

  /**
   * @schema PiiEntitiesDetectionJobProperties#DataAccessRoleArn
   */
  readonly dataAccessRoleArn?: string;

  /**
   * @schema PiiEntitiesDetectionJobProperties#Mode
   */
  readonly mode?: string;

}

/**
 * @schema SentimentDetectionJobProperties
 */
export interface SentimentDetectionJobProperties {
  /**
   * @schema SentimentDetectionJobProperties#JobId
   */
  readonly jobId?: string;

  /**
   * @schema SentimentDetectionJobProperties#JobName
   */
  readonly jobName?: string;

  /**
   * @schema SentimentDetectionJobProperties#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema SentimentDetectionJobProperties#Message
   */
  readonly message?: string;

  /**
   * @schema SentimentDetectionJobProperties#SubmitTime
   */
  readonly submitTime?: string;

  /**
   * @schema SentimentDetectionJobProperties#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema SentimentDetectionJobProperties#InputDataConfig
   */
  readonly inputDataConfig?: InputDataConfig;

  /**
   * @schema SentimentDetectionJobProperties#OutputDataConfig
   */
  readonly outputDataConfig?: OutputDataConfig;

  /**
   * @schema SentimentDetectionJobProperties#LanguageCode
   */
  readonly languageCode?: string;

  /**
   * @schema SentimentDetectionJobProperties#DataAccessRoleArn
   */
  readonly dataAccessRoleArn?: string;

  /**
   * @schema SentimentDetectionJobProperties#VolumeKmsKeyId
   */
  readonly volumeKmsKeyId?: string;

  /**
   * @schema SentimentDetectionJobProperties#VpcConfig
   */
  readonly vpcConfig?: VpcConfig;

}

/**
 * @schema TopicsDetectionJobProperties
 */
export interface TopicsDetectionJobProperties {
  /**
   * @schema TopicsDetectionJobProperties#JobId
   */
  readonly jobId?: string;

  /**
   * @schema TopicsDetectionJobProperties#JobName
   */
  readonly jobName?: string;

  /**
   * @schema TopicsDetectionJobProperties#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema TopicsDetectionJobProperties#Message
   */
  readonly message?: string;

  /**
   * @schema TopicsDetectionJobProperties#SubmitTime
   */
  readonly submitTime?: string;

  /**
   * @schema TopicsDetectionJobProperties#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema TopicsDetectionJobProperties#InputDataConfig
   */
  readonly inputDataConfig?: InputDataConfig;

  /**
   * @schema TopicsDetectionJobProperties#OutputDataConfig
   */
  readonly outputDataConfig?: OutputDataConfig;

  /**
   * @schema TopicsDetectionJobProperties#NumberOfTopics
   */
  readonly numberOfTopics?: number;

  /**
   * @schema TopicsDetectionJobProperties#DataAccessRoleArn
   */
  readonly dataAccessRoleArn?: string;

  /**
   * @schema TopicsDetectionJobProperties#VolumeKmsKeyId
   */
  readonly volumeKmsKeyId?: string;

  /**
   * @schema TopicsDetectionJobProperties#VpcConfig
   */
  readonly vpcConfig?: VpcConfig;

}

/**
 * @schema DominantLanguage
 */
export interface DominantLanguage {
  /**
   * @schema DominantLanguage#LanguageCode
   */
  readonly languageCode?: string;

  /**
   * @schema DominantLanguage#Score
   */
  readonly score?: number;

}

/**
 * @schema Entity
 */
export interface Entity {
  /**
   * @schema Entity#Score
   */
  readonly score?: number;

  /**
   * @schema Entity#Type
   */
  readonly type?: string;

  /**
   * @schema Entity#Text
   */
  readonly text?: string;

  /**
   * @schema Entity#BeginOffset
   */
  readonly beginOffset?: number;

  /**
   * @schema Entity#EndOffset
   */
  readonly endOffset?: number;

}

/**
 * @schema KeyPhrase
 */
export interface KeyPhrase {
  /**
   * @schema KeyPhrase#Score
   */
  readonly score?: number;

  /**
   * @schema KeyPhrase#Text
   */
  readonly text?: string;

  /**
   * @schema KeyPhrase#BeginOffset
   */
  readonly beginOffset?: number;

  /**
   * @schema KeyPhrase#EndOffset
   */
  readonly endOffset?: number;

}

/**
 * @schema PiiEntity
 */
export interface PiiEntity {
  /**
   * @schema PiiEntity#Score
   */
  readonly score?: number;

  /**
   * @schema PiiEntity#Type
   */
  readonly type?: string;

  /**
   * @schema PiiEntity#BeginOffset
   */
  readonly beginOffset?: number;

  /**
   * @schema PiiEntity#EndOffset
   */
  readonly endOffset?: number;

}

/**
 * @schema SentimentScore
 */
export interface SentimentScore {
  /**
   * @schema SentimentScore#Positive
   */
  readonly positive?: number;

  /**
   * @schema SentimentScore#Negative
   */
  readonly negative?: number;

  /**
   * @schema SentimentScore#Neutral
   */
  readonly neutral?: number;

  /**
   * @schema SentimentScore#Mixed
   */
  readonly mixed?: number;

}

/**
 * @schema SyntaxToken
 */
export interface SyntaxToken {
  /**
   * @schema SyntaxToken#TokenId
   */
  readonly tokenId?: number;

  /**
   * @schema SyntaxToken#Text
   */
  readonly text?: string;

  /**
   * @schema SyntaxToken#BeginOffset
   */
  readonly beginOffset?: number;

  /**
   * @schema SyntaxToken#EndOffset
   */
  readonly endOffset?: number;

  /**
   * @schema SyntaxToken#PartOfSpeech
   */
  readonly partOfSpeech?: PartOfSpeechTag;

}

/**
 * @schema DocumentClassificationJobFilter
 */
export interface DocumentClassificationJobFilter {
  /**
   * @schema DocumentClassificationJobFilter#JobName
   */
  readonly jobName?: string;

  /**
   * @schema DocumentClassificationJobFilter#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema DocumentClassificationJobFilter#SubmitTimeBefore
   */
  readonly submitTimeBefore?: string;

  /**
   * @schema DocumentClassificationJobFilter#SubmitTimeAfter
   */
  readonly submitTimeAfter?: string;

}

/**
 * @schema DocumentClassifierFilter
 */
export interface DocumentClassifierFilter {
  /**
   * @schema DocumentClassifierFilter#Status
   */
  readonly status?: string;

  /**
   * @schema DocumentClassifierFilter#SubmitTimeBefore
   */
  readonly submitTimeBefore?: string;

  /**
   * @schema DocumentClassifierFilter#SubmitTimeAfter
   */
  readonly submitTimeAfter?: string;

}

/**
 * @schema DominantLanguageDetectionJobFilter
 */
export interface DominantLanguageDetectionJobFilter {
  /**
   * @schema DominantLanguageDetectionJobFilter#JobName
   */
  readonly jobName?: string;

  /**
   * @schema DominantLanguageDetectionJobFilter#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema DominantLanguageDetectionJobFilter#SubmitTimeBefore
   */
  readonly submitTimeBefore?: string;

  /**
   * @schema DominantLanguageDetectionJobFilter#SubmitTimeAfter
   */
  readonly submitTimeAfter?: string;

}

/**
 * @schema EndpointFilter
 */
export interface EndpointFilter {
  /**
   * @schema EndpointFilter#ModelArn
   */
  readonly modelArn?: string;

  /**
   * @schema EndpointFilter#Status
   */
  readonly status?: string;

  /**
   * @schema EndpointFilter#CreationTimeBefore
   */
  readonly creationTimeBefore?: string;

  /**
   * @schema EndpointFilter#CreationTimeAfter
   */
  readonly creationTimeAfter?: string;

}

/**
 * @schema EntitiesDetectionJobFilter
 */
export interface EntitiesDetectionJobFilter {
  /**
   * @schema EntitiesDetectionJobFilter#JobName
   */
  readonly jobName?: string;

  /**
   * @schema EntitiesDetectionJobFilter#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema EntitiesDetectionJobFilter#SubmitTimeBefore
   */
  readonly submitTimeBefore?: string;

  /**
   * @schema EntitiesDetectionJobFilter#SubmitTimeAfter
   */
  readonly submitTimeAfter?: string;

}

/**
 * @schema EntityRecognizerFilter
 */
export interface EntityRecognizerFilter {
  /**
   * @schema EntityRecognizerFilter#Status
   */
  readonly status?: string;

  /**
   * @schema EntityRecognizerFilter#SubmitTimeBefore
   */
  readonly submitTimeBefore?: string;

  /**
   * @schema EntityRecognizerFilter#SubmitTimeAfter
   */
  readonly submitTimeAfter?: string;

}

/**
 * @schema EventsDetectionJobFilter
 */
export interface EventsDetectionJobFilter {
  /**
   * @schema EventsDetectionJobFilter#JobName
   */
  readonly jobName?: string;

  /**
   * @schema EventsDetectionJobFilter#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema EventsDetectionJobFilter#SubmitTimeBefore
   */
  readonly submitTimeBefore?: string;

  /**
   * @schema EventsDetectionJobFilter#SubmitTimeAfter
   */
  readonly submitTimeAfter?: string;

}

/**
 * @schema KeyPhrasesDetectionJobFilter
 */
export interface KeyPhrasesDetectionJobFilter {
  /**
   * @schema KeyPhrasesDetectionJobFilter#JobName
   */
  readonly jobName?: string;

  /**
   * @schema KeyPhrasesDetectionJobFilter#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema KeyPhrasesDetectionJobFilter#SubmitTimeBefore
   */
  readonly submitTimeBefore?: string;

  /**
   * @schema KeyPhrasesDetectionJobFilter#SubmitTimeAfter
   */
  readonly submitTimeAfter?: string;

}

/**
 * @schema PiiEntitiesDetectionJobFilter
 */
export interface PiiEntitiesDetectionJobFilter {
  /**
   * @schema PiiEntitiesDetectionJobFilter#JobName
   */
  readonly jobName?: string;

  /**
   * @schema PiiEntitiesDetectionJobFilter#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema PiiEntitiesDetectionJobFilter#SubmitTimeBefore
   */
  readonly submitTimeBefore?: string;

  /**
   * @schema PiiEntitiesDetectionJobFilter#SubmitTimeAfter
   */
  readonly submitTimeAfter?: string;

}

/**
 * @schema SentimentDetectionJobFilter
 */
export interface SentimentDetectionJobFilter {
  /**
   * @schema SentimentDetectionJobFilter#JobName
   */
  readonly jobName?: string;

  /**
   * @schema SentimentDetectionJobFilter#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema SentimentDetectionJobFilter#SubmitTimeBefore
   */
  readonly submitTimeBefore?: string;

  /**
   * @schema SentimentDetectionJobFilter#SubmitTimeAfter
   */
  readonly submitTimeAfter?: string;

}

/**
 * @schema TopicsDetectionJobFilter
 */
export interface TopicsDetectionJobFilter {
  /**
   * @schema TopicsDetectionJobFilter#JobName
   */
  readonly jobName?: string;

  /**
   * @schema TopicsDetectionJobFilter#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema TopicsDetectionJobFilter#SubmitTimeBefore
   */
  readonly submitTimeBefore?: string;

  /**
   * @schema TopicsDetectionJobFilter#SubmitTimeAfter
   */
  readonly submitTimeAfter?: string;

}

/**
 * @schema InputDataConfig
 */
export interface InputDataConfig {
  /**
   * @schema InputDataConfig#S3Uri
   */
  readonly s3Uri: string;

  /**
   * @schema InputDataConfig#InputFormat
   */
  readonly inputFormat?: string;

}

/**
 * @schema OutputDataConfig
 */
export interface OutputDataConfig {
  /**
   * @schema OutputDataConfig#S3Uri
   */
  readonly s3Uri: string;

  /**
   * @schema OutputDataConfig#KmsKeyId
   */
  readonly kmsKeyId?: string;

}

/**
 * @schema RedactionConfig
 */
export interface RedactionConfig {
  /**
   * @schema RedactionConfig#PiiEntityTypes
   */
  readonly piiEntityTypes?: string[];

  /**
   * @schema RedactionConfig#MaskMode
   */
  readonly maskMode?: string;

  /**
   * @schema RedactionConfig#MaskCharacter
   */
  readonly maskCharacter?: string;

}

/**
 * @schema AugmentedManifestsListItem
 */
export interface AugmentedManifestsListItem {
  /**
   * @schema AugmentedManifestsListItem#S3Uri
   */
  readonly s3Uri: string;

  /**
   * @schema AugmentedManifestsListItem#AttributeNames
   */
  readonly attributeNames: string[];

}

/**
 * @schema EntityTypesListItem
 */
export interface EntityTypesListItem {
  /**
   * @schema EntityTypesListItem#Type
   */
  readonly type: string;

}

/**
 * @schema EntityRecognizerDocuments
 */
export interface EntityRecognizerDocuments {
  /**
   * @schema EntityRecognizerDocuments#S3Uri
   */
  readonly s3Uri: string;

}

/**
 * @schema EntityRecognizerAnnotations
 */
export interface EntityRecognizerAnnotations {
  /**
   * @schema EntityRecognizerAnnotations#S3Uri
   */
  readonly s3Uri: string;

}

/**
 * @schema EntityRecognizerEntityList
 */
export interface EntityRecognizerEntityList {
  /**
   * @schema EntityRecognizerEntityList#S3Uri
   */
  readonly s3Uri: string;

}

/**
 * @schema ClassifierMetadata
 */
export interface ClassifierMetadata {
  /**
   * @schema ClassifierMetadata#NumberOfLabels
   */
  readonly numberOfLabels?: number;

  /**
   * @schema ClassifierMetadata#NumberOfTrainedDocuments
   */
  readonly numberOfTrainedDocuments?: number;

  /**
   * @schema ClassifierMetadata#NumberOfTestDocuments
   */
  readonly numberOfTestDocuments?: number;

  /**
   * @schema ClassifierMetadata#EvaluationMetrics
   */
  readonly evaluationMetrics?: ClassifierEvaluationMetrics;

}

/**
 * @schema EntityRecognizerMetadata
 */
export interface EntityRecognizerMetadata {
  /**
   * @schema EntityRecognizerMetadata#NumberOfTrainedDocuments
   */
  readonly numberOfTrainedDocuments?: number;

  /**
   * @schema EntityRecognizerMetadata#NumberOfTestDocuments
   */
  readonly numberOfTestDocuments?: number;

  /**
   * @schema EntityRecognizerMetadata#EvaluationMetrics
   */
  readonly evaluationMetrics?: EntityRecognizerEvaluationMetrics;

  /**
   * @schema EntityRecognizerMetadata#EntityTypes
   */
  readonly entityTypes?: EntityRecognizerMetadataEntityTypesListItem[];

}

/**
 * @schema PiiOutputDataConfig
 */
export interface PiiOutputDataConfig {
  /**
   * @schema PiiOutputDataConfig#S3Uri
   */
  readonly s3Uri: string;

  /**
   * @schema PiiOutputDataConfig#KmsKeyId
   */
  readonly kmsKeyId?: string;

}

/**
 * @schema PartOfSpeechTag
 */
export interface PartOfSpeechTag {
  /**
   * @schema PartOfSpeechTag#Tag
   */
  readonly tag?: string;

  /**
   * @schema PartOfSpeechTag#Score
   */
  readonly score?: number;

}

/**
 * @schema ClassifierEvaluationMetrics
 */
export interface ClassifierEvaluationMetrics {
  /**
   * @schema ClassifierEvaluationMetrics#Accuracy
   */
  readonly accuracy?: number;

  /**
   * @schema ClassifierEvaluationMetrics#Precision
   */
  readonly precision?: number;

  /**
   * @schema ClassifierEvaluationMetrics#Recall
   */
  readonly recall?: number;

  /**
   * @schema ClassifierEvaluationMetrics#F1Score
   */
  readonly f1Score?: number;

  /**
   * @schema ClassifierEvaluationMetrics#MicroPrecision
   */
  readonly microPrecision?: number;

  /**
   * @schema ClassifierEvaluationMetrics#MicroRecall
   */
  readonly microRecall?: number;

  /**
   * @schema ClassifierEvaluationMetrics#MicroF1Score
   */
  readonly microF1Score?: number;

  /**
   * @schema ClassifierEvaluationMetrics#HammingLoss
   */
  readonly hammingLoss?: number;

}

/**
 * @schema EntityRecognizerEvaluationMetrics
 */
export interface EntityRecognizerEvaluationMetrics {
  /**
   * @schema EntityRecognizerEvaluationMetrics#Precision
   */
  readonly precision?: number;

  /**
   * @schema EntityRecognizerEvaluationMetrics#Recall
   */
  readonly recall?: number;

  /**
   * @schema EntityRecognizerEvaluationMetrics#F1Score
   */
  readonly f1Score?: number;

}

/**
 * @schema EntityRecognizerMetadataEntityTypesListItem
 */
export interface EntityRecognizerMetadataEntityTypesListItem {
  /**
   * @schema EntityRecognizerMetadataEntityTypesListItem#Type
   */
  readonly type?: string;

  /**
   * @schema EntityRecognizerMetadataEntityTypesListItem#EvaluationMetrics
   */
  readonly evaluationMetrics?: EntityTypesEvaluationMetrics;

  /**
   * @schema EntityRecognizerMetadataEntityTypesListItem#NumberOfTrainMentions
   */
  readonly numberOfTrainMentions?: number;

}

/**
 * @schema EntityTypesEvaluationMetrics
 */
export interface EntityTypesEvaluationMetrics {
  /**
   * @schema EntityTypesEvaluationMetrics#Precision
   */
  readonly precision?: number;

  /**
   * @schema EntityTypesEvaluationMetrics#Recall
   */
  readonly recall?: number;

  /**
   * @schema EntityTypesEvaluationMetrics#F1Score
   */
  readonly f1Score?: number;

}
