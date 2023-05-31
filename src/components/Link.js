import React from 'react'

const renderGlobeCircle = type => onClickGlobeCircle => {
  return (
    <span
      className={'glyph ' + (type == 'global' ? 'global' : 'circle')}
      title="toggle global/single"
      onClick={event => onClickGlobeCircle()}
    />
  )
}

const Link = ({
  type,
  name,
  urlHash,
  onClickLink,
  onDelete,
  onRename,
  onClickGlobeCircle
}) => {
  return (
    <div className="listItem">
      <a
        className="n0"
        title={urlHash}
        href={urlHash}
      >
        {name}
      </a>
      <div className="itemActions">
        <span
          className="glyph delete"
          title="delete"
          onClick={event => onDelete()}
        />
        <span
          className="glyph rename"
          title="rename"
          onClick={event => onRename()}
        />
        {renderGlobeCircle(type)(onClickGlobeCircle)}
        <div className="clear" />
      </div>
    </div>
  )
}

export default Link
