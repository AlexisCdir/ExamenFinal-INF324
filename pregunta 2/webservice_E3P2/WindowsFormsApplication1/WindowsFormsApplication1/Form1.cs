using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WindowsFormsApplication1
{
    public partial class Form1 : Form
    {
        String nombre="", apepaterno="", apematerno="",ci="", nota="";

        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            ServiceReference1.WebServiceSoapClient ws = new ServiceReference1.WebServiceSoapClient();
            DataSet ds = new DataSet();
            ds = ws.mostrarAlumnos();
            dataGridView1.DataSource = ds.Tables[0];
        }

        private void button2_Click(object sender, EventArgs e)
        {
            Form2 f2 = new Form2();
            f2.Show();
        }

        private void button1_Click_1(object sender, EventArgs e)
        {
            Form3 f3 = new Form3(ci);
            f3.Show();
        }

        private void button4_Click(object sender, EventArgs e)
        {
            ServiceReference1.WebServiceSoapClient ws = new ServiceReference1.WebServiceSoapClient();
            DataSet ds = new DataSet();
            ds = ws.mostrarAlumnos();
            dataGridView1.DataSource = ds.Tables[0];
        }

        private void selecciona(object sender, DataGridViewCellMouseEventArgs e)
        {
            int temporal = e.RowIndex;
            ci = dataGridView1.Rows[temporal].Cells[0].Value.ToString();
            nombre = dataGridView1.Rows[temporal].Cells[1].Value.ToString();
            apepaterno = dataGridView1.Rows[temporal].Cells[2].Value.ToString();
            apematerno = dataGridView1.Rows[temporal].Cells[3].Value.ToString();
            nota = dataGridView1.Rows[temporal].Cells[4].Value.ToString();
        }

        private void button3_Click(object sender, EventArgs e)
        {
            Form4 f4 = new Form4(ci,nombre,apepaterno,apematerno,nota);
            f4.Show();
        }
    }
}
