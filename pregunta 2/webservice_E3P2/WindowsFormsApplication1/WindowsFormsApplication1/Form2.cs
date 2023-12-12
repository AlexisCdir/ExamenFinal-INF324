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
    public partial class Form2 : Form
    {
        String nombre = "", apepaterno = "", apematerno = "", ci = "", nota = "";

        public Form2()
        {
            InitializeComponent();
        }

        private void dataGridView1_CellContentClick(object sender, DataGridViewCellEventArgs e)
        {

        }

        private void Form2_Load(object sender, EventArgs e)
        {
        }

        private void label4_Click(object sender, EventArgs e)
        {

        }

        private void button2_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            ci = textBox1.Text.ToString();
            nombre = textBox2.Text.ToString();
            apepaterno = textBox3.Text.ToString();
            apematerno = textBox4.Text.ToString();
            nota = textBox5.Text.ToString();

            ServiceReference1.WebServiceSoapClient ws = new ServiceReference1.WebServiceSoapClient();
            ws.adicionarAlumno(ci,nombre,apepaterno,apematerno,nota);
            this.Close();
        }
    }
}
