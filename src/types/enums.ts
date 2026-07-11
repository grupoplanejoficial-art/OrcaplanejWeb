export enum UserRole { Owner='owner', Admin='admin', Manager='manager', Designer='designer', Production='production', Sales='sales', Viewer='viewer' }
export enum PermissionAction { Create='create', Read='read', Update='update', Delete='delete', Approve='approve', Export='export', Import='import' }
export enum ProjectStatus { Draft='draft', InReview='in_review', Approved='approved', InProduction='in_production', Completed='completed', Cancelled='cancelled' }
export enum ApprovalStatus { Pending='pending', Approved='approved', Rejected='rejected', ChangesRequested='changes_requested' }
export enum MaterialType { Panel='panel', EdgeBand='edge_band', Glass='glass', Aluminum='aluminum', Hardware='hardware', Consumable='consumable' }
export enum UnitOfMeasure { Unit='unit', Meter='meter', SquareMeter='square_meter', CubicMeter='cubic_meter', Kilogram='kilogram', Sheet='sheet' }
export enum PieceShape { Rectangle='rectangle', Custom='custom' }
export enum PricingSource { Manual='manual', Ai='ai', GoogleSheets='google_sheets', ParceirosPlanej='parceiros_planej' }
export enum PdfType { Commercial='commercial', Technical='technical' }
export enum IntegrationStatus { Disabled='disabled', Pending='pending', Connected='connected', Error='error' }
