# React Editor

## Architecture
There are three seperate parts for the editor:
1. the visual editor.
    - should have a "value" prop, all changes to the layout are done through this prop.
    - should have an "onChange" prop, changes to the layout from widget editors will trigger this function. 
    - should have a "widgets" prop, an object of widget components. 
    - should have a "editors" prop, an object of widget editor components that are displayed on hover over a widget. this prop will be empty in production.
    - should have an "isEditor" prop, if true it should render the widget editors when a widget is hovered.
    - widget editors should be loaded externally and passed in props because they should not be loaded in production.
2. the props editing panel
    - should have a set of inputs loaded externally and passed in props.
    - should have a "value" prop and an "onChange" prop. 
3. the "add widget" panel
    - responsive tile view
    - should have two modes
        1. click mode, where a widget is selected by clicking on it.
        2. drag mode, from which a widget is dragged to the visual editor.
    - gets an array of "widgets" in props. each widget should have an id, an icon or image, a label and a description.
    - should have "onSelect" prop for when a widget is clicked in click mode.   


The main editor component should be seperate from the widgets, inputs and custom widget editors. 

## Widgets
A widget is a normal component that contains a schema for editing it's props (or a custom editing renderer). this schema can be defined as a static property on the component class or in a seperate file.

#### Layout widgets
* A single layout widget with a custom editor renderer, flex layout, should support dragging items.

#### Simple widgets
* Title
    - text
    - color
    - size
    - font
* Paragraph (HTML editor)
    - html
* Image
    - src
    - width
* Button
    - action
    - background color
    - text color
* Divider
    - color
    - margin top

#### Smart widgets
* Chart
    - data
* Meter
    - value
* Map

## Inputs
Inputs are used to edit the props of a widget.
#### Input props
* value
* onChange
* label
* description

#### Input types
* Boolean (switch)
* Number
* String
* Select
    - options
    - renderItem?
* Color Picker
* Font (Select + renderItem)

