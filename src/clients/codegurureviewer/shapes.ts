/**
 * @schema CodeGuruReviewerAssociateRepositoryRequest
 */
export interface CodeGuruReviewerAssociateRepositoryRequest {
  /**
   * @schema CodeGuruReviewerAssociateRepositoryRequest#Repository
   */
  readonly repository: CodeGuruReviewerRepository;

  /**
   * @schema CodeGuruReviewerAssociateRepositoryRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema CodeGuruReviewerAssociateRepositoryRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CodeGuruReviewerAssociateRepositoryResponse
 */
export interface CodeGuruReviewerAssociateRepositoryResponse {
  /**
   * @schema CodeGuruReviewerAssociateRepositoryResponse#RepositoryAssociation
   */
  readonly repositoryAssociation?: CodeGuruReviewerRepositoryAssociation;

  /**
   * @schema CodeGuruReviewerAssociateRepositoryResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CodeGuruReviewerCreateCodeReviewRequest
 */
export interface CodeGuruReviewerCreateCodeReviewRequest {
  /**
   * @schema CodeGuruReviewerCreateCodeReviewRequest#Name
   */
  readonly name: string;

  /**
   * @schema CodeGuruReviewerCreateCodeReviewRequest#RepositoryAssociationArn
   */
  readonly repositoryAssociationArn: string;

  /**
   * @schema CodeGuruReviewerCreateCodeReviewRequest#Type
   */
  readonly type: CodeGuruReviewerCodeReviewType;

  /**
   * @schema CodeGuruReviewerCreateCodeReviewRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * @schema CodeGuruReviewerCreateCodeReviewResponse
 */
export interface CodeGuruReviewerCreateCodeReviewResponse {
  /**
   * @schema CodeGuruReviewerCreateCodeReviewResponse#CodeReview
   */
  readonly codeReview?: CodeGuruReviewerCodeReview;

}

/**
 * @schema CodeGuruReviewerDescribeCodeReviewRequest
 */
export interface CodeGuruReviewerDescribeCodeReviewRequest {
  /**
   * @schema CodeGuruReviewerDescribeCodeReviewRequest#CodeReviewArn
   */
  readonly codeReviewArn: string;

}

/**
 * @schema CodeGuruReviewerDescribeCodeReviewResponse
 */
export interface CodeGuruReviewerDescribeCodeReviewResponse {
  /**
   * @schema CodeGuruReviewerDescribeCodeReviewResponse#CodeReview
   */
  readonly codeReview?: CodeGuruReviewerCodeReview;

}

/**
 * @schema CodeGuruReviewerDescribeRecommendationFeedbackRequest
 */
export interface CodeGuruReviewerDescribeRecommendationFeedbackRequest {
  /**
   * @schema CodeGuruReviewerDescribeRecommendationFeedbackRequest#CodeReviewArn
   */
  readonly codeReviewArn: string;

  /**
   * @schema CodeGuruReviewerDescribeRecommendationFeedbackRequest#RecommendationId
   */
  readonly recommendationId: string;

  /**
   * @schema CodeGuruReviewerDescribeRecommendationFeedbackRequest#UserId
   */
  readonly userId?: string;

}

/**
 * @schema CodeGuruReviewerDescribeRecommendationFeedbackResponse
 */
export interface CodeGuruReviewerDescribeRecommendationFeedbackResponse {
  /**
   * @schema CodeGuruReviewerDescribeRecommendationFeedbackResponse#RecommendationFeedback
   */
  readonly recommendationFeedback?: CodeGuruReviewerRecommendationFeedback;

}

/**
 * @schema CodeGuruReviewerDescribeRepositoryAssociationRequest
 */
export interface CodeGuruReviewerDescribeRepositoryAssociationRequest {
  /**
   * @schema CodeGuruReviewerDescribeRepositoryAssociationRequest#AssociationArn
   */
  readonly associationArn: string;

}

/**
 * @schema CodeGuruReviewerDescribeRepositoryAssociationResponse
 */
export interface CodeGuruReviewerDescribeRepositoryAssociationResponse {
  /**
   * @schema CodeGuruReviewerDescribeRepositoryAssociationResponse#RepositoryAssociation
   */
  readonly repositoryAssociation?: CodeGuruReviewerRepositoryAssociation;

  /**
   * @schema CodeGuruReviewerDescribeRepositoryAssociationResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CodeGuruReviewerDisassociateRepositoryRequest
 */
export interface CodeGuruReviewerDisassociateRepositoryRequest {
  /**
   * @schema CodeGuruReviewerDisassociateRepositoryRequest#AssociationArn
   */
  readonly associationArn: string;

}

/**
 * @schema CodeGuruReviewerDisassociateRepositoryResponse
 */
export interface CodeGuruReviewerDisassociateRepositoryResponse {
  /**
   * @schema CodeGuruReviewerDisassociateRepositoryResponse#RepositoryAssociation
   */
  readonly repositoryAssociation?: CodeGuruReviewerRepositoryAssociation;

  /**
   * @schema CodeGuruReviewerDisassociateRepositoryResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CodeGuruReviewerListCodeReviewsRequest
 */
export interface CodeGuruReviewerListCodeReviewsRequest {
  /**
   * @schema CodeGuruReviewerListCodeReviewsRequest#ProviderTypes
   */
  readonly providerTypes?: string[];

  /**
   * @schema CodeGuruReviewerListCodeReviewsRequest#States
   */
  readonly states?: string[];

  /**
   * @schema CodeGuruReviewerListCodeReviewsRequest#RepositoryNames
   */
  readonly repositoryNames?: string[];

  /**
   * @schema CodeGuruReviewerListCodeReviewsRequest#Type
   */
  readonly type: string;

  /**
   * @schema CodeGuruReviewerListCodeReviewsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema CodeGuruReviewerListCodeReviewsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CodeGuruReviewerListCodeReviewsResponse
 */
export interface CodeGuruReviewerListCodeReviewsResponse {
  /**
   * @schema CodeGuruReviewerListCodeReviewsResponse#CodeReviewSummaries
   */
  readonly codeReviewSummaries?: CodeGuruReviewerCodeReviewSummary[];

  /**
   * @schema CodeGuruReviewerListCodeReviewsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CodeGuruReviewerListRecommendationFeedbackRequest
 */
export interface CodeGuruReviewerListRecommendationFeedbackRequest {
  /**
   * @schema CodeGuruReviewerListRecommendationFeedbackRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CodeGuruReviewerListRecommendationFeedbackRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema CodeGuruReviewerListRecommendationFeedbackRequest#CodeReviewArn
   */
  readonly codeReviewArn: string;

  /**
   * @schema CodeGuruReviewerListRecommendationFeedbackRequest#UserIds
   */
  readonly userIds?: string[];

  /**
   * @schema CodeGuruReviewerListRecommendationFeedbackRequest#RecommendationIds
   */
  readonly recommendationIds?: string[];

}

/**
 * @schema CodeGuruReviewerListRecommendationFeedbackResponse
 */
export interface CodeGuruReviewerListRecommendationFeedbackResponse {
  /**
   * @schema CodeGuruReviewerListRecommendationFeedbackResponse#RecommendationFeedbackSummaries
   */
  readonly recommendationFeedbackSummaries?: CodeGuruReviewerRecommendationFeedbackSummary[];

  /**
   * @schema CodeGuruReviewerListRecommendationFeedbackResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CodeGuruReviewerListRecommendationsRequest
 */
export interface CodeGuruReviewerListRecommendationsRequest {
  /**
   * @schema CodeGuruReviewerListRecommendationsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CodeGuruReviewerListRecommendationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema CodeGuruReviewerListRecommendationsRequest#CodeReviewArn
   */
  readonly codeReviewArn: string;

}

/**
 * @schema CodeGuruReviewerListRecommendationsResponse
 */
export interface CodeGuruReviewerListRecommendationsResponse {
  /**
   * @schema CodeGuruReviewerListRecommendationsResponse#RecommendationSummaries
   */
  readonly recommendationSummaries?: CodeGuruReviewerRecommendationSummary[];

  /**
   * @schema CodeGuruReviewerListRecommendationsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CodeGuruReviewerListRepositoryAssociationsRequest
 */
export interface CodeGuruReviewerListRepositoryAssociationsRequest {
  /**
   * @schema CodeGuruReviewerListRepositoryAssociationsRequest#ProviderTypes
   */
  readonly providerTypes?: string[];

  /**
   * @schema CodeGuruReviewerListRepositoryAssociationsRequest#States
   */
  readonly states?: string[];

  /**
   * @schema CodeGuruReviewerListRepositoryAssociationsRequest#Names
   */
  readonly names?: string[];

  /**
   * @schema CodeGuruReviewerListRepositoryAssociationsRequest#Owners
   */
  readonly owners?: string[];

  /**
   * @schema CodeGuruReviewerListRepositoryAssociationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema CodeGuruReviewerListRepositoryAssociationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CodeGuruReviewerListRepositoryAssociationsResponse
 */
export interface CodeGuruReviewerListRepositoryAssociationsResponse {
  /**
   * @schema CodeGuruReviewerListRepositoryAssociationsResponse#RepositoryAssociationSummaries
   */
  readonly repositoryAssociationSummaries?: CodeGuruReviewerRepositoryAssociationSummary[];

  /**
   * @schema CodeGuruReviewerListRepositoryAssociationsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CodeGuruReviewerListTagsForResourceRequest
 */
export interface CodeGuruReviewerListTagsForResourceRequest {
  /**
   * @schema CodeGuruReviewerListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema CodeGuruReviewerListTagsForResourceResponse
 */
export interface CodeGuruReviewerListTagsForResourceResponse {
  /**
   * @schema CodeGuruReviewerListTagsForResourceResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CodeGuruReviewerPutRecommendationFeedbackRequest
 */
export interface CodeGuruReviewerPutRecommendationFeedbackRequest {
  /**
   * @schema CodeGuruReviewerPutRecommendationFeedbackRequest#CodeReviewArn
   */
  readonly codeReviewArn: string;

  /**
   * @schema CodeGuruReviewerPutRecommendationFeedbackRequest#RecommendationId
   */
  readonly recommendationId: string;

  /**
   * @schema CodeGuruReviewerPutRecommendationFeedbackRequest#Reactions
   */
  readonly reactions: string[];

}

/**
 * @schema CodeGuruReviewerPutRecommendationFeedbackResponse
 */
export interface CodeGuruReviewerPutRecommendationFeedbackResponse {
}

/**
 * @schema CodeGuruReviewerTagResourceRequest
 */
export interface CodeGuruReviewerTagResourceRequest {
  /**
   * @schema CodeGuruReviewerTagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema CodeGuruReviewerTagResourceRequest#Tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * @schema CodeGuruReviewerTagResourceResponse
 */
export interface CodeGuruReviewerTagResourceResponse {
}

/**
 * @schema CodeGuruReviewerUntagResourceRequest
 */
export interface CodeGuruReviewerUntagResourceRequest {
  /**
   * @schema CodeGuruReviewerUntagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema CodeGuruReviewerUntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema CodeGuruReviewerUntagResourceResponse
 */
export interface CodeGuruReviewerUntagResourceResponse {
}

/**
 * @schema CodeGuruReviewerRepository
 */
export interface CodeGuruReviewerRepository {
  /**
   * @schema CodeGuruReviewerRepository#CodeCommit
   */
  readonly codeCommit?: CodeGuruReviewerCodeCommitRepository;

  /**
   * @schema CodeGuruReviewerRepository#Bitbucket
   */
  readonly bitbucket?: CodeGuruReviewerThirdPartySourceRepository;

  /**
   * @schema CodeGuruReviewerRepository#GitHubEnterpriseServer
   */
  readonly gitHubEnterpriseServer?: CodeGuruReviewerThirdPartySourceRepository;

}

/**
 * @schema CodeGuruReviewerRepositoryAssociation
 */
export interface CodeGuruReviewerRepositoryAssociation {
  /**
   * @schema CodeGuruReviewerRepositoryAssociation#AssociationId
   */
  readonly associationId?: string;

  /**
   * @schema CodeGuruReviewerRepositoryAssociation#AssociationArn
   */
  readonly associationArn?: string;

  /**
   * @schema CodeGuruReviewerRepositoryAssociation#ConnectionArn
   */
  readonly connectionArn?: string;

  /**
   * @schema CodeGuruReviewerRepositoryAssociation#Name
   */
  readonly name?: string;

  /**
   * @schema CodeGuruReviewerRepositoryAssociation#Owner
   */
  readonly owner?: string;

  /**
   * @schema CodeGuruReviewerRepositoryAssociation#ProviderType
   */
  readonly providerType?: string;

  /**
   * @schema CodeGuruReviewerRepositoryAssociation#State
   */
  readonly state?: string;

  /**
   * @schema CodeGuruReviewerRepositoryAssociation#StateReason
   */
  readonly stateReason?: string;

  /**
   * @schema CodeGuruReviewerRepositoryAssociation#LastUpdatedTimeStamp
   */
  readonly lastUpdatedTimeStamp?: string;

  /**
   * @schema CodeGuruReviewerRepositoryAssociation#CreatedTimeStamp
   */
  readonly createdTimeStamp?: string;

}

/**
 * @schema CodeGuruReviewerCodeReviewType
 */
export interface CodeGuruReviewerCodeReviewType {
  /**
   * @schema CodeGuruReviewerCodeReviewType#RepositoryAnalysis
   */
  readonly repositoryAnalysis: CodeGuruReviewerRepositoryAnalysis;

}

/**
 * @schema CodeGuruReviewerCodeReview
 */
export interface CodeGuruReviewerCodeReview {
  /**
   * @schema CodeGuruReviewerCodeReview#Name
   */
  readonly name?: string;

  /**
   * @schema CodeGuruReviewerCodeReview#CodeReviewArn
   */
  readonly codeReviewArn?: string;

  /**
   * @schema CodeGuruReviewerCodeReview#RepositoryName
   */
  readonly repositoryName?: string;

  /**
   * @schema CodeGuruReviewerCodeReview#Owner
   */
  readonly owner?: string;

  /**
   * @schema CodeGuruReviewerCodeReview#ProviderType
   */
  readonly providerType?: string;

  /**
   * @schema CodeGuruReviewerCodeReview#State
   */
  readonly state?: string;

  /**
   * @schema CodeGuruReviewerCodeReview#StateReason
   */
  readonly stateReason?: string;

  /**
   * @schema CodeGuruReviewerCodeReview#CreatedTimeStamp
   */
  readonly createdTimeStamp?: string;

  /**
   * @schema CodeGuruReviewerCodeReview#LastUpdatedTimeStamp
   */
  readonly lastUpdatedTimeStamp?: string;

  /**
   * @schema CodeGuruReviewerCodeReview#Type
   */
  readonly type?: string;

  /**
   * @schema CodeGuruReviewerCodeReview#PullRequestId
   */
  readonly pullRequestId?: string;

  /**
   * @schema CodeGuruReviewerCodeReview#SourceCodeType
   */
  readonly sourceCodeType?: CodeGuruReviewerSourceCodeType;

  /**
   * @schema CodeGuruReviewerCodeReview#AssociationArn
   */
  readonly associationArn?: string;

  /**
   * @schema CodeGuruReviewerCodeReview#Metrics
   */
  readonly metrics?: CodeGuruReviewerMetrics;

}

/**
 * @schema CodeGuruReviewerRecommendationFeedback
 */
export interface CodeGuruReviewerRecommendationFeedback {
  /**
   * @schema CodeGuruReviewerRecommendationFeedback#CodeReviewArn
   */
  readonly codeReviewArn?: string;

  /**
   * @schema CodeGuruReviewerRecommendationFeedback#RecommendationId
   */
  readonly recommendationId?: string;

  /**
   * @schema CodeGuruReviewerRecommendationFeedback#Reactions
   */
  readonly reactions?: string[];

  /**
   * @schema CodeGuruReviewerRecommendationFeedback#UserId
   */
  readonly userId?: string;

  /**
   * @schema CodeGuruReviewerRecommendationFeedback#CreatedTimeStamp
   */
  readonly createdTimeStamp?: string;

  /**
   * @schema CodeGuruReviewerRecommendationFeedback#LastUpdatedTimeStamp
   */
  readonly lastUpdatedTimeStamp?: string;

}

/**
 * @schema CodeGuruReviewerCodeReviewSummary
 */
export interface CodeGuruReviewerCodeReviewSummary {
  /**
   * @schema CodeGuruReviewerCodeReviewSummary#Name
   */
  readonly name?: string;

  /**
   * @schema CodeGuruReviewerCodeReviewSummary#CodeReviewArn
   */
  readonly codeReviewArn?: string;

  /**
   * @schema CodeGuruReviewerCodeReviewSummary#RepositoryName
   */
  readonly repositoryName?: string;

  /**
   * @schema CodeGuruReviewerCodeReviewSummary#Owner
   */
  readonly owner?: string;

  /**
   * @schema CodeGuruReviewerCodeReviewSummary#ProviderType
   */
  readonly providerType?: string;

  /**
   * @schema CodeGuruReviewerCodeReviewSummary#State
   */
  readonly state?: string;

  /**
   * @schema CodeGuruReviewerCodeReviewSummary#CreatedTimeStamp
   */
  readonly createdTimeStamp?: string;

  /**
   * @schema CodeGuruReviewerCodeReviewSummary#LastUpdatedTimeStamp
   */
  readonly lastUpdatedTimeStamp?: string;

  /**
   * @schema CodeGuruReviewerCodeReviewSummary#Type
   */
  readonly type?: string;

  /**
   * @schema CodeGuruReviewerCodeReviewSummary#PullRequestId
   */
  readonly pullRequestId?: string;

  /**
   * @schema CodeGuruReviewerCodeReviewSummary#MetricsSummary
   */
  readonly metricsSummary?: CodeGuruReviewerMetricsSummary;

}

/**
 * @schema CodeGuruReviewerRecommendationFeedbackSummary
 */
export interface CodeGuruReviewerRecommendationFeedbackSummary {
  /**
   * @schema CodeGuruReviewerRecommendationFeedbackSummary#RecommendationId
   */
  readonly recommendationId?: string;

  /**
   * @schema CodeGuruReviewerRecommendationFeedbackSummary#Reactions
   */
  readonly reactions?: string[];

  /**
   * @schema CodeGuruReviewerRecommendationFeedbackSummary#UserId
   */
  readonly userId?: string;

}

/**
 * @schema CodeGuruReviewerRecommendationSummary
 */
export interface CodeGuruReviewerRecommendationSummary {
  /**
   * @schema CodeGuruReviewerRecommendationSummary#FilePath
   */
  readonly filePath?: string;

  /**
   * @schema CodeGuruReviewerRecommendationSummary#RecommendationId
   */
  readonly recommendationId?: string;

  /**
   * @schema CodeGuruReviewerRecommendationSummary#StartLine
   */
  readonly startLine?: number;

  /**
   * @schema CodeGuruReviewerRecommendationSummary#EndLine
   */
  readonly endLine?: number;

  /**
   * @schema CodeGuruReviewerRecommendationSummary#Description
   */
  readonly description?: string;

}

/**
 * @schema CodeGuruReviewerRepositoryAssociationSummary
 */
export interface CodeGuruReviewerRepositoryAssociationSummary {
  /**
   * @schema CodeGuruReviewerRepositoryAssociationSummary#AssociationArn
   */
  readonly associationArn?: string;

  /**
   * @schema CodeGuruReviewerRepositoryAssociationSummary#ConnectionArn
   */
  readonly connectionArn?: string;

  /**
   * @schema CodeGuruReviewerRepositoryAssociationSummary#LastUpdatedTimeStamp
   */
  readonly lastUpdatedTimeStamp?: string;

  /**
   * @schema CodeGuruReviewerRepositoryAssociationSummary#AssociationId
   */
  readonly associationId?: string;

  /**
   * @schema CodeGuruReviewerRepositoryAssociationSummary#Name
   */
  readonly name?: string;

  /**
   * @schema CodeGuruReviewerRepositoryAssociationSummary#Owner
   */
  readonly owner?: string;

  /**
   * @schema CodeGuruReviewerRepositoryAssociationSummary#ProviderType
   */
  readonly providerType?: string;

  /**
   * @schema CodeGuruReviewerRepositoryAssociationSummary#State
   */
  readonly state?: string;

}

/**
 * @schema CodeGuruReviewerCodeCommitRepository
 */
export interface CodeGuruReviewerCodeCommitRepository {
  /**
   * @schema CodeGuruReviewerCodeCommitRepository#Name
   */
  readonly name: string;

}

/**
 * @schema CodeGuruReviewerThirdPartySourceRepository
 */
export interface CodeGuruReviewerThirdPartySourceRepository {
  /**
   * @schema CodeGuruReviewerThirdPartySourceRepository#Name
   */
  readonly name: string;

  /**
   * @schema CodeGuruReviewerThirdPartySourceRepository#ConnectionArn
   */
  readonly connectionArn: string;

  /**
   * @schema CodeGuruReviewerThirdPartySourceRepository#Owner
   */
  readonly owner: string;

}

/**
 * @schema CodeGuruReviewerRepositoryAnalysis
 */
export interface CodeGuruReviewerRepositoryAnalysis {
  /**
   * @schema CodeGuruReviewerRepositoryAnalysis#RepositoryHead
   */
  readonly repositoryHead: CodeGuruReviewerRepositoryHeadSourceCodeType;

}

/**
 * @schema CodeGuruReviewerSourceCodeType
 */
export interface CodeGuruReviewerSourceCodeType {
  /**
   * @schema CodeGuruReviewerSourceCodeType#CommitDiff
   */
  readonly commitDiff?: CodeGuruReviewerCommitDiffSourceCodeType;

  /**
   * @schema CodeGuruReviewerSourceCodeType#RepositoryHead
   */
  readonly repositoryHead?: CodeGuruReviewerRepositoryHeadSourceCodeType;

}

/**
 * @schema CodeGuruReviewerMetrics
 */
export interface CodeGuruReviewerMetrics {
  /**
   * @schema CodeGuruReviewerMetrics#MeteredLinesOfCodeCount
   */
  readonly meteredLinesOfCodeCount?: number;

  /**
   * @schema CodeGuruReviewerMetrics#FindingsCount
   */
  readonly findingsCount?: number;

}

/**
 * @schema CodeGuruReviewerMetricsSummary
 */
export interface CodeGuruReviewerMetricsSummary {
  /**
   * @schema CodeGuruReviewerMetricsSummary#MeteredLinesOfCodeCount
   */
  readonly meteredLinesOfCodeCount?: number;

  /**
   * @schema CodeGuruReviewerMetricsSummary#FindingsCount
   */
  readonly findingsCount?: number;

}

/**
 * @schema CodeGuruReviewerRepositoryHeadSourceCodeType
 */
export interface CodeGuruReviewerRepositoryHeadSourceCodeType {
  /**
   * @schema CodeGuruReviewerRepositoryHeadSourceCodeType#BranchName
   */
  readonly branchName: string;

}

/**
 * @schema CodeGuruReviewerCommitDiffSourceCodeType
 */
export interface CodeGuruReviewerCommitDiffSourceCodeType {
  /**
   * @schema CodeGuruReviewerCommitDiffSourceCodeType#SourceCommit
   */
  readonly sourceCommit?: string;

  /**
   * @schema CodeGuruReviewerCommitDiffSourceCodeType#DestinationCommit
   */
  readonly destinationCommit?: string;

}
