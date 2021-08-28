export const invoiceTemplate = (invoice,customer)=>{
    
    return `  
    <table style="width:100%">
	<tbody>
		<tr>
			<td>
			<table style="width:100%">
				<tbody>
					<tr>
						<td style="text-align:center">
						<h1><strong><span style="color:#2980b9">Sale</span><span style="color:#2ecc71">Soft</span></strong></h1>
						</td>
					</tr>
					<tr>
						<td style="text-align:center"><span style="font-size:16px"><strong>Cửa h&agrave;ng thuốc s&acirc;u Trần Sang</strong></span></td>
					</tr>
					<tr>
						<td style="text-align:center">Địa chỉ: Ki&ecirc;n Th&agrave;nh - Huyện Lục Ngạn, Bắc Giang</td>
					</tr>
					<tr>
						<td style="text-align:center">Điện thoại: 0789808970</td>
					</tr>
				</tbody>
			</table>

			<table border="0" cellpadding="1" cellspacing="1" style="width:100%">
				<tbody>
					<tr>
						<td style="text-align:center">&nbsp;-------------------------------------------------</td>
					</tr>
				</tbody>
			</table>
			</td>
		</tr>
	</tbody>
</table>

<table border="0" cellpadding="1" cellspacing="1" style="width:100%">
	<tbody>
		<tr>
			<td style="text-align:center"><strong>H&Oacute;A ĐƠN B&Aacute;N H&Agrave;NG</strong></td>
		</tr>
	</tbody>
</table>

<table style="width:100%">
	<tbody>
		<tr>
			<td style="text-align:center">Số HĐ: HD003362</td>
		</tr>
		<tr>
			<td style="text-align:center">Ng&agrave;y 01 th&aacute;ng 09 năm 2021</td>
		</tr>
		<tr>
			<td style="text-align:center">&nbsp;</td>
		</tr>
	</tbody>
</table>

<table style="width:100%">
	<tbody>
		<tr>
			<td>Kh&aacute;ch h&agrave;ng: Thẩm L&ecirc;</td>
		</tr>
		<tr>
			<td>SĐT:19008198</td>
		</tr>
		<tr>
			<td>Địa chỉ: Ki&ecirc;n Th&agrave;nh - Huyện Lục Ngạn, Bắc Giang&nbsp;</td>
		</tr>
	</tbody>
</table>

<p>&nbsp;</p>

<table border="0" cellpadding="1" cellspacing="0" style="width:100%">
	<tbody>
		<tr>
			<td style="border-color:black; border-left:0 !important; border-right:0 !important; border-style:solid; border-width:1px"><strong>T&ecirc;n sản phẩm</strong></td>
			<td style="border-bottom:1px solid black; border-left:0px !important; border-right:0px !important; border-top:1px solid black; text-align:center; width:150px"><strong>Đơn gi&aacute;</strong></td>
			<td style="border-color:black; border-left:0 !important; border-right:0 !important; border-style:solid; border-width:1px; text-align:center; width:50px"><strong>SL</strong></td>
			<td style="border-bottom:1px solid black; border-left:0px !important; border-right:0px !important; border-top:1px solid black; text-align:right; width:150px"><strong>Th&agrave;nh tiền</strong></td>
		</tr>
	</tbody>
</table>

<table border="0" cellpadding="1" cellspacing="1" style="width:100%">
	<tbody>
		${invoice ? invoice.products.map((product)=>`<tr>
			<td style="border-bottom:1px dotted #999">${product.name}</td>
			<td style="border-bottom:1px dotted #999;text-align:center; width:150px">${product.price} ${product.price_unit}</td>
			<td style="border-bottom:1px dotted #999;text-align:center; width:50px">${product.count}</td>
			<td style="border-bottom:1px dotted #999;text-align:right; width:150px">${product.price_real}</td>
		</tr>`):""}
	</tbody>
</table>

<p>&nbsp;</p>

<table border="0" cellpadding="1" cellspacing="1" style="width:100%">
	<tbody>
		<tr>
			<td style="text-align:right"><strong>Tổng tiền h&agrave;ng :</strong></td>
			<td style="text-align:right; width:150px"><strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 0</strong></td>
		</tr>
		<tr>
			<td style="text-align:right"><strong>Chiết khấu :</strong></td>
			<td style="text-align:right"><strong>0</strong></td>
		</tr>
		<tr>
			<td style="text-align:right"><strong>Tổng thanh to&aacute;n :</strong></td>
			<td style="text-align:right"><strong>0</strong></td>
		</tr>
	</tbody>
</table>

<table border="0" cellpadding="1" cellspacing="1" style="width:100%">
	<tbody>
		<tr>
			<td style="text-align:center">&nbsp;</td>
		</tr>
		<tr>
			<td style="text-align:center"><em>Cảm ơn v&agrave; hẹn gặp lại !</em></td>
		</tr>
	</tbody>
</table>

<p>&nbsp;</p>

`;
}
