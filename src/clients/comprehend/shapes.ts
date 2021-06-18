/**
 * @schema ComprehendBatchDetectDominantLanguageRequest
 */
export interface ComprehendBatchDetectDominantLanguageRequest {
  /**
   * @schema ComprehendBatchDetectDominantLanguageRequest#TextList
   */
  readonly textList: string[];

}

/**
 * @schema ComprehendBatchDetectDominantLanguageResponse
 */
export interface ComprehendBatchDetectDominantLanguageResponse {
  /**
   * @schema ComprehendBatchDetectDominantLanguageResponse#ResultList
   */
  readonly resultList: ComprehendBatchDetectDominantLanguageItemResult[];

  /**
   * @schema ComprehendBatchDetectDominantLanguageResponse#ErrorList
   */
  readonly errorList: ComprehendBatchItemError[];

}

/**
 * @schema ComprehendBatchDetectEntitiesRequest
 */
export interface ComprehendBatchDetectEntitiesRequest {
  /**
   * @schema ComprehendBatchDetectEntitiesRequest#TextList
   */
  readonly textList: string[];

  /**
   * @schema ComprehendBatchDetectEntitiesRequest#LanguageCode
   */
  readonly languageCode: string;

}

/**
 * @schema ComprehendBatchDetectEntitiesResponse
 */
export interface ComprehendBatchDetectEntitiesResponse {
  /**
   * @schema ComprehendBatchDetectEntitiesResponse#ResultList
   */
  readonly resultList: ComprehendBatchDetectEntitiesItemResult[];

  /**
   * @schema ComprehendBatchDetectEntitiesResponse#ErrorList
   */
  readonly errorList: ComprehendBatchItemError[];

}

/**
 * @schema ComprehendBatchDetectKeyPhrasesRequest
 */
export interface ComprehendBatchDetectKeyPhrasesRequest {
  /**
   * @schema ComprehendBatchDetectKeyPhrasesRequest#TextList
   */
  readonly textList: string[];

  /**
   * @schema ComprehendBatchDetectKeyPhrasesRequest#LanguageCode
   */
  readonly languageCode: string;

}

/**
 * @schema ComprehendBatchDetectKeyPhrasesResponse
 */
export interface ComprehendBatchDetectKeyPhrasesResponse {
  /**
   * @schema ComprehendBatchDetectKeyPhrasesResponse#ResultList
   */
  readonly resultList: ComprehendBatchDetectKeyPhrasesItemResult[];

  /**
   * @schema ComprehendBatchDetectKeyPhrasesResponse#ErrorList
   */
  readonly errorList: ComprehendBatchItemError[];

}

/**
 * @schema ComprehendBatchDetectSentimentRequest
 */
export interface ComprehendBatchDetectSentimentRequest {
  /**
   * @schema ComprehendBatchDetectSentimentRequest#TextList
   */
  readonly textList: string[];

  /**
   * @schema ComprehendBatchDetectSentimentRequest#LanguageCode
   */
  readonly languageCode: string;

}

/**
 * @schema ComprehendBatchDetectSentimentResponse
 */
export interface ComprehendBatchDetectSentimentResponse {
  /**
   * @schema ComprehendBatchDetectSentimentResponse#ResultList
   */
  readonly resultList: ComprehendBatchDetectSentimentItemResult[];

  /**
   * @schema ComprehendBatchDetectSentimentResponse#ErrorList
   */
  readonly errorList: ComprehendBatchItemError[];

}

/**
 * @schema ComprehendBatchDetectSyntaxRequest
 */
export interface ComprehendBatchDetectSyntaxRequest {
  /**
   * @schema ComprehendBatchDetectSyntaxRequest#TextList
   */
  readonly textList: string[];

  /**
   * @schema ComprehendBatchDetectSyntaxRequest#LanguageCode
   */
  readonly languageCode: string;

}

/**
 * @schema ComprehendBatchDetectSyntaxResponse
 */
export interface ComprehendBatchDetectSyntaxResponse {
  /**
   * @schema ComprehendBatchDetectSyntaxResponse#ResultList
   */
  readonly resultList: ComprehendBatchDetectSyntaxItemResult[];

  /**
   * @schema ComprehendBatchDetectSyntaxResponse#ErrorList
   */
  readonly errorList: ComprehendBatchItemError[];

}

/**
 * @schema ComprehendClassifyDocumentRequest
 */
export interface ComprehendClassifyDocumentRequest {
  /**
   * @schema ComprehendClassifyDocumentRequest#Text
   */
  readonly text: string;

  /**
   * @schema ComprehendClassifyDocumentRequest#EndpointArn
   */
  readonly endpointArn: string;

}

/**
 * @schema ComprehendClassifyDocumentResponse
 */
export interface ComprehendClassifyDocumentResponse {
  /**
   * @schema ComprehendClassifyDocumentResponse#Classes
   */
  readonly classes?: ComprehendDocumentClass[];

  /**
   * @schema ComprehendClassifyDocumentResponse#Labels
   */
  readonly labels?: ComprehendDocumentLabel[];

}

/**
 * @schema ComprehendCreateDocumentClassifierRequest
 */
export interface ComprehendCreateDocumentClassifierRequest {
  /**
   * @schema ComprehendCreateDocumentClassifierRequest#DocumentClassifierName
   */
  readonly documentClassifierName: string;

  /**
   * @schema ComprehendCreateDocumentClassifierRequest#DataAccessRoleArn
   */
  readonly dataAccessRoleArn: string;

  /**
   * @schema ComprehendCreateDocumentClassifierRequest#Tags
   */
  readonly tags?: ComprehendTag[];

  /**
   * @schema ComprehendCreateDocumentClassifierRequest#InputDataConfig
   */
  readonly inputDataConfig: ComprehendDocumentClassifierInputDataConfig;

  /**
   * @schema ComprehendCreateDocumentClassifierRequest#OutputDataConfig
   */
  readonly outputDataConfig?: ComprehendDocumentClassifierOutputDataConfig;

  /**
   * @schema ComprehendCreateDocumentClassifierRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema ComprehendCreateDocumentClassifierRequest#LanguageCode
   */
  readonly languageCode: string;

  /**
   * @schema ComprehendCreateDocumentClassifierRequest#VolumeKmsKeyId
   */
  readonly volumeKmsKeyId?: string;

  /**
   * @schema ComprehendCreateDocumentClassifierRequest#VpcConfig
   */
  readonly vpcConfig?: ComprehendVpcConfig;

  /**
   * @schema ComprehendCreateDocumentClassifierRequest#Mode
   */
  readonly mode?: string;

}

/**
 * @schema ComprehendCreateDocumentClassifierResponse
 */
export interface ComprehendCreateDocumentClassifierResponse {
  /**
   * @schema ComprehendCreateDocumentClassifierResponse#DocumentClassifierArn
   */
  readonly documentClassifierArn?: string;

}

/**
 * @schema ComprehendCreateEndpointRequest
 */
export interface ComprehendCreateEndpointRequest {
  /**
   * @schema ComprehendCreateEndpointRequest#EndpointName
   */
  readonly endpointName: string;

  /**
   * @schema ComprehendCreateEndpointRequest#ModelArn
   */
  readonly modelArn: string;

  /**
   * @schema ComprehendCreateEndpointRequest#DesiredInferenceUnits
   */
  readonly desiredInferenceUnits: number;

  /**
   * @schema ComprehendCreateEndpointRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema ComprehendCreateEndpointRequest#Tags
   */
  readonly tags?: ComprehendTag[];

}

/**
 * @schema ComprehendCreateEndpointResponse
 */
export interface ComprehendCreateEndpointResponse {
  /**
   * @schema ComprehendCreateEndpointResponse#EndpointArn
   */
  readonly endpointArn?: string;

}

/**
 * @schema ComprehendCreateEntityRecognizerRequest
 */
export interface ComprehendCreateEntityRecognizerRequest {
  /**
   * @schema ComprehendCreateEntityRecognizerRequest#RecognizerName
   */
  readonly recognizerName: string;

  /**
   * @schema ComprehendCreateEntityRecognizerRequest#DataAccessRoleArn
   */
  readonly dataAccessRoleArn: string;

  /**
   * @schema ComprehendCreateEntityRecognizerRequest#Tags
   */
  readonly tags?: ComprehendTag[];

  /**
   * @schema ComprehendCreateEntityRecognizerRequest#InputDataConfig
   */
  readonly inputDataConfig: ComprehendEntityRecognizerInputDataConfig;

  /**
   * @schema ComprehendCreateEntityRecognizerRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema ComprehendCreateEntityRecognizerRequest#LanguageCode
   */
  readonly languageCode: string;

  /**
   * @schema ComprehendCreateEntityRecognizerRequest#VolumeKmsKeyId
   */
  readonly volumeKmsKeyId?: string;

  /**
   * @schema ComprehendCreateEntityRecognizerRequest#VpcConfig
   */
  readonly vpcConfig?: ComprehendVpcConfig;

}

/**
 * @schema ComprehendCreateEntityRecognizerResponse
 */
export interface ComprehendCreateEntityRecognizerResponse {
  /**
   * @schema ComprehendCreateEntityRecognizerResponse#EntityRecognizerArn
   */
  readonly entityRecognizerArn?: string;

}

/**
 * @schema ComprehendDeleteDocumentClassifierRequest
 */
export interface ComprehendDeleteDocumentClassifierRequest {
  /**
   * @schema ComprehendDeleteDocumentClassifierRequest#DocumentClassifierArn
   */
  readonly documentClassifierArn: string;

}

/**
 * @schema ComprehendDeleteDocumentClassifierResponse
 */
export interface ComprehendDeleteDocumentClassifierResponse {
}

/**
 * @schema ComprehendDeleteEndpointRequest
 */
export interface ComprehendDeleteEndpointRequest {
  /**
   * @schema ComprehendDeleteEndpointRequest#EndpointArn
   */
  readonly endpointArn: string;

}

/**
 * @schema ComprehendDeleteEndpointResponse
 */
export interface ComprehendDeleteEndpointResponse {
}

/**
 * @schema ComprehendDeleteEntityRecognizerRequest
 */
export interface ComprehendDeleteEntityRecognizerRequest {
  /**
   * @schema ComprehendDeleteEntityRecognizerRequest#EntityRecognizerArn
   */
  readonly entityRecognizerArn: string;

}

/**
 * @schema ComprehendDeleteEntityRecognizerResponse
 */
export interface ComprehendDeleteEntityRecognizerResponse {
}

/**
 * @schema ComprehendDescribeDocumentClassificationJobRequest
 */
export interface ComprehendDescribeDocumentClassificationJobRequest {
  /**
   * @schema ComprehendDescribeDocumentClassificationJobRequest#JobId
   */
  readonly jobId: string;

}

/**
 * @schema ComprehendDescribeDocumentClassificationJobResponse
 */
export interface ComprehendDescribeDocumentClassificationJobResponse {
  /**
   * @schema ComprehendDescribeDocumentClassificationJobResponse#DocumentClassificationJobProperties
   */
  readonly documentClassificationJobProperties?: ComprehendDocumentClassificationJobProperties;

}

/**
 * @schema ComprehendDescribeDocumentClassifierRequest
 */
export interface ComprehendDescribeDocumentClassifierRequest {
  /**
   * @schema ComprehendDescribeDocumentClassifierRequest#DocumentClassifierArn
   */
  readonly documentClassifierArn: string;

}

/**
 * @schema ComprehendDescribeDocumentClassifierResponse
 */
export interface ComprehendDescribeDocumentClassifierResponse {
  /**
   * @schema ComprehendDescribeDocumentClassifierResponse#DocumentClassifierProperties
   */
  readonly documentClassifierProperties?: ComprehendDocumentClassifierProperties;

}

/**
 * @schema ComprehendDescribeDominantLanguageDetectionJobRequest
 */
export interface ComprehendDescribeDominantLanguageDetectionJobRequest {
  /**
   * @schema ComprehendDescribeDominantLanguageDetectionJobRequest#JobId
   */
  readonly jobId: string;

}

/**
 * @schema ComprehendDescribeDominantLanguageDetectionJobResponse
 */
export interface ComprehendDescribeDominantLanguageDetectionJobResponse {
  /**
   * @schema ComprehendDescribeDominantLanguageDetectionJobResponse#DominantLanguageDetectionJobProperties
   */
  readonly dominantLanguageDetectionJobProperties?: ComprehendDominantLanguageDetectionJobProperties;

}

/**
 * @schema ComprehendDescribeEndpointRequest
 */
export interface ComprehendDescribeEndpointRequest {
  /**
   * @schema ComprehendDescribeEndpointRequest#EndpointArn
   */
  readonly endpointArn: string;

}

/**
 * @schema ComprehendDescribeEndpointResponse
 */
export interface ComprehendDescribeEndpointResponse {
  /**
   * @schema ComprehendDescribeEndpointResponse#EndpointProperties
   */
  readonly endpointProperties?: ComprehendEndpointProperties;

}

/**
 * @schema ComprehendDescribeEntitiesDetectionJobRequest
 */
export interface ComprehendDescribeEntitiesDetectionJobRequest {
  /**
   * @schema ComprehendDescribeEntitiesDetectionJobRequest#JobId
   */
  readonly jobId: string;

}

/**
 * @schema ComprehendDescribeEntitiesDetectionJobResponse
 */
export interface ComprehendDescribeEntitiesDetectionJobResponse {
  /**
   * @schema ComprehendDescribeEntitiesDetectionJobResponse#EntitiesDetectionJobProperties
   */
  readonly entitiesDetectionJobProperties?: ComprehendEntitiesDetectionJobProperties;

}

/**
 * @schema ComprehendDescribeEntityRecognizerRequest
 */
export interface ComprehendDescribeEntityRecognizerRequest {
  /**
   * @schema ComprehendDescribeEntityRecognizerRequest#EntityRecognizerArn
   */
  readonly entityRecognizerArn: string;

}

/**
 * @schema ComprehendDescribeEntityRecognizerResponse
 */
export interface ComprehendDescribeEntityRecognizerResponse {
  /**
   * @schema ComprehendDescribeEntityRecognizerResponse#EntityRecognizerProperties
   */
  readonly entityRecognizerProperties?: ComprehendEntityRecognizerProperties;

}

/**
 * @schema ComprehendDescribeEventsDetectionJobRequest
 */
export interface ComprehendDescribeEventsDetectionJobRequest {
  /**
   * @schema ComprehendDescribeEventsDetectionJobRequest#JobId
   */
  readonly jobId: string;

}

/**
 * @schema ComprehendDescribeEventsDetectionJobResponse
 */
export interface ComprehendDescribeEventsDetectionJobResponse {
  /**
   * @schema ComprehendDescribeEventsDetectionJobResponse#EventsDetectionJobProperties
   */
  readonly eventsDetectionJobProperties?: ComprehendEventsDetectionJobProperties;

}

/**
 * @schema ComprehendDescribeKeyPhrasesDetectionJobRequest
 */
export interface ComprehendDescribeKeyPhrasesDetectionJobRequest {
  /**
   * @schema ComprehendDescribeKeyPhrasesDetectionJobRequest#JobId
   */
  readonly jobId: string;

}

/**
 * @schema ComprehendDescribeKeyPhrasesDetectionJobResponse
 */
export interface ComprehendDescribeKeyPhrasesDetectionJobResponse {
  /**
   * @schema ComprehendDescribeKeyPhrasesDetectionJobResponse#KeyPhrasesDetectionJobProperties
   */
  readonly keyPhrasesDetectionJobProperties?: ComprehendKeyPhrasesDetectionJobProperties;

}

/**
 * @schema ComprehendDescribePiiEntitiesDetectionJobRequest
 */
export interface ComprehendDescribePiiEntitiesDetectionJobRequest {
  /**
   * @schema ComprehendDescribePiiEntitiesDetectionJobRequest#JobId
   */
  readonly jobId: string;

}

/**
 * @schema ComprehendDescribePiiEntitiesDetectionJobResponse
 */
export interface ComprehendDescribePiiEntitiesDetectionJobResponse {
  /**
   * @schema ComprehendDescribePiiEntitiesDetectionJobResponse#PiiEntitiesDetectionJobProperties
   */
  readonly piiEntitiesDetectionJobProperties?: ComprehendPiiEntitiesDetectionJobProperties;

}

/**
 * @schema ComprehendDescribeSentimentDetectionJobRequest
 */
export interface ComprehendDescribeSentimentDetectionJobRequest {
  /**
   * @schema ComprehendDescribeSentimentDetectionJobRequest#JobId
   */
  readonly jobId: string;

}

/**
 * @schema ComprehendDescribeSentimentDetectionJobResponse
 */
export interface ComprehendDescribeSentimentDetectionJobResponse {
  /**
   * @schema ComprehendDescribeSentimentDetectionJobResponse#SentimentDetectionJobProperties
   */
  readonly sentimentDetectionJobProperties?: ComprehendSentimentDetectionJobProperties;

}

/**
 * @schema ComprehendDescribeTopicsDetectionJobRequest
 */
export interface ComprehendDescribeTopicsDetectionJobRequest {
  /**
   * @schema ComprehendDescribeTopicsDetectionJobRequest#JobId
   */
  readonly jobId: string;

}

/**
 * @schema ComprehendDescribeTopicsDetectionJobResponse
 */
export interface ComprehendDescribeTopicsDetectionJobResponse {
  /**
   * @schema ComprehendDescribeTopicsDetectionJobResponse#TopicsDetectionJobProperties
   */
  readonly topicsDetectionJobProperties?: ComprehendTopicsDetectionJobProperties;

}

/**
 * @schema ComprehendDetectDominantLanguageRequest
 */
export interface ComprehendDetectDominantLanguageRequest {
  /**
   * @schema ComprehendDetectDominantLanguageRequest#Text
   */
  readonly text: string;

}

/**
 * @schema ComprehendDetectDominantLanguageResponse
 */
export interface ComprehendDetectDominantLanguageResponse {
  /**
   * @schema ComprehendDetectDominantLanguageResponse#Languages
   */
  readonly languages?: ComprehendDominantLanguage[];

}

/**
 * @schema ComprehendDetectEntitiesRequest
 */
export interface ComprehendDetectEntitiesRequest {
  /**
   * @schema ComprehendDetectEntitiesRequest#Text
   */
  readonly text: string;

  /**
   * @schema ComprehendDetectEntitiesRequest#LanguageCode
   */
  readonly languageCode?: string;

  /**
   * @schema ComprehendDetectEntitiesRequest#EndpointArn
   */
  readonly endpointArn?: string;

}

/**
 * @schema ComprehendDetectEntitiesResponse
 */
export interface ComprehendDetectEntitiesResponse {
  /**
   * @schema ComprehendDetectEntitiesResponse#Entities
   */
  readonly entities?: ComprehendEntity[];

}

/**
 * @schema ComprehendDetectKeyPhrasesRequest
 */
export interface ComprehendDetectKeyPhrasesRequest {
  /**
   * @schema ComprehendDetectKeyPhrasesRequest#Text
   */
  readonly text: string;

  /**
   * @schema ComprehendDetectKeyPhrasesRequest#LanguageCode
   */
  readonly languageCode: string;

}

/**
 * @schema ComprehendDetectKeyPhrasesResponse
 */
export interface ComprehendDetectKeyPhrasesResponse {
  /**
   * @schema ComprehendDetectKeyPhrasesResponse#KeyPhrases
   */
  readonly keyPhrases?: ComprehendKeyPhrase[];

}

/**
 * @schema ComprehendDetectPiiEntitiesRequest
 */
export interface ComprehendDetectPiiEntitiesRequest {
  /**
   * @schema ComprehendDetectPiiEntitiesRequest#Text
   */
  readonly text: string;

  /**
   * @schema ComprehendDetectPiiEntitiesRequest#LanguageCode
   */
  readonly languageCode: string;

}

/**
 * @schema ComprehendDetectPiiEntitiesResponse
 */
export interface ComprehendDetectPiiEntitiesResponse {
  /**
   * @schema ComprehendDetectPiiEntitiesResponse#Entities
   */
  readonly entities?: ComprehendPiiEntity[];

}

/**
 * @schema ComprehendDetectSentimentRequest
 */
export interface ComprehendDetectSentimentRequest {
  /**
   * @schema ComprehendDetectSentimentRequest#Text
   */
  readonly text: string;

  /**
   * @schema ComprehendDetectSentimentRequest#LanguageCode
   */
  readonly languageCode: string;

}

/**
 * @schema ComprehendDetectSentimentResponse
 */
export interface ComprehendDetectSentimentResponse {
  /**
   * @schema ComprehendDetectSentimentResponse#Sentiment
   */
  readonly sentiment?: string;

  /**
   * @schema ComprehendDetectSentimentResponse#SentimentScore
   */
  readonly sentimentScore?: ComprehendSentimentScore;

}

/**
 * @schema ComprehendDetectSyntaxRequest
 */
export interface ComprehendDetectSyntaxRequest {
  /**
   * @schema ComprehendDetectSyntaxRequest#Text
   */
  readonly text: string;

  /**
   * @schema ComprehendDetectSyntaxRequest#LanguageCode
   */
  readonly languageCode: string;

}

/**
 * @schema ComprehendDetectSyntaxResponse
 */
export interface ComprehendDetectSyntaxResponse {
  /**
   * @schema ComprehendDetectSyntaxResponse#SyntaxTokens
   */
  readonly syntaxTokens?: ComprehendSyntaxToken[];

}

/**
 * @schema ComprehendListDocumentClassificationJobsRequest
 */
export interface ComprehendListDocumentClassificationJobsRequest {
  /**
   * @schema ComprehendListDocumentClassificationJobsRequest#Filter
   */
  readonly filter?: ComprehendDocumentClassificationJobFilter;

  /**
   * @schema ComprehendListDocumentClassificationJobsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ComprehendListDocumentClassificationJobsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ComprehendListDocumentClassificationJobsResponse
 */
export interface ComprehendListDocumentClassificationJobsResponse {
  /**
   * @schema ComprehendListDocumentClassificationJobsResponse#DocumentClassificationJobPropertiesList
   */
  readonly documentClassificationJobPropertiesList?: ComprehendDocumentClassificationJobProperties[];

  /**
   * @schema ComprehendListDocumentClassificationJobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ComprehendListDocumentClassifiersRequest
 */
export interface ComprehendListDocumentClassifiersRequest {
  /**
   * @schema ComprehendListDocumentClassifiersRequest#Filter
   */
  readonly filter?: ComprehendDocumentClassifierFilter;

  /**
   * @schema ComprehendListDocumentClassifiersRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ComprehendListDocumentClassifiersRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ComprehendListDocumentClassifiersResponse
 */
export interface ComprehendListDocumentClassifiersResponse {
  /**
   * @schema ComprehendListDocumentClassifiersResponse#DocumentClassifierPropertiesList
   */
  readonly documentClassifierPropertiesList?: ComprehendDocumentClassifierProperties[];

  /**
   * @schema ComprehendListDocumentClassifiersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ComprehendListDominantLanguageDetectionJobsRequest
 */
export interface ComprehendListDominantLanguageDetectionJobsRequest {
  /**
   * @schema ComprehendListDominantLanguageDetectionJobsRequest#Filter
   */
  readonly filter?: ComprehendDominantLanguageDetectionJobFilter;

  /**
   * @schema ComprehendListDominantLanguageDetectionJobsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ComprehendListDominantLanguageDetectionJobsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ComprehendListDominantLanguageDetectionJobsResponse
 */
export interface ComprehendListDominantLanguageDetectionJobsResponse {
  /**
   * @schema ComprehendListDominantLanguageDetectionJobsResponse#DominantLanguageDetectionJobPropertiesList
   */
  readonly dominantLanguageDetectionJobPropertiesList?: ComprehendDominantLanguageDetectionJobProperties[];

  /**
   * @schema ComprehendListDominantLanguageDetectionJobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ComprehendListEndpointsRequest
 */
export interface ComprehendListEndpointsRequest {
  /**
   * @schema ComprehendListEndpointsRequest#Filter
   */
  readonly filter?: ComprehendEndpointFilter;

  /**
   * @schema ComprehendListEndpointsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ComprehendListEndpointsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ComprehendListEndpointsResponse
 */
export interface ComprehendListEndpointsResponse {
  /**
   * @schema ComprehendListEndpointsResponse#EndpointPropertiesList
   */
  readonly endpointPropertiesList?: ComprehendEndpointProperties[];

  /**
   * @schema ComprehendListEndpointsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ComprehendListEntitiesDetectionJobsRequest
 */
export interface ComprehendListEntitiesDetectionJobsRequest {
  /**
   * @schema ComprehendListEntitiesDetectionJobsRequest#Filter
   */
  readonly filter?: ComprehendEntitiesDetectionJobFilter;

  /**
   * @schema ComprehendListEntitiesDetectionJobsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ComprehendListEntitiesDetectionJobsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ComprehendListEntitiesDetectionJobsResponse
 */
export interface ComprehendListEntitiesDetectionJobsResponse {
  /**
   * @schema ComprehendListEntitiesDetectionJobsResponse#EntitiesDetectionJobPropertiesList
   */
  readonly entitiesDetectionJobPropertiesList?: ComprehendEntitiesDetectionJobProperties[];

  /**
   * @schema ComprehendListEntitiesDetectionJobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ComprehendListEntityRecognizersRequest
 */
export interface ComprehendListEntityRecognizersRequest {
  /**
   * @schema ComprehendListEntityRecognizersRequest#Filter
   */
  readonly filter?: ComprehendEntityRecognizerFilter;

  /**
   * @schema ComprehendListEntityRecognizersRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ComprehendListEntityRecognizersRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ComprehendListEntityRecognizersResponse
 */
export interface ComprehendListEntityRecognizersResponse {
  /**
   * @schema ComprehendListEntityRecognizersResponse#EntityRecognizerPropertiesList
   */
  readonly entityRecognizerPropertiesList?: ComprehendEntityRecognizerProperties[];

  /**
   * @schema ComprehendListEntityRecognizersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ComprehendListEventsDetectionJobsRequest
 */
export interface ComprehendListEventsDetectionJobsRequest {
  /**
   * @schema ComprehendListEventsDetectionJobsRequest#Filter
   */
  readonly filter?: ComprehendEventsDetectionJobFilter;

  /**
   * @schema ComprehendListEventsDetectionJobsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ComprehendListEventsDetectionJobsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ComprehendListEventsDetectionJobsResponse
 */
export interface ComprehendListEventsDetectionJobsResponse {
  /**
   * @schema ComprehendListEventsDetectionJobsResponse#EventsDetectionJobPropertiesList
   */
  readonly eventsDetectionJobPropertiesList?: ComprehendEventsDetectionJobProperties[];

  /**
   * @schema ComprehendListEventsDetectionJobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ComprehendListKeyPhrasesDetectionJobsRequest
 */
export interface ComprehendListKeyPhrasesDetectionJobsRequest {
  /**
   * @schema ComprehendListKeyPhrasesDetectionJobsRequest#Filter
   */
  readonly filter?: ComprehendKeyPhrasesDetectionJobFilter;

  /**
   * @schema ComprehendListKeyPhrasesDetectionJobsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ComprehendListKeyPhrasesDetectionJobsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ComprehendListKeyPhrasesDetectionJobsResponse
 */
export interface ComprehendListKeyPhrasesDetectionJobsResponse {
  /**
   * @schema ComprehendListKeyPhrasesDetectionJobsResponse#KeyPhrasesDetectionJobPropertiesList
   */
  readonly keyPhrasesDetectionJobPropertiesList?: ComprehendKeyPhrasesDetectionJobProperties[];

  /**
   * @schema ComprehendListKeyPhrasesDetectionJobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ComprehendListPiiEntitiesDetectionJobsRequest
 */
export interface ComprehendListPiiEntitiesDetectionJobsRequest {
  /**
   * @schema ComprehendListPiiEntitiesDetectionJobsRequest#Filter
   */
  readonly filter?: ComprehendPiiEntitiesDetectionJobFilter;

  /**
   * @schema ComprehendListPiiEntitiesDetectionJobsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ComprehendListPiiEntitiesDetectionJobsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ComprehendListPiiEntitiesDetectionJobsResponse
 */
export interface ComprehendListPiiEntitiesDetectionJobsResponse {
  /**
   * @schema ComprehendListPiiEntitiesDetectionJobsResponse#PiiEntitiesDetectionJobPropertiesList
   */
  readonly piiEntitiesDetectionJobPropertiesList?: ComprehendPiiEntitiesDetectionJobProperties[];

  /**
   * @schema ComprehendListPiiEntitiesDetectionJobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ComprehendListSentimentDetectionJobsRequest
 */
export interface ComprehendListSentimentDetectionJobsRequest {
  /**
   * @schema ComprehendListSentimentDetectionJobsRequest#Filter
   */
  readonly filter?: ComprehendSentimentDetectionJobFilter;

  /**
   * @schema ComprehendListSentimentDetectionJobsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ComprehendListSentimentDetectionJobsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ComprehendListSentimentDetectionJobsResponse
 */
export interface ComprehendListSentimentDetectionJobsResponse {
  /**
   * @schema ComprehendListSentimentDetectionJobsResponse#SentimentDetectionJobPropertiesList
   */
  readonly sentimentDetectionJobPropertiesList?: ComprehendSentimentDetectionJobProperties[];

  /**
   * @schema ComprehendListSentimentDetectionJobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ComprehendListTagsForResourceRequest
 */
export interface ComprehendListTagsForResourceRequest {
  /**
   * @schema ComprehendListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema ComprehendListTagsForResourceResponse
 */
export interface ComprehendListTagsForResourceResponse {
  /**
   * @schema ComprehendListTagsForResourceResponse#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema ComprehendListTagsForResourceResponse#Tags
   */
  readonly tags?: ComprehendTag[];

}

/**
 * @schema ComprehendListTopicsDetectionJobsRequest
 */
export interface ComprehendListTopicsDetectionJobsRequest {
  /**
   * @schema ComprehendListTopicsDetectionJobsRequest#Filter
   */
  readonly filter?: ComprehendTopicsDetectionJobFilter;

  /**
   * @schema ComprehendListTopicsDetectionJobsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ComprehendListTopicsDetectionJobsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ComprehendListTopicsDetectionJobsResponse
 */
export interface ComprehendListTopicsDetectionJobsResponse {
  /**
   * @schema ComprehendListTopicsDetectionJobsResponse#TopicsDetectionJobPropertiesList
   */
  readonly topicsDetectionJobPropertiesList?: ComprehendTopicsDetectionJobProperties[];

  /**
   * @schema ComprehendListTopicsDetectionJobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ComprehendStartDocumentClassificationJobRequest
 */
export interface ComprehendStartDocumentClassificationJobRequest {
  /**
   * @schema ComprehendStartDocumentClassificationJobRequest#JobName
   */
  readonly jobName?: string;

  /**
   * @schema ComprehendStartDocumentClassificationJobRequest#DocumentClassifierArn
   */
  readonly documentClassifierArn: string;

  /**
   * @schema ComprehendStartDocumentClassificationJobRequest#InputDataConfig
   */
  readonly inputDataConfig: ComprehendInputDataConfig;

  /**
   * @schema ComprehendStartDocumentClassificationJobRequest#OutputDataConfig
   */
  readonly outputDataConfig: ComprehendOutputDataConfig;

  /**
   * @schema ComprehendStartDocumentClassificationJobRequest#DataAccessRoleArn
   */
  readonly dataAccessRoleArn: string;

  /**
   * @schema ComprehendStartDocumentClassificationJobRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema ComprehendStartDocumentClassificationJobRequest#VolumeKmsKeyId
   */
  readonly volumeKmsKeyId?: string;

  /**
   * @schema ComprehendStartDocumentClassificationJobRequest#VpcConfig
   */
  readonly vpcConfig?: ComprehendVpcConfig;

}

/**
 * @schema ComprehendStartDocumentClassificationJobResponse
 */
export interface ComprehendStartDocumentClassificationJobResponse {
  /**
   * @schema ComprehendStartDocumentClassificationJobResponse#JobId
   */
  readonly jobId?: string;

  /**
   * @schema ComprehendStartDocumentClassificationJobResponse#JobStatus
   */
  readonly jobStatus?: string;

}

/**
 * @schema ComprehendStartDominantLanguageDetectionJobRequest
 */
export interface ComprehendStartDominantLanguageDetectionJobRequest {
  /**
   * @schema ComprehendStartDominantLanguageDetectionJobRequest#InputDataConfig
   */
  readonly inputDataConfig: ComprehendInputDataConfig;

  /**
   * @schema ComprehendStartDominantLanguageDetectionJobRequest#OutputDataConfig
   */
  readonly outputDataConfig: ComprehendOutputDataConfig;

  /**
   * @schema ComprehendStartDominantLanguageDetectionJobRequest#DataAccessRoleArn
   */
  readonly dataAccessRoleArn: string;

  /**
   * @schema ComprehendStartDominantLanguageDetectionJobRequest#JobName
   */
  readonly jobName?: string;

  /**
   * @schema ComprehendStartDominantLanguageDetectionJobRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema ComprehendStartDominantLanguageDetectionJobRequest#VolumeKmsKeyId
   */
  readonly volumeKmsKeyId?: string;

  /**
   * @schema ComprehendStartDominantLanguageDetectionJobRequest#VpcConfig
   */
  readonly vpcConfig?: ComprehendVpcConfig;

}

/**
 * @schema ComprehendStartDominantLanguageDetectionJobResponse
 */
export interface ComprehendStartDominantLanguageDetectionJobResponse {
  /**
   * @schema ComprehendStartDominantLanguageDetectionJobResponse#JobId
   */
  readonly jobId?: string;

  /**
   * @schema ComprehendStartDominantLanguageDetectionJobResponse#JobStatus
   */
  readonly jobStatus?: string;

}

/**
 * @schema ComprehendStartEntitiesDetectionJobRequest
 */
export interface ComprehendStartEntitiesDetectionJobRequest {
  /**
   * @schema ComprehendStartEntitiesDetectionJobRequest#InputDataConfig
   */
  readonly inputDataConfig: ComprehendInputDataConfig;

  /**
   * @schema ComprehendStartEntitiesDetectionJobRequest#OutputDataConfig
   */
  readonly outputDataConfig: ComprehendOutputDataConfig;

  /**
   * @schema ComprehendStartEntitiesDetectionJobRequest#DataAccessRoleArn
   */
  readonly dataAccessRoleArn: string;

  /**
   * @schema ComprehendStartEntitiesDetectionJobRequest#JobName
   */
  readonly jobName?: string;

  /**
   * @schema ComprehendStartEntitiesDetectionJobRequest#EntityRecognizerArn
   */
  readonly entityRecognizerArn?: string;

  /**
   * @schema ComprehendStartEntitiesDetectionJobRequest#LanguageCode
   */
  readonly languageCode: string;

  /**
   * @schema ComprehendStartEntitiesDetectionJobRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema ComprehendStartEntitiesDetectionJobRequest#VolumeKmsKeyId
   */
  readonly volumeKmsKeyId?: string;

  /**
   * @schema ComprehendStartEntitiesDetectionJobRequest#VpcConfig
   */
  readonly vpcConfig?: ComprehendVpcConfig;

}

/**
 * @schema ComprehendStartEntitiesDetectionJobResponse
 */
export interface ComprehendStartEntitiesDetectionJobResponse {
  /**
   * @schema ComprehendStartEntitiesDetectionJobResponse#JobId
   */
  readonly jobId?: string;

  /**
   * @schema ComprehendStartEntitiesDetectionJobResponse#JobStatus
   */
  readonly jobStatus?: string;

}

/**
 * @schema ComprehendStartEventsDetectionJobRequest
 */
export interface ComprehendStartEventsDetectionJobRequest {
  /**
   * @schema ComprehendStartEventsDetectionJobRequest#InputDataConfig
   */
  readonly inputDataConfig: ComprehendInputDataConfig;

  /**
   * @schema ComprehendStartEventsDetectionJobRequest#OutputDataConfig
   */
  readonly outputDataConfig: ComprehendOutputDataConfig;

  /**
   * @schema ComprehendStartEventsDetectionJobRequest#DataAccessRoleArn
   */
  readonly dataAccessRoleArn: string;

  /**
   * @schema ComprehendStartEventsDetectionJobRequest#JobName
   */
  readonly jobName?: string;

  /**
   * @schema ComprehendStartEventsDetectionJobRequest#LanguageCode
   */
  readonly languageCode: string;

  /**
   * @schema ComprehendStartEventsDetectionJobRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema ComprehendStartEventsDetectionJobRequest#TargetEventTypes
   */
  readonly targetEventTypes: string[];

}

/**
 * @schema ComprehendStartEventsDetectionJobResponse
 */
export interface ComprehendStartEventsDetectionJobResponse {
  /**
   * @schema ComprehendStartEventsDetectionJobResponse#JobId
   */
  readonly jobId?: string;

  /**
   * @schema ComprehendStartEventsDetectionJobResponse#JobStatus
   */
  readonly jobStatus?: string;

}

/**
 * @schema ComprehendStartKeyPhrasesDetectionJobRequest
 */
export interface ComprehendStartKeyPhrasesDetectionJobRequest {
  /**
   * @schema ComprehendStartKeyPhrasesDetectionJobRequest#InputDataConfig
   */
  readonly inputDataConfig: ComprehendInputDataConfig;

  /**
   * @schema ComprehendStartKeyPhrasesDetectionJobRequest#OutputDataConfig
   */
  readonly outputDataConfig: ComprehendOutputDataConfig;

  /**
   * @schema ComprehendStartKeyPhrasesDetectionJobRequest#DataAccessRoleArn
   */
  readonly dataAccessRoleArn: string;

  /**
   * @schema ComprehendStartKeyPhrasesDetectionJobRequest#JobName
   */
  readonly jobName?: string;

  /**
   * @schema ComprehendStartKeyPhrasesDetectionJobRequest#LanguageCode
   */
  readonly languageCode: string;

  /**
   * @schema ComprehendStartKeyPhrasesDetectionJobRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema ComprehendStartKeyPhrasesDetectionJobRequest#VolumeKmsKeyId
   */
  readonly volumeKmsKeyId?: string;

  /**
   * @schema ComprehendStartKeyPhrasesDetectionJobRequest#VpcConfig
   */
  readonly vpcConfig?: ComprehendVpcConfig;

}

/**
 * @schema ComprehendStartKeyPhrasesDetectionJobResponse
 */
export interface ComprehendStartKeyPhrasesDetectionJobResponse {
  /**
   * @schema ComprehendStartKeyPhrasesDetectionJobResponse#JobId
   */
  readonly jobId?: string;

  /**
   * @schema ComprehendStartKeyPhrasesDetectionJobResponse#JobStatus
   */
  readonly jobStatus?: string;

}

/**
 * @schema ComprehendStartPiiEntitiesDetectionJobRequest
 */
export interface ComprehendStartPiiEntitiesDetectionJobRequest {
  /**
   * @schema ComprehendStartPiiEntitiesDetectionJobRequest#InputDataConfig
   */
  readonly inputDataConfig: ComprehendInputDataConfig;

  /**
   * @schema ComprehendStartPiiEntitiesDetectionJobRequest#OutputDataConfig
   */
  readonly outputDataConfig: ComprehendOutputDataConfig;

  /**
   * @schema ComprehendStartPiiEntitiesDetectionJobRequest#Mode
   */
  readonly mode: string;

  /**
   * @schema ComprehendStartPiiEntitiesDetectionJobRequest#RedactionConfig
   */
  readonly redactionConfig?: ComprehendRedactionConfig;

  /**
   * @schema ComprehendStartPiiEntitiesDetectionJobRequest#DataAccessRoleArn
   */
  readonly dataAccessRoleArn: string;

  /**
   * @schema ComprehendStartPiiEntitiesDetectionJobRequest#JobName
   */
  readonly jobName?: string;

  /**
   * @schema ComprehendStartPiiEntitiesDetectionJobRequest#LanguageCode
   */
  readonly languageCode: string;

  /**
   * @schema ComprehendStartPiiEntitiesDetectionJobRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * @schema ComprehendStartPiiEntitiesDetectionJobResponse
 */
export interface ComprehendStartPiiEntitiesDetectionJobResponse {
  /**
   * @schema ComprehendStartPiiEntitiesDetectionJobResponse#JobId
   */
  readonly jobId?: string;

  /**
   * @schema ComprehendStartPiiEntitiesDetectionJobResponse#JobStatus
   */
  readonly jobStatus?: string;

}

/**
 * @schema ComprehendStartSentimentDetectionJobRequest
 */
export interface ComprehendStartSentimentDetectionJobRequest {
  /**
   * @schema ComprehendStartSentimentDetectionJobRequest#InputDataConfig
   */
  readonly inputDataConfig: ComprehendInputDataConfig;

  /**
   * @schema ComprehendStartSentimentDetectionJobRequest#OutputDataConfig
   */
  readonly outputDataConfig: ComprehendOutputDataConfig;

  /**
   * @schema ComprehendStartSentimentDetectionJobRequest#DataAccessRoleArn
   */
  readonly dataAccessRoleArn: string;

  /**
   * @schema ComprehendStartSentimentDetectionJobRequest#JobName
   */
  readonly jobName?: string;

  /**
   * @schema ComprehendStartSentimentDetectionJobRequest#LanguageCode
   */
  readonly languageCode: string;

  /**
   * @schema ComprehendStartSentimentDetectionJobRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema ComprehendStartSentimentDetectionJobRequest#VolumeKmsKeyId
   */
  readonly volumeKmsKeyId?: string;

  /**
   * @schema ComprehendStartSentimentDetectionJobRequest#VpcConfig
   */
  readonly vpcConfig?: ComprehendVpcConfig;

}

/**
 * @schema ComprehendStartSentimentDetectionJobResponse
 */
export interface ComprehendStartSentimentDetectionJobResponse {
  /**
   * @schema ComprehendStartSentimentDetectionJobResponse#JobId
   */
  readonly jobId?: string;

  /**
   * @schema ComprehendStartSentimentDetectionJobResponse#JobStatus
   */
  readonly jobStatus?: string;

}

/**
 * @schema ComprehendStartTopicsDetectionJobRequest
 */
export interface ComprehendStartTopicsDetectionJobRequest {
  /**
   * @schema ComprehendStartTopicsDetectionJobRequest#InputDataConfig
   */
  readonly inputDataConfig: ComprehendInputDataConfig;

  /**
   * @schema ComprehendStartTopicsDetectionJobRequest#OutputDataConfig
   */
  readonly outputDataConfig: ComprehendOutputDataConfig;

  /**
   * @schema ComprehendStartTopicsDetectionJobRequest#DataAccessRoleArn
   */
  readonly dataAccessRoleArn: string;

  /**
   * @schema ComprehendStartTopicsDetectionJobRequest#JobName
   */
  readonly jobName?: string;

  /**
   * @schema ComprehendStartTopicsDetectionJobRequest#NumberOfTopics
   */
  readonly numberOfTopics?: number;

  /**
   * @schema ComprehendStartTopicsDetectionJobRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema ComprehendStartTopicsDetectionJobRequest#VolumeKmsKeyId
   */
  readonly volumeKmsKeyId?: string;

  /**
   * @schema ComprehendStartTopicsDetectionJobRequest#VpcConfig
   */
  readonly vpcConfig?: ComprehendVpcConfig;

}

/**
 * @schema ComprehendStartTopicsDetectionJobResponse
 */
export interface ComprehendStartTopicsDetectionJobResponse {
  /**
   * @schema ComprehendStartTopicsDetectionJobResponse#JobId
   */
  readonly jobId?: string;

  /**
   * @schema ComprehendStartTopicsDetectionJobResponse#JobStatus
   */
  readonly jobStatus?: string;

}

/**
 * @schema ComprehendStopDominantLanguageDetectionJobRequest
 */
export interface ComprehendStopDominantLanguageDetectionJobRequest {
  /**
   * @schema ComprehendStopDominantLanguageDetectionJobRequest#JobId
   */
  readonly jobId: string;

}

/**
 * @schema ComprehendStopDominantLanguageDetectionJobResponse
 */
export interface ComprehendStopDominantLanguageDetectionJobResponse {
  /**
   * @schema ComprehendStopDominantLanguageDetectionJobResponse#JobId
   */
  readonly jobId?: string;

  /**
   * @schema ComprehendStopDominantLanguageDetectionJobResponse#JobStatus
   */
  readonly jobStatus?: string;

}

/**
 * @schema ComprehendStopEntitiesDetectionJobRequest
 */
export interface ComprehendStopEntitiesDetectionJobRequest {
  /**
   * @schema ComprehendStopEntitiesDetectionJobRequest#JobId
   */
  readonly jobId: string;

}

/**
 * @schema ComprehendStopEntitiesDetectionJobResponse
 */
export interface ComprehendStopEntitiesDetectionJobResponse {
  /**
   * @schema ComprehendStopEntitiesDetectionJobResponse#JobId
   */
  readonly jobId?: string;

  /**
   * @schema ComprehendStopEntitiesDetectionJobResponse#JobStatus
   */
  readonly jobStatus?: string;

}

/**
 * @schema ComprehendStopEventsDetectionJobRequest
 */
export interface ComprehendStopEventsDetectionJobRequest {
  /**
   * @schema ComprehendStopEventsDetectionJobRequest#JobId
   */
  readonly jobId: string;

}

/**
 * @schema ComprehendStopEventsDetectionJobResponse
 */
export interface ComprehendStopEventsDetectionJobResponse {
  /**
   * @schema ComprehendStopEventsDetectionJobResponse#JobId
   */
  readonly jobId?: string;

  /**
   * @schema ComprehendStopEventsDetectionJobResponse#JobStatus
   */
  readonly jobStatus?: string;

}

/**
 * @schema ComprehendStopKeyPhrasesDetectionJobRequest
 */
export interface ComprehendStopKeyPhrasesDetectionJobRequest {
  /**
   * @schema ComprehendStopKeyPhrasesDetectionJobRequest#JobId
   */
  readonly jobId: string;

}

/**
 * @schema ComprehendStopKeyPhrasesDetectionJobResponse
 */
export interface ComprehendStopKeyPhrasesDetectionJobResponse {
  /**
   * @schema ComprehendStopKeyPhrasesDetectionJobResponse#JobId
   */
  readonly jobId?: string;

  /**
   * @schema ComprehendStopKeyPhrasesDetectionJobResponse#JobStatus
   */
  readonly jobStatus?: string;

}

/**
 * @schema ComprehendStopPiiEntitiesDetectionJobRequest
 */
export interface ComprehendStopPiiEntitiesDetectionJobRequest {
  /**
   * @schema ComprehendStopPiiEntitiesDetectionJobRequest#JobId
   */
  readonly jobId: string;

}

/**
 * @schema ComprehendStopPiiEntitiesDetectionJobResponse
 */
export interface ComprehendStopPiiEntitiesDetectionJobResponse {
  /**
   * @schema ComprehendStopPiiEntitiesDetectionJobResponse#JobId
   */
  readonly jobId?: string;

  /**
   * @schema ComprehendStopPiiEntitiesDetectionJobResponse#JobStatus
   */
  readonly jobStatus?: string;

}

/**
 * @schema ComprehendStopSentimentDetectionJobRequest
 */
export interface ComprehendStopSentimentDetectionJobRequest {
  /**
   * @schema ComprehendStopSentimentDetectionJobRequest#JobId
   */
  readonly jobId: string;

}

/**
 * @schema ComprehendStopSentimentDetectionJobResponse
 */
export interface ComprehendStopSentimentDetectionJobResponse {
  /**
   * @schema ComprehendStopSentimentDetectionJobResponse#JobId
   */
  readonly jobId?: string;

  /**
   * @schema ComprehendStopSentimentDetectionJobResponse#JobStatus
   */
  readonly jobStatus?: string;

}

/**
 * @schema ComprehendStopTrainingDocumentClassifierRequest
 */
export interface ComprehendStopTrainingDocumentClassifierRequest {
  /**
   * @schema ComprehendStopTrainingDocumentClassifierRequest#DocumentClassifierArn
   */
  readonly documentClassifierArn: string;

}

/**
 * @schema ComprehendStopTrainingDocumentClassifierResponse
 */
export interface ComprehendStopTrainingDocumentClassifierResponse {
}

/**
 * @schema ComprehendStopTrainingEntityRecognizerRequest
 */
export interface ComprehendStopTrainingEntityRecognizerRequest {
  /**
   * @schema ComprehendStopTrainingEntityRecognizerRequest#EntityRecognizerArn
   */
  readonly entityRecognizerArn: string;

}

/**
 * @schema ComprehendStopTrainingEntityRecognizerResponse
 */
export interface ComprehendStopTrainingEntityRecognizerResponse {
}

/**
 * @schema ComprehendTagResourceRequest
 */
export interface ComprehendTagResourceRequest {
  /**
   * @schema ComprehendTagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema ComprehendTagResourceRequest#Tags
   */
  readonly tags: ComprehendTag[];

}

/**
 * @schema ComprehendTagResourceResponse
 */
export interface ComprehendTagResourceResponse {
}

/**
 * @schema ComprehendUntagResourceRequest
 */
export interface ComprehendUntagResourceRequest {
  /**
   * @schema ComprehendUntagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema ComprehendUntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema ComprehendUntagResourceResponse
 */
export interface ComprehendUntagResourceResponse {
}

/**
 * @schema ComprehendUpdateEndpointRequest
 */
export interface ComprehendUpdateEndpointRequest {
  /**
   * @schema ComprehendUpdateEndpointRequest#EndpointArn
   */
  readonly endpointArn: string;

  /**
   * @schema ComprehendUpdateEndpointRequest#DesiredInferenceUnits
   */
  readonly desiredInferenceUnits: number;

}

/**
 * @schema ComprehendUpdateEndpointResponse
 */
export interface ComprehendUpdateEndpointResponse {
}

/**
 * @schema ComprehendBatchDetectDominantLanguageItemResult
 */
export interface ComprehendBatchDetectDominantLanguageItemResult {
  /**
   * @schema ComprehendBatchDetectDominantLanguageItemResult#Index
   */
  readonly index?: number;

  /**
   * @schema ComprehendBatchDetectDominantLanguageItemResult#Languages
   */
  readonly languages?: ComprehendDominantLanguage[];

}

/**
 * @schema ComprehendBatchItemError
 */
export interface ComprehendBatchItemError {
  /**
   * @schema ComprehendBatchItemError#Index
   */
  readonly index?: number;

  /**
   * @schema ComprehendBatchItemError#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema ComprehendBatchItemError#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema ComprehendBatchDetectEntitiesItemResult
 */
export interface ComprehendBatchDetectEntitiesItemResult {
  /**
   * @schema ComprehendBatchDetectEntitiesItemResult#Index
   */
  readonly index?: number;

  /**
   * @schema ComprehendBatchDetectEntitiesItemResult#Entities
   */
  readonly entities?: ComprehendEntity[];

}

/**
 * @schema ComprehendBatchDetectKeyPhrasesItemResult
 */
export interface ComprehendBatchDetectKeyPhrasesItemResult {
  /**
   * @schema ComprehendBatchDetectKeyPhrasesItemResult#Index
   */
  readonly index?: number;

  /**
   * @schema ComprehendBatchDetectKeyPhrasesItemResult#KeyPhrases
   */
  readonly keyPhrases?: ComprehendKeyPhrase[];

}

/**
 * @schema ComprehendBatchDetectSentimentItemResult
 */
export interface ComprehendBatchDetectSentimentItemResult {
  /**
   * @schema ComprehendBatchDetectSentimentItemResult#Index
   */
  readonly index?: number;

  /**
   * @schema ComprehendBatchDetectSentimentItemResult#Sentiment
   */
  readonly sentiment?: string;

  /**
   * @schema ComprehendBatchDetectSentimentItemResult#SentimentScore
   */
  readonly sentimentScore?: ComprehendSentimentScore;

}

/**
 * @schema ComprehendBatchDetectSyntaxItemResult
 */
export interface ComprehendBatchDetectSyntaxItemResult {
  /**
   * @schema ComprehendBatchDetectSyntaxItemResult#Index
   */
  readonly index?: number;

  /**
   * @schema ComprehendBatchDetectSyntaxItemResult#SyntaxTokens
   */
  readonly syntaxTokens?: ComprehendSyntaxToken[];

}

/**
 * @schema ComprehendDocumentClass
 */
export interface ComprehendDocumentClass {
  /**
   * @schema ComprehendDocumentClass#Name
   */
  readonly name?: string;

  /**
   * @schema ComprehendDocumentClass#Score
   */
  readonly score?: number;

}

/**
 * @schema ComprehendDocumentLabel
 */
export interface ComprehendDocumentLabel {
  /**
   * @schema ComprehendDocumentLabel#Name
   */
  readonly name?: string;

  /**
   * @schema ComprehendDocumentLabel#Score
   */
  readonly score?: number;

}

/**
 * @schema ComprehendTag
 */
export interface ComprehendTag {
  /**
   * @schema ComprehendTag#Key
   */
  readonly key: string;

  /**
   * @schema ComprehendTag#Value
   */
  readonly value?: string;

}

/**
 * @schema ComprehendDocumentClassifierInputDataConfig
 */
export interface ComprehendDocumentClassifierInputDataConfig {
  /**
   * @schema ComprehendDocumentClassifierInputDataConfig#DataFormat
   */
  readonly dataFormat?: string;

  /**
   * @schema ComprehendDocumentClassifierInputDataConfig#S3Uri
   */
  readonly s3Uri?: string;

  /**
   * @schema ComprehendDocumentClassifierInputDataConfig#LabelDelimiter
   */
  readonly labelDelimiter?: string;

  /**
   * @schema ComprehendDocumentClassifierInputDataConfig#AugmentedManifests
   */
  readonly augmentedManifests?: ComprehendAugmentedManifestsListItem[];

}

/**
 * @schema ComprehendDocumentClassifierOutputDataConfig
 */
export interface ComprehendDocumentClassifierOutputDataConfig {
  /**
   * @schema ComprehendDocumentClassifierOutputDataConfig#S3Uri
   */
  readonly s3Uri?: string;

  /**
   * @schema ComprehendDocumentClassifierOutputDataConfig#KmsKeyId
   */
  readonly kmsKeyId?: string;

}

/**
 * @schema ComprehendVpcConfig
 */
export interface ComprehendVpcConfig {
  /**
   * @schema ComprehendVpcConfig#SecurityGroupIds
   */
  readonly securityGroupIds: string[];

  /**
   * @schema ComprehendVpcConfig#Subnets
   */
  readonly subnets: string[];

}

/**
 * @schema ComprehendEntityRecognizerInputDataConfig
 */
export interface ComprehendEntityRecognizerInputDataConfig {
  /**
   * @schema ComprehendEntityRecognizerInputDataConfig#DataFormat
   */
  readonly dataFormat?: string;

  /**
   * @schema ComprehendEntityRecognizerInputDataConfig#EntityTypes
   */
  readonly entityTypes: ComprehendEntityTypesListItem[];

  /**
   * @schema ComprehendEntityRecognizerInputDataConfig#Documents
   */
  readonly documents?: ComprehendEntityRecognizerDocuments;

  /**
   * @schema ComprehendEntityRecognizerInputDataConfig#Annotations
   */
  readonly annotations?: ComprehendEntityRecognizerAnnotations;

  /**
   * @schema ComprehendEntityRecognizerInputDataConfig#EntityList
   */
  readonly entityList?: ComprehendEntityRecognizerEntityList;

  /**
   * @schema ComprehendEntityRecognizerInputDataConfig#AugmentedManifests
   */
  readonly augmentedManifests?: ComprehendAugmentedManifestsListItem[];

}

/**
 * @schema ComprehendDocumentClassificationJobProperties
 */
export interface ComprehendDocumentClassificationJobProperties {
  /**
   * @schema ComprehendDocumentClassificationJobProperties#JobId
   */
  readonly jobId?: string;

  /**
   * @schema ComprehendDocumentClassificationJobProperties#JobName
   */
  readonly jobName?: string;

  /**
   * @schema ComprehendDocumentClassificationJobProperties#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema ComprehendDocumentClassificationJobProperties#Message
   */
  readonly message?: string;

  /**
   * @schema ComprehendDocumentClassificationJobProperties#SubmitTime
   */
  readonly submitTime?: string;

  /**
   * @schema ComprehendDocumentClassificationJobProperties#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema ComprehendDocumentClassificationJobProperties#DocumentClassifierArn
   */
  readonly documentClassifierArn?: string;

  /**
   * @schema ComprehendDocumentClassificationJobProperties#InputDataConfig
   */
  readonly inputDataConfig?: ComprehendInputDataConfig;

  /**
   * @schema ComprehendDocumentClassificationJobProperties#OutputDataConfig
   */
  readonly outputDataConfig?: ComprehendOutputDataConfig;

  /**
   * @schema ComprehendDocumentClassificationJobProperties#DataAccessRoleArn
   */
  readonly dataAccessRoleArn?: string;

  /**
   * @schema ComprehendDocumentClassificationJobProperties#VolumeKmsKeyId
   */
  readonly volumeKmsKeyId?: string;

  /**
   * @schema ComprehendDocumentClassificationJobProperties#VpcConfig
   */
  readonly vpcConfig?: ComprehendVpcConfig;

}

/**
 * @schema ComprehendDocumentClassifierProperties
 */
export interface ComprehendDocumentClassifierProperties {
  /**
   * @schema ComprehendDocumentClassifierProperties#DocumentClassifierArn
   */
  readonly documentClassifierArn?: string;

  /**
   * @schema ComprehendDocumentClassifierProperties#LanguageCode
   */
  readonly languageCode?: string;

  /**
   * @schema ComprehendDocumentClassifierProperties#Status
   */
  readonly status?: string;

  /**
   * @schema ComprehendDocumentClassifierProperties#Message
   */
  readonly message?: string;

  /**
   * @schema ComprehendDocumentClassifierProperties#SubmitTime
   */
  readonly submitTime?: string;

  /**
   * @schema ComprehendDocumentClassifierProperties#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema ComprehendDocumentClassifierProperties#TrainingStartTime
   */
  readonly trainingStartTime?: string;

  /**
   * @schema ComprehendDocumentClassifierProperties#TrainingEndTime
   */
  readonly trainingEndTime?: string;

  /**
   * @schema ComprehendDocumentClassifierProperties#InputDataConfig
   */
  readonly inputDataConfig?: ComprehendDocumentClassifierInputDataConfig;

  /**
   * @schema ComprehendDocumentClassifierProperties#OutputDataConfig
   */
  readonly outputDataConfig?: ComprehendDocumentClassifierOutputDataConfig;

  /**
   * @schema ComprehendDocumentClassifierProperties#ClassifierMetadata
   */
  readonly classifierMetadata?: ComprehendClassifierMetadata;

  /**
   * @schema ComprehendDocumentClassifierProperties#DataAccessRoleArn
   */
  readonly dataAccessRoleArn?: string;

  /**
   * @schema ComprehendDocumentClassifierProperties#VolumeKmsKeyId
   */
  readonly volumeKmsKeyId?: string;

  /**
   * @schema ComprehendDocumentClassifierProperties#VpcConfig
   */
  readonly vpcConfig?: ComprehendVpcConfig;

  /**
   * @schema ComprehendDocumentClassifierProperties#Mode
   */
  readonly mode?: string;

}

/**
 * @schema ComprehendDominantLanguageDetectionJobProperties
 */
export interface ComprehendDominantLanguageDetectionJobProperties {
  /**
   * @schema ComprehendDominantLanguageDetectionJobProperties#JobId
   */
  readonly jobId?: string;

  /**
   * @schema ComprehendDominantLanguageDetectionJobProperties#JobName
   */
  readonly jobName?: string;

  /**
   * @schema ComprehendDominantLanguageDetectionJobProperties#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema ComprehendDominantLanguageDetectionJobProperties#Message
   */
  readonly message?: string;

  /**
   * @schema ComprehendDominantLanguageDetectionJobProperties#SubmitTime
   */
  readonly submitTime?: string;

  /**
   * @schema ComprehendDominantLanguageDetectionJobProperties#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema ComprehendDominantLanguageDetectionJobProperties#InputDataConfig
   */
  readonly inputDataConfig?: ComprehendInputDataConfig;

  /**
   * @schema ComprehendDominantLanguageDetectionJobProperties#OutputDataConfig
   */
  readonly outputDataConfig?: ComprehendOutputDataConfig;

  /**
   * @schema ComprehendDominantLanguageDetectionJobProperties#DataAccessRoleArn
   */
  readonly dataAccessRoleArn?: string;

  /**
   * @schema ComprehendDominantLanguageDetectionJobProperties#VolumeKmsKeyId
   */
  readonly volumeKmsKeyId?: string;

  /**
   * @schema ComprehendDominantLanguageDetectionJobProperties#VpcConfig
   */
  readonly vpcConfig?: ComprehendVpcConfig;

}

/**
 * @schema ComprehendEndpointProperties
 */
export interface ComprehendEndpointProperties {
  /**
   * @schema ComprehendEndpointProperties#EndpointArn
   */
  readonly endpointArn?: string;

  /**
   * @schema ComprehendEndpointProperties#Status
   */
  readonly status?: string;

  /**
   * @schema ComprehendEndpointProperties#Message
   */
  readonly message?: string;

  /**
   * @schema ComprehendEndpointProperties#ModelArn
   */
  readonly modelArn?: string;

  /**
   * @schema ComprehendEndpointProperties#DesiredInferenceUnits
   */
  readonly desiredInferenceUnits?: number;

  /**
   * @schema ComprehendEndpointProperties#CurrentInferenceUnits
   */
  readonly currentInferenceUnits?: number;

  /**
   * @schema ComprehendEndpointProperties#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema ComprehendEndpointProperties#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

}

/**
 * @schema ComprehendEntitiesDetectionJobProperties
 */
export interface ComprehendEntitiesDetectionJobProperties {
  /**
   * @schema ComprehendEntitiesDetectionJobProperties#JobId
   */
  readonly jobId?: string;

  /**
   * @schema ComprehendEntitiesDetectionJobProperties#JobName
   */
  readonly jobName?: string;

  /**
   * @schema ComprehendEntitiesDetectionJobProperties#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema ComprehendEntitiesDetectionJobProperties#Message
   */
  readonly message?: string;

  /**
   * @schema ComprehendEntitiesDetectionJobProperties#SubmitTime
   */
  readonly submitTime?: string;

  /**
   * @schema ComprehendEntitiesDetectionJobProperties#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema ComprehendEntitiesDetectionJobProperties#EntityRecognizerArn
   */
  readonly entityRecognizerArn?: string;

  /**
   * @schema ComprehendEntitiesDetectionJobProperties#InputDataConfig
   */
  readonly inputDataConfig?: ComprehendInputDataConfig;

  /**
   * @schema ComprehendEntitiesDetectionJobProperties#OutputDataConfig
   */
  readonly outputDataConfig?: ComprehendOutputDataConfig;

  /**
   * @schema ComprehendEntitiesDetectionJobProperties#LanguageCode
   */
  readonly languageCode?: string;

  /**
   * @schema ComprehendEntitiesDetectionJobProperties#DataAccessRoleArn
   */
  readonly dataAccessRoleArn?: string;

  /**
   * @schema ComprehendEntitiesDetectionJobProperties#VolumeKmsKeyId
   */
  readonly volumeKmsKeyId?: string;

  /**
   * @schema ComprehendEntitiesDetectionJobProperties#VpcConfig
   */
  readonly vpcConfig?: ComprehendVpcConfig;

}

/**
 * @schema ComprehendEntityRecognizerProperties
 */
export interface ComprehendEntityRecognizerProperties {
  /**
   * @schema ComprehendEntityRecognizerProperties#EntityRecognizerArn
   */
  readonly entityRecognizerArn?: string;

  /**
   * @schema ComprehendEntityRecognizerProperties#LanguageCode
   */
  readonly languageCode?: string;

  /**
   * @schema ComprehendEntityRecognizerProperties#Status
   */
  readonly status?: string;

  /**
   * @schema ComprehendEntityRecognizerProperties#Message
   */
  readonly message?: string;

  /**
   * @schema ComprehendEntityRecognizerProperties#SubmitTime
   */
  readonly submitTime?: string;

  /**
   * @schema ComprehendEntityRecognizerProperties#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema ComprehendEntityRecognizerProperties#TrainingStartTime
   */
  readonly trainingStartTime?: string;

  /**
   * @schema ComprehendEntityRecognizerProperties#TrainingEndTime
   */
  readonly trainingEndTime?: string;

  /**
   * @schema ComprehendEntityRecognizerProperties#InputDataConfig
   */
  readonly inputDataConfig?: ComprehendEntityRecognizerInputDataConfig;

  /**
   * @schema ComprehendEntityRecognizerProperties#RecognizerMetadata
   */
  readonly recognizerMetadata?: ComprehendEntityRecognizerMetadata;

  /**
   * @schema ComprehendEntityRecognizerProperties#DataAccessRoleArn
   */
  readonly dataAccessRoleArn?: string;

  /**
   * @schema ComprehendEntityRecognizerProperties#VolumeKmsKeyId
   */
  readonly volumeKmsKeyId?: string;

  /**
   * @schema ComprehendEntityRecognizerProperties#VpcConfig
   */
  readonly vpcConfig?: ComprehendVpcConfig;

}

/**
 * @schema ComprehendEventsDetectionJobProperties
 */
export interface ComprehendEventsDetectionJobProperties {
  /**
   * @schema ComprehendEventsDetectionJobProperties#JobId
   */
  readonly jobId?: string;

  /**
   * @schema ComprehendEventsDetectionJobProperties#JobName
   */
  readonly jobName?: string;

  /**
   * @schema ComprehendEventsDetectionJobProperties#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema ComprehendEventsDetectionJobProperties#Message
   */
  readonly message?: string;

  /**
   * @schema ComprehendEventsDetectionJobProperties#SubmitTime
   */
  readonly submitTime?: string;

  /**
   * @schema ComprehendEventsDetectionJobProperties#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema ComprehendEventsDetectionJobProperties#InputDataConfig
   */
  readonly inputDataConfig?: ComprehendInputDataConfig;

  /**
   * @schema ComprehendEventsDetectionJobProperties#OutputDataConfig
   */
  readonly outputDataConfig?: ComprehendOutputDataConfig;

  /**
   * @schema ComprehendEventsDetectionJobProperties#LanguageCode
   */
  readonly languageCode?: string;

  /**
   * @schema ComprehendEventsDetectionJobProperties#DataAccessRoleArn
   */
  readonly dataAccessRoleArn?: string;

  /**
   * @schema ComprehendEventsDetectionJobProperties#TargetEventTypes
   */
  readonly targetEventTypes?: string[];

}

/**
 * @schema ComprehendKeyPhrasesDetectionJobProperties
 */
export interface ComprehendKeyPhrasesDetectionJobProperties {
  /**
   * @schema ComprehendKeyPhrasesDetectionJobProperties#JobId
   */
  readonly jobId?: string;

  /**
   * @schema ComprehendKeyPhrasesDetectionJobProperties#JobName
   */
  readonly jobName?: string;

  /**
   * @schema ComprehendKeyPhrasesDetectionJobProperties#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema ComprehendKeyPhrasesDetectionJobProperties#Message
   */
  readonly message?: string;

  /**
   * @schema ComprehendKeyPhrasesDetectionJobProperties#SubmitTime
   */
  readonly submitTime?: string;

  /**
   * @schema ComprehendKeyPhrasesDetectionJobProperties#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema ComprehendKeyPhrasesDetectionJobProperties#InputDataConfig
   */
  readonly inputDataConfig?: ComprehendInputDataConfig;

  /**
   * @schema ComprehendKeyPhrasesDetectionJobProperties#OutputDataConfig
   */
  readonly outputDataConfig?: ComprehendOutputDataConfig;

  /**
   * @schema ComprehendKeyPhrasesDetectionJobProperties#LanguageCode
   */
  readonly languageCode?: string;

  /**
   * @schema ComprehendKeyPhrasesDetectionJobProperties#DataAccessRoleArn
   */
  readonly dataAccessRoleArn?: string;

  /**
   * @schema ComprehendKeyPhrasesDetectionJobProperties#VolumeKmsKeyId
   */
  readonly volumeKmsKeyId?: string;

  /**
   * @schema ComprehendKeyPhrasesDetectionJobProperties#VpcConfig
   */
  readonly vpcConfig?: ComprehendVpcConfig;

}

/**
 * @schema ComprehendPiiEntitiesDetectionJobProperties
 */
export interface ComprehendPiiEntitiesDetectionJobProperties {
  /**
   * @schema ComprehendPiiEntitiesDetectionJobProperties#JobId
   */
  readonly jobId?: string;

  /**
   * @schema ComprehendPiiEntitiesDetectionJobProperties#JobName
   */
  readonly jobName?: string;

  /**
   * @schema ComprehendPiiEntitiesDetectionJobProperties#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema ComprehendPiiEntitiesDetectionJobProperties#Message
   */
  readonly message?: string;

  /**
   * @schema ComprehendPiiEntitiesDetectionJobProperties#SubmitTime
   */
  readonly submitTime?: string;

  /**
   * @schema ComprehendPiiEntitiesDetectionJobProperties#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema ComprehendPiiEntitiesDetectionJobProperties#InputDataConfig
   */
  readonly inputDataConfig?: ComprehendInputDataConfig;

  /**
   * @schema ComprehendPiiEntitiesDetectionJobProperties#OutputDataConfig
   */
  readonly outputDataConfig?: ComprehendPiiOutputDataConfig;

  /**
   * @schema ComprehendPiiEntitiesDetectionJobProperties#RedactionConfig
   */
  readonly redactionConfig?: ComprehendRedactionConfig;

  /**
   * @schema ComprehendPiiEntitiesDetectionJobProperties#LanguageCode
   */
  readonly languageCode?: string;

  /**
   * @schema ComprehendPiiEntitiesDetectionJobProperties#DataAccessRoleArn
   */
  readonly dataAccessRoleArn?: string;

  /**
   * @schema ComprehendPiiEntitiesDetectionJobProperties#Mode
   */
  readonly mode?: string;

}

/**
 * @schema ComprehendSentimentDetectionJobProperties
 */
export interface ComprehendSentimentDetectionJobProperties {
  /**
   * @schema ComprehendSentimentDetectionJobProperties#JobId
   */
  readonly jobId?: string;

  /**
   * @schema ComprehendSentimentDetectionJobProperties#JobName
   */
  readonly jobName?: string;

  /**
   * @schema ComprehendSentimentDetectionJobProperties#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema ComprehendSentimentDetectionJobProperties#Message
   */
  readonly message?: string;

  /**
   * @schema ComprehendSentimentDetectionJobProperties#SubmitTime
   */
  readonly submitTime?: string;

  /**
   * @schema ComprehendSentimentDetectionJobProperties#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema ComprehendSentimentDetectionJobProperties#InputDataConfig
   */
  readonly inputDataConfig?: ComprehendInputDataConfig;

  /**
   * @schema ComprehendSentimentDetectionJobProperties#OutputDataConfig
   */
  readonly outputDataConfig?: ComprehendOutputDataConfig;

  /**
   * @schema ComprehendSentimentDetectionJobProperties#LanguageCode
   */
  readonly languageCode?: string;

  /**
   * @schema ComprehendSentimentDetectionJobProperties#DataAccessRoleArn
   */
  readonly dataAccessRoleArn?: string;

  /**
   * @schema ComprehendSentimentDetectionJobProperties#VolumeKmsKeyId
   */
  readonly volumeKmsKeyId?: string;

  /**
   * @schema ComprehendSentimentDetectionJobProperties#VpcConfig
   */
  readonly vpcConfig?: ComprehendVpcConfig;

}

/**
 * @schema ComprehendTopicsDetectionJobProperties
 */
export interface ComprehendTopicsDetectionJobProperties {
  /**
   * @schema ComprehendTopicsDetectionJobProperties#JobId
   */
  readonly jobId?: string;

  /**
   * @schema ComprehendTopicsDetectionJobProperties#JobName
   */
  readonly jobName?: string;

  /**
   * @schema ComprehendTopicsDetectionJobProperties#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema ComprehendTopicsDetectionJobProperties#Message
   */
  readonly message?: string;

  /**
   * @schema ComprehendTopicsDetectionJobProperties#SubmitTime
   */
  readonly submitTime?: string;

  /**
   * @schema ComprehendTopicsDetectionJobProperties#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema ComprehendTopicsDetectionJobProperties#InputDataConfig
   */
  readonly inputDataConfig?: ComprehendInputDataConfig;

  /**
   * @schema ComprehendTopicsDetectionJobProperties#OutputDataConfig
   */
  readonly outputDataConfig?: ComprehendOutputDataConfig;

  /**
   * @schema ComprehendTopicsDetectionJobProperties#NumberOfTopics
   */
  readonly numberOfTopics?: number;

  /**
   * @schema ComprehendTopicsDetectionJobProperties#DataAccessRoleArn
   */
  readonly dataAccessRoleArn?: string;

  /**
   * @schema ComprehendTopicsDetectionJobProperties#VolumeKmsKeyId
   */
  readonly volumeKmsKeyId?: string;

  /**
   * @schema ComprehendTopicsDetectionJobProperties#VpcConfig
   */
  readonly vpcConfig?: ComprehendVpcConfig;

}

/**
 * @schema ComprehendDominantLanguage
 */
export interface ComprehendDominantLanguage {
  /**
   * @schema ComprehendDominantLanguage#LanguageCode
   */
  readonly languageCode?: string;

  /**
   * @schema ComprehendDominantLanguage#Score
   */
  readonly score?: number;

}

/**
 * @schema ComprehendEntity
 */
export interface ComprehendEntity {
  /**
   * @schema ComprehendEntity#Score
   */
  readonly score?: number;

  /**
   * @schema ComprehendEntity#Type
   */
  readonly type?: string;

  /**
   * @schema ComprehendEntity#Text
   */
  readonly text?: string;

  /**
   * @schema ComprehendEntity#BeginOffset
   */
  readonly beginOffset?: number;

  /**
   * @schema ComprehendEntity#EndOffset
   */
  readonly endOffset?: number;

}

/**
 * @schema ComprehendKeyPhrase
 */
export interface ComprehendKeyPhrase {
  /**
   * @schema ComprehendKeyPhrase#Score
   */
  readonly score?: number;

  /**
   * @schema ComprehendKeyPhrase#Text
   */
  readonly text?: string;

  /**
   * @schema ComprehendKeyPhrase#BeginOffset
   */
  readonly beginOffset?: number;

  /**
   * @schema ComprehendKeyPhrase#EndOffset
   */
  readonly endOffset?: number;

}

/**
 * @schema ComprehendPiiEntity
 */
export interface ComprehendPiiEntity {
  /**
   * @schema ComprehendPiiEntity#Score
   */
  readonly score?: number;

  /**
   * @schema ComprehendPiiEntity#Type
   */
  readonly type?: string;

  /**
   * @schema ComprehendPiiEntity#BeginOffset
   */
  readonly beginOffset?: number;

  /**
   * @schema ComprehendPiiEntity#EndOffset
   */
  readonly endOffset?: number;

}

/**
 * @schema ComprehendSentimentScore
 */
export interface ComprehendSentimentScore {
  /**
   * @schema ComprehendSentimentScore#Positive
   */
  readonly positive?: number;

  /**
   * @schema ComprehendSentimentScore#Negative
   */
  readonly negative?: number;

  /**
   * @schema ComprehendSentimentScore#Neutral
   */
  readonly neutral?: number;

  /**
   * @schema ComprehendSentimentScore#Mixed
   */
  readonly mixed?: number;

}

/**
 * @schema ComprehendSyntaxToken
 */
export interface ComprehendSyntaxToken {
  /**
   * @schema ComprehendSyntaxToken#TokenId
   */
  readonly tokenId?: number;

  /**
   * @schema ComprehendSyntaxToken#Text
   */
  readonly text?: string;

  /**
   * @schema ComprehendSyntaxToken#BeginOffset
   */
  readonly beginOffset?: number;

  /**
   * @schema ComprehendSyntaxToken#EndOffset
   */
  readonly endOffset?: number;

  /**
   * @schema ComprehendSyntaxToken#PartOfSpeech
   */
  readonly partOfSpeech?: ComprehendPartOfSpeechTag;

}

/**
 * @schema ComprehendDocumentClassificationJobFilter
 */
export interface ComprehendDocumentClassificationJobFilter {
  /**
   * @schema ComprehendDocumentClassificationJobFilter#JobName
   */
  readonly jobName?: string;

  /**
   * @schema ComprehendDocumentClassificationJobFilter#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema ComprehendDocumentClassificationJobFilter#SubmitTimeBefore
   */
  readonly submitTimeBefore?: string;

  /**
   * @schema ComprehendDocumentClassificationJobFilter#SubmitTimeAfter
   */
  readonly submitTimeAfter?: string;

}

/**
 * @schema ComprehendDocumentClassifierFilter
 */
export interface ComprehendDocumentClassifierFilter {
  /**
   * @schema ComprehendDocumentClassifierFilter#Status
   */
  readonly status?: string;

  /**
   * @schema ComprehendDocumentClassifierFilter#SubmitTimeBefore
   */
  readonly submitTimeBefore?: string;

  /**
   * @schema ComprehendDocumentClassifierFilter#SubmitTimeAfter
   */
  readonly submitTimeAfter?: string;

}

/**
 * @schema ComprehendDominantLanguageDetectionJobFilter
 */
export interface ComprehendDominantLanguageDetectionJobFilter {
  /**
   * @schema ComprehendDominantLanguageDetectionJobFilter#JobName
   */
  readonly jobName?: string;

  /**
   * @schema ComprehendDominantLanguageDetectionJobFilter#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema ComprehendDominantLanguageDetectionJobFilter#SubmitTimeBefore
   */
  readonly submitTimeBefore?: string;

  /**
   * @schema ComprehendDominantLanguageDetectionJobFilter#SubmitTimeAfter
   */
  readonly submitTimeAfter?: string;

}

/**
 * @schema ComprehendEndpointFilter
 */
export interface ComprehendEndpointFilter {
  /**
   * @schema ComprehendEndpointFilter#ModelArn
   */
  readonly modelArn?: string;

  /**
   * @schema ComprehendEndpointFilter#Status
   */
  readonly status?: string;

  /**
   * @schema ComprehendEndpointFilter#CreationTimeBefore
   */
  readonly creationTimeBefore?: string;

  /**
   * @schema ComprehendEndpointFilter#CreationTimeAfter
   */
  readonly creationTimeAfter?: string;

}

/**
 * @schema ComprehendEntitiesDetectionJobFilter
 */
export interface ComprehendEntitiesDetectionJobFilter {
  /**
   * @schema ComprehendEntitiesDetectionJobFilter#JobName
   */
  readonly jobName?: string;

  /**
   * @schema ComprehendEntitiesDetectionJobFilter#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema ComprehendEntitiesDetectionJobFilter#SubmitTimeBefore
   */
  readonly submitTimeBefore?: string;

  /**
   * @schema ComprehendEntitiesDetectionJobFilter#SubmitTimeAfter
   */
  readonly submitTimeAfter?: string;

}

/**
 * @schema ComprehendEntityRecognizerFilter
 */
export interface ComprehendEntityRecognizerFilter {
  /**
   * @schema ComprehendEntityRecognizerFilter#Status
   */
  readonly status?: string;

  /**
   * @schema ComprehendEntityRecognizerFilter#SubmitTimeBefore
   */
  readonly submitTimeBefore?: string;

  /**
   * @schema ComprehendEntityRecognizerFilter#SubmitTimeAfter
   */
  readonly submitTimeAfter?: string;

}

/**
 * @schema ComprehendEventsDetectionJobFilter
 */
export interface ComprehendEventsDetectionJobFilter {
  /**
   * @schema ComprehendEventsDetectionJobFilter#JobName
   */
  readonly jobName?: string;

  /**
   * @schema ComprehendEventsDetectionJobFilter#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema ComprehendEventsDetectionJobFilter#SubmitTimeBefore
   */
  readonly submitTimeBefore?: string;

  /**
   * @schema ComprehendEventsDetectionJobFilter#SubmitTimeAfter
   */
  readonly submitTimeAfter?: string;

}

/**
 * @schema ComprehendKeyPhrasesDetectionJobFilter
 */
export interface ComprehendKeyPhrasesDetectionJobFilter {
  /**
   * @schema ComprehendKeyPhrasesDetectionJobFilter#JobName
   */
  readonly jobName?: string;

  /**
   * @schema ComprehendKeyPhrasesDetectionJobFilter#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema ComprehendKeyPhrasesDetectionJobFilter#SubmitTimeBefore
   */
  readonly submitTimeBefore?: string;

  /**
   * @schema ComprehendKeyPhrasesDetectionJobFilter#SubmitTimeAfter
   */
  readonly submitTimeAfter?: string;

}

/**
 * @schema ComprehendPiiEntitiesDetectionJobFilter
 */
export interface ComprehendPiiEntitiesDetectionJobFilter {
  /**
   * @schema ComprehendPiiEntitiesDetectionJobFilter#JobName
   */
  readonly jobName?: string;

  /**
   * @schema ComprehendPiiEntitiesDetectionJobFilter#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema ComprehendPiiEntitiesDetectionJobFilter#SubmitTimeBefore
   */
  readonly submitTimeBefore?: string;

  /**
   * @schema ComprehendPiiEntitiesDetectionJobFilter#SubmitTimeAfter
   */
  readonly submitTimeAfter?: string;

}

/**
 * @schema ComprehendSentimentDetectionJobFilter
 */
export interface ComprehendSentimentDetectionJobFilter {
  /**
   * @schema ComprehendSentimentDetectionJobFilter#JobName
   */
  readonly jobName?: string;

  /**
   * @schema ComprehendSentimentDetectionJobFilter#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema ComprehendSentimentDetectionJobFilter#SubmitTimeBefore
   */
  readonly submitTimeBefore?: string;

  /**
   * @schema ComprehendSentimentDetectionJobFilter#SubmitTimeAfter
   */
  readonly submitTimeAfter?: string;

}

/**
 * @schema ComprehendTopicsDetectionJobFilter
 */
export interface ComprehendTopicsDetectionJobFilter {
  /**
   * @schema ComprehendTopicsDetectionJobFilter#JobName
   */
  readonly jobName?: string;

  /**
   * @schema ComprehendTopicsDetectionJobFilter#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema ComprehendTopicsDetectionJobFilter#SubmitTimeBefore
   */
  readonly submitTimeBefore?: string;

  /**
   * @schema ComprehendTopicsDetectionJobFilter#SubmitTimeAfter
   */
  readonly submitTimeAfter?: string;

}

/**
 * @schema ComprehendInputDataConfig
 */
export interface ComprehendInputDataConfig {
  /**
   * @schema ComprehendInputDataConfig#S3Uri
   */
  readonly s3Uri: string;

  /**
   * @schema ComprehendInputDataConfig#InputFormat
   */
  readonly inputFormat?: string;

}

/**
 * @schema ComprehendOutputDataConfig
 */
export interface ComprehendOutputDataConfig {
  /**
   * @schema ComprehendOutputDataConfig#S3Uri
   */
  readonly s3Uri: string;

  /**
   * @schema ComprehendOutputDataConfig#KmsKeyId
   */
  readonly kmsKeyId?: string;

}

/**
 * @schema ComprehendRedactionConfig
 */
export interface ComprehendRedactionConfig {
  /**
   * @schema ComprehendRedactionConfig#PiiEntityTypes
   */
  readonly piiEntityTypes?: string[];

  /**
   * @schema ComprehendRedactionConfig#MaskMode
   */
  readonly maskMode?: string;

  /**
   * @schema ComprehendRedactionConfig#MaskCharacter
   */
  readonly maskCharacter?: string;

}

/**
 * @schema ComprehendAugmentedManifestsListItem
 */
export interface ComprehendAugmentedManifestsListItem {
  /**
   * @schema ComprehendAugmentedManifestsListItem#S3Uri
   */
  readonly s3Uri: string;

  /**
   * @schema ComprehendAugmentedManifestsListItem#AttributeNames
   */
  readonly attributeNames: string[];

}

/**
 * @schema ComprehendEntityTypesListItem
 */
export interface ComprehendEntityTypesListItem {
  /**
   * @schema ComprehendEntityTypesListItem#Type
   */
  readonly type: string;

}

/**
 * @schema ComprehendEntityRecognizerDocuments
 */
export interface ComprehendEntityRecognizerDocuments {
  /**
   * @schema ComprehendEntityRecognizerDocuments#S3Uri
   */
  readonly s3Uri: string;

}

/**
 * @schema ComprehendEntityRecognizerAnnotations
 */
export interface ComprehendEntityRecognizerAnnotations {
  /**
   * @schema ComprehendEntityRecognizerAnnotations#S3Uri
   */
  readonly s3Uri: string;

}

/**
 * @schema ComprehendEntityRecognizerEntityList
 */
export interface ComprehendEntityRecognizerEntityList {
  /**
   * @schema ComprehendEntityRecognizerEntityList#S3Uri
   */
  readonly s3Uri: string;

}

/**
 * @schema ComprehendClassifierMetadata
 */
export interface ComprehendClassifierMetadata {
  /**
   * @schema ComprehendClassifierMetadata#NumberOfLabels
   */
  readonly numberOfLabels?: number;

  /**
   * @schema ComprehendClassifierMetadata#NumberOfTrainedDocuments
   */
  readonly numberOfTrainedDocuments?: number;

  /**
   * @schema ComprehendClassifierMetadata#NumberOfTestDocuments
   */
  readonly numberOfTestDocuments?: number;

  /**
   * @schema ComprehendClassifierMetadata#EvaluationMetrics
   */
  readonly evaluationMetrics?: ComprehendClassifierEvaluationMetrics;

}

/**
 * @schema ComprehendEntityRecognizerMetadata
 */
export interface ComprehendEntityRecognizerMetadata {
  /**
   * @schema ComprehendEntityRecognizerMetadata#NumberOfTrainedDocuments
   */
  readonly numberOfTrainedDocuments?: number;

  /**
   * @schema ComprehendEntityRecognizerMetadata#NumberOfTestDocuments
   */
  readonly numberOfTestDocuments?: number;

  /**
   * @schema ComprehendEntityRecognizerMetadata#EvaluationMetrics
   */
  readonly evaluationMetrics?: ComprehendEntityRecognizerEvaluationMetrics;

  /**
   * @schema ComprehendEntityRecognizerMetadata#EntityTypes
   */
  readonly entityTypes?: ComprehendEntityRecognizerMetadataEntityTypesListItem[];

}

/**
 * @schema ComprehendPiiOutputDataConfig
 */
export interface ComprehendPiiOutputDataConfig {
  /**
   * @schema ComprehendPiiOutputDataConfig#S3Uri
   */
  readonly s3Uri: string;

  /**
   * @schema ComprehendPiiOutputDataConfig#KmsKeyId
   */
  readonly kmsKeyId?: string;

}

/**
 * @schema ComprehendPartOfSpeechTag
 */
export interface ComprehendPartOfSpeechTag {
  /**
   * @schema ComprehendPartOfSpeechTag#Tag
   */
  readonly tag?: string;

  /**
   * @schema ComprehendPartOfSpeechTag#Score
   */
  readonly score?: number;

}

/**
 * @schema ComprehendClassifierEvaluationMetrics
 */
export interface ComprehendClassifierEvaluationMetrics {
  /**
   * @schema ComprehendClassifierEvaluationMetrics#Accuracy
   */
  readonly accuracy?: number;

  /**
   * @schema ComprehendClassifierEvaluationMetrics#Precision
   */
  readonly precision?: number;

  /**
   * @schema ComprehendClassifierEvaluationMetrics#Recall
   */
  readonly recall?: number;

  /**
   * @schema ComprehendClassifierEvaluationMetrics#F1Score
   */
  readonly f1Score?: number;

  /**
   * @schema ComprehendClassifierEvaluationMetrics#MicroPrecision
   */
  readonly microPrecision?: number;

  /**
   * @schema ComprehendClassifierEvaluationMetrics#MicroRecall
   */
  readonly microRecall?: number;

  /**
   * @schema ComprehendClassifierEvaluationMetrics#MicroF1Score
   */
  readonly microF1Score?: number;

  /**
   * @schema ComprehendClassifierEvaluationMetrics#HammingLoss
   */
  readonly hammingLoss?: number;

}

/**
 * @schema ComprehendEntityRecognizerEvaluationMetrics
 */
export interface ComprehendEntityRecognizerEvaluationMetrics {
  /**
   * @schema ComprehendEntityRecognizerEvaluationMetrics#Precision
   */
  readonly precision?: number;

  /**
   * @schema ComprehendEntityRecognizerEvaluationMetrics#Recall
   */
  readonly recall?: number;

  /**
   * @schema ComprehendEntityRecognizerEvaluationMetrics#F1Score
   */
  readonly f1Score?: number;

}

/**
 * @schema ComprehendEntityRecognizerMetadataEntityTypesListItem
 */
export interface ComprehendEntityRecognizerMetadataEntityTypesListItem {
  /**
   * @schema ComprehendEntityRecognizerMetadataEntityTypesListItem#Type
   */
  readonly type?: string;

  /**
   * @schema ComprehendEntityRecognizerMetadataEntityTypesListItem#EvaluationMetrics
   */
  readonly evaluationMetrics?: ComprehendEntityTypesEvaluationMetrics;

  /**
   * @schema ComprehendEntityRecognizerMetadataEntityTypesListItem#NumberOfTrainMentions
   */
  readonly numberOfTrainMentions?: number;

}

/**
 * @schema ComprehendEntityTypesEvaluationMetrics
 */
export interface ComprehendEntityTypesEvaluationMetrics {
  /**
   * @schema ComprehendEntityTypesEvaluationMetrics#Precision
   */
  readonly precision?: number;

  /**
   * @schema ComprehendEntityTypesEvaluationMetrics#Recall
   */
  readonly recall?: number;

  /**
   * @schema ComprehendEntityTypesEvaluationMetrics#F1Score
   */
  readonly f1Score?: number;

}
