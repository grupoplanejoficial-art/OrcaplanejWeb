export enum UserRole { Owner='owner', Admin='admin', Manager='manager', Designer='designer', Production='production', Sales='sales', Viewer='viewer' }
export enum PermissionAction { Create='create', Read='read', Update='update', Delete='delete', Approve='approve', Export='export', Import='import' }
export enum ProjectStatus { Draft='draft', InReview='in_review', Approved='approved', InProduction='in_production', Completed='completed', Cancelled='cancelled' }
export enum BudgetStatus { Draft='draft', InReview='in_review', Approved='approved', Rejected='rejected', Sent='sent', Expired='expired' }
export enum PriceSuggestionStatus { Pending='pending', Approved='approved', Rejected='rejected' }
export enum ApprovalStatus { Pending='pending', Approved='approved', Rejected='rejected', ChangesRequested='changes_requested' }
export enum MaterialCategory { MDF='mdf', MDP='mdp', EdgeBand='edge_band', Glass='glass', Aluminum='aluminum', Hardware='hardware', Accessory='accessory' }
export enum MaterialType { Panel='panel', EdgeBand='edge_band', Glass='glass', Aluminum='aluminum', Hardware='hardware', Consumable='consumable' }
export enum UnitOfMeasure { Unit='unit', Meter='meter', Millimeter='millimeter', SquareMeter='square_meter', CubicMeter='cubic_meter', Kilogram='kilogram', Sheet='sheet', Hour='hour' }
export enum PieceShape { Rectangle='rectangle', Custom='custom' }
export enum PricingSource { Manual='manual', Ai='ai', GoogleSheets='google_sheets', ParceirosPlanej='parceiros_planej', SupplierWebsite='supplier_website' }
export enum PdfType { Commercial='commercial', Technical='technical' }
export enum IntegrationStatus { Disabled='disabled', Pending='pending', Connected='connected', Error='error' }
