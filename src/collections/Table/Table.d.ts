import * as React from 'react';

import {
  SemanticCOLORS,
  SemanticVERTICALALIGNMENTS,
  SemanticWIDTHS
} from '../..';
import { default as TableBody } from './TableBody';
import { default as TableCell } from './TableCell';
import { default as TableFooter } from './TableFooter';
import { default as TableHeader } from './TableHeader';
import { default as TableHeaderCell } from './TableHeaderCell';
import { default as TableRow } from './TableRow';

interface TableProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Attach table to other content */
  attached?: boolean | 'top' | 'bottom';

  /** A table can reduce its complexity to increase readability. */
  basic?: boolean | 'very';

  /** A table may be divided each row into separate cells. */
  celled?: boolean | 'internally';

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** A table can be collapsing, taking up only as much space as its rows. */
  collapsing?: boolean;

  /** A table can be given a color to distinguish it from other tables. */
  color?: SemanticCOLORS;

  /** A table can specify its column count to divide its content evenly. */
  columns?: SemanticWIDTHS;

  /** A table may sometimes need to be more compact to make more rows visible at a time. */
  compact?: boolean | 'very';

  /** A table may be formatted to emphasize a first column that defines a rows content. */
  definition?: boolean;

  /**
   * A table can use fixed a special faster form of table rendering that does not resize table cells based on content.
   */
  fixed?: boolean;

  /** Shorthand for a TableRow to be placed within Table.Footer. */
  footerRow?: any;

  /** Shorthand for a TableRow to be placed within Table.Header. */
  headerRow?: any;

  /** A table's colors can be inverted. */
  inverted?: boolean;

  /** A table may sometimes need to be more padded for legibility. */
  padded?: boolean | 'very';

  /**
   * A function that takes (data, index) and returns shorthand for a TableRow
   * to be placed within Table.Body.
   */
  renderBodyRow?: (data: any, index: number) => any;

  /** A table can have its rows appear selectable. */
  selectable?: boolean;

  /** A table can specify that its cell contents should remain on a single line and not wrap. */
  singleLine?: boolean;

  /** A table can also be small or large. */
  size?: 'small' | 'large';

  /** A table may allow a user to sort contents by clicking on a table header. */
  sortable?: boolean;

  /** A table can specify how it stacks table content responsively. */
  stackable?: boolean;

  /** A table can stripe alternate rows of content with a darker color to increase contrast. */
  striped?: boolean;

  /** A table can be formatted to display complex structured data. */
  structured?: boolean;

  /** Data to be passed to the renderBodyRow function. */
  tableData?: Array<any>;

  /** A table can adjust its text alignment. */
  textAlign?: 'center' | 'left' | 'right';

  /** A table can specify how it stacks table content responsively. */
  unstackable?: boolean;

  /** A table can adjust its text alignment. */
  verticalAlign?: SemanticVERTICALALIGNMENTS;
}

interface TableComponent extends React.StatelessComponent<TableProps> {
  Body: typeof TableBody;
  Cell: typeof TableCell;
  Footer: typeof TableFooter;
  Header: typeof TableHeader;
  HeaderCell: typeof TableHeaderCell;
  Row: typeof TableRow;
}

declare const Table: TableComponent;

export default Table;
