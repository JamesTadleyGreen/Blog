# Creates the image for the blogpost: 

import pandas as pd
from pandas_datareader import data, wb
import datetime
import matplotlib
import plotly.express as px
import plotly.graph_objects as go
import kaleido


start = pd.to_datetime('2020-01-01')
end = pd.to_datetime('today')

tesla_df = data.DataReader('TSLA', 'yahoo', start , end)['Close']

def drawdown(df):
    """Takes in a dataframe and computes drawdown.

    Args:
        df (DataFrame): Close prices for a stock
    """
    df = df/df.iloc[0]
    df_max = df.cummax() 
    return pd.DataFrame({'Value': df, 'Max': df_max})

fig = go.Figure()

fig.add_trace(go.Scatter(
    x=tesla_df.index, 
    y=drawdown(tesla_df)["Value"], 
    mode='lines',
    line=dict(color='#59948E', width=2)))

fig.add_trace(go.Scatter(
    x=tesla_df.index, 
    y=drawdown(tesla_df)['Max'],
    mode='lines',
    line=dict(color='#B9D7D9', width=2)))

fig.update_layout(showlegend=False, 
    template = 'plotly_dark',
    title='Value and drawdown of TSLA over the year 2020',
    yaxis_title="Value of £1 nominal",)

fig.write_image(".png")