/**
 * @schema AssociateRepositoryRequest
 */
export interface AssociateRepositoryRequest {
  /**
   * @schema AssociateRepositoryRequest#Repository
   */
  readonly repository: Repository;

  /**
   * @schema AssociateRepositoryRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema AssociateRepositoryRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema AssociateRepositoryResponse
 */
export interface AssociateRepositoryResponse {
  /**
   * @schema AssociateRepositoryResponse#RepositoryAssociation
   */
  readonly repositoryAssociation?: RepositoryAssociation;

  /**
   * @schema AssociateRepositoryResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateCodeReviewRequest
 */
export interface CreateCodeReviewRequest {
  /**
   * @schema CreateCodeReviewRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateCodeReviewRequest#RepositoryAssociationArn
   */
  readonly repositoryAssociationArn: string;

  /**
   * @schema CreateCodeReviewRequest#Type
   */
  readonly type: CodeReviewType;

  /**
   * @schema CreateCodeReviewRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * @schema CreateCodeReviewResponse
 */
export interface CreateCodeReviewResponse {
  /**
   * @schema CreateCodeReviewResponse#CodeReview
   */
  readonly codeReview?: CodeReview;

}

/**
 * @schema DescribeCodeReviewRequest
 */
export interface DescribeCodeReviewRequest {
  /**
   * @schema DescribeCodeReviewRequest#CodeReviewArn
   */
  readonly codeReviewArn: string;

}

/**
 * @schema DescribeCodeReviewResponse
 */
export interface DescribeCodeReviewResponse {
  /**
   * @schema DescribeCodeReviewResponse#CodeReview
   */
  readonly codeReview?: CodeReview;

}

/**
 * @schema DescribeRecommendationFeedbackRequest
 */
export interface DescribeRecommendationFeedbackRequest {
  /**
   * @schema DescribeRecommendationFeedbackRequest#CodeReviewArn
   */
  readonly codeReviewArn: string;

  /**
   * @schema DescribeRecommendationFeedbackRequest#RecommendationId
   */
  readonly recommendationId: string;

  /**
   * @schema DescribeRecommendationFeedbackRequest#UserId
   */
  readonly userId?: string;

}

/**
 * @schema DescribeRecommendationFeedbackResponse
 */
export interface DescribeRecommendationFeedbackResponse {
  /**
   * @schema DescribeRecommendationFeedbackResponse#RecommendationFeedback
   */
  readonly recommendationFeedback?: RecommendationFeedback;

}

/**
 * @schema DescribeRepositoryAssociationRequest
 */
export interface DescribeRepositoryAssociationRequest {
  /**
   * @schema DescribeRepositoryAssociationRequest#AssociationArn
   */
  readonly associationArn: string;

}

/**
 * @schema DescribeRepositoryAssociationResponse
 */
export interface DescribeRepositoryAssociationResponse {
  /**
   * @schema DescribeRepositoryAssociationResponse#RepositoryAssociation
   */
  readonly repositoryAssociation?: RepositoryAssociation;

  /**
   * @schema DescribeRepositoryAssociationResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema DisassociateRepositoryRequest
 */
export interface DisassociateRepositoryRequest {
  /**
   * @schema DisassociateRepositoryRequest#AssociationArn
   */
  readonly associationArn: string;

}

/**
 * @schema DisassociateRepositoryResponse
 */
export interface DisassociateRepositoryResponse {
  /**
   * @schema DisassociateRepositoryResponse#RepositoryAssociation
   */
  readonly repositoryAssociation?: RepositoryAssociation;

  /**
   * @schema DisassociateRepositoryResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema ListCodeReviewsRequest
 */
export interface ListCodeReviewsRequest {
  /**
   * @schema ListCodeReviewsRequest#ProviderTypes
   */
  readonly providerTypes?: string[];

  /**
   * @schema ListCodeReviewsRequest#States
   */
  readonly states?: string[];

  /**
   * @schema ListCodeReviewsRequest#RepositoryNames
   */
  readonly repositoryNames?: string[];

  /**
   * @schema ListCodeReviewsRequest#Type
   */
  readonly type: string;

  /**
   * @schema ListCodeReviewsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListCodeReviewsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListCodeReviewsResponse
 */
export interface ListCodeReviewsResponse {
  /**
   * @schema ListCodeReviewsResponse#CodeReviewSummaries
   */
  readonly codeReviewSummaries?: CodeReviewSummary[];

  /**
   * @schema ListCodeReviewsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListRecommendationFeedbackRequest
 */
export interface ListRecommendationFeedbackRequest {
  /**
   * @schema ListRecommendationFeedbackRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListRecommendationFeedbackRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListRecommendationFeedbackRequest#CodeReviewArn
   */
  readonly codeReviewArn: string;

  /**
   * @schema ListRecommendationFeedbackRequest#UserIds
   */
  readonly userIds?: string[];

  /**
   * @schema ListRecommendationFeedbackRequest#RecommendationIds
   */
  readonly recommendationIds?: string[];

}

/**
 * @schema ListRecommendationFeedbackResponse
 */
export interface ListRecommendationFeedbackResponse {
  /**
   * @schema ListRecommendationFeedbackResponse#RecommendationFeedbackSummaries
   */
  readonly recommendationFeedbackSummaries?: RecommendationFeedbackSummary[];

  /**
   * @schema ListRecommendationFeedbackResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListRecommendationsRequest
 */
export interface ListRecommendationsRequest {
  /**
   * @schema ListRecommendationsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListRecommendationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListRecommendationsRequest#CodeReviewArn
   */
  readonly codeReviewArn: string;

}

/**
 * @schema ListRecommendationsResponse
 */
export interface ListRecommendationsResponse {
  /**
   * @schema ListRecommendationsResponse#RecommendationSummaries
   */
  readonly recommendationSummaries?: RecommendationSummary[];

  /**
   * @schema ListRecommendationsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListRepositoryAssociationsRequest
 */
export interface ListRepositoryAssociationsRequest {
  /**
   * @schema ListRepositoryAssociationsRequest#ProviderTypes
   */
  readonly providerTypes?: string[];

  /**
   * @schema ListRepositoryAssociationsRequest#States
   */
  readonly states?: string[];

  /**
   * @schema ListRepositoryAssociationsRequest#Names
   */
  readonly names?: string[];

  /**
   * @schema ListRepositoryAssociationsRequest#Owners
   */
  readonly owners?: string[];

  /**
   * @schema ListRepositoryAssociationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListRepositoryAssociationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListRepositoryAssociationsResponse
 */
export interface ListRepositoryAssociationsResponse {
  /**
   * @schema ListRepositoryAssociationsResponse#RepositoryAssociationSummaries
   */
  readonly repositoryAssociationSummaries?: RepositoryAssociationSummary[];

  /**
   * @schema ListRepositoryAssociationsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTagsForResourceRequest
 */
export interface ListTagsForResourceRequest {
  /**
   * @schema ListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema ListTagsForResourceResponse
 */
export interface ListTagsForResourceResponse {
  /**
   * @schema ListTagsForResourceResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema PutRecommendationFeedbackRequest
 */
export interface PutRecommendationFeedbackRequest {
  /**
   * @schema PutRecommendationFeedbackRequest#CodeReviewArn
   */
  readonly codeReviewArn: string;

  /**
   * @schema PutRecommendationFeedbackRequest#RecommendationId
   */
  readonly recommendationId: string;

  /**
   * @schema PutRecommendationFeedbackRequest#Reactions
   */
  readonly reactions: string[];

}

/**
 * @schema PutRecommendationFeedbackResponse
 */
export interface PutRecommendationFeedbackResponse {
}

/**
 * @schema TagResourceRequest
 */
export interface TagResourceRequest {
  /**
   * @schema TagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema TagResourceRequest#Tags
   */
  readonly tags: { [key: string]: string };

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
   * @schema UntagResourceRequest#resourceArn
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
 * @schema Repository
 */
export interface Repository {
  /**
   * @schema Repository#CodeCommit
   */
  readonly codeCommit?: CodeCommitRepository;

  /**
   * @schema Repository#Bitbucket
   */
  readonly bitbucket?: ThirdPartySourceRepository;

  /**
   * @schema Repository#GitHubEnterpriseServer
   */
  readonly gitHubEnterpriseServer?: ThirdPartySourceRepository;

}

/**
 * @schema RepositoryAssociation
 */
export interface RepositoryAssociation {
  /**
   * @schema RepositoryAssociation#AssociationId
   */
  readonly associationId?: string;

  /**
   * @schema RepositoryAssociation#AssociationArn
   */
  readonly associationArn?: string;

  /**
   * @schema RepositoryAssociation#ConnectionArn
   */
  readonly connectionArn?: string;

  /**
   * @schema RepositoryAssociation#Name
   */
  readonly name?: string;

  /**
   * @schema RepositoryAssociation#Owner
   */
  readonly owner?: string;

  /**
   * @schema RepositoryAssociation#ProviderType
   */
  readonly providerType?: string;

  /**
   * @schema RepositoryAssociation#State
   */
  readonly state?: string;

  /**
   * @schema RepositoryAssociation#StateReason
   */
  readonly stateReason?: string;

  /**
   * @schema RepositoryAssociation#LastUpdatedTimeStamp
   */
  readonly lastUpdatedTimeStamp?: string;

  /**
   * @schema RepositoryAssociation#CreatedTimeStamp
   */
  readonly createdTimeStamp?: string;

}

/**
 * @schema CodeReviewType
 */
export interface CodeReviewType {
  /**
   * @schema CodeReviewType#RepositoryAnalysis
   */
  readonly repositoryAnalysis: RepositoryAnalysis;

}

/**
 * @schema CodeReview
 */
export interface CodeReview {
  /**
   * @schema CodeReview#Name
   */
  readonly name?: string;

  /**
   * @schema CodeReview#CodeReviewArn
   */
  readonly codeReviewArn?: string;

  /**
   * @schema CodeReview#RepositoryName
   */
  readonly repositoryName?: string;

  /**
   * @schema CodeReview#Owner
   */
  readonly owner?: string;

  /**
   * @schema CodeReview#ProviderType
   */
  readonly providerType?: string;

  /**
   * @schema CodeReview#State
   */
  readonly state?: string;

  /**
   * @schema CodeReview#StateReason
   */
  readonly stateReason?: string;

  /**
   * @schema CodeReview#CreatedTimeStamp
   */
  readonly createdTimeStamp?: string;

  /**
   * @schema CodeReview#LastUpdatedTimeStamp
   */
  readonly lastUpdatedTimeStamp?: string;

  /**
   * @schema CodeReview#Type
   */
  readonly type?: string;

  /**
   * @schema CodeReview#PullRequestId
   */
  readonly pullRequestId?: string;

  /**
   * @schema CodeReview#SourceCodeType
   */
  readonly sourceCodeType?: SourceCodeType;

  /**
   * @schema CodeReview#AssociationArn
   */
  readonly associationArn?: string;

  /**
   * @schema CodeReview#Metrics
   */
  readonly metrics?: Metrics;

}

/**
 * @schema RecommendationFeedback
 */
export interface RecommendationFeedback {
  /**
   * @schema RecommendationFeedback#CodeReviewArn
   */
  readonly codeReviewArn?: string;

  /**
   * @schema RecommendationFeedback#RecommendationId
   */
  readonly recommendationId?: string;

  /**
   * @schema RecommendationFeedback#Reactions
   */
  readonly reactions?: string[];

  /**
   * @schema RecommendationFeedback#UserId
   */
  readonly userId?: string;

  /**
   * @schema RecommendationFeedback#CreatedTimeStamp
   */
  readonly createdTimeStamp?: string;

  /**
   * @schema RecommendationFeedback#LastUpdatedTimeStamp
   */
  readonly lastUpdatedTimeStamp?: string;

}

/**
 * @schema CodeReviewSummary
 */
export interface CodeReviewSummary {
  /**
   * @schema CodeReviewSummary#Name
   */
  readonly name?: string;

  /**
   * @schema CodeReviewSummary#CodeReviewArn
   */
  readonly codeReviewArn?: string;

  /**
   * @schema CodeReviewSummary#RepositoryName
   */
  readonly repositoryName?: string;

  /**
   * @schema CodeReviewSummary#Owner
   */
  readonly owner?: string;

  /**
   * @schema CodeReviewSummary#ProviderType
   */
  readonly providerType?: string;

  /**
   * @schema CodeReviewSummary#State
   */
  readonly state?: string;

  /**
   * @schema CodeReviewSummary#CreatedTimeStamp
   */
  readonly createdTimeStamp?: string;

  /**
   * @schema CodeReviewSummary#LastUpdatedTimeStamp
   */
  readonly lastUpdatedTimeStamp?: string;

  /**
   * @schema CodeReviewSummary#Type
   */
  readonly type?: string;

  /**
   * @schema CodeReviewSummary#PullRequestId
   */
  readonly pullRequestId?: string;

  /**
   * @schema CodeReviewSummary#MetricsSummary
   */
  readonly metricsSummary?: MetricsSummary;

}

/**
 * @schema RecommendationFeedbackSummary
 */
export interface RecommendationFeedbackSummary {
  /**
   * @schema RecommendationFeedbackSummary#RecommendationId
   */
  readonly recommendationId?: string;

  /**
   * @schema RecommendationFeedbackSummary#Reactions
   */
  readonly reactions?: string[];

  /**
   * @schema RecommendationFeedbackSummary#UserId
   */
  readonly userId?: string;

}

/**
 * @schema RecommendationSummary
 */
export interface RecommendationSummary {
  /**
   * @schema RecommendationSummary#FilePath
   */
  readonly filePath?: string;

  /**
   * @schema RecommendationSummary#RecommendationId
   */
  readonly recommendationId?: string;

  /**
   * @schema RecommendationSummary#StartLine
   */
  readonly startLine?: number;

  /**
   * @schema RecommendationSummary#EndLine
   */
  readonly endLine?: number;

  /**
   * @schema RecommendationSummary#Description
   */
  readonly description?: string;

}

/**
 * @schema RepositoryAssociationSummary
 */
export interface RepositoryAssociationSummary {
  /**
   * @schema RepositoryAssociationSummary#AssociationArn
   */
  readonly associationArn?: string;

  /**
   * @schema RepositoryAssociationSummary#ConnectionArn
   */
  readonly connectionArn?: string;

  /**
   * @schema RepositoryAssociationSummary#LastUpdatedTimeStamp
   */
  readonly lastUpdatedTimeStamp?: string;

  /**
   * @schema RepositoryAssociationSummary#AssociationId
   */
  readonly associationId?: string;

  /**
   * @schema RepositoryAssociationSummary#Name
   */
  readonly name?: string;

  /**
   * @schema RepositoryAssociationSummary#Owner
   */
  readonly owner?: string;

  /**
   * @schema RepositoryAssociationSummary#ProviderType
   */
  readonly providerType?: string;

  /**
   * @schema RepositoryAssociationSummary#State
   */
  readonly state?: string;

}

/**
 * @schema CodeCommitRepository
 */
export interface CodeCommitRepository {
  /**
   * @schema CodeCommitRepository#Name
   */
  readonly name: string;

}

/**
 * @schema ThirdPartySourceRepository
 */
export interface ThirdPartySourceRepository {
  /**
   * @schema ThirdPartySourceRepository#Name
   */
  readonly name: string;

  /**
   * @schema ThirdPartySourceRepository#ConnectionArn
   */
  readonly connectionArn: string;

  /**
   * @schema ThirdPartySourceRepository#Owner
   */
  readonly owner: string;

}

/**
 * @schema RepositoryAnalysis
 */
export interface RepositoryAnalysis {
  /**
   * @schema RepositoryAnalysis#RepositoryHead
   */
  readonly repositoryHead: RepositoryHeadSourceCodeType;

}

/**
 * @schema SourceCodeType
 */
export interface SourceCodeType {
  /**
   * @schema SourceCodeType#CommitDiff
   */
  readonly commitDiff?: CommitDiffSourceCodeType;

  /**
   * @schema SourceCodeType#RepositoryHead
   */
  readonly repositoryHead?: RepositoryHeadSourceCodeType;

}

/**
 * @schema Metrics
 */
export interface Metrics {
  /**
   * @schema Metrics#MeteredLinesOfCodeCount
   */
  readonly meteredLinesOfCodeCount?: number;

  /**
   * @schema Metrics#FindingsCount
   */
  readonly findingsCount?: number;

}

/**
 * @schema MetricsSummary
 */
export interface MetricsSummary {
  /**
   * @schema MetricsSummary#MeteredLinesOfCodeCount
   */
  readonly meteredLinesOfCodeCount?: number;

  /**
   * @schema MetricsSummary#FindingsCount
   */
  readonly findingsCount?: number;

}

/**
 * @schema RepositoryHeadSourceCodeType
 */
export interface RepositoryHeadSourceCodeType {
  /**
   * @schema RepositoryHeadSourceCodeType#BranchName
   */
  readonly branchName: string;

}

/**
 * @schema CommitDiffSourceCodeType
 */
export interface CommitDiffSourceCodeType {
  /**
   * @schema CommitDiffSourceCodeType#SourceCommit
   */
  readonly sourceCommit?: string;

  /**
   * @schema CommitDiffSourceCodeType#DestinationCommit
   */
  readonly destinationCommit?: string;

}
