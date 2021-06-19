/**
 * @schema CloudSearchBuildSuggestersRequest
 */
export interface CloudSearchBuildSuggestersRequest {
  /**
   * @schema CloudSearchBuildSuggestersRequest#DomainName
   */
  readonly domainName: string;

}

/**
 * @schema CloudSearchBuildSuggestersResponse
 */
export interface CloudSearchBuildSuggestersResponse {
  /**
   * @schema CloudSearchBuildSuggestersResponse#FieldNames
   */
  readonly fieldNames?: string[];

}

/**
 * @schema CloudSearchCreateDomainRequest
 */
export interface CloudSearchCreateDomainRequest {
  /**
   * @schema CloudSearchCreateDomainRequest#DomainName
   */
  readonly domainName: string;

}

/**
 * @schema CloudSearchCreateDomainResponse
 */
export interface CloudSearchCreateDomainResponse {
  /**
   * @schema CloudSearchCreateDomainResponse#DomainStatus
   */
  readonly domainStatus?: CloudSearchDomainStatus;

}

/**
 * @schema CloudSearchDefineAnalysisSchemeRequest
 */
export interface CloudSearchDefineAnalysisSchemeRequest {
  /**
   * @schema CloudSearchDefineAnalysisSchemeRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema CloudSearchDefineAnalysisSchemeRequest#AnalysisScheme
   */
  readonly analysisScheme: CloudSearchAnalysisScheme;

}

/**
 * @schema CloudSearchDefineAnalysisSchemeResponse
 */
export interface CloudSearchDefineAnalysisSchemeResponse {
  /**
   * @schema CloudSearchDefineAnalysisSchemeResponse#AnalysisScheme
   */
  readonly analysisScheme: CloudSearchAnalysisSchemeStatus;

}

/**
 * @schema CloudSearchDefineExpressionRequest
 */
export interface CloudSearchDefineExpressionRequest {
  /**
   * @schema CloudSearchDefineExpressionRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema CloudSearchDefineExpressionRequest#Expression
   */
  readonly expression: CloudSearchExpression;

}

/**
 * @schema CloudSearchDefineExpressionResponse
 */
export interface CloudSearchDefineExpressionResponse {
  /**
   * @schema CloudSearchDefineExpressionResponse#Expression
   */
  readonly expression: CloudSearchExpressionStatus;

}

/**
 * @schema CloudSearchDefineIndexFieldRequest
 */
export interface CloudSearchDefineIndexFieldRequest {
  /**
   * @schema CloudSearchDefineIndexFieldRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema CloudSearchDefineIndexFieldRequest#IndexField
   */
  readonly indexField: CloudSearchIndexField;

}

/**
 * @schema CloudSearchDefineIndexFieldResponse
 */
export interface CloudSearchDefineIndexFieldResponse {
  /**
   * @schema CloudSearchDefineIndexFieldResponse#IndexField
   */
  readonly indexField: CloudSearchIndexFieldStatus;

}

/**
 * @schema CloudSearchDefineSuggesterRequest
 */
export interface CloudSearchDefineSuggesterRequest {
  /**
   * @schema CloudSearchDefineSuggesterRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema CloudSearchDefineSuggesterRequest#Suggester
   */
  readonly suggester: CloudSearchSuggester;

}

/**
 * @schema CloudSearchDefineSuggesterResponse
 */
export interface CloudSearchDefineSuggesterResponse {
  /**
   * @schema CloudSearchDefineSuggesterResponse#Suggester
   */
  readonly suggester: CloudSearchSuggesterStatus;

}

/**
 * @schema CloudSearchDeleteAnalysisSchemeRequest
 */
export interface CloudSearchDeleteAnalysisSchemeRequest {
  /**
   * @schema CloudSearchDeleteAnalysisSchemeRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema CloudSearchDeleteAnalysisSchemeRequest#AnalysisSchemeName
   */
  readonly analysisSchemeName: string;

}

/**
 * @schema CloudSearchDeleteAnalysisSchemeResponse
 */
export interface CloudSearchDeleteAnalysisSchemeResponse {
  /**
   * @schema CloudSearchDeleteAnalysisSchemeResponse#AnalysisScheme
   */
  readonly analysisScheme: CloudSearchAnalysisSchemeStatus;

}

/**
 * @schema CloudSearchDeleteDomainRequest
 */
export interface CloudSearchDeleteDomainRequest {
  /**
   * @schema CloudSearchDeleteDomainRequest#DomainName
   */
  readonly domainName: string;

}

/**
 * @schema CloudSearchDeleteDomainResponse
 */
export interface CloudSearchDeleteDomainResponse {
  /**
   * @schema CloudSearchDeleteDomainResponse#DomainStatus
   */
  readonly domainStatus?: CloudSearchDomainStatus;

}

/**
 * @schema CloudSearchDeleteExpressionRequest
 */
export interface CloudSearchDeleteExpressionRequest {
  /**
   * @schema CloudSearchDeleteExpressionRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema CloudSearchDeleteExpressionRequest#ExpressionName
   */
  readonly expressionName: string;

}

/**
 * @schema CloudSearchDeleteExpressionResponse
 */
export interface CloudSearchDeleteExpressionResponse {
  /**
   * @schema CloudSearchDeleteExpressionResponse#Expression
   */
  readonly expression: CloudSearchExpressionStatus;

}

/**
 * @schema CloudSearchDeleteIndexFieldRequest
 */
export interface CloudSearchDeleteIndexFieldRequest {
  /**
   * @schema CloudSearchDeleteIndexFieldRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema CloudSearchDeleteIndexFieldRequest#IndexFieldName
   */
  readonly indexFieldName: string;

}

/**
 * @schema CloudSearchDeleteIndexFieldResponse
 */
export interface CloudSearchDeleteIndexFieldResponse {
  /**
   * @schema CloudSearchDeleteIndexFieldResponse#IndexField
   */
  readonly indexField: CloudSearchIndexFieldStatus;

}

/**
 * @schema CloudSearchDeleteSuggesterRequest
 */
export interface CloudSearchDeleteSuggesterRequest {
  /**
   * @schema CloudSearchDeleteSuggesterRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema CloudSearchDeleteSuggesterRequest#SuggesterName
   */
  readonly suggesterName: string;

}

/**
 * @schema CloudSearchDeleteSuggesterResponse
 */
export interface CloudSearchDeleteSuggesterResponse {
  /**
   * @schema CloudSearchDeleteSuggesterResponse#Suggester
   */
  readonly suggester: CloudSearchSuggesterStatus;

}

/**
 * @schema CloudSearchDescribeAnalysisSchemesRequest
 */
export interface CloudSearchDescribeAnalysisSchemesRequest {
  /**
   * @schema CloudSearchDescribeAnalysisSchemesRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema CloudSearchDescribeAnalysisSchemesRequest#AnalysisSchemeNames
   */
  readonly analysisSchemeNames?: string[];

  /**
   * @schema CloudSearchDescribeAnalysisSchemesRequest#Deployed
   */
  readonly deployed?: boolean;

}

/**
 * @schema CloudSearchDescribeAnalysisSchemesResponse
 */
export interface CloudSearchDescribeAnalysisSchemesResponse {
  /**
   * @schema CloudSearchDescribeAnalysisSchemesResponse#AnalysisSchemes
   */
  readonly analysisSchemes: CloudSearchAnalysisSchemeStatus[];

}

/**
 * @schema CloudSearchDescribeAvailabilityOptionsRequest
 */
export interface CloudSearchDescribeAvailabilityOptionsRequest {
  /**
   * @schema CloudSearchDescribeAvailabilityOptionsRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema CloudSearchDescribeAvailabilityOptionsRequest#Deployed
   */
  readonly deployed?: boolean;

}

/**
 * @schema CloudSearchDescribeAvailabilityOptionsResponse
 */
export interface CloudSearchDescribeAvailabilityOptionsResponse {
  /**
   * @schema CloudSearchDescribeAvailabilityOptionsResponse#AvailabilityOptions
   */
  readonly availabilityOptions?: CloudSearchAvailabilityOptionsStatus;

}

/**
 * @schema CloudSearchDescribeDomainEndpointOptionsRequest
 */
export interface CloudSearchDescribeDomainEndpointOptionsRequest {
  /**
   * @schema CloudSearchDescribeDomainEndpointOptionsRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema CloudSearchDescribeDomainEndpointOptionsRequest#Deployed
   */
  readonly deployed?: boolean;

}

/**
 * @schema CloudSearchDescribeDomainEndpointOptionsResponse
 */
export interface CloudSearchDescribeDomainEndpointOptionsResponse {
  /**
   * @schema CloudSearchDescribeDomainEndpointOptionsResponse#DomainEndpointOptions
   */
  readonly domainEndpointOptions?: CloudSearchDomainEndpointOptionsStatus;

}

/**
 * @schema CloudSearchDescribeDomainsRequest
 */
export interface CloudSearchDescribeDomainsRequest {
  /**
   * @schema CloudSearchDescribeDomainsRequest#DomainNames
   */
  readonly domainNames?: string[];

}

/**
 * @schema CloudSearchDescribeDomainsResponse
 */
export interface CloudSearchDescribeDomainsResponse {
  /**
   * @schema CloudSearchDescribeDomainsResponse#DomainStatusList
   */
  readonly domainStatusList: CloudSearchDomainStatus[];

}

/**
 * @schema CloudSearchDescribeExpressionsRequest
 */
export interface CloudSearchDescribeExpressionsRequest {
  /**
   * @schema CloudSearchDescribeExpressionsRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema CloudSearchDescribeExpressionsRequest#ExpressionNames
   */
  readonly expressionNames?: string[];

  /**
   * @schema CloudSearchDescribeExpressionsRequest#Deployed
   */
  readonly deployed?: boolean;

}

/**
 * @schema CloudSearchDescribeExpressionsResponse
 */
export interface CloudSearchDescribeExpressionsResponse {
  /**
   * @schema CloudSearchDescribeExpressionsResponse#Expressions
   */
  readonly expressions: CloudSearchExpressionStatus[];

}

/**
 * @schema CloudSearchDescribeIndexFieldsRequest
 */
export interface CloudSearchDescribeIndexFieldsRequest {
  /**
   * @schema CloudSearchDescribeIndexFieldsRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema CloudSearchDescribeIndexFieldsRequest#FieldNames
   */
  readonly fieldNames?: string[];

  /**
   * @schema CloudSearchDescribeIndexFieldsRequest#Deployed
   */
  readonly deployed?: boolean;

}

/**
 * @schema CloudSearchDescribeIndexFieldsResponse
 */
export interface CloudSearchDescribeIndexFieldsResponse {
  /**
   * @schema CloudSearchDescribeIndexFieldsResponse#IndexFields
   */
  readonly indexFields: CloudSearchIndexFieldStatus[];

}

/**
 * @schema CloudSearchDescribeScalingParametersRequest
 */
export interface CloudSearchDescribeScalingParametersRequest {
  /**
   * @schema CloudSearchDescribeScalingParametersRequest#DomainName
   */
  readonly domainName: string;

}

/**
 * @schema CloudSearchDescribeScalingParametersResponse
 */
export interface CloudSearchDescribeScalingParametersResponse {
  /**
   * @schema CloudSearchDescribeScalingParametersResponse#ScalingParameters
   */
  readonly scalingParameters: CloudSearchScalingParametersStatus;

}

/**
 * @schema CloudSearchDescribeServiceAccessPoliciesRequest
 */
export interface CloudSearchDescribeServiceAccessPoliciesRequest {
  /**
   * @schema CloudSearchDescribeServiceAccessPoliciesRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema CloudSearchDescribeServiceAccessPoliciesRequest#Deployed
   */
  readonly deployed?: boolean;

}

/**
 * @schema CloudSearchDescribeServiceAccessPoliciesResponse
 */
export interface CloudSearchDescribeServiceAccessPoliciesResponse {
  /**
   * @schema CloudSearchDescribeServiceAccessPoliciesResponse#AccessPolicies
   */
  readonly accessPolicies: CloudSearchAccessPoliciesStatus;

}

/**
 * @schema CloudSearchDescribeSuggestersRequest
 */
export interface CloudSearchDescribeSuggestersRequest {
  /**
   * @schema CloudSearchDescribeSuggestersRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema CloudSearchDescribeSuggestersRequest#SuggesterNames
   */
  readonly suggesterNames?: string[];

  /**
   * @schema CloudSearchDescribeSuggestersRequest#Deployed
   */
  readonly deployed?: boolean;

}

/**
 * @schema CloudSearchDescribeSuggestersResponse
 */
export interface CloudSearchDescribeSuggestersResponse {
  /**
   * @schema CloudSearchDescribeSuggestersResponse#Suggesters
   */
  readonly suggesters: CloudSearchSuggesterStatus[];

}

/**
 * @schema CloudSearchIndexDocumentsRequest
 */
export interface CloudSearchIndexDocumentsRequest {
  /**
   * @schema CloudSearchIndexDocumentsRequest#DomainName
   */
  readonly domainName: string;

}

/**
 * @schema CloudSearchIndexDocumentsResponse
 */
export interface CloudSearchIndexDocumentsResponse {
  /**
   * @schema CloudSearchIndexDocumentsResponse#FieldNames
   */
  readonly fieldNames?: string[];

}

/**
 * @schema CloudSearchListDomainNamesResponse
 */
export interface CloudSearchListDomainNamesResponse {
  /**
   * @schema CloudSearchListDomainNamesResponse#DomainNames
   */
  readonly domainNames?: { [key: string]: string };

}

/**
 * @schema CloudSearchUpdateAvailabilityOptionsRequest
 */
export interface CloudSearchUpdateAvailabilityOptionsRequest {
  /**
   * @schema CloudSearchUpdateAvailabilityOptionsRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema CloudSearchUpdateAvailabilityOptionsRequest#MultiAZ
   */
  readonly multiAz: boolean;

}

/**
 * @schema CloudSearchUpdateAvailabilityOptionsResponse
 */
export interface CloudSearchUpdateAvailabilityOptionsResponse {
  /**
   * @schema CloudSearchUpdateAvailabilityOptionsResponse#AvailabilityOptions
   */
  readonly availabilityOptions?: CloudSearchAvailabilityOptionsStatus;

}

/**
 * @schema CloudSearchUpdateDomainEndpointOptionsRequest
 */
export interface CloudSearchUpdateDomainEndpointOptionsRequest {
  /**
   * @schema CloudSearchUpdateDomainEndpointOptionsRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema CloudSearchUpdateDomainEndpointOptionsRequest#DomainEndpointOptions
   */
  readonly domainEndpointOptions: CloudSearchDomainEndpointOptions;

}

/**
 * @schema CloudSearchUpdateDomainEndpointOptionsResponse
 */
export interface CloudSearchUpdateDomainEndpointOptionsResponse {
  /**
   * @schema CloudSearchUpdateDomainEndpointOptionsResponse#DomainEndpointOptions
   */
  readonly domainEndpointOptions?: CloudSearchDomainEndpointOptionsStatus;

}

/**
 * @schema CloudSearchUpdateScalingParametersRequest
 */
export interface CloudSearchUpdateScalingParametersRequest {
  /**
   * @schema CloudSearchUpdateScalingParametersRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema CloudSearchUpdateScalingParametersRequest#ScalingParameters
   */
  readonly scalingParameters: CloudSearchScalingParameters;

}

/**
 * @schema CloudSearchUpdateScalingParametersResponse
 */
export interface CloudSearchUpdateScalingParametersResponse {
  /**
   * @schema CloudSearchUpdateScalingParametersResponse#ScalingParameters
   */
  readonly scalingParameters: CloudSearchScalingParametersStatus;

}

/**
 * @schema CloudSearchUpdateServiceAccessPoliciesRequest
 */
export interface CloudSearchUpdateServiceAccessPoliciesRequest {
  /**
   * @schema CloudSearchUpdateServiceAccessPoliciesRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema CloudSearchUpdateServiceAccessPoliciesRequest#AccessPolicies
   */
  readonly accessPolicies: string;

}

/**
 * @schema CloudSearchUpdateServiceAccessPoliciesResponse
 */
export interface CloudSearchUpdateServiceAccessPoliciesResponse {
  /**
   * @schema CloudSearchUpdateServiceAccessPoliciesResponse#AccessPolicies
   */
  readonly accessPolicies: CloudSearchAccessPoliciesStatus;

}

/**
 * @schema CloudSearchDomainStatus
 */
export interface CloudSearchDomainStatus {
  /**
   * @schema CloudSearchDomainStatus#DomainId
   */
  readonly domainId: string;

  /**
   * @schema CloudSearchDomainStatus#DomainName
   */
  readonly domainName: string;

  /**
   * @schema CloudSearchDomainStatus#ARN
   */
  readonly arn?: string;

  /**
   * @schema CloudSearchDomainStatus#Created
   */
  readonly created?: boolean;

  /**
   * @schema CloudSearchDomainStatus#Deleted
   */
  readonly deleted?: boolean;

  /**
   * @schema CloudSearchDomainStatus#DocService
   */
  readonly docService?: CloudSearchServiceEndpoint;

  /**
   * @schema CloudSearchDomainStatus#SearchService
   */
  readonly searchService?: CloudSearchServiceEndpoint;

  /**
   * @schema CloudSearchDomainStatus#RequiresIndexDocuments
   */
  readonly requiresIndexDocuments: boolean;

  /**
   * @schema CloudSearchDomainStatus#Processing
   */
  readonly processing?: boolean;

  /**
   * @schema CloudSearchDomainStatus#SearchInstanceType
   */
  readonly searchInstanceType?: string;

  /**
   * @schema CloudSearchDomainStatus#SearchPartitionCount
   */
  readonly searchPartitionCount?: number;

  /**
   * @schema CloudSearchDomainStatus#SearchInstanceCount
   */
  readonly searchInstanceCount?: number;

  /**
   * @schema CloudSearchDomainStatus#Limits
   */
  readonly limits?: CloudSearchLimits;

}

/**
 * @schema CloudSearchAnalysisScheme
 */
export interface CloudSearchAnalysisScheme {
  /**
   * @schema CloudSearchAnalysisScheme#AnalysisSchemeName
   */
  readonly analysisSchemeName: string;

  /**
   * @schema CloudSearchAnalysisScheme#AnalysisSchemeLanguage
   */
  readonly analysisSchemeLanguage: string;

  /**
   * @schema CloudSearchAnalysisScheme#AnalysisOptions
   */
  readonly analysisOptions?: CloudSearchAnalysisOptions;

}

/**
 * @schema CloudSearchAnalysisSchemeStatus
 */
export interface CloudSearchAnalysisSchemeStatus {
  /**
   * @schema CloudSearchAnalysisSchemeStatus#Options
   */
  readonly options: CloudSearchAnalysisScheme;

  /**
   * @schema CloudSearchAnalysisSchemeStatus#Status
   */
  readonly status: CloudSearchOptionStatus;

}

/**
 * @schema CloudSearchExpression
 */
export interface CloudSearchExpression {
  /**
   * @schema CloudSearchExpression#ExpressionName
   */
  readonly expressionName: string;

  /**
   * @schema CloudSearchExpression#ExpressionValue
   */
  readonly expressionValue: string;

}

/**
 * @schema CloudSearchExpressionStatus
 */
export interface CloudSearchExpressionStatus {
  /**
   * @schema CloudSearchExpressionStatus#Options
   */
  readonly options: CloudSearchExpression;

  /**
   * @schema CloudSearchExpressionStatus#Status
   */
  readonly status: CloudSearchOptionStatus;

}

/**
 * @schema CloudSearchIndexField
 */
export interface CloudSearchIndexField {
  /**
   * @schema CloudSearchIndexField#IndexFieldName
   */
  readonly indexFieldName: string;

  /**
   * @schema CloudSearchIndexField#IndexFieldType
   */
  readonly indexFieldType: string;

  /**
   * @schema CloudSearchIndexField#IntOptions
   */
  readonly intOptions?: CloudSearchIntOptions;

  /**
   * @schema CloudSearchIndexField#DoubleOptions
   */
  readonly doubleOptions?: CloudSearchDoubleOptions;

  /**
   * @schema CloudSearchIndexField#LiteralOptions
   */
  readonly literalOptions?: CloudSearchLiteralOptions;

  /**
   * @schema CloudSearchIndexField#TextOptions
   */
  readonly textOptions?: CloudSearchTextOptions;

  /**
   * @schema CloudSearchIndexField#DateOptions
   */
  readonly dateOptions?: CloudSearchDateOptions;

  /**
   * @schema CloudSearchIndexField#LatLonOptions
   */
  readonly latLonOptions?: CloudSearchLatLonOptions;

  /**
   * @schema CloudSearchIndexField#IntArrayOptions
   */
  readonly intArrayOptions?: CloudSearchIntArrayOptions;

  /**
   * @schema CloudSearchIndexField#DoubleArrayOptions
   */
  readonly doubleArrayOptions?: CloudSearchDoubleArrayOptions;

  /**
   * @schema CloudSearchIndexField#LiteralArrayOptions
   */
  readonly literalArrayOptions?: CloudSearchLiteralArrayOptions;

  /**
   * @schema CloudSearchIndexField#TextArrayOptions
   */
  readonly textArrayOptions?: CloudSearchTextArrayOptions;

  /**
   * @schema CloudSearchIndexField#DateArrayOptions
   */
  readonly dateArrayOptions?: CloudSearchDateArrayOptions;

}

/**
 * @schema CloudSearchIndexFieldStatus
 */
export interface CloudSearchIndexFieldStatus {
  /**
   * @schema CloudSearchIndexFieldStatus#Options
   */
  readonly options: CloudSearchIndexField;

  /**
   * @schema CloudSearchIndexFieldStatus#Status
   */
  readonly status: CloudSearchOptionStatus;

}

/**
 * @schema CloudSearchSuggester
 */
export interface CloudSearchSuggester {
  /**
   * @schema CloudSearchSuggester#SuggesterName
   */
  readonly suggesterName: string;

  /**
   * @schema CloudSearchSuggester#DocumentSuggesterOptions
   */
  readonly documentSuggesterOptions: CloudSearchDocumentSuggesterOptions;

}

/**
 * @schema CloudSearchSuggesterStatus
 */
export interface CloudSearchSuggesterStatus {
  /**
   * @schema CloudSearchSuggesterStatus#Options
   */
  readonly options: CloudSearchSuggester;

  /**
   * @schema CloudSearchSuggesterStatus#Status
   */
  readonly status: CloudSearchOptionStatus;

}

/**
 * @schema CloudSearchAvailabilityOptionsStatus
 */
export interface CloudSearchAvailabilityOptionsStatus {
  /**
   * @schema CloudSearchAvailabilityOptionsStatus#Options
   */
  readonly options: boolean;

  /**
   * @schema CloudSearchAvailabilityOptionsStatus#Status
   */
  readonly status: CloudSearchOptionStatus;

}

/**
 * @schema CloudSearchDomainEndpointOptionsStatus
 */
export interface CloudSearchDomainEndpointOptionsStatus {
  /**
   * @schema CloudSearchDomainEndpointOptionsStatus#Options
   */
  readonly options: CloudSearchDomainEndpointOptions;

  /**
   * @schema CloudSearchDomainEndpointOptionsStatus#Status
   */
  readonly status: CloudSearchOptionStatus;

}

/**
 * @schema CloudSearchScalingParametersStatus
 */
export interface CloudSearchScalingParametersStatus {
  /**
   * @schema CloudSearchScalingParametersStatus#Options
   */
  readonly options: CloudSearchScalingParameters;

  /**
   * @schema CloudSearchScalingParametersStatus#Status
   */
  readonly status: CloudSearchOptionStatus;

}

/**
 * @schema CloudSearchAccessPoliciesStatus
 */
export interface CloudSearchAccessPoliciesStatus {
  /**
   * @schema CloudSearchAccessPoliciesStatus#Options
   */
  readonly options: string;

  /**
   * @schema CloudSearchAccessPoliciesStatus#Status
   */
  readonly status: CloudSearchOptionStatus;

}

/**
 * @schema CloudSearchDomainEndpointOptions
 */
export interface CloudSearchDomainEndpointOptions {
  /**
   * @schema CloudSearchDomainEndpointOptions#EnforceHTTPS
   */
  readonly enforceHttps?: boolean;

  /**
   * @schema CloudSearchDomainEndpointOptions#TLSSecurityPolicy
   */
  readonly tlsSecurityPolicy?: string;

}

/**
 * @schema CloudSearchScalingParameters
 */
export interface CloudSearchScalingParameters {
  /**
   * @schema CloudSearchScalingParameters#DesiredInstanceType
   */
  readonly desiredInstanceType?: string;

  /**
   * @schema CloudSearchScalingParameters#DesiredReplicationCount
   */
  readonly desiredReplicationCount?: number;

  /**
   * @schema CloudSearchScalingParameters#DesiredPartitionCount
   */
  readonly desiredPartitionCount?: number;

}

/**
 * @schema CloudSearchServiceEndpoint
 */
export interface CloudSearchServiceEndpoint {
  /**
   * @schema CloudSearchServiceEndpoint#Endpoint
   */
  readonly endpoint?: string;

}

/**
 * @schema CloudSearchLimits
 */
export interface CloudSearchLimits {
  /**
   * @schema CloudSearchLimits#MaximumReplicationCount
   */
  readonly maximumReplicationCount: number;

  /**
   * @schema CloudSearchLimits#MaximumPartitionCount
   */
  readonly maximumPartitionCount: number;

}

/**
 * @schema CloudSearchAnalysisOptions
 */
export interface CloudSearchAnalysisOptions {
  /**
   * @schema CloudSearchAnalysisOptions#Synonyms
   */
  readonly synonyms?: string;

  /**
   * @schema CloudSearchAnalysisOptions#Stopwords
   */
  readonly stopwords?: string;

  /**
   * @schema CloudSearchAnalysisOptions#StemmingDictionary
   */
  readonly stemmingDictionary?: string;

  /**
   * @schema CloudSearchAnalysisOptions#JapaneseTokenizationDictionary
   */
  readonly japaneseTokenizationDictionary?: string;

  /**
   * @schema CloudSearchAnalysisOptions#AlgorithmicStemming
   */
  readonly algorithmicStemming?: string;

}

/**
 * @schema CloudSearchOptionStatus
 */
export interface CloudSearchOptionStatus {
  /**
   * @schema CloudSearchOptionStatus#CreationDate
   */
  readonly creationDate: string;

  /**
   * @schema CloudSearchOptionStatus#UpdateDate
   */
  readonly updateDate: string;

  /**
   * @schema CloudSearchOptionStatus#UpdateVersion
   */
  readonly updateVersion?: number;

  /**
   * @schema CloudSearchOptionStatus#State
   */
  readonly state: string;

  /**
   * @schema CloudSearchOptionStatus#PendingDeletion
   */
  readonly pendingDeletion?: boolean;

}

/**
 * @schema CloudSearchIntOptions
 */
export interface CloudSearchIntOptions {
  /**
   * @schema CloudSearchIntOptions#DefaultValue
   */
  readonly defaultValue?: number;

  /**
   * @schema CloudSearchIntOptions#SourceField
   */
  readonly sourceField?: string;

  /**
   * @schema CloudSearchIntOptions#FacetEnabled
   */
  readonly facetEnabled?: boolean;

  /**
   * @schema CloudSearchIntOptions#SearchEnabled
   */
  readonly searchEnabled?: boolean;

  /**
   * @schema CloudSearchIntOptions#ReturnEnabled
   */
  readonly returnEnabled?: boolean;

  /**
   * @schema CloudSearchIntOptions#SortEnabled
   */
  readonly sortEnabled?: boolean;

}

/**
 * @schema CloudSearchDoubleOptions
 */
export interface CloudSearchDoubleOptions {
  /**
   * @schema CloudSearchDoubleOptions#DefaultValue
   */
  readonly defaultValue?: number;

  /**
   * @schema CloudSearchDoubleOptions#SourceField
   */
  readonly sourceField?: string;

  /**
   * @schema CloudSearchDoubleOptions#FacetEnabled
   */
  readonly facetEnabled?: boolean;

  /**
   * @schema CloudSearchDoubleOptions#SearchEnabled
   */
  readonly searchEnabled?: boolean;

  /**
   * @schema CloudSearchDoubleOptions#ReturnEnabled
   */
  readonly returnEnabled?: boolean;

  /**
   * @schema CloudSearchDoubleOptions#SortEnabled
   */
  readonly sortEnabled?: boolean;

}

/**
 * @schema CloudSearchLiteralOptions
 */
export interface CloudSearchLiteralOptions {
  /**
   * @schema CloudSearchLiteralOptions#DefaultValue
   */
  readonly defaultValue?: string;

  /**
   * @schema CloudSearchLiteralOptions#SourceField
   */
  readonly sourceField?: string;

  /**
   * @schema CloudSearchLiteralOptions#FacetEnabled
   */
  readonly facetEnabled?: boolean;

  /**
   * @schema CloudSearchLiteralOptions#SearchEnabled
   */
  readonly searchEnabled?: boolean;

  /**
   * @schema CloudSearchLiteralOptions#ReturnEnabled
   */
  readonly returnEnabled?: boolean;

  /**
   * @schema CloudSearchLiteralOptions#SortEnabled
   */
  readonly sortEnabled?: boolean;

}

/**
 * @schema CloudSearchTextOptions
 */
export interface CloudSearchTextOptions {
  /**
   * @schema CloudSearchTextOptions#DefaultValue
   */
  readonly defaultValue?: string;

  /**
   * @schema CloudSearchTextOptions#SourceField
   */
  readonly sourceField?: string;

  /**
   * @schema CloudSearchTextOptions#ReturnEnabled
   */
  readonly returnEnabled?: boolean;

  /**
   * @schema CloudSearchTextOptions#SortEnabled
   */
  readonly sortEnabled?: boolean;

  /**
   * @schema CloudSearchTextOptions#HighlightEnabled
   */
  readonly highlightEnabled?: boolean;

  /**
   * @schema CloudSearchTextOptions#AnalysisScheme
   */
  readonly analysisScheme?: string;

}

/**
 * @schema CloudSearchDateOptions
 */
export interface CloudSearchDateOptions {
  /**
   * @schema CloudSearchDateOptions#DefaultValue
   */
  readonly defaultValue?: string;

  /**
   * @schema CloudSearchDateOptions#SourceField
   */
  readonly sourceField?: string;

  /**
   * @schema CloudSearchDateOptions#FacetEnabled
   */
  readonly facetEnabled?: boolean;

  /**
   * @schema CloudSearchDateOptions#SearchEnabled
   */
  readonly searchEnabled?: boolean;

  /**
   * @schema CloudSearchDateOptions#ReturnEnabled
   */
  readonly returnEnabled?: boolean;

  /**
   * @schema CloudSearchDateOptions#SortEnabled
   */
  readonly sortEnabled?: boolean;

}

/**
 * @schema CloudSearchLatLonOptions
 */
export interface CloudSearchLatLonOptions {
  /**
   * @schema CloudSearchLatLonOptions#DefaultValue
   */
  readonly defaultValue?: string;

  /**
   * @schema CloudSearchLatLonOptions#SourceField
   */
  readonly sourceField?: string;

  /**
   * @schema CloudSearchLatLonOptions#FacetEnabled
   */
  readonly facetEnabled?: boolean;

  /**
   * @schema CloudSearchLatLonOptions#SearchEnabled
   */
  readonly searchEnabled?: boolean;

  /**
   * @schema CloudSearchLatLonOptions#ReturnEnabled
   */
  readonly returnEnabled?: boolean;

  /**
   * @schema CloudSearchLatLonOptions#SortEnabled
   */
  readonly sortEnabled?: boolean;

}

/**
 * @schema CloudSearchIntArrayOptions
 */
export interface CloudSearchIntArrayOptions {
  /**
   * @schema CloudSearchIntArrayOptions#DefaultValue
   */
  readonly defaultValue?: number;

  /**
   * @schema CloudSearchIntArrayOptions#SourceFields
   */
  readonly sourceFields?: string;

  /**
   * @schema CloudSearchIntArrayOptions#FacetEnabled
   */
  readonly facetEnabled?: boolean;

  /**
   * @schema CloudSearchIntArrayOptions#SearchEnabled
   */
  readonly searchEnabled?: boolean;

  /**
   * @schema CloudSearchIntArrayOptions#ReturnEnabled
   */
  readonly returnEnabled?: boolean;

}

/**
 * @schema CloudSearchDoubleArrayOptions
 */
export interface CloudSearchDoubleArrayOptions {
  /**
   * @schema CloudSearchDoubleArrayOptions#DefaultValue
   */
  readonly defaultValue?: number;

  /**
   * @schema CloudSearchDoubleArrayOptions#SourceFields
   */
  readonly sourceFields?: string;

  /**
   * @schema CloudSearchDoubleArrayOptions#FacetEnabled
   */
  readonly facetEnabled?: boolean;

  /**
   * @schema CloudSearchDoubleArrayOptions#SearchEnabled
   */
  readonly searchEnabled?: boolean;

  /**
   * @schema CloudSearchDoubleArrayOptions#ReturnEnabled
   */
  readonly returnEnabled?: boolean;

}

/**
 * @schema CloudSearchLiteralArrayOptions
 */
export interface CloudSearchLiteralArrayOptions {
  /**
   * @schema CloudSearchLiteralArrayOptions#DefaultValue
   */
  readonly defaultValue?: string;

  /**
   * @schema CloudSearchLiteralArrayOptions#SourceFields
   */
  readonly sourceFields?: string;

  /**
   * @schema CloudSearchLiteralArrayOptions#FacetEnabled
   */
  readonly facetEnabled?: boolean;

  /**
   * @schema CloudSearchLiteralArrayOptions#SearchEnabled
   */
  readonly searchEnabled?: boolean;

  /**
   * @schema CloudSearchLiteralArrayOptions#ReturnEnabled
   */
  readonly returnEnabled?: boolean;

}

/**
 * @schema CloudSearchTextArrayOptions
 */
export interface CloudSearchTextArrayOptions {
  /**
   * @schema CloudSearchTextArrayOptions#DefaultValue
   */
  readonly defaultValue?: string;

  /**
   * @schema CloudSearchTextArrayOptions#SourceFields
   */
  readonly sourceFields?: string;

  /**
   * @schema CloudSearchTextArrayOptions#ReturnEnabled
   */
  readonly returnEnabled?: boolean;

  /**
   * @schema CloudSearchTextArrayOptions#HighlightEnabled
   */
  readonly highlightEnabled?: boolean;

  /**
   * @schema CloudSearchTextArrayOptions#AnalysisScheme
   */
  readonly analysisScheme?: string;

}

/**
 * @schema CloudSearchDateArrayOptions
 */
export interface CloudSearchDateArrayOptions {
  /**
   * @schema CloudSearchDateArrayOptions#DefaultValue
   */
  readonly defaultValue?: string;

  /**
   * @schema CloudSearchDateArrayOptions#SourceFields
   */
  readonly sourceFields?: string;

  /**
   * @schema CloudSearchDateArrayOptions#FacetEnabled
   */
  readonly facetEnabled?: boolean;

  /**
   * @schema CloudSearchDateArrayOptions#SearchEnabled
   */
  readonly searchEnabled?: boolean;

  /**
   * @schema CloudSearchDateArrayOptions#ReturnEnabled
   */
  readonly returnEnabled?: boolean;

}

/**
 * @schema CloudSearchDocumentSuggesterOptions
 */
export interface CloudSearchDocumentSuggesterOptions {
  /**
   * @schema CloudSearchDocumentSuggesterOptions#SourceField
   */
  readonly sourceField: string;

  /**
   * @schema CloudSearchDocumentSuggesterOptions#FuzzyMatching
   */
  readonly fuzzyMatching?: string;

  /**
   * @schema CloudSearchDocumentSuggesterOptions#SortExpression
   */
  readonly sortExpression?: string;

}
